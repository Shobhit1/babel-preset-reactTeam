module.exports = {
  presets: [
    require("babel-preset-es2015"),
    require("babel-preset-react"),
    require('babel-plugin-array-includes').default,

    require('babel-plugin-syntax-class-properties'),
    require('babel-plugin-syntax-decorators'),
    require('babel-plugin-syntax-object-rest-spread'),

    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-decorators-legacy').default,
    require('babel-plugin-transform-object-assign'),
    require('babel-plugin-transform-object-rest-spread')
    require('babel-plugin-transform-remove-console')
    require('babel-plugin-undeclared-variables-check')
  ]
};
