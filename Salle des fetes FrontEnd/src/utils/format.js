export function formatReservationStatus(status) {
  const map = {
    en_attente: "en attente",
    confirmee: "confirmée",
    annulee: "annulée",
  };
  return map[status] || status;
}

export function formatBalanceStatus(status) {
  const map = {
    acompte_verse: "acompte versé",
    solde_du: "solde dû",
    solde: "payé",
  };
  return map[status] || status;
}

export function formatEmployerRole(role) {
  const map = {
    serveur: "Serveur",
    chef_de_rang: "Chef de rang",
    maitre_d_hotel: "Maître d'hôtel",
    cuisinier: "Cuisinier",
  };
  return map[role] || role;
}

export function formatEventType(type) {
  const map = {
    mariage: "Mariage",
    anniversaire: "Anniversaire",
    seminaire: "Séminaire",
    autre: "Autre",
  };
  return map[type] || type;
}

export function formatPricingType(type) {
  const map = {
    par_heure: "Par heure",
    par_jour: "Par jour",
  };
  return map[type] || type;
}

export function formatPaymentMethod(method) {
  const map = {
    especes: "Espèces",
    cheque: "Chèque",
    carte: "Carte",
    virement: "Virement",
  };
  return map[method] || method;
}

export function formatNotificationStatus(status) {
  const map = {
    en_attente: "En attente",
    envoyee: "Envoyée",
    echouee: "Échouée",
  };
  return map[status] || status;
}

export function splitFullName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: parts[0] };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export function clientFullName(client) {
  return `${client.firstName || ""} ${client.lastName || ""}`.trim();
}

export function getHourlyRate(employer) {
  return employer.hourlyRate ?? employer.hourly_rate ?? 0;
}

export function formatTime(time) {
  if (!time) return "";
  return String(time).slice(0, 5);
}
