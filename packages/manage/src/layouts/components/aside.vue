<script lang="ts" setup>
import { computed, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { configStore } from '/@/stores/modules/config'
import logo from './logo.vue'
import menuTree from './menu-tree.vue'
import { permissionStore } from '/@/stores/modules/permission'

const route = useRoute()
const config = configStore()
const permission = permissionStore()

const state = reactive({
    defaultActive: '',
})

watch(
    () => route.path,
    () => {
        state.defaultActive = route.path
    },
    { immediate: true }
)
const verticalMenusScrollbarHeight = computed(() => {
    let menuTopBarHeight = 60
    return 'calc(100vh - ' + menuTopBarHeight + 'px)'
})

const menuWidth = computed(() => config.menuWidthPx)
</script>

<template>
    <el-aside class="layout-aside-Default">
        <logo></logo>
        <el-scrollbar class="vertical-menus-scrollbar">
            <el-menu :default-active="state.defaultActive" :collapse-transition="false" :collapse="config.menuCollapse" unique-opened>
                <menuTree :routes="permission.appRouter"></menuTree>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<style lang="scss" scoped>
.layout-aside-Default {
    height: 100vh;
    width: v-bind(menuWidth);
    border-right: 1px solid var(--el-border-color);
    transition: width 0.3s ease;
    overflow: hidden;
}

.el-menu {
    border: 0;
}

.vertical-menus-scrollbar {
    height: v-bind(verticalMenusScrollbarHeight);
}
</style>
