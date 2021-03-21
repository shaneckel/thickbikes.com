import * as React from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { Theme, GlobalStyles} from '../components/Theme'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Thick Bikes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="Thick Bikes - Pittsburgh Bike Shop." name="description" />
        <meta content="Thick Bikes" name="author" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6038632/635026/css/fonts.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-17701242-8', 'auto');
            ga('send', 'pageview');
            `,
          }} 
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&family=Work+Sans&display=swap" rel="stylesheet" />
        <meta property="og:url" content="https://thickbikes.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thick Bikes" />
        <meta property="og:description" content="Pittsburgh Bike Shop" />
        <meta property="og:image" content="https://thickbikes.com/thickshare2021.jpg" />
        <meta property="fb:app_id" content="902597493193184" />
      </Head>
      <ThemeProvider theme={Theme}>
        {GlobalStyles}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
