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
              'Led end-to-end development of scalable web apps using Vue.js (frontend), Django (backend), and Node.js (server-side logic), translating complex business requirements into secure, production-grade applications that supported real-time user interactions and administrative control panels.',
              'Architected and integrated RESTful APIs with third-party services including payment gateways (e.g., Razorpay, Stripe) and SMTP email systems. Enabled seamless transactions and automated email workflows, significantly improving user onboarding and operational throughput.',
              'Implemented authentication using JWT and OAuth2, enforced HTTPS, and managed role-based access controls (RBAC). These security layers safeguarded user data and access hierarchies, meeting compliance standards and reducing unauthorized access incidents.',
              'Built CI/CD pipelines using GitLab CI/CD and Jenkins, automating deployment, testing, and rollback procedures. Reduced manual intervention by 80%, shortened release cycles, and ensured higher build stability across staging and production environments.',
              'Deployed applications across AWS EC2, Heroku, and DigitalOcean, managing environment-specific configurations and backups. Leveraged cloud-native tools for scaling, resulting in resilient infrastructure with minimal downtime and simplified maintenance.',
            ],
          },
          {
            title: 'Front-End Developer',
            duration: 'Oct 2019 – Dec 2021',
            items: [
              'Engineered responsive, cross-device UIs using Vue.js, HTML5, CSS3, and Bootstrap, addressing client demands for seamless mobile-first designs. Ensured consistent UX across platforms through component-driven development and adaptive layouts, leading to increased session durations and lower bounce rates across varied industry projects.',
              'Developed custom websites and landing pages for a multi-sector client base by translating requirements into engaging UI/UX using wireframes and reusable components. Collaborated with stakeholders during iterative design cycles, significantly improving time-to-launch and client satisfaction metrics.',
              'Optimized frontend performance via lazy loading, image compression, and CSS/JS minification. Reduced page load times by over 40% on average, directly improving SEO scores and elevating Core Web Vitals, contributing to higher organic traffic and better user retention.',
              'Embedded technical SEO enhancements including meta tags, structured data (JSON-LD), and semantic markup, enabling better indexing and rich results on search engines. Collaborated with digital marketing teams to ensure alignment with campaign goals and boost discoverability.',
              'Conducted rigorous cross-browser testing and visual regression audits across Chrome, Firefox, Safari, and Edge. Identified and resolved rendering inconsistencies using debugging tools, delivering pixel-perfect, consistent UIs and reducing browser-related support tickets.',
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
            title: 'Technical Support Manager',
            duration: 'Aug 2018 – Aug 2019',
            items: [
              'Directed a cross-shift support organization of 134 agents, overseeing workforce planning, escalation management, and SLA delivery. Streamlined reporting through dashboards and analytics tools, enabling real-time decision-making and improving average resolution times by 18%.',
              'Revamped onboarding by implementing a tiered training structure, accelerating time-to-proficiency and raising first-call resolution (FCR) by 21%. Partnered with QA to ensure knowledge retention through audits and periodic refreshers.',
              'Spearheaded upsell integration into support flows, equipping agents with scripts and decision trees to recommend Norton VPN, password managers, and parental controls. Drove a 14% increase in qualified leads from Tier 1 support.',
              'Chaired Voice of Customer (VoC) sessions, distilling feedback from live calls, NPS surveys, and chat transcripts into actionable insights for product teams. Influenced three product updates by identifying top usability pain points.',
              'Managed incident response for critical service outages, coordinating with L3 engineers and comms teams to triage issues and update customers proactively. Maintained SLA compliance during high-impact periods.',
            ],
          },
          {
            title: 'Subject Matter Expert (SME)',
            duration: 'Aug 2016 – Jul 2018',
            items: [
              'Led the SME desk for complex escalations, resolving enterprise-grade incidents involving zero-day malware, rootkit infections, and advanced system corruption. Reduced engineering escalations by 27% via hands-on issue triage.',
              'Mentored a cohort of 25+ support engineers, delivering training on proprietary diagnostic tools, malware removal workflows, and secure remote access protocols. Developed SOPs and certification paths to boost agent confidence and consistency.',
              'Standardized diagnostic workflows across shifts, replacing fragmented approaches with structured playbooks. Achieved a 22% improvement in average resolution speed and minimized rework by enforcing guided troubleshooting.',
              'Automated frontline scripting using Excel macros and call control templates, shortening average handle time (AHT) by 7 seconds per call and increasing process adherence.',
              'Created and published over 30 internal KB articles addressing niche issues and edge cases. Recognized with the “Best SME” award in 2017 for technical depth and team enablement.',
            ],
          },
          {
            title: 'Technical Support Engineer',
            duration: 'Jul 2014 – Jul 2016',
            items: [
              'Delivered Tier 1 and Tier 2 support for antivirus, performance, and network issues across desktops, tablets, and mobile platforms. Assisted customers globally via phone, email, and remote sessions, often handling high-stress escalations.',
              'Diagnosed and resolved malware infections using tools like SymDiag, Norton Power Eraser, and LiveUpdate. Educated customers on safe browsing practices and configuration hardening for long-term protection.',
              'Logged and managed support cases through Salesforce CRM 5.0, ensuring accurate documentation and lifecycle tracking. Maintained an average of 94% CSAT while balancing AHT and first-contact resolution (FCR) metrics.',
              'Worked closely with L2 and engineering teams to replicate bugs, isolate system crashes, and document root causes for recurring technical faults. Contributed findings to product QA loops and KB updates.',
              'Participated in queue monitoring and shift transitions, collaborating with peers to reduce ticket backlog during peak periods. Volunteered for weekend rotations to maintain 24x7 SLA compliance.',
            ],
          },
        ],
      },
    ],

    projects: [
      {
        name: 'Field Services Engineer – IT Asset Refresh Project',
        company: 'Vorwerk Group',
        companyUrl: 'https://corporate.vorwerk.com/en/home/',
        period: 'Apr 2025 – Jun 2025',
        location: 'Milan, Italy',
        items: [
          'Led multinational IT asset refresh by replacing laptops, desktops, routers, monitors, and peripherals for onsite and remote teams, ensuring minimal disruption and timely deployment.',
          'Autonomously coordinated logistics and troubleshooting with cross-country teams in Italy and India, managing 90% of decisions independently to streamline processes.',
          'Utilized SCCM and MDM platforms to provision, monitor, and track device compliance across departments, enhancing visibility into rollout progress and security posture.',
          'Resolved network port configurations and hardware compatibility issues on routers and servers, executing critical device replacements to maintain system stability.',
          'Authored multilingual self-help documentation (English, Italian, Hindi, Telugu) with detailed visuals, empowering users to resolve common issues and reducing technician workload.',
        ],
      },

      {
        name: 'Custom Web Crawling Automation Suite',
        company: 'B-Spidey',
        period: 'Jan 2024 – Present',
        items: [
          'Built modular web crawlers in Python using libraries like BeautifulSoup, Requests, and Playwright to extract data from dynamic and static web sources.',
          'Developed job scraping tools targeting platforms like LinkedIn, filtering out sponsored content to curate clean, ad-free job listings for analysis.',
          'Crawled manga aggregation sites to extract chapters and metadata; converted outputs to structured formats (JSON, PDF, EPUB) for archival and offline use.',
          'Designed scraping workflows to handle login, infinite scroll, rate limits, and CAPTCHA challenges using headless browsers and session management.',
          'Stored and indexed crawled data into MongoDB for fast querying, later used in visual dashboards and notification triggers.',
        ],
      },
      {
        name: 'B-Coin – Automated Crypto Trading Bot',
        period: 'Aug 2024 – Present',
        items: [
          'Built a Python-based crypto trading bot to automate buying/selling logic using technical indicators like RSI, EMA, and MACD.',
          'Integrated with Binance API for real-time market data, order placement, and account balance management with secure key handling.',
          'Implemented strategy logic for breakout detection, volatility filtering, and stop-loss triggers to limit downside risks.',
          'Logged trades with timestamps, position sizes, and performance metrics for post-trade analysis and ongoing strategy refinement.',
          'Tested bot logic using historical price data and dry-run environments before executing with live funds on a rolling schedule.',
        ],
      },
      {
        name: 'B-Web',
        period: 'Jan 2022 – Present',
        items: [
          'Sole developer and maintainer for multiple client websites across hospitality, entertainment, and satire sectors.',
          'Built responsive, SEO-optimized frontends using Vue.js, HTML5, and SCSS, integrating CMS platforms and Google Analytics.',
          'Handled hosting, SSL setup, and domain config across environments to ensure uptime and performance.',
          'Created and deployed custom features like booking widgets, dynamic menus, and structured data for rich snippets.',
          'Websites built and maintained:',
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
          'Completed a rigorous curriculum covering ETL processes, OLAP systems, SQL, Spark, R, Python, MongoDB, GDPR compliance, and advanced data visualization to support data-driven decision-making in enterprise environments.',
          'Executed capstone project on predictive sales forecasting using ARIMA and Random Forest models, achieving X% accuracy improvement over baseline and demonstrating advanced time-series analysis skills.',
          'Developed supply chain analytics dashboards during internship, which identified and reduced latency bottlenecks by approximately 30%, improving on-time delivery metrics and stakeholder satisfaction.',
          'Designed a real-time anomaly detection pipeline using Kafka and Spark ML—implemented a streaming-based alerts system that flagged data inconsistencies within seconds, enhancing operational responsiveness.',
          'Delivered a technical talk titled "Ethical AI" at the 2024 International Symposium and co-led a “Python for BI” workshop at UniGe, illustrating strong communication and thought leadership in data ethics and education.',
        ],
      },
      {
        degree: 'Bachelor of Technology – Mechanical Engineering',
        institution: 'NIT Raipur',
        location: 'Raipur, India',
        period: 'Jul 2010 – Jul 2014',
        highlights: [
          'Studied Solid Mechanics, Thermodynamics, CFD, CAD/CAM, CNC machining, MATLAB, and DFM across core and elective modules.',
          'Graduated in the top 20% of the class; received Merit Scholarship for academic performance throughout all four years.',
          'Led a team project to build a spring-powered boat, achieving a 3× performance increase over baseline in the college design challenge.',
          'Conducted peer training sessions on CNC safety and G-code programming during departmental workshops.',
          'Headed sustainability efforts as Go-Green Club lead, including design and campus-wide rollout of an eco-bin initiative for waste segregation.',
        ],
      },
      {
        degree: 'Italian Language Certification',
        institution: 'University Degli studo di Genova',
        location: 'Genova, Italy',
        period: '2023',
        highlights: ['Achieved B2 level proficiency in Italian language.'],
      },
      {
        degree: 'IELTS – B2',
        institution: 'British Council',
        location: 'Vijayawada, India',
        period: '2016',
        highlights: ['Scored B2 level proficiency in English based on IELTS standards.'],
      },
      {
        degree: 'CNC Machining & AutoCAD',
        institution: 'Central Institute of Tool Design',
        location: 'Hyderabad, India',
        period: '2012',
        highlights: ['Completed intensive hands-on training in CNC programming and drafting.'],
      },
    ],

    skills: {
      operatingSystems: ['Windows', 'Linux', 'MacOS', 'Android', 'iOS'],
      networking: [
        'VPN',
        'DHCP',
        'DNS',
        'LAN/WAN',
        'TCP/IP',
        'HTTP/HTTPS',
        'SMTP',
        'SSL/TLS',
        'Firewall',
        'Port Forwarding',
      ],
      cloudPlatforms: ['Azure', 'AWS', 'Heroku', 'DigitalOcean', 'InTune'],
      devOpsTools: [
        'SCCM',
        'AnyDesk',
        'CRM',
        'Jenkins',
        'GitLab CI/CD',
        'Docker',
        'Kafka',
        'Spark',
      ],
      databases: ['MongoDB', 'SQL'],
      analyticsAndBI: ['Tableau', 'Power BI', 'R', 'Google Analytics'],
      webDevelopment: [
        'Python',
        'JavaScript',
        'Vue.js',
        'Node.js',
        'Django',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'REST APIs',
        'JWT',
        'OAuth2',
        'Unit Testing',
      ],
      scriptingAndAutomation: [
        'Python',
        'Excel Macros',
        'BeautifulSoup',
        'Playwright',
        'Requests',
        'Regex',
      ],
      administration: [
        'MS Exchange',
        'Active Directory',
        'Office Suite',
        'IIS',
        'Service Desk Tools',
        'SLA Management',
        'Workforce Planning',
      ],
      softSkills: [
        'Customer Service',
        'Troubleshooting',
        'ITIL',
        'Management',
        'Stakeholder Communication',
        'Training',
        'Documentation',
        'Change Management',
      ],
      otherTech: [
        'SEO Optimization',
        'Web Scraping',
        'Crypto Trading Bots',
        'Machine Learning',
        'Data Visualization',
        'Workflow Automation',
        'Content Creation',
      ],
      languages: ['English', 'Italian', 'Hindi', 'Telugu', 'Spanish'],
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
        company: 'University Degli studo di Genova',
        period: '2023',
        location: 'Genova, Italy',
        items: ['Achieved B2 level proficiency in Italian language.'],
      },
      {
        name: 'IELTS – B2',
        company: 'British Council',
        period: '2016',
        location: 'Vijayawada, India',
        items: ['Scored B2 level proficiency in English based on IELTS standards.'],
      },
    ],

    awards: [
      {
        title: 'Gold Medal – Inter NIT Boxing',
        issuer: 'National Institute of Technology',
        issuerUrl: 'https://www.nitrr.ac.in',
        period: '2012',
        location: 'India',
        items: ['Won gold in the national inter-NIT boxing tournament (lightweight division).'],
      },
      {
        title: 'Bronze Medal – Inter NIT Boxing',
        issuer: 'National Institute of Technology',
        issuerUrl: 'https://www.nitrr.ac.in',

        period: '2013',
        location: 'India',
        items: ['Secured bronze the following year in the same national tournament.'],
      },
      {
        title: 'Symantec Employee of the Year',
        issuer: 'Symantec Corporation',
        issuerUrl: 'https://www.us.norton.com',
        period: '2014–2015',
        location: 'Chennai, India',
        items: ['Recognized for outstanding team leadership and technical innovation.'],
      },
    ],

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
