import { defineStore } from 'pinia';
import type { ResumeState } from 'src/models/models';

export const useResumeStore = defineStore('resume', {
  state: (): ResumeState => ({
    name: 'Bobby Seelam',
    roleBuckets: [
      {
        key: 'itSupport',
        title: 'IT Support Engineer | Desktop Support | Field Services',
        summary:
          'IT support professional with Tier 1–3 experience in troubleshooting hardware, software, and network issues. Skilled in Windows, Linux, SCCM, Active Directory, MDM, and service‑desk ticketing tools. Proven record of reducing AHT, boosting CSAT, and automating repetitive tasks to streamline support operations. Adept at delivering on‑site and remote assistance, conducting system upgrades, and developing user training materials to enhance team productivity and minimize repeat incidents over time.',
      },
      {
        key: 'dataBI',
        title: 'Data Engineer | BI Developer | Analytics Specialist',
        summary:
          'Data and BI professional with experience designing ETL pipelines, real‑time dashboards, and predictive models. Skilled in transforming raw data into actionable insights using tools like SQL, Spark, Kafka, Power BI, and Tableau. Proven success in optimizing performance through anomaly detection, sales forecasting, and supply chain analytics. Experienced in collaborating with cross‑functional teams to integrate data solutions, document data schemas, and maintain data governance standards for secure, compliant reporting environments.',
      },
      {
        key: 'webDev',
        title: 'Full‑Stack Developer | Front‑End Developer | Web Developer',
        summary:
          'Web developer versed in Vue.js, Django, Node.js, and RESTful API design. Experienced building responsive, performant UIs and robust back‑ends, with CI/CD pipelines on AWS, Heroku, and DigitalOcean. Passionate about UX optimization, code‑splitting, lazy loading, and SEO best practices. Proficient at writing unit and integration tests, optimizing database queries, and implementing secure authentication workflows to deliver scalable and maintainable web applications.',
      },
      {
        key: 'techLead',
        title: 'Technical Support Manager | IT Project Coordinator | Solutions Engineer',
        summary:
          'Technical leader with experience managing 100+ support engineers, real‑time workforce planning, and cross‑functional escalation workflows. Skilled in stakeholder communication, training program development, and aligning IT operations with business goals for maximum efficiency. Successfully led change management initiatives, implemented performance dashboards, and negotiated SLAs with vendors to ensure continuous service improvement.',
      },
      {
        key: 'hybrid',
        title: 'Technical Consultant | IT Business Analyst | Product Support Specialist',
        summary:
          'Versatile technical consultant bridging IT and business. Expertise in requirements gathering, documentation, and translating user needs into technical solutions. Strong background in BI tools, service‑desk operations, and end‑user training. Experienced in facilitating stakeholder workshops, creating process flow diagrams, and delivering end‑to‑end project support for software implementations and system migrations.',
      },
      {
        key: 'freelance',
        title: 'Freelance Web Developer | Digital Media Manager | Automation Specialist',
        summary:
          'Entrepreneurial freelancer with a track record of building client websites, automating workflows with Python, and managing digital content. Adept at full‑lifecycle project delivery, from wireframing to deployment and maintenance. Skilled in SEO optimization, social media strategy, and implementing analytics tracking to measure engagement and ROI for diverse clientele.',
      },
    ],
    contacts: [
      { icon: 'email', text: 'bobby.seelam93@gmail.com', url: 'mailto:bobby.seelam93@gmail.com' },
      { icon: 'phone', text: '(+39) 3758327534', url: null },
      { icon: 'place', text: 'Milano, Italy', url: null },
      {
        icon: 'fab fa-linkedin',
        text: 'linkedin.com/in/geniusfaker',
        url: 'https://linkedin.com/in/geniusfaker',
      },
      {
        icon: 'fab fa-github',
        text: 'github.com/geniusfaker',
        url: 'https://github.com/geniusfaker',
      },
      { icon: 'fab fa-github', text: 'github.com/bob-bee', url: 'https://github.com/bob-bee' },
    ],
    work: [
      {
        company: 'Colourmoon Technologies',
        url: 'https://thecolourmoon.com/',
        location: 'Vijayawada, India',
        period: 'Oct 2019 – Jul 2022',
        roles: [
          {
            title: 'Full Stack Developer',
            duration: 'Jan 2022 – Jul 2022',
            items: [
              'Led full-stack development using Vue.js, Django, and Node.js.',
              'Designed RESTful APIs and integrated services like payment gateways and SMTP.',
              'Managed MySQL and MongoDB databases with indexing and optimization.',
              'Implemented JWT/OAuth2 auth, enforced HTTPS, and RBAC.',
              'Built CI/CD pipelines using GitLab CI/CD and Jenkins.',
              'Deployed to AWS EC2, Heroku, and DigitalOcean.',
              'Debugged via Postman, Sentry, and server logs.',
              'Wrote deployment docs and internal KBs.',
              'Automated deployment/database tasks to boost efficiency.',
            ],
          },
          {
            title: 'Front-End Developer',
            duration: 'Oct 2019 – Dec 2021',
            items: [
              'Developed responsive UIs with Vue.js, HTML5, CSS3, JavaScript, and Bootstrap.',
              'Created websites/landing pages for various industries.',
              'Boosted front-end performance via lazy loading, image optimization, etc.',
              'Applied SEO strategies with meta tags and structured data.',
              'Performed cross-browser testing and ensured UI consistency.',
              'Used Git and participated in Agile ceremonies.',
              'Collaborated with clients on requirements and design iterations.',
            ],
          },
        ],
      },
      {
        company: 'Symantec Corporation',
        url: 'https://us.norton.com/',
        location: 'Chennai, India',
        period: 'Jul 2014 – Aug 2019',
        roles: [
          {
            title: 'Technical Support Engineer',
            duration: 'Jul 2014 – Jul 2016',
            items: [
              'Provided Tier 1 & 2 support via phone/email/remote for malware and performance issues.',
              'Diagnosed desktops, tablets, and mobile devices.',
              'Logged cases in Salesforce 5.0.',
              'Used SymDiag and Norton Power Eraser for remote remediation.',
              'Maintained 94% CSAT while hitting AHT and FCR targets.',
              'Worked with engineers on escalations and bug reproduction.',
            ],
          },
          {
            title: 'Subject Matter Expert (SME)',
            duration: 'Aug 2016 – Jul 2018',
            items: [
              'Led escalation resolution for complex enterprise cases.',
              'Mentored 25+ engineers; trained teams on diagnostics and protocols.',
              'Standardized workflows; boosted resolution speed by 22%.',
              'Automated call scripts and cut AHT by ~7 seconds.',
              'Created 30+ internal KB articles.',
              'Awarded "Best SME" in 2017.',
            ],
          },
          {
            title: 'Technical Support Manager',
            duration: 'Aug 2018 – Aug 2019',
            items: [
              'Managed a 134-person support team across shifts.',
              'Led dashboards, workforce planning, and escalation workflows.',
              'Introduced tiered training; improved onboarding and FCR.',
              'Oversaw upsell efforts for VPN/password/security tools.',
              'Ran VOC sessions for product feedback loop.',
            ],
          },
        ],
      },
    ],

    projects: [
      {
        name: 'Field Services Engineer',
        company: 'Vorwerk Group',
        companyUrl: 'https://corporate.vorwerk.com/en/home/',
        period: 'Apr 2025 – Jun 2025',
        location: 'Milan, Italy',
        items: [
          'Managed IT assets including laptops, routers, phones, printers.',
          'Oversaw procurement, inventory, and shipping.',
          'Handled system installation, compatibility, and repairs.',
          'Provided multilingual support (EN, IT, HI, TE).',
          'Resolved advanced cybersecurity and network issues.',
          'Used MDM and SCCM for asset monitoring.',
          'Configured Active Directory and GPOs.',
          'Built internal KBs to improve FCR.',
          'Implemented ITSM best practices in cross-functional teams.',
        ],
      },
      {
        name: 'B-Spidey',
        period: 'Jan 2024 – Present',
        items: ['Created web crawlers to automate update tracking and notification workflows.'],
      },
      {
        name: 'B-Coin',
        period: 'Aug 2024 – Present',
        items: ['Built crypto bot for automated trading, optimizing buy/sell logic.'],
      },
      {
        name: 'B-Web',
        period: 'Jan 2022 – Present',
        items: [
          'Built and maintained websites:',
          'www.mammamiarecco.it',
          'www.officinadelriso.com',
          'www.waldenmilano.it',
          'www.geniusfaker.com',
        ],
      },
    ],

    education: [
      {
        degree: 'Master of Science – Business Intelligence',
        institution: 'Università degli Studi di Genova',
        location: 'Genova, Italy',
        period: 'Sep 2022 – Mar 2025',
        highlights: [
          'ETL pipelines, OLAP, SQL, Spark, R, Python, MongoDB, GDPR, Data Viz.',
          'Capstone: “Predictive Sales Forecasting” using ARIMA + Random Forest.',
          'Internship: BI dashboards for supply chain latency reduction (–30%).',
          'Lab: Real-time anomaly detection with Kafka + Spark ML.',
          'Speaker: “Ethical AI” at 2024 International Symposium.',
          'Instructor: Python for BI workshop, UniGe.',
        ],
      },
      {
        degree: 'Bachelor of Mechanical Engineering',
        institution: 'NIT Raipur',
        location: 'Raipur, India',
        period: 'Jul 2010 – Jul 2014',
        highlights: [
          'Courses: Solid Mechanics, Thermo, CFD, MATLAB, CAD, CNC, DFM.',
          'Merit Scholar (2010–2014); Top 20% GPA.',
          'Winner: Spring-powered boat design contest (300% distance gain).',
          'Trainer: CNC safety and machining workshops.',
          'Eco Projects: Designed eco-bin for campus as Go-Green Club lead.',
        ],
      },
    ],

    skills: {
      operatingSystems: ['Windows', 'Linux'],
      networking: ['VPN', 'DHCP', 'DNS', 'LAN/WAN'],
      cloud: ['Azure', 'Cloud', 'InTune'],
      tools: ['SCCM', 'AnyDesk', 'CRM'],
      dev: ['Python', 'CI/CD'],
      admin: ['MS Exchange', 'Active Directory', 'Office Suite', 'IIS'],
      softSkills: ['Customer Service', 'Troubleshooting', 'ITIL', 'Management'],
    },
    certifications: [
      {
        name: 'CNC Machining & AutoCAD',
        company: 'Central Institute of Tool Design',
        period: '2012',
        location: 'Hyderabad, India',
        items: ['Completed intensive hands-on training in CNC programming and drafting.'],
      },
      {
        name: 'Italian Language Certification',
        company: 'University for Foreigners of Perugia',
        period: '2013',
        location: 'Perugia, Italy',
        items: ['Achieved C1 level proficiency in Italian language.'],
      },
      {
        name: 'IELTS – C1',
        company: 'British Council',
        period: '2016',
        location: 'Rome, Italy',
        items: ['Scored C1 level proficiency in English based on IELTS standards.'],
      },
    ],

    awards: [
      {
        title: 'Gold Medal – Inter NIT Boxing',
        issuer: 'National Institute of Technology',
        period: '2012',
        location: 'India',
        items: ['Won gold in the national inter-NIT boxing tournament (lightweight division).'],
      },
      {
        title: 'Bronze Medal – Inter NIT Boxing',
        issuer: 'National Institute of Technology',
        period: '2013',
        location: 'India',
        items: ['Secured bronze the following year in the same national tournament.'],
      },
      {
        title: 'Symantec Employee of the Year',
        issuer: 'Symantec Corporation',
        period: '2014–2015',
        location: 'Pune, India',
        items: ['Recognized for outstanding team leadership and technical innovation.'],
      },
    ],

    languages: ['English', 'Italian', 'Hindi', 'Spanish'],

    interests: [
      {
        title: 'AI',
        goal: 'Build an AI comedy-writing assistant to co-write stand-up material.',
        notes: ['Experiment with GPT agents', 'Deploy as mobile app'],
      },
      {
        title: 'Quantum Physics',
        goal: 'Write a layman-accessible explainer series on quantum computing.',
        notes: ['Collaborate with researchers', 'Publish on Medium/Substack'],
      },
      {
        title: 'Calisthenics',
        goal: 'Hold a full human flag for 30 seconds.',
        notes: ['Train planche and front lever', 'Document progress on IG'],
      },
      {
        title: 'MMA',
        goal: 'Compete in an amateur MMA bout.',
        notes: ['Focus: Muay Thai + BJJ', 'Track training and sparring stats'],
      },
      {
        title: 'Traveling',
        goal: 'Bike across at least 10 European countries and vlog the journey.',
        notes: ['Create a documentary', 'Secure gear sponsor'],
      },
      {
        title: 'Music',
        goal: 'Produce and release a full rap EP with Dr. Dre (or die trying).',
        notes: ['Learn mixing/mastering', 'Perform at a local club or fest'],
      },
      {
        title: 'Vlog',
        goal: 'Hit 100K YouTube subs documenting tech+travel lifestyle.',
        notes: ['Blend tutorials + storytelling', 'Weekly uploads'],
      },
      {
        title: 'Content Creation',
        goal: 'Launch a podcast blending comedy, AI, and weird science.',
        notes: ['Interview niche experts', 'Distribute across platforms'],
      },
    ],
  }),

  actions: {
    fetchprojects() {
      // If this later becomes async, we can return a promise.
      console.log('Fetching projects...');
      // For now, it's static — you could expand this later to fetch from API
    },
  },
});
