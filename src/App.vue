<template>
  <Header>Im a Head</Header>
  <main class="flex">
    <Aside></Aside>
    <RouterView class="flex-1"></RouterView>
  </main>
</template>

<script setup>
import {} from "vue"
import Header from "./components/Header.vue"
import Aside from "./components/Aside.vue"
</script>
<style scoped></style>
