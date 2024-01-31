// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },

  css: ["@/assets/scss/app.scss"],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
        },
      },
    ],
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    [
      "shadcn-nuxt",
      {
        shadcn: {
          /**
           * Prefix for all the imported component
           */
          prefix: "",
          /**
           * Directory that the component lives in.
           * @default "./components/ui"
           */
          componentDir: "./components/ui",
        },
      },
    ],
  ],

  typescript: {
    typeCheck: true,
  },

  components: [
    {
      path: "~/components/ktv",
      pathPrefix: false,
      prefix: "ktv",
    },
  ],

  devtools: { enabled: true },
});
