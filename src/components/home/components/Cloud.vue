<template>
<div class="sidebar-content">
  <div class="sidebar-header">
    <h3>标签云</h3>
  </div>
  <ul class="content">
    <li class="list-color" v-for="(cloud,key) in nav" :key="key">
      <router-link :to="cloud.to || '#'">{{ cloud.title }}</router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name:'cloud',
  data() {
    return{
      nav:[
      {
        title:'Vue',
        to:'/Vue'
      },
      {
        title:'Javascript',
        to:'/Javascript'
      },
      {
        title:'HTML',
        to:'/HTML'
      },
      {
        title:'CSS',
        to:'/CSS'
      },
      {
        title:'小程序',

      }

      ]
    }
  }
}
</script>
<style lang="scss">
.sidebar-content{
  .content{
  z-index: 3;
    .list-color{
      display: inline-block;
      margin: 10px 5px 0 0;
      a{
      padding: 5px;
      background-color:rgb(76, 199, 71);
      }
    }
    
  }
}
</style>