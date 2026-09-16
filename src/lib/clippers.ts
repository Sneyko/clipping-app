export type ClipperRow = {
  rank: number;
  name: string;
  code: string;
  you?: boolean;
};

/** Roster vide : pas de preuve sociale inventée. */
export const clippersRoster: ClipperRow[] = [];

const palettes = [
  { bg: "#ECFCCB", fg: "#3F6212" },
  { bg: "#E5E7EB", fg: "#4B5563" },
  { bg: "#F4F6F6", fg: "#0B0D0E" },
  { bg: "#DCFCE7", fg: "#15803D" },
  { bg: "#E8ECEC", fg: "#202426" },
  { bg: "#DBEAFE", fg: "#1D4ED8" },
];

export function clipperInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    const s = parts[0];
    return s.slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function clipperColors(code: string) {
  let h = 0;
  for (const ch of code) h = (h + ch.charCodeAt(0) * 17) % palettes.length;
  return palettes[h];
}
