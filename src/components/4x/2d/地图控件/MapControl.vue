<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="addzoomcontrol">添加缩放控件</el-button>
      <el-button type="primary" @click="addhomecontrol">添加主页控件</el-button>
      <el-button type="primary" @click="addcompasscontrol">添加罗盘控件</el-button>
      <el-button type="primary" @click="addfullscreencontrol">添加全屏控件</el-button>
      <el-button type="primary" @click="addUndergroundSwitch">添加地上地下切换控件</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
// import SMap from '../utils/4x/esm/SMap'
export default {
  name: 'SMap',
  components: { },
  data() {
    return {
      mapconfig: [],
      map: null,
      panoffset: [50, 100],
      centerpoint: [0, 0, 100]
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
        zoom: 5,
        zooms: [1, 9],
        pitch: 60
      })
    },
    addlayercontrol() {
      const TocControl = new SMap.LayerListControl({
        visible: true,
        position: 'top-right',
        collapse: true
      })
      this.map.addControl(TocControl)
    },
    addzoomcontrol() {
      const Zoom = new SMap.Zoom({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(Zoom)
    },
    addhomecontrol() {
      const home = new SMap.Home({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(home)
    },
    addcompasscontrol() {
      const Compass = new SMap.Compass({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(Compass)
    },
    addfullscreencontrol() {
      const Fullscreen = new SMap.Fullscreen({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(Fullscreen)
    },
    addUndergroundSwitch() {
      const UndergroundSwitch = new SMap.UndergroundSwitch({
        visible: true,
        position: 'bottom-right'
      })
      this.map.addControl(UndergroundSwitch)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
      .info{
       position: relative;
       float: left;
       margin-left: 5px;
       background: #d4dde2;
       color: rgb(14, 13, 13);
    }
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>

