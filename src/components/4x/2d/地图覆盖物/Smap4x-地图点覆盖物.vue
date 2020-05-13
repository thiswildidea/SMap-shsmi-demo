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
      <h4>地图覆盖物测试</h4>
      <el-button type="primary" @click="btnaddmark">添加覆盖物点(一次一个)</el-button>
      <el-button type="primary" @click="btnupdatemark">更新覆盖物点(一个)</el-button>
      <el-button type="primary" @click="btnclearonemark">清除一个覆盖物点</el-button>
      <el-button type="primary" @click="btnaddmanymark">添加覆盖物点(多个)</el-button>
      <el-button type="primary" @click="btnupdatemanymark">更新覆盖物点(多个)</el-button>
      <el-button type="primary" @click="btncleanmanymark">清除多个覆盖物点</el-button>
      <el-button type="primary" @click="btnaddmarkgroup">添加覆盖物组</el-button>
      <el-button type="primary" @click="btnupdatemarkgroup">更新覆盖组</el-button>
      <el-button type="primary" @click="btncleanmarkgroup">清除覆盖物组</el-button>
      <el-button type="primary" @click="btnclearallmark">清除所有覆盖物点</el-button>
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
      onemarker: null,
      sencondmarker: null,
      threemarker: null,
      fourmarker: null,
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
      this.map.on('maploaded', function(view) {
        // this.panTo(100, 100)
        console.log(view)
        console.log(this.getZoom())
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
    btnaddmark() {
      this.onemarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        label: new SMap.Label({
          text: '点1',
          color: 'red',
          visible: true,
          size: 22,
          weight: 'normal',
          angle: 0,
          backgroundColor: 'red',
          borderLineColor: 'blue',
          borderLineSize: 1,
          haloColor: '[51, 204, 51, 0.2]',
          haloSize: 0,
          horizontalAlignment: 'left',
          verticalAlignment: 'top',
          kerning: true,
          lineHeight: 25,
          lineWidth: 200,
          rotated: true,
          xoffset: 10,
          yoffset: 10
        }),
        position: [0, 0, 100]
      })
      this.map.add(this.onemarker)

      this.sencondmarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        label: new SMap.Label({
          text: '点2',
          size: 22,
          color: 'blue',
          xoffset: 10,
          yoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        }),
        position: [100, 100, 1000]
      })
      this.map.add(this.sencondmarker)
    },
    btnupdatemark() {
      this.onemarker.label.text = '点一更新'
      this.map.update(this.onemarker)
    },
    btnclearonemark() {
      this.map.remove(this.onemarker)
    },
    btnaddmanymark() {
      this.threemarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        label: new SMap.Label({
          text: '点3',
          size: 22,
          xoffset: 0,
          yoffset: 0,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        }),
        position: [1000, 1000, 10]
      })
      this.fourmarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        label: new SMap.Label({
          text: '点4',
          size: 22,
          xoffset: 0,
          yoffset: 0,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        }),
        position: [1100, 1100, 20]
      })
      this.map.add([this.threemarker, this.fourmarker])
    },
    btnupdatemanymark() {
      this.threemarker.icon.image = require('../assets/blue.gif')
      this.threemarker.label.text = '点三更新'

      this.fourmarker.icon.image = require('../assets/blue.gif')
      this.fourmarker.label.text = '点四更新'
      this.map.update([this.threemarker, this.fourmarker])
    },
    btncleanmanymark() {
      this.map.remove([this.threemarker, this.fourmarker])
    },
    btnaddmarkgroup() {
      const marker1 = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/blue.gif')
        }),
        label: new SMap.Label({
          text: '点5',
          size: 22,
          color: 'yellow',
          xoffset: 0.1,
          yoffset: 0.1,
          // zoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        }),
        position: [500, 500, 100]
      })
      const marker2 = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/blue.gif')
        }),
        label: new SMap.Label({
          text: '点6',
          size: 22,
          color: 'black',
          xoffset: 0.1,
          yoffset: 0.1,
          // zoffset: 10,
          horizontalAlignment: 'left',
          verticalAlignment: 'top'
        }),
        position: [550, 550, 200]
      })
      this.OverlayGroup = new SMap.OverlayGroup([marker1, marker2])
      this.map.add(this.OverlayGroup)
    },
    btnupdatemarkgroup() {
      this.OverlayGroup.overlayers[0].icon.image = require('../assets/repaireorder_Accepted.gif')
      this.OverlayGroup.overlayers[0].label.text = '点5更新'

      this.OverlayGroup.overlayers[1].icon.image = require('../assets/repaireorder_Accepted.gif')
      this.OverlayGroup.overlayers[1].label.text = '点6更新'
      this.map.update(this.OverlayGroup)
    },
    btncleanmarkgroup() {
      this.map.remove(this.OverlayGroup)
    },
    btnclearallmark() {
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

