<template>
  <nav class="nav" :class="{ 'white-text': isWhite }">
    <github-header></github-header>
    <nav class="nav-dropdown" :class="{ 'dropdown-active': dropdownOpened }">
      <div class="dropdown-toogle dropdown-active">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556436118054&di=fc314e7249f52d001c1faedefeb559c7&imgtype=0&src=http%3A%2F%2Fico.58pic.com%2Ficonset02%2F5%2Fgif%2F65775.gif"
          @click="toggleNavDropdown"
        />
      </div>
      <router-link
        to="/"
        class="nav-logo"
      >
        <img src="../assets/logo.png" alt="西邮小小鸟">
        <span>西邮开源社</span>
      </router-link>
      <nav class="nav-list">
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
    computed: {
      dropdownOpened () {
        console.log(this.$store.state.appNav.opened)
        return this.$store.state.appNav.opened
      }
    },
    methods: {
      toggleQrDialog() {
        this.$store.dispatch("qrDialog/toggleQrDialog");
      },
      toggleNavDropdown() {
        this.$store.dispatch("appNav/toggleNavDropdown")
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
  z-index: 999;
  /* color: #292e35; */
}

.nav.white-text a {
  color: white;
}

@media all and (min-width: 880px) {
  .nav-dropdown {
    width: 100%;
    height: 7vh;
  }

  .dropdown-toogle {
    display: none;
  }

  .nav-logo {
    margin: 10px 0px 0px 60px;
    display: inline-block;
    height: 42px;
    line-height: 42px;
  }

  .nav-logo img {
    display: inline-block;
    width: 42px;
    height: 42px;
  }

  .nav-logo span {
    display: inline-block;
    margin-left: 7px;
    position: absolute;
    font-size: 20px;
  }

  .nav-list {
    float: right;
    margin: 10px 72px 0px 0px;
  }

  .nav-item {
    font-size: 16px;
    display: inline-block;
    width: 120px;
    text-align: center;
    line-height: 42px;
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
}

@media all and (max-width: 880px) {
  /* 没有展开导航时 */
  .nav-dropdown {
    
  }

  .nav-dropdown .dropdown-toogle {
    /* display: none; */
  }

  .nav-dropdown.dropdown-active .dropdown-toogle img {
    /* display: none; */
  }

  .nav-dropdown.dropdown-active .nav-logo {
    display: none;
  }

  .nav-dropdown.dropdown-active .nav-logo img {
    display: none;
  }

  .nav-dropdown.dropdown-active .nav-logo span {
    display: none;
  }

  .nav-dropdown.dropdown-active .nav-list {
    display: none;
  }

  .nav-dropdown.dropdown-active .nav-item {
    display: none;
  }

  .nav-dropdown.dropdown-active .nav-item-button {
    display: none;
  }

  /* 展开导航时 */
  .nav-dropdown.dropdown-active {
    color: #000;
    position: fixed;
    height: 300px;
    width: 100vw;
    background: white;
  }

  .nav-dropdown.dropdown-active .dropdown-toogle {
    margin: 10px auto 10px;
    width: 100vw;
    text-align: center;
  }

  .nav-dropdown.dropdown-active .dropdown-toogle img {
    cursor: pointer;
    height: 40px;
    width: 40px;
  }

  .nav-dropdown.dropdown-active .nav-logo {
    margin: auto;
    display: block;
    font-size: 18px;
    line-height: 42px;
    position: relative;
  }

  .nav-dropdown.dropdown-active .nav-logo img {
    display: none;
    /* margin: 20px auto 20px;
    display: block;
    width: 42px;
    height: 42px; */
  }

  .nav-dropdown.dropdown-active .nav-logo span {
    margin: auto;
    text-align: center;
    display: block;
    font-size: 16px;
    color: #000;
  }

  .nav-dropdown.dropdown-active .nav-list {
    width: 70vw;
    margin: auto;
  }

  .nav-dropdown.dropdown-active .nav-item {
    color: #000;
    margin-top: 10px;
    font-size: 16px;
    display: block;
    width: 100%;
    text-align: center;
    line-height: 42px;
  }

  .nav-dropdown.dropdown-active .nav-item-button {
    color: white;
    background: #20a0ff;
    border: 1px solid #20a0ff;
    width: 150px;
    margin: 10px auto 0;
    border-radius: 5px;
    box-shadow: 1px 1px 16px 1px #20a0ff;
  }
}
</style>

