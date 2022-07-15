const path = require('path');

//for CRA: requires npm link pathTo/<app>/node_modules/react from local library
module.exports = {
  entry: './src/index.ts',
  externals: {
      "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
        root: '_',
      },
      "react": {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: '_',
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
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
    globalObject: 'this'
  },
};