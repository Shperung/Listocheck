const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const variables = require('postcss-simple-vars');

const plugins = [
  nested,
  variables,
  autoprefixer({ browsers: ['last 2 versions', 'ie >= 11'] }),
];

module.exports = {
  plugins,
};
