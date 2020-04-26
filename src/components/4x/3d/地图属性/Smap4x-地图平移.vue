<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图的平移</h4>
      <el-button type="primary" @click="panBy">平移像素值  {{ panoffset }}</el-button>
      <el-button type="primary" @click="panTo">地图中心点平移至 {{ centerpoint }}</el-button>
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
        viewMode: '3D',
        center: [0, 0],
        zoom: 5,
        zooms: [2, 10],
        pitch: 75
      })
    },
    panBy() {
      this.map.panBy(parseFloat(this.panoffset[0]), parseFloat(this.panoffset[1]))
    },
    panTo() {
      this.map.panTo([parseFloat(this.centerpoint[0]), parseFloat(this.centerpoint[1]), parseFloat(this.centerpoint[2])])
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

