// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Academic Moodle Cooperation',
  tagline: 'Dokumentation',
  url: 'https://academic-moodle-cooperation.org',
  baseUrl: process.env.BASE_URL ?? '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Academic Moodle Cooperation', // Usually your GitHub org/user name.
  projectName: 'doku', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/academic-moodle-cooperation/doku/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/academic-moodle-cooperation/doku/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Academic Moodle Cooperation',
        logo: {
          alt: 'Academic Moodle Cooperation Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorials',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cheatsheet',
            position: 'left',
            label: 'Cheat Sheets',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.academic-moodle-cooperation.org',
            label: 'Academic Moodle Cooperation',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/tutorials',
              },
              {
                label: 'Cheat Sheets',
                to: '/docs/cheat-sheets',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/academic-moodle-cooperation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Academic Moodle Cooperation',
                to: 'https://www.academic-moodle-cooperation.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Academic Moodle Cooperation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
