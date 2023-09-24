<template>
  <div class="h-[52px] flex items-center border-b-[1px] border-[#d6d9dc]">
    <span class="ml-16">stack overflow</span>
    <span class="mx-8">全日炜</span>
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="h-8 w-[50vw] ml-4"
    >
      <template #prepend>
        <el-button :icon="Search" />
      </template>
      <template #append>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
    </el-input>
    <el-dropdown class="ml-64">
      <el-avatar> user </el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登陆</el-dropdown-item>
          <el-dropdown-item>去登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import {} from "vue"
import { Search } from "@element-plus/icons-vue"
</script>
<style scoped></style>
