<template>
    <div id="lab">
        <app-nav></app-nav>
        <app-subtitle
          heading="西邮实验室"
          subheading="西安邮电大学已加盟实验室，一起打造西邮的前端实验室"
        ></app-subtitle>
        <lab-content></lab-content>
        <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from '@/components/app-nav'
import AppSubtitle from '@/components/app-subtitle'
import LabContent from '@/views/lab/lab-content'
import AppFooter from '@/components/app-footer'

export default {
  name: 'Lab',
  components: {
      AppNav,
      AppSubtitle,
      AppFooter,
      LabContent
  }
}
</script>

<style scoped>
#lab {
  min-height: 100%;
  position: absolute;;
}
</style>
