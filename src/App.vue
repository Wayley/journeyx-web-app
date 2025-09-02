<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { showToast } from 'vant'
</script>

<template>
  <header>
    <div class="wrapper">
      <van-button @click="showToast('hello')">Toast</van-button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
