<script setup lang="ts">
import DashLayout from '../layouts/DashLayout.vue'
import { onMounted, ref } from 'vue'
import { useAuth } from '@/stores/auth'

const store = useAuth()
const user = ref()

onMounted(async () => {
  await store.profile()
  user.value = store.user
})
</script>
<template>
  <DashLayout text="Informacion personal">
    <ul v-if="user" class="flex flex-col gap-2 text-xl">
      <li><strong>Nombre:</strong> {{ user.name }}</li>
      <li><strong>Correo institucional:</strong> {{ user.email }}</li>
      <li><strong>Telefono:</strong> {{ user.phone }}</li>
      <li><strong>Nacionalidad:</strong> {{ user.nacionalidad }}</li>
    </ul>
  </DashLayout>
</template>
