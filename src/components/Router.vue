<script setup lang="ts">
import Tariff from '../pages/Tariff.vue';
import NotFound from '../pages/NotFound.vue';
import { type Component, computed, ref } from 'vue';
import Home from '../pages/Home.vue';

const routes: Record<string, Component> = {
  '/': Home,
  '/tariff': Tariff
}

const currentPath = ref(window.location.pathname)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.pathname
  console.log('currentPath', currentPath.value)
})

const currentView = computed(() => {
  return routes[currentPath.value || '/'] || NotFound
})

</script>

<template>
    <component :is="currentView" />
</template>