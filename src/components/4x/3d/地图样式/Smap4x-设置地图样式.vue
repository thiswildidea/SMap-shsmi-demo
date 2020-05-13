<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
    <div class="mapinterface">
      <h4>地图接口测试</h4>
      <el-button type="primary" @click="setMapStyle">设置地图样式</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
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
        viewMode: '3D',
        center: [0, 0],
        zoom: 5,
        zooms: [1, 12],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/dark' 'smap://styles/image'
        showBuildingBlock: false
      })
    },
    setMapStyle() {
      this.map.setMapStyle('smap://styles/normal')
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

