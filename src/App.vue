<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container bg-slate-200">
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
}
</style>
