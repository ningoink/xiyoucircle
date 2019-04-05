<template>
    <div id="about">
        <app-nav></app-nav>
        <!-- <github-header></github-header> -->
        <header class="leader">
            <h1>关于开源社</h1>
            <p>西邮开源社从灵感到上线，都发生了什么？</p>
        </header>
        <card-timeline></card-timeline>
        <card-article></card-article>
        <card-developer></card-developer>
        <app-footer></app-footer>
    </div>
</template>

<script>
// import GithubHeader from '@/components/github-header'
import AppNav from '@/components/app-nav'
import CardTimeline from './card-timeline'
import CardArticle from './card-article'
import CardDeveloper from './card-developer'
import AppFooter from '@/components/app-footer'

export default {
    name: 'About',
    components: {
        AppNav,
        // GithubHeader,
        CardTimeline,
        CardArticle,
        CardDeveloper,
        AppFooter
    }
}
</script>

<style scoped>
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
