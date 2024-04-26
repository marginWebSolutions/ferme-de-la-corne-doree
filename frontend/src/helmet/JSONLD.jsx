import { Helmet } from 'react-helmet';

export default function JSONLD () {
  const businessInfo = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ferme de la corne dorée",
    "image": "./img/logo_de_la_ferme_de_la_corne_doree.jpg",
    "description": "Vente de fromages de chèvre et équitation Western",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1105 Route de Vergelas",
      "addressLocality": "Saint-Paul-en-Jarez",
      "postalCode": "42740",
      "addressRegion": "Loire, Auvergne-Rhônes-Alpes",
      "addressCountry": "FR"
    },
    "telephone": " +33 0622147380",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "€€",
    "areaServed": ["Saint-Paul-en-Jarez", "parc naturel régional du Pilat", "Loire", "Auvergne-Rhônes-Alpes"],
    "url": "https://www.lacornedoree.fr",
    "sameAs": [
        "https://www.facebook.com/profile.php?id=100067318896608",
        "hhttps://www.facebook.com/profile.php?id=100057409511291",
    ],
    "review": {
        "@type": "Review",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Claire Leguet"
        },
        "reviewBody": "Cela fait deux ans que je monte à cheval avec Julie pour apprendre l’équitation western, après des années à fuir les clubs manquant de bienveillance voire de bientraitance. C’est une petite structure à taille humaine, respectueuse des chevaux comme des cavaliers. J’y ai depuis inscrit mon fils dès ses 5 ans aux cours de poney, où il va avec enthousiasme les mercredi ainsi qu’aux stages durant les vacances scolaires (jeux, balades). Julie est patiente et pédagogue avec tous, et sait s’adapter aux possibilités et besoins de chacun. Les cavaliers d’extérieurs ne sont pas en reste avec de belles balades à faire dans le Pilat, sur des chevaux au pied sûr."
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessInfo)}
      </script>
    </Helmet>
  );
};