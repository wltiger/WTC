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
const store = new Vuex.Store({
  state: {
    isAuthorized: false,
  },
  mutations: {
    signIn (state) {
      state["isAuthorized"] = true;
    }
  },
  actions: {
    signIn (context) {
      context.commit('signIn');
    }
  },
  modules: {
    i18n: vuexI18n.store
  }
})
 
store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
  }
})

// initialize the internationalization plugin on the vue instance. note that 
// the store must be passed to the plugin. the plugin will then generate some 
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue 
// instance (i.e. Vue.i18n.set). 
Vue.use(vuexI18n.plugin, store);


// plugins
import { LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LocalePlugin)




import App from './app.vue'
import Home from './views/home.vue'
import RegisterView from './views/users/register/index.vue'
import SignInView from './views/users/signin.vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/register',
  component: RegisterView
}, {
  path: '/signin',
  component: SignInView
}]

const router = new VueRouter({
  routes
})

sync(store, router)

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = parseInt(history.getItem('count') || '0') || 0
history.setItem('/', "0")

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount.toString())
    to.path !== '/' && history.setItem(to.path, historyCount.toString())
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
