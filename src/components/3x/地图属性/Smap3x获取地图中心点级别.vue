<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
    <div class="info">
      <h4>获取地图级别与中心点坐标</h4>
      <p>当前级别：<span class="map-zoom">{{ zoom }}</span></p>
      <p>当前中心点：<span class="map-center">{{ center }}</span></p>
      <el-button type="primary" @click="getzoom">获取级别</el-button>
      <el-button type="primary" @click="getcenter">获取中心点</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap3x-shsmi'
export default {
  name: 'SMap3x',
  components: { },
  data() {
    return {
      mapconfig: [],
      map: null,
      zoom: 5,
      center: [0, 0]
    }
  },
  computed: {},
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new SMap.Map('container', {
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
    getzoom() {
      this.zoom = this.map.getZoom()
    },
    getcenter() {
      this.center = this.map.getCenter().toString()
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

