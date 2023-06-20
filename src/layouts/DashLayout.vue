<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import DashHeader from '../components/DashHeader.vue'
defineProps<{
  text: String
}>()
</script>

<template>
  <div class="flex h-full">
    <SideBar />
    <div class="w-full flex flex-col">
      <div>
        <DashHeader :title="text" />
      </div>
      <div class="flex flex-col h-full justify-center items-center gap-5">
        <slot />
      </div>
    </div>
  </div>
</template>
