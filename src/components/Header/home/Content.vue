<template>
<div class="article-list-warp">
  <div class="article-header">
      <h4>最新文章{{user.account}}</h4>
  </div>
  <article class="article-list" v-for="(article,key) in nav" :key="key">
      <div class="list-content">
          <h3 class="title">{{ article.subject }}</h3>
          <span class="summary">{{ article.description}}</span>
          <div class="opeartion">
            <router-link :to="article.to || '#'">{{article.a || '阅读详情'}}</router-link>
          </div>
      </div>
  </article>
  <div v-if="nav.length===0">暂无数据</div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name:'article',
  data() {
    return{
      user: {
        
      },
        nav:[
          
        ]
    }
  },
  created() {
    axios.get('http://dev.slmblog.com:3000/api/v1/article/examine/1/10', {
      account: 'shilaimu9',
      password: 'shilaimu9'
    }).then(({data} ) => {
      console.log(data.result.list);
      this.nav = data.result.list;
    })
  }
  // beforeCreate() {
  //   axios.post('http://dev.slmblog.com:3000/api/v1/user/signin,', {
  //     account: 'shilaimu9',
  //     password: 'shilaimu9'
  //   }).then(({ data, headers }) => {
  //     const { token } = headers; // const toten = headers.token;
  //     console.log('token', token);
  //     console.log('登录信息', data.result);
  //     this.user = data.result;
  //     console.log(this.user);
  //   })
  // }
}
</script>
<style lang="scss">
.article-list-warp{
    position: relative;
    border-radius: 10px;
    margin-top: 3%;
    background-color: #fff;
    .article-header{
        h4{
          padding: 10px;
          color: rgb(104, 104, 104);
        }
    }
    .article-list{
      padding: 15px;
      .list-content{
        .title{
          margin-bottom: 10px;
          border-radius: 5px;
          padding: 10px;
          background-color:rgba(35, 91, 138, 0.2);
          color: rgb(255, 255, 255);
        }
        .opeartion{
          position: relative;
          margin: 20px;
          a{
            position: absolute;
            right: 0;
            bottom: 0;
            border-radius: 5px;
            padding: 5px;
            font-size: 10px;
            background-color:rgba(17, 52, 82, 0.2);
          }
        }
        
      }
    }
    .article-list:hover:after{
      width: 100%;
    }
    .article-list:after{
      content: "";
      position:absolute;
      left: 0px;
      height: 2px;
      width: 0;
      margin-top: 20px;
      background-color: rgb(0, 140, 255);
      transition: .5s; 
    }
}
</style>