<template>
    <div>
        <span>无权限禁止访问</span>
        <el-button type="primary" size="small" @click="toHome">返回首页</el-button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toHome = () => {
    router.push('/dashboard/workplace')
}
</script>

<style lang="scss" scoped></style>
