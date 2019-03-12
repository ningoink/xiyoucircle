<template>
    <section id="card1" class="card">
        <div class="card1Wrap">
            <p>
                <img src="@/assets/icon/earlyBirds.png" class="logo" alt="logo">
            </p>
            <h1 id="xiyoucircle">
                <a href="#" class="anchor">
                    <span>西邮开源社<small>0.0.1</small></span>
                </a>
            </h1>
            <blockquote>
            <p>咱西邮人自己的开源技术圈。</p>
            </blockquote>
            <ul>
                <li>开源技术意味着什么？</li>
                <li>我们都要掌握哪些技能？</li>
                <li>有哪些实验室我可以加入？</li>
                <li>一切尽在西邮开源社！</li>
            </ul>
            <p>
                <a href="https://github.com/ningowood/xiyoucircle/" target="_blank">Github</a>
                <a href="#" id="openJoinQR" v-on:click="openJoinQR">加入我们</a>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Card1',
    data: function () {
        return {
            qrDialog: false
        }
    },
    methods: {
        openJoinQR: function () {
            // this.qrDialog = true
        }
    }
}
</script>


<style scoped>
#card1 {
    height: 80vh;
    background-image: url('../../assets/index/indexBackground.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

#card1 .card1Wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: -20px 16px 0;
    text-align: center;
    z-index: 1;
}

#card1 .logo {
    height: 10rem;
    width: 10rem;
}

#card1 h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 300;
    margin: .625rem 0 2.5rem;
    position: relative;
    text-align: center;
}

#card1 h1 a {
    display: block;
}

#card1 a, #card1 a:hover {
    text-decoration: none;
}

#card1 .anchor span {
    color: #fff;
}

#card1 h1 small {
    bottom: -7px;
    bottom: -.4375rem;
    font-size: 1rem;
    position: absolute;
}

#card1 blockquote {
    font-size: 1.5rem;
    text-align: center;
}

#card1 p {
    line-height: 1.5rem;
}

#card1 ul {
    line-height: 1.8;
    list-style-type: none;
    margin: 1em auto;
    max-width: 500px;
    padding: 0;
}

#card1 .card1Wrap>p:last-child a:last-child {
    background-color: #42b983;
    color: #fff;
    margin-right: 0;
}

#card1 .card1Wrap>p:last-child a {
    border-color: #42b983;
    border: 2px solid #42b983;
    border-radius: 2rem;
    box-sizing: border-box;
    color: #42b983;
    background-color: #fff;
    display: inline-block;
    font-size: 1rem;
    letter-spacing: .1rem;
    margin-right: 1rem;
    padding: .75em 2rem;
    text-decoration: none;
    transition: all .15s ease;
}
</style>
