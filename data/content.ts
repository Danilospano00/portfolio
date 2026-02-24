export type Lang = 'en' | 'it'

export interface ImpactNumber {
  value: number
  suffix: string
  label: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  duration: string
  type: string
  location: string
  description: string
  tags: string[]
  highlight?: boolean
}

export interface OpenSourceItem {
  name: string
  type: string
  description: string
  repo: string
  pr?: string
  tags: string[]
  badge: string
  isAuthor?: boolean
  stars: string
}

export interface StackGroup {
  label: string
  techs: string[]
}

export interface ContentShape {
  meta: {
    title: string
    description: string
    ogTitle: string
  }
  nav: {
    links: { label: string; href: string }[]
    cta: string
  }
  hero: {
    greeting: string
    name: string
    roles: string[]
    tagline: string
    cta1: string
    cta2: string
    subtext: string
  }
  about: {
    heading: string
    body: string
  }
  impact: {
    heading: string
    numbers: ImpactNumber[]
    context: string
  }
  experience: {
    heading: string
    items: ExperienceItem[]
  }
  openSource: {
    heading: string
    subheading: string
    items: OpenSourceItem[]
    viewOnGithub: string
    viewPr: string
  }
  stack: {
    heading: string
    groups: StackGroup[]
  }
  contact: {
    heading: string
    subtext: string
    form: {
      name: string
      email: string
      message: string
      send: string
      sending: string
      success: string
      error: string
    }
  }
  footer: {
    built: string
    remote: string
  }
}

export const content: Record<Lang, ContentShape> = {
  en: {
    meta: {
      title: 'Danilo Spanò — Flutter Developer | dspano.dev',
      description:
        'Flutter Developer with 5+ years building scalable mobile apps in fintech, insurance, and enterprise.',
      ogTitle: 'Danilo Spanò | Flutter Developer & Open Source Contributor',
    },
    nav: {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Open Source', href: '#open-source' },
        { label: 'Stack', href: '#stack' },
        { label: 'Contact', href: '#contact' },
      ],
      cta: 'Download CV',
    },
    hero: {
      greeting: "Hey, I'm",
      name: 'Danilo Spanò',
      roles: ['Flutter Developer', 'Mobile Architect', 'Open Source Contributor'],
      tagline: 'I craft scalable Flutter apps that users love and businesses grow with.',
      cta1: 'See my work',
      cta2: 'Download CV',
      subtext: 'Based in Turin, Italy 📍 Open to remote',
    },
    about: {
      heading: 'About me',
      body: "I'm a Flutter developer who genuinely enjoys the craft. Over the past 5+ years I've worked across fintech, insurance, and enterprise — building apps from scratch, rearchitecting legacy systems, and mentoring junior devs along the way. I care about clean code, thoughtful UX, and shipping things that actually move the needle. When I'm not coding, I'm likely contributing to open source or deep-diving into new state management patterns.",
    },
    impact: {
      heading: 'Impact by the numbers',
      numbers: [
        { value: 23, suffix: '%', label: 'Increase in new user registrations' },
        { value: 37, suffix: '%', label: 'KYC completion rate improvement' },
        { value: 20, suffix: '%', label: 'More in-app purchases' },
        { value: 5, suffix: '+', label: 'Years of Flutter experience' },
      ],
      context:
        'Results achieved at Young Platform — full crypto app architecture overhaul',
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          company: 'Tandù SRL',
          role: 'Mobile Developer',
          period: 'Dec 2023 – Present',
          duration: '2+ years',
          type: 'Full-time · Hybrid',
          location: 'Turin, Italy',
          description:
            'Building Flutter applications from scratch, owning the full project lifecycle from architecture to App Store release. Provided mentorship to a junior Flutter developer, guiding them to full autonomy. Implemented new features across two existing apps, improving both performance and UX.',
          tags: ['Flutter', 'BLoC', 'Node.js', 'Dart'],
        },
        {
          company: 'Young Platform',
          role: 'Mobile Application Developer',
          period: 'Sep 2022 – Dec 2023',
          duration: '1 year 4 months',
          type: 'Full-time',
          location: 'Turin, Italy',
          description:
            "Led the complete architectural overhaul of Young Platform's crypto app, working in a cross-functional team. Managed state architecture migration, implemented new UI flows, and collaborated closely with product to ensure quality during the transition.",
          tags: ['Flutter', 'BLoC', 'Redux', 'Crypto', 'KYC'],
          highlight: true,
        },
        {
          company: 'Open Reply',
          role: 'Mobile Developer',
          period: 'Dec 2021 – Aug 2022',
          duration: '9 months',
          type: 'Apprenticeship',
          location: 'Rome, Italy',
          description:
            "Flutter developer on a consulting project for one of Italy's leading insurance companies. Built a new app section from mockup to production, collaborating tightly with designers to deliver responsive, accessible UI.",
          tags: ['Flutter', 'Insurance', 'UI/UX', 'Agile'],
        },
        {
          company: 'Orangee S.R.L.',
          role: 'Flutter Mobile Developer',
          period: 'Sep 2021 – Dec 2021',
          duration: '4 months',
          type: 'Internship · Hybrid',
          location: 'Rome, Italy',
          description:
            'First professional role after an intensive 6-month training program. Built first production Flutter features at a consulting firm, developing problem-solving skills and real-world code management.',
          tags: ['Flutter', 'Dart'],
        },
      ],
    },
    openSource: {
      heading: 'Open Source',
      subheading:
        "Contributing to open source is how I give back to the community that built the tools I use every day. Here's where I've left my mark.",
      items: [
        {
          name: 'flutter_timeline_view',
          type: 'Author',
          description:
            'Created and published a Flutter package from scratch. A highly customizable timeline widget for Flutter apps, supporting both vertical and horizontal layouts with rich theming options.',
          repo: 'https://github.com/Danilospano00/flutter_timeline_view',
          tags: ['Flutter', 'Dart', 'pub.dev'],
          badge: 'Author',
          isAuthor: true,
          stars: '—',
        },
        {
          name: 'dio',
          type: 'Contributor',
          description:
            "Merged a pull request into dio, one of Flutter's most popular HTTP client packages (7k+ stars). Contributed a bug fix improving request handling and error propagation.",
          repo: 'https://github.com/cfug/dio',
          pr: 'https://github.com/cfug/dio/pulls',
          tags: ['Flutter', 'HTTP', 'Open Source'],
          badge: 'Contributor',
          isAuthor: false,
          stars: '7k+',
        },
        {
          name: 'equatable',
          type: 'Contributor',
          description:
            'Merged a pull request into equatable, the beloved Flutter package for value equality used across millions of apps. Contributed a documentation improvement and fix.',
          repo: 'https://github.com/felangel/equatable',
          pr: 'https://github.com/felangel/equatable/pulls',
          tags: ['Flutter', 'Dart', 'BLoC ecosystem'],
          badge: 'Contributor',
          isAuthor: false,
          stars: '1.3k+',
        },
      ],
      viewOnGithub: 'View on GitHub',
      viewPr: 'View PR',
    },
    stack: {
      heading: 'Tech Stack',
      groups: [
        { label: 'Mobile', techs: ['Flutter', 'Dart', 'Kotlin', 'Java'] },
        { label: 'State Management', techs: ['BLoC', 'Redux', 'GetX', 'Provider'] },
        { label: 'Backend', techs: ['Node.js', 'Spring Boot'] },
        { label: 'Web', techs: ['HTML', 'CSS'] },
        { label: 'Tools', techs: ['Git', 'GitHub', 'Figma', 'Jira'] },
        { label: 'Database', techs: ['Firebase', 'SQLite'] },
      ],
    },
    contact: {
      heading: "Let's build something together",
      subtext:
        "I'm open to new opportunities, collaborations, or just a good conversation about Flutter. Drop me a line.",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending…',
        success: 'Message sent! I will get back to you soon.',
        error: 'Something went wrong. Please try again.',
      },
    },
    footer: {
      built: 'Designed & built by Danilo Spanò · dspano.dev',
      remote: 'Open to remote opportunities',
    },
  },

  it: {
    meta: {
      title: 'Danilo Spanò — Flutter Developer | dspano.dev',
      description:
        'Flutter Developer con 5+ anni di esperienza nello sviluppo di app mobile scalabili in fintech, assicurazioni e enterprise.',
      ogTitle: 'Danilo Spanò | Flutter Developer & Contributore Open Source',
    },
    nav: {
      links: [
        { label: 'Su di me', href: '#about' },
        { label: 'Esperienza', href: '#experience' },
        { label: 'Open Source', href: '#open-source' },
        { label: 'Stack', href: '#stack' },
        { label: 'Contatti', href: '#contact' },
      ],
      cta: 'Scarica CV',
    },
    hero: {
      greeting: 'Ciao, sono',
      name: 'Danilo Spanò',
      roles: ['Flutter Developer', 'Mobile Architect', 'Contributore Open Source'],
      tagline:
        'Costruisco app Flutter scalabili che gli utenti amano e che fanno crescere i business.',
      cta1: 'Vedi i miei lavori',
      cta2: 'Scarica CV',
      subtext: 'Basato a Torino, Italia 📍 Aperto al remote',
    },
    about: {
      heading: 'Su di me',
      body: "Sono uno sviluppatore Flutter che ama davvero il suo mestiere. Negli ultimi 5+ anni ho lavorato in fintech, assicurazioni ed enterprise — costruendo app da zero, ristrutturando sistemi legacy e facendo mentorship a sviluppatori junior. Mi importa del codice pulito, di una UX pensata bene e di spedire cose che fanno davvero la differenza. Quando non scrivo codice, probabilmente sto contribuendo all'open source o esplorando nuovi pattern di state management.",
    },
    impact: {
      heading: 'Impatto in numeri',
      numbers: [
        { value: 23, suffix: '%', label: 'Aumento nelle nuove registrazioni' },
        { value: 37, suffix: '%', label: 'Miglioramento nel completamento KYC' },
        { value: 20, suffix: '%', label: 'Incremento negli acquisti in-app' },
        { value: 5, suffix: '+', label: 'Anni di esperienza Flutter' },
      ],
      context:
        "Risultati ottenuti in Young Platform — ristrutturazione completa dell'architettura dell'app crypto",
    },
    experience: {
      heading: 'Esperienza',
      items: [
        {
          company: 'Tandù SRL',
          role: 'Mobile Developer',
          period: 'Dic 2023 – Presente',
          duration: '2+ anni',
          type: 'Full-time · Ibrido',
          location: 'Torino, Italia',
          description:
            "Sviluppo di applicazioni Flutter da zero, gestendo l'intero ciclo di vita del progetto dall'architettura alla pubblicazione sull'App Store. Ho fatto mentorship a un collega junior fino alla sua completa autonomia. Implementazione di nuove feature su due app esistenti, migliorandone performance e UX.",
          tags: ['Flutter', 'BLoC', 'Node.js', 'Dart'],
        },
        {
          company: 'Young Platform',
          role: 'Mobile Application Developer',
          period: 'Set 2022 – Dic 2023',
          duration: '1 anno e 4 mesi',
          type: 'Full-time',
          location: 'Torino, Italia',
          description:
            "Ho guidato la ristrutturazione completa dell'architettura dell'app crypto di Young Platform, lavorando in un team cross-funzionale. Ho gestito la migrazione dell'architettura di stato, implementato nuovi flussi UI e collaborato con il prodotto per garantire qualità durante la transizione.",
          tags: ['Flutter', 'BLoC', 'Redux', 'Crypto', 'KYC'],
          highlight: true,
        },
        {
          company: 'Open Reply',
          role: 'Mobile Developer',
          period: 'Dic 2021 – Ago 2022',
          duration: '9 mesi',
          type: 'Apprendistato',
          location: 'Roma, Italia',
          description:
            'Sviluppatore Flutter in un progetto di consulenza per una delle principali compagnie assicurative italiane. Ho costruito una nuova sezione dell\'app dai mockup alla produzione, collaborando con i designer per UI responsive e accessibili.',
          tags: ['Flutter', 'Insurance', 'UI/UX', 'Agile'],
        },
        {
          company: 'Orangee S.R.L.',
          role: 'Flutter Mobile Developer',
          period: 'Set 2021 – Dic 2021',
          duration: '4 mesi',
          type: 'Stage · Ibrido',
          location: 'Roma, Italia',
          description:
            'Prima esperienza professionale dopo un percorso di formazione intensivo di 6 mesi. Prime feature Flutter in produzione, sviluppando problem-solving e gestione del codice nel mondo reale.',
          tags: ['Flutter', 'Dart'],
        },
      ],
    },
    openSource: {
      heading: 'Open Source',
      subheading:
        "Contribuire all'open source è il mio modo di restituire alla community che ha costruito gli strumenti che uso ogni giorno. Ecco dove ho lasciato il segno.",
      items: [
        {
          name: 'flutter_timeline_view',
          type: 'Autore',
          description:
            'Package Flutter creato e pubblicato da zero. Un widget timeline altamente personalizzabile per app Flutter, con supporto layout verticale e orizzontale e ricche opzioni di theming.',
          repo: 'https://github.com/Danilospano00/flutter_timeline_view',
          tags: ['Flutter', 'Dart', 'pub.dev'],
          badge: 'Autore',
          isAuthor: true,
          stars: '—',
        },
        {
          name: 'dio',
          type: 'Contributore',
          description:
            "PR mergiata in dio, uno dei package HTTP più popolari di Flutter (7k+ stelle). Contributo: fix di un bug che migliorava la gestione delle richieste e la propagazione degli errori.",
          repo: 'https://github.com/cfug/dio',
          pr: 'https://github.com/cfug/dio/pulls',
          tags: ['Flutter', 'HTTP', 'Open Source'],
          badge: 'Contributore',
          isAuthor: false,
          stars: '7k+',
        },
        {
          name: 'equatable',
          type: 'Contributore',
          description:
            'PR mergiata in equatable, il package Flutter per la value equality usato in milioni di app. Contributo: miglioramento della documentazione e fix.',
          repo: 'https://github.com/felangel/equatable',
          pr: 'https://github.com/felangel/equatable/pulls',
          tags: ['Flutter', 'Dart', 'BLoC ecosystem'],
          badge: 'Contributore',
          isAuthor: false,
          stars: '1.3k+',
        },
      ],
      viewOnGithub: 'Vedi su GitHub',
      viewPr: 'Vedi PR',
    },
    stack: {
      heading: 'Stack Tecnologico',
      groups: [
        { label: 'Mobile', techs: ['Flutter', 'Dart', 'Kotlin', 'Java'] },
        { label: 'State Management', techs: ['BLoC', 'Redux', 'GetX', 'Provider'] },
        { label: 'Backend', techs: ['Node.js', 'Spring Boot'] },
        { label: 'Web', techs: ['HTML', 'CSS'] },
        { label: 'Tools', techs: ['Git', 'GitHub', 'Figma', 'Jira'] },
        { label: 'Database', techs: ['Firebase', 'SQLite'] },
      ],
    },
    contact: {
      heading: 'Costruiamo qualcosa insieme',
      subtext:
        'Sono aperto a nuove opportunità, collaborazioni o semplicemente a una bella chiacchierata su Flutter. Scrivimi.',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        send: 'Invia messaggio',
        sending: 'Invio in corso…',
        success: 'Messaggio inviato! Ti rispondo presto.',
        error: 'Qualcosa è andato storto. Riprova.',
      },
    },
    footer: {
      built: 'Progettato e sviluppato da Danilo Spanò · dspano.dev',
      remote: 'Aperto a opportunità remote',
    },
  },
}
