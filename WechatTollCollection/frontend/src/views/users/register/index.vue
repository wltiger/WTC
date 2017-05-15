<template>
<div>
  <h1>Register</h1>
  <button v-on:click="onSubmit">Register</button>
  </div>
</template>

<script type="ts">
import { Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      signIn: 'signIn' // 映射 this.add() 为 this.$store.dispatch('signIn')
    }),
    onSubmit () {
        this.signIn();
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      isAuthorized: state => state.isAuthorized,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    })
  }
}
</script>