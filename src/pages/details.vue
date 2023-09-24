<template>
  <div class="main-container flex">
    <div class="left flex-1">
      <header class="h-36 border-b-[1px] border-gray-400">
        <div class="h-24 p-[20px] flex-1 flex justify-between items-center">
          <strong class="text-[28px]">All Questions</strong>
          <el-button>Ask Question</el-button>
        </div>
        <div class="h-12 flex">
          <span class="ml-6 text-[12px]">Asked today</span>
          <span class="ml-6 text-[12px]">Modified today</span>
          <span class="ml-6 text-[12px]">Viewed 5 times</span>
        </div>
      </header>
      <main class="p-6">
        <p>
          0 I know the title sounds a bit weird but I'll explain.. I want to
          build an app or website that will send data via api requests. It is an
          app to place orders in a restaurant. It should work only for users
          that are inside the restaurant. I want those api requests to be denied
          if they didn't originate from the restaurant. I don't want to force
          the users to connect to a certain wifi in order to be able to place
          orders, though it would be the easiest way. I do not want to know the
          exact location of the app user, I just want to know they are nearby
          the approved location I first thought about getting nearby cell
          towers, but it seems that is not possible and it will also reveal the
          actual location of the app user. The second thought was to install a
          wifi at the location with a unique SSID and get the list of nearby
          wifis but seems that is also not possible. Last thing is to try and
          figure out location based on IP, but I don't want that either. Right
          now, users are scanning a QR code that sends the table number as a
          parameter and will receive back an Order object for that table and
          users are redirected to a route like /order/:orderUniqueId.. This way,
          if they come back later to this order it would be already closed.. But
          they can access the current opened table if they have the QR code.
        </p>
      </main>
      <footer>
        <el-tag class="ml-2">Python</el-tag>
        <el-tag class="ml-2">Python</el-tag>
        <el-tag class="ml-2">Python</el-tag>
      </footer>
    </div>
    <div class="right w-[450px] h-[500px] pr-[150px]">
      <aside class="w-[300px] h-[500px] border border-black"></aside>
    </div>
  </div>
</template>

<script setup>
import {} from "vue"
</script>
<style scoped></style>
