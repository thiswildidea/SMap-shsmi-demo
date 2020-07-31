<template>
  <div class="mapExtent">
    <div id="container" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
    <div class="info">
      <h4>地图控件</h4>
      <el-button type="primary" @click="addlayercontrol">添加图层控件</el-button>
      <el-button type="primary" @click="routelpalyback">轨迹播放</el-button>
      <el-button type="primary" @click="stoproutelpalyback">停止轨迹播放</el-button>
      <el-button type="primary" @click="addechart">添加迁移图</el-button>
      <el-button type="primary" @click="removeechart">移除迁移图</el-button>
      <el-button type="primary" @click="roanmap">漫游</el-button>
      <el-button type="primary" @click="removeroanmap">清除漫游</el-button>
      <el-button type="primary" @click="setmapextentcontrans">地图范围限制</el-button>
      <el-button type="primary" @click="removemapextentcontrans">移除地图范围限制</el-button>
      <el-button type="primary" @click="queryboundary">查询边界</el-button>
      <el-button type="primary" @click="removeboundary">移除边界</el-button>
      <el-button type="primary" @click="hideboundary">隐藏边界</el-button>
      <el-button type="primary" @click="showboundary">显示边界</el-button>
      <el-button type="primary" @click="btnquery">查询</el-button>
    </div>
  </div>
</template>
<script>
// import SMap from 'smap-shsmi'
// import SMap from 'smap-shsmi-aa'
import SMap from '../utils/4x/smap/esm/SMap'
// import Plugins from 'smap-plugins-shsmi'
import Plugins from '../utils/4x/plugins/esm/Plugins'
import GeoTask from '../utils/4x/task/esm/GeoTask'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      map: null,
      trajectory: null,
      migrationMap: null,
      mapRoam: null,
      Boundary: null,
      queryTask: null
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
        console.log(eventParamter.mapPoint)
        console.log(view.camera)
        view.hitTest(eventParamter).then(async function(response) {
          console.log(response)
        })
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
      this.trajectory = new Plugins.Trajectory(this.map.view)
      this.trajectory.play({
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
            size: '100px',
            resource: {
              href: require('@/assets/ballon.svg')
            }
          }],
          verticalOffset: {
            screenLength: 150,
            maxWorldLength: 2000,
            minWorldLength: 20
          },
          callout: {
            type: 'line',
            color: [0, 0, 0],
            size: 2,
            border: {
              color: [255, 255, 255, 0.5]
            }
          }
        }
      })
    },
    stoproutelpalyback() {
      this.trajectory.remove()
    },
    addechart() {
      this.migrationMap = new Plugins.MigrationMap(this.map.view)
      const geoCoordMap = {
        '浦东区': [21704.88, -10564.32],
        '奉贤区': [6530.67, -36110.78],
        '金山区': [-22281.12, -45138.47],
        '松江区': [-27275.16, -25354.37],
        '青浦区': [-34189.99, -7491.07],
        '闵行区': [-3073.26, -17863.31],
        '徐汇区': [-2719.02, -6646.5],
        '长宁区': [-8459.18, -3172.19],
        '黄浦区': [1812.68, -1611.27],
        '普陀区': [-6344.38, 2719.02],
        '闸北区': [-2064.44, 5740.16],
        '虹口区': [1913.39, 4128.88],
        '杨浦区': [5488.4, 7804.6],
        '嘉定区': [-20936.57, 15750.44],
        '崇明区': [4225.73, 46675.1],
        '静安区': [-2265.85, -654.68],
        '宝山区': [-4417.81, 19207.86]
      }
      const PDData = [
        [{
          name: '浦东区'
        }, {
          name: '嘉定区',
          value: 95
        }],
        [{
          name: '浦东区'
        }, {
          name: '静安区',
          value: 90
        }],
        [{
          name: '浦东区'
        }, {
          name: '金山区',
          value: 80
        }],
        [{
          name: '浦东区'
        }, {
          name: '徐汇区',
          value: 70
        }],
        [{
          name: '浦东区'
        }, {
          name: '杨浦区',
          value: 60
        }],
        [{
          name: '浦东区'
        }, {
          name: '崇明区',
          value: 50
        }],
        [{
          name: '浦东区'
        }, {
          name: '虹口区',
          value: 40
        }],
        [{
          name: '浦东区'
        }, {
          name: '长宁区',
          value: 30
        }],
        [{
          name: '浦东区'
        }, {
          name: '普陀区',
          value: 20
        }],
        [{
          name: '浦东区'
        }, {
          name: '青浦区',
          value: 10
        }]
      ]
      const JDData = [
        [{
          name: '嘉定区'
        }, {
          name: '青浦区',
          value: 95
        }],
        [{
          name: '嘉定区'
        }, {
          name: '普陀区',
          value: 90
        }],
        [{
          name: '嘉定区'
        }, {
          name: '虹口区',
          value: 80
        }],
        [{
          name: '嘉定区'
        }, {
          name: '闸北区',
          value: 70
        }],
        [{
          name: '嘉定区'
        }, {
          name: '徐汇区',
          value: 60
        }],
        [{
          name: '嘉定区'
        }, {
          name: '杨浦区',
          value: 50
        }],
        [{
          name: '嘉定区'
        }, {
          name: '崇明区',
          value: 40
        }],
        [{
          name: '嘉定区'
        }, {
          name: '宝山区',
          value: 30
        }],
        [{
          name: '嘉定区'
        }, {
          name: '浦东区',
          value: 20
        }],
        [{
          name: '嘉定区'
        }, {
          name: '长宁区',
          value: 10
        }]
      ]
      const XHData = [
        [{
          name: '徐汇区'
        }, {
          name: '浦东区',
          value: 95
        }],
        [{
          name: '徐汇区'
        }, {
          name: '嘉定区',
          value: 90
        }],
        [{
          name: '徐汇区'
        }, {
          name: '崇明区',
          value: 80
        }],
        [{
          name: '徐汇区'
        }, {
          name: '长宁区',
          value: 70
        }],
        [{
          name: '徐汇区'
        }, {
          name: '闵行区',
          value: 60
        }],
        [{
          name: '徐汇区'
        }, {
          name: '闸北区',
          value: 50
        }],
        [{
          name: '徐汇区'
        }, {
          name: '金山区',
          value: 40
        }],
        [{
          name: '徐汇区'
        }, {
          name: '普陀区',
          value: 30
        }],
        [{
          name: '杨浦区'
        }, {
          name: '普陀区',
          value: 20
        }],
        [{
          name: '徐汇区'
        }, {
          name: '奉贤区',
          value: 10
        }]
      ]
      const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
      const color = ['#a6c84c', '#ffa022', '#46bee9']
      this.migrationMap.add({
        id: 'echart',
        symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
        geoCoordMap: geoCoordMap,
        planePath: planePath,
        color: color,
        datas: [
          ['浦东区', PDData],
          ['嘉定区', JDData],
          ['徐汇区', XHData]
        ]
      })
    },
    removeechart() {
      this.migrationMap.remove('echart')
    },
    roanmap() {
      var routedata = [
        {
          x: 358.5185,
          y: -77.2235,
          z: 1000
        },
        {
          x: 267.4522,
          y: 99.1188,
          z: 900
        },
        {
          x: 234.90484,
          y: 212.834811,
          z: 800
        },
        {
          x: 181.7233,
          y: 381.1000,
          z: 700
        },
        {
          x: 138.1169,
          y: 527.79151,
          z: 600
        },
        {
          x: 88.0071,
          y: 647.4898,
          z: 500
        },
        {
          x: 63.1774,
          y: 692.2989,
          z: 400
        },
        {
          x: 94.5310,
          y: 706.0872,
          z: 300
        },
        {
          x: 143.59157,
          y: 595.3354,
          z: 200
        },
        {
          x: 182.1127,
          y: 481.7369,
          z: 100
        },
        {
          x: 223.4553,
          y: 323.6532,
          z: 0
        },
        {
          x: 248.4933,
          y: 203.5321,
          z: 100
        },
        {
          x: 325.065,
          y: 31.37497,
          z: 200
        },
        {
          x: 546.1844,
          y: -355.09700,
          z: 300
        }
      ]
      this.mapRoam = new Plugins.TrajectoryPlus(this.map.view)
      this.mapRoam.play({
        coords: routedata,
        duration: 3000,
        speedFactor: 1,
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
            size: '100px',
            resource: {
              href: require('@/assets/ballon.svg')
            }
          }],
          verticalOffset: {
            screenLength: 150,
            maxWorldLength: 2000,
            minWorldLength: 20
          },
          callout: {
            type: 'line',
            color: [0, 0, 0],
            size: 2,
            border: {
              color: [255, 255, 255, 0.5]
            }
          }
        }
      })
    },
    removeroanmap() {
      this.mapRoam.remove()
    },
    setmapextentcontrans() {
      this.map.setExtentConstrain([0, 0], [1000, 1000])
    },
    removemapextentcontrans() {
      this.map.removeExtentConstrain()
    },
    queryboundary() {
      const par = {
        boundaryType: 'qx_boundary',
        boundaryDefinition: "name like '%黄浦%'", // qxcode like '%01%
        symbol: {
          type: 'simple-fill',
          color: [255, 255, 255, 0],
          outline: {
            color: [255, 255, 0, 1],
            width: '5px'
          }
        }
      }
      this.Boundary = new Plugins.Boundary(this.map.view)
      this.Boundary.add(par)
    },
    removeboundary() {
      this.Boundary.remove()
    },
    hideboundary() {
      this.Boundary.hide()
    },
    showboundary() {
      this.Boundary.show()
    },
    btnquery() {
      const par = {
        layerUniqueId: 'qx_boundary',
        queryDefinition: "name like '%黄浦%'", // qxcode like '%01%
        displayed: true,
        outFields: ['*'],
        type: 'polygon',
        symbol: {
          type: 'simple-fill',
          color: [255, 255, 255, 1],
          outline: {
            color: [255, 255, 0, 1],
            width: '5px'
          }
        }
      }
      this.queryTask = new GeoTask.Query(this.map.view)
      this.queryTask.featureLayer(par).then((result) => {
        console.log(result)
      })
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

