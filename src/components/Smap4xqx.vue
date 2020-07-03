<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="addzoomcontrol">添加缩放控件</el-button>
      <el-button type="primary" @click="addhomecontrol">添加主页控件</el-button>
      <el-button type="primary" @click="addcompasscontrol">添加罗盘控件</el-button>
      <el-button type="primary" @click="addfullscreencontrol">添加全屏控件</el-button>
      <el-button type="primary" @click="addmeasureline">添加线测量</el-button>
      <el-button type="primary" @click="addmeasurearea">添加面测量</el-button>
      <el-button type="primary" @click="addbasemaptoggle">添加底图切换按钮</el-button>
      <el-button type="primary" @click="addUndergroundSwitch">添加地上地下切换控件</el-button>
      <el-button type="primary" @click="addbasemapgallery">添加地图切换组</el-button>
      <el-button type="primary" @click="addbasemapgalleryexpand">添加地图切换组可伸缩</el-button>
      <el-button type="primary" @click="addbimfilter">BIM分层</el-button>
      <el-button type="primary" @click="remeovelayercontrol">删除图层控制框</el-button>
      <el-button type="primary" @click="btnaddmasktest">test</el-button>
      <el-button type="primary" @click="btnaddmask">添加黄埔遮盖</el-button>
      <el-button type="primary" @click="btnaddmaskjiad">添加嘉定遮盖</el-button>
      <el-button type="primary" @click="btnaddmaskcustom">添加自定义范围遮盖</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi-aa'
// import SMap from '../utils/4x/esm/SMap'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      map: null
    }
  },
  computed: {

  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new SMap.Map('container', {
        userName: 'smiapi',
        menuName: 'smiapi_23d',
        viewMode: '3D',
        center: [0, 0],
        zoom: 5,
        zooms: [1, 12],
        pitch: 60,
        mapStyle: 'smap://styles/dark' // 'smap://styles/normal' 'smap://styles/image'
      })
      this.map.on(SMap.MapEvent.maploaded, function(view) {
        // console.log(view)
      })
    },
    btnaddmaskjiad() {
      const par = {
        boundaryType: 'qx',
        boundaryDefinition: "qx_name like '%长宁%'",
        boundarydistance: 150,
        bounarycount: 5,
        boundaryColor: [58, 95, 225, 1],
        maskColor: [255, 255, 255, 1]
      }
      this.map.setmaskboundary(par)
    },
    btnaddmask() {
      const par = {
        boundaryType: 'qx',
        boundaryDefinition: "qx_name like '%黄浦%'",
        boundarydistance: 150,
        bounarycount: 5,
        boundaryColor: 'blue',
        maskColor: [255, 255, 255, 0.8],
        symbol: {
          size: 20
        }
      }
      this.map.setmaskboundary(par)
    },
    btnaddmaskcustom() {
      const par = {
        boundarydistance: 1000,
        bounarycount: 5,
        boundaryColor: 'blue',
        maskColor: [255, 255, 255, 0.8],
        inputgeometry: [[0, 0], [10000, 0], [10000, 10000],
          [0, 10000], [0, 0]],
        symbol: {
          size: 200
        }
      }
      this.map.setmaskboundary(par)
    },
    btnaddmasktest() {
      window.view = this.map.map
      SMap.load(['esri/Graphic', 'esri/layers/GraphicsLayer', 'esri/geometry/geometryEngine', 'esri/geometry/support/webMercatorUtils','esri/geometry/SpatialReference'])
        .then(([Graphic, GraphicsLayer, geometryEngine, webMercatorUtils, SpatialReference]) => {
          const qxboundary = this.map.map.map.findLayerById('qx_boundary')
          const queryParams = qxboundary.createQuery()
          queryParams.where = "qx_name like '%黄浦%'"
          qxboundary.queryFeatures(queryParams).then(function(results) {
            const geomtry = results.features[0].geometry
            geomtry.spatialReference = SpatialReference.WebMercator
            // const clickpointGraphic = new Graphic({
            //   geometry: geomtry,
            //   symbol: {
            //     type: 'simple-fill',
            //     color: [51, 51, 204, 0.9],
            //     style: 'solid',
            //     outline: {
            //       color: 'white',
            //       width: 1
            //     }
            //   }
            // })
            // window.view.graphics.add(clickpointGraphic)
            const fullgeometry = qxboundary.fullExtent
            fullgeometry.spatialReference = SpatialReference.WebMercator
            const outermask1 = geometryEngine.difference(fullgeometry, geomtry)

            var symbol = {
              type: 'polygon-3d',
              symbolLayers: [{
                type: 'fill',
                material: { color: [51, 51, 204, 0.5] },
                outline: {
                  color: 'white',
                  size: '0px'
                }
              }]
            }
            const outermaskGraphic = new Graphic({
              geometry: outermask1,
              symbol: symbol
            })
            window.view.graphics.add(outermaskGraphic)

            const geomtry2 = geometryEngine.buffer(geomtry, 50, 'meters')
            const outermask2 = geometryEngine.difference(geomtry2, geomtry)
            var symbol2 = {
              type: 'polygon-3d',
              symbolLayers: [{
                type: 'fill',
                material: { color: [255, 255, 255, 0.5] },
                outline: {
                  color: 'white',
                  size: '0px'
                }
              }]
            }
            const outermaskGraphic2 = new Graphic({
              geometry: outermask2,
              symbol: symbol2
            })
            window.view.graphics.add(outermaskGraphic2)

            const geomtry3 = geometryEngine.buffer(geomtry, 100, 'meters')
            const outermask3 = geometryEngine.difference(geomtry3, geomtry2)
            var symbol3 = {
              type: 'polygon-3d',
              symbolLayers: [{
                type: 'fill',
                material: { color: [255, 0, 0, 0.5] },
                outline: {
                  color: 'white',
                  size: '0px'
                }
              }]
            }
            const outermaskGraphic3 = new Graphic({
              geometry: outermask3,
              symbol: symbol3
            })
            window.view.graphics.add(outermaskGraphic3)

            const geomtry4 = geometryEngine.buffer(geomtry, 150, 'meters')
            const outermask4 = geometryEngine.difference(geomtry4, geomtry3)
            var symbol4 = {
              type: 'polygon-3d',
              symbolLayers: [{
                type: 'fill',
                material: { color: [255, 255, 0, 0.5] },
                outline: {
                  color: 'white',
                  size: '0px'
                }
              }]
            }
            const outermaskGraphic4 = new Graphic({
              geometry: outermask4,
              symbol: symbol4
            })
            window.view.graphics.add(outermaskGraphic4)
          })
          // qxboundary.renderer = { type: 'simple',
          //   symbol: {
          //     type: 'simple-fill',
          //     color: [51, 51, 204, 0.9],
          //     style: 'solid',
          //     outline: {
          //       color: 'white',
          //       width: 1
          //     }
          //   }
          // }

        }).catch((err) => { console.error(err) })
    },
    addlayercontrol() {
      this.layerListControl = new SMap.LayerListControl({
        visible: true,
        position: 'top-right',
        collapse: true
      })
      this.map.addControl(this.layerListControl)
    },
    addzoomcontrol() {
      const zoom = new SMap.Zoom({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(zoom)
    },
    addhomecontrol() {
      const home = new SMap.Home({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(home)
    }, addcompasscontrol() {
      const compass = new SMap.Compass({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(compass)
    },
    addfullscreencontrol() {
      const fullscreen = new SMap.Fullscreen({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(fullscreen)
    },
    addmeasureline() {
      const measureLine = new SMap.MeasureLine({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(measureLine)
    },
    addmeasurearea() {
      const measureArea = new SMap.MeasureArea({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(measureArea)
    },
    addbasemaptoggle() {
      const basemapToggle = new SMap.BasemapToggle({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(basemapToggle)
    },
    addUndergroundSwitch() {
      const undergroundSwitch = new SMap.UndergroundSwitch({
        visible: true,
        position: 'bottom-right'
      })
      this.map.addControl(undergroundSwitch)
    },
    addbasemapgallery() {
      const bMapGallery = new SMap.BMapGallery({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(bMapGallery)
    },
    addbasemapgalleryexpand() {
      const bMapGalleryexpand = new SMap.BMapGalleryExpand({
        visible: true,
        position: 'bottom-right'
      })
      this.map.addControl(bMapGalleryexpand)
    },
    addbimfilter() {
      const bIMFilterControl = new SMap.BIMFilterControl({
        visible: true,
        position: 'bottom-right',
        layerid: 'mxqyBim'
      })
      this.map.addControl(bIMFilterControl)
    },
    remeovelayercontrol() {
      this.map.removeControl(this.layerListControl)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
       flex-flow: row;
      .info{
       width:80%;
       position: absolute;
       float: left;
       margin-left: 5px;
       background: #d4dde2;
       color: rgb(14, 13, 13);
       >h4{
          text-align: center;
       }

    }
    .mapinterface
    {
        background: #d4dde2;
         position: absolute;
         margin-top: 100px;
         float: left;
         margin-left: 5px;
    }
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>

