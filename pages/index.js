import React from 'react'
import Head from 'next/head'

const Home = () => (
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

        <section className="lead">
          <h1><em>Thick Bikes</em> is an award winning bike shop. We sell bikes. We repair bikes. We're all about bikes.</h1>
          <h2>We have every bike things for all types of bike people. If you want to buy, repair, or modify your bike... We're the best shop in Pittsburgh for bikes. We've been helping Pittsburgh safely get on two wheels since 1999.</h2>
        </section>

        <aside className="page-sep main-sep"></aside>

        <section className="contact-swag">
          <h1>Hours (As of April 1st)</h1>
          <h2>Spring. Time to fix your old bike and get a new one.</h2>
          <aside className="hours">
            <div><h4>Monday</h4> <span> 11a - 8p</span></div>
            <div><h4>Tuesday</h4> <span> 11a - 8p</span></div>
            <div><h4>Wednesday</h4> <span> 11a - 8p</span></div>
            <div><h4>Thursday</h4> <span> 11a - 8p</span></div>
            <div><h4>Friday</h4> <span> 11a - 8p</span></div>
            <div><h4>Saturday</h4> <span> 9a - 5p</span></div>
            <div><h4>Sunday</h4> <span> Closed</span></div>
          </aside>
        </section>

        <aside className="page-sep contact-sep"></aside>

        <section className="contact-swag swag-jag">
          <h1>Phone / Email </h1>
          <h2>Feel free to contact us about anything bike related. We're friendly.</h2>
          <p><a href="tel:4123903590">(412) 390 - 3590</a></p>
          <div className="emails">
            <aside>
              <h3>Technical Questions</h3>
              <h4><a href="mailto:tech@thickbikes.com">tech@thickbikes.com</a></h4>
            </aside>
            <aside>
              <h3>Sales Questions</h3>
              <h4><a href="mailto:sales@thickbikes.com">sales@thickbikes.com</a></h4>
            </aside>
          </div>
        </section>

        <aside className="page-sep intense-sep"></aside>

        <section className="contact-swag swig" >
          <h1>Address</h1>
          <h2>Don't let the southside parking phobia keep you from stopping by. We have a parking lot in front of our building right off of 15th street.</h2>
          <aside className="address">
            <h4><a href="https://www.google.com/maps?ll=40.42614,-79.978377&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=10115945386035297245">62 S. 15th Street / Pittsburgh, Pa / 15203</a></h4>
          </aside>
        </section>

        <aside className="page-sep special-sep"></aside>

        <section className="contact-swag ">
          <h1>Goods</h1>
          <h2>We carry a wide range of companies and we're currently finalizing the list in a sortable format. Until then, let's just say that we carry all the cool stuff at a good price.</h2>
          <h2>We also fix up and sell used bikes. Visit our <a href="https://www.facebook.com/pg/thickbikes/photos/?tab=album&album_id=1289118467776234">Facebook Page</a> to see our current listing of used bikes.</h2>
          <h2></h2>
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

export default Home
