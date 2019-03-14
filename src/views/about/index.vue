<template>
    <div id="lab">
        <header>
            <h1>关于开源社</h1>
            <p>
                西邮开源社从灵感到上线,到底都发生了什么?
            </p>
        </header>
        <card-timeline></card-timeline>
        <card-article></card-article>
        <card-developer></card-developer>
    </div>
</template>

<script>
import CardTimeline from './card-timeline'
import CardArticle from './card-article'
import CardDeveloper from './card-developer'

export default {
    name: 'About',
    components: {
        CardTimeline,
        CardArticle,
        CardDeveloper
    }
}
</script>

<style scoped>
</style>
