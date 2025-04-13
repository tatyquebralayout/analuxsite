// Portuguese translations
import { TranslationSchema } from './types';

export const pt: TranslationSchema = {
  // Header section
  header: {
    home: 'Home',
    services: 'Serviços',
    about: 'Sobre Nós',
    partnership: 'Parceria',
    contact: 'Contato',
    bookNow: 'Reservar Agora',
    everyday: 'Todos os dias',
  },

  // Hero section
  hero: {
    headline: 'Seu cão merece mais do que cuidados. Ele merece amor.',
    subtitle:
      'Na AmanluxDog, criamos um lar longe de casa, onde seu melhor amigo encontra diversão, segurança e carinho todos os dias.',
    primaryCTA: 'Agende Sua Visita Hoje',
    secondaryCTA: 'Descubra por que somos diferentes',
  },

  // Advantages section
  advantages: {
    title: 'Por que a AmanluxDog é a escolha certa para o seu cão?',
    stories: {
      title: 'Histórias Felizes',
      description: 'Cada cliente é uma nova família que conquistamos.',
    },
    years: {
      title: 'Anos de Paixão por Cães',
      description: 'Experiência que você pode confiar.',
    },
    space: {
      title: 'de Espaço para Alegria',
      description: 'Um playground seguro para todas as raças.',
    },
    attention: {
      title: 'Atenção',
      description: 'Sempre cuidando, sempre amando.',
    },
  },

  // Services section
  services: {
    title: 'Cuidados que fazem toda a diferença',
    learnMore: 'Saiba Mais',
    daycare: {
      title: 'Creche Diária',
      description: 'Transforme o dia do seu cão em uma aventura cheia de risos e novos amigos.',
    },
    hotel: {
      title: 'Hotel para Cães',
      description: 'Um refúgio acolhedor, onde seu cão descansa como em casa.',
    },
    training: {
      title: 'Treinamento Comportamental',
      description: 'Ensine bons hábitos com paciência e recompensas positivas.',
    },
    taxi: {
      title: 'Serviço de Táxi para Cães',
      description: 'Transporte seguro e sem estresse até nossas instalações.',
    },
    grooming: {
      title: 'Parceria DogAffair',
      description: 'Banho, tosa e cuidados extras para manter seu cão impecável.',
    },
  },

  // About Us section
  about: {
    title: 'Um lugar onde os cães são tratados como membros da família',
    description:
      'Aqui na AmanluxDog, entendemos que seu cão não é apenas um animal de estimação – ele é parte da sua vida. Por isso, criamos um espaço projetado para oferecer cuidados excepcionais, segurança total e momentos inesquecíveis. Licenciados e apaixonados, nossa equipe está comprometida em fazer com que cada latido seja de felicidade.',
    button: 'Conheça Nosso Espaço',
  },

  // Team section
  team: {
    title: 'Gente que ama cães tanto quanto você',
    button: 'Conheça Nossa Equipe',
    ceo: {
      name: 'Chamo',
      role: 'CEO',
      description: 'Fundador e visionário apaixonado por cães desde a infância.',
    },
    manager: {
      name: 'Ana Silva',
      role: 'Gerente de Cuidados',
      description: 'Especialista em comportamento canino, dedicada a entender cada personalidade.',
    },
    trainer: {
      name: 'Rafael Costa',
      role: 'Treinador',
      description: 'Mestre em ensinar com paciência, usando métodos positivos e eficazes.',
    },
  },

  // Testimonials section
  testimonials: {
    title: 'O que os donos de cães estão dizendo sobre nós',
    badge: '98% dos clientes recomendam a AmanluxDog!',
    items: [
      {
        text: 'Minha Luna ama a AmanluxDog! Ela volta para casa cansada e feliz. Recomendo muito!',
        name: 'Maria',
        pet: 'dona da Luna 🐕',
      },
      {
        text: 'O serviço de táxi foi uma mão na roda. Meu Max adora lá!',
        name: 'João',
        pet: 'dono do Max 🐶',
      },
      {
        text: 'Minha cachorrinha é muito tímida, mas a equipe da AmanluxDog soube lidar com ela perfeitamente!',
        name: 'Carla',
        pet: 'dona da Mel 🐕',
      },
    ],
  },

  // Gallery section
  gallery: {
    title: 'Momentos felizes que contam histórias',
    viewImage: 'Ver imagem',
    viewAll: 'Ver Toda a Galeria',
    instagram: 'Siga-nos no Instagram',
  },

  // FAQ section
  faq: {
    title: 'Respostas rápidas para suas dúvidas',
    viewAll: 'Veja Todas as Perguntas',
    items: [
      {
        question: 'Como funciona o serviço de táxi?',
        answer:
          'Oferecemos transporte seguro e confortável dentro da zona de atuação. Basta agendar com pelo menos 24h de antecedência.',
      },
      {
        question: 'O que meu cão precisa levar?',
        answer:
          'Apenas coleira, guia e documentos de vacinação. Recomendamos também trazer o brinquedo favorito para maior conforto.',
      },
      {
        question: 'Meu cão precisa ser sociável?',
        answer:
          'Não necessarily. Avaliamos cada caso individualmente e temos espaços separados para cães que precisam de adaptação gradual.',
      },
    ],
  },

  // Contact section
  contact: {
    title: 'Fale conosco – estamos prontos para ajudar!',
    name: 'Nome',
    phone: 'Telefone',
    email: 'E-mail',
    dogCount: 'Número de cães',
    dogSize: 'Tamanho do cão',
    small: 'Pequeno',
    medium: 'Médio',
    large: 'Grande',
    service: 'Serviço de interesse',
    submit: 'Enviar Agora',
    promise: 'Prometemos responder em até 24 horas.',
    or: 'Ou ligue para nós:',
    successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
  },

  // Location section
  location: {
    title: 'Estamos aqui para receber você e seu cão!',
    address: 'Endereço',
    taxiArea: 'Área de atuação do táxi',
    taxiDescription: 'Atendemos toda a região central e zonas sul e oeste de São Paulo.',
    parking: 'Estacionamento',
    parkingDescription: 'Estacionamento gratuito para clientes por até 30 minutos.',
  },

  // Footer section
  footer: {
    weekdays: 'Segunda a Sexta',
    weekends: 'Sábados e Domingos',
    quickLinks: 'Links Rápidos',
    followUs: 'Redes Sociais',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    newsletter: 'Newsletter',
    newsletterText: 'Receba dicas exclusivas e novidades sobre cuidados para cães!',
    emailPlaceholder: 'Seu e-mail',
    subscribe: 'Inscrever-se',
    subscribeSuccess: 'Inscrição realizada com sucesso!',
    rights: 'Todos os direitos reservados.',
  },
};
