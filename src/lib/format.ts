export function formatEuro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}

export function statusLabel(status: string) {
  switch (status) {
    case "valide":
    case "versé":
    case "actif":
      return status === "versé" ? "Versé" : status === "actif" ? "Actif" : "Validé";
    case "en_revue":
      return "En revue";
    case "refuse":
      return "Refusé";
    case "pause":
      return "Pause";
    case "nouveau":
      return "Nouveau";
    case "demande":
      return "Demande envoyée";
    default:
      return status;
  }
}
