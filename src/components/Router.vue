<script setup lang="ts">
import Guide from '../pages/Guide.vue';
import NotFound from '../pages/NotFound.vue';
import { type Component, computed, ref } from 'vue';
import Home from '../pages/Home.vue';

const routes: Record<string, Component> = {
  '/': Home,
  '/guide': Guide
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
    <component :is="currentView" />
</template>