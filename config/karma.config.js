var webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['../test/client/index.js'],
    preprocessors: {
      '../test/client/index.js': ['webpack', 'babel']
      // '../test/**/*.spec.js': ['webpack', 'babel']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: '../test/coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
