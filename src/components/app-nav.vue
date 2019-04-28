<template>
  <nav class="nav" :class="{ 'white-text': isWhite }">
    <github-header></github-header>
    <router-link
      to="/"
      class="nav-logo"
    >西邮开源社</router-link>
    <nav class="nav-dropdown">
      <router-link
        to="/lab"
        class="nav-item"
        :class="{ 'nav-item-active': isNavActive('/lab') }"
      >西邮实验室</router-link>
      <router-link
        to="/about"
        class="nav-item"
        :class="{ 'nav-item-active': isNavActive('/about') }"
      >关于开源社</router-link>
      <a
        @click="toggleQrDialog"
        class="nav-item nav-item-button"
      >加入我们</a>
    </nav>
  </nav>
</template>

<script>
  import GithubHeader from '@/components/github-header'
  export default {
    name: "AppNav",
    components: {
      GithubHeader
    },
    props: {
      isWhite: { required: false }
    },
    methods: {
      toggleQrDialog() {
        this.$store.dispatch("qrDialog/toggleQrDialog");
      },
      isNavActive(router) {
        return this.$route.fullPath === router
      }
    }
  }
</script>

<style scoped>
.nav {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  height: 7vh;
  /* color: #292e35; */
}

.nav.white-text a {
  color: white;
}

.nav-logo {
  float: left;
  height: 40px;
  margin: 10px 0px 0px 60px;
  padding: 0px 0px 0px 50px;
  background: url("../assets/logo.png") left center no-repeat;
  display: block;
  font-size: 18px;
  line-height: 40px;
}

.nav-dropdown {
  float: right;
  margin: 10px 72px 0px 0px;
}

.nav-item {
  padding: 0 20px;
  font-size: 16px;
  display: inline-block;
  width: 150px;
  text-align: center;
  line-height: 40px;
}

.nav-item:hover, .nav-item-active {
  color: #20a0ff;
}

.nav-item-active::after {
  content: '';
  display: block;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80px;
  height: 2px;
  border-bottom: 1px solid #20a0ff;
}

.nav-item-button {
  color: white;
  background: #20a0ff;
  border: 1px solid #20a0ff;
  width: 150px;
  margin: 0 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 16px 1px #20a0ff;
}

@media only screen and (max-width: 768px) {}
</style>

