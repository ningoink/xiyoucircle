<template>
    <!-- 加入我们，扫码入 QQ 群，弹出框 -->
    <div id="dialog">
        <div id="qqGroupQR">
            <img src="@/assets/index/qqGroupQR.jpg" alt="QQ群">
            <a href="#" id="closeJoinQR" v-on:click="toggleQrDialog">长按图片扫码，点我返回</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QrDialog',
    methods: {
        toggleQrDialog () {
            this.$store.dispatch('qrDialog/toggleQrDialog')
        }
    }
}
</script>


<style scoped>
#dialog {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1111;
}

#qqGroupQR {
    position: fixed;
    top: 1.5rem;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0px auto;
    height: 450px;
    width: 340px;
    text-align: center;
}

#dialog img {
    display: block;
    margin: 30px auto;
}

#dialog img {
    width: 100%; /* 36rem */
    height: 32.5rem; /* 50rem */
}

#closeJoinQR {
    display: inline-block;
    border: 2px solid orange;
    border-radius: 2rem;
    border-color: orange;
    box-sizing: border-box;
    letter-spacing: .1rem;
    transition: all .15s ease;
    text-decoration: none;
    color: #fff;
    background-color: orange;
    height: 3rem;
    width: 20rem;
    text-align: center;
    font-size: 1.2rem;
    padding-top: .6rem;
}
</style>

