import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie, {
    cookieOptions: {
      expires: new Date((new Date()).getTime() + 1*60*1000),
      maxAge: 1800,
      sameSite: 'strict',
    }
  }))
})