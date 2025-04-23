// German translations
import { TranslationSchema } from './types';

export const de: TranslationSchema = {
  // Header section
  header: {
    home: 'Home',
    services: 'Angebot',
    about: 'Über uns',
    partnership: 'Partnerschaft',
    contact: 'Termine',
    bookNow: 'Termine',
    everyday: 'Jeden Tag',
    languages: 'Sprachen',
    appointments: 'Termine',
    closeMenu: 'Menü schließen',
    openMenu: 'Menü öffnen',
    languageSelector: 'Sprache auswählen',
  },

  // Hero section
  hero: {
    headline: 'Ein Ort voller Liebe – für Welpen, Erwachsene und Seniorenhunde',
    subtitle: 'Weil Ihr Hund ein Familienmitglied ist – und nur das Beste verdient.',
    primaryCTA: 'Zur Seite Hundebetreuung',
    secondaryCTA: 'Zur Seite Hundetraining',
  },

  // About section
  about: {
    title: 'Über uns',
    description:
      'Willkommen bei AmanLux Dogs – Ihrer exklusiven Hundetagesstätte und Ihrem liebevollen Hundehotel in Zürich, wo jeder Hund als Familienmitglied willkommen ist. Wir bieten nicht einfach nur Betreuung – bei AmanLux Dogs erlebt Ihr Hund einen Tag voller Liebe, Geborgenheit und Abenteuer. In unserem 220 Quadratmeter grossen Haus mit einem liebevoll gestalteten Garten hat Ihr Vierbeiner viel Platz zum Spielen, zur Sozialisation und zum Entdecken. Unsere Arbeit basiert auf Vertrauen, Qualität und Herz. Mit der offiziellen Bewilligung WHgH2021147 des Veterinäramts garantieren wir höchste Standards in Sachen Sicherheit und Wohlbefinden. Bei AmanLux Dogs ist Ihr Hund nie allein – er ist immer in fürsorglichen und erfahrenen Händen. Wir holen Ihren Hund direkt bei Ihnen zu Hause ab und bringen ihn nach einem erlebnisreichen Tag voller Zuwendung und Freude sicher zurück. Denn wir wissen: Ihr Hund ist ein Teil Ihrer Familie – und verdient nur das Beste.',
    button: 'Entdecken Sie unseren Raum',
  },

  // Services section
  services: {
    title: 'Angebot',
    learnMore: 'Mehr Erfahren',
    daycare: {
      title: 'Tagesbetreuung',
      description:
        'Wir bieten Ihrem vierbeinigen besten Freund ein einzigartiges Erlebnis voller Freude, Komfort und Fürsorge während des Betreuungstages.',
      button: 'Zur Seite Hundebetreuung',
    },
    hotel: {
      title: 'Übernachtung und Wochenende',
      description:
        'Wenn Ihr Hund über Nacht oder am Wochenende bei uns bleibt, kümmern wir uns liebevoll um alles. Wir stellen bequeme Betten, kuschelige Decken und Spielzeug zur Verfügung – alles, was Ihr Hund für Komfort und Wohlbefinden braucht, ist bereits da. Sie müssen nichts mitbringen – ausser dem gewohnten Futter Ihres Hundes. Denn bei AmanLux Dogs ist für alles gesorgt.',
      button: 'Zur Seite Hundebetreuung',
    },
    training: {
      title: 'Hundetraining',
      description:
        'Unser Training kombiniert Fachwissen, Geduld und ganz viel Liebe. Ob Welpe oder erwachsener Hund – wir unterstützen Sie dabei, Vertrauen, Kommunikation und gutes Verhalten aufzubauen.',
      button: 'Zur Seite Hundebetreuung',
    },
  },

  // Team section
  team: {
    title: 'Unsere TEAM',
    button: 'Lernen Sie unser Team kennen',
    members: [
      {
        name: 'Daniel León',
        role: 'Hundebetreuung und Hundetrainer',
        description:
          'Daniel ist ein liebevoller und verantwortungsbewusster Betreuer, der sich mit Herz um alle Bedürfnisse Ihres Hundes kümmert – von der Pflege über das Futter bis hin zum Spiel und der täglichen Zuwendung.',
        image: '', // Add image URL here later
      },
      {
        name: 'Danillo Pires',
        role: 'Hundebetreuung, Hundetrainer & Buchhaltung',
        description:
          'Danillo leitet AmanLux Dogs mit viel Erfahrung, Organisationstalent und einer tiefen Liebe zu Hunden. Als erfahrener Hundebetreuer und -trainer stellt er sicher, dass alle Dienstleistungen auf höchstem Niveau und mit grösster Sorgfalt ausgeführt werden.',
        image: '', // Add image URL here later
      },
      {
        name: 'Caroline Sousa',
        role: 'Hundebetreuung',
        description:
          'Caroline sorgt mit viel Einfühlungsvermögen und Hingabe dafür, dass sich jeder Hund bei uns wohlfühlt. Pflege, Spielzeit und liebevolle Aufmerksamkeit stehen bei ihr an erster Stelle.',
        image: '', // Add image URL here later
      },
      {
        name: 'Chamo',
        role: 'CEO | Chihuahua',
        description:
          'Ich bin hier, um zu zeigen, dass Grösse keine Rolle spielt! Bei AmanLux Dogs ist der Spass garantiert – und Bellen ist unsere offizielle Sprache.',
        image: '', // Add image URL here later
      },
    ],
  },

  // Gallery section
  gallery: {
    sectionTitle: 'Enjoy Our Galery',
    title: 'Glückliche Momente, die Geschichten erzählen',
    viewImage: 'Bild anzeigen',
    viewAll: 'Gesamte Galerie anzeigen',
    instagram: 'Folgen Sie uns auf Instagram',
  },

  // Contact section
  contact: {
    title: 'Kontakt',
    requiredFields: 'Fields marked with an * are required',
    name: 'Name *',
    phone: 'Telefonnummer *',
    email: 'Email *',
    dogCount: 'Wie viele hunde? *',
    dogCountOptions: ['1', '2', '3 oder +'],
    dogSize: 'Hundegrosse *',
    dogSizeOptions: ['Kleiner (bis 10 kg)', 'Grosse (ab 10 kg)'],
    service: 'Angebot *',
    serviceOptions: ['Tagesbetreuung', 'Ferienbetreuung', 'Hundetraining'],
    small: 'Klein',
    medium: 'Mittel',
    large: 'Groß',
    submit: 'Jetzt Senden',
    promise: 'Wir antworten innerhalb von 24 Stunden.',
    or: 'Oder rufen Sie uns an:',
    successMessage: 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',
    message: 'Nachricht *',
  },

  // Location section
  location: {
    title: 'Wir sind hier, um Sie und Ihren Hund zu empfangen!',
    address: 'Adresse',
    taxiArea: 'Servicebereich des Taxis',
    taxiDescription:
      'Wir bedienen das gesamte Zentrum sowie die südlichen und westlichen Teile von Zürich.',
    parking: 'Parkplatz',
    parkingDescription: 'Kostenlose Parkplätze für Kunden bis zu 30 Minuten.',
    city: 'Zürich',
    phone: '+41 76 575 09 77',
    email: 'info@amanlux.com',
    hours: 'Mon - Fre / 7:00 AM - 6:30 PM',
  },

  // Footer section
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

  // Hundebetreuung page
  hundebetreuungPage: {
    intro: {
      p1: 'Unser Ziel ist es, Ihren Hund mit der gleichen Fürsorge und Zuneigung zu betreuen, die er auch von Ihnen kennt. So können Sie entspannt arbeiten, reisen oder unterwegs sein – in dem Wissen, dass Ihr Vierbeiner in besten Händen ist.',
      p2: 'Mit individueller und liebevoller Betreuung sorgen wir dafür, dass sich Ihr Hund bei uns sicher, geborgen und rundum wohlfühlt.',
      p3: 'Wir kümmern uns um alle seine Bedürfnisse – mit Aufmerksamkeit, Geduld und ganz viel Herz.',
    },
    pricing: {
      title: 'Preise',
      daycareTitle: 'Preise – Tagesbetreuung',
      pricePerDay: '87 CHF pro Tag',
      vatInfo: '(Preise exkl. MwSt)',
      pickupInfoTitle: 'Abholung und Rückgabe:',
      pickupLine1: 'Die Abholung beginnt ab 07:00 Uhr.',
      pickupLine2:
        'Die genaue Uhrzeit hängt von der täglichen Route, der Anzahl der Hunde, dem Verkehrsaufkommen und der individuellen Betreuungszeit ab.',
      pickupLine3:
        'Aus Sicherheitsgründen holen wir jeden Hund direkt an Ihrer Haustür ab – daher kann es zu leichten Zeitabweichungen kommen.',
      pickupLine4:
        'Sobald wir unterwegs sind, erhalten Sie eine kurze Nachricht mit der voraussichtlichen Ankunftszeit.',
      pickupLine5:
        'Falls Sie nicht zu Hause sind, können Sie uns einfach den Schlüssel hinterlassen – wir holen Ihren Hund sicher ab und bringen ihn ebenso zuverlässig wieder zurück.',
    },
  },

  // Hundetraining page
  hundetrainingPage: {
    intro: {
      p1: 'Die Körpersprache ist eine der wichtigsten Arten, wie Hunde mit uns und ihrer Umwelt kommunizieren.',
      p2: 'Unser Ziel beim Training ist es, das gegenseitige Verständnis zwischen Mensch und Hund zu vertiefen, die Sozialisierung zu fördern und ein harmonisches Zusammenleben in verschiedenen Alltagssituationen zu ermöglichen.',
      p3: 'Mit Geduld, Einfühlungsvermögen und positiver Bestärkung schaffen wir eine vertrauensvolle Beziehung – die beste Grundlage für ein glückliches Miteinander.',
    },
    socialTraining: {
      title: 'Social Training und Social Walking',
      detailsTitle: '🐕‍🦺 Social Training & Social Walking',
      when: '🗓 Wann: Termine werden noch bekannt gegeben',
      duration: '⏱ Dauer: 90 Minuten',
      location:
        '📍 Ort: Verschiedene Locations – je nach Ziel der Einheit mit vielen, wenigen oder keinen Menschen ausser der Gruppe (z. B. Parks, Strassen oder Wälder)',
      groups: '👥 Gruppen: 8–10 Hunde, jeweils mit einer Begleitperson',
      pricingTitle: '💰 Preis:',
      priceSingle: 'Einzelsession: CHF 55.00',
      pricePackage: '10er-Paket: CHF 450.00 (gültig für 6 Monate)',
      vatInfo: 'Preise exkl. MwSt',
      descriptionTitle: 'Warum Social Training & Social Walking so wichtig sind',
      descriptionP1:
        'Das Verhalten eines Hundes hängt stark davon ab, wie gut er die soziale Struktur versteht, in der er lebt – also seine Rolle in der Familie, in der Gruppe und in der Gesellschaft.',
      descriptionP2:
        'Manche Verhaltensweisen, die für uns Menschen unangenehm oder unerwünscht erscheinen, haben oft tiefere Ursachen, die nicht sofort erkennbar sind.',
      descriptionP3:
        'Deshalb ist es entscheidend, dass wir lernen, diese Signale richtig zu deuten – nur so können wir unseren Hunden wirklich helfen.',
      descriptionP4: 'Viele Probleme entstehen durch fehlende oder unzureichende Sozialisierung.',
      descriptionExamplesTitle: 'Beispiele dafür sind:',
      descriptionExamples: [
        '– Angst vor anderen Hunden',
        '– Unsicherheit gegenüber Kindern, fremden Menschen oder Katzen',
        '– Bellen, Fluchtverhalten oder sogar aggressives Verhalten',
      ],
      descriptionP5:
        'Diese Verhaltensmuster lassen sich nicht durch Strafen, sondern nur durch gezieltes Training und kontinuierliche Sozialisierung verbessern.',
      descriptionP6: 'Und je früher man damit beginnt, desto nachhaltiger sind die Ergebnisse.',
      socialWalkingTitle: '🐕 Was ist Social Walking?',
      socialWalkingText:
        'Beim Social Walking spaziert der Hund gemeinsam mit seinem Besitzer und anderen Hunden in einer Gruppe – in Umgebungen mit unterschiedlichen Reizen, wie Parks, Straßen oder Wäldern. Der Hund lernt dabei, gelassener auf verschiedene Situationen, Geräusche, Menschen und andere Tiere zu reagieren – immer in sicherer Begleitung.',
      socialTrainingDefTitle: '🎓 Was ist Social Training?',
      socialTrainingDefText:
        'Das Social Training ist eine ergänzende Trainingseinheit, bei der gezielt am Verhalten des Hundes gearbeitet wird – unter Berücksichtigung seiner Persönlichkeit, seiner Bedürfnisse und seiner Grenzen. Unser Ziel ist es, ein harmonisches Miteinander zu fördern – mit Geduld, Respekt und positiver Verstärkung.',
    },
    impulseControl: {
      title: 'Impulskontrolle und Gehorsamkeitstraining',
      detailsTitle: '🧠 Impulskontrolle & Gehorsamkeitstraining',
      when: '🗓 Wann: Termine werden noch bekannt gegeben',
      duration: '⏱ Dauer: 60 Minuten',
      location:
        '📍 Ort: Verschiedene Locations im Kanton Zürich – z. B. Parks, Strassen oder Wälder',
      groups: '👥 Gruppen: 4–6 Hunde, jeweils mit einer Begleitperson',
      pricingTitle: '💰 Preis:',
      priceSingle: 'Einzelsession: CHF 70.00',
      pricePackage: '10er-Paket: CHF 650.00 (gültig für 6 Monate)',
      vatInfo: 'Preise exkl. MwSt',
      descriptionTitle: '🐾 Worum geht es in diesem Training?',
      descriptionP1:
        'Ungehorsamkeit und fehlende Impulskontrolle können für Mensch und Hund gleichermassen frustrierend sein. Oft entstehen diese Herausforderungen aus Unsicherheit, mangelnder Orientierung oder fehlendem Training.',
      descriptionP2:
        'Viele dieser Probleme lassen sich vermeiden, wenn der Hund lernt, seinem Menschen zu vertrauen, auf ihn zu achten und klare Kommandos zu verstehen.',
      descriptionLearningsTitle: 'In diesem Kurs lernt Ihr Hund,',
      descriptionLearnings: [
        '– sich besser zu konzentrieren,',
        '– Impulse zu kontrollieren (z. B. bei Reizen wie anderen Hunden, Katzen oder Geräuschen),',
        '– zuverlässig auf Kommandos zu reagieren,',
        '– und gelassener in Alltagssituationen zu bleiben.',
      ],
      descriptionGoal:
        'Das Ziel ist eine harmonische, sichere und entspannte Beziehung – damit Spaziergänge wieder Freude machen und Vertrauen wächst. 🐕❤️',
    },
    leashTraining: {
      title: 'Training des Hundes, damit er beim Spaziergang nicht mehr an der Leine zieht',
      detailsTitle: '🐕‍🦺 Leinenführigkeit – Training für entspannte Spaziergänge',
      pricingTitle: '💰 Preis:',
      priceSingle: 'Einzelsession: CHF 70.00',
      pricePackage: '10er-Paket: CHF 650.00 (gültig für 6 Monate)',
      vatInfo: 'Preise exkl. MwSt',
      descriptionTitle: '🐾 Worum geht es in diesem Kurs?',
      descriptionP1:
        'Zieht Ihr Hund an der Leine, obwohl Sie ihn immer wieder bitten, damit aufzuhören?',
      descriptionP2:
        'Reagiert er plötzlich stark, wenn er andere Hunde, Katzen, Autos oder Menschen sieht?',
      descriptionP3: 'Fühlen Sie sich auf Spaziergängen gestresst oder überfordert?',
      descriptionP4: 'Dann ist dieser Kurs genau das Richtige für Sie.',
      descriptionP5:
        'Wir helfen Ihnen, die Kontrolle zurückzugewinnen – mit Geduld, positiver Kommunikation und gezielten Techniken. Ihr Hund lernt, sich besser zu konzentrieren, ruhiger zu bleiben und achtsam an Ihrer Seite zu laufen.',
      trainingDetailsTitle: '🗓 Trainingsdetails',
      duration: '– Dauer: 90 Minuten',
      participants: '– Teilnehmer: 3 Hunde + 3 Bezugspersonen',
      location: '– Ort: Verschiedene Locations im Kanton Zürich (Parks, Strassen oder Wälder)',
      stimulusLevel:
        '– Reizlevel: mit vielen, wenigen oder keinen externen Einflüssen – je nach Trainingsziel',
      goalTitle: 'Ziel:',
      goalText:
        'Ein harmonisches, sicheres Miteinander an der Leine – für entspannte und freudige Spaziergänge, bei denen Sie und Ihr Hund wieder im Einklang unterwegs sind. 🐾',
    },
    privateLesson: {
      title: 'Privatunterricht',
      detailsTitle: '💬 Individuell. Persönlich. Effektiv.',
      descriptionP1:
        'In unserem Einzeltraining (60 Minuten) gehen wir gezielt auf die Herausforderungen ein, die Sie mit Ihrem Hund erleben. Gemeinsam entwickeln wir Lösungen, die genau zu Ihnen, Ihrem Alltag und der Persönlichkeit Ihres Hundes passen.',
      goal: 'Unser Ziel: Ein harmonisches Miteinander – abgestimmt auf Ihre individuellen Bedürfnisse.',
      pricingTitle: '💰 Preise:',
      priceSingle: '– Einzelstunde: CHF 80.00',
      pricePackage: '– 10er-Paket: CHF 650.00 (gültig für 6 Monate)',
      travelCost: '– Fahrtkosten: CHF 1.00 pro Kilometer (ab Standort Flaach)',
      closing:
        'Ob Verhaltenstraining, Alltagssituationen oder spezielle Themen – wir sind an Ihrer Seite, um Sie und Ihren Hund bestmöglich zu begleiten. 🐶🤝',
    },
    onlineConsulting: {
      title: 'Online-Beratung',
      detailsTitle: '💻 Online-Beratung – Für einen gelungenen Start mit Ihrem neuen Hund',
      descriptionP1:
        'Haben Sie kürzlich einen Hund adoptiert – oder planen Sie, bald ein neues Familienmitglied bei sich aufzunehmen?',
      descriptionP2:
        'Die ersten Wochen sind entscheidend für eine stabile Bindung und ein harmonisches Zusammenleben.',
      descriptionP3:
        'Wir begleiten Sie in dieser wichtigen Phase mit einfühlsamer Beratung per Video- oder Onlinegespräch.',
      descriptionP4:
        'Ob vor der Ankunft oder in den ersten Tagen nach dem Einzug – wir sind für Sie da.',
      descriptionP5:
        'Auf Wunsch kann auch ein persönliches Treffen (60 Minuten) vereinbart werden.',
      pricingTitle: '💰 Preis:',
      priceConsultation: '– CHF 80.00 pro Beratung (online oder vor Ort)',
      travelCost: '– Fahrtkosten: CHF 1.00 pro Kilometer (ab Standort Flaach)',
    },
  },
};
