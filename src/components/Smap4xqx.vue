<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
  </div>
</template>
<script>
// import SMap from '../utils/4x/esm/SMap'
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
      this.map = new SMap.Map('container', {
        userName: 'smiapi',
        menuName: 'smiapi23d',
        viewMode: '2D',
        center: [0, 0],
        zoom: 5,
        zooms: [1, 12],
        pitch: 60
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
       flex-flow: row;
      .info{
       position: relative;
       float: left;
       margin-left: 5px;
       background: #d4dde2;
       color: rgb(14, 13, 13);
       >h4{
          text-align: center;
       }

    }
    .mapinterface
    {
        background: #d4dde2;
         position: absolute;
         margin-top: 100px;
         float: left;
         margin-left: 5px;
    }
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>

