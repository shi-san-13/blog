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
            <clouds/>
        </div>
    </div>
    <login/>
</div>
</template>

<script>
import '@/components/Header/home/style/homeComponents.scss'
import login from '@/components/Header/home/login.vue'
import banner from '@/components/Header/home/Banners.vue'
import side from '@/components/Header/home/Side.vue'
import introduction from '@/components/Header/home/Introduction'
import wechat from '@/components/Header/home/WeChat.vue'
import contents from '@/components/Header/home/Content.vue'
import clouds from '@/components/Header/home/Cloud.vue'
export default {
    components:{
        banner,
        side,
        contents,
        introduction,
        wechat,
        clouds,
        login
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
            z-index: -1;
        }
    }
}
</style>
