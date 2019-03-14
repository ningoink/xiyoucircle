<template>
    <div id="about">
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
import CardTimeline from './card-timeline'
import CardArticle from './card-article'
import CardDeveloper from './card-developer'
import AppFooter from '@/components/app-footer'

export default {
    name: 'About',
    components: {
        CardTimeline,
        CardArticle,
        CardDeveloper,
        AppFooter
    }
}
</script>

<style scoped>
.leader {
    text-align: center;
    max-width: 90%;
    margin: auto;
    margin-bottom: 45px;
}
</style>
