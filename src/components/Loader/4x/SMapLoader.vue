<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
  </div>
</template>
<script>
import SMapLoader from 'smap-shsmi-loader'
export default {
  name: 'SMapLoader',
  components: { },
  data() {
    return {
      map: null
    }
  },
  computed: {

  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      SMapLoader.load(['smi/SMap']).then(([SMap]) => {
        this.map = new SMap('container', {
          viewMode: '3D',
          center: [0, 0],
          zoom: 8,
          zooms: [1, 9],
          pitch: 75
        }, function(map) {
          console.log(map)
        })
      })
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

