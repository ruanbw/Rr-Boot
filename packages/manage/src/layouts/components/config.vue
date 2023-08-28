<script lang="ts" setup>
import { configStore } from '/@/stores/modules/config'
import { ref,onMounted } from 'vue'
import { useCssVar } from '@vueuse/core'

const config = configStore()

const colors = ref(['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399', '#303133'])

// 主题色切换
const colorChange = (val: string) => {
    config.setConfig('themeColor', val)
    useCssVar('--el-color-primary').value = val
    useCssVar('--el-color-primary-light-3').value = val
    useCssVar('--el-color-primary-dark-2').value = val
}
const close = () => {
    config.setConfig('isOpen', false)
}

onMounted(() => {
    useCssVar('--el-color-primary').value = config.themeColor
    useCssVar('--el-color-primary-light-3').value = config.themeColor
    useCssVar('--el-color-primary-dark-2').value = config.themeColor
})
</script>

<template>
    <div class="config">
        <el-drawer v-model="config.isOpen" size="300" title="系统配置" :before-close="close">
            <el-scrollbar>
                <el-form>
                    <!-- 布局 -->
                    <el-divider border-style="dashed">布局方式</el-divider>
                    <el-divider border-style="dashed">主题色切换</el-divider>
                    <el-form-item>
                        <div class="flex gap-5 warp">
                            <span class="w-6 h-6" v-for="item in colors" :key="item" @click="colorChange(item)" :style="{ backgroundColor: item }"></span>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-color-picker @change="colorChange" v-model="config.themeColor" />
                    </el-form-item>

                    <!-- 菜单切换动画 -->
                    <el-divider border-style="dashed">全局</el-divider>
                    <el-form-item label="菜单切换动画">
                        <el-select v-model="config.mainAnimation">
                            <el-option label="slide-left" value="slide-left" />
                            <el-option label="slide-right" value="slide-right" />
                        </el-select>
                    </el-form-item>
                    <!-- 菜单展开宽度 -->
                    <el-divider border-style="dashed">侧边栏</el-divider>
                    <el-form-item label="侧边菜单宽度(展开时)">
                        <el-input-number v-model="config.menuwidth" :min="200" :max="260"></el-input-number>
                    </el-form-item>
                </el-form>
            </el-scrollbar>
        </el-drawer>
    </div>
</template>

<style lang="scss" scoped>
.config {
    
}
</style>
