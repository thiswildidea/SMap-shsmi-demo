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
      <el-button type="primary" @click="remeovelayercontrol">删除图层控制框</el-button>
    </div>
    <div class="mapinterface">
      <h4>地图覆盖物线测试</h4>
      <el-button type="primary" @click="btnaddpolyline">添加覆盖物线(一次一个)</el-button>
      <el-button type="primary" @click="btnupdatepolyline">更新覆盖物线(一个)</el-button>
      <el-button type="primary" @click="btnclearonepolyline">清除一个覆盖物线</el-button>
      <el-button type="primary" @click="btnaddmanypolyline">添加覆盖物线(多个)</el-button>
      <el-button type="primary" @click="btnupdatemanypolyline">更新覆盖物线(多个)</el-button>
      <el-button type="primary" @click="btncleanmanypolyline">清除多个覆盖物线</el-button>
      <el-button type="primary" @click="btnaddpolylinegroup">添加覆盖物组</el-button>
      <el-button type="primary" @click="btnupdatepolylinegroup">更新覆盖组</el-button>
      <el-button type="primary" @click="btncleanpolylinegroup">清除覆盖物组</el-button>
      <el-button type="primary" @click="btnclearallpolyline">清除所有覆盖物线</el-button>
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
      map: null,
      onePolyline: null,
      sencondPolyline: null,
      threePolyline: null,
      fourPolyline: null,
      OverlayGroup: null
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
        zooms: [1, 12],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/dark' 'smap://styles/image'
        showBuildingBlock: false
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
    remeovelayercontrol() {
      this.map.removeControl(this.layerListControl)
    },
    btnaddpolyline() {
      this.onePolyline = new SMap.Polyline({
        path: [
          new SMap.LngLat(0, 0),
          new SMap.LngLat(10, 10),
          new SMap.LngLat(50, 50)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '线一',
          color: 'red',
          visible: true,
          size: 22,
          weight: 'normal',
          angle: 0,
          backgroundColor: 'red',
          borderLineColor: 'blue',
          borderLineSize: 10,
          haloColor: '[51, 204, 51, 0.2]',
          haloSize: 0,
          horizontalAlignment: 'left',
          verticalAlignment: 'top',
          kerning: true,
          lineHeight: 25,
          lineWidth: 200,
          rotated: false,
          xoffset: 10,
          yoffset: 10
        })
      })
      this.map.add(this.onePolyline)

      this.sencondPolyline = new SMap.Polyline({
        path: [
          new SMap.LngLat(100, 100),
          new SMap.LngLat(200, 200),
          new SMap.LngLat(300, 300)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '线二',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.map.add(this.sencondPolyline)
    },
    btnupdatepolyline() {
      this.onePolyline.path = [
        new SMap.LngLat(0, 0),
        new SMap.LngLat(20, 20),
        new SMap.LngLat(80, 80)
      ]
      this.onePolyline.label.text = '线一更新',
      this.onePolyline.label.color = 'yellow',
      this.map.update(this.onePolyline)
    },
    btnclearonepolyline() {
      this.map.remove(this.onePolyline)
    },
    btnaddmanypolyline() {
      this.threePolyline = new SMap.Polyline({
        path: [
          new SMap.LngLat(400, 400),
          new SMap.LngLat(420, 420),
          new SMap.LngLat(450, 450)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '线三',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.fourPolyline = new SMap.Polyline({
        path: [
          new SMap.LngLat(600, 600),
          new SMap.LngLat(620, 620),
          new SMap.LngLat(650, 650)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '线四',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.map.add([this.threePolyline, this.fourPolyline])
    },
    btnupdatemanypolyline() {
      this.threePolyline.label.text = '线三更新'
      this.fourPolyline.label.text = '线四更新'
      this.map.update([this.threePolyline, this.fourPolyline])
    },
    btncleanmanypolyline() {
      this.map.remove([this.threePolyline, this.fourPolyline])
    },
    btnaddpolylinegroup() {
      const polyline1 = new SMap.Polyline({
        path: [
          new SMap.LngLat(400, 400),
          new SMap.LngLat(420, 420),
          new SMap.LngLat(450, 450)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '线6',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      const polyline2 = new SMap.Polyline({
        path: [
          new SMap.LngLat(300, 300),
          new SMap.LngLat(320, 320),
          new SMap.LngLat(350, 350)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '线6',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.OverlayGroup = new SMap.OverlayGroup([polyline1, polyline2])
      this.map.add(this.OverlayGroup)
    },
    btnupdatepolylinegroup() {
      this.OverlayGroup.overlayers[0].label.text = '线5更新'
      this.OverlayGroup.overlayers[1].label.text = '线6更新'
      this.map.update(this.OverlayGroup)
    },
    btncleanpolylinegroup() {
      this.map.remove(this.OverlayGroup)
    },
    btnclearallpolyline() {
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

