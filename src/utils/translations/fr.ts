// French translations
import { TranslationSchema } from './types';

export const fr: TranslationSchema = {
  // Header section
  header: {
    home: "Accueil",
    services: "Services",
    about: "À Propos",
    partnership: "Partenariat",
    contact: "Contact",
    bookNow: "Réserver Maintenant",
    everyday: "Tous les jours"
  },
  
  // Hero section
  hero: {
    headline: "Votre chien mérite plus que des soins. Il mérite de l'amour.",
    subtitle: "Chez AmanluxDog, nous créons un foyer loin de chez vous, où votre meilleur ami trouve du plaisir, de la sécurité et de l'affection tous les jours.",
    primaryCTA: "Planifiez Votre Visite Aujourd'hui",
    secondaryCTA: "Découvrez pourquoi nous sommes différents"
  },
  
  // Advantages section
  advantages: {
    title: "Pourquoi AmanluxDog est le bon choix pour votre chien ?",
    stories: {
      title: "Histoires Heureuses",
      description: "Chaque client est une nouvelle famille que nous avons conquise."
    },
    years: {
      title: "Années de Passion pour les Chiens",
      description: "Une expérience en laquelle vous pouvez avoir confiance."
    },
    space: {
      title: "d'Espace pour la Joie",
      description: "Une aire de jeux sécurisée pour toutes les races."
    },
    attention: {
      title: "Attention",
      description: "Toujours en train de prendre soin, toujours en train d'aimer."
    }
  },
  
  // Services section
  services: {
    title: "Des soins qui font toute la différence",
    learnMore: "En Savoir Plus",
    daycare: {
      title: "Garderie Quotidienne",
      description: "Transformez la journée de votre chien en une aventure pleine de rires et de nouveaux amis."
    },
    hotel: {
      title: "Hôtel pour Chiens",
      description: "Un refuge confortable, où votre chien se repose comme à la maison."
    },
    training: {
      title: "Entraînement Comportemental",
      description: "Enseignez de bonnes habitudes avec patience et récompenses positives."
    },
    taxi: {
      title: "Service de Taxi pour Chiens",
      description: "Transport sûr et sans stress jusqu'à nos installations."
    },
    grooming: {
      title: "Partenariat DogAffair",
      description: "Bain, toilettage et soins supplémentaires pour garder votre chien impeccable."
    }
  },
  
  // About Us section
  about: {
    title: "Un endroit où les chiens sont traités comme des membres de la famille",
    description: "Ici à AmanluxDog, nous comprenons que votre chien n'est pas seulement un animal de compagnie – il fait partie de votre vie. C'est pourquoi nous avons créé un espace conçu pour offrir des soins exceptionnels, une sécurité totale et des moments inoubliables. Licenciés et passionnés, notre équipe s'engage à faire en sorte que chaque aboiement soit un aboiement de bonheur.",
    button: "Découvrez Notre Espace"
  },
  
  // Team section
  team: {
    title: "Des personnes qui aiment les chiens autant que vous",
    button: "Rencontrez Notre Équipe",
    ceo: {
      name: "Chamo",
      role: "PDG",
      description: "Fondateur et visionnaire passionné par les chiens depuis l'enfance."
    },
    manager: {
      name: "Ana Silva",
      role: "Responsable des Soins",
      description: "Spécialiste du comportement canin, dédiée à comprendre chaque personnalité."
    },
    trainer: {
      name: "Rafael Costa",
      role: "Entraîneur",
      description: "Maître dans l'enseignement avec patience, utilisant des méthodes positives et efficaces."
    }
  },
  
  // Testimonials section
  testimonials: {
    title: "Ce que disent les propriétaires de chiens à propos de nous",
    badge: "98% des clients recommandent AmanluxDog !",
    items: [
      {
        text: "Ma Luna adore AmanluxDog ! Elle rentre à la maison fatiguée et heureuse. Je recommande vivement !",
        name: "Maria",
        pet: "propriétaire de Luna 🐕"
      },
      {
        text: "Le service de taxi était un sauveur. Mon Max adore être là-bas !",
        name: "João",
        pet: "propriétaire de Max 🐶"
      },
      {
        text: "Mon chiot est très timide, mais l'équipe d'AmanluxDog a su exactement comment la gérer !",
        name: "Carla",
        pet: "propriétaire de Mel 🐕"
      }
    ]
  },
  
  // Gallery section
  gallery: {
    title: "Des moments heureux qui racontent des histoires",
    description: "Moments spéciaux capturés dans notre garderie et hôtel pour chiens. Chaque image raconte une histoire de joie et de soin.",
    viewImage: "Voir l'image",
    viewAll: "Voir la Galerie Complète",
    instagram: "Suivez-nous sur Instagram"
  },
  
  // FAQ section
  faq: {
    title: "Réponses rapides à vos questions",
    viewAll: "Voir Toutes les Questions",
    items: [
      {
        question: "Comment fonctionne le service de taxi ?",
        answer: "Nous offrons un transport sûr et confortable dans notre zone de service. Il suffit de planifier au moins 24 heures à l'avance."
      },
      {
        question: "Que doit apporter mon chien ?",
        answer: "Juste un collier, une laisse et des documents de vaccination. Nous recommandons également d'apporter son jouet préféré pour plus de confort."
      },
      {
        question: "Mon chien doit-il être sociable ?",
        answer: "Pas nécessairement. Nous évaluons chaque cas individuellement et avons des espaces séparés pour les chiens qui ont besoin d'une adaptation progressive."
      }
    ]
  },
  
  // Contact section
  contact: {
    title: "Contactez-nous – nous sommes prêts à aider !",
    name: "Nom",
    phone: "Téléphone",
    email: "Email",
    dogCount: "Nombre de chiens",
    dogSize: "Taille du chien",
    small: "Petit",
    medium: "Moyen",
    large: "Grand",
    service: "Service d'intérêt",
    submit: "Envoyer Maintenant",
    promise: "Nous promettons de répondre dans les 24 heures.",
    or: "Ou appelez-nous :",
    successMessage: "Message envoyé avec succès ! Nous vous contacterons bientôt."
  },
  
  // Location section
  location: {
    title: "Nous sommes ici pour vous accueillir, vous et votre chien !",
    address: "Adresse",
    taxiArea: "Zone de service de taxi",
    taxiDescription: "Nous desservons toute la région centrale et les zones sud et ouest de Zurich.",
    parking: "Stationnement",
    parkingDescription: "Stationnement gratuit pour les clients jusqu'à 30 minutes."
  },
  
  // Footer section
  footer: {
    weekdays: "Lundi à Vendredi",
    weekends: "Samedis et Dimanches",
    quickLinks: "Liens Rapides",
    followUs: "Réseaux Sociaux",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    newsletter: "Newsletter",
    newsletterText: "Recevez des conseils exclusifs et des nouvelles sur les soins des chiens !",
    emailPlaceholder: "Votre email",
    subscribe: "S'abonner",
    subscribeSuccess: "Abonnement réussi !",
    rights: "Tous droits réservés."
  },
  
  // Partnership page - placeholder structure
  partnership: {
    // To be completed later
  },
  
  // Services pages - placeholder structures
  servicesPages: {
    daycare: {
      // To be completed later
    },
    hotel: {
      // To be completed later
    },
    training: {
      // To be completed later
    },
    taxi: {
      // To be completed later
    },
    grooming: {
      // To be completed later
    }
  }
};