<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.ts'
import { storeToRefs } from 'pinia'

const { theme } = storeToRefs(useThemeStore())
</script>

<template>
  <van-config-provider :theme="theme">
    <RouterView />
  </van-config-provider>
</template>

<style scoped></style>
