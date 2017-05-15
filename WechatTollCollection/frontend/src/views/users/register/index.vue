<template>
  <div>
    <div class="center">
      <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
        <path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" />
      </svg>
  
      <h1 class="vux-title" style="display:none;">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#35495e;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice">WTC</p>
    </div>
    <group title="个人信息">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      <x-input title="学号" name="mobile" placeholder="请输入学号" keyboard="number"></x-input>
      <x-input title="手机" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
    </group>
    <group title="验证信息" class="weui-cells_form">
      <x-input title="验证码" class="weui-cell_vcode">
        <img slot="right" class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg">
      </x-input>
      <!--<x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>-->
    </group>
    <div style="padding:15px;">
      <x-button @click.native="onSubmit" type="primary">注册</x-button>
    </div>
  </div>
</template>
<style scoped>
.center {
  text-align: center;
}
</style>
<script type="ts">
import { XInput, Group, XButton, Cell } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  methods: {
    ...mapActions({
      signIn: 'signIn' // 映射 this.add() 为 this.$store.dispatch('signIn')
    }),
    onSubmit() {
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
