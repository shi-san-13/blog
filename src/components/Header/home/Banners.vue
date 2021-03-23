<template>
  <div class="banner">
    <div class="big-banner">
      <a href="#/home" class="list-block">
        <img class="one-banner" src="@/assets/image/banner.jpg">
      </a>
    </div>
    <ul class="small-banner">
      <li class="list" v-for="(parent,key) in nav" :key="key">
        <router-link class="link" :to="parent.to">
          <img class="list-banner" :src="`/image/banner${2 + key}.jpg`" >
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
        
      }
      ]
    }
  },
  mounted(){
    let bigBanner = document.getElementsByClassName('one-banner')[0],
        smallBanner = document.getElementsByClassName('list-banner')
    smallBanner[0].onclick = function(){
      bigBanner.style.backgroundImage = '@/assets/image/banner2.jpg'      
    } 
  }
}
  
  
  
</script>
<style lang="scss" >

.banner{
    display: flex;
    width: 800px;
    height: 507px;
    margin-top: 30px;
    justify-content:space-between;
    .big-banner{
        .list-block{
            position: relative;
            img{
                width: 625px;
            }
        }
    }
    .small-banner{
        .list{
            position: relative;
            margin-bottom:10px;
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