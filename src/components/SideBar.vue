<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="bg-red-700 h-full">
    <ul class="h-full list-none flex flex-col gap-1 justify-center">
      <li class="p-4 border-b-black border-2">
        <RouterLink to="/info">Informacion financiera</RouterLink>
      </li>
      <li class="p-4 border-b-black border-2">
        <RouterLink to="/">Historia academica</RouterLink>
      </li>
      <li class="p-4 border-b-black border-2">Informacion personal</li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  color: white;
}
</style>
