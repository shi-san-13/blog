<template>
  <header class="navigation">
    <div class="logo">
      <i>LOGO</i>
    </div>
    <div class="nav-wrapper">
      <ul class="nav-row">
        <li class="nav-item" v-for="(parent, key) in nav" :key="key"> 
          <router-link :to="parent.to || '#'" >
            <i :class="[parent.icon]"></i> {{ parent.name }} 
          </router-link>
          <div class="wrapper" v-if="parent.childs">
            <ul class="view">
              <li class="item" v-for="(child, nav) in parent.childs" :key="nav">
                <router-link :to="child.to || '#'">
                  <i :class="[child.icon]"></i> {{child.name}}
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="search">
        <input placeholder="请输入关键词" type="text" class="search">
    </div>
    <div class="login">
      <ul class="log-res">
        <li class="log-res-list" v-for="(item, index) in login" :key="index">
          <router-link :to="item.to">
            {{ item.log }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headers',
  data() {
    return {
      nav: [
      {
        name: '首页',
        to:'/home',
        icon:'iconfont icon-home'
      },
      {
        name: '前端',
        icon:'iconfont icon-diannao',
        childs: [
        {
          name: 'Vue',
          icon:'iconfont icon-vue',
          to:'/Vue'
        },
        {
          name: 'JavaScript',
          icon:'iconfont icon-js',
          to: '/Javascript'
        },
        {
          name:'TypeScript',
          icon:'iconfont icon-typescript'
        },
        {
          name: 'HTML',
          icon:'iconfont icon-HTML',
          to:'/HTML'
        },
        {
          name: 'CSS',
          icon:'iconfont icon-CSS',
          to:'/CSS'
        },
        {
          name:'小程序',
          icon:'iconfont icon-xiaochengxu',
        },
        ]
      },
      {
        name: '笔记',
        to:'/notes',
        icon:'iconfont icon-biji'
      },
      {
        name: '实战',
        to:'/combat',
        icon:'iconfont icon-tuceng'
      },
      {
        name: '我的',
        icon:'iconfont icon-wode',
        childs:[{
          name:'自我介绍',
          to:'/introduce',
          icon:'iconfont icon-jieshao'
        },
        {
          name:'留言板',
          to:'/message',
          icon:'iconfont icon-liuyanban'
        },
        {
          name:'联系我们',
          to:'/contact',
          icon:'iconfont icon-lianxi'
        },
        ]
      },
      ],
      login:[
       {
         log:'登录',
         to:'/Vue'
       },
       {
         log:'注册',
         to:'/Vue'
       }
      ]
    };
  },
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  width:1200px;
  padding-left: 350px;
  font-size: 25px;
  .logo{
    padding: 18px 30px 0 0;
  }
  .nav-wrapper{
    .nav-row{
      display: inline-block;
      .nav-item {
        display: inline-block;
        padding: 16px 30px;
        .parent.icon::before{
          content: "\e773";
        }
        a{
          font-size: 20px;
          color:rgb(95, 95, 95); ;
        }
        &:hover {
          background-color:rgb(0, 140, 255);
          transform: scaleX(1);
          transition: .5s; 
          a{
            color: rgb(255, 255, 255);
          }
          .wrapper{
            display: block;
          }
        }
        .wrapper{
          position: absolute;
          display: none;
          top: 100%;
          left: 1px;
          width: 180px;
          .view{ 
            position:relative;
            top: 10px;
            border-radius: 15px;
            background-color: rgb(255, 255, 255);
            box-shadow: 0 0 10px rgba(0,0,0,.2);
            .item{
              padding: 8px;
              a{
                font-size: 15px;
                color: rgb(0, 0, 0);
              }
              &:hover{
                background-color: rgb(0, 140, 255);
                transform: scaleX(1.05);
                transition: .2s; 
                a{
                  padding-left: 15px;
                  color: rgb(255, 255, 255);
                  transition: .2s;
                } 
              }
            }
          }
        }
      }
    }
  }
  .search{
    padding:13px 0 0 30px ;
    .search{
      padding: 5px;
      border-color: transparent;
      background-color: rgb(219, 219, 219);
    }
    .search::after{
      width:0;
      transition: .5s; 
    } 
    .search:hover::after{
      width:250px;
    } 
  }
  .login{
    padding: 10px 0 0 10px;
    .log-res{
      .log-res-list{
        display: inline-block;
        padding-left:10px;
        a{
          padding: 10px;
          font-size: 20px;
          color: #000;
        }
      }
    }
  }
}
</style>