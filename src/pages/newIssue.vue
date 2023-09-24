<template>
  <div class="new-container mr-[200px] p-8">
    <h2 class="text-[32px] mb-4">Publish your question</h2>
    <div>
      <span class="text-[12px]">Title</span>
      <el-input
        v-model="issueInfo.title"
        class="h-[30px]"
        placeholder="Please input"
        clearable
      />
    </div>

    <div class="mt-2">
      <span class="text-[12px]">description</span>
      <el-input
        v-model="issueInfo.description"
        class="h-[30px]"
        placeholder="Please input"
        clearable
      />
    </div>

    <div class="mt-2">
      <span class="text-[12px]">content</span>

      <el-input
        v-model="issueInfo.content"
        :rows="10"
        type="textarea"
        placeholder="Please input"
      />
    </div>

    <el-card class="mt-2">
      <span class="text-[12px]"><el-tag>tags</el-tag></span>

      <el-checkbox-group
        v-model="issueInfo.tags"
        @change="handleCheckedCitiesChange"
        class="mt-2 ml-2"
      >
        <el-checkbox v-for="city in cities" :key="city" :label="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
    </el-card>

    <div class="p-10 text-right">
      <span class="text-[12px] mr-4 text-red-400">Are you fucking sure?</span>
      <el-button round @click="cancel">取消</el-button>
      <el-button round @click="submit">发布</el-button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ElMessage } from "element-plus"
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"

const issueInfo = reactive({
  title: "",
  description: "",
  content: "",
  tags: ["Python"]
})

// const checkedCities = ref(["Python"])
const cities = ["Python", "JavaScript", "Vue", "Matlab"]

const handleCheckedCitiesChange = (value) => {
  issueInfo.tags = value
}

const router = useRouter()

const submit = () => {
  axios.post("/api/posts", issueInfo).then(({ data }) => {
    console.log(data)
    if (data.status === 200) {
      ElMessage({
        message: data.msg,
        type: "success"
      })
      router.push("/home")
    } else {
      ElMessage({
        message: data.msg,
        type: "error"
      })
    }
  })
}

const cancel = () => {
  router.push("/home")
}
</script>
