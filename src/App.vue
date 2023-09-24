<template>
  <div v-if="route.path !== '/'">
    <Header></Header>
    <main class="flex">
      <Aside></Aside>
      <RouterView class="flex-1"></RouterView>
    </main>
  </div>
  <Login v-else></Login>
</template>

<script setup>
import {} from "vue"
import Header from "./components/Header.vue"
import Aside from "./components/Aside.vue"
import Login from "./pages/Login.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>
<style scoped></style>
