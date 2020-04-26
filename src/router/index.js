import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import map from '@/components/map'
import Smap4x from '@/components/Smap4x'
import Smap3x from '@/components/Smap3x'
import SMapLoader from '@/components/SMapLoader'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'map',
    component: map
  }, {
    path: '/Smap4x',
    name: 'Smap4x',
    component: Smap4x
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

