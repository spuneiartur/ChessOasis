const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Max size (in bytes) for base64 conversion. Images larger than this limit will be emitted as separate files.
              fallback: 'file-loader', // Fallback loader if the file size exceeds the limit
              name: 'images/[name].[hash:8].[ext]', // Output file path and name pattern
            },
          },
        ],
      },
    ],
  },
};
