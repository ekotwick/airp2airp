'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');
;
const pkg = require('../package.json')

const app = express();

// `.use` returns `app`, which allows for chaining
module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.

if (module === require.main) {
  const server = app.listen(
    process.env.PORT || 1337, () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`);
      console.log(`Listening on ${JSON.stringify(server.address())}`);
    });
}
