<template>
  <div
    class="issue-container p-4 w-[100%] h-[146px] border-b-[1px] border-gray-400 text-[14px]"
  >
    <p class="h-[30px] cursor-pointer text-blue-500 hover:text-blue-700 text-[16px]" @click="toDetail">
      <el-tag class="ml-8" type="info">0 votes</el-tag>
      <span class="ml-4">{{ title }}</span>
    </p>
    <p class="h-[60px]">
      <p>
        <el-tag class="ml-4" type="info">0 answers</el-tag>
        <span class="ml-4">{{ description }}</span>
      </p>
      <p class="mt-1">
        <el-tag class="ml-8" type="info">0 votes</el-tag>
        <span class="ml-4">{{ description }}</span>
      </p>
    </p>
    <p class="h-[24px] ml-24">
      <el-tag v-for="(item,index) in tags" :key="index" class="ml-2">{{item}}</el-tag>

    </p>
  </div>
</template>

<script setup>
import { } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  title: String,
  content: String,
  description: String,
  tags:Array
})

const toDetail = () => { 
  router.push('/details')
}
</script>
