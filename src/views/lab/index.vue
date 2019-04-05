<template>
    <div id="lab">
        <app-nav></app-nav>
        <header class="leader">
            <h1>西邮实验室</h1>
            <p>西安邮电大学已加盟实验室，一起打造西邮的前端实验室</p>
        </header>
        <lab-content></lab-content>
        <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/app-footer'
import AppNav from '@/components/app-nav'
import LabContent from '@/views/lab/lab-content'

export default {
  name: 'Lab',
  components: {
      AppFooter,
      AppNav,
      LabContent
  }
}
</script>


<style>
body {
  font-size: 14px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB', Helvetica,
    'Helvetica Neue', 微软雅黑, Tahoma, Arial, sans-serif;
}

.leader {
    text-align: center;
    max-width: 90%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 45px;
}
</style>
