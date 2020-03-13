<template>
    <div id="about">
        <app-nav></app-nav>
        <app-subtitle
          heading="关于开源社"
          subheading="西邮开源社从灵感到上线，都发生了什么？"
        ></app-subtitle>
        <card-timeline></card-timeline>
        <card-article></card-article>
        <card-developer></card-developer>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppNav from '@/components/app-nav'
import AppSubtitle from '@/components/app-subtitle'
import CardTimeline from './card-timeline'
import CardArticle from './card-article'
import CardDeveloper from './card-developer'
import AppFooter from '@/components/app-footer'

export default {
    name: 'About',
    components: {
        AppNav,
        AppSubtitle,
        CardTimeline,
        CardArticle,
        CardDeveloper,
        AppFooter
    }
}
</script>

<style scoped>
#about {
  width: 100%;
  position: absolute;
}
</style>
