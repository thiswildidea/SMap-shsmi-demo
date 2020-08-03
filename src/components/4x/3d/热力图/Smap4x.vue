<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="btnaddheatmap">热力图</el-button>
      <el-button type="primary" @click="btnupdateheatmap">更新热力图</el-button>
      <el-button type="primary" @click="btnhideheatmap">隐藏热力图</el-button>
      <el-button type="primary" @click="btnshowheatmap">显示热力图</el-button>
      <el-button type="primary" @click="btnremoveheatmap">删除热力图</el-button>
    </div>
  </div>
</template>
<script>
import h337 from 'heatmapjs'
// import SMap from 'smap-shsmi'
// import SMap from 'smap-shsmi-aa'
import SMap from '../utils/4x/smap/esm/SMap'
// import Plugins from 'smap-plugins-shsmi'
import Plugins from '../utils/4x/plugins/esm/Plugins'
import GeoTask from '../utils/4x/task/esm/GeoTask'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      map: null,
      trajectory: null,
      migrationMap: null,
      mapRoam: null,
      Boundary: null,
      queryTask: null,
      maskBoundary: null,
      HeatMap: null
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
        tokenconfigname: 'smiapi_new',
        zooms: [0, 11],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/light' 'smap://styles/dark'
        showBuildingBlock: false
      })
      this.map.on(SMap.MapEvent.click, function(view, eventParamter) {
        console.log(eventParamter.mapPoint)
        console.log(view.camera)
        view.hitTest(eventParamter).then(async function(response) {
          console.log(response)
        })
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
    btnaddheatmap() {
      const param = {
        id: 'heatmap',
        h337: h337,
        container: 'container',
        radius: 30,
        maxOpacity: 0.8,
        minOpacity: 0,
        blur: 0.7,
        gradient: {
          0: 'rgb(0,0,0)',
          0.3: 'rgb(0,0,255)',
          0.8: 'rgb(0,255,0)',
          0.98: 'rgb(255,255,0)',
          1: 'rgb(255,0,0)'
        },
        datas: [
          [-3020, -5200],
          [-3020, -5200],
          [-3120, -5200],
          [-3120, -5100],
          [-3220, -5200],
          [-3220, -5200],
          [-3220, -5200],
          [-3120, -5200],
          [-3220, -5200]
        ]
      }
      this.HeatMap = new Plugins.HeatMap(this.map.view)
      this.HeatMap.add(param)
    },
    btnupdateheatmap() {
      const heatmapDataArray2 = [
        [-3020, -6200, 500],
        [-3120, -6200, 500],
        [-3120, -6100, 500],
        [-3220, -6200, 1000]
      ]
      this.HeatMap.refreshdata(heatmapDataArray2)
    },
    btnhideheatmap() {
      this.HeatMap.hide()
    },
    btnshowheatmap() {
      this.HeatMap.show()
    },
    btnremoveheatmap() {
      this.HeatMap.remove('heatmap')
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

