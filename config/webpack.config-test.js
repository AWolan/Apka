var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'persistence$': 'src/server/persistence',
      'nm': 'node_modules',
      'test$': 'test',

      'service$': 'src/server/service/',
      'rest$': 'src/server/rest/'
    }
  }
};
