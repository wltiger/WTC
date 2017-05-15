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
        <group title="登陆信息">
            <x-input title="手机" name="mobile" placeholder="请输入手机号" keyboard="number"></x-input>
            <x-input title="密码" name="password" placeholder="请输入手机号" keyboard="number"></x-input>
        </group>
        <div style="padding:15px;">
            <x-button @click.native="onSubmit" type="primary">登陆</x-button>
            <x-button @click.native="onRegister" type="warn">注册</x-button>
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
        },
        onRegister() {
            this.$router.replace('/register');
        }
    }
}
</script>
