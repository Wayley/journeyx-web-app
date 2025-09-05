import { computed, readonly, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('THEME', () => {
  const theme: Ref<Theme> = ref('light')
  const isDark = computed(() => theme.value == 'dark')

  function toggleTheme(v: Theme) {
    theme.value = v
  }

  // return { theme, isDark: readonly(isDark), toggleTheme }
  return { theme: readonly(theme), isDark: readonly(isDark), toggleTheme }
})
