// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/speechRecognition.ts',
  output: {
    filename: 'bundle.js', // Bu dosyanın adı doğru olmalı
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
