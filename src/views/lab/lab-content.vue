<template>
   <section id="lab-content" class="content">
        
        <div class="content__wrap" v-for="detail in ">
            <!-- 标题区 -->
            <content-subheading></content-subheading>
            <!--搜索框-->
            <!--主内容-->
            <div>
              <p>
                {{ }}
              </p>
            </div>
            <!--使用vutify分页-->
        <div class="pagination">
            <v-pagination
            v-model="page"
            :length="6"
            ></v-pagination>
        </div>
      </div>
    </section>
    
</template>

<script>
import ContentSubheading from '@/components/content-subheading'
import LabSearch from '@/views/lab/lab-search'

import { LAB_DETAIL } from '@/config/lab-detail'

export default {
    name: 'LabContent',
    components: {
        ContentSubheading,
        LabSearch
    },
    data: function() {
        return{
            LabDetail: LAB_DETAIL,
            page: 1
        }
}

}
</script>


<style scoped>
body {
  font-size: 12px;
  font-family: 'Microsoft Yahei', 'Hiragino Sans GB', Helvetica,
    'Helvetica Neue', 微软雅黑, Tahoma, Arial, sans-serif;
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
  

}
.content__wrap {

    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
  
}


/* 主内容区 */
.content__logo {
  width: 80px;
  padding: 30px 10px 10px 10px;
}

/*分页*/
.pagination {

}

/*响应式*/


</style>
