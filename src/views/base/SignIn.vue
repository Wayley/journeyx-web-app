<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function signin() {
  const path = (route.query.from || '/') as string
  router.replace({ path })
}
</script>

<template>
  <div @click="signin">Sign In</div>
</template>

<style scoped></style>
