import { defineStore } from 'pinia'
import { App } from '../types'

export const appStore = defineStore('app', {
    state: (): App => {
        return {
            appName: '后台管理系统',
        }
    },
    actions: {},
    // 开启数据缓存
    persist: {
        enabled: true,
    },
})
