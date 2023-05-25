<script setup lang="ts">
import Tariff from '../pages/Tariff.vue';
import NotFound from '../pages/NotFound.vue';
import { type Component, computed, ref } from 'vue';
import Home from '../pages/Home.vue';
import Forbidden from '../pages/Forbidden.vue';

defineProps({
  auth: {
    type: Boolean,
    required: true,
  }
})

const routes: Record<string, Component> = {
  '/': Home,
  '/tariff': Tariff
}

const currentPath = ref(window.location.pathname)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.pathname
})

const currentView = computed(() => {
  return routes[currentPath.value || '/'] || NotFound
})

</script>

<template>
    <component v-if="auth" :is="currentView" />
    <component v-else :is="Forbidden" />
</template>