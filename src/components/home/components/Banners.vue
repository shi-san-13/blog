<template>
  <div class="banner">
    <ul class="big-banner">
       <li class="list-block" v-for="(parent,key) in nav" :key="key">
          <router-link class="link" :to="parent.to || '#'">
            <img :src="`/image/banner${2 + key}.jpg`" class="" >
          </router-link>
       </li>
    </ul>
    <ul class="slick-dots">
        <li class="slick-active" v-for="(item, index) in items" :key="index">
          <button>
            {{item.name}}
          </button>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:'marks',
  data() {
    return{
      nav:[
      {
        to:'/home'
      },
      ],
      items:[
      {
        name:'1'
      },
      {
        name:'2'
      },
      {
        name:'3'
      }
      ]
    }
  },
  created(){
    let banner = document.getElementsByTagName('img')[0],
        button = document.getElementsByTagName('button')[0]
    button.onclick = function(){
      console.log(banner,button)
    }
    

  }
}
</script>
<style lang="scss" >
.banner{
  margin-top: 30px;
  justify-content:space-between;
  .big-banner{
    width: 800px;
    height: 400px;
    border-radius: 20px;
    background-color: #000;
    .list-block{
      display: flex;
      height: 100%;
      border-radius: 20px;
      overflow: hidden;
      img{
      }
    }
  }
  .slick-dots{
      display: block;
      .slick-active{
        position:relative;
        left: 350px;
        bottom: 30px;
        display: inline-block;
        margin: 0 5px;
        text-align: center;
        vertical-align:top;
        button{
          display: block;
          width: 30px;
          height: 5px;
          padding: 2px;
          border-radius: 5px;
          color: transparent;
          font-size: 0;
        }
      }
    }
}

</style>