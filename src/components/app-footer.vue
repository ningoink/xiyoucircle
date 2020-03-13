<template>
  <footer class="footer">
    Copyright © 2017-2019 <a href="https://github.com/ningowood/xiyoucircle/" target="_blank">西邮开源社</a>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
	position: absolute;
	bottom: 0;
	text-align: center;
	line-height: 7vh;
	height: 7vh;
	width: 100vw;
	background-color: #242424;
	color: grey;
}

.footer a {
  color: #fff;
}
</style>
