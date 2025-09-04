import { defineStore } from 'pinia'
import { computed, readonly, ref, type Ref } from 'vue'

export interface Authority {
  token: string
  expiredTimeStamp: number
}

export const useAuthorityStore = defineStore('authority', () => {
  const authority: Ref<Authority | undefined> = ref(undefined)
  const isAuthenticated = computed(() => !!authority.value)

  function signin(v: Authority) {
    authority.value = v
  }
  function signout() {
    authority.value = undefined
  }
  return { authority: readonly(authority), isAuthenticated, signin, signout }
})
