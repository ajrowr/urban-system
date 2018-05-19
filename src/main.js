/* eslint-disable */
/* TODO user shouldn't need to modify this */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import './tstrap/BaseComponents'
// import router from './router'

// require('jquery/dist/jquery.js')
import jQuery from 'jquery'
window.jQuery = jQuery
require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js') /* requires jquery ugh */

Vue.use(Router)

import { moduleRouteOrder } from './Application'

let router = new Router({
    routes: moduleRouteOrder.map(m => {return {path: m.path, name: m.name, component: m.component}}).concat([
        {path: '*', redirect: '/'}
    ])
})


Vue.config.productionTip = false

import AppContainer from './tstrap/AppContainer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { AppContainer },
  template: '<AppContainer/>'
})
