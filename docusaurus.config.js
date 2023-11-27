// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BrowZer",
  tagline: "Original Monorepo Tool",
  url: "https://browzer.info",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  organizationName: "OpenZiti",
  projectName: "ziti-browzer-doc",
  deploymentBranch: "master",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      'docusaurus-plugin-segment',
      {
        apiKey: 'rlruGC16NVaO1XyGtwjht7yYkHsF6XuO'
      }
    ]
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/openziti/ziti-browzer-doc/tree/main/",
          sidebarCollapsed: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"), 
            require.resolve("./src/css/helpers.css")
          ],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "UA-91801335-8",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'try_browzer',
        content:
          'Get Started with BrowZer for Free &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style="font-size: 1.2em; font-weight: 600;" target="_blank" rel="noopener noreferrer" href="https://nfconsole.io/signup?selfServicePlan=teams&stepName=chosePlan&stepNum=1">Sign Up <span aria-hidden="true">→</span></a>',
        backgroundColor: '#158eed',
        textColor: '#fff',
        isCloseable: false,
      },

      algolia: {
        appId: "TQTSCMZ58J",
        apiKey: "9f3a0b1ac315bf1744cdbd1c4e8b3d23",
        indexName: "browzer",
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
        { name: "keywords", content: "browzer, browser, security, web, javascript, typescript, openziti" },
        {
          name: "description",
          content:
            "BrowZer is a modern zero trust system providing secure access to web applications.",
        },
        { name: "og:image", content: "https://browzer.info/images/og-image-browzer.png" },
      ],
      navbar: {
        title: "BrowZer by NetFoundry",
        logo: {
          alt: "OpenZiti BrowZer Logo",
          src: "images/browzer-logo.svg",
          srcDark: "images/browzer-logo.svg",
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

          {
            type: "doc",
            docId: "/faq",
            position: "left",
            label: "FAQ",
          },

          { 
            to: "https://blog.openziti.io", 
            label: "OpenZiti Tech Blog", 
            position: "right" 
          },

          {
            href: "https://github.com/openziti/ziti",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
            title: "OpenZiti on Github",
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
        ],
        copyright: `&copy; ${new Date().getFullYear()} NetFoundry. <br/>Built with ❤️ by makers for makers. <br/>Ship it!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
