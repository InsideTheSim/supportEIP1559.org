const head = {
  title: '#SupportEIP1559 🔥 - Protect Ethereum’s transaction user experience from attack.',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'EIP-1559 is an Ethereum Improvement Proposal designed to improve the Ethereum fee market and create a more consistent user experience. Predictable transaction fees are very important to users in order to avoid stalled / failed transactions. We need to stand in support of this proposal.' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://supporteip1559.org/og.png' }
  ]
}

export default {
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head,

  env: {
    head
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-select',
    { src: '~/plugins/touch', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/google-gtag',
    'cookie-universal-nuxt'
  ],

  colorMode: {
    classSuffix: ''
  },

  // PWA config
  pwa: {
    meta: {
      ogSiteName: '#SupportEIP1559 🔥 - Protect Ethereum’s transaction user experience from attack.',
      ogTitle: '#SupportEIP1559 🔥 - Protect Ethereum’s transaction user experience from attack.',
      ogDescription: 'EIP-1559 is an Ethereum Improvement Proposal designed to improve the Ethereum fee market and create a more consistent user experience. Predictable transaction fees are very important to users in order to avoid stalled / failed transactions. We need to stand in support of this proposal.',
      ogHost: 'https://supporteip1559.org',
      ogImage: '/og.png',
      twitterCard: 'summary_large_image'
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  'google-gtag': {
    id: 'G-09BQ6JCBC5'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
