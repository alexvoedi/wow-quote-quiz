<script setup lang="ts">
import quotes from "@/data/quotes.json";

const game = ref({
  started: false,
});
</script>

<template>
  <div>
    {{ quotes }}
  </div>
</template>

<style></style>
