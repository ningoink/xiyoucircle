<template>
    <div id="home">
        <github-header></github-header>
        <card-1></card-1>
        <card-2></card-2>
        <card-3></card-3>
        <app-footer></app-footer>
    </div>
</template>

<script>
// import AppNav from '@/components/app-nav'
import AppFooter from '@/components/app-footer'
import GithubHeader from '@/components/github-header'
// import QrDialog from '@/components/qr-dialog'
import Card1 from '@/views/home/card-1'
import Card2 from '@/views/home/card-2'
import Card3 from '@/views/home/card-3'

export default {
    name: 'Home',
    components: {
        // AppNav,
        AppFooter,
        GithubHeader,
        Card1,
        Card2,
        Card3
    }
}
</script>

<style scoped>
</style>
