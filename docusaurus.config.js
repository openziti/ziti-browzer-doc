// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BrowZer",
  tagline: "Original Monorepo Tool",
  url: "https://lerna.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  organizationName: "lerna",
  projectName: "website",
  deploymentBranch: "master",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/lerna/lerna/tree/main/website/",
          sidebarCollapsed: false,
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/helpers.css")],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-1LKTTC3R7Q",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "W7AFDUEIGE",
        apiKey: "95785b7a78017aade2bc8b82ca965e24",
        indexName: "lerna",
        contextualSearch: false,
        searchPagePath: false,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      metadata: [
        { name: "keywords", content: "monorepo, javascript, typescript, lerna, nx, nrwl" },
        {
          name: "description",
          content:
            "Lerna is the standard tool for managing and publishing versioned Javascript packages from a same repository.",
        },
        { name: "og:image", content: "https://lerna.js.org/images/og-image-lerna.png" },
      ],
      navbar: {
        title: "OpenZiti BrowZer",
        logo: {
          alt: "Lerna Logo",
          src: "images/lerna-logo-dark.svg",
          srcDark: "images/lerna-logo-light.svg",
        },
        items: [
          {
            type: "doc",
            docId: "/about",
            position: "left",
            label: "Docs",
          },

          {
            type: "doc",
            docId: "/getting-started",
            position: "left",
            label: "Get Started",
          },

          { to: "https://openziti.io", label: "OpenZiti Tech Blog", position: "right" },
          // {
          //   href: "https://nx.dev",
          //   className: "header-nxdev-link",
          //   "aria-label": "Nx documentation",
          //   position: "right",
          //   title: "Check Nx",
          //   label: "Nx",
          // },
          // {
          //   href: "https://nx.app",
          //   className: "header-nxdev-link",
          //   "aria-label": "Nx Cloud",
          //   position: "right",
          //   title: "Check Nx Cloud",
          //   label: "Nx Cloud",
          // },
          // {
          //   href: "https://nrwl.io",
          //   className: "header-nrwlio-link",
          //   "aria-label": "Nrwl consulting",
          //   position: "right",
          //   title: "Check Nrwl",
          //   label: "Nrwl",
          // },
          {
            href: "https://github.com/openziti/ziti",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
            title: "Lerna on Github",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Blog",
                href: "https://openziti.io/?utm_source=browzer.info",
              },
              {
                label: "Youtube Channel",
                href: "https://www.youtube.com/openziti?utm_source=browzer.info",
              },
            ],
          },
          {
            title: "Help",
            items: [
              {
                label: "Troubleshooting",
                to: "/docs/troubleshooting",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/browzer",
              },
              {
                label: "Report Issues",
                href: "https://openziti.discourse.group",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/openziti",
              },
              {
                label: "GitHub",
                href: "https://github.com/openziti",
              },
              {
                label: "Newsletter",
                href: "https://openziti.io#blog-subscription-form?utm_source=browzer.info",
              },
              {
                label: "Help Us",
                href:
                  "https://github.com/openziti/ziti/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",
              },
            ],
          },
          // {
          //   title: "Solutions",
          //   items: [
          //     {
          //       label: "Nx",
          //       href: "https://nx.dev/?utm_source=lerna.js.org",
          //     },
          //     {
          //       label: "NxCloud",
          //       href: "https://nx.app/?utm_source=lerna.js.org",
          //     },
          //     {
          //       label: "Nrwl",
          //       href: "https://nrwl.io/?utm_source=lerna.js.org",
          //     },
          //   ],
          // },
        ],
        copyright: `&copy; ${new Date().getFullYear()} NetFoundry`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
