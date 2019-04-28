<template>
  <header class="leader">
    <h1 class="heading">{{ heading }}</h1>
    <h2 class="subheading">{{ subheading }}</h2>
  </header>
</template>

<script>
  export default {
    props: {
      heading: { required: true},
      subheading: { required: true}
    },
    name: "AppSubtitle"
  }
</script>

<style scoped>
.leader {
  text-align: center;
  margin: 75px auto 25px;
}

.heading {
  font-weight: bold;
  color: #07111b;
  margin-bottom: 10px;
}

.heading::after {
  content: '';
  display: block;
  position: relative;
  padding-top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 120px;
  border-bottom: 2px solid #20a0ff;
}

.subheading {
  font-size: 1em;
  line-height: 1em;
  color: #7a7a7a;
}
</style>
