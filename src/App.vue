<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref } from "vue";
import Loader from "./components/Loader.vue";
import Router from "./components/Router.vue";
import { Tg } from "./main";
import { fetchUser } from "./useUser";

const loading = ref(true)
const auth: Ref<boolean> = ref(false)

onBeforeMount(async()=>{  
  const userId: number|undefined = Tg.initDataUnsafe?.user?.id
  auth.value = import.meta.env.DEV ?? Boolean(userId)
  if(!auth.value){
    loading.value=false
    return;
  } else {
    fetchUser().finally(()=>{loading.value=false})
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
