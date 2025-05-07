
// Product data for the application
const products = [
  {
    id: 1,
    name: "Bazin turquoise",
    description: "Bazin riche avec motifs géométriques en turquoise brillant, parfait pour vos cérémonies.",
    category: "Bazin",
    image: "/lovable-uploads/720d7d60-5c22-42c1-9fe4-2612e030edca.png",
    manufacturer: "Getzner"
  },
  {
    id: 2,
    name: "Bazin blanc classique",
    description: "Bazin blanc de qualité supérieure avec motifs subtils, élégance intemporelle garantie.",
    category: "Bazin",
    image: "/lovable-uploads/2b043b7f-1388-4942-871b-e4f2485cee9f.png",
    manufacturer: "Getzner"
  },
  {
    id: 3,
    name: "Bazin blanc à motifs",
    description: "Bazin blanc raffiné avec des motifs géométriques délicats, idéal pour les cérémonies.",
    category: "Bazin",
    image: "/lovable-uploads/e8bb10d8-2f9e-4e73-adc5-58f8fddf2f9d.png",
    manufacturer: "Getzner"
  },
  {
    id: 4,
    name: "Bazin vert tendre",
    description: "Bazin vert pâle avec motifs discrets, apportant une touche de fraîcheur à vos tenues.",
    category: "Bazin",
    image: "/lovable-uploads/d25964f1-9bdd-4aa5-bd9e-4a1ba529cc1f.png",
    manufacturer: "Getzner"
  },
  {
    id: 5,
    name: "Bazin rose poudré",
    description: "Bazin rose doux avec motifs circulaires, parfait pour les cérémonies et événements spéciaux.",
    category: "Bazin",
    image: "/lovable-uploads/caa0a6e5-7961-40d5-810f-fab8160ad3c6.png",
    manufacturer: "Getzner"
  },
  {
    id: 6,
    name: "Bazin bleu roi",
    description: "Bazin bleu roi avec motifs géométriques modernes pour des tenues élégantes et contemporaines.",
    category: "Bazin",
    image: "/lovable-uploads/053615dd-56b3-459d-9fda-352241833799.png",
    manufacturer: "Getzner"
  },
  {
    id: 7,
    name: "Bazin marron doré",
    description: "Bazin marron avec reflets dorés et motifs traditionnels, richesse et élégance assurées.",
    category: "Bazin",
    image: "/lovable-uploads/77b293e1-076c-4f2c-895e-940a1839f190.png",
    manufacturer: "Getzner"
  },
  {
    id: 8,
    name: "Bazin orange vif",
    description: "Bazin orange éclatant avec motifs subtils, idéal pour les célébrations hautes en couleur.",
    category: "Bazin",
    image: "/lovable-uploads/f24a9287-fe8d-4c70-85e5-dfae451c9607.png",
    manufacturer: "Getzner"
  },
  {
    id: 9,
    name: "Bazin vert olive",
    description: "Bazin vert olive avec motifs circulaires élégants, une couleur intemporelle pour vos tenues.",
    category: "Bazin",
    image: "/lovable-uploads/b56c0909-9356-493c-975c-68588f5bc8f8.png",
    manufacturer: "Getzner"
  },
  {
    id: 10,
    name: "Bazin doré premium",
    description: "Bazin doré avec motifs carrés sophistiqués, un choix luxueux pour les grandes occasions.",
    category: "Bazin",
    image: "/lovable-uploads/a90f8c4d-52fd-4d95-b967-2b326c67d07e.png",
    manufacturer: "Getzner"
  },
  {
    id: 11,
    name: "Bazin doré texturé",
    description: "Bazin doré avec motifs entrelacés, ajoutant texture et dimension à vos créations.",
    category: "Bazin",
    image: "/lovable-uploads/f880e6b4-9063-446f-b2d4-f4caf60c345c.png",
    manufacturer: "Getzner"
  },
  {
    id: 12,
    name: "Bazin rose fuchsia",
    description: "Bazin rose vif avec motifs circulaires, une couleur éclatante pour des tenues remarquables.",
    category: "Bazin",
    image: "/lovable-uploads/e6528f10-fd78-4235-a166-c527c442c6f4.png",
    manufacturer: "Getzner"
  },
  {
    id: 13,
    name: "Bazin bleu clair",
    description: "Bazin bleu clair avec motifs ondulés, une teinte douce et élégante pour toutes occasions.",
    category: "Bazin",
    image: "/lovable-uploads/a6aed97e-e964-40ae-b5bb-a15508e561eb.png",
    manufacturer: "Getzner"
  },
  {
    id: 14,
    name: "Bazin vert citron",
    description: "Bazin vert citron avec motifs circulaires, apportant fraîcheur et originalité à vos tenues.",
    category: "Bazin",
    image: "/lovable-uploads/c28179e1-bcc9-4fd9-ae2f-8956c50b45e8.png",
    manufacturer: "Getzner"
  },
  {
    id: 15,
    name: "Bazin bleu marine",
    description: "Bazin bleu marine avec motifs géométriques classiques, élégance et distinction assurées.",
    category: "Bazin",
    image: "/lovable-uploads/0bb84338-c661-441e-83f9-e6c2be6f5468.png",
    manufacturer: "Getzner"
  },
  {
    id: 16,
    name: "Bazin bleu turquoise",
    description: "Bazin bleu turquoise avec motifs circulaires, une couleur vibrante pour vos créations.",
    category: "Bazin",
    image: "/lovable-uploads/005b90d9-0ce4-44a0-875c-7ca7c7b61e57.png",
    manufacturer: "Getzner"
  },
  {
    id: 17,
    name: "Tissus brodés de luxe",
    description: "Nos tissus brodés haut de gamme pour vos cérémonies spéciales.",
    category: "Brodé",
    image: "/lovable-uploads/ff4f7ce5-6e8f-46ec-968a-7ec67859a3a2.png"
  },
  {
    id: 18,
    name: "Voiles brodés",
    description: "Des voiles délicats avec des broderies exquises pour une touche d'élégance.",
    category: "Voile",
    image: ""
  },
  {
    id: 19,
    name: "Dentelles premium",
    description: "Dentelles raffinées pour sublimer vos créations les plus élégantes.",
    category: "Dentelle",
    image: ""
  },
  {
    id: 20,
    name: "Tissus pour mariage",
    description: "Collections spéciales pour rendre votre jour J inoubliable.",
    category: "Cérémonie",
    image: ""
  }
];

export default products;
