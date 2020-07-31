var Mapcofig = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Mapcofig() {
    }
    Mapcofig.jsapi = 'http://10.108.3.16/smiapi/arcgis';
    Mapcofig.jsapiversion4X = '4.15';
    Mapcofig.tokenserver = {
        tokenType: 'back',
        token_front: {
            url: 'http://10.108.3.52:8080/onemap/tokens/generateToken',
            user: 'super',
            password: '11111111'
        },
        token_black: {
            url: 'http://10.108.3.16:8401/mapconfig/gistoken',
            tokenconfigname: 'smiapi_new'
        }
    };
    Mapcofig.proxyConifg = {
        useProxy: true,
        url: 'http://10.108.3.16/mapkProx/proxy.jsp?',
        httpsDomains: [{
                proxyUrl: 'http://10.108.3.16/mapkProx/proxy.jsp',
                domainName: 'mapserver.smi.sh.cegn.cn:8080'
            }, {
                proxyUrl: 'http://10.108.3.16/mapkProx/proxy.jsp',
                domainName: 'api.smi.sh.cegn.cn'
            }]
    };
    Mapcofig.fonts = {
        url: 'http://10.108.3.16/smiapi/arcgis/4.16/fonts'
    };
    Mapcofig.gisService = {
        geometryServiceUrl: 'http://api.smi.sh.cegn.cn/arcgis/rest/services/Utilities/Geometry/GeometryServer',
        serverurl: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services',
        baseMapServices: {
            isToken: true,
            tokenType: 'OneMap',
            layers: [{
                    url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2019/MapServer',
                    layerEName: 'basemap_air',
                    isToken: true,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '影像底图',
                    layerCName: '影像底图',
                    type: 'basemap_air'
                }, {
                    url: 'http://api.smi.sh.cegn.cn/arcgis/rest/services/basemap_air/MapServer',
                    layerEName: 'basemap_air',
                    isToken: true,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'TileLayer',
                    tag: '影像底图',
                    layerCName: '影像底图',
                    type: 'basemap_air'
                }, {
                    url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/BaseMap/MapServer',
                    layerEName: 'basemap_zw',
                    isToken: true,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '政务底图',
                    layerCName: '政务底图',
                    type: 'basemap_zw'
                }, {
                    url: 'http://api.smi.sh.cegn.cn/arcgis/rest/services/basemap_light/MapServer',
                    layerEName: 'basemap_zw',
                    isToken: true,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'TileLayer',
                    tag: '政务底图',
                    layerCName: '政务底图',
                    type: 'basemap_zw'
                }, {
                    url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/shmap_as2/MapServer',
                    layerEName: 'basemap_as',
                    isToken: true,
                    visible: true,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '暗色底图',
                    layerCName: '暗色底图',
                    type: 'basemap_as'
                }, {
                    url: 'http://api.smi.sh.cegn.cn/arcgis/rest/services/basemap_dark/MapServer',
                    layerEName: 'basemap_as',
                    isToken: true,
                    visible: true,
                    opacity: 1.0,
                    mapType: 'TileLayer',
                    tag: '暗色底图',
                    layerCName: '暗色底图',
                    type: 'basemap_as'
                }]
        },
        buildingsLayers: {
            id: "buildings_3d_layers",
            title: "空间基础",
            tag: "buildings_3d_layers",
            listMode: 'show',
            visible: true,
            layerGroups: [{
                    id: "buildings_3d_above_layers",
                    title: "地上",
                    tag: "buildings_3d_above_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: [{
                            url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/quanshijianzhu/SceneServer',
                            id: 'model_air_real',
                            isToken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '影像底图精模',
                            title: '影像底图精模',
                            type: 'model_air_real',
                            popupEnabled: true,
                            listMode: 'show'
                        },
                        {
                            url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Hosted_baimo/SceneServer',
                            id: 'model_white_zw',
                            isToken: false,
                            visible: false,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '政务白模型',
                            title: '政务白模型',
                            type: 'model_white_zw',
                            popupEnabled: true,
                            listMode: 'show',
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
                            }
                        },
                        {
                            url: 'http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Hosted_baimo/SceneServer',
                            id: 'model_white_as',
                            isToken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: 'SceneLayer',
                            tag: '暗色白模型',
                            title: '暗色白模型',
                            type: 'model_white_as',
                            popupEnabled: true,
                            listMode: 'show',
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
                            }
                        }
                    ]
                }, {
                    id: "buildings_3d_belove_layers",
                    title: "地下",
                    tag: "buildings_3d_belove_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: []
                }]
        },
        smapbussinessLayers: {
            serverurl: "http://10.201.37.222/arcgis/rest/services",
            istoken: false,
            tokenType: "OneMap",
            layerGroups: [{
                    id: "smap_3D_layers",
                    title: "三维业务组",
                    grouptype: '3D',
                    tag: "smap_3D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: []
                }, {
                    id: "smap_2D_layers",
                    title: "二维业务组",
                    grouptype: '2D',
                    tag: "smap_2D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [{
                            id: "history_images",
                            title: "历史影像数据",
                            tag: "history_images",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air1948/MapServer",
                                    id: "Air1948",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1948",
                                    title: "影像1948",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air1960/MapServer",
                                    id: "Air1960",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1960",
                                    title: "影像1960",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air1979/MapServer",
                                    id: "Air1979",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1979",
                                    title: "影像1979",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air1994/MapServer",
                                    id: "Air1994",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像1994",
                                    title: "影像1994",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2006/MapServer",
                                    id: "Air2006",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2006",
                                    title: "影像2006",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2008/MapServer",
                                    id: "Air2008",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2008",
                                    title: "影像2008",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2010/MapServer",
                                    id: "Air2010",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2010",
                                    title: "影像2010",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2011/MapServer",
                                    id: "Air2011",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2011",
                                    title: "影像2011",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2012S/MapServer",
                                    id: "Air2012",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2012",
                                    title: "影像2012",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2013S/MapServer",
                                    id: "Air2013",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2013",
                                    title: "影像2013",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2014S/MapServer",
                                    id: "Air2014",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2014",
                                    title: "影像2014",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2015S/MapServer",
                                    id: "Air2015",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2015",
                                    title: "影像2015",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2016/MapServer",
                                    id: "Air2016",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2016",
                                    title: "影像2016",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2017/MapServer",
                                    id: "Air2017",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2017",
                                    title: "影像2017",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2018/MapServer",
                                    id: "Air2018",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2018",
                                    title: "影像2018",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://mapserver.smi.sh.cegn.cn:8080/OneMapServer/rest/services/Air2019/MapServer",
                                    id: "Air2019",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "SHCTiledMapServiceLayer",
                                    tag: "影像2019",
                                    title: "影像2019",
                                    type: "image",
                                    listMode: 'show'
                                }]
                        }, {
                            id: "shanghaiboundary",
                            title: "上海边界范围数据",
                            tag: "shanghaiboundary",
                            visible: true,
                            listMode: 'show',
                            layers: [{
                                    url: "http://api.smi.sh.cegn.cn/arcgis/rest/services/boundary/sh_jwh_boundary/FeatureServer",
                                    id: "jwh_boundary",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "jwh_boundary",
                                    title: "上海居委会边界",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://api.smi.sh.cegn.cn/arcgis/rest/services/boundary/sh_jd_boundary/FeatureServer",
                                    id: "jd_boundary",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "jd_boundary",
                                    title: "上海居委会边界",
                                    type: "image",
                                    listMode: 'show'
                                }, {
                                    url: "http://api.smi.sh.cegn.cn/arcgis/rest/services/boundary/sh_qx_boundary/FeatureServer",
                                    id: "qx_boundary",
                                    istoken: true,
                                    visible: false,
                                    opacity: 1.0,
                                    maptype: "FeatureLayer",
                                    tag: "qx_boundary",
                                    title: "上海区县边界",
                                    type: "image",
                                    listMode: 'show'
                                }]
                        }],
                    layers: [{
                            id: "Hight_Graphiclayer",
                            istoken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: "GraphicsLayer",
                            tag: "辅助显示图层",
                            title: "辅助显示图层",
                            type: "image",
                            listMode: 'hide'
                        }, {
                            id: "location_Hightlight",
                            istoken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: "GraphicsLayer",
                            tag: "地名地址高亮",
                            title: "地名地址高亮",
                            type: "image",
                            listMode: 'hide'
                        }]
                }]
        }
    };
    return Mapcofig;
}());
export default Mapcofig;
