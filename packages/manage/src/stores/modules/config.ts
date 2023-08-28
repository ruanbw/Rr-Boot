import { defineStore } from 'pinia'
import { Config } from '../types'

export const configStore = defineStore('config', {
    state: (): Config => ({
        layoutMode: 'Default',
        mainAnimation: 'slide-left',
        isOpen: false,
        menuwidth: 200,
        menuCollapse: false,
        theme: 'light',
        themeColor: '#409eff',
    }),
    getters: {
        menuWidthPx: (state): string => {
            return state.menuCollapse ? '64px' : state.menuwidth + 'px'
        },
    },
    actions: {
        setConfig(name: keyof Config, value: any) {
            this[name] = value as never
        },
    },

    persist: {
        enabled: true,
    },
})
