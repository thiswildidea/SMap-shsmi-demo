<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
  </div>
</template>
<script>
import CMap from 'cmap-online'
export default {
  name: 'MapControl',
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
      this.map = new CMap.Map('container', {
        viewMode: '3D',
        center: [0, 0],
        zoom: 5,
        zooms: [1, 12],
        pitch: 60,
        mapStyle: 'cmap://styles/image',
        showBuildingBlock: true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
       flex-flow: row;
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>
