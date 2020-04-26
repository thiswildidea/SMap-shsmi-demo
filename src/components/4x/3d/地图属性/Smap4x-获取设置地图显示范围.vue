<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>设置/获取地图显示范围</h4>
      <p>NorthEast坐标：<span class="map-northeast">{{ northeast }}</span></p>
      <p>SouthWest坐标：<span class="map-southwest">{{ southwest }}</span></p>
      <el-button type="primary" @click="getBounds">获取地图显示范围</el-button>
      <el-button type="primary" @click="setBounds">设置地图显示范围</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
export default {
  name: 'SMap',
  components: { },
  data() {
    return {
      mapconfig: [],
      northeast: [0, 0],
      map: null,
      southwest: [0, 0]
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
        zoom: 5,
        zooms: [2, 10],
        pitch: 75
      })
    },
    getBounds() {
      const bounds = this.map.getBounds()
      this.northeast = bounds.northeast
      this.southwest = bounds.southwest
    },
    setBounds() {
      const mybounds = new SMap.Bounds([parseFloat(this.southwest[0]), parseFloat(this.southwest[1])],
        [parseFloat(this.northeast[0]), parseFloat(this.northeast[1])])
      this.map.setBounds(mybounds)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
      .info{
       position: relative;
       float: left;
       background: #d4dde2;
       color: rgb(14, 13, 13);
      .map-northeast{
        color: #0288d1;
      }
      .map-southwest{
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

