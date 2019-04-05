<template>
    <div id="lab">
        <app-nav></app-nav>
        <header class="leader">
            <h1>西邮实验室</h1>
            <p>西安邮电大学已加盟实验室，一起打造西邮的前端实验室</p>
        </header>
        <lab-content></lab-content>
        <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/app-footer'
import AppNav from '@/components/app-nav'
import LabContent from '@/views/lab/lab-content'

export default {
  name: 'Lab',
  components: {
      AppFooter,
      AppNav,
      LabContent
  }
}
</script>


<style>
body {
  font-size: 12px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB', Helvetica,
    'Helvetica Neue', 微软雅黑, Tahoma, Arial, sans-serif;
}

.leader {
    text-align: center;
    max-width: 90%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 45px;
}

a {
  color: #14191e;
  text-decoration: none;
}

a:hover {
  color: #20a0ff;
}
.box {
  overflow: hidden;
}
.header {
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  height: 60px;
  /*background-color: #FAFAFA;*/
  color: #292e35;
}

.header__logo {
  float: left;
  height: 40px;
  margin: 10px 0px 0px 60px;
  padding: 0px 0px 0px 50px;
  /* background: url('../../assets/logo.png') left center no-repeat; */
  display: block;
  font-size: 18px;
  line-height: 40px;
}

.header__nav {
  float: right;
  margin: 10px 10px 0px 0px;
  position: relative;
}

.header__nav-item:hover {
  color: #20a0ff;
}

.header__nav-item {
  float: left;
  padding: 0 20px;
  font-size: 14px;
  display: inline-block;
  width: 80px;
  text-align: center;
  line-height: 40px;
}

.header__nav-item-tip {
  width: 80px;
  height: 2px;
  background: #20a0ff;
  position: absolute;
  left: 20px;
  bottom: -2px;
}

.header__nav-item_custom_button {
  color: #f6f6f6;
  background: #20a0ff;
  border: 1px solid #20a0ff;
  width: 60px;
  margin: 0 20px;
  border-radius: 5px;
  /* box-shadow: 1px 1px 16px 1px #20a0ff; */
}

.header__nav-item_custom_button:hover {
  color: #ffffff;
}

/* 内容区 */
.content {
  color: rgb(255, 255, 255);
  height: 800px;
  background-color: white;
  text-align: center;
  /*background: url() no-repeat center bottom;*/
  background-size: cover;
  position: relative;
}
/*.content__background-img{
    margin: 0 auto;
    width: 1500px;
}*/
.content__wrap {
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
  height: 100%;
  position: relative;
  /*overflow: hidden;*/
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
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
  height: auto;
  position: relative;
  overflow: hidden;
}
.content__main-content_row {
  max-width: 1200px;
  min-width: 800px;
  margin: 20px 0;
  height: auto;
  position: relative;
  overflow: hidden;
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
  float: right;
  width: 230px;
  height: 120px;
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
  /* color: #f6f6f6; */
  font-size: 15px;
  line-height: 50px;
  text-align: center;
}

/*响应式*/
@media all and (max-width: 1200px) {
  footer {
    transform: translateY(500px);
  }
}
@media all and (max-width: 1000px) {
  .header__logo {
    display: none;
  }
}
@media all and (max-width: 630px) {
  .content__subheading {
    display: none;
  }
  .content__heading,
  .content__underline {
    transform: translateX(-150px) translateY(20px);
  }
  .content__main-content_i_bottom div:nth-child(3) {
    display: none;
    /*float: left;
        padding: 0 10px;*/
  }
}
</style>
