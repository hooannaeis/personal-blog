export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },


  // ssr: false,
  // nitro: {
  //   preset: "service-worker",
  // },
});
