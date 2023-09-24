<template>
  <div
    class="aside-menu w-[16vw] h-[95vh] pl-12 py-8 border-r-[1px] border-[#d6d9dc]"
  >
    <div class="h-10 leading-10 text-[13px] pl-4" @click="toHome">
      <el-icon class="mr-1"><House /></el-icon>
      Home
    </div>
    <div class="h-8 leading-8 text-[13px] pl-4">
      <el-icon class="mr-1"><Connection /></el-icon>
      Public
    </div>
    <div class="h-8 leading-8 text-[13px] pl-8" @click="toQuestions">
      <el-icon class="mr-1"><ChatDotRound /></el-icon>
      Questions
    </div>
    <div class="h-8 leading-8 text-[13px] pl-8">
      <el-icon class="mr-1"><CollectionTag /></el-icon>
      Tags
    </div>
    <div class="h-8 leading-8 text-[13px] pl-8">
      <el-icon class="mr-1"><User /></el-icon>
      Users
    </div>
    <div class="h-8 leading-8 text-[13px] pl-8">
      <el-icon class="mr-1"><OfficeBuilding /></el-icon>
      Companies
    </div>
  </div>
</template>

<script setup>
import {} from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
const toHome = () => {
  router.push("/home")
}
const toQuestions = () => {
  router.push("/new")
}
</script>
<style scoped>
.aside-menu div {
  opacity: 0.7;
}

.aside-menu div:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
