import * as esriloader from 'esri-loader'
import load from '@/utils/jsapi.js'
import utils from './utils'
const map = {
  async initmap(mapconfig, layersTree, mapwidgets, mapextent, mapproxys, maptoken) {
    esriloader.loadCss(mapconfig.arcgisjsapicssUrl)
    const [Map,
      Zoom,
      Compass,
      Home,
      Extent,
      Camera,
      SceneView,
      Basemap,
      SHCTiledMapServiceLayer,
      SpatialReference,
      urlUtils,
      IdentityManager,
      esriConfig,
      LayerList,
      Fullscreen,
      MeasureMent3DTool,
      DistanceMeasureMentButton3D,
      AreaMeasureMentButton3D,
      BaseMapSwitchButton3D,
      AddressLocationSearch,
      AboveBelowModeSwitch,
      MapSceneViewSwitch2DDefault,
      MapSceneViewSwitch3DDefault,
      Expand] =
      await load(['esri/Map',
        'esri/widgets/Zoom',
        'esri/widgets/Compass',
        'esri/widgets/Home',
        'esri/geometry/Extent',
        'esri/Camera',
        'esri/views/SceneView',
        'esri/Basemap',
        'esri/layers/SHCTiledMapServiceLayer',
        'esri/geometry/SpatialReference',
        'esri/core/urlUtils',
        'esri/identity/IdentityManager',
        'esri/config',
        'esri/widgets/LayerList',
        'esri/widgets/Fullscreen',
        'esri/widgets/MeasureMent3DTool',
        'esri/widgets/DistanceMeasureMentButton3D',
        'esri/widgets/AreaMeasureMentButton3D',
        'esri/widgets/BaseMapSwitchButton3D',
        'esri/widgets/AddressLocationSearch',
        'esri/widgets/AboveBelowModeSwitch',
        'esri/widgets/MapSceneViewSwitch2DDefault',
        'esri/widgets/MapSceneViewSwitch3DDefault',
        'esri/widgets/Expand'
      ],
      mapconfig.arcgisjsapiUrl)
    if (parseFloat(mapconfig.useProxy)) {
      mapproxys.map(function(item, key, ary) {
        urlUtils.addProxyRule({
          proxyUrl: item.proxyUrl,
          urlPrefix: item.domainName
        })
      })
    }
    esriConfig.geometryServiceUrl = mapconfig.geometryserviceUrl
    if (mapconfig.tokenType !== '2') {
      IdentityManager.registerToken({
        server: layersTree[0].children[0].url.substring(0, layersTree[0].children[0].url.lastIndexOf('/rest/services')) + '/rest/services',
        token: maptoken
      })
    }

    const basemaplayers = layersTree[0].children.map(function(item) {
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
            return new SHCTiledMapServiceLayer({
              url: item.url,
              token: maptoken,
              fullExtent: fExtent,
              opacity: item.opacity,
              title: item.layerCName,
              id: item.layerEName,
              visible: parseFloat(item.isVisible)
            })
          } else {
            return new SHCTiledMapServiceLayer({
              url: item.url,
              fullExtent: fExtent,
              opacity: item.opacity,
              title: item.layerCName,
              id: item.layerEName,
              visible: parseFloat(item.isVisible)
            })
          }
      }
    })
    const bmap = new Basemap({
      baseLayers: basemaplayers,
      title: '底图',
      id: 'myBasemap'
    })

    const map = new Map({
      basemap: bmap
    })
    const opertalayers = []
    await utils.initiallayers(opertalayers, layersTree.slice(1), mapconfig, maptoken)
    map.addMany(opertalayers)
    const sceneView = new SceneView({
      map: map,
      container: 'mapcontainer',
      spatialReference: {
        wkid: 102100
      },
      viewingMode: 'local'
    })

    const mapcamera = new Camera({
      fov: mapextent.fov,
      heading: mapextent.heading,
      position: {
        x: mapextent.camerax,
        y: mapextent.cameray,
        z: mapextent.cameraz,
        spatialReference: 102100
      },
      tilt: mapextent.tilt
    })
    sceneView.goTo(mapcamera)
    sceneView.ui.empty('top-left')
    sceneView.ui.empty('top-right')
    sceneView.ui.empty('bottom-left')
    sceneView.ui.empty('bottom-right')
    mapwidgets.forEach(item => {
      switch (item.widgetEName.trim().toUpperCase()) {
        case 'HOME':
          // eslint-disable-next-line no-case-declarations
          const homeWidget = new Home({
            view: sceneView
          })
          sceneView.ui.add(homeWidget, item.position != null ? item.position : 'top-right')
          break
        case 'COMPASS':
          // eslint-disable-next-line no-case-declarations
          const CompassWidget = new Compass({
            view: sceneView
          })
          sceneView.ui.add(CompassWidget, item.position != null ? item.position : 'top-right')
          break
        case 'ZOOM':
          // eslint-disable-next-line no-case-declarations
          const ZoomWidget = new Zoom({
            view: sceneView
          })
          sceneView.ui.add(ZoomWidget, item.position != null ? item.position : 'top-right')
          break
        case 'LAYERLIST':
          // eslint-disable-next-line no-case-declarations
          const layerlistWidget = new LayerList({
            container: document.createElement('div'),
            id: 'maplayerlist',
            view: sceneView
          })
          // eslint-disable-next-line no-case-declarations
          const LayerListExpand = new Expand({
            id: 'layerlistonly',
            view: sceneView,
            content: layerlistWidget.domNode,
            expandIconClass: 'esri-icon-layers',
            expandTooltip: '专题图层框',
            group: 'top-left'
          })
          sceneView.ui.add(LayerListExpand, item.position != null ? item.position : 'top-right')
          break
        case 'FULLSCREEN':
          // eslint-disable-next-line no-case-declarations
          const fullscreenWidget = new Fullscreen({
            view: sceneView
          })
          sceneView.ui.add(fullscreenWidget, item.position != null ? item.position : 'top-right')
          break
        case 'MEASUREMENTTOOL':
        // eslint-disable-next-line no-case-declarations
          const MeasureMent3DToolWidget = new MeasureMent3DTool({
            view: sceneView,
            container: document.createElement('div')
          })
          // eslint-disable-next-line no-case-declarations
          const MeasureMent3DToolExpand = new Expand({
            expandIconClass: 'esri-icon-Rulers',
            expandTooltip: '地图测量',
            view: window.sceneView,
            content: MeasureMent3DToolWidget.domNode,
            group: 'bottom-right'
          })
          sceneView.ui.add(MeasureMent3DToolExpand, item.position != null ? item.position : 'top-right')
          break
        case 'DISTANCEMEASUREMENTBUTTON':
          // eslint-disable-next-line no-case-declarations
          const DistanceMeasureMentButtonWidget = new DistanceMeasureMentButton3D({
            view: sceneView
          })
          sceneView.ui.add(DistanceMeasureMentButtonWidget, item.position != null ? item.position : 'top-right')
          break
        // eslint-disable-next-line no-duplicate-case
        case 'AREMEASUREMENTBUTTON':
        // eslint-disable-next-line no-case-declarations
          const AreaMeasureMentButtonWidget = new AreaMeasureMentButton3D({
            view: sceneView
          })
          sceneView.ui.add(AreaMeasureMentButtonWidget, item.position != null ? item.position : 'top-right')
          break
        case 'BASEMAPSWITCHBUTTON':
        // eslint-disable-next-line no-case-declarations
          const BaseMapSwitchButtonWidget = new BaseMapSwitchButton3D({
            view: sceneView
          })
          sceneView.ui.add(BaseMapSwitchButtonWidget, item.position != null ? item.position : 'top-right')
          break
        // eslint-disable-next-line no-duplicate-case
        case 'ADDRESSLOCATIONSEARCH1':
        // eslint-disable-next-line no-case-declarations
          const AddressLocationSearchWidget = new AddressLocationSearch({
            view: sceneView
          })
          sceneView.ui.add(AddressLocationSearchWidget, item.position != null ? item.position : 'top-right')
          break
        case 'ABOVEBELOWMODESWITCH':
        // eslint-disable-next-line no-case-declarations
          const AboveBelowModeSwitchWidget = new AboveBelowModeSwitch({
            view: sceneView
          })
          sceneView.ui.add(AboveBelowModeSwitchWidget, item.position != null ? item.position : 'top-right')
          break
        // eslint-disable-next-line no-duplicate-case
        case 'MAPSCENEVIEWSWITCH2DDEFAULT':
        // eslint-disable-next-line no-case-declarations
          const MapSceneViewSwitchWidget = new MapSceneViewSwitch2DDefault({
            view: sceneView
          })
          sceneView.ui.add(MapSceneViewSwitchWidget, item.position != null ? item.position : 'top-right')
          break
        // eslint-disable-next-line no-duplicate-case
        case 'MAPSCENEVIEWSWITCH3DDEFAULT':
        // eslint-disable-next-line no-case-declarations
          const MapSceneViewSwitch3DDefaultWidget = new MapSceneViewSwitch3DDefault({
            view: sceneView
          })
          sceneView.ui.add(MapSceneViewSwitch3DDefaultWidget, item.position != null ? item.position : 'top-right')
          break
      }
    })
    sceneView.padding = {
      top: 40,
      bottom: 0,
      left: 0,
      right: 5
    }
    return sceneView
  }
}
export default map
