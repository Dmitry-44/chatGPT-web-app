<script setup lang="ts">
import ProfileCard from "./components/ProfileCard.vue"

const tg = window.Telegram.WebApp

const user = tg.initDataUnsafe.user

const pay = () => {
  const data = 'pay'
  tg.sendData(JSON.stringify(data));
}

</script>

<template>
  <header class="header"></header>
  <div class="body">
    <div class="container">
      <ProfileCard />
    </div>
  </div>
  <!-- <footer></footer> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <h1>Hello, {{ user?.username || 'my dear' }}!</h1>
  <h3 v-if="user?.id">your id is: {{ user?.id }}</h3>
  <h5>sereja pid0r</h5>
  <button @click="pay">pay</button> -->
</template>

<style scoped>
.container {
  padding: 1rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
