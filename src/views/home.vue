<template>
    <div>
        home 1234
        <router-link to="/">跳转页面</router-link>
        <hello :msg="'123412312315'"/>
    </div>
</template>


<script>
import hello from '@/components/HelloWorld.vue'
export default {
    components: {
        hello,
    },
}
</script>
