const withTM = require('next-transpile-modules')([
  'unist-builder',
  'unist-util-visit',
])

module.exports = withTM()
