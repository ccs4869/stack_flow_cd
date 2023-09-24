<template>
  <div class="main-container flex">
    <div class="left flex-1">
      <header class="h-36 border-b-[1px] border-gray-400">
        <div class="h-24 p-[20px] flex-1 flex justify-between items-center">
          <h2 class="text-[28px]">All Questions</h2>
          <el-button @click="toNew">Ask Question</el-button>
        </div>
        <div class="px-[20px] py-[12px] h-12 flex justify-between">
          <span>2032 questions</span>
          <span><el-tag>标签</el-tag></span>
        </div>
      </header>
      <main>
        <Issue
          v-for="item in issues.lists"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :tags="item.tags"
        ></Issue>
      </main>
    </div>
    <div class="right w-[450px] h-[500px] pr-[150px]">
      <Flower></Flower>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
import axios from "axios"
import Issue from "../components/Issue.vue"
import Flower from "../components/Flower.vue"

const issues = reactive({
  lists: [],
  length: 0
})

const router = useRouter()
const toNew = () => {
  router.push("/new")
}

axios.get("/api/posts").then(({ data }) => {
  console.log(data)
  issues.lists = data.data.map(
    ({ id, title, description, content, tags, likes, dislikes }) => {
      return {
        id,
        title,
        description,
        content,
        tags: tags ? tags.split(",") : [],
        likes,
        dislikes
      }
    }
  )
  issues.length = data.data.length
})
</script>
<style scoped></style>
