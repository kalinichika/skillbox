const path = require('path');
const { DefinePlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportOnlyLocals: true,
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new DefinePlugin({
      'process.env.CLIENT_ID': `"${process.env.CLIENT_ID}"`,
      'process.env.SECRET': `"${process.env.SECRET}"`,
      'process.env.PATH_TO_HOME_URL': `"${process.env.PATH_TO_HOME_URL}"`,
      'process.env.PATH_TO_HOME_URL_WITH_PORT':
        NODE_ENV === 'development'
          ? `"${process.env.PATH_TO_HOME_URL}:3000"`
          : `"${process.env.PATH_TO_HOME_URL}"`,
    }),
  ],
};
