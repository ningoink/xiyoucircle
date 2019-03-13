<template>
    <div>
        <header class="header">
        <a href="./index.html" target="_self" class="header__logo">西邮开源社</a>
        <nav class="header__nav">
            <a href="./lab.html" target="_self" class="header__nav-item header__nav-item_status_active header__nav-item_i_1">西邮实验室</a>
            <a href="./about.html" target="_self" class="header__nav-item header__nav-item_status_active header__nav-item_i_1">关于前端圈</a>
            <a href="#" id="openJoinQR" v-on:click="toggleQrDialog" class="header__nav-item header__nav-item_custom_button">加入我们</a>
            <div class="header__nav-item-tip"></div>
        </nav>
    </header>
    </div>
</template>

<script>
export default {
    name: 'AppNav',
     methods: {
        toggleQrDialog () {
            this.$store.dispatch('qrDialog/toggleQrDialog')
        }
     }
}
</script>

<style scoped>
body {
  font-size: 12px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB', Helvetica,
    'Helvetica Neue', 微软雅黑, Tahoma, Arial, sans-serif;
}

a {
  color: #14191e;
  text-decoration: none;
}

a:hover {
  color: #20a0ff;
}
.box {
  overflow: hidden;
}
.header {
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  height: 60px;
  /*background-color: #FAFAFA;*/
  color: #292e35;
}

.header__logo {
  float: left;
  height: 40px;
  margin: 10px 0px 0px 60px;
  padding: 0px 0px 0px 50px;
  background: url('../assets/logo.png') left center no-repeat;
  display: block;
  font-size: 18px;
  line-height: 40px;
}

.header__nav {
  float: right;
  margin: 10px 10px 0px 0px;
  position: relative;
}

.header__nav-item:hover {
  color: #20a0ff;
}

.header__nav-item {
  float: left;
  padding: 0 20px;
  font-size: 14px;
  display: inline-block;
  width: 80px;
  text-align: center;
  line-height: 40px;
}

.header__nav-item-tip {
  width: 80px;
  height: 2px;
  background: #20a0ff;
  position: absolute;
  left: 20px;
  bottom: -2px;
}

.header__nav-item_custom_button {
  color: #f6f6f6;
  background: #20a0ff;
  border: 1px solid #20a0ff;
  width: 60px;
  margin: 0 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 16px 1px #20a0ff;
}

.header__nav-item_custom_button:hover {
  color: #ffffff;
}
</style>

