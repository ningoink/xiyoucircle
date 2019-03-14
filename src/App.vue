<template>
  <div id="app" >
    <!-- 根据弹出框显示状态，给每个页面根元素加入模糊效果并跟踪相关点击事件 -->
    <!-- <button v-on:click="toggleQrDialog">open</button> -->
    <router-view 
      v-bind:class="{ filter: qrIsShow }">
    </router-view>
    <qr-dialog v-if="qrIsShow"></qr-dialog>
  </div>
</template>

<script>
import QrDialog from '@/components/qr-dialog'
import Home from '@/views/home/index.vue'

import '@/style/reset.css'
import '@/style/card.css'

export default {
  name: 'App',
  components: {
    QrDialog,
    Home
  },
  computed: {
    qrIsShow () {
      return this.$store.state.qrDialog.opened
    }
  },
  methods: {
    toggleQrDialog () {
      console.log(this.$store)
      this.$store.dispatch('toggleQrDialog')
    }
  }
}
</script>

<style>
</style>
