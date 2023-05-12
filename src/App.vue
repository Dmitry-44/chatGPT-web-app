<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';


const tg = window.Telegram.WebApp

const user = tg.initDataUnsafe.user

const pay = () => {
  const data = 'pay'
  tg.sendData(JSON.stringify(data));
}

const api = 'https://a513-212-38-166-41.eu.ngrok.io/user '

const userData = ref({})

onBeforeMount(()=>{
  userData.value = getUser()
})

const getUser = async() => {
  const data = {
    user_id: tg.initDataUnsafe?.user?.id
  }
  console.log('data', data)
  await fetch(
    api,
    {
      method: 'POST',
      mode: 'no-cors', 
      body: JSON.stringify(data)
    }
  )
  .then(res=>res.json())
  .catch(err=>{
    console.log('fetch err: ', err)
  })
}

</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <h1>Hello, {{ user?.username || 'my dear' }}!</h1>
  <h3 v-if="user?.id">your id is: {{ user?.id }}</h3>
  <h5>sereja pid0r</h5>
  <button @click="pay">pay</button>
</template>

<style scoped>
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
