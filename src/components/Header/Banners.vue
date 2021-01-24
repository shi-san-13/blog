<template>
 <div class="banner">
      <div class="big-banner">
          <a href="/home" class="list-block">
              <img src="@/assets/image/banner.jpg" alt="banner">
              <span class="title">VUE</span>
          </a>
      </div>
      <ul class="small-banner">
          <li class="list" v-for="(parent,key) in nav" :key="key">
              <router-link class="link" :to="parent.to || '#'">
                  <img :src="`/image/banner${2 + key}.jpg`" >
                  <span class="title">{{ parent.name }}</span>
              </router-link>
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
                name:'Javascript'
            },
            {
                name:'HTML'
            },
            {
                name:'CSS'
            }
            ]
        }
    }
}
</script>
<style lang="scss" >
 .banner{
    display: flex;
    width: 800px;
    .big-banner{
        z-index: -1; 
        .list-block{
            position: relative;
            img{
                width: 600px;
            }
            .title{
                position: absolute;
                bottom: 0;
                left: 0;
                margin-bottom: 5px;
                padding: 5px;
                width: 100%;
                box-sizing:border-box;
                background-color:rgba(129, 129, 129,0.5);
            }
        }
    }
    .small-banner{
        margin-left: 20px;
        z-index: -1; 
        .list{
            position: relative;
            .link{
                img{
                    width:163px;
                    margin-bottom: 1px;
                }
                .title{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width:100%;
                    font-size: 14px;
                    padding:5px;
                    margin-bottom: 5px;
                    box-sizing:border-box;
                    background-color:rgba(129, 129, 129,.5);
                }
            }
        }
    }
}
</style>