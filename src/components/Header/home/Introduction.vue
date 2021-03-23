<template>
  <div class='sidebar-content'>
    <div class="sidebar-header">
      <h3>博主简介</h3>
    </div>
    <div class="Introduction">
      <span>一位正在努力学习成为前端工程师,专注全栈技术，分享各种所遇问题与个人心得</span>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar-content{
  position: relative;
  .Introduction{
    padding-top: 10px;
  }
  .sidebar-header:after{
    content: "";
    position:absolute;
    left: 131px;
    top:12px;
    width: 210px;
    height: 2px;
    margin-top: 20px;
    background-color: rgb(149, 149, 149);
  }
}
</style>