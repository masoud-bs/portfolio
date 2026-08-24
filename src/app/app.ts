import { Component } from '@angular/core';

type Language = 'de' | 'en';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  currentLanguage: Language = 'de';

  translations = {
    de: {
      nav: {
        about: 'Über mich',
        skills: 'Kenntnisse',
        projects: 'Projekte',
        experience: 'Berufserfahrung',
        contact: 'Kontakt',
      },

      hero: {
        intro: 'Hallo, ich bin',
        title: 'Softwareentwickler',
        subtitle: 'Fachinformatiker für Anwendungsentwicklung',
        description:
          'Ich entwickle moderne Webanwendungen mit Fokus auf sauberen Code, Benutzerfreundlichkeit und praxisnahe Lösungen.',
        projectsButton: 'Projekte ansehen',
      },

      about: {
        label: 'Über mich',
        title: 'Entwickler mit Fokus auf praxisnahe Lösungen.',
        text1:
          'Ich bin ausgebildeter Fachinformatiker für Anwendungsentwicklung mit Erfahrung in der Entwicklung webbasierter Anwendungen, Prozessautomatisierung und Integration von Softwarelösungen.',
        text2:
          'Ich setze Anforderungen gerne in saubere und praxisnahe Anwendungen um – mit besonderem Fokus auf Benutzerfreundlichkeit, Wartbarkeit und kontinuierliche Verbesserung.',
        locationLabel: 'Standort',
        location: 'Pulheim (50259), Deutschland',
        focusLabel: 'Schwerpunkt',
        focus: 'Softwareentwicklung',
        workingLabel: 'Arbeitsbereiche',
        working: 'Frontend · Backend · APIs',
        languagesLabel: 'Sprachen',
        languages: 'Persisch · Muttersprache | Deutsch · C1 | Englisch · B1',
      },

      skills: {
        label: 'Tech Stack',
        title: 'Technologien, mit denen ich arbeite.',
      },

      projects: {
        label: 'Projekte',
        title: 'Was ich entwickelt habe.',
        description:
          'Eine moderne Anwendung zur Arbeitsplatzbuchung, mit der Arbeitsplätze reserviert, Buchungen verwaltet und verfügbare Arbeitsplätze übersichtlich dargestellt werden können.',
        liveDemo: 'Live Demo',
      },

      experience: {
        label: 'Berufserfahrung',
        title: 'Mein beruflicher Werdegang.',
        present: 'Heute',

        current: {
          title: 'Software Developer',
          company: 'Behrens-Schuleit · Düsseldorf',
          description:
            'Entwicklung webbasierter Frontend- und Backend-Lösungen, automatisierter Workflows und digitaler Geschäftsprozesse. Integration von REST APIs und datenbanknahen Prozessen sowie Testing, Fehleranalyse und Optimierung bestehender Anwendungen.',
        },

        apprenticeship: {
          title: 'Software Developer · Ausbildung',
          company: 'Behrens-Schuleit · Düsseldorf',
          description:
            'Entwicklung und Anpassung von Workflows und Webformularen, Schnittstellen und Datenbanklösungen sowie Mitarbeit an ECM-, Digitalisierungs- und Automatisierungsprojekten.',
        },

        digitization: {
          title: 'IT-Dienstleister · Dokumentendigitalisierung',
          company: 'Behrens-Schuleit · Düsseldorf',
          description: 'Tätigkeit im Bereich IT-Dienstleistung und Dokumentendigitalisierung.',
        },

        technicianSilver: {
          title: 'IT-Techniker · Hard- und Software',
          company: 'Silver · Iran',
          description:
            'Installation und Wartung von Hard- und Softwaresystemen, Betreuung von IT-Systemen und Betriebssystemen sowie Aufbau, Konfiguration und Fehleranalyse von Netzwerken.',
        },

        technicianNahib: {
          title: 'IT-Techniker · Hard- und Software',
          company: 'Nahib · Iran',
          description:
            'Installation und Wartung von Hard- und Softwaresystemen, Betreuung von IT-Systemen und Betriebssystemen sowie Aufbau, Konfiguration und Fehleranalyse von Netzwerken.',
        },
      },

      education: {
        label: 'Ausbildung',
        title: 'Fachinformatiker für Anwendungsentwicklung',
        school: 'IHK / Berufsschule · Düsseldorf',
        date: '2022 — 2025',
        description: 'Duale Berufsausbildung mit Schwerpunkt Anwendungsentwicklung.',
      },
      contact: {
        label: 'Kontakt',
        title: 'Lassen Sie uns gemeinsam etwas Großartiges entwickeln.',
        description:
          'Ich freue mich über neue berufliche Möglichkeiten, interessante Projekte und den Austausch rund um Softwareentwicklung.',
        button: 'Kontakt aufnehmen',
      },

      footer: {
        role: 'Softwareentwickler',
      },
    },

    en: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
      },

      hero: {
        intro: "Hello, I'm",
        title: 'Software Developer',
        subtitle: 'IT Specialist for Application Development',
        description:
          'I build modern web applications with a focus on clean code, usability and practical solutions.',
        projectsButton: 'View Projects',
      },

      about: {
        label: 'About me',
        title: 'Developer with a focus on practical solutions.',
        text1:
          'I am a trained IT specialist for application development with experience in developing web applications, process automation and integrating software solutions.',
        text2:
          'I enjoy turning requirements into clean and practical applications, with a strong focus on usability, maintainability and continuous improvement.',
        locationLabel: 'Location',
        location: 'Pulheim (50259), Germany',
        focusLabel: 'Focus',
        focus: 'Software Development',
        workingLabel: 'Working with',
        working: 'Frontend · Backend · APIs',
        languagesLabel: 'Languages',
        languages: 'Persian · Native | German · C1 | English · B1',
      },

      skills: {
        label: 'Tech Stack',
        title: 'Technologies I work with.',
      },

      projects: {
        label: 'Projects',
        title: "Things I've built.",
        description:
          'A modern workplace booking application for reserving desks, managing bookings and providing a clear overview of workplace availability.',
        liveDemo: 'Live Demo',
      },

      experience: {
        label: 'Experience',
        title: 'My professional journey.',
        present: 'Present',

        current: {
          title: 'Software Developer',
          company: 'Behrens-Schuleit · Düsseldorf',
          description:
            'Development of web-based frontend and backend solutions, automated workflows and digital business processes. Integration of REST APIs and database-driven processes as well as testing, debugging and optimization of existing applications.',
        },

        apprenticeship: {
          title: 'Software Developer · Apprenticeship',
          company: 'Behrens-Schuleit · Düsseldorf',
          description:
            'Development and customization of workflows, web forms, interfaces and database solutions, as well as participation in ECM, digitization and automation projects.',
        },

        digitization: {
          title: 'IT Services · Document Digitization',
          company: 'Behrens-Schuleit · Düsseldorf',
          description: 'Worked in IT services and document digitization.',
        },

        technicianSilver: {
          title: 'IT Technician · Hardware & Software',
          company: 'Silver · Iran',
          description:
            'Installation and maintenance of hardware and software systems, support of IT systems and operating systems, as well as network setup, configuration and troubleshooting.',
        },

        technicianNahib: {
          title: 'IT Technician · Hardware & Software',
          company: 'Nahib · Iran',
          description:
            'Installation and maintenance of hardware and software systems, support of IT systems and operating systems, as well as network setup, configuration and troubleshooting.',
        },
      },

      education: {
        label: 'Education',
        title: 'IT Specialist for Application Development',
        school: 'IHK / Vocational School · Düsseldorf',
        date: '2022 — 2025',
        description: 'Dual vocational training with a focus on application development.',
      },

      contact: {
        label: 'Contact',
        title: "Let's build something great.",
        description:
          "I'm always interested in new opportunities, interesting projects and conversations about software development.",
        button: 'Get in touch',
      },

      footer: {
        role: 'Software Developer',
      },
    },
  };

  get t() {
    return this.translations[this.currentLanguage];
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;
  }
}
