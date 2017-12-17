module.exports = parcel => {
  parcel.addAssetType('lsc', require.resolve('./LightScriptAsset'))
  parcel.addAssetType('lsx', require.resolve('./LightScriptAsset'))
}
