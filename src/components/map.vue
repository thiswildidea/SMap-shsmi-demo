<template>
  <div class="mapExtent">
    <div id="mapcontainer" style="height:100%" class="calcite-map calcite-map-absolute calcite-widgets-dark" />
  </div>
</template>
<script>
import mapctx from './mapctx'
import axios from 'axios'
export default {
  name: 'Map',
  components: { },
  data() {
    return {
      mapconfig: [],
      userlayersTree: [],
      mapextent: [],
      mapwidgets: [],
      mapproxys: [],
      maptoken: [],
      sceneView: null,
      username: 'thiswildidea',
      menuName: '用户权限地图资源'
    }
  },
  computed: {

  },
  mounted() {
    this.inituserConfig()
  },
  methods: {
    inituserConfig() {
      const params = {
        username: this.username,
        menuName: this.menuName
      }
      this.$get('mapconfig/usermenu/', { ...params }).then((r) => {
        const data = r.data.data
        this.mapconfig = data.mapconfig[0]
        this.userlayersTree = data.layers
        this.mapwidgets = data.mapwidgets
        this.mapproxys = data.mapProxys
        this.mapextent = data.mapextent[0]
        if (this.mapconfig.tokenType === '1') {
          this.$get('mapconfig/maptoken', {
            tokenType: 'onemap',
            domainName: window.location.host
          }).then((r) => {
            this.maptoken = JSON.parse(r.data.data)['token']
            this.initmap()
          })
        } else if (this.mapconfig.tokenType === '2') {
          this.initmap()
        } else {
          const tokenUser = 'super'
          const tokenPassword = '11111111'
          const expirationTime = 1440
          const tokenUrl = this.mapconfig.fronttokenUrl + '?request=getToken&username=' + tokenUser + '&password=' + tokenPassword + '&clientid=ref.' + window.location.host + '&expiration=' + expirationTime + '&f=json'
          axios.post(tokenUrl).then((r) => {
            this.maptoken = r.data.token
            this.initmap()
          })
        }
      })
    },
    async initmap() {
      this.sceneView = await mapctx.initmap(this.mapconfig, this.userlayersTree, this.mapwidgets, this.mapextent, this.mapproxys, this.maptoken)
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapExtent {
    margin: 10px;
    .app-container {
      margin: 0 0 10px 0 !important;
    }
    .mapcontainer {
      width: 100%;
      height: 1000px;
    }
  }
  .el-card.is-always-shadow {
    box-shadow: none;
  }
  .el-card {
    border-radius: 0;
    border: none;
    .el-card__header {
      padding: 10px 20px !important;
      border-bottom: 1px solid #f1f1f1 !important;
    }
  }
</style>

