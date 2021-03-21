const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'jpg', 'svg'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
  }]
]);
