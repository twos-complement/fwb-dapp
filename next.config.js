const compose = require('lodash/fp/compose');
const withSvgr = require('next-svgr');

module.exports = compose(
  withSvgr,
);