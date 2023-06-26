<script setup lang="ts">
import IconUser from './icons/IconUser.vue'
import { useAuth } from '@/stores/auth'
import { useRouter } from 'vue-router'

const store = useAuth()
const router = useRouter()
defineProps<{
  title: String
}>()

async function logout() {
  await store.logout()
  router.push('/login')
}
</script>
<template>
  <div class="flex justify-between pl-[43%] pr-5 pt-3 items-center">
    <h1 class="text-xl">{{ title }}</h1>
    <button :onclick="logout">Logout</button>
    <span class="bg-red-600 rounded-full p-1.5">
      <IconUser />
    </span>
  </div>
</template>
