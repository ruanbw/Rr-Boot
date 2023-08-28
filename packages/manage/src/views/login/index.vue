<template>
    <div class="signin flex justify-center items-center h-screen">
        <el-form ref="ruleFormRef" :model="form" :rules="rules" class="w-1/6">
            <el-form-item prop="username">
                <el-input v-model="form.username" prefix-icon="user" placeholder="请输入账号" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" prefix-icon="lock" show-password type="password" placeholder="请输入密码" clearable></el-input>
            </el-form-item>
            <el-form-item prop="verifycode">
                <div class="flex gap-5">
                    <el-input class="flex-2" v-model="form.verifycode" placeholder="请输入验证码" clearable></el-input>
                    <el-image class="flex-2" style="width: 100px; height: 30px" fit="contain" src="https://bpic.588ku.com/element_origin_min_pic/01/37/32/26573c46f211bc8.jpg" alt="验证码" />
                </div>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="form.remember" label="保持会话" size="small" />
            </el-form-item>
            <el-form-item>
                <el-button style="width: 100%" type="primary" size="default" @click="submitForm(ruleFormRef)"> 登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { ElNotification, FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { userStore } from '/@/stores/modules/user'
// 路由实例
const router = useRouter()
const route = useRoute()
const user = userStore()
// 表单实例
const ruleFormRef = ref<FormInstance>()
// 表单效验规则
const rules = reactive<FormRules>({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    verifycode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
})
// 登录表单
let form = reactive({
    username: 'admin',
    password: '123456',
    verifycode: '',
    remember: false,
})
// 提交按钮
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            // 是否保持会话
            if (form.remember) {
                localStorage.setItem('remember', '1')
            }
            user.dologin(form).then(() => {
                router.push({ path: (route.query.redirect as string) || '/' })
                ElNotification({
                    title: '成功',
                    message: '登录成功，欢迎回来~',
                    type: 'success',
                })
            })
        }
    })
}
// 页面初始化
onMounted(() => {
    // 判断是否保持会话
    let remember = localStorage.getItem('remember')
    form.remember = remember ? true : false
})
</script>

<style lang="scss" scoped>
.signin {
}
</style>
