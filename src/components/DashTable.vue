<script setup lang="ts">
import { useCourse } from '@/stores/course'
import { onMounted, ref } from 'vue'

const store = useCourse()
const courses = ref()

onMounted(async () => {
  await store.getAll()
  courses.value = store.courses
})
</script>
<template>
  <div class="relative overflow-x-auto rounded-md">
    <table class="w-full text-sm text-left text-white">
      <thead class="text-xs uppercase bg-[#404040]">
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Aprobado</th>
          <th scope="col" class="px-6 py-3">Creditos</th>
          <th scope="col" class="px-6 py-3">Tipo</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-[#363636] border-b border-gray-600" v-for="course in courses">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ course.name }}
          </th>
          <td class="px-6 py-4 text-center" v-if="course.aprobe">✅</td>
          <td class="px-6 py-4 text-center" v-else></td>
          <td class="px-6 py-4 text-center">{{ course.credits }}</td>
          <td class="px-6 py-4">Disciplinar optativa</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
