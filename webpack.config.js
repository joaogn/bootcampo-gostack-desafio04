const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ] 
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader'
        }  
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}