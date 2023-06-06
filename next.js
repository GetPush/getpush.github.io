const fs = require('fs');
const path = require('path');

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  async rewrites() {
    const serverFilePath = path.join(__dirname, 'server.js');
    const isServerFileExists = fs.existsSync(serverFilePath);

    if (isServerFileExists) {
      return [
        {
          source: '/(.*)',
          destination: '/server.js',
        },
      ];
    } else {
      console.error('File server.js tidak ditemukan');
      return [];
    }
  },
};
