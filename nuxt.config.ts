// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    header:{
      link: [{rel: 'icon', type: 'image/x-icon', href:'/favicon.ico'}],

      script: [{
          defer: true,
          src:'https://cloud.umami.is/script.js',
          'data-website-id': 'eb062263-324d-4da6-8090-52f2d68507ca'
        }
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-content-assets',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
  classSuffix: '',
  },
  content: {
	highlight :{
		theme: {
			dark: "github-dark",
			light: "one-dark-pro"
		}
	}
  },
  mdc:{
    remarkPlugins: {
      remarkMath: {src: 'remark-math'}},
	rehypePlugins: {
    rehypeMathjax: {
      src: 'rehype-mathjax',
    }
  },
  },
})
