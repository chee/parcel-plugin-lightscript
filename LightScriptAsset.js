const JSAsset = require('parcel-bundler/src/assets/JSAsset')
const babylon = require('babylon-lightscript')

module.exports = class LightScriptAsset extends JSAsset {
  async parse (code) {
    const options = await super.getParserOptions()
    options.plugins = options.plugins
      ? options.plugins.concat('lightscript')
      : ['lightscript']

    this.contents = babylon.parse(code, options);

    return super.parse(this.contents)
  }
}
