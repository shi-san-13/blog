<template>
  <div class="banner">
    <div class="big-banner">
      <a href="#/home" class="list-block">
        <img src="@/assets/image/banner.jpg" alt="banner">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'marks',
  data() {
    return{
    }
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" >

.banner{
    margin-top: 30px;
    justify-content:space-between;
    .big-banner{
        .list-block{
            img{
                width: 625px;
            }
        }
    }
}

</style>