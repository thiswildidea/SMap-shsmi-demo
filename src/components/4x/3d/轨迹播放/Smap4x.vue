<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="routelpalyback">轨迹播放</el-button>
      <el-button type="primary" @click="stoproutelpalyback">停止轨迹播放</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
import Plugins from 'smap-plugins-shsmi'
// import SMap from 'smap-shsmi-aa'
// import SMap from '../utils/4x/smap/esm/SMap'
// import Plugins from '../utils/4x/plugins/esm/Plugins'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      map: null,
      trajectory: null
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
        tokenconfigname: 'smiapi_new',
        zooms: [0, 12],
        pitch: 60,
        mapStyle: 'smap://styles/dark', // 'smap://styles/light' 'smap://styles/dark'
        showBuildingBlock: true
      })
      this.map.on(SMap.MapEvent.click, function(map, event) {
        console.log(event.mapPoint)
        console.log(map.camera)
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
    routelpalyback() {
      var routedata = [
        {
          x: 358.5185,
          y: -77.2235
        },
        {
          x: 267.4522,
          y: 99.1188
        },
        {
          x: 234.90484,
          y: 212.834811
        },
        {
          x: 181.7233,
          y: 381.1000
        },
        {
          x: 138.1169,
          y: 527.79151
        },
        {
          x: 88.0071,
          y: 647.4898
        },
        {
          x: 63.1774,
          y: 692.2989
        },
        {
          x: 94.5310,
          y: 706.0872
        },
        {
          x: 143.59157,
          y: 595.3354
        },
        {
          x: 182.1127,
          y: 481.7369
        },
        {
          x: 223.4553,
          y: 323.6532
        },
        {
          x: 248.4933,
          y: 203.5321
        },
        {
          x: 325.065,
          y: 31.37497
        },
        {
          x: 546.1844,
          y: -355.09700
        }
      ]
      this.trajectory = new Plugins.Trajectory(this.map.map)
      this.trajectory.playback({
        coords: routedata,
        showtrail: true,
        trailsymbol: {
          type: 'simple-line',
          color: [255, 255, 255, 0.5],
          width: '10px',
          style: 'solid'
        },
        mobilesymbol: {
          // type: 'picture-marker',
          // url: require('@/assets/car.png'),
          // width: '64px',
          // height: '64px'
          type: 'point-3d',
          symbolLayers: [{
            type: 'icon',
            size: '50px',
            resource: {
              href: require('@/assets/ballon.svg')
            }
          }],
          verticalOffset: {
            screenLength: 50,
            maxWorldLength: 2000,
            minWorldLength: 20
          },
          callout: {
            type: 'line',
            color: [0, 0, 0],
            size: 2,
            border: {
              color: [255, 255, 255]
            }
          }
        }
      })
    },
    stoproutelpalyback() {
      this.trajectory.hideHistoryRoute()
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

