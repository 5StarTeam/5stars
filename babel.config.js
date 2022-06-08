module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: ['react-native-reanimated/plugin'],
  }
}
=======
    plugins: [
      [
          "module:react-native-dotenv", {
              "moduleName": "@env",
              "path": ".env",
              "blacklist": null,
              "whitelist": null,
              "safe": false,
              "allowUndefined": false
          }
      ]
    ],
  };
};
>>>>>>> master
