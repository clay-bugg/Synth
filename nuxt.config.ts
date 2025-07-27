export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Lexend: [100,200,300,400,500,600,700,800,900],
    }
  }
})