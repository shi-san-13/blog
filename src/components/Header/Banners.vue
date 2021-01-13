<template>
 <div class="banner">
      <div class="big-banner">
          <a href="/home" class="list-block">
              <img src="@/assets/image/banner.jpg" alt="banner">
          </a>
      </div>
      <ul class="small-banner">
          <li class="list" v-for="(parent,key) in 3" :key="key">
              <router-link class="link" :to="parent.to || '#'">
                  <img :src="`/image/banner${2 + key}.jpg`">
                  <span></span>
              </router-link>
          </li>
      </ul>
  </div>

</template>
<style lang="scss" >
 .banner{
    display: flex;
    width: 800px;
    .big-banner{
        .list-block{
            img{
                z-index: -1;
                width: 600px;
            }
        }
    }
    .small-banner{
        margin-left: 20px;
        .list{
            .link{
                img{
                    width:163px;
                    margin-bottom: 1px;
                }
            }
        }
    }
}
</style>