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
          <img :src="`/image/banner${2 + key}.jpg`" >
        </router-link>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:'num',
      min:'111'
    }
  }
}

</script>
<style lang="scss">
.num{
  color: blue;
}
</style>