/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const path = require('path');
const fs = require('fs');

const React = require('react');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const { createElement: h } = require('react');
const {default: App} = require('../../src/containers/App')

function universalLoader(req, res) {
  const app = h(App);
  const staticRouter = h(StaticRouter, { location: req.url, context: {} }, app);
  const markup = renderToString(staticRouter);
  console.log(markup);
  // we're good, send the response
  res.view('homepage', { markup });
}

module.exports = {
  index: universalLoader,
};
