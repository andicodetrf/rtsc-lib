const path = require('path');

module.exports = {
  entry: './src/index.ts',
  externals: {
      "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
        root: '_',
      },
    },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: "rtsc-lib",
    libraryTarget: 'umd',
  },
};