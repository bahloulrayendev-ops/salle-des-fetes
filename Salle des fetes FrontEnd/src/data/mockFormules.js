const formules = [
  {
    id: 1,
    name: "Essentielle",
    price: 1200,
    unit: "DT",
    description: "Idéale pour les événements intimes.",
    services: [
      "Location de salle (4h)",
      "Sonorisation de base",
      "Décoration simple",
      "Personnel d'accueil",
    ],
  },
  {
    id: 2,
    name: "Prestige",
    price: 2500,
    unit: "DT",
    description: "Notre formule la plus demandée.",
    services: [
      "Location de salle (8h)",
      "Sonorisation & éclairage",
      "Décoration thématique",
      "Traiteur (menu standard)",
      "Photographe (4h)",
    ],
    highlight: true,
  },
  {
    id: 3,
    name: "Royale",
    price: 4500,
    unit: "DT",
    description: "L'expérience complète, sans compromis.",
    services: [
      "Location de salle (journée complète)",
      "Sonorisation & éclairage premium",
      "Décoration florale sur-mesure",
      "Traiteur gastronomique",
      "Photographe + vidéaste",
      "Voiture des mariés",
    ],
  },
];

export default formules;
