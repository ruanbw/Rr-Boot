<script lang="ts" setup>
import { configStore } from '/@/stores/modules/config';
import { appStore } from '/@/stores/modules/app';

const config = configStore();
const app = appStore();

</script>

<template>
  <div class="logo">
    <img src="~assets/vue.svg" alt="logo" />
    <span v-if="!config.menuCollapse" class="name">{{app.appName}}</span>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .name{
    margin-left: 10px;
    font-size: var(--el-font-size-extra-large);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
