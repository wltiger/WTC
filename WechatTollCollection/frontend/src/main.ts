// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { PluginObject } from 'vue'
import Vuex from 'vuex'


import Es6Promise from 'es6-promise'
Es6Promise.polyfill();


import FastClick from 'fastclick'
FastClick.attach(document.body)

//i18n initialize
import vuexI18n from 'vuex-i18n'
Vue.use(<PluginObject<object>><any>Vuex);

// initialize the vuex store using the vuex module. note that you can change the 
//  name of the module if you wish 
const store = new Vuex.Store({});
 
// initialize the internationalization plugin on the vue instance. note that 
// the store must be passed to the plugin. the plugin will then generate some 
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue 
// instance (i.e. Vue.i18n.set). 
Vue.use(vuexI18n.plugin, store);


import App from './App.vue'
import Home from './components/HelloFromVux.vue'
import Grid from './components/Grid.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},{
  path: '/Grid',
  component: Grid
}]

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
