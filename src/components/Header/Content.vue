<template>
<div class="article-list-warp">
  <div class="article-header">
      <h2>最新文章</h2>
  </div>
  <article class="article-list" v-for="(article,key) in nav" :key="key">
      <div class="list-content">
          <h3 class="title">{{ article.title }}</h3>
          <span class="summary">{{ article.name || '无内容'}}</span>
          <div class="opeartion">
              <router-link :to="article.to || '#'">{{article.a || '阅读详情'}}</router-link>
          </div>
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
          title:'VUE',
          name:`由于之前写这个nuxt结合wordpress的主题的时候，自己也算是有点懵逼的状态，写的有点乱
          ，数据管理也是不统一，报错信息也是做得不是很好，刚好花了一天时间重构了一下数据管理这一块的代码`,
          to:'/VUE'
        },
        {
          title:'Javascript',
          name:'内容222',
          to:'/Javascript'
        },
        {
          title:'HTML',
          to:'HTML'
        },
        {
          title:'CSS',
          to:'CSS'
        }
        ]
    }
  }
}
</script>
<style lang="scss">
.article-list-warp{
    position: relative;
    margin-top: 2%;
    box-shadow:5px 4px 18px 1px rgb(187, 187, 187);
    .article-header{
        h2{
          padding: 20px;
          background-color: rgb(0, 140, 255);
          color: white;
        }
    }
    .article-list{
      padding: 25px;
      .list-content{
        .title{
          margin-bottom: 10px;
          border-radius: 5px;
          padding: 10px;
          background-color:rgba(0, 140, 255 , .2);
          color: #000;
          box-shadow:5px 4px 18px 1px rgb(187, 187, 187);
        }
        .summary{
        }
        .opeartion{
          padding-left: 680px;
          a{ 
            border-radius: 5px;
            padding: 5px;
            font-size: 10px;
            background-color:rgb(0, 140, 255);
          }
        }
      }
    }
    .article-list:hover:after{
      width: 800px;
    }
    .article-list:after{
      content: "";
      position:absolute;
      left: 0px;
      height: 2px;
      margin-top: 20px;
      background-color: rgb(0, 140, 255);
      transition: 2s .5s 
    }
}
</style>