<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="setmapextentcontrans">地图范围限制</el-button>
      <el-button type="primary" @click="removemapextentcontrans">移除地图范围限制</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
// import SMap from 'smap-shsmi-aa'

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
        viewMode: '2D',
        center: [0, 0],
        zoom: 6,
        zooms: [0, 11],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/light' 'smap://styles/dark'
        showBuildingBlock: false
      })
      this.map.on(SMap.MapEvent.click, function(map, event) {
        console.log(event.mapPoint)
        console.log(map.camera)
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
    setmapextentcontrans() {
      this.map.setExtentConstrain([0, 0], [1000, 1000])
    },
    removemapextentcontrans() {
      this.map.removeExtentConstrain()
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

