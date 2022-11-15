import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {

    state: () => ({
        user: null,
        token: null,
    }),

    getters: {
        isAuthenticated() {
            return !!this.user
        }
    },

    actions: {

        async login(username, password) {
            const response = await fetch(`http://localhost:4000/login?username=${username}&password=${password}`, {
                method: 'get'
            })
            const data = await response.json()
            if (data.status === 200) {
                this.user = data.user
                this.token = data.accessToken
            }
            console.log(this.user)
        },

        async register(username, password) {
            const response = await fetch(`http://localhost:4000/register?username=${username}&password=${password}`, {
                method: 'get'
            })
            const data = await response.json()
            if (data.status === 200) {
                this.user = data.user
                this.token = data.accessToken
            }
            console.log(data, this.user, this.token)
        },

        async logout() {
            this.user = null
            this.token = null
        }

    },
})