<script lang="ts" setup>
import Main from "../router-view/main.vue"
import Header from "../components/header.vue"
import Aside from "../components/aside.vue"
import Tabs from '../components/tabs/index.vue'
</script>

<template>
    <el-container class="layout-container">
        <Aside />
        <el-container class="content-wrapper">
            <Header />
            <Tabs />
            <Main />
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    height: 100%;
    width: 100%;
}
.content-wrapper {
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
