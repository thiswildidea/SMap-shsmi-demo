import esriLoader from 'esri-loader'
const dojoConfig = {
  async: true,
  packages: [],
  deps: ['@dojo/framework/shim/main'],
  has: {
    'esri-promise-compatibility': 1,
    'esri-featurelayer-webgl': 1
  }
}

function configEsriLoader() {
  esriLoader.utils.Promise = Promise
}

export default function load(modules, jsApiUrl) {
  configEsriLoader()
  return esriLoader.loadModules(modules, {
    dojoConfig,
    url: jsApiUrl
  })
}
