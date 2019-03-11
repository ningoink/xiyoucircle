<template>
    <div id="home">
        <a href="https://github.com/ningowood/xiyoucircle/" target="_blank" class="github-corner" aria-label="View source on Github">
            <svg width="72" height="72" viewBox="0 0 250 250" style="fill:#fff; color:#fff; position: absolute; top: 0px; border: 0; right: 0;" aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" fill="rgba(0,0,0,0.41)"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
            </svg>
        </a>
        <!-- 第一页 -->
        <section id="card1" class="card">
            <div class="card1Wrap">
                <p>
                    <img src="@/assets/icon/earlyBirds.png" class="logo" alt="logo">
                </p>
                <h1 id="xupt-fe">
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
                  <a href="#" id="openJoinQR">加入我们</a>
              </p>
            </div>
        </section>
        <!-- 加入我们，弹出框 -->
        <div id="dialog" style="display: none">
            <div id="qqGroupQR">
                <a href="#" id="closeJoinQR">长按图片扫码，点我返回</a>
                <img src="@/assets/index/qqGroupQR.jpg" alt="QQ群">
            </div>
        </div>
        <!-- 第二页 -->
        <section id="card2" class="card">
            <div class="card2Wrap">
                <div class="cardHeaderWrap">
                    <div class="cardHeader">多项服务，依次上线</div>
                    <div class="cardHorizontalLine"><span>—</span></div>
                    <div class="cardSubheader">持续关注，尽请期待</div>
                </div>
                <div id="card2Page1" class="littleCardPageWrap">
                    <div class="littleCardItemWrap">
                        <div class="littleCardItem">
                            <div class="litterCardItemImgWrap"><img src="@/assets/index/lab.png" alt="西邮实验室"></div>
                            <h2>西邮实验室</h2>
                            <p>在这里，西邮的每个实验室都有了落脚之地。或在东区，或在西区；或在计算机学院，或在通信工程学院等等。快来吧，无尽的学习资源在等着你。</p>
                            <span><a href="./lab.html" target="_self">点击进入</a></span>
                        </div>
                    </div>
                    <div class="littleCardItemWrap">
                        <div class="littleCardItem">
                            <div class="litterCardItemImgWrap"><img src="@/assets/index/about.png" alt="关于开源社"></div>
                            <h2>关于前端圈</h2>
                            <p>西邮开源社、西邮实验室等等灵感，为什么你没有想到？推动西邮开源社发展的幕后团队到底是何方神圣？揭开面纱吧，真相掌握在你的手里。</p>
                            <span><a href="./about.html" target="_self">点击进入</a></span>
                        </div>
                    </div>
                    <div class="littleCardItemWrap">
                    </div>
                </div>
                <!-- <div id="card2Page2" class="littleCardPageWrap hide">
                    <div class="littleCardItemWrap">
                    </div>
                    <div class="littleCardItemWrap">
                    </div>
                    <div class="littleCardItemWrap">
                    </div>
                </div> -->
                <!-- <div class="littleCardPagination">
                    <button id="card2Btn1" class="buttonActive" ></button>
                    <button id="card2Btn2"></button>
                </div> -->
            </div>
        </section>
        <!-- 第三页 -->
        <section id="card3" class="card">
            <div class="card3Wrap">
                <div class="cardHeaderWrap">
                    <div class="cardHeader">期待你们的加盟</div>
                    <div class="cardHorizontalLine"><span>—</span></div>
                    <div class="cardSubheader">助力西邮各大西邮实验室展现自我</div>
                </div>
                <div class="labWrap">
                    <div class="labItem"><img src="@/assets/lab/creatshare.png" alt="CreatShare互联网实验室"/></div>
                    <div class="labItem"><img src="@/assets/lab/epi-logo.jpg" alt="EPI电子实验室"/></div>
                    <div class="labItem"><img src="@/assets/lab/22.jpg" alt="2+2实验室"/></div>
                    <div class="labItem"><img src="@/assets/icon/hands.png" alt="申请加盟"/></div>
                    <div class="labItem"><img src="@/assets/icon/more.png" alt="更多实验室"/></div>
                </div>
                <div class="labApplyFor">
                    <a href="https://github.com/ningowood/xiyoucircle/issues/10" target="_blank">代表你的实验室申请加盟 ></a>
                </div>
            </div>
        </section>
        <footer class="footer">
            Copyright © 2017-2018 <a href="https://github.com/ningowood/xiyoucircle/" target="_blank">西邮开源社</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    created () {
        // let openJoinQRButton = document.getElementById('openJoinQR')
        // openJoinQRButton.onclick = this.openJoinQR
        // let closeJoinQR = document.getElementById('closeJoinQR')
        // closeJoinQRButton.onclick = this.closeJoinQR
    },
    methods: {
        openJoinQR: function () {
            // // id="dialog" 的 div 的 disply 设置为 block
            // var dialogDiv = document.getElementById("dialog")
            // dialogDiv.style.display = "block"
            // // id="root" 的 div 添加名为 filter 的 class
            // var rootDiv = document.getElementById("root")
            // rootDiv.setAttribute("class", "filter")
        },
        closeJoinQR: function () {
            // // id="dialog" 的 div 的 disply 设置为 none
            // var dialogDiv = document.getElementById("dialog")
            // dialogDiv.style.display = "none"
            // // id="root" 的 div 删除名为 filter 的 class
            // var rootDiv = document.getElementById("root")
            // rootDiv.removeAttribute("class")
        }
    }
}
</script>

<style scoped>
/* index.css */

.card {
    min-height: 500px;
    max-height: 800px;
    overflow: hidden;
}

.cardHeaderWrap {
    height: 20%;
    min-height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cardHeader {
    color: #000;
    line-height: 1.33rem;
    font-size: 1.6rem;
}

.cardHorizontalLine {
    height: 2rem;
}

.cardHorizontalLine span {
    color: #70e1f5;
    font-size: 2rem;
    font-weight: normal;
}

.cardSubheader {
    font-size: 1rem;
    line-height: 1rem;
    color: #7A7A7A;
}

.footer {
    position: relative;
    bottom: 0;
    line-height: 10vh;
    text-align: center;
    height: 10vh;
    width: 100vw;
    background-color: #242424;
}

.footer a {
    color: #fff;
}

/* indexCard1.css */

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

#dialog {
    /* display: none; */
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
    height: 20rem;
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

.filter {
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    -webkit-animation: row_ani 2s;
    -moz-animation: row_ani 2s;
    -ms-animation: row_ani 2s;
    animation: row_ani 2s;
    background-color: rgba(24, 24, 24, 0.42);
}

/* indexCard2.css */

#card2 {
    background: #F6F6F6;
    max-height: 2400px;
}

.card2Wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 1rem 0;
    text-align: center;
}

.littleCardPageWrap {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.littleCardPageWrap.hide {
    display: none;
}

.littleCardItemWrap {
    flex: 1;
    margin-bottom: 30px;
}

.littleCardItem {
    width: 18rem;
    min-height: 320px;
    background: white;
    display: inline-block;
    box-shadow: 3px 3px 30px 5px #242424;
}

.litterCardItemImgWrap {
    width: 18rem;
    height: 9rem;
}

.litterCardItemImgWrap img {
    width: 18rem;
    height: 9rem;
}

.littleCardItem h2 {
    margin: 1rem 0 1rem 0;
    font-size: 1.2rem;
    font-weight: bold;
}

.littleCardItem p {
    margin-top: 1rem;
    padding: 0 1rem 1rem 1rem;
    font-size: .9rem;
    line-height: 1rem;
    height: 5rem;
    overflow-x: hidden;
}

.littleCardItem span {
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 2.25rem;
    font-size: .8rem;
    color: #9da0a7;
    border: 1px solid #9da0a7;
    padding: 6px 12px;
}

.littleCardItem span a {
    color: #31a5b6;
}

.littleCardPagination {
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.littleCardPagination button {
    margin: 0 5px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    border: 1px solid #bbbbbb;
    background-color: #bbbbbb;
    cursor: pointer;
    outline: none;
}

.littleCardPagination .buttonActive {
    border: 1px solid #00c264;
    background-color: #00c264;
}

/* 小于 888px 时候，card2 的卡片变成一列的 */

@media all and (max-width: 888px) {
    .littleCardPageWrap {
        display: block;
    }

    .littleCardPageWrap.hide {
        display: block;
    }

    /* 隐藏分页切换卡按钮 */
    .littleCardPagination {
        display: none;
    }
}

/* indexCard3.css */

#card3 {
    background: #fff;
    min-height: 200px;
    max-height: 1600px;
}

.card3Wrap {
    margin: 0 15px 0;
    text-align: center;
}

.labWrap {
    margin: 0 auto;
    max-width: 1200px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.labItem {
    margin: 15px 10px 15px 10px;
    flex: 1;
    height: 60px;
    min-width: 200px;
    max-width: 200px;
    display: flex;
    align-items: center;
}

.labItem img {
    max-height: 60px;
    margin: 0 auto;
    max-width: 188px;
}

.labApplyFor {
    margin: 2rem;
    padding-top: .4rem;
}

.labApplyFor a {
    color: #36a2ff;
}
</style>
