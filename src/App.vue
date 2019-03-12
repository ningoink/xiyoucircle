<template>
  <div id="app" >
    <!-- 根据弹出框显示状态，给每个页面根元素加入模糊效果并跟踪相关点击事件 -->
    <router-view 
      v-bind:class="{ filter: qrIsShow }">
    </router-view>
    <qr-dialog v-if="qrIsShow"></qr-dialog>
  </div>
</template>

<script>
import QrDialog from '@/components/qr-dialog'
import Home from '@/views/home/index.vue'

export default {
  name: 'App',
  components: {
    QrDialog,
    Home
  },
  data: function () {
    return {
      qrIsShow: false
    }
  }
}
</script>

<style>
/* reset.css */
* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 15px;
}

body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #34495e;
    font-family: Source Sans Pro, Helvetica Neue, Arial,sans-serif;
    letter-spacing: 0;
    margin: 0;
    overflow-x: hidden;
}

a {
    color: #34495e;
    text-decoration: none;
}

.filter {
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    -webkit-animation: row_ani 2s;
    -moz-animation: row_ani 2s;
    -ms-animation: row_ani 2s;
    animation: row_ani 2s;
    background-color: rgba(24, 24, 24, 0.42);
}
</style>
