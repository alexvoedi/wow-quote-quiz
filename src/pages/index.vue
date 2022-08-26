<script setup lang="ts"></script>

<template>
  <div class="space-y-12">
    <div>
      <h1 class="text-primary font-bold text-8xl text-shadow-xl">
        World of Warcraft
      </h1>

      <h2 class="text-white font-bold text-4xl text-center text-shadow-xl">
        Quote Quiz
      </h2>
    </div>

    <div
      class="bg-black text-lg bg-opacity-75 text-white p-8 backdrop-filter backdrop-saturate-0"
    >
      <div>Wie gut kennst du dich aus? Man weiß es nicht...</div>

      <div>
        <router-link :to="{ name: 'text-quiz' }">Text-Quiz</router-link>
      </div>

      <div>
        <router-link :to="{ name: 'audio-quiz' }">Audio-Quiz</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
