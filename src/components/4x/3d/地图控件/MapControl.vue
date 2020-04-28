<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addcontrol">添加地图控件</el-button>
    </div>
  </div>
</template>
<script>
// import SMap from 'smap-shsmi'
import SMap from '../utils/4x/esm/SMap'
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
        zooms: [1, 9],
        pitch: 60
      })
    },
    addcontrol() {
      const TocControl = new SMap.LayerListControl({
        visible: true,
        position: 'top-right',
        collapse: true
      })
      this.map.addControl(TocControl)
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

