/**
 * This metro.config.js is required to fix firebase v9.8.x unsupported .cjs file extension in firebase dependencies when using expo.
 * https://stackoverflow.com/questions/72179070/react-native-bundling-failure-error-message-while-trying-to-resolve-module-i
 */
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;