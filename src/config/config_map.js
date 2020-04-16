import mapconfigshare from '@/config/mapconfigshare.js'
const mapconfig = {
  jsApiUrl: mapconfigshare.jsApiUrl,
  cssUrl: mapconfigshare.cssUrl,
  locationaddress: mapconfigshare.locationaddress,
  proxyConifg: mapconfigshare.proxyConifg,
  extent: mapconfigshare.extent,
  gisTokenServer: mapconfigshare.gisTokenServer,
  PgHightlightsymbol: mapconfigshare.PgHightlightsymbol,
  streetHightlightsymbol: mapconfigshare.streetHightlightsymbol,
  PointHightlightsymbol: mapconfigshare.PointHightlightsymbol,
  PointSelectedHight: mapconfigshare.PointSelectedHight,
  PolylineHightsymbol: mapconfigshare.PolylineHightsymbol,
  highlightOptions: mapconfigshare.highlightOptions,
  GISService: {
    geometryService: mapconfigshare.GISService.geometryService,
    baseMapServices: mapconfigshare.GISService.baseMapServices,
    operationLayers: mapconfigshare.GISService.operationLayers,
    bussinesslayers: {
      serverurl: 'http://hostserver.xhbd.local/arcgis/rest/services',
      istoken: false,
      tokenType: 'arcgis',
      layerGroups: [{
        id: 'xh_bussiness_layers',
        title: '地图数据',
        tag: 'xh_bussiness_layers',
        visible: true,
        listMode: 'show',
        layerGroups: [],
        layers: [{
          id: 'pointbufferspatialanalysis',
          istoken: false,
          visible: true,
          opacity: 1.0,
          maptype: 'GraphicsLayer',
          tag: '点位缓冲区分析结果显示层',
          title: '点位缓冲区分析结果显示层',
          type: 'image',
          listMode: 'hide',
          imageUrl: require('../assets/basemap/mapType_img.jpg')
        }, {
          id: 'roadbufferspatialanalysis',
          istoken: false,
          visible: true,
          opacity: 1.0,
          maptype: 'GraphicsLayer',
          tag: '道路缓冲区分析结果显示层',
          title: '道路缓冲区分析结果显示层',
          type: 'image',
          listMode: 'hide',
          imageUrl: require('../assets/basemap/mapType_img.jpg')
        }, {
          id: 'hightlightlayer',
          istoken: false,
          visible: true,
          opacity: 1.0,
          maptype: 'GraphicsLayer',
          tag: '辅助显示图层',
          title: '辅助显示图层',
          type: 'image',
          listMode: 'hide',
          imageUrl: require('../assets/basemap/mapType_img.jpg')
        }, {
          id: 'location_Hightlight',
          istoken: false,
          visible: true,
          opacity: 1.0,
          maptype: 'GraphicsLayer',
          tag: '地名地址高亮',
          title: '地名地址高亮',
          type: 'image',
          listMode: 'hide',
          imageUrl: require('../assets/basemap/mapType_img.jpg')
        }, {
          id: 'history_route',
          istoken: false,
          visible: true,
          opacity: 1.0,
          maptype: 'GraphicsLayer',
          tag: '历史轨迹',
          title: '历史轨迹',
          type: 'image',
          listMode: 'hide',
          imageUrl: require('../assets/basemap/mapType_img.jpg')
        }]
      }]
    },
    pd_bussinesslayers: {
      serverurl: 'http://10.108.3.42:6080/arcgis/rest/services',
      istoken: false,
      tokenType: 'arcgis',
      layerGroups: [{
        id: 'pd_bussiness_layers',
        title: '浦东地图数据',
        tag: 'pd_bussiness_layers',
        visible: true,
        listMode: 'show',
        layerGroups: [],
        layers: [{
          url: 'http://10.108.3.48/changsanjiao/rest/services/PDBoundService/MapServer/0',
          id: 'pd_boundary',
          istoken: false,
          visible: true,
          definitionExpression: '1=2',
          opacity: 1.0,
          maptype: 'FeatureLayer',
          tag: '浦东边界',
          title: '浦东边界',
          type: 'pd_boundary',
          renderer: {
            type: 'simple',
            symbol: {
              type: 'simple-fill',
              color: [255, 255, 255, 0],
              outline: {
                color: [255, 0, 0, 1],
                width: '5px'
              }
            }
          }
        },
        {
          url: 'http://10.108.3.42:6080/arcgis/rest/services/Hosted/PD_Town/FeatureServer',
          id: 'pd_street',
          istoken: false,
          visible: true,
          definitionExpression: '1=2',
          opacity: 1.0,
          maptype: 'FeatureLayer',
          tag: '街道镇',
          title: '街道镇',
          type: 'pd_street',
          renderer: {
            type: 'simple',
            symbol: {
              type: 'simple-fill',
              color: [255, 255, 255, 0],
              outline: {
                color: [255, 0, 0, 1],
                width: '5px'
              }
            }
          }
        },
        {
          url: 'http://10.108.3.39:6080/arcgis/rest/services/RoadService/MapServer',
          id: 'pd_dl',
          istoken: false,
          visible: false,
          listMode: 'show',
          opacity: 1.0,
          maptype: 'MapImageLayer',
          tag: '浦东道路',
          title: '浦东道路',
          type: 'pd_dl'
        }, {
          url: 'http://10.108.3.39:6080/arcgis/rest/services/StoreService/MapServer',
          id: 'pd_store',
          istoken: false,
          visible: false,
          listMode: 'show',
          opacity: 1.0,
          maptype: 'MapImageLayer',
          tag: '浦东商铺',
          title: '浦东商铺',
          type: 'pd_store'
        }
        ]
      }]
    }
  }
}
export default mapconfig
