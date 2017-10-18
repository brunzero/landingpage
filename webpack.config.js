var path = require('path');
var webpack = require('webpack');

if(!process.env.NODE_ENV === 'production')
{
  var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'webpack-hot-middleware/client',
      './app/main'
    ],
    output: {
      path: path.join(__dirname, 'public', 'js'),
      filename: 'bundle.js',
      publicPath: '/js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.BROWSER': JSON.stringify(true)
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            plugins: [
              ['react-transform', {
                transforms: [
                  {
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }, {
                    transform: 'react-transform-catch-errors',
                    imports: ['react', 'redbox-react']
                  }
                ]
              }]
            ]
          }
        },
        {
          test: /\.css/,
          loaders: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader',
            /*{
              loader: 'sass-resources-loader',
              options: {
                // Sass files here are global resources
                resources: ['./app/components/Colors.scss'],
              },
            },*/
          ],
        }
      ]
    }
  };
}
else{
  var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      './app/main'
    ],
    output: {
      path: path.join(__dirname, 'public', 'js'),
      filename: 'bundle.js',
      publicPath: '/js'
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.BROWSER': JSON.stringify(true)
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            plugins: [
              ['react-transform', {
                transforms: [
                  {
                    transform: 'react-transform-catch-errors',
                    imports: ['react', 'redbox-react']
                  }
                ]
              }]
            ]
          }
        },
        {
          test: /\.css/,
          loaders: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader',
            /*{
              loader: 'sass-resources-loader',
              options: {
                // Sass files here are global resources
                resources: ['./app/components/Colors.scss'],
              },
            },*/
          ],
        }
      ]
    }
  };
}


if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = config;