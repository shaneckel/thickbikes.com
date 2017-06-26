'use strict';

var Nuxt = require('nuxt');
var app = require('express')();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/api', require('./api/index'));

var config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

var nuxt = new Nuxt(config);
app.use(nuxt.render);

if (config.dev) {
  nuxt.build().catch(function (error) {
    console.error(error);
    process.exit(1);
  });
}

app.listen(port, host);
console.log('> thickbikes at ' + host + ' : ' + port);
