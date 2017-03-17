var CopyWebpackPlugin = require('copy-webpack-plugin');

var copySources = new CopyWebpackPlugin([
  {
    from: './src/client/index.html'
  }
]);

function resolve(dir) {
  return `./${dir}`;
}

module.exports = [
  {
    name: 'client',
    entry: './src/client/main.js',
    output: {
      path: './dist/client',
      filename: 'apka.js'
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: "pre",
          include: [resolve('src'), resolve('test')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: vueLoaderConfig
        // },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test')]
        }
      ]
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
