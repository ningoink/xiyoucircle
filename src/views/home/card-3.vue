<template>
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
</template>

<script>
export default {
    name: 'Card3'
}
</script>

<style scoped>

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

