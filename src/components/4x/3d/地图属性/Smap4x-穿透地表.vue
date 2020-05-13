<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="addzoomcontrol">添加缩放控件</el-button>
      <el-button type="primary" @click="addhomecontrol">添加主页控件</el-button>
      <el-button type="primary" @click="addcompasscontrol">添加罗盘控件</el-button>
      <el-button type="primary" @click="addfullscreencontrol">添加全屏控件</el-button>
      <el-button type="primary" @click="addmeasureline">添加线测量</el-button>
      <el-button type="primary" @click="addmeasurearea">添加面测量</el-button>
      <el-button type="primary" @click="addbasemaptoggle">添加底图切换按钮</el-button>
      <el-button type="primary" @click="addUndergroundSwitch">添加地上地下切换控件</el-button>
    </div>
    <div class="mapinterface">
      <h4>地图接口测试</h4>
      <el-button type="primary" @click="enablethroughground">穿透地表</el-button>
      <el-button type="primary" @click="disenablethroughground">恢复地表模式</el-button>
    </div>
  </div>
</template>
<script>
// import SMap from 'smap-shsmi'
import SMap from '../utils/4x/esm/SMap'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      mapconfig: [],
      map: null,
      panoffset: [50, 100],
      centerpoint: [0, 0, 100],
      layerListControl: null
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
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/dark' 'smap://styles/image'
        showBuildingBlock: true
      })
    },
    addlayercontrol() {
      this.layerListControl = new SMap.LayerListControl({
        visible: true,
        position: 'top-right',
        collapse: true
      })
      this.map.addControl(this.layerListControl)
    },
    addzoomcontrol() {
      const zoom = new SMap.Zoom({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(zoom)
    },
    addhomecontrol() {
      const home = new SMap.Home({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(home)
    },
    addcompasscontrol() {
      const compass = new SMap.Compass({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(compass)
    },
    addfullscreencontrol() {
      const fullscreen = new SMap.Fullscreen({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(fullscreen)
    },
    addmeasureline() {
      const measureLine = new SMap.MeasureLine({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(measureLine)
    },
    addmeasurearea() {
      const measureArea = new SMap.MeasureArea({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(measureArea)
    },
    addbasemaptoggle() {
      const basemapToggle = new SMap.BasemapToggle({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(basemapToggle)
    },
    addUndergroundSwitch() {
      const undergroundSwitch = new SMap.UndergroundSwitch({
        visible: true,
        position: 'bottom-right'
      })
      this.map.addControl(undergroundSwitch)
    },
    setMapStyle() {
      this.map.setMapStyle('smap://styles/normal')
    },
    remeovelayercontrol() {
      this.map.removeControl(this.layerListControl)
    },
    enablethroughground() {
      this.map.enableThroughGround(true)
    },
    disenablethroughground() {
      this.map.enableThroughGround(false)
    },
    btnaddmark() {
      const marker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(22, 22),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        position: [0, 0]
      })
      this.map.add(marker)

      const marker1 = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(22, 22),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        position: [100, 100]
      })
      this.map.add(marker1)
    },
    btnclearmark() {
      this.map.clearMap()
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

