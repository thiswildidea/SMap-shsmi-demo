import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import map from '@/components/map'
import Smap4x from '@/components/Smap4x'
import Cmap from '@/components/Cmap'
import Smap4xqx from '@/components/Smap4xqx'
import Smap3x from '@/components/Smap3x'
import SMapLoader from '@/components/SMapLoader'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/map',
    name: 'map',
    component: map
  }, {
    path: '/',
    name: 'Smap4x',
    component: Smap4x
  }, {
    path: '/qx',
    name: 'Smap4xqx',
    component: Smap4xqx
  }, {
    path: '/cmap',
    name: 'Cmap',
    component: Cmap
  }, {
    path: '/Smap3x',
    name: 'Smap3x',
    component: Smap3x
  }, {
    path: '/SMapLoader',
    name: 'SMapLoader',
    component: SMapLoader
  }]
})

