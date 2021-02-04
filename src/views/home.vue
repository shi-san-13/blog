<template>
<div id="main">
    <div class="warp">
        <div class="container">
            <banner/>
            <contents/>
        </div>
        <div class="sidebar-wrap">
            <introduction/>
            <wechat/>
            <side/>
        </div>
    </div>
</div>
</template>

<script>
import banner from '@/components/Header/Banners.vue'
import side from '@/components/Header/Side.vue'
import introduction from '@/components/Header/Introduction'
import wechat from '@/components/Header/WeChat.vue'
import contents from '@/components/Header/Content.vue'
export default {
    components:{
        banner,
        side,
        contents,
        introduction,
        wechat
    }
}
</script>

<style lang="scss">
#main{
    .warp{
        display: flex;
        width: 1200px;
        margin: 0px auto;
        .container{
            width: 800px;
        }
        .sidebar-wrap{
            width:400px;
            padding-left: 30px;
        }
    }
}
</style>
