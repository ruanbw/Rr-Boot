<template>
    <Editor :value="props.modelValue" :plugins="plugins" :locale="zh_Hans" @change="handleChange" />
</template>

<script setup lang="ts">
import 'bytemd/dist/index.css'
import 'juejin-markdown-themes/dist/juejin.min.css'
import { Editor } from '@bytemd/vue-next'
import zh_Hans from 'bytemd/locales/zh_Hans.json'
import { plugins } from './plugins'

const props = defineProps<{
    modelValue: string
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', v: string): void
}>()
// 当内容发生改变时
const handleChange = (v: string) => {
    emit('update:modelValue', v)
}
</script>

<style lang="scss">
.bytemd {
    height: calc(100vh - 122px);
}
</style>
