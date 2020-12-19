<template>
    <div>
        home2
        <router-link to="/">返回首页</router-link>
        <div @click="jump">js跳转</div>
        <hello :msg="'12345'"/>
        <a-rate v-model="value" />
        ==========
    </div>
</template>

<script>
import hello from '@/components/HelloWorld.vue'
export default {
    components: {
        hello,
    },
    methods: {
        jump() {
            this.$router.push({
                path: '/'
            });
        }
    }
}
</script>
