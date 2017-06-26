module.exports = {
  head: {
    title: 'Thick Bikes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thick Bikes - Pittsburgh Bike Shop' },
      { property: 'og:url', content: 'http://www.thickbikes.com'},
      { property: 'og:type', content: 'website'},
      { property: 'og:title', content: 'Thick Bikes'},
      { property: 'og:description', content: 'Pittsburgh Bike Shop'},
      { property: 'og:image', content: 'http://www.thickbikes.com/thickshare.jpg'},
      { property: 'fb:app_id', content: '902597493193184'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', type: 'text/css', href: '//cloud.typography.com/6038632/635026/css/fonts.css'}
    ]
  },
  css: ['~assets/css/main.css'],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  build: {
    vendor: ['axios']
  }
}
