<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref()
const password = ref()
const store = useAuth()
const router = useRouter()

async function show() {
  await store.login(email.value, password.value)
  router.push('/')
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form class="bg-red-500 p-5 rounded-xl" @submit.prevent="show">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input type="email" id="email" v-model="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@flowbite.com" required />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
        <input type="password" id="password" v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required />
      </div>
      <button type="submit"
        class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        Submit
      </button>
    </form>
  </div>
</template>
