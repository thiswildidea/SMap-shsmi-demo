<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
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
      <el-button type="primary" @click="addbasemapgallery">添加地图切换组</el-button>
      <el-button type="primary" @click="addbasemapgalleryexpand">添加地图切换组可伸缩</el-button>
      <el-button type="primary" @click="addbimfilter">BIM分层</el-button>
      <el-button type="primary" @click="remeovelayercontrol">删除图层控制框</el-button>
      <el-button type="primary" @click="btnaddqxmaskboundary">添加区县遮盖</el-button>
      <el-button type="primary" @click="btnaddjdmaskboundary">添加街道遮盖</el-button>
      <el-button type="primary" @click="btnaddjwhmaskboundary">添加居委会遮盖</el-button>
      <el-button type="primary" @click="btnaddcustommaskboundary">添加自定义范围遮盖</el-button>

    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi-aa'
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
        menuName: 'smiapi_23d',
        tokenconfigname: 'smiapi_new',
        viewMode: '3D',
        center: [0, 0],
        zoom: 4,
        zooms: [1, 12],
        pitch: 60,
        showBuildingBlock: true,
        mapStyle: 'smap://styles/dark' // 'smap://styles/dark' 'smap://styles/image'
      })
      this.map.on(SMap.MapEvent.maploaded, function(view) {
        // console.log(view)
      })
    },
    btnaddjdmaskboundary() {
      const par = {
        boundaryType: 'jd_boundary',
        boundaryDefinition: "name like '%上钢新村街道%'", // jd_code  like '%3509%
        boundarydistance: 150,
        bounarycount: 5,
        boundaryColor: [58, 95, 225, 0.6],
        maskColor: [0, 17, 35, 0.9]
      }
      this.map.setmaskboundary(par)
    },
    btnaddjwhmaskboundary() {
      const par = {
        boundaryType: 'jwh_boundary',
        boundaryDefinition: "jwhcode like '%072128%'", // name like '%曹杨新苑%
        boundarydistance: 150,
        bounarycount: 5,
        boundaryColor: [58, 95, 225, 0.6],
        maskColor: [0, 17, 35, 0.9]
      }
      this.map.setmaskboundary(par)
    },
    btnaddqxmaskboundary() {
      const par = {
        boundaryType: 'qx_boundary',
        boundaryDefinition: "name like '%黄浦%'", // qxcode like '%01%
        boundarydistance: 150,
        bounarycount: 5,
        boundaryColor: 'blue',
        maskColor: [0, 17, 33, 0.9],
        symbol: {
          size: 20
        }
      }
      this.map.setmaskboundary(par)
    },
    btnaddcustommaskboundary() {
      const par = {
        boundarydistance: 1000,
        bounarycount: 5,
        boundaryColor: 'red',
        maskColor: [112, 117, 233, 0.9],
        inputgeometry: [[0, 0], [10000, 0], [10000, 10000],
          [0, 10000], [0, 0]],
        symbol: {
          size: 10
        }
      }
      this.map.setmaskboundary(par)
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
    }, addcompasscontrol() {
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
    addbasemapgallery() {
      const bMapGallery = new SMap.BMapGallery({
        visible: true,
        position: 'top-right'
      })
      this.map.addControl(bMapGallery)
    },
    addbasemapgalleryexpand() {
      const bMapGalleryexpand = new SMap.BMapGalleryExpand({
        visible: true,
        position: 'bottom-right'
      })
      this.map.addControl(bMapGalleryexpand)
    },
    addbimfilter() {
      const bIMFilterControl = new SMap.BIMFilterControl({
        visible: true,
        position: 'bottom-right',
        layerid: 'mxqyBim'
      })
      this.map.addControl(bIMFilterControl)
    },
    remeovelayercontrol() {
      this.map.removeControl(this.layerListControl)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
       flex-flow: row;
      .info{
       width:80%;
       position: absolute;
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

