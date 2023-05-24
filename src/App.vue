<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref } from "vue";
import Loader from "./components/Loader.vue";
import Router from "./components/Router.vue";
import { Tg } from "./main";
import { Api } from "./services/Api";
import { User } from "./user.entity";
import { fetchUser } from "./useUser";

const loading = ref(true)
// const user: Ref<User|null> = ref(null)
const userId: Ref<number|null> = ref(null)
const auth: Ref<boolean> = ref(false)

onBeforeMount(async()=>{
  // Tg.expand()
  // test id 6189180632
  userId.value = Tg.initDataUnsafe?.user?.id || 6189180632
  auth.value = Boolean(userId.value)
  if(!userId.value){
    loading.value=false
    return;
  } else {
    await fetchUser().finally(()=>{loading.value=false})
  }
})


</script>

<template>
  <Loader v-if="loading"/>
  <Router :auth="auth" v-else />
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
