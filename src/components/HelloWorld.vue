<template>
  <div class="hello">
    我是一个hello组件
    <h1>{{ msg }}</h1>
    我是一个hello组件
    我是一个hello组件
    我是一个hello组件
    我是一个hello组件
    我是一个hello组件
    我是一个hello组件
    我是一个hello组件
    我是一个hello组件
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
