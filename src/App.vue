<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref } from "vue";
import Loader from "./components/Loader.vue";
import Router from "./components/Router.vue";
import { Tg } from "./main";
import { store } from "./store";
import { getUser } from "./user.service";

const loading = ref(true)
const auth: Ref<boolean> = ref(false)

onBeforeMount(async()=>{  
  const userId: number|null = Tg.initDataUnsafe?.user?.id || import.meta.env.DEV ? parseInt(import.meta.env.VITE_TEST_USER_ID, 10) : null
  auth.value = Boolean(userId)
  if(!auth.value){
    loading.value=false
    return;
  } else {
    store.setAppIsExpanded(Tg?.isExpanded)
    getUser(userId!).finally(()=>{loading.value=false})
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
