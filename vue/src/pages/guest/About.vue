<script setup lang="ts">
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1)
</script>

<template>
  <div class="about">
    <h1>About Us</h1>
    <p>Welcome to our website. We are committed to providing the best service for our customers.</p>
  </div>

  <ul>
    <li v-for="value in numbers" :key="value" class="my-2">{{ value }}</li>
  </ul>
</template>

<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    text-align: center;
    max-width: 600px;
  }
</style>
