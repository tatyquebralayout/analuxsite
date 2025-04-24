import { TranslationSchema } from '../types'; // Import the main schema type

// Type the main export object to ensure consistency
export const translations: { [key: string]: TranslationSchema } = {
  en: {
    header: {
      home: 'Home',
      services: 'Our Services',
      about: 'About Us',
      partnership: 'Partnership',
      contact: 'Contact',
      bookNow: 'Bookings',
      everyday: 'Every day',
      closeMenu: 'Close Menu',
      openMenu: 'Open Menu',
      languageSelector: 'Select Language',
    },
    hero: {
      headline: 'A Place Filled With Love – for Puppies, Adult & Senior Dogs',
      subtitle: 'Because Your Dog Is Family – and Deserves Only the Best.',
      primaryCTA: 'Schedule Your Visit Today',
      secondaryCTA: "Discover why we're different",
    },
    advantages: {
      title: 'Why AmanluxDog is the right choice for your dog?',
      stories: {
        title: 'Happy Stories',
        description: "Each client is a new family we've won over.",
      },
      years: {
        title: 'Years of Passion for Dogs',
        description: 'Experience you can trust.',
      },
      space: {
        title: 'of Space for Joy',
        description: 'A safe playground for all breeds.',
      },
      attention: {
        title: 'Attention',
        description: 'Always caring, always loving.',
      },
    },
    services: {
      title: 'Care that makes all the difference',
      learnMore: 'Learn More',
      daycare: {
        title: 'Daily Daycare',
        description: "Transform your dog's day into an adventure full of laughter and new friends.",
      },
      hotel: {
        title: 'Dog Hotel',
        description: 'A cozy refuge where your dog rests just like at home.',
      },
      training: {
        title: 'Behavioral Training',
        description: 'Teach good habits with patience and positive rewards.',
      },
      taxi: {
        title: 'Dog Taxi Service',
        description: 'Safe and stress-free transportation to our facilities.',
      },
      grooming: {
        title: 'DogAffair Partnership',
        description: 'Bathing, tosa e cuidados extras para manter seu cão impecável.',
      },
    },
    about: {
      title: 'A place where dogs are treated like family members',
      description:
        "Here at AmanluxDog, we understand that your dog is not just a pet – they are part of your life. That's why we've created a space designed to offer exceptional care, total safety, and unforgettable moments. Licensed and passionate, our team is committed to making every bark a happy one.",
      button: 'Discover Our Space',
    },
    team: {
      title: 'Our Team',
      button: 'Meet Our Team',
      members: [
        {
          name: 'Daniel León',
          role: 'Dog Care & Dog Trainer',
          description:
            "Daniel is a caring, responsible handler who looks after every one of your dog's needs-from grooming and feeding to playtime and daily affection.",
          image: '/src/assets/images/daniel_foto.png',
        },
        {
          name: 'Danillo Pires',
          role: 'Dog Care, Dog Trainer & Accounting',
          description:
            'Danillo runs AmanLux Dogs with extensive experience, strong organizational skills, and a deep love for dogs. As an accomplished caretaker and trainer, he makes sure every service is delivered to the highest standard and with the utmost care.',
          image: '/src/assets/images/danilo_foto.png',
        },
        {
          name: 'Caroline Sousa',
          role: 'Dog Care',
          description:
            'With empathy and dedication, Caroline ensures every dog feels at home with us. Grooming, play sessions, and loving attention are always her top priorities.',
          image: '', // Add image URL later
        },
        {
          name: 'Chamo',
          role: 'CEO | Chihuahua',
          description:
            'Ich bin hier, um zu zeigen, dass Grösse keine Rolle spielt! Bei AmanLux Dogs ist der Spass garantiert – und Bellen ist unsere offizielle Sprache.',
          image: '/src/assets/images/chamo banner_hero.png',
        },
      ],
    },
    testimonials: {
      title: 'What dog owners are saying about us',
      badge: '98% of clients recommend AmanluxDog!',
      items: [
        {
          text: 'My Luna loves AmanluxDog! She comes home tired and happy. Highly recommend!',
          name: 'Maria',
          pet: "Luna's owner 🐕",
        },
        {
          text: 'The taxi service was a lifesaver. My Max loves it there!',
          name: 'João',
          pet: "Max's owner 🐶",
        },
        {
          text: 'My puppy is very shy, but the AmanluxDog team knew exactly how to handle her!',
          name: 'Carla',
          pet: "Mel's owner 🐕",
        },
      ],
    },
    gallery: {
      title: 'Happy moments that tell stories',
      viewImage: 'View image',
      viewAll: 'View Full Gallery',
      instagram: 'Follow us on Instagram',
    },
    faq: {
      title: 'Quick answers to your questions',
      viewAll: 'See All Questions',
      items: [
        {
          question: 'How does the taxi service work?',
          answer:
            'We offer safe and comfortable transportation within our service area. Just schedule at least 24 hours in advance.',
        },
        {
          question: 'What does my dog need to bring?',
          answer:
            'Just a collar, leash, and vaccination documents. We also recommend bringing their favorite toy for added comfort.',
        },
        {
          question: 'Does my dog need to be sociable?',
          answer:
            'Not necessarily. We evaluate each case individually and have separate spaces for dogs that need gradual adaptation.',
        },
      ],
    },
    contact: {
      title: "Contact us – we're ready to help!",
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      dogCount: 'Number of dogs',
      dogSize: 'Dog size',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      service: 'Service of interest',
      submit: 'Send Now',
      promise: 'We promise to respond within 24 hours.',
      or: 'Or call us:',
      successMessage: "Message sent successfully! We'll contact you soon.",
    },
    location: {
      title: "We're here to welcome you and your dog!",
      address: 'Address',
      taxiArea: 'Taxi service area',
      taxiDescription: 'We serve the entire central region and south and west zones of São Paulo.',
      parking: 'Parking',
      parkingDescription: 'Free parking for customers for up to 30 minutes.',
    },
    footer: {
      weekdays: 'Monday to Friday',
      weekends: 'Saturdays and Sundays',
      quickLinks: 'Quick Links',
      followUs: 'Social Media',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      newsletter: 'Newsletter',
      newsletterText: 'Receive exclusive tips and news about dog care!',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      subscribeSuccess: 'Subscription successful!',
      rights: 'All rights reserved.',
    },
    common: {
      priceLabel: 'Price',
      taxInfo: 'Prices excl. VAT',
      learnMore: 'Learn More',
    },
    hundetraining: {
      hero: {
        title: 'Hundetraining',
        subtitle1:
          'Die Körpersprache ist eine der wichtigsten Arten, wie Hunde mit uns und ihrer Umwelt kommunizieren.',
        subtitle2:
          'Unser Ziel beim Training ist es, das gegenseitige Verständnis zwischen Mensch und Hund zu vertiefen, die Sozialisierung zu fördern und ein harmonisches Zusammenleben in verschiedenen Alltagssituationen zu ermöglichen.',
        subtitle3:
          'Mit Geduld, Einfühlungsvermögen und positiver Bestärkung schaffen wir eine vertrauensvolle Beziehung – die beste Grundlage für ein glückliches Miteinander.',
      },
      certificate: {
        imageLabel: 'Trainerzertifikat',
        description: 'Offizielles Trainerzertifikat von Danillo Balbino',
      },
      socialTraining: {
        detailsTitle: '🐕‍🦺 Social Training & Social Walking',
        whenLabel: '🗓 Wann',
        whenValue: 'Termine werden noch bekannt gegeben',
        durationLabel: '⏱ Dauer',
        durationValue: '90 Minuten',
        locationLabel: '📍 Ort',
        locationValue:
          'Verschiedene Locations – je nach Ziel der Einheit mit vielen, wenigen oder keinen Menschen ausser der Gruppe (z. B. Parks, Strassen oder Wälder)',
        groupsLabel: '👥 Gruppen',
        groupsValue: '8–10 Hunde, jeweils mit einer Begleitperson',
        singleSessionLabel: 'Einzelsession',
        singleSessionValue: 'CHF 55.00',
        packageLabel: '10er-Paket',
        packageValue: 'CHF 450.00 (gültig für 6 Monate)',
        contentTitle: 'Warum Social Training & Social Walking so wichtig sind',
        paragraph1:
          'Das Verhalten eines Hundes hängt stark davon ab, wie gut er die soziale Struktur versteht, in der er lebt – also seine Rolle in der Familie, in der Gruppe und in der Gesellschaft.',
        paragraph2:
          'Manche Verhaltensweisen, die für uns Menschen unangenehm oder unerwünscht erscheinen, haben oft tiefere Ursachen, die nicht sofort erkennbar sind.',
        paragraph3:
          'Deshalb ist es entscheidend, dass wir lernen, diese Signale richtig zu deuten – nur so können wir unseren Hunden wirklich helfen.',
        paragraph4: 'Viele Probleme entstehen durch fehlende oder unzureichende Sozialisierung.',
        paragraph5: 'Beispiele dafür sind:',
        listItem1: 'Angst vor anderen Hunden',
        listItem2: 'Unsicherheit gegenüber Kindern, fremden Menschen oder Katzen',
        listItem3: 'Bellen, Fluchtverhalten oder sogar aggressives Verhalten',
        paragraph6:
          'Diese Verhaltensmuster lassen sich nicht durch Strafen, sondern nur durch gezieltes Training und kontinuierliche Sozialisierung verbessern.',
        paragraph7: 'Und je früher man damit beginnt, desto nachhaltiger sind die Ergebnisse.',
        subSection1Title: '🐕 Was ist Social Walking?',
        subSection1Paragraph:
          'Beim Social Walking spaziert der Hund gemeinsam mit seinem Besitzer und anderen Hunden in einer Gruppe – in Umgebungen mit unterschiedlichen Reizen, wie Parks, Straßen oder Wäldern. Der Hund lernt dabei, gelassener auf verschiedene Situationen, Geräusche, Menschen und andere Tiere zu reagieren – immer in sicherer Begleitung.',
        subSection2Title: '🎓 Was ist Social Training?',
        subSection2Paragraph:
          'Das Social Training ist eine ergänzende Trainingseinheit, bei der gezielt am Verhalten des Hundes gearbeitet wird – unter Berücksichtigung seiner Persönlichkeit, seiner Bedürfnisse und seiner Grenzen. Unser Ziel ist es, ein harmonisches Miteinander zu fördern – mit Geduld, Respekt und positiver Verstärkung.',
      },
      impulseControl: {
        detailsTitle: '🧠 Impulse Control & Gehorsamkeitstraining',
        whenLabel: '🗓 Wann',
        whenValue: 'Termine werden noch bekannt gegeben',
        durationLabel: '⏱ Dauer',
        durationValue: '60 Minuten',
        locationLabel: '📍 Ort',
        locationValue:
          'Verschiedene Locations im Kanton Zürich – z. B. Parks, Strassen oder Wälder',
        groupsLabel: '👥 Gruppen',
        groupsValue: '4–6 Hunde, jeweils mit einer Begleitperson',
        singleSessionLabel: 'Einzelsession',
        singleSessionValue: 'CHF 70.00',
        packageLabel: '10er-Paket',
        packageValue: 'CHF 650.00 (gültig für 6 Monate)',
        contentTitle: '🐾 Worum geht es in diesem Training?',
        paragraph1:
          'Ungehorsamkeit und fehlende Impulskontrolle können für Mensch und Hund gleichermassen frustrierend sein. Oft entstehen diese Herausforderungen aus Unsicherheit, mangelnder Orientierung oder fehlendem Training.',
        paragraph2:
          'Viele dieser Probleme lassen sich vermeiden, wenn der Hund lernt, seinem Menschen zu vertrauen, auf ihn zu achten und klare Kommandos zu verstehen.',
        paragraph3: 'In diesem Kurs lernt Ihr Hund,',
        listItem1: 'sich besser zu konzentrieren,',
        listItem2:
          'Impulse zu kontrollieren (z. B. bei Reizen wie anderen Hunden, Katzen oder Geräuschen),',
        listItem3: 'zuverlässig auf Kommandos zu reagieren,',
        listItem4: 'und gelassener in Alltagssituationen zu bleiben.',
        goalTitle: 'Ziel:',
        goalParagraph:
          'Das Ziel ist eine harmonische, sichere und entspannte Beziehung – damit Spaziergänge wieder Freude machen und Vertrauen wächst. 🐕❤️',
      },
      leashTraining: {
        detailsTitle: '🐕‍🦺 Leinenführigkeit – Training für entspannte Spaziergänge',
        durationLabel: 'Dauer',
        durationValue: '90 Minuten',
        participantsLabel: 'Teilnehmer',
        participantsValue: '3 Hunde + 3 Bezugspersonen',
        locationLabel: 'Ort',
        locationValue: 'Verschiedene Locations im Kanton Zürich (Parks, Strassen oder Wälder)',
        stimulusLevelLabel: 'Reizlevel',
        stimulusLevelValue:
          'mit vielen, wenigen oder keinen externen Einflüssen – je nach Trainingsziel',
        singleSessionLabel: 'Einzelsession',
        singleSessionValue: 'CHF 70.00',
        packageLabel: '10er-Paket',
        packageValue: 'CHF 650.00 (gültig für 6 Monate)',
        contentTitle: '🐾 Worum geht es in diesem Kurs?',
        paragraph1:
          'Zieht Ihr Hund an der Leine, obwohl Sie ihn immer wieder bitten, damit aufzuhören?',
        paragraph2:
          'Reagiert er plötzlich stark, wenn er andere Hunde, Katzen, Autos oder Menschen sieht?',
        paragraph3: 'Fühlen Sie sich auf Spaziergängen gestresst oder überfordert?',
        paragraph4: 'Dann ist dieser Kurs genau das Richtige für Sie.',
        paragraph5:
          'Wir helfen Ihnen, die Kontrolle zurückzugewinnen – mit Geduld, positiver Kommunikation und gezielten Techniken. Ihr Hund lernt, sich besser zu konzentrieren, ruhiger zu bleiben und achtsam an Ihrer Seite zu laufen.',
        goalTitle: 'Ziel:',
        goalParagraph:
          'Ein harmonisches, sicheres Miteinander an der Leine – für entspannte und freudige Spaziergänge, bei denen Sie und Ihr Hund wieder im Einklang unterwegs sind. 🐾',
      },
      privateLesson: {
        title: 'Private Lessons',
        // TODO: Add keys for subtitle, paragraphs, price items, etc.
      },
      onlineConsulting: {
        title: 'Online Consultation',
        // TODO: Add keys for subtitle, paragraphs, price items, etc.
      },
      contactForm: {
        title: 'Dog Training Contact Form',
        requiredFields: 'Fields marked with * are required',
        // TODO: Add keys for form labels if needed (Name, Telefonnummer, etc.)
      },
      contactInfo: {
        // TODO: Add key for section title if needed
        locationLabel: 'Location',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Hours',
        // TODO: Add keys for the actual values (Zurich, +41 ..., info@..., Mon-Fri...)
      },
    },
  },
  de: {
    header: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Angebot',
      gallery: 'Galerie',
      testimonials: 'Referenzen',
      faq: 'FAQ',
      contact: 'Kontakt',
      bookNow: 'Termine',
      partnership: 'Partnerschaft',
      everyday: 'Jeden Tag',
    },
    hero: {
      badge: '🐶 Ihre Exklusive Hundetagesstätte in Zürich',
      headline: 'Ein Ort voller Liebe – für Welpen, Erwachsene & Senioren',
      subtitle: 'Denn Ihr Hund ist Familie – und verdient nur das Beste.',
      primaryCTA: 'Erfahren Sie mehr über uns',
    },
    advantages: {
      title: 'Warum AmanluxDog die richtige Wahl für Ihren Hund ist',
      stories: {
        title: 'Glückliche Geschichten',
        description: 'Jeder Kunde ist eine neue Familie, die wir gewinnen.',
      },
      years: {
        title: 'Jahre Hundeleidenschaft',
        description: 'Erfahrung, der Sie vertrauen können.',
      },
      space: {
        title: 'Raum für Freude',
        description: 'Ein sicherer Spielplatz für alle Rassen.',
      },
      attention: {
        title: 'Aufmerksamkeit',
        description: 'Immer pflegend, immer liebend.',
      },
    },
    services: {
      sectionTitle: 'Wir kümmern uns um Ihren besten Freund',
      badge: 'Was wir anbieten',
      daycare: {
        title: 'Tagesbetreuung',
        description:
          'Wir bieten Ihrem vierbeinigen besten Freund ein einzigartiges Erlebnis voller Freude, Komfort und Fürsorge während des Betreuungstages.',
        price: 'Ab CHF 65',
        button: 'Mehr Details',
      },
      hotel: {
        title: 'Übernachtung und Wochenende',
        description:
          'Wenn Ihr Hund über Nacht oder am Wochenende bei uns bleibt, kümmern wir uns liebevoll um alles. Wir stellen bequeme Betten, kuschelige Decken und Spielzeug zur Verfügung – alles, was Ihr Hund für Komfort und Wohlbefinden braucht, ist bereits da. Sie müssen nichts mitbringen – ausser dem gewohnten Futter Ihres Hundes. Denn bei AmanLux Dogs ist für alles gesorgt.',
        price: 'Ab CHF 75',
        button: 'Mehr Details',
      },
      training: {
        title: 'Hundetraining',
        description:
          'Unser Training kombiniert Fachwissen, Geduld und ganz viel Liebe. Ob Welpe oder erwachsener Hund – wir unterstützen Sie dabei, Vertrauen, Kommunikation und gutes Verhalten aufzubauen.',
        price: 'Ab CHF 55',
        button: 'Mehr Details',
      },
      taxi: {
        title: 'Taxi Dog-Service',
        description:
          'Unser Taxi-Dog-Service in Zürich und Umgebung ist im Preis für die Tagesbetreuung und das Hundehotel inbegriffen. Wir verfügen über zwei Fahrzeuge mit festen Routen. Bitte beachten Sie: Am Wochenende und an Feiertagen steht der Service nicht zur Verfügung. Fragen Sie uns gerne, ob Ihre Adresse auf einer unserer Routen liegt. Kunden ausserhalb dieser Gebiete treffen wir gerne an einem zentralen Ort in Zürich. 📍 Unser Standort: Flaach, umgeben von Natur – Ihr Hund wird es lieben!',
        price: 'Inklusive',
        button: 'Mehr Details',
      },
      grooming: {
        title: 'Baden und Bürsten',
        description:
          'Ein sauberes Fell und regelmässige Pflege sind wichtig für das Wohlbefinden Ihres Hundes. Buchen Sie unseren Badeservice dazu!',
        price: 'Ab CHF 20',
        button: 'Mehr Details',
      },
    },
    about: {
      title: 'Über uns',
      description:
        'Willkommen bei AmanLux Dogs – Ihrer exklusiven Hundetagesstätte und Ihrem liebevollen Hundehotel in Zürich, wo jeder Hund als Familienmitglied willkommen ist. Wir bieten nicht einfach nur Betreuung – bei AmanLux Dogs erlebt Ihr Hund einen Tag voller Liebe, Geborgenheit und Abenteuer. In unserem 220 Quadratmeter grossen Haus mit einem liebevoll gestalteten Garten hat Ihr Vierbeiner viel Platz zum Spielen, zur Sozialisation und zum Entdecken. Unsere Arbeit basiert auf Vertrauen, Qualität und Herz. Mit der offiziellen Bewilligung WHgH2021147 des Veterinäramts garantieren wir höchste Standards in Sachen Sicherheit und Wohlbefinden. Bei AmanLux Dogs ist Ihr Hund nie allein – er ist immer in fürsorglichen und erfahrenen Händen. Wir holen Ihren Hund direkt bei Ihnen zu Hause ab und bringen ihn nach einem erlebnisreichen Tag voller Zuwendung und Freude sicher zurück. Denn wir wissen: Ihr Hund ist ein Teil Ihrer Familie – und verdient nur das Beste.',
      badge: 'Mehr als nur eine Hundetagesstätte',
      button: 'Unsere Geschichte',
    },
    team: {
      title: 'Unsere TEAM',
      button: 'Lernen Sie unser Team kennen',
      members: [
        {
          name: 'Daniel León',
          role: 'Hundebetreuung und Hundetrainer',
          description:
            'Daniel ist ein liebevoller und verantwortungsbewusster Betreuer, der sich mit Herz um alle Bedürfnisse Ihres Hundes kümmert – von der Pflege über das Futter bis hin zum Spiel und der täglichen Zuwendung.',
          image: '/src/assets/images/daniel_foto.png',
        },
        {
          name: 'Danillo Pires',
          role: 'Hundebetreuung, Hundetrainer & Buchhaltung',
          description:
            'Danillo leitet AmanLux Dogs mit viel Erfahrung, Organisationstalent und einer tiefen Liebe zu Hunden. Als erfahrener Hundebetreuer und -trainer stellt er sicher, dass alle Dienstleistungen auf höchstem Niveau und mit grösster Sorgfalt ausgeführt werden.',
          image: '/src/assets/images/danilo_foto.png',
        },
        {
          name: 'Caroline Sousa',
          role: 'Hundebetreuung',
          description:
            'Caroline sorgt mit viel Einfühlungsvermögen und Hingabe dafür, dass sich jeder Hund bei uns wohlfühlt. Pflege, Spielzeit und liebevolle Aufmerksamkeit stehen bei ihr an erster Stelle.',
          image: '', // Add image URL later
        },
        {
          name: 'Chamo',
          role: 'CEO | Chihuahua',
          description:
            'Ich bin hier, um zu zeigen, dass Grösse keine Rolle spielt! Bei AmanLux Dogs ist der Spass garantiert – und Bellen ist unsere offizielle Sprache.',
          image: '/src/assets/images/chamo banner_hero.png',
        },
      ],
    },
    testimonials: {
      title: 'Was Hundebesitzer über uns sagen',
      badge: '98% der Kunden empfehlen AmanluxDog!',
      items: [
        {
          text: 'Meine Luna liebt AmanluxDog! Sie kommt müde und glücklich nach Hause. Sehr empfehlenswert!',
          name: 'Maria',
          pet: 'Besitzerin von Luna 🐕',
        },
        {
          text: 'Der Taxi-Service war eine große Hilfe. Mein Max liebt es dort!',
          name: 'João',
          pet: 'Besitzer von Max 🐶',
        },
        {
          text: 'Meine Hündin ist sehr schüchtern, aber das Team von AmanluxDog wusste perfekt mit ihr umzugehen!',
          name: 'Carla',
          pet: 'Besitzerin von Mel 🐕',
        },
      ],
    },
    gallery: {
      sectionTitle: 'Unsere Galerie genießen',
      title: 'Glückliche Momente, die Geschichten erzählen',
      viewImage: 'Bild ansehen',
      viewAll: 'Gesamte Galerie ansehen',
      instagram: 'Folgen Sie uns auf Instagram',
    },
    faq: {
      title: 'Schnelle Antworten auf Ihre Fragen',
      viewAll: 'Alle Fragen anzeigen',
      items: [
        {
          question: 'Wie funktioniert der Taxi-Service?',
          answer:
            'Wir bieten sicheren und komfortablen Transport innerhalb unseres Servicegebiets an. Einfach mindestens 24 Stunden im Voraus buchen.',
        },
        {
          question: 'Was muss mein Hund mitbringen?',
          answer:
            'Nur Halsband, Leine und Impfunterlagen. Wir empfehlen auch, das Lieblingsspielzeug für mehr Komfort mitzubringen.',
        },
        {
          question: 'Muss mein Hund gesellig sein?',
          answer:
            'Nicht unbedingt. Wir bewerten jeden Fall individuell und haben separate Bereiche für Hunde, die eine schrittweise Anpassung benötigen.',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      requiredFields: 'Mit * markierte Felder sind erforderlich',
      name: 'Name *',
      phone: 'Telefonnummer *',
      email: 'Email *',
      dogCount: 'Wie viele hunde? *',
      dogCountOptions: ['1', '2', '3 oder +'],
      dogSize: 'Hundegrosse *',
      dogSizeOptions: ['Kleiner (bis 10 kg)', 'Grosse (ab 10 kg)'],
      service: 'Angebot *',
      serviceOptions: ['Tagesbetreuung', 'Ferienbetreuung', 'Hundetraining'],
      message: 'Nachricht *',
      submit: 'Jetzt Senden',
      promise: 'Wir versprechen, innerhalb von 24 Stunden zu antworten.',
      or: 'Oder rufen Sie uns an:',
      successMessage: 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',
    },
    location: {
      title: 'Wir sind hier, um Sie und Ihren Hund zu empfangen!',
      city: 'Zürich',
      phone: '+41 76 575 09 77',
      email: 'info@amanlux.com',
      hours: 'Mo - Fr / 7:00 - 18:30 Uhr',
      address: 'Adresse',
      taxiArea: 'Servicebereich des Taxis',
      taxiDescription:
        'Wir bedienen das gesamte Zentrum sowie die südlichen und westlichen Gebiete von Zürich.',
      parking: 'Parkplatz',
      parkingDescription: 'Kostenloses Parken für Kunden bis zu 30 Minuten.',
    },
    footer: {
      weekdays: 'Montag bis Freitag',
      weekends: 'Samstag und Sonntag',
      quickLinks: 'Schnelllinks',
      followUs: 'Soziale Medien',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      newsletter: 'Newsletter',
      newsletterText: 'Erhalten Sie exklusive Tipps und Neuigkeiten zur Hundepflege!',
      emailPlaceholder: 'Ihre E-Mail',
      subscribe: 'Abonnieren',
      subscribeSuccess: 'Anmeldung erfolgreich!',
      rights: 'Alle Rechte vorbehalten.',
    },
    common: {
      priceLabel: 'Preis',
      taxInfo: 'Preise exkl. MwSt',
      learnMore: 'Mehr Erfahren',
    },
    hundetraining: {
      hero: {
        title: 'Hundetraining',
        subtitle1:
          'Die Körpersprache ist eine der wichtigsten Arten, wie Hunde mit uns und ihrer Umwelt kommunizieren.',
        subtitle2:
          'Unser Ziel beim Training ist es, das gegenseitige Verständnis zwischen Mensch und Hund zu vertiefen, die Sozialisierung zu fördern und ein harmonisches Zusammenleben in verschiedenen Alltagssituationen zu ermöglichen.',
        subtitle3:
          'Mit Geduld, Einfühlungsvermögen und positiver Bestärkung schaffen wir eine vertrauensvolle Beziehung – die beste Grundlage für ein glückliches Miteinander.',
      },
      certificate: {
        imageLabel: 'Trainerzertifikat',
        description: 'Offizielles Trainerzertifikat von Danillo Balbino',
      },
      socialTraining: {
        detailsTitle: '🐕‍🦺 Social Training & Social Walking',
        whenLabel: '🗓 Wann',
        whenValue: 'Termine werden noch bekannt gegeben',
        durationLabel: '⏱ Dauer',
        durationValue: '90 Minuten',
        locationLabel: '📍 Ort',
        locationValue:
          'Verschiedene Locations – je nach Ziel der Einheit mit vielen, wenigen oder keinen Menschen ausser der Gruppe (z. B. Parks, Strassen oder Wälder)',
        groupsLabel: '👥 Gruppen',
        groupsValue: '8–10 Hunde, jeweils mit einer Begleitperson',
        singleSessionLabel: 'Einzelsession',
        singleSessionValue: 'CHF 55.00',
        packageLabel: '10er-Paket',
        packageValue: 'CHF 450.00 (gültig für 6 Monate)',
        contentTitle: 'Warum Social Training & Social Walking so wichtig sind',
        paragraph1:
          'Das Verhalten eines Hundes hängt stark davon ab, wie gut er die soziale Struktur versteht, in der er lebt – also seine Rolle in der Familie, in der Gruppe und in der Gesellschaft.',
        paragraph2:
          'Manche Verhaltensweisen, die für uns Menschen unangenehm oder unerwünscht erscheinen, haben oft tiefere Ursachen, die nicht sofort erkennbar sind.',
        paragraph3:
          'Deshalb ist es entscheidend, dass wir lernen, diese Signale richtig zu deuten – nur so können wir unseren Hunden wirklich helfen.',
        paragraph4: 'Viele Probleme entstehen durch fehlende oder unzureichende Sozialisierung.',
        paragraph5: 'Beispiele dafür sind:',
        listItem1: 'Angst vor anderen Hunden',
        listItem2: 'Unsicherheit gegenüber Kindern, fremden Menschen oder Katzen',
        listItem3: 'Bellen, Fluchtverhalten oder sogar aggressives Verhalten',
        paragraph6:
          'Diese Verhaltensmuster lassen sich nicht durch Strafen, sondern nur durch gezieltes Training und kontinuierliche Sozialisierung verbessern.',
        paragraph7: 'Und je früher man damit beginnt, desto nachhaltiger sind die Ergebnisse.',
        subSection1Title: '🐕 Was ist Social Walking?',
        subSection1Paragraph:
          'Beim Social Walking spaziert der Hund gemeinsam mit seinem Besitzer und anderen Hunden in einer Gruppe – in Umgebungen mit unterschiedlichen Reizen, wie Parks, Straßen oder Wäldern. Der Hund lernt dabei, gelassener auf verschiedene Situationen, Geräusche, Menschen und andere Tiere zu reagieren – immer in sicherer Begleitung.',
        subSection2Title: '🎓 Was ist Social Training?',
        subSection2Paragraph:
          'Das Social Training ist eine ergänzende Trainingseinheit, bei der gezielt am Verhalten des Hundes gearbeitet wird – unter Berücksichtigung seiner Persönlichkeit, seiner Bedürfnisse und seiner Grenzen. Unser Ziel ist es, ein harmonisches Miteinander zu fördern – mit Geduld, Respekt und positiver Verstärkung.',
      },
      impulseControl: {
        detailsTitle: '🧠 Impulse Control & Gehorsamkeitstraining',
        whenLabel: '🗓 Wann',
        whenValue: 'Termine werden noch bekannt gegeben',
        durationLabel: '⏱ Dauer',
        durationValue: '60 Minuten',
        locationLabel: '📍 Ort',
        locationValue:
          'Verschiedene Locations im Kanton Zürich – z. B. Parks, Strassen oder Wälder',
        groupsLabel: '👥 Gruppen',
        groupsValue: '4–6 Hunde, jeweils mit einer Begleitperson',
        singleSessionLabel: 'Einzelsession',
        singleSessionValue: 'CHF 70.00',
        packageLabel: '10er-Paket',
        packageValue: 'CHF 650.00 (gültig für 6 Monate)',
        contentTitle: '🐾 Worum geht es in diesem Training?',
        paragraph1:
          'Ungehorsamkeit und fehlende Impulskontrolle können für Mensch und Hund gleichermassen frustrierend sein. Oft entstehen diese Herausforderungen aus Unsicherheit, mangelnder Orientierung oder fehlendem Training.',
        paragraph2:
          'Viele dieser Probleme lassen sich vermeiden, wenn der Hund lernt, seinem Menschen zu vertrauen, auf ihn zu achten und klare Kommandos zu verstehen.',
        paragraph3: 'In diesem Kurs lernt Ihr Hund,',
        listItem1: 'sich besser zu konzentrieren,',
        listItem2:
          'Impulse zu kontrollieren (z. B. bei Reizen wie anderen Hunden, Katzen oder Geräuschen),',
        listItem3: 'zuverlässig auf Kommandos zu reagieren,',
        listItem4: 'und gelassener in Alltagssituationen zu bleiben.',
        goalTitle: 'Ziel:',
        goalParagraph:
          'Das Ziel ist eine harmonische, sichere und entspannte Beziehung – damit Spaziergänge wieder Freude machen und Vertrauen wächst. 🐕❤️',
      },
      leashTraining: {
        detailsTitle: '🐕‍🦺 Leinenführigkeit – Training für entspannte Spaziergänge',
        durationLabel: 'Dauer',
        durationValue: '90 Minuten',
        participantsLabel: 'Teilnehmer',
        participantsValue: '3 Hunde + 3 Bezugspersonen',
        locationLabel: 'Ort',
        locationValue: 'Verschiedene Locations im Kanton Zürich (Parks, Strassen oder Wälder)',
        stimulusLevelLabel: 'Reizlevel',
        stimulusLevelValue:
          'mit vielen, wenigen oder keinen externen Einflüssen – je nach Trainingsziel',
        singleSessionLabel: 'Einzelsession',
        singleSessionValue: 'CHF 70.00',
        packageLabel: '10er-Paket',
        packageValue: 'CHF 650.00 (gültig für 6 Monate)',
        contentTitle: '🐾 Worum geht es in diesem Kurs?',
        paragraph1:
          'Zieht Ihr Hund an der Leine, obwohl Sie ihn immer wieder bitten, damit aufzuhören?',
        paragraph2:
          'Reagiert er plötzlich stark, wenn er andere Hunde, Katzen, Autos oder Menschen sieht?',
        paragraph3: 'Fühlen Sie sich auf Spaziergängen gestresst oder überfordert?',
        paragraph4: 'Dann ist dieser Kurs genau das Richtige für Sie.',
        paragraph5:
          'Wir helfen Ihnen, die Kontrolle zurückzugewinnen – mit Geduld, positiver Kommunikation und gezielten Techniken. Ihr Hund lernt, sich besser zu konzentrieren, ruhiger zu bleiben und achtsam an Ihrer Seite zu laufen.',
        goalTitle: 'Ziel:',
        goalParagraph:
          'Ein harmonisches, sicheres Miteinander an der Leine – für entspannte und freudige Spaziergänge, bei denen Sie und Ihr Hund wieder im Einklang unterwegs sind. 🐾',
      },
      privateLesson: {
        title: 'Privatunterricht',
        // TODO: Add keys for subtitle, paragraphs, price items, etc.
      },
      onlineConsulting: {
        title: 'Online-Beratung',
        // TODO: Add keys for subtitle, paragraphs, price items, etc.
      },
      contactForm: {
        title: 'Kontakt für Hundetraining',
        requiredFields: 'Felder mit * sind Pflichtfelder',
        // TODO: Add keys for form labels if needed (Name, Telefonnummer, etc.)
      },
      contactInfo: {
        // TODO: Add key for section title if needed
        locationLabel: 'Ort',
        phoneLabel: 'Telefon',
        emailLabel: 'Email',
        hoursLabel: 'Öffnungszeiten',
        // TODO: Add keys for the actual values (Zurich, +41 ..., info@..., Mon-Fri...)
      },
    },
  },
};
