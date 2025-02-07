module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './components',
          '@screens': './screens',
          '@utils': './utils',
          '@assets': './assets',
          '@store': './store'
        }
      }
    ]
  ]
};