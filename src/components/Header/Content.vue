<template>
<div class="article-list-warp">
  <div class="article-header">
      <h2>最新文章</h2>
  </div>
  <article class="article-list" v-for="(article,key) in nav" :key="key">
      <div class="list-content">
          <p class="title">{{ article.title }}</p>
          <span class="summary">{{ article.name }}</span>
          <div class=""></div>
      </div>
  </article>
</div>
</template>
<script>
export default {
  name:'articles',
  data() {
    return{
        nav:[
        {
          title:'标题1',
          name:`由于之前写这个nuxt结合wordpress的主题的时候，自己也算是有点懵逼的状态，写的有点乱
          ，数据管理也是不统一，报错信息也是做得不是很好，刚好花了一天时间重构了一下数据管理这一块的代码`
        },
        {
          title:'标题2',
          name:'内容222'
        },
        {
          title:'标题3'
        }
        ]
    }
  }
}
</script>
<style lang="scss">
.article-list-warp{
    height: 1500px;
    margin-top: 2%;
    box-shadow:5px 4px 18px 1px rgb(187, 187, 187);
    .article-header{
        border-radius: 2%;
        h2{
          padding: 20px;
          background-color: rgb(0, 140, 255);
          color: white;
        }
    }
    .article-list{
      padding: 25px;
      border-bottom: 1px solid;
      .list-content{
        .title{
          width:50px;
          padding: 10px;
          border-radius: 10%;
          background-color:rgba(0, 140, 255 , .2);
          box-shadow:5px 4px 18px 1px rgb(187, 187, 187);
        }
        .summary{

        }
      }
    }
}
</style>