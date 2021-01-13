<template>
<div id="main">
    <div class="warp">
        <div class="container">
            <banner/>
            <contents/>
        </div>
        <side/>
    </div>
</div>
</template>

<script>
import banner from '@/components/Header/Banners.vue'
import side from '@/components/Header/Side.vue'
import contents from '@/components/Header/Content.vue'
export default {
    components:{
        banner,
        side,
        contents,
    }
}
</script>

<style lang="scss">
img{
    border-radius: 5%;
}
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
