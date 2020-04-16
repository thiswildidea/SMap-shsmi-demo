import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import map from '@/components/map'
import Amap4x from '@/components/Amap4x'
import Amap3x from '@/components/Amap3x'
import AMapLoader from '@/components/AMapLoader'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'map',
    component: map
  }, {
    path: '/Amap4x',
    name: 'Amap4x',
    component: Amap4x
  }, {
    path: '/Amap3x',
    name: 'Amap3x',
    component: Amap3x
  }, {
    path: '/AMapLoader',
    name: 'AMapLoader',
    component: AMapLoader
  }]
})

