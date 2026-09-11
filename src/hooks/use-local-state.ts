"use client";

import { useCallback, useSyncExternalStore } from "react";

const listeners = new Map<string, Set<() => void>>();

function emit(key: string) {
  listeners.get(key)?.forEach((listener) => listener());
}

function subscribeToKey(key: string, onStoreChange: () => void) {
  let set = listeners.get(key);
  if (!set) {
    set = new Set();
    listeners.set(key, set);
  }
  set.add(onStoreChange);
  const onStorage = (event: StorageEvent) => {
    if (event.key === key) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    set.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function useLocalState<T>(key: string, initial: T) {
  const fallback = JSON.stringify(initial);
  const subscribe = useCallback(
    (onStoreChange: () => void) => subscribeToKey(key, onStoreChange),
    [key]
  );
  const getSnapshot = useCallback(() => {
    try {
      return window.localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  }, [key, fallback]);
  const getServerSnapshot = useCallback(() => fallback, [fallback]);
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  let value: T;
  try {
    value = JSON.parse(raw) as T;
  } catch {
    value = initial;
  }

  const setValue = useCallback(
    (updater: T | ((prev: T) => T)) => {
      const current = JSON.parse(
        window.localStorage.getItem(key) ?? fallback
      ) as T;
      const next =
        typeof updater === "function"
          ? (updater as (prev: T) => T)(current)
          : updater;
      window.localStorage.setItem(key, JSON.stringify(next));
      emit(key);
    },
    [key, fallback]
  );

  return [value, setValue, true] as const;
}
