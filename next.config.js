// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://service2.pakmobilezone.com/:path*',
          },
        ]
      },
  };
