<script setup lang="ts"></script>

<template>
  <div>
    <div class="item" v-for="i in 10" :key="i" @click="$router.push({ path: `/discoveries/${i}` })">
      Discovery {{ i }}
    </div>
  </div>
</template>

<style scoped>
.item {
  border: 1px dashed #f0cccc;
  margin-bottom: 5px;
}
</style>
