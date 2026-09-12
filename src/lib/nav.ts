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
  { href: "/demarrage", label: "Démarrage", hint: "Système + checklist", icon: Rocket },
  { href: "/slideshow-lab", label: "SlideshowLab", hint: "Squelettes + batch", icon: Layers3 },
  { href: "/process-assets", label: "Process Assets", hint: "Footage pack", icon: FolderOpen },
  { href: "/format", label: "Format", hint: "Mécanismes", icon: Ratio },
  { href: "/clippers", label: "Clippers", hint: "Revue avant paiement", icon: Users },
  { href: "/automatiser", label: "Automatiser", hint: "Jobs + tuer/doubler", icon: Workflow },
  { href: "/poster-us", label: "Poster US", hint: "Marché US", icon: Flag },
  { href: "/shadowban", label: "Shadowban", hint: "Hygiène de compte", icon: ShieldAlert },
  { href: "/questions", label: "Questions", hint: "FAQ", icon: CircleHelp },
];

export function pageMeta(pathname: string) {
  const exact = navItems.find((item) => item.href === pathname);
  if (exact) return exact;
  return navItems[0];
}
