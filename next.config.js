const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@hello-world'] = path.resolve(__dirname, 'src/hello-world');
    return config;
  },
};