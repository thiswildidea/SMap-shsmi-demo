const mapconfigshare = {
  // jsApiUrl: 'http://powergis.smi.sh.cegn.cn/arcgis_js/gisapi/4.14/init.js',
  // cssUrl: 'http://powergis.smi.sh.cegn.cn/arcgis_js/gisapi/4.14/esri/themes/light/main.css',
  jsApiUrl: 'http://10.221.1.181:8080/arcgis_js/4.14/4.14/init.js',
  cssUrl: 'http://10.221.1.181:8080/arcgis_js/4.14/4.14/esri/themes/light/main.css',
  extent: {
    viewextent: {
      xmin: -172.32237427832752,
      ymin: -8177.5971562653285,
      xmax: 15554.617238876242,
      ymax: -502.52298047062504
    },
    center: {
      x: 7813.294572947776,
      y: -7187.889664121869,
      z: 0
    },
    camera: {
      fov: 55,
      heading: 1.4323944878259498,
      tilt: 0.49,
      x: 7687.554164256476,
      y: -4483.760844921818,
      z: 16807.797633748865
    },
    zoom: 5,
    wkt: 'PROJCS["shanghaicity",GEOGCS["GCS_Beijing_1954",DATUM["D_Beijing_1954",SPHEROID["Krasovsky_1940",6378245.0,298.3]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",-3457147.81],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",121.2751921],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'
  },
  locationaddress: {
    istoken: true,
    url: 'http://10.87.94.143/OneMapServer/rest/services/address/as_ch.asmx/ASCH_AddressSearch?vSearch_word='
  },
  proxyConifg: {
    useProxy: true,
    url: '/mapkProx/proxy.jsp',
    httpsDomains: [{
      proxyurl: '/mapkProx/proxy.jsp',
      domainName: 'map.smi.sh.cegn.cn'
    }, {
      proxyurl: '/mapkProx/proxy.jsp',
      domainName: 'mapserver.smi.sh.cegn.cn:8080'
    }, {
      proxyurl: '/mapkProx/proxy.jsp',
      domainName: '10.108.3.48'
    }, {
      proxyurl: '/mapkProx/proxy.jsp',
      domainName: '10.108.3.39:6080'
    }, {
      proxyurl: '/mapkProx/proxy.jsp',
      domainName: '10.108.3.42:6080'
    }, {
      proxyurl: '/mapkProx/proxy.jsp',
      domainName: '10.108.3.52:8080'
    }]
  },

  gisTokenServer: {
    usebackendtoken: true,
    backend: {
      tokenserverp: 'https://powergis.smi.sh.cegn.cn/microgistoken/gis/ptoken',
      tokenserverg: 'https://powergis.smi.sh.cegn.cn/microgistoken/gis/gtoken'
    },
    frontend: {
      useDefaultUser: true,
      ArcGIS: {
        tokenUrl: 'http://192.168.100.166:6080/arcgis/admin/generateToken',
        tokenType: 'ArcGIS',
        tokenUser: 'siteadmin',
        tokenPassword: 'esri@123',
        expiration: 1440
      },
      OneMap: {
        tokenUrl: 'http://map.smi.sh.cegn.cn/RemoteTokenServer',
        tokenType: 'OneMap',
        tokenUser: 'super',
        tokenPassword: '11111111',
        expiration: 1440
      },
      Portal: {
        tokenUrl: '',
        tokenType: '',
        tokenUser: '',
        tokenPassword: '',
        expiration: 1440
      },
      expiration: 1440
    }
  },

  PgHightlightsymbol: {
    type: 'simple-fill',
    color: [255, 255, 255, 0.5],
    outline: {
      color: [255, 255, 0, 1],
      width: '5px'
    }
  },
  streetHightlightsymbol: {
    type: 'simple-fill',
    color: [255, 255, 255, 0],
    outline: {
      color: [255, 0, 0, 1],
      width: '5px'
    }
  },

  PointHightlightsymbol: {
    type: 'simple-marker',
    color: [226, 119, 40]
  },
  PolylineHightsymbol: {
    type: 'simple-line',
    color: [255, 0, 0, 1],
    width: 2
  },
  PointSelectedHight: {
    type: 'point-3d', // autocasts as new PointSymbol3D()
    symbolLayers: [{
      type: 'icon', // autocasts as new ObjectSymbol3DLayer()
      size: 8,
      resource: {
        primitive: 'circle'
      },
      material: {
        color: [14, 153, 251, 1]
      }
    }],

    verticalOffset: {
      screenLength: 150
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [14, 153, 251, 0.4],
      size: 2,
      border: {
        color: 'red'
      }
    }
  },
  highlightOptions: {
    color: [0, 191, 255, 1],
    haloOpacity: 0.9,
    fillOpacity: 0.2
  },
  GISService: {
    geometryService: 'http://map.smi.sh.cegn.cn/OneMapServer/rest/services/Geometry/GeometryServer',
    baseMapServices: {
      serverurl: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services',
      istoken: true,
      tokenType: 'ArcGIS',
      layers: [{
        url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air/MapServer',
        id: 'basemap_Air',
        istoken: true,
        visible: false,
        opacity: 1.0,
        maptype: 'SHCTiledMapServiceLayer',
        tag: '影像底图',
        title: '影像',
        type: 'image',
        imageUrl: require('../assets/basemap/mapType_img.jpg')
      }, {
        url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/BaseMap/MapServer',
        id: 'basemap_zw',
        istoken: true,
        visible: false,
        opacity: 1.0,
        maptype: 'SHCTiledMapServiceLayer',
        tag: '政务图',
        title: '政务',
        type: 'zw',
        imageUrl: require('../assets/basemap/mapType_zw.jpg')
      }, {
        url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/shmap_as2/MapServer',
        id: 'basemap_as',
        istoken: true,
        visible: true,
        opacity: 1.0,
        maptype: 'SHCTiledMapServiceLayer',
        tag: '暗色版',
        title: '暗色',
        type: 'dark',
        imageUrl: require('../assets/basemap/mapType_as.jpg')
      }]
    },
    operationLayers: {
      serverurl: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services',
      istoken: false,
      tokenType: 'arcgis',
      topGroup: {
        id: 'kjjc',
        title: '空间基础',
        tag: 'kjjc',
        listMode: 'show',
        visible: true,
        sencondaryGroup: {
          id: 'kjjc_underground',
          title: '地下',
          tag: 'kjjc_underground',
          visible: false
        }
      },
      layerGroups: [{
        id: 'kjjc_overground',
        title: '地上',
        tag: 'kjjc_overground',
        visible: true,
        listMode: 'show',
        layerGroups: [],
        layers: [{
          url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/quanshijianzhu/SceneServer',
          id: 'basemap_Air_readmodel',
          istoken: false,
          visible: false,
          opacity: 1.0,
          maptype: 'SceneLayer',
          tag: '影像底图精模',
          title: '影像底图精模',
          type: 'basemap_Air_readmodel',
          popupEnabled: true,
          listMode: 'hide',
          imageUrl: require('../assets/basemap/mapType_as.jpg')
        },
        {
          url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Hosted_baimo/SceneServer',
          id: 'basemap_zw_baimodel',
          istoken: false,
          visible: false,
          opacity: 1.0,
          maptype: 'SceneLayer',
          tag: '政务白模型',
          title: '政务白模型',
          type: 'basemap_zw_baimodel',
          popupEnabled: true,
          listMode: 'hide',
          renderer: {
            type: 'simple',
            symbol: {
              type: 'mesh-3d',
              symbolLayers: [{
                type: 'fill',
                material: {
                  color: [255, 255, 255, 0.6],
                  colorMixMode: 'replace'
                },
                edges: {
                  type: 'solid',
                  color: [0, 0, 0, 0.6],
                  size: 1
                }
              }]
            }
          },
          imageUrl: require('../assets/basemap/mapType_as.jpg')
        },
        {
          url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Hosted_baimo/SceneServer',
          id: 'basemap_as_baimodel',
          istoken: false,
          visible: false,
          opacity: 1.0,
          maptype: 'SceneLayer',
          tag: '暗色白模型',
          title: '暗色白模型',
          type: 'basemap_as_baimodel',
          popupEnabled: true,
          listMode: 'hide',
          renderer: {
            type: 'simple',
            symbol: {
              type: 'mesh-3d',
              symbolLayers: [{
                type: 'fill',
                material: {
                  color: [83, 216, 216, 0.7],
                  colorMixMode: 'replace'
                },
                edges: {
                  type: 'solid',
                  color: [0, 0, 0, 0.6],
                  size: 1
                }
              }]
            }
          },
          imageUrl: require('../assets/basemap/mapType_as.jpg')
        }
        ]
      }]
    }
  }
}
export default mapconfigshare
