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
      SMapLoader.load(['smi/SMap'], { version: '3.32', css: true }).then(([SMap]) => {
        this.map = new SMap('container', {
          center: [0, 0],
          zoom: 5,
          zooms: [1, 9],
          keyboardEnable: true, // 是否可以键盘导航
          doubleClickZoom: true, // 是否双击缩放
          dragEnable: true, // 是否地图拖拽
          zoomEnable: true, // 是否可以缩放
          mapNavigation: true // 是否可以地图导航
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

