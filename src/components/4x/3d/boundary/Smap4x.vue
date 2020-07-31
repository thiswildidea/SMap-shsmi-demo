<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="queryboundary">查询边界</el-button>
      <el-button type="primary" @click="removeboundary">移除边界</el-button>
      <el-button type="primary" @click="hideboundary">隐藏边界</el-button>
      <el-button type="primary" @click="showboundary">显示边界</el-button>
    </div>
  </div>
</template>
<script>
// import SMap from 'smap-shsmi'
// import SMap from 'smap-shsmi-aa'
import SMap from '../utils/4x/smap/esm/SMap'
// import Plugins from 'smap-plugins-shsmi'
import Plugins from '../utils/4x/plugins/esm/Plugins'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      map: null,
      trajectory: null,
      migrationMap: null,
      mapRoam: null,
      Boundary: null
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
        viewMode: '3D',
        center: [0, 0],
        zoom: 6,
        zooms: [0, 11],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/light' 'smap://styles/dark'
        showBuildingBlock: false
      })
      this.map.on(SMap.MapEvent.click, function(view, eventParamter) {
        console.log(eventParamter.mapPoint)
        console.log(view.camera)
      })
    },
    addlayercontrol() {
      const layerListControl = new SMap.LayerListControl({
        visible: true,
        position: 'top-right',
        collapse: true
      })
      this.map.addControl(layerListControl)
    },
    queryboundary() {
      const par = {
        boundaryType: 'qx_boundary',
        boundaryDefinition: "name like '%黄浦%'", // qxcode like '%01%
        symbol: {
          type: 'simple-fill',
          color: [255, 255, 255, 0],
          outline: {
            color: [255, 255, 0, 1],
            width: '5px'
          }
        }
      }
      this.Boundary = new Plugins.Boundary(this.map.view)
      this.Boundary.add(par)
    },
    removeboundary() {
      this.Boundary.remove()
    },
    hideboundary() {
      this.Boundary.hide()
    },
    showboundary() {
      this.Boundary.show()
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
       flex-flow: row;
      .info{
       width:80%;
      //  display: none;
       position: absolute;
       float: left;
       margin-left: 5px;
       background: rgba(1,1,1,0);
       color: rgb(14, 13, 13);
       >h4{
          text-align: center;
       }

    }
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>

