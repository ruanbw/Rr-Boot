<template>
    <component :is="config.layoutMode"></component>
</template>

<script lang="ts" setup>
import Default from '/@/layouts/container/default.vue'
import { configStore } from '/@/stores/modules/config'

const config = configStore()

const init = () => {
    
}
init()
</script>

<script lang="ts">
export default {
    components: { Default },
}
</script>
