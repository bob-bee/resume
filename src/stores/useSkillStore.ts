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
          name: 'BI Tools',
          children: [
            {
              name: 'Visualization',
              children: [
                { name: 'Tableau', value: 3 },
                { name: 'Power BI', value: 4 },
                { name: 'Google Analytics', value: 3 },
              ],
            },
            {
              name: 'Statistical',
              children: [{ name: 'R', value: 3 }],
            },
          ],
        },
        {
          name: 'Data Science',
          children: [
            {
              name: 'Techniques',
              children: [
                { name: 'Machine Learning', value: 3 },
                { name: 'Data Visualization', value: 3 },
                { name: 'Workflow Automation', value: 3 },
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
              children: [
                { name: 'Crypto Trading Bots', value: 4 },
                { name: 'Web Scraping', value: 5 },
              ],
            },
            {
              name: 'Content & SEO',
              children: [
                { name: 'SEO Optimization', value: 3 },
                { name: 'Content Creation', value: 4 },
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
          name: 'Professional',
          children: [
            {
              name: 'Core',
              children: [
                { name: 'Customer Service', value: 5 },
                { name: 'Troubleshooting', value: 5 },
                { name: 'ITIL', value: 3 },
                { name: 'Management', value: 4 },
                { name: 'Stakeholder Communication, value : 3' },
                { name: 'Training', value: 3 },
                { name: 'Documentation', value: 5 },
                { name: 'Change Management', value: 4 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Languages',
      value: 25,
      children: [
        { name: 'English', value: 5 },
        { name: 'Italian', value: 3 },
        { name: 'Hindi', value: 4 },
        { name: 'Telugu', value: 5 },
        { name: 'Spanish', value: 1 },
      ],
    },
  ],
};
