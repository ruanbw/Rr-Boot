// * Menu
export interface MenuOptions {
    path: string
    title: string
    icon?: string
    isLink?: string
    close?: boolean
    children?: MenuOptions[]
}

export interface App {
    appName: string
}

export interface Permission {
    tabsMenuValue: string
    tabsMenuList: MenuOptions[]
    appRouter: any[]
}

export interface Config {
    layoutMode: string
    mainAnimation: string
    isOpen: boolean
    menuwidth: number
    menuCollapse: boolean
    theme: string
    themeColor: string
}

export interface User {
    username: string
    avatar: string
    token: string
    id: string
    expire: string
}
