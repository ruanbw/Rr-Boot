<template>
    <Viewer :value="props.modelValue" :plugins="plugins" />
</template>

<script setup lang="ts">
import 'bytemd/dist/index.css'
import 'juejin-markdown-themes/dist/juejin.min.css'
import { Viewer } from '@bytemd/vue-next'
import { plugins } from './plugins'
import { defineComponent } from 'vue'
const props = defineProps<{
    modelValue: string
}>()
</script>

<style scoped lang="scss">
.markdown-body {
    padding: 0 15px;
    background-color: #ffffff;
    max-width: 800px;
    margin: 0 auto;
}
</style>
