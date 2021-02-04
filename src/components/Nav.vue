<template>
  <header class="navigation">
    <ul class="nav-row">
      <li class="nav-item" v-for="(parent, key) in nav" :key="key"> 
       <router-link :to="parent.to || '#'">{{ parent.name }}</router-link>
        <div class="wrapper" v-if="parent.childs">
          <ul class="view">
            <li class="item" v-for="(child, i) in parent.childs" :key="i">
              <router-link :to="child.to || '#'">{{child.name}}</router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="search">
      <input v-model="message" type="text" placeholder="请输入关键字!">
      {{ message }}
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
        to:'/home'
      },
      {
        name: '前端',
        childs: [{
          name: 'Vue',
          to:'/Vue'
        },
        {
          name: 'Javascrixpt',
          to: '/Javascript'
        },
        {
          name: 'HTML',
          to:'HTML'
        },
        {
          name: 'CSS',
          to:'CSS'
        }]
      },
      {
        name: '笔记',
      },
      {
        name: '实战',
      },
      {
        name: '关于博主',
      },
      {
        name:'我的',
        childs:[{
          name:'自我介绍'
        },
        {
          name:'留言板'
        },
        {
          name:'联系我们'
        }]
      }
      ],
      message:''
    };
  },
}

</script>

<style lang="scss">
.navigation {
  display: flex;
  width:1000px;
  height: 100px;
  margin: auto;
  font-size: 30px;
  .nav-item {
    position: relative;
    display: inline-block;
    padding: 30px;
    a{
      color:rgb(95, 95, 95); ;
    }
    &:hover {
      background-color:rgb(0, 140, 255);
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
      .view{ 
        border-radius: 5%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        .item{
          padding: 11px;
          a{
            font-size: 20px;
            color: rgb(0, 0, 0);
          }

          &:hover{
            background-color: rgb(0, 140, 255);
            a{
              color: rgb(255, 255, 255);
            } 
          }
        }
      }
    }
  }
  .search{
    width: 200px;
    padding: 25px 0px;
    input{
      height: 5px;
      padding: 10px;
    }
  }
}

</style>