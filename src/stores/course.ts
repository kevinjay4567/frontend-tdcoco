import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuth } from './auth'

export const useCourse = defineStore('course', () => {
  const authStore = useAuth()
  const courses = ref([])
  const noAddCourses = ref([])

  async function getAll() {
    await axios
      .get('http://localhost:8080/api/courses', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authStore.token}`
        }
      })
      .then((res) => {
        courses.value = res.data.data
      })
  }

  async function getNotAdd() {
    await axios
      .get('http://localhost:8080/api/addCourses', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authStore.token}`
        }
      })
      .then((res) => {
        noAddCourses.value = res.data.data
      })
  }

  return { courses, getAll, getNotAdd, noAddCourses }
})
