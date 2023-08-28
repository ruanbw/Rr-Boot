import { defineStore } from 'pinia'
import { Permission, MenuOptions } from '../types'
import router from '/@/router/index'
import { TabPaneName, TabPaneProps } from 'element-plus'
import { appRoutes } from '/@/router/static'

// * 首页地址（默认）
export const HOME_URL: string = '/dashboard/workplace'
// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址）
export const TABS_BLACK_LIST: string[] = ['/403', '/404', '/500', '/login']

export const permissionStore = defineStore('permission', {
    state: (): Permission => {
        return {
            tabsMenuValue: HOME_URL,
            tabsMenuList: [{ title: '工作台', path: HOME_URL, icon: 'dataBoard', close: false }],
            appRouter: appRoutes,
        }
    },
    actions: {
        setPermission(key: keyof Permission, val: any) {
            this[key] = val
        },
        addTabs(tabItem: MenuOptions) {
            // not add tabs black list
            if (TABS_BLACK_LIST.includes(tabItem.path)) return
            const tabInfo: MenuOptions = {
                title: tabItem.title,
                path: tabItem.path,
                icon: tabItem.icon,
                close: tabItem.close,
            }

            if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
                this.tabsMenuList.push(tabInfo)
            }
            this.setTabsMenuValue(tabItem.path)
            router.push(tabItem.path)
        },
        // Remove Tabs
        removeTabs(tabPath: TabPaneName) {
            let tabsMenuValue = this.tabsMenuValue
            const tabsMenuList = this.tabsMenuList
            if (tabsMenuValue === tabPath) {
                tabsMenuList.forEach((item, index) => {
                    if (item.path !== tabPath) return
                    const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1]
                    if (!nextTab) return
                    tabsMenuValue = nextTab.path
                    router.push(nextTab.path)
                })
            }
            this.tabsMenuValue = tabsMenuValue
            this.tabsMenuList = tabsMenuList.filter(item => item.path !== tabPath)
        },
        // Change Tabs
        changeTabs(tabItem: TabPaneProps) {
            this.tabsMenuList.forEach(item => {
                if (item.title === tabItem.label) router.push(item.path)
            })
        },
        // Set TabsMenuValue
        setTabsMenuValue(tabsMenuValue: string) {
            this.tabsMenuValue = tabsMenuValue
        },
        // Set TabsMenuList
        setTabsMenuList(tabsMenuList: MenuOptions[]) {
            this.tabsMenuList = tabsMenuList
        },
        // Close MultipleTab
        closeMultipleTab(tabsMenuValue?: string) {
            this.tabsMenuList = this.tabsMenuList.filter(item => {
                return item.path === tabsMenuValue || item.path === HOME_URL
            })
        },
        // Go Home
        goHome() {
            router.push(HOME_URL)
            this.tabsMenuValue = HOME_URL
        },
    },
    persist: {
        enabled: true,
    },
})
