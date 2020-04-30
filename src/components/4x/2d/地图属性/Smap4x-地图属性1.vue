<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map" />
    <div class="info">
      <h4>地图属性</h4>
      <el-button type="primary" @click="getmapscale">获取地图比例尺</el-button>
      <el-button type="primary" @click="setmaproation">设置地图旋转</el-button>
      <el-button type="primary" @click="zoomIn">地图放大</el-button>
      <el-button type="primary" @click="zoomOut">地图缩小</el-button>
      <el-button type="primary" @click="setMapStyle">设置地图样式</el-button>
      <el-button type="primary" @click="getMapStyle">获取地图样式</el-button>
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
        viewMode: '2D',
        center: [0, 0],
        zoom: 5,
        zooms: [1, 9],
        mapStyle: 'smap://styles/dark'
      })
    },
    getmapscale() {
      console.log(this.map.getScale())
    },
    setmaproation() {
      this.map.setRotation(90)
    },
    zoomIn() {
      this.map.zoomIn()
    },
    zoomOut() {
      this.map.zoomOut()
    },
    setMapStyle() {
      this.map.setMapStyle('smap://styles/normal')
    },
    getMapStyle() {
      console.log(this.map.getMapStyle())
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
       >h4{
          text-align: center;
       }
    }
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>

