<template>
    <el-main class="layout-main">
        <el-scrollbar class="layout-main-scrollbar">
            <router-view v-slot="{ Component, route }">
                <transition :name="config.mainAnimation" mode="out-in">
                    <component :is="Component" :key="route.name"></component>
                </transition>
            </router-view>
        </el-scrollbar>
    </el-main>
</template>

<script setup lang="ts">
import { configStore } from '/@/stores/modules/config'
const config = configStore()
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'layout/main',
})
</script>

<style scoped lang="scss">
.layout-main {
    padding: 0 !important;
    background-color: var(--el-bg-color-page);
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.layout-main-scrollbar {
    width: 100%;
    height: calc(100vh - 90px);
    position: relative;
    overflow: hidden !important;
}
</style>
