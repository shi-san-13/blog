<template>
    <div class="sidebar-content">
        <div class="sidebar-header">
            <h3>最新评论</h3>
        </div>
        <ul class="content">
            <li class="list" v-for="(comments,key) in com" :key="key">
                <img src="@/assets/logo.png" width="20%" alt="LOGO">
                <h2>{{ comments.logo || '无'}}：</h2>
                <p>{{ comments.name || '无内容'}}</p>
            </li>
        </ul>
    </div> 
</template>
<script>
export default {
    name: 'headers',
    data() {
        return{
            com: [
            {
                logo:'测试',
                name:'最新评论'
            },
            {
                logo:'测试',
                name:'耶耶耶耶'
            },
            {
                logo:'测试',
                name:'夜夜夜夜耶耶耶'
            },
            {
                logo:'测试',
                name:'嘿嘿嘿嘿额嘿嘿hi'
            },
            {
                name:'涨知识了，码住，等哈来练习一下'
            },
            ]
        }
    },
}
</script>
<style lang="scss">
.sidebar-content{
    .sidebar-header{
        color: #797979
    }
    .content{
        .list{
            display: flex;
            padding: 10px;
            border-bottom: 1px solid black;
            font-size: 14px;
        }
    }
}
</style>