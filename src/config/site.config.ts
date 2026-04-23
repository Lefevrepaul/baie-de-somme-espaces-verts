export const siteConfig = {
  company: {
    name: "Baie de Somme Espaces Verts",
    tagline: "Votre paysagiste de confiance dans la Baie de Somme",
    description: "Baie de Somme Espaces Verts vous accompagne dans tous vos projets d'aménagement paysager. Création de jardins, entretien d'espaces verts, taille et élagage dans la région de Famechon et alentours."
  },
  contact: {
    phoneDisplay: "06 71 44 82 29",
    phoneE164: "+33671448229",
    email: "Contactez-nous via notre formulaire"
  },
  location: {
    city: "Famechon",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 49.760312,
      lng: 2.0275816
    },
    villes: [
      "Famechon",
      "Abbeville",
      "Amiens",
      "Doullens",
      "Albert",
      "Corbie",
      "Villers-Bocage",
      "Picquigny",
      "Airaines",
      "Flixecourt",
      "Bernaville",
      "Acheux-en-Amiénois"
    ],
    realisationsVilles: [
      "Famechon",
      "Abbeville",
      "Doullens",
      "Albert",
      "Picquigny",
      "Airaines"
    ],
    temoignagesVilles: [
      "Famechon",
      "Abbeville",
      "Doullens"
    ]
  },
  stats: {
    projectsCount: "25+",
    yearsExperience: "3 ans"
  },
  googleReviews: {
    rating: "5",
    count: 7,
    searchQuery: "Baie+de+Somme+Espaces+Verts+Famechon+avis"
  },
  seo: {
    titleTemplate: "%s | Baie de Somme Espaces Verts - Paysagiste Famechon",
    defaultTitle: "Baie de Somme Espaces Verts - Paysagiste à Famechon (80)",
    metaDescription: "Paysagiste professionnel à Famechon et dans la Somme. Création et entretien de jardins, aménagement paysager. Devis gratuit. Note 5/5 avec 7 avis clients.",
    url: "https://baie-de-somme-espaces-verts.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;