<template>
  <section id="lab-content" class="content">
    <!--<img src="./img/background-img2.png" alt="背景图片" class="content__background-img">-->
    <div>
      <!--主内容-->
      <div v-for="detail in LabDetail" v-bind:key="detail.id">
        <div>
          <div class="content__main-content_i">
            <div class="content__main-content_i_top">
              <img src="../../assets/lab/creatshare-logo.jpg" alt class="content__logo">
              <div class="content__main-content_i_top_content">
                <p>{{ detail.name }}</p>
                <p>实验室方向: {{ detail.direction }}</p>
              </div>
            </div>
            <div class="content__main-content_i_bottom">
              <div>
                <i class="fa fa-tags"></i>
                <span>{{ detail.from }}</span>
              </div>
              <div>
                <span class="date-span">{{ detail.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LabSearch from "@/views/lab/lab-search";

import { LAB_DETAIL } from "@/config/lab-detail";

export default {
  name: "LabContent",
  components: {
    LabSearch
  },
  data: function() {
    return {
      LabDetail: LAB_DETAIL,
      page: 1
    };
  }
};
</script>


<style scoped>
body {
  font-size: 12px;
  font-family: "Microsoft Yahei", "Hiragino Sans GB", Helvetica,
    "Helvetica Neue", 微软雅黑, Tahoma, Arial, sans-serif;
}

a {
  color: #14191e;
  text-decoration: none;
}

a:hover {
  color: #20a0ff;
}
/* 内容区 */
.content {
  padding-top: 45px;
  color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  text-align: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid rgba(191, 191, 191, 0.4);
  border-bottom: 1px solid rgba(191, 191, 191, 0.4);
}

.content__wrap {
  flex-direction: row;
  flex-wrap: wrap;
}

.content__heading {
  margin-top: 40px;
  line-height: 20px;
  font-size: 24px;
  color: #07111b;
}
.content__underline {
  color: #20a0ff;
  font-size: 20px;
}
.content__subheading {
  font-size: 16px;
  line-height: 10px;
  color: #7a7a7a;
}
/* 主内容区 */
.content__main-content {
  order: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row || wrap;
}

.content__main-content_i {
  width: 350px;
  height: 150px;
  margin: 10px 50px 10px 10px;
  float: left;
  color: #07111b;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px 1px #aaa;
}
.makePerfect {
  margin: 10px 0 10px 10px;
}
.content__main-content_i_top {
  height: 120px;
  width: 350px;
}
.content__logo {
  width: 80px;
  padding: 30px 10px 10px 10px;
}
.content__main-content_i_top_content {
}
.content__main-content_i_top_content p:nth-child(1) {
  font-size: 18px;
  text-align: left;
  margin-top: 30px;
}
.content__main-content_i_top_content p:nth-child(2) {
  font-size: 12px;
  margin: 26px 0 0 0;
  padding: 0 16px 0 0;
  text-align: left;
  line-height: 16px;
}
.content__main-content_i_bottom {
  font-size: 10px;
  width: 350px;
  height: 30px;
  padding: 8px 0 0 0;
}
.content__main-content_i_bottom div:nth-child(1) {
  display: inline-block;
  float: left;
  padding: 0 10px 0 16px;
}
.content__main-content_i_bottom div:nth-child(2) {
  display: inline-block;
  float: left;
  padding: 0 10px;
}
.content__main-content_i_bottom_icon {
  display: inline-block;
  float: left;
  padding-left: 60px;
}
.content__main-content_i_bottom_icon i:nth-child(1) {
  display: inline-block;
  padding-right: 16px;
}
.content__main-content_i_bottom_icon i:nth-child(2) {
  display: inline-block;
  padding-right: 16px;
}
/* 底部 */
footer {
  width: 100%;
  height: 50px;
  background-color: #07111b;
  color: #f6f6f6;
  line-height: 50px;
  text-align: center;
}

/*响应式*/
</style>
