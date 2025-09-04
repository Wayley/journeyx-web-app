import { defineStore } from 'pinia'
import { computed, readonly } from 'vue'
import { useStorage } from '@vueuse/core'

export interface Authority {
  token: string
  expiredTimeStamp: number
}

const KEY = 'AUTHORITY'
export const useAuthorityStore = defineStore(KEY, () => {
  const authority = useStorage<Authority | undefined>(KEY, undefined)
  const isAuthenticated = computed(() => !!authority.value)

  function signin(v: Authority) {
    authority.value = v
  }
  function signout() {
    authority.value = undefined
  }
  return { authority: readonly(authority), isAuthenticated, signin, signout }
})
