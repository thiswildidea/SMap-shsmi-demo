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
      <el-button type="primary" @click="test">test</el-button>
    </div>
    <div class="mapinterface">
      <h4>地图覆盖物测试</h4>
      <el-button type="primary" @click="btnaddmark">添加覆盖物点(一次一个)</el-button>
      <el-button type="primary" @click="btnupdatemark">更新覆盖物点(一个)</el-button>
      <el-button type="primary" @click="btnupdatemark1">更新覆盖物点(一个)</el-button>
      <el-button type="primary" @click="btnclearonemark">清除一个覆盖物点</el-button>
      <el-button type="primary" @click="btnaddmanymark">添加覆盖物点(多个)</el-button>
      <el-button type="primary" @click="btnupdatemanymark">更新覆盖物点(多个)</el-button>
      <el-button type="primary" @click="btncleanmanymark">清除多个覆盖物点</el-button>
      <el-button type="primary" @click="btnaddmarkgroup">添加覆盖物组</el-button>
      <el-button type="primary" @click="btnupdatemarkgroup">更新覆盖组</el-button>
      <el-button type="primary" @click="btncleanmarkgroup">清除覆盖物组</el-button>
      <el-button type="primary" @click="btnaddmassmarksgroup">循环加载覆盖点组(大量)</el-button>
      <el-button type="primary" @click="btncleanmassmarksgroup">清除覆盖物组(大量)</el-button>
    </div>
  </div>
</template>
<script>
import SMap from 'smap-shsmi'
import axios from 'axios'
// import SMap from '../utils/4x/esm/SMap'
// import SMap from 'smap-xh'
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
      OverlayGroup: null,
      massmarksgroup: null
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
        // mapStyle: 'smap://styles/image', // 'smap://styles/light' 'smap://styles/image'
        showBuildingBlock: false
      })
      this.map.on(SMap.MapEvent.maploaded, function(view) {
        // console.log('当前缩放级别' + this.getZoom())
        // this.panTo([0, 0, 0])
        // this.setZoomAndCenter(4, [10000, 1000, 0])
        // view.goTo({
        //   center: [0, 0],
        //   zoom: 6,
        //   tilt: 70,
        //   heading: 0
        // })
        // const querylayer = view.map.findLayerById('XH_JD')
        // const queryField = 'jdname_old'
        // const queryvalue = ['0410', '0415']
        // let querystr = queryField + "= '" + queryvalue[0] + "'"
        // queryvalue.map(function(item, key, ary) {
        //   if (key > 0) {
        //     querystr += ' OR ' + queryField + "= '" + item + "'"
        //   }
        // })
        // const layerQuery = querylayer.createQuery()
        // layerQuery.where = querystr
        // querylayer.queryFeatures(layerQuery).then(function(response) {
        //   if (response.features.length > 0) {
        //     const Hight_Graphiclayer = view.map.findLayerById('Hight_Graphiclayer')
        //     const Graphiclist = []
        //     SMap.load(['esri/Graphic']).then(([Graphic]) => {
        //       response.features.map(function(item, key, index) {
        //         const hightlightgraphic = new Graphic({
        //           geometry: item.geometry,
        //           attributes: item.attributes,
        //           symbol: {
        //             type: 'simple-fill',
        //             color: [255, 255, 255, 0.5],
        //             outline: {
        //               color: [255, 255, 0, 1],
        //               width: '5px'
        //             }
        //           }
        //         })
        //         const textgraphic = new Graphic({
        //           geometry: item.geometry.extent.center,
        //           symbol: {
        //             type: 'text',
        //             text: '名称',
        //             color: 'white',
        //             angle: 0,
        //             haloColor: 'black',
        //             haloSize: 0,
        //             xoffset: 0,
        //             yoffset: 0,
        //             verticalAlignment: 'left',
        //             horizontalAlignment: 'middle',
        //             font: {
        //               size: 14,
        //               family: 'Josefin Slab',
        //               weight: 'bold'
        //             }
        //           }
        //         })
        //         Graphiclist.push(textgraphic)
        //         Graphiclist.push(hightlightgraphic)
        //       })
        //       if (Hight_Graphiclayer != null) {
        //         Hight_Graphiclayer.removeAll()
        //         Hight_Graphiclayer.addMany(Graphiclist)
        //       // view.goTo(response.features)
        //       }
        //     }).catch((err) => {
        //       console.error(err)
        //     })
        //   }
        // })
      })
      this.map.on(SMap.MapEvent.extentchanged, function(extent) {
        console.log(extent)
      })
      this.map.on(SMap.MapEvent.zoomchanged, function(zoom) {
        console.log('当前缩放级别' + zoom)
      })
      this.map.on(SMap.MapEvent.centerchanged, function(center) {
        console.log(center)
      })
      this.map.on(SMap.MapEvent.popupvisible, function(visible) {
        console.log(visible)
      })
      this.map.on(SMap.MapEvent.click, function(map, event) {
        map.hitTest(event).then(async function(response) {
          if (response.results.length) {
            if (!response.results[0].length) {
              map.popup.defaultPopupTemplateEnabled = true
              map.popup.autoOpenEnabled = false
              map.popup.open({
                location: response.results[0].graphic.geometry,
                content: 'wo shi dian1'
              })
            }
          }
        })
      })
      this.map.on(SMap.MapEvent.doubleclick, function(map, event) {
        // map.hitTest(event).then(async function(response) {
        //   if (response.results.length > 0) {
        //     const layername = response.results[0].graphic.layer.id
        //     const objectid = response.results[0].graphic.attributes.objectid
        //     const layerQuery = response.results[0].graphic.layer.createQuery()
        //     layerQuery.where = 'objectid =' + objectid
        //     switch (layername) {
        //       case 'XH_JD':
        //         await response.results[0].graphic.layer.queryFeatures(layerQuery).then(function(response) {
        //           console.log(response.features)
        //         })
        //         break
        //     }
        //   }
        // })
      })
    },
    test() {
      // this.map.setPitch(60)
      // this.map.showBuilding(false)
      const url = 'http://10.108.3.16/arcgis/rest/services/soe/sh_boundary_service/MapServer/exts/ShsmiSOEServiceBus/findqxjdjwhinformationbylocation'
      const par = 'location={"x":"0","y":"0"}&f=pjson'
      axios.post(url, par).then((r) => {
        if (r.status === 200) {
          console.log(r.data)
        }
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
    },

    btnaddmark() {
      this.onemarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        attributes: {
          'name': '点1',
          'type': '点'
        },
        label: new SMap.Label({
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
          lineHeight: 0,
          lineWidth: 0,
          rotated: true,
          xoffset: 0,
          yoffset: 0,
          zoffset: 1
        }),
        position: [0, 0, 100]
      })
      this.map.addfeature(this.onemarker)
      this.sencondmarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        attributes: {
          'name': '点2',
          'type': '点'
        },
        label: new SMap.Label({
          size: 12,
          color: 'blue',
          xoffset: 0,
          yoffset: 0,
          horizontalAlignment: 'left',
          verticalAlignment: 'top',
          placement: 'center-right'
        }),
        position: [100, 100, 1000]
      })
      this.map.addfeature(this.sencondmarker)
    },
    btnupdatemark() {
      this.onemarker.attributes['name'] = '点一更新'
      this.onemarker.icon.image = require('../assets/blue.gif')
      this.map.updatefeature(this.onemarker)
    },
    btnupdatemark1() {
      this.onemarker.attributes['name'] = '点一更新....'
      this.onemarker.icon.image = require('../assets/repaireorder_Accepted.gif')
      this.map.updatefeature(this.onemarker)
    },
    btnclearonemark() {
      this.map.removefeature(this.onemarker)
    },
    btnaddmanymark() {
      this.threemarker = new SMap.Marker({
        icon: new SMap.Icon({
          size: new SMap.Size(40, 40),
          image: require('../assets/repaireorder_Accepted.gif')
        }),
        attributes: {
          'name': '点3',
          'type': '点'
        },
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
        attributes: {
          'name': '点4',
          'type': '点'
        },
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
      this.map.addfeature([this.threemarker, this.fourmarker])
    },
    btnupdatemanymark() {
      this.threemarker.icon.image = require('../assets/blue.gif')
      this.threemarker.attributes['name'] = '点三更新'

      this.fourmarker.icon.image = require('../assets/blue.gif')
      this.fourmarker.attributes['name'] = '点四更新'
      this.map.updatefeature([this.threemarker, this.fourmarker])
    },
    btncleanmanymark() {
      this.map.removefeature([this.threemarker, this.fourmarker])
    },
    btnaddmarkgroup() {
      const marker1 = new SMap.Marker({
        attributes: {
          'name': '点5',
          'style': '1'
        },
        position: [500, 500, 100]
      })
      const marker2 = new SMap.Marker({
        attributes: {
          'name': '点6',
          'style': '2'
        },
        position: [550, 550, 200]
      })
      const label = new SMap.Label({
        size: 22,
        color: 'black',
        xoffset: 0.1,
        yoffset: 0.1,
        horizontalAlignment: 'left',
        verticalAlignment: 'top',
        minScale: 5000,
        maxScale: 1000
      })
      const datafiled = [{
        name: 'name',
        alias: 'name',
        type: 'string'
      }]
      const style = [
        {
          style: '1',
          size: new SMap.Size(40, 40),
          url: require('../assets/repaireorder_Accepted.gif')
        }, {
          style: '2',
          size: new SMap.Size(40, 40),
          url: require('../assets/blue.gif')
        }
      ]
      const featureReduction = new SMap.FeatureReduction({
        type: 'cluster',
        clusterRadius: 100
      })
      this.OverlayGroup = new SMap.OverlayGroup([marker1, marker2], {        
        overlaytype: 'marker',
        datafiled: datafiled,
        style: style,
        label: label,
        frreduction: featureReduction
      })
      this.map.addfeature(this.OverlayGroup)
    },
    btnupdatemarkgroup() {
      this.OverlayGroup.overlayers[0].attributes['name'] = '点5更新'
      this.OverlayGroup.overlayers[0].attributes['style'] = '2'

      this.OverlayGroup.overlayers[1].attributes['style'] = '1'
      this.map.updatefeature(this.OverlayGroup)
    },
    btncleanmarkgroup() {
      this.map.removefeature(this.OverlayGroup)
    },
    btnaddmassmarksgroup() {
      const marks = []
      for (let i = 0; i <= 100000; i++) {
        const x = -2863.616790 + Math.ceil(Math.random() * 1200)
        const y = -7984.038031 + Math.ceil(Math.random() * 1200)
        const onemarker = new SMap.Marker({
          attributes: {
            'name': '点' + i,
            'style': Math.ceil(Math.random()).toString()
          },
          position: [x, y, 100]
        })
        marks.push(onemarker)
      }
      const label = new SMap.Label({
        size: 22,
        color: 'black',
        xoffset: 0.1,
        yoffset: 0.1,
        horizontalAlignment: 'left',
        verticalAlignment: 'top'
      })
      const datafiled = [{
        name: 'name',
        alias: 'name',
        type: 'string'
      }]
      const style = [
        {
          style: '0',
          size: new SMap.Size(40, 40),
          url: require('../assets/repaireorder_Accepted.gif')
        }, {
          style: '1',
          size: new SMap.Size(40, 40),
          url: require('../assets/blue.gif')
        }
      ]
      const featureReduction = new SMap.FeatureReduction({
        type: 'cluster',
        clusterRadius: 100
      })
      this.massmarksgroup = new SMap.OverlayGroup(marks, {
        overlaytype: 'marker',
        datafiled: datafiled,
        style: style,
        label: label,
        frreduction: featureReduction
      })
      this.map.addfeature(this.massmarksgroup)
    },
    btncleanmassmarksgroup() {
      this.map.removefeature(this.massmarksgroup)
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
       background: #d4dde2;
       color: rgb(14, 13, 13);
       >h4{
          text-align: center;
       }

    }
    .mapinterface
    {
       width:40%;
        // display: none;
        background: #d4dde2;
         position: absolute;
         margin-top: 160px;
         float: left;
         margin-left: 5px;
    }
    .mapcontainer {
      width: 100%;
      height: 100%;
    }
  }
</style>

