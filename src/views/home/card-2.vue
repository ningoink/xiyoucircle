<template>
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
                        <span><router-link to="/lab">点击进入</router-link></span>
                    </div>
                </div>
                <div class="littleCardItemWrap">
                    <div class="littleCardItem">
                        <div class="litterCardItemImgWrap"><img src="@/assets/index/about.png" alt="关于开源社"></div>
                        <h2>关于前端圈</h2>
                        <p>西邮开源社、西邮实验室等等灵感，为什么你没有想到？推动西邮开源社发展的幕后团队到底是何方神圣？揭开面纱吧，真相掌握在你的手里。</p>
                        <span><router-link to="/about">点击进入</router-link></span>
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
</template>

<script>
export default {
    name: 'Card2'
}
</script>

<style scoped>
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
</style>
