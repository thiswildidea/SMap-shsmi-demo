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
      <el-button type="primary" @click="addmeasureline">添加面测量</el-button>
      <el-button type="primary" @click="addmeasurearea">添加面测量</el-button>
      <el-button type="primary" @click="addbasemaptoggle">添加底图切换按钮</el-button>
      <el-button type="primary" @click="addUndergroundSwitch">添加地上地下切换控件</el-button>
      <el-button type="primary" @click="remeovelayercontrol">删除图层控制框</el-button>
    </div>
    <div class="mapinterface">
      <h4>地图覆盖物面测试</h4>
      <el-button type="primary" @click="btnaddpolygon">添加覆盖物面(一次一个)</el-button>
      <el-button type="primary" @click="btnupdatepolygon">更新覆盖物面(一个)</el-button>
      <el-button type="primary" @click="btnclearonepolygon">清除一个覆盖物面</el-button>
      <el-button type="primary" @click="btnaddmanypolygon">添加覆盖物面(多个)</el-button>
      <el-button type="primary" @click="btnupdatemanypolygon">更新覆盖物面(多个)</el-button>
      <el-button type="primary" @click="btncleanmanypolygon">清除多个覆盖物面</el-button>
      <el-button type="primary" @click="btnaddpolygongroup">添加覆盖物组</el-button>
      <el-button type="primary" @click="btnupdatepolygongroup">更新覆盖组</el-button>
      <el-button type="primary" @click="btncleanpolygongroup">清除覆盖物组</el-button>
      <el-button type="primary" @click="btnclearallpolygon">清除所有覆盖物面</el-button>
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
      onePolygon: null,
      sencondPolygon: null,
      threePolygon: null,
      fourPolygon: null,
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
    btnaddpolygon() {
      this.onePolygon = new SMap.Polygon({
        paths: [
          new SMap.LngLat(0, 0),
          new SMap.LngLat(20, 0),
          new SMap.LngLat(20, 30),
          new SMap.LngLat(0, 30),
          new SMap.LngLat(0, 0)
        ],
        fillColor: 'red',
        style: 'solid',
        strokeColor: 'yellow',
        strokestyle: 'solid',
        strokeWeight: 1,
        label: new SMap.Label({
          text: '面一',
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
      this.map.add(this.onePolygon)

      this.sencondPolygon = new SMap.Polygon({
        paths: [
          new SMap.LngLat(30, 30),
          new SMap.LngLat(60, 30),
          new SMap.LngLat(60, 100),
          new SMap.LngLat(30, 100),
          new SMap.LngLat(30, 30)
        ],
        fillColor: 'red',
        style: 'solid',
        strokeColor: 'yellow',
        strokestyle: 'solid',
        strokeWeight: 1,
        label: new SMap.Label({
          text: '面二',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.map.add(this.sencondPolygon)
    },
    btnupdatepolygon() {
      this.onePolygon.paths = [
        new SMap.LngLat(0, 0),
        new SMap.LngLat(25, 0),
        new SMap.LngLat(25, 30),
        new SMap.LngLat(0, 30),
        new SMap.LngLat(0, 0)
      ]
      this.onePolygon.label.text = '面一更新',
      this.onePolygon.label.color = 'yellow',
      this.map.update(this.onePolygon)
    },
    btnclearonepolygon() {
      this.map.remove(this.onePolygon)
    },
    btnaddmanypolygon() {
      this.threePolygon = new SMap.Polygon({
        paths: [
          new SMap.LngLat(540, 540),
          new SMap.LngLat(560, 540),
          new SMap.LngLat(560, 560),
          new SMap.LngLat(540, 560),
          new SMap.LngLat(540, 540)
        ],
        fillColor: 'red',
        style: 'solid',
        strokeColor: 'yellow',
        strokestyle: 'solid',
        strokeWeight: 1,
        label: new SMap.Label({
          text: '面三',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.fourPolygon = new SMap.Polygon({
        paths: [
          new SMap.LngLat(500, 500),
          new SMap.LngLat(520, 500),
          new SMap.LngLat(520, 550),
          new SMap.LngLat(500, 550),
          new SMap.LngLat(500, 500)
        ],
        fillColor: 'black',
        style: 'solid',
        strokeColor: 'yellow',
        strokestyle: 'solid',
        strokeWeight: 1,
        label: new SMap.Label({
          text: '面四',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.map.add([this.threePolygon, this.fourPolygon])
    },
    btnupdatemanypolygon() {
      this.threePolygon.label.text = '面三更新'
      this.fourPolygon.label.text = '面四更新'
      this.map.update([this.threePolygon, this.fourPolygon])
    },
    btncleanmanypolygon() {
      this.map.remove([this.threePolygon, this.fourPolygon])
    },
    btnaddpolygongroup() {
      const polygon1 = new SMap.Polygon({
        paths: [
          new SMap.LngLat(200, 200),
          new SMap.LngLat(220, 200),
          new SMap.LngLat(220, 250),
          new SMap.LngLat(200, 250),
          new SMap.LngLat(200, 200)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '面5',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      const polygon2 = new SMap.Polygon({
        paths: [
          new SMap.LngLat(240, 240),
          new SMap.LngLat(260, 240),
          new SMap.LngLat(260, 260),
          new SMap.LngLat(240, 260),
          new SMap.LngLat(240, 240)
        ],
        cap: 'square',
        strokeColor: 'red',
        style: 'solid',
        lineJoin: 'round',
        label: new SMap.Label({
          text: '面6',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        })
      })
      this.OverlayGroup = new SMap.OverlayGroup([polygon1, polygon2])
      this.map.add(this.OverlayGroup)
    },
    btnupdatepolygongroup() {
      this.OverlayGroup.overlayers[0].label.text = '面5更新'
      this.OverlayGroup.overlayers[1].label.text = '面6更新'
      this.map.update(this.OverlayGroup)
    },
    btncleanpolygongroup() {
      this.map.remove(this.OverlayGroup)
    },
    btnclearallpolygon() {
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

