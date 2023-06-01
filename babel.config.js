module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      ['module:react-native-dotenv', {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env'
      }],
      ['module-resolver', {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@/tests': './tests',
          '@': './src'
        }
      }],
      'react-native-reanimated/plugin'
    ]
  }
}
