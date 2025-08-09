<script setup lang="ts">
  const source = Array.from({ length: 100 }, (_, i) => i + 1)
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Posts</h1>
    <p>Manage your posts here.</p>

    <ul>
      <li v-for="value in source" :key="value" class="my-2">{{ value }}</li>
    </ul>
  </div>
</template>
