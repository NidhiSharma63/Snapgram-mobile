// const path = require('path');
// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// // Get the default config first
// const defaultConfig = getDefaultConfig(__dirname);

// // Then extend it safely
// const config = {
//   resolver: {
//     assetExts: [...defaultConfig.resolver.assetExts, 'png'],
//     sourceExts: defaultConfig.resolver.sourceExts,

//     // Absolute imports from `src/` without `../`
//     extraNodeModules: new Proxy(
//       {},
//       {
//         get: (_, name) => path.join(__dirname, 'src', name),
//       },
//     ),
//   },

//   // So metro watches src/ folder too
//   watchFolders: [path.resolve(__dirname, 'src')],
// };

// module.exports = mergeConfig(defaultConfig, config);

const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [
      ...defaultConfig.resolver.sourceExts,
      'svg',
      'js',
      'json',
      'ts',
      'tsx',
    ],
    extraNodeModules: new Proxy(
      {},
      {
        get: (_, name) => path.join(__dirname, 'src', name),
      },
    ),
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(defaultConfig, config);
