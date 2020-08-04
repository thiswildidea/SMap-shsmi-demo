<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="btnaddflashpoint3d">添加了flashpoint3d</el-button>
      <el-button type="primary" @click="btnremoveflashpoint3d">移除flashpoint3d</el-button>
    </div>
  </div>
</template>
<script>
import h337 from 'heatmapjs'
// import SMap from 'smap-shsmi'
// import SMap from 'smap-shsmi-aa'
import SMap from '../utils/4x/smap/esm/SMap'
// import Plugins from 'smap-plugins-shsmi'
import Plugins from '../utils/4x/plugins/esm/Plugins'
import GeoTask from '../utils/4x/task/esm/GeoTask'
import mapsenceViewPopup from '../utils/mapsenceViewPopup'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      map: null,
      fashPoint3DLayer: null
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
        zoom: 6,
        tokenconfigname: 'smiapi_new',
        zooms: [0, 11],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/light' 'smap://styles/dark'
        showBuildingBlock: false
      })
      this.map.on(SMap.MapEvent.click, function(view, eventParamter) {
        // console.log(eventParamter.mapPoint)
        // console.log(view.camera)
        // view.hitTest(eventParamter).then(async function(response) {
        //   console.log(response)
        // })
      })
    },
    addlayercontrol() {
      const layerListControl = new SMap.LayerListControl({
        visible: true,
        position: 'top-right',
        collapse: true
      })
      this.map.addControl(layerListControl)
    },
    btnaddflashpoint3d() {
      var _self = this
      const samples = [{
        x: 0,
        y: 0,
        attributes: {
          name: '报警点1',
          address: '国际饭店'
        }
      },
      {
        x: 100,
        y: 100,
        attributes: {
          name: '报警点2',
          address: '人民广场附近1'
        }
      },
      {
        x: 150,
        y: 100,
        attributes: {
          name: '报警点3',
          address: '人民广场附近2'
        }
      }
      ]
      const param = {
        color: [255, 0, 0, 1],
        nring: 0.5,
        spead: 1.5,
        view: this.map.view,
        points: samples
      }
      _self.fashPoint3DLayer = new Plugins.FlashPoint3DLayer(this.map.view)
      _self.fashPoint3DLayer.add(param)
      _self.fashPoint3DLayer.on('click', function(result, geometry) {
        if (geometry) {
          _self.map.view.popup.defaultPopupTemplateEnabled = true
          _self.map.view.popup.autoOpenEnabled = false
          _self.map.view.popup.open({
            location: geometry,
            title: result.attributes.name,
            content: mapsenceViewPopup.createContentpopup(result.attributes)
          })
        }
      })
    },
    btnremoveflashpoint3d() {
      this.fashPoint3DLayer.remove()
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
       flex-flow: row;
      .info{
       width:80%;
      //  display: none;
       position: absolute;
       float: left;
       margin-left: 5px;
       background: rgba(1,1,1,0);
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

