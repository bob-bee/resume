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
                { name: 'Azure' },
                { name: 'AWS' },
                { name: 'Heroku' },
                { name: 'DigitalOcean' },
              ],
            },
            {
              name: 'Device Management',
              children: [{ name: 'InTune' }],
            },
          ],
        },
        {
          name: 'DevOps Tools',
          children: [
            {
              name: 'Automation',
              children: [{ name: 'SCCM' }, { name: 'Jenkins' }, { name: 'GitLab CI/CD' }],
            },
            {
              name: 'Remote & Collaboration',
              children: [{ name: 'AnyDesk' }, { name: 'CRM' }],
            },
            {
              name: 'Containers & Streaming',
              children: [{ name: 'Docker' }, { name: 'Kafka' }, { name: 'Spark' }],
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
              name: 'Languages & Frameworks',
              children: [
                { name: 'Python' },
                { name: 'JavaScript' },
                { name: 'Vue.js' },
                { name: 'Node.js' },
                { name: 'Django' },
              ],
            },
            {
              name: 'Frontend',
              children: [
                { name: 'HTML5' },
                { name: 'CSS3' },
                { name: 'SCSS' },
                { name: 'Bootstrap' },
              ],
            },
            {
              name: 'APIs & Auth',
              children: [{ name: 'REST APIs' }, { name: 'JWT' }, { name: 'OAuth2' }],
            },
            {
              name: 'Testing',
              children: [{ name: 'Unit Testing' }],
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
          name: 'BI Tools',
          children: [
            {
              name: 'Visualization',
              children: [{ name: 'Tableau' }, { name: 'Power BI' }, { name: 'Google Analytics' }],
            },
            {
              name: 'Statistical',
              children: [{ name: 'R' }],
            },
          ],
        },
        {
          name: 'Data Science',
          children: [
            {
              name: 'Techniques',
              children: [
                { name: 'Machine Learning' },
                { name: 'Data Visualization' },
                { name: 'Workflow Automation' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Other Tech',
      children: [
        {
          name: 'Specialized',
          children: [
            {
              name: 'Automation & Bots',
              children: [{ name: 'Crypto Trading Bots' }, { name: 'Web Scraping' }],
            },
            {
              name: 'Content & SEO',
              children: [{ name: 'SEO Optimization' }, { name: 'Content Creation' }],
            },
          ],
        },
      ],
    },
    {
      name: 'Soft Skills',
      children: [
        {
          name: 'Professional',
          children: [
            {
              name: 'Core',
              children: [
                { name: 'Customer Service' },
                { name: 'Troubleshooting' },
                { name: 'ITIL' },
                { name: 'Management' },
                { name: 'Stakeholder Communication' },
                { name: 'Training' },
                { name: 'Documentation' },
                { name: 'Change Management' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Languages',
      children: [
        {
          name: 'Spoken',
          children: [
            {
              name: 'Fluent',
              children: [
                { name: 'English' },
                { name: 'Italian' },
                { name: 'Hindi' },
                { name: 'Telugu' },
                { name: 'Spanish' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
