<script setup lang="ts"></script>

<template>
  <div>
    <div class="item" v-for="i in 10" :key="i" @click="$router.push({ path: `/galleries/${i}` })">
      Gallery {{ i }}
    </div>
  </div>
</template>

<style scoped>
.item {
  border: 1px dashed #ccc;
  margin-bottom: 5px;
}
</style>
