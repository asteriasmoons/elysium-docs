// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  // === Site identity ===
  title: "Elysium Bot Docs",
  tagline: "Track your books, tame your mind, transform your life.",
  favicon: "img/favicon.ico",

  // Keep v4 compatibility flag
  future: { v4: true },

  // === URLs (not using GitHub Pages) ===
  // Use your real domain later (e.g., https://docs.yourdomain.com)
  url: "https://elysium-docs.vercel.app/",
  baseUrl: "/",

  // Link handling
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // i18n
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // === Preset ===
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Remove edit links by omitting editUrl
          // editUrl: undefined,
        },
        // Blog completely disabled
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  // === Theme config ===
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.jpg",
      // 👇 add this block
      colorMode: {
        defaultMode: "light", // or 'dark'
        disableSwitch: false, // ensures toggle is visible
        respectPrefersColorScheme: true, // (optional) follows OS setting
      },

      navbar: {
        title: "Elysium",
        logo: {
          alt: "Your Bot Logo",
          src: "img/logo.png", // replace if you have a logo
        },
        items: [
          // Keep a Docs link (renamed from "Tutorial")
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar", // default sidebar id from scaffold
            position: "left",
            label: "Docs",
          },
          {
            to: "/announcements",
            label: "Updates",
            position: "left",
          },
          // Removed Blog
          // Removed GitHub Pages–specific stuff; keep GitHub link if you want
          // { href: 'https://github.com/your/repo', label: 'GitHub', position: 'right' },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              // Renamed; no "Tutorial"
              { label: "Docs Home", to: "/docs/intro" },
            ],
          },
          {
            title: "Community",
            items: [
              // Removed Stack Overflow and X
              // Keep Discord if you want; edit/remove as needed
              {
                label: "Discord",
                href: "https://discord.gg/jS5eTjhK7R",
              },
            ],
          },
          {
            title: "More",
            items: [
              // Keep/disable GitHub as you prefer
              {
                label: "GitHub",
                href: "https://github.com/asteriasmoons/elysium-docs",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Elysium Docs. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;