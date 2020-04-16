<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>设置地图中心点/级别</h4>
      <p>级别：<span class="map-zoom">{{ zoom }}</span></p>
      <p>中心点：<span class="map-center">{{ center }}</span></p>
      <el-button type="primary" @click="setzoom">设置地图级别</el-button>
      <el-button type="primary" @click="setcenter">设置地图中心点</el-button>
      <el-button type="primary" @click="setZoomAndcenter">设置地图级别和中心点</el-button>
    </div>
  </div>
</template>
<script>
import AMap from 'amap3x-shsmi'
export default {
  name: 'AMap3x',
  components: { },
  data() {
    return {
      mapconfig: [],
      map: null,
      zoom: 5,
      center: [0, 0]
    }
  },
  computed: {

  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('container', {
        center: [0, 0],
        zoom: 5,
        zooms: [2, 10],
        mapNavigation: true,
        dragEnable: true,
        doubleClickZoom: true,
        keyboardEnable: true,
        zoomEnable: true
      })
    },
    setzoom() {
      this.map.setZoom(this.zoom)
    },
    setcenter() {
      this.map.setCenter(this.center[0], this.center[1])
    },
    setZoomAndcenter() {
      this.map.setZoomAndCenter(this.zoom, this.center)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
    .info{
       position: relative;
       float: right;
       background: #d4dde2;
       color: rgb(14, 13, 13);
      .map-zoom{
        color: #0288d1;
      }
      .map-center{
        color: #0288d1;
      }
    }
    margin: 10px;
    .app-container {
      margin: 0 0 10px 0 !important;
    }
    .mapcontainer {
      width: 100%;
      height: 1000px;
    }
  }
  .el-card.is-always-shadow {
    box-shadow: none;
  }
  .el-card {
    border-radius: 0;
    border: none;
    .el-card__header {
      padding: 10px 20px !important;
      border-bottom: 1px solid #f1f1f1 !important;
    }
  }
</style>

