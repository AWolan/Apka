var CopyWebpackPlugin = require('copy-webpack-plugin');

var copySources = new CopyWebpackPlugin([
  {
    from: './src/client/index.html'
  }
]);

module.exports = [
  {
    name: 'client',
    entry: './src/client/main.js',
    output: {
      path: './dist/client',
      filename: 'apka.js'
    },
    plugins: [
      copySources
    ]
  },
  {
    name: 'server',
    entry: './src/server/main.js',
    target: 'node',
    output: {
      path: './dist/server',
      filename: 'apka.js'
    }
  }
];
