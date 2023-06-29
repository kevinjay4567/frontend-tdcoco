import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuth = defineStore(
  'auth',
  () => {
    const token = ref('')
    const user = ref({})

    async function login(email: string, password: string) {
      await axios
        .post('http://localhost:8080/api/login', {
          email: email,
          password: password
        })
        .then((res) => {
          token.value = res.data.data.token
        })
    }

    async function logout() {
      await axios
        .post(
          'http://localhost:8080/api/logout',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.value}`
            }
          }
        )
        .then((res) => {
          console.log(res.data)
        })

      localStorage.clear()
      token.value = ''
    }

    async function register(email: string, password: string, name: string, phone: string) {
      await axios
        .post('http://localhost:8080/api/register', {
          name: name,
          phone: Number(phone),
          nacionalidad: 'Colombia',
          email: email,
          password: password
        })
        .then((res) => {
          console.log(res.data)
        })
    }

    async function profile() {
      await axios
        .get('http://localhost:8080/api/profile', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`
          }
        })
        .then((res) => {
          user.value = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return { token, login, logout, profile, user, register }
  },
  {
    persist: {
      paths: ['token']
    }
  }
)
