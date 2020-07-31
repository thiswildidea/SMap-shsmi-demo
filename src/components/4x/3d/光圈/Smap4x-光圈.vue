<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="btnaddqxmaskboundary">添加区县遮盖</el-button>
      <el-button type="primary" @click="btnaddjdmaskboundary">添加街道遮盖</el-button>
      <el-button type="primary" @click="btnaddjwhmaskboundary">添加居委会遮盖</el-button>
      <el-button type="primary" @click="btnaddcustommaskboundary">添加自定义范围遮盖</el-button>
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

