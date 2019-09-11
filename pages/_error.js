import React from 'react'
import Head from 'next/head'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
    <div className="app">
      <header>
        <img src="static/img/thicklogo.svg" alt="Thick Bikes - Pittsburgh Bike Shop logo" />
      </header>
      <main>
        <Head>
          <title>Thick Bikes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta content="Thick Bikes - Pittsburgh Bike Shop." name="description" />
          <meta content="Thick Bikes" name="author" />
          <link rel="icon" type="image/x-icon" href="static/favicon.ico'" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6038632/635026/css/fonts.css" />
          <link href="static/css/main.css" rel="stylesheet" />
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
          }} />
          <meta property="og:url" content="https://www.thickbikes.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Thick Bikes" />
          <meta property="og:description" content="Pittsburgh Bike Shop" />
          <meta property="og:image" content="https://www.thickbikes.com/thickshare.jpg" />
          <meta property="fb:app_id" content="902597493193184" />
        </Head>
        <div className="content">
          <section className="fourcontainer">
            <h1>I'm not sure what happened. Probably Bees. It seems like it's <em>always</em> bees...</h1>
            <p>Try the <a href="/">homepage</a> instead.</p>
            <p>With love,<br/><em>Some nerd... Somewhere...</em></p>
          </section>
        </div>
      </main>
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/thickbikes/">facebook</a></li>
          <li><a href="https://twitter.com/thickbikes">twitter</a></li>
          <li><a href="https://www.instagram.com/thickbikes/">instagram</a></li>
        </ul>
        <p>As a quick reminder. We have <a href="https://www.youtube.com/watch?v=cd4-UnU8lWY&feature=youtu.be&t=35">free parking</a>.</p>
      </footer>
    </div>
    )
  }
}

export default Error
