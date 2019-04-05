<template>
  <section id="lab-content" class="content">
    <!--<img src="./img/background-img2.png" alt="背景图片" class="content__background-img">-->
    <div class="content_main">
      <!--主内容-->
      <div v-for="detail in LabDetail" v-bind:key="detail.id">
        <div>
          <div class="content__main-content_i">
            <div class="content__main-content_i_top">
              <img src="../../assets/lab/creatshare-logo.jpg" alt class="content__logo">
              <div class="content__main-content_i_top_content">
                <p class="content__main-content_i_top_content_first">{{ detail.name }}</p>
                <p>实验室方向: {{ detail.direction }}</p>
              </div>
            </div>
            <div class="content__main-content_i_bottom">
              <div class="content__main-content_i_bottom_left">
                <i class="fa fa-tags"></i>
                <span>{{ detail.from }}</span>
              </div>
              <div class="content__main-content_i_bottom_right">
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
// import LabSearch from "@/views/lab/lab-search";

import { LAB_DETAIL } from "@/config/lab-detail";

export default {
  name: "LabContent",
  components: {
    // LabSearch
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
/* 内容区 */
.content {
  padding-top: 45px;
  padding-bottom: 45px;
  color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  text-align: center;
  background-size: cover;
  border-top: 1px solid rgba(191, 191, 191, 0.4);
  border-bottom: 1px solid rgba(191, 191, 191, 0.4);
  overflow: hidden;
}

.content_main {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: black
}

.content__main-content_i {
  width: 370px;
  height: 160px;
  margin: 20px;
  background: white;
  border-left: 7px solid palevioletred;
}

.content__main-content_i_top {
  height: 70%;
  overflow: hidden;
}

.content__logo {
  margin-top: 25px;
  margin-left: 20px;
  width: 65px;
  float: left;
}

.content__main-content_i_top_content {
  margin-top: 25px;
  margin-right: 20px;
  font-size: 13px;
}

.content__main-content_i_top_content_first {
  font-size: 18px;
}

.content__main-content_i_bottom {
  height: 30%;
  display: flex;
  justify-content: center;
  line-height: 50px;
}

.content__main-content_i_bottom_left {
  margin-right: 15px;
}

.content__main-content_i_bottom_right {
  margin-left: 15px;
  color: blueviolet
}
</style>
