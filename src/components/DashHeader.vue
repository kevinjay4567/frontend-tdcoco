<script setup lang="ts">
import IconUser from './icons/IconUser.vue'
defineProps<{
  title: String
}>()
</script>
<template>
  <div class="flex justify-between pl-[43%] pr-5 pt-3 items-center">
    <h1 class="text-xl">{{ title }}</h1>
    <span class="bg-red-600 rounded-full p-1.5">
      <IconUser />
    </span>
  </div>
</template>
