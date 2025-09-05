<script setup lang="ts">
import { useThemeStore, type Theme } from '@/stores/theme.ts'
import { ref } from 'vue'

const themeStore = useThemeStore()

/* ********************** Theme ********************** */
const themeActionShow = ref(false)
interface ThemeOption {
  name: string
  theme: Theme
}
const actions: ThemeOption[] = [
  { name: '普通模式', theme: 'light' },
  { name: '深色模式', theme: 'dark' },
]
</script>

<template>
  <van-cell-group>
    <van-cell title="个人信息" is-link to="/user/profile" icon="manager-o" />
    <van-cell title="账号安全" is-link icon="shield-o" />

    <van-cell
      title="深色模式"
      icon="shop-o"
      is-link
      :value="themeStore.isDark ? '已开启' : '已关闭'"
      @click="themeActionShow = true"
    />
  </van-cell-group>

  <van-action-sheet
    v-model:show="themeActionShow"
    :actions="actions"
    cancel-text="取消"
    close-on-click-action
    @select="(e: ThemeOption) => themeStore.toggleTheme(e.theme)"
  />
</template>

<style scoped></style>
