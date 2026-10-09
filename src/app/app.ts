import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

type Language = 'de' | 'en';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private cdr: ChangeDetectorRef) {}

  currentLanguage: Language = 'de';
  typedText = '';

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  private typingTimer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
  }

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
        roles: [
          'Softwareentwickler',
          'Full-Stack Entwickler',
          'Backend Entwickler',
          'Angular · Node.js · NestJS',
        ],
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
          'Ich entwickle gerne Anwendungen, die gut aussehen, einfach zu bedienen sind und im Alltag wirklich etwas bringen.',

        text2:
          'Besonders spannend finde ich es, Abläufe zu automatisieren und Ideen in funktionierende Anwendungen umzusetzen. Dabei probiere ich gerne neue Dinge aus, lerne neue Technologien kennen und suche nach Lösungen, die eine Anwendung wirklich besser machen. Genau diese Mischung aus Ideen, Lernen und Entwickeln macht mir an meinem Beruf besonders viel Spaß.',
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
        liveDemo: 'Live Demo',

        notice: {
          title: 'Hinweis zu meinen Projekten',
          description:
            'Neben den hier veröffentlichten Projekten habe ich an weiteren Anwendungen gearbeitet, die aufgrund von Datenschutz und vertraulichen Unternehmensdaten nicht im Original veröffentlicht werden können. Einige der hier gezeigten Projekte wurden deshalb als datenschutzkonforme Demo-Versionen aufbereitet – sensible Daten, interne APIs und unternehmensbezogene Informationen wurden entfernt oder durch Mock-Daten ersetzt. Weitere Projekte befinden sich bereits in Vorbereitung. Meine Android-TV-App TGramTV befindet sich aktuell im geschlossenen Test bei Google Play. Eine Version des Projekts ist bereits hier verfügbar. Nach Abschluss der Testphase und der Veröffentlichung wird die App zusätzlich direkt mit Google Play verlinkt.',
        },

        deskBooking: {
          title: 'Arbeitsplatzbuchung',
          description:
            'Eine moderne Anwendung zur Arbeitsplatzbuchung, mit der Arbeitsplätze reserviert, Buchungen verwaltet und verfügbare Arbeitsplätze übersichtlich dargestellt werden können.',
          technologies: 'Angular · TypeScript · REST API · SQL · JobRouter',
        },

        pmCalendar: {
          title: 'PM-Kalender',
          description:
            'Ein interaktiver Abwesenheitskalender für Mitarbeitende aus dem IT- und ECM-Bereich. Die Anwendung zeigt Urlaub, Krankheit, Elternzeit, Fortbildungen und weitere Abwesenheiten übersichtlich in einer Timeline. Mitarbeitende können gefiltert, Zeiträume ausgewählt und Feiertage automatisch aus einer SQL-Datenbank geladen werden.',
          technologies: 'Angular · TypeScript · vis-timeline · REST API · PHP · SQL · JobRouter',
        },

        telegramTV: {
          title: 'TGramTV',
          description:
            'Eine Android-TV-App zur Nutzung von Telegram auf dem Fernseher. Die App ermöglicht den Zugriff auf private Chats, Gruppen und Kanäle sowie die übersichtliche Anzeige von Videos, Bildern, Musik und Dateien. Die Benutzeroberfläche wurde speziell für die Bedienung mit einer TV-Fernbedienung entwickelt.',
          technologies: 'Kotlin · Android TV · Leanback · Telegram API · Gradle',
        },

        nestjsAuth: {
          title: 'NestJS Authentication API',
          description:
            'Wiederverwendbare Backend-Lösung für sichere Benutzerauthentifizierung mit NestJS, Prisma und JWT. Implementiert wurden Benutzerregistrierung, E-Mail-Verifizierung, Access- und Refresh-Tokens mit Token-Rotation, Passwort-Wiederherstellung sowie Rate Limiting zum Schutz der API.',
        },
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
        roles: [
          'Software Developer',
          'Full-Stack Developer',
          'Backend Developer',
          'Angular · Node.js · NestJS',
        ],
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
          'I enjoy building applications that look good, are easy to use, and are genuinely useful.',

        text2:
          'I especially like automating tasks and turning ideas into working applications. I enjoy trying out new things, learning new technologies, and finding solutions that actually make an application better. That mix of ideas, learning, and building is what I enjoy most about being a developer.',
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
        liveDemo: 'Live Demo',

        notice: {
          title: 'A note about my projects',
          description:
            'In addition to the projects published here, I have worked on other applications that cannot be released in their original form due to data protection and confidential company information. Some of the projects shown here have therefore been prepared as privacy-safe demo versions, with sensitive data, internal APIs and company-specific information removed or replaced with mock data. More projects are currently being prepared for publication. My Android TV app TGramTV is currently in closed testing on Google Play. A version of the project is already available here. Once testing is complete and the app is published, it will also be linked directly to Google Play.',
        },

        deskBooking: {
          title: 'Workplace Booking',
          description:
            'A modern workplace booking application for reserving desks, managing bookings and providing a clear overview of workplace availability.',
          technologies: 'Angular · TypeScript · REST API · SQL · JobRouter',
        },

        pmCalendar: {
          title: 'PM Calendar',
          description:
            'An interactive absence calendar for IT and ECM teams. The application provides a clear timeline of vacation, sickness, parental leave, training and other absences. Employees can be filtered, custom date ranges can be selected, and public holidays are loaded automatically from a SQL database.',
          technologies: 'Angular · TypeScript · vis-timeline · REST API · PHP · SQL · JobRouter',
        },

        telegramTV: {
          title: 'TGramTV',
          description:
            'An Android TV app for using Telegram on the big screen. The app provides access to private chats, groups and channels and allows users to browse videos, photos, music and files. The interface is specifically designed for navigation with a TV remote control.',
          technologies: 'Kotlin · Android TV · Leanback · Telegram API · Gradle',
        },

        nestjsAuth: {
          title: 'NestJS Authentication API',
          description:
            'Reusable backend solution for secure user authentication using NestJS, Prisma, and JWT. Features user registration, email verification, access and refresh tokens with token rotation, password recovery, and API rate limiting.',
        },
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
    if (this.currentLanguage === language) return;

    this.currentLanguage = language;

    this.roleIndex = 0;
    this.charIndex = 0;
    this.deleting = false;
    this.typedText = '';

    this.startTyping();
  }

  private startTyping(): void {
    clearTimeout(this.typingTimer);

    const type = () => {
      const roles = this.t.hero.roles;

      if (!roles?.length) return;

      if (this.roleIndex >= roles.length) {
        this.roleIndex = 0;
      }

      const currentRole = roles[this.roleIndex];

      if (!this.deleting) {
        this.charIndex++;

        this.typedText = currentRole.slice(0, this.charIndex);
        this.cdr.detectChanges();

        if (this.charIndex >= currentRole.length) {
          this.charIndex = currentRole.length;
          this.deleting = true;

          this.typingTimer = setTimeout(type, 1500);
          return;
        }

        this.typingTimer = setTimeout(type, 80);
        return;
      }

      this.charIndex--;

      this.typedText = currentRole.slice(0, this.charIndex);
      this.cdr.detectChanges();

      if (this.charIndex <= 0) {
        this.charIndex = 0;
        this.typedText = '';
        this.deleting = false;

        this.roleIndex = (this.roleIndex + 1) % roles.length;

        this.cdr.detectChanges();

        this.typingTimer = setTimeout(type, 300);
        return;
      }

      this.typingTimer = setTimeout(type, 40);
    };

    type();
  }
}
