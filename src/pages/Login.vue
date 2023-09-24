<template>
  <div class="container">
    <el-card class="login-card">
      <h3>登录</h3>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="text-zinc-950" type="primary" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="register-card">
      <h3>注册</h3>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="text-zinc-950" type="primary" @click="register"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
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
  username: "",
  password: ""
})

const login = () => {
  axios.post("/api/login", loginForm).then(({ data }) => {
    if (data.status === 0) {
      ElMessage({
        message: "登陆成功",
        type: "success"
      })
      router.push("/home")
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card,
.register-card {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
</style>
