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
import login from '@/components/home/components/login.vue'
import banner from '@/components/home/components/Banners.vue'
import side from '@/components/home/components/Side.vue'
import introduction from '@/components/home/components/Introduction'
import wechat from '@/components/home/components/WeChat.vue'
import contents from '@/components/home/components/Content.vue'
import clouds from '@/components/home/components/Cloud.vue'
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
