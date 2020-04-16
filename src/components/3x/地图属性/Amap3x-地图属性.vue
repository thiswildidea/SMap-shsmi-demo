<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
  </div>
</template>
<script>
import AMap from 'amap3x-shsmi'
export default {
  name: 'AMap3x',
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
        center: [0, 0],
        zoom: 5,
        zooms: [2, 10],
        mapNavigation: true,
        dragEnable: false,
        doubleClickZoom: false,
        keyboardEnable: false,
        zoomEnable: false
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

