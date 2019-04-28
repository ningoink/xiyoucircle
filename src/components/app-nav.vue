<template>
  <div>
    <header class="header">
      <router-link to="/" class="header__logo">西邮实验室</router-link>
      <nav class="header__nav">
        <span @click="handleSwitch">
          <router-link
            to="/lab"
            class="header__nav-item header__nav-item_status_active header__nav-item_i_1"
          >西邮实验室</router-link>
        </span>
        <span @click="handleSwitch">
          <router-link
            to="/about"
            class="header__nav-item header__nav-item_status_active header__nav-item_i_1"
          >关于开源社</router-link>
        </span>
        <a
          href="#"
          id="openJoinQR"
          v-on:click="toggleQrDialog"
          class="header__nav-item header__nav-item_custom_button"
        >加入我们</a>
        <div :class="bottom_class"></div>
      </nav>
    </header>
  </div>
</template>

<script>
import { watchFile } from "fs";
export default {
  data() {
    return {
      bottom_class: "header__nav-item-tip_left"
    };
  },
  name: "AppNav",
  methods: {
    toggleQrDialog() {
      this.$store.dispatch("qrDialog/toggleQrDialog");
    },
    handleSwitch() {
      if (this.$route.fullPath === "/lab") {
        this.bottom_class = "header__nav-item-tip_left";
      } else if (this.$route.fullPath === "/about") {
        this.bottom_class = "header__nav-item-tip_right";
      }
    }
  },
  mounted() {
    if (this.$route.fullPath === "/lab") {
      this.bottom_class = "header__nav-item-tip_left";
    } else if (this.$route.fullPath === "/about") {
      this.bottom_class = "header__nav-item-tip_right";
    }
  }
};
</script>

<style scoped>
body {
  font-size: 12px;
  font-family: "Microsoft Yahei", "Hiragino Sans GB", Helvetica,
    "Helvetica Neue", 微软雅黑, Tahoma, Arial, sans-serif;
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
  background: url("../assets/logo.png") left center no-repeat;
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
  font-size: 16px;
  display: inline-block;
  width: 150px;
  text-align: center;
  line-height: 40px;
}

.header__nav-item-tip_left {
  width: 80px;
  height: 2px;
  background: #20a0ff;
  position: absolute;
  margin-left: 35px;
  bottom: -2px;
}

.header__nav-item-tip_right {
  width: 80px;
  height: 2px;
  background: #20a0ff;
  position: absolute;
  margin-left: 185px;
  bottom: -2px;
}

.header__nav-item_custom_button {
  color: #f6f6f6;
  background: #20a0ff;
  border: 1px solid #20a0ff;
  width: 150px;
  margin: 0 20px;
  border-radius: 5px;
  /* box-shadow: 1px 1px 16px 1px #20a0ff; */
}

.header__nav-item_custom_button:hover {
  color: #ffffff;
}

/*响应式*/
@media only screen and (max-width: 768px) {}
</style>

