<template>
    <div>
        我是错误页面
    </div>
</template>

<script>
export default {
    methods: {
        jump() {
            this.$router.push({
                path: '/'
            });
        }
    }
}
</script>
