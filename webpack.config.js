const path = require('path');

module.exports = {
  entry: './src/index.js', // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory
    filename: 'bundle.js', // The name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to all JavaScript files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel loader
          options: {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
          },
        },
      },
    ],
  },
  // Add loaders and plugins as needed
};
