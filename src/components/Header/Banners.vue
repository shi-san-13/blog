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
                  <img :src="`/image/banner${2 + key}.jpg`">
                  <span class="title">{{ parent.name }}</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    name:'mark',
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
        .list-block{
            position: relative;
            img{
                z-index: -1;
                width: 600px;
            }
            .title{
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 5px;
                width: 100%;
                background-color:rgb(129, 129, 129);
            }
        }
    }
    .small-banner{
        margin-left: 20px;
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
                    font-size: 14px;
                    padding:5px;
                    box-sizing:border-box;
                    background-color:rgb(129, 129, 129);
                }
            }
        }
    }
}
</style>