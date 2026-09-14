import type { LucideIcon } from "lucide-react";
import {
  CircleHelp,
  Globe,
  House,
  Layers,
  PlaySquare,
  Plus,
  Shield,
  Users,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  hint: string;
  icon: LucideIcon | "tiktok" | "process";
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Overview", hint: "Vue d’ensemble", icon: House },
  { href: "/demarrage", label: "Démarrage", hint: "Guide clipper", icon: PlaySquare },
  { href: "/slideshow-lab", label: "SlideshowLab", hint: "Structures officielles", icon: Layers },
  { href: "/process-assets", label: "Process Assets", hint: "Fichiers officiels", icon: "process" },
  { href: "/format", label: "Format", hint: "Bibliothèque", icon: "tiktok" },
  { href: "/clippers", label: "Clippers", hint: "Classement", icon: Users },
  { href: "/automatiser", label: "Automatiser", hint: "Cadence", icon: Plus },
];

export const utilesNav: NavItem[] = [
  { href: "/poster-us", label: "Poster US", hint: "Documentation", icon: Globe },
  { href: "/shadowban", label: "Shadowban", hint: "Hygiène de compte", icon: Shield },
  { href: "/questions", label: "Questions", hint: "FAQ", icon: CircleHelp },
];

export const navItems: NavItem[] = [...mainNav, ...utilesNav];

export const navGroups: { label: string | null; items: NavItem[] }[] = [
  { label: null, items: mainNav },
  { label: "UTILITES", items: utilesNav },
];

export function pageMeta(pathname: string) {
  const exact = navItems.find((item) => item.href === pathname);
  if (exact) return exact;
  return navItems[0];
}
