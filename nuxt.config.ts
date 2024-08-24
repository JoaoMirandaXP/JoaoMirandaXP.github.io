// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
  head:{
      link: [{rel: 'icon', type: 'image/x-icon',href:'/favicon.ico'}],
      script: [{
        defer: true,
        src:'https://cloud.umami.is/script.js',
        'data-website-id':'ae744627-2ef1-44ab-8cb2-6601add9c753'
      }]
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
		},
    langs:[ 'c', 'cpp', 'python', 'java','json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml']
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
  vue: {
    compilerOptions:{
      isCustomElement: (tag) => (tag === 'MjxContainer' ||
                                 tag === 'G' ||
                                 tag === 'Path' ||
                                 tag === 'Use' ||
                                 tag === 'Rect' ||
                                 tag === 'Line' ||
                                 tag === 'Defs')
    },
  },
})
