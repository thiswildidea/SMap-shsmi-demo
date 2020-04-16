<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
  </div>
</template>
<script>
import AMap from 'amap-shsmi'
export default {
  name: 'AMap',
  components: { },
  data() {
    return {
      mapconfig: []
    }
  },
  computed: {

  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = new AMap.Map('container', {
        viewMode: '3D',
        center: [0, 0],
        zoom: 5,
        pitch: 75,
        zooms: [2, 10]
      })
      console.log(map)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
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

