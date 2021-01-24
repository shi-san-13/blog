<template>
<div id="main">
    <div class="warp">
        <div class="container">
                <banner/>
                <contents/>
        </div>
        <div class="sidebar-wrap">
            <introduction/>
            <side/>
        </div>
    </div>
</div>
</template>

<script>
import banner from '@/components/Header/Banners.vue'
import side from '@/components/Header/Side.vue'
import contents from '@/components/Header/Content.vue'
import introduction from '@/components/Header/Introduction'
export default {
    components:{
        banner,
        side,
        contents,
        introduction,
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
            margin-top: 20px;
            width: 70%;
        }
    }
}
</style>
