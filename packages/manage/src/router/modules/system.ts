import { RouteRecordRaw } from 'vue-router'
import Layout from '/@/layouts/index.vue'

const system: RouteRecordRaw = {
    path: '/sys',
    name: 'System',
    component: Layout,
    meta: {
        title: '系统管理',
        icon: 'setting',
    },
    children: [
        {
            path: '/sys/user',
            name: 'User',
            component: () => import('/@/views/sys/user/index.vue'),
            meta: {
                title: '用户管理',
                icon: 'user',
            },
        },
        {
            path: '/sys/role',
            name: 'Role',
            component: () => import('/@/views/sys/role/index.vue'),
            meta: {
                title: '角色管理',
                icon: 'user-filled',
            },
        },
        {
            path: '/sys/dept',
            name: 'Dept',
            component: () => import('/@/views/sys/dept/index.vue'),
            meta: {
                title: '部门管理',
                icon: 'credit-card',
            },
        },
        {
            path: '/sys/menu',
            name: 'Menu',
            component: () => import('/@/views/sys/menu/index.vue'),
            meta: {
                title: '菜单管理',
                icon: 'menu',
            },
        },
    ],
}

export default system
