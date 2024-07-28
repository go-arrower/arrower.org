// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arrower",
  tagline: "Arrows for your application's needs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://arrower.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "go-arrower", // Usually your GitHub org/user name.
  projectName: "arrower.org", // Usually your repo name.
  trailingSlash: false, // GitHub pages adds trailing slash to Docusaurus URLs by default. It is recommended to set a trailingSlash config (true or false, not undefined).

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/go-arrower/arrower.org/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/go-arrower/arrower.org/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-B5NQ6P46Q8",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Arrower",
        logo: {
          alt: "Arrower Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          // { to: "/leuchtturm", label: "Leuchtturm", position: "left" },
          { to: "/methodik", label: "Methodik", position: "left" },
          { to: "/blog", label: "Blog", position: "right" },
          // { to: "/code-style", label: "Code Style", position: "left" },
          { to: "/reference", label: "Reference", position: "right" },
          {
            href: "https://github.com/go-arrower/arrower",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Why Arrower?",
                to: "/docs/why",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/arrower_org",
              },
              {
                label: "Discord",
                href: "https://discord.gg/3Aukzde8Sg",
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/arrower',
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/go-arrower/arrower",
              },
            ],
          },
        ],
        copyright: `Arrower ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash"],
      },
    }),
};

module.exports = config;
