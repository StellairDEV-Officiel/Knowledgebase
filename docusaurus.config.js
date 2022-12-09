module.exports = {
  title: "LiteCloud | Documentation",
  tagline: "L\'hébergeur engagé sans engagement - Documentation LiteCloud",
  url:
    process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"
      ? `https://${process.env.VERCEL_URL}`
      : "https://docs.litecloud.fr",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "remotion-dev", // Usually your GitHub org/user name.
  projectName: "remotion", // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: "PLSDUOL1CA",
      apiKey: "3e42dbd4f895fe93ff5cf40d860c4a85",
      indexName: "remotion",
      contextualSearch: false,
    },
    image: "img/social-preview.png",
    navbar: {
      logo: {
        alt: "LiteCloud Logo",
        src: "img/n-logo.png",
        srcDark: "img/n-logo.png",
      },
      items: [
        {
          to: "/docs",
          label: "Docs",
          position: "left",
          type: "docSidebar",
          sidebarId: "mainSidebar",
        },
        { 
          to: "/blog",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://twitter.com/litecloudsas",
          label: "Twitter",
          position: "right",
          "data-splitbee-event": "External Link",
          "data-splitbee-event-target": "Twitter",
        },
        {
          href: "https://discord.gg/gxAuEK6Qm5",
          label: "Discord",
          position: "right",
          "data-splitbee-event": "External Link",
          "data-splitbee-event-target": "Discord",
        }
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Commencer",
              href: "https://docs.litecloud.fr/docs",
              "data-splitbee-event": "External Link",
              "data-splitbee-event-target": "Docs",
            }
          ],
        },
        {
          title: "Communauté",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/gxAuEK6Qm5",
              "data-splitbee-event": "External Link",
              "data-splitbee-event-target": "Discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/litecloudsas",
              "data-splitbee-event": "External Link",
              "data-splitbee-event-target": "Twitter",
            }
          ],
        },
        {
          title: "Autres",
          items: [
            {
              label: "L'hébergeur",
              href: "https://litecloud.fr",
              "data-splitbee-event": "External Link",
              "data-splitbee-event-target": "LiteCloud",
            }
          ],
        }
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/remotion-dev/remotion/edit/main/packages/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
    [
      "@jonny/docusaurus-preset-shiki-twoslash",
      {
        vfsRoot: process.cwd(),
        themes: ["github-light", "github-dark"],
        defaultCompilerOptions: {
          types: ["node"],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "success-stories",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "success-stories",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./success-stories",
        blogSidebarTitle: "Success stories",
      },
    ],
    "./route-plugin",
  ],
};
