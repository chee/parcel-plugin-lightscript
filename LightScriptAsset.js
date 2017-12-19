const JSAsset = require('parcel-bundler/src/assets/JSAsset')
const localRequire = require('parcel-bundler/src/utils/localRequire')

module.exports = class LightScriptAsset extends JSAsset {
  async getParserOptions () {
    const options = await super.getParserOptions()

    options.plugins = options.plugins
      ? ['lightscript', ...options.plugins]
      : ['lightscript']

    return options
  }

  async parse (code) {
    const babylon = localRequire('babylon-lightscript', this.name)

    const options = await this.getParserOptions()

    this.ast = babylon.parse(code, options)

    return this.ast
  }
}
