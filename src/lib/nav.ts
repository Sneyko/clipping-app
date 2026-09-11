import type { LucideIcon } from "lucide-react";
import {
  CircleHelp,
  Flag,
  FolderOpen,
  Layers3,
  LayoutDashboard,
  Ratio,
  Rocket,
  ShieldAlert,
  Users,
  Workflow,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  hint: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Overview", hint: "Vue d’ensemble", icon: LayoutDashboard },
  { href: "/demarrage", label: "Démarrage", hint: "Checklist", icon: Rocket },
  { href: "/slideshow-lab", label: "SlideshowLab", hint: "Montage carrousel", icon: Layers3 },
  { href: "/process-assets", label: "Process Assets", hint: "Kit de sources", icon: FolderOpen },
  { href: "/format", label: "Format", hint: "Règles 9:16", icon: Ratio },
  { href: "/clippers", label: "Clippers", hint: "Classement", icon: Users },
  { href: "/automatiser", label: "Automatiser", hint: "Rituels", icon: Workflow },
  { href: "/poster-us", label: "Poster US", hint: "Marché US", icon: Flag },
  { href: "/shadowban", label: "Shadowban", hint: "Hygiène de compte", icon: ShieldAlert },
  { href: "/questions", label: "Questions", hint: "FAQ", icon: CircleHelp },
];

export function pageMeta(pathname: string) {
  const exact = navItems.find((item) => item.href === pathname);
  if (exact) return exact;
  return navItems[0];
}
