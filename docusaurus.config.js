// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wealtify-JS Doc',
  tagline: 'Welcome to Wealtify-JS Documentation',
  favicon: 'img/favicon.svg',

  url: 'https://github.com/FlorianPALVADEAU/Wealtify-js',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/FlorianPALVADEAU/Wealtify-js',
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
      image: 'img/wealtify-js.png',
      navbar: {
        title: 'Wealtify-JS Doc',
        logo: {
          alt: 'Wealtify-js Logo',
          src: 'img/wealtify-js.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/FlorianPALVADEAU/Wealtify-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wealtify-JS Doc',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/FlorianPALVADEAU/Wealtify-js',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wealtify-JS, Inc. Built with 💸.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
