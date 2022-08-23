<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply h-full;
}

#app {
  @apply font-main p-8 grid items-center justify-center;

  background-image: url("/bg-image.jpg");
  background-size: cover;
}
</style>
