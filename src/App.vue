<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref } from "vue";
import Loader from "./components/Loader.vue";
import ProfileCard from "./components/ProfileCard.vue"
import Router from "./components/Router.vue";
import { Tg } from "./main";
import { Api } from "./services/Api";
import { User } from "./user.entity";

const loading = ref(true)
const user: Ref<User|null> = ref(null)

onBeforeMount(async()=>{
  loading.value=true
  const userId = Tg.initDataUnsafe?.user?.id || 6189180632
  user.value = await Api.getUser(userId).finally(()=>{loading.value=false})
})

onMounted(()=>{
  console.log('tg', Tg)
})

const api = 'https://a513-212-38-166-41.eu.ngrok.io/user '

const userData = ref({})

onBeforeMount(()=>{
  userData.value = getUser()
})

const getUser = async() => {
  const data = {
    user_id: Tg.initDataUnsafe?.user?.id
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
  <!-- <header class="header"></header>
  <div  class="body">
    <div class="container"> -->
      <Router v-if="!loading" />
    <!-- </div>
  </div> -->
  <Loader v-else/>
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
