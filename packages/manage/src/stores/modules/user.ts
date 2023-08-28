import { defineStore } from 'pinia'
import { User } from '../types'

export const userStore = defineStore('user', {
    state: (): User => {
        return {
            id: '',
            username: '',
            avatar: '',
            token: '',
            expire: '',
        }
    },
    actions: {
        setUser(key: keyof User, value: any) {
            this.$state[key] = value
        },
        async dologin(data: any) {
            this.setUser('token', "token")
        },
        dologout() {
            this.$reset()
            localStorage.clear()
            sessionStorage.clear()
        },
    },

    persist: {
        enabled: true,
    },
})
