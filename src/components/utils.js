import load from '../utils/jsapi'
const maplayersUtils = {
  async initiallayers(layertree, layerdata, mapconfig, maptoken) {
    const [
      Extent,
      SHCTiledMapServiceLayer,
      SceneLayer,
      MapImageLayer,
      GroupLayer,
      SpatialReference
    ] =
    await load([
      'esri/geometry/Extent',
      'esri/layers/SHCTiledMapServiceLayer',
      'esri/layers/SceneLayer',
      'esri/layers/MapImageLayer',
      'esri/layers/GroupLayer',
      'esri/geometry/SpatialReference'
    ],
    mapconfig.arcgisjsapiUrl)
    layerdata.map(function(item) {
      if (item.mapType.trim() === 'GroupLayer') {
        const Grouplayer = new GroupLayer({
          id: item.layerEName,
          title: item.layerCName,
          visible: parseFloat(item.isVisible)
        })
        layertree.push(Grouplayer)
        if (item.hasChildren) {
          maplayersUtils.initiallayers(Grouplayer, item.children, mapconfig)
        }
      } else {
        switch (item.mapType.trim()) {
          case 'SHCTiledMapServiceLayer':
            // eslint-disable-next-line no-case-declarations
            const fExtent = new Extent({
              'xmin': -65000,
              'ymin': -76000,
              'xmax': 75000.00000000003,
              'ymax': 72000.00000000003,
              'spatialReference': SpatialReference.WebMercator
            })
            if (!parseFloat(item.istoken) === true) {
              layertree.add(SHCTiledMapServiceLayer({
                url: item.url,
                fullExtent: fExtent,
                token: maptoken,
                opacity: item.opacity,
                title: item.layerCName,
                id: item.layerEName,
                visible: parseFloat(item.isVisible)
              }))
            } else {
              layertree.add(SHCTiledMapServiceLayer({
                url: item.url,
                fullExtent: fExtent,
                opacity: item.opacity,
                title: item.layerCName,
                id: item.layerEName,
                visible: parseFloat(item.isVisible)
              }))
            }
            break
          case 'MapImageLayer':
            // eslint-disable-next-line no-case-declarations
            layertree.add(new MapImageLayer({
              url: item.url,
              opacity: item.opacity,
              title: item.layerCName,
              id: item.layerEName,
              visible: parseFloat(item.isVisible)
            }))
            break
          case 'SceneLayer':
          // eslint-disable-next-line no-case-declarations
            const scenelayer = new SceneLayer({
              url: item.url,
              opacity: item.opacity,
              title: item.layerCName,
              id: item.layerEName,
              visible: parseFloat(item.isVisible)
            })
            if (item.renderer !== '') {
              const srender = JSON.parse(item.renderer)
              scenelayer.renderer = srender
            }
            layertree.add(scenelayer)
            break
        }
      }
    })
  }
}
export default maplayersUtils
