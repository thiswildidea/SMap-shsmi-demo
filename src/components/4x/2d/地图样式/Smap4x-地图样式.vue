<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
export default {
  name: 'SMap',
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
      const map = new SMap.Map('container', {
        center: [0, 0],
        zoom: 5,
        mapStyle: 'smap://styles/normal' // 'smap://styles/dark' 'smap://styles/image'
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

