// stores/useSkillStore.ts
import { defineStore } from 'pinia';
import type { SkillNode } from 'src/models/models';

export const useSkillStore = defineStore('skillStore', {
  state: () => ({
    skills: skillsNested,
  }),
  getters: {
    flatSkills: (state): string[] => {
      const names: string[] = [];

      const traverse = (node: SkillNode) => {
        names.push(node.name);
        node.children?.forEach(traverse);
      };

      traverse(state.skills);
      return names;
    },
  },
});

// Raw nested structure — place it here or in a separate file and import
const skillsNested: SkillNode = {
  name: 'Skills',
  children: [
    {
      name: 'IT & Infrastructure',
      children: [
        {
          name: 'Operating Systems',
          children: [
            {
              name: 'Desktop',
              children: [{ name: 'Windows' }, { name: 'Linux' }, { name: 'MacOS' }],
            },
            {
              name: 'Mobile',
              children: [{ name: 'Android' }, { name: 'iOS' }],
            },
          ],
        },
        {
          name: 'Networking',
          children: [
            {
              name: 'Protocols',
              children: [
                { name: 'TCP/IP' },
                { name: 'HTTP/HTTPS' },
                { name: 'SMTP' },
                { name: 'SSL/TLS' },
              ],
            },
            {
              name: 'Services',
              children: [
                { name: 'VPN' },
                { name: 'DHCP' },
                { name: 'DNS' },
                { name: 'LAN/WAN' },
                { name: 'Firewall' },
                { name: 'Port Forwarding' },
              ],
            },
          ],
        },
        {
          name: 'Administration',
          children: [
            {
              name: 'Systems',
              children: [
                { name: 'MS Exchange' },
                { name: 'Active Directory' },
                { name: 'Office Suite' },
                { name: 'IIS' },
              ],
            },
            {
              name: 'Service Management',
              children: [
                { name: 'Service Desk Tools' },
                { name: 'SLA Management' },
                { name: 'Workforce Planning' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Cloud & DevOps',
      children: [
        {
          name: 'Cloud Platforms',
          children: [
            {
              name: 'Vendors',
              children: [
                { name: 'Azure', value: 3 },
                { name: 'AWS', value: 3 },
                { name: 'Heroku', value: 3 },
                { name: 'DigitalOcean', value: 3 },
              ],
            },
            {
              name: 'Device Management',
              children: [{ name: 'InTune', value: 3 }],
            },
          ],
        },
        {
          name: 'DevOps Tools',
          children: [
            {
              name: 'Automation',
              children: [
                { name: 'SCCM', value: 3 },
                { name: 'Jenkins', value: 3 },
                { name: 'GitLab CI/CD', value: 3 },
              ],
            },
            {
              name: 'Remote & Collaboration',
              children: [
                { name: 'AnyDesk', value: 3 },
                { name: 'CRM', value: 3 },
              ],
            },
            {
              name: 'Containers & Streaming',
              children: [
                { name: 'Docker', value: 3 },
                { name: 'Kafka', value: 3 },
                { name: 'Spark', value: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Development',
      children: [
        {
          name: 'Web Development',
          children: [
            {
              name: 'Languages',
              children: [
                { name: 'JavaScript', value: 3 },
                { name: 'HTML', value: 3 },
                { name: 'CSS', value: 3 },
                { name: 'Python', value: 3 },
                { name: 'CLI', value: 3 },
              ],
            },
            {
              name: 'Frameworks',
              children: [
                { name: 'VueJS', value: 3 },
                { name: 'Django', value: 3 },
                { name: 'NodeJS', value: 3 },
                { name: 'ExpressJS', value: 3 },
              ],
            },
            {
              name: 'APIs & Auth',
              children: [
                { name: 'REST APIs', value: 3 },
                { name: 'JWT', value: 3 },
                { name: 'OAuth2', value: 3 },
              ],
            },
            {
              name: 'Testing',
              children: [{ name: 'Unit Testing', value: 3 }],
            },
          ],
        },
        {
          name: 'Scripting & Automation',
          children: [
            {
              name: 'Python Ecosystem',
              children: [
                { name: 'Python' },
                { name: 'BeautifulSoup' },
                { name: 'Playwright' },
                { name: 'Requests' },
              ],
            },
            {
              name: 'Productivity',
              children: [{ name: 'Excel Macros' }, { name: 'Regex' }],
            },
          ],
        },
        {
          name: 'Databases',
          children: [
            {
              name: 'DBMS',
              children: [{ name: 'MongoDB' }, { name: 'SQL' }],
            },
          ],
        },
      ],
    },
    {
      name: 'Analytics & BI',
      children: [
        {
          name: 'Business Intelligence',
          children: [
            {
              name: 'Dashboarding & Reporting',
              children: [
                { name: 'Power BI', value: 4 },
                { name: 'Tableau', value: 3 },
                { name: 'Grafana', value: 4 },
                { name: 'Google Analytics', value: 3 },
              ],
            },
            {
              name: 'Statistical Tools',
              children: [
                { name: 'R', value: 3 },
                { name: 'MATLAB', value: 3 },
              ],
            },
            {
              name: 'Scripting & Integration',
              children: [
                { name: 'Python', value: 4 },
                { name: 'SQL', value: 4 },
              ],
            },
          ],
        },
        {
          name: 'Data Science',
          children: [
            {
              name: 'Data Engineering',
              children: [
                { name: 'ETL', value: 3 },
                { name: 'Data Cleansing', value: 3 },
                { name: 'Data Warehousing', value: 3 },
                { name: 'Airflow', value: 3 },
                { name: 'Databricks', value: 3 },
                { name: 'Data Flow', value: 3 },
              ],
            },
            {
              name: 'Visualization Libraries',
              children: [
                { name: 'pandas', value: 3 },
                { name: 'matplotlib', value: 3 },
                { name: 'd3.js', value: 3 },
              ],
            },
            {
              name: 'Machine Learning',
              children: [
                { name: 'Scikit-learn', value: 4 },
                { name: 'XGBoost', value: 3 },
                { name: 'TensorFlow', value: 3 },
                { name: 'Model Deployment', value: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Other ',
      children: [
        {
          name: 'Automation & Bots',
          children: [
            {
              name: 'Trading Systems',
              children: [
                { name: 'Crypto Trading Bots', value: 4 },
                { name: 'Arbitrage Bots', value: 4 },
              ],
            },
            {
              name: 'Data Automation',
              children: [
                { name: 'Web Scraping', value: 5 },
                { name: 'API Integration', value: 5 },
                { name: 'Synthetic Data Generation', value: 5 },
              ],
            },
          ],
        },
        {
          name: 'Content Tech',
          children: [
            {
              name: 'Content Production',
              children: [
                { name: 'Content Planning', value: 4 },
                { name: 'Shooting & Recording', value: 4 },
                { name: 'Editing & Post-Production', value: 4 },
                { name: 'Publishing Automation', value: 4 },
              ],
            },
            {
              name: 'Digital Optimization',
              children: [
                { name: 'SEO Strategies', value: 3 },
                { name: 'Content Performance Tracking', value: 3 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Soft Skills',
      children: [
        {
          name: 'Communication',
          children: [
            {
              name: 'Verbal',
              children: [
                { name: 'Clarity', value: 4 },
                { name: 'Tone Control', value: 2 },
              ],
            },
            {
              name: 'Written',
              children: [
                { name: 'Grammar', value: 5 },
                { name: 'Structure & Flow', value: 3 },
              ],
            },
            {
              name: 'Listening',
              children: [
                { name: 'Active Listening', value: 5 },
                { name: 'Asking Questions', value: 3 },
              ],
            },
          ],
        },
        {
          name: 'Interpersonal Skills',
          children: [
            {
              name: 'Emotional Intelligence',
              children: [
                { name: 'Self-Awareness', value: 4 },
                { name: 'Empathy', value: 2 },
              ],
            },
            {
              name: 'Social Skills',
              children: [
                { name: 'Conflict Resolution', value: 4 },
                { name: 'Relationship Building', value: 5 },
              ],
            },
            {
              name: 'Team Interaction',
              children: [
                { name: 'Collaboration', value: 4 },
                { name: 'Giving Feedback', value: 1 },
              ],
            },
          ],
        },
        {
          name: 'Leadership & Management',
          children: [
            {
              name: 'Strategic',
              children: [
                { name: 'Vision Setting', value: 2 },
                { name: 'Decision Making', value: 4 },
              ],
            },
            {
              name: 'Operational',
              children: [
                { name: 'Delegation', value: 3 },
                { name: 'Time Management', value: 3 },
              ],
            },
            {
              name: 'Motivational',
              children: [
                { name: 'Inspiring Others', value: 5 },
                { name: 'Accountability', value: 4 },
              ],
            },
          ],
        },
        {
          name: 'Problem Solving',
          children: [
            {
              name: 'Thinking Skills',
              children: [
                { name: 'Critical Thinking', value: 4 },
                { name: 'Analytical Thinking', value: 3 },
              ],
            },
            {
              name: 'Creativity',
              children: [
                { name: 'Brainstorming', value: 5 },
                { name: 'Lateral Thinking', value: 1 },
              ],
            },
            {
              name: 'Adaptability',
              children: [
                { name: 'Flexibility', value: 4 },
                { name: 'Stress Tolerance', value: 2 },
              ],
            },
          ],
        },

        {
          name: 'Open-mindedness',
          children: [
            { name: 'Accepting Feedback', value: 5 },
            { name: 'Challenging Biases', value: 4 },
          ],
        },

        {
          name: 'Languages',
          children: [
            { name: 'English', value: 5 },
            { name: 'Italian', value: 3 },
            { name: 'Hindi', value: 4 },
            { name: 'Telugu', value: 5 },
            { name: 'Spanish', value: 1 },
          ],
        },
      ],
    },
  ],
};
