<template>
  <div class="auth-container">
    <el-card class="login-card">
      <div class="text-3xl text-center mb-8 font-bold leading-[36px]">
        <el-icon class="w-9 h-9 mr-1"><UserFilled /></el-icon>
        <!-- <span class="align-top">登录</span> -->
      </div>
      <el-form
        :label-position="right"
        label-width="60px"
        :model="loginForm"
        style="max-width: 460px"
      >
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="ml-0 flex justify-center mt-6">
        <el-button class="text-zinc-950" type="primary" @click="register"
          >注册</el-button
        >
        <el-button class="text-zinc-950" type="primary" @click="login"
          >登录</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"

import { ElMessage } from "element-plus"

import axios from "axios"

const router = useRouter()

const loginForm = reactive({
  username: "chencansen",
  password: "123456"
})

const login = () => {
  axios.post("/api/login", loginForm).then(({ data }) => {
    if (data.status === 0) {
      ElMessage({
        message: "登陆成功",
        type: "success"
      })
      router.push({ path: "/home", query: { un: loginForm.username } })
    } else {
      ElMessage({
        message: data.msg,
        type: "warning"
      })
    }
  })
}

const registerForm = reactive({
  username: "",
  password: ""
})

const register = () => {
  axios.post("/api/register", registerForm).then(({ data }) => {
    if (data.status === 200) {
      ElMessage({
        message: "注册成功",
        type: "success"
      })
    } else {
      ElMessage({
        message: data.msg,
        type: "warning"
      })
    }
  })
}
</script>

<style>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login-card,
.register-card {
  width: 500px;
  height: 300px;
  padding: 20px;
  margin: 20px;
}
</style>
