<script setup lang="ts">
import quotes from "@/data/quotes.json";

const timer = ref(-3);

const quote = computed(() => {
  const npcsWithAudio = quotes.filter((npc) =>
    npc.quotes.some((quote) => quote.audio.files.de)
  );

  return npcsWithAudio[Math.floor(Math.random() * npcsWithAudio.length)];
});

const audio = new Audio(`/sounds/quotes/de/74505/46796`);

const npcs = computed(() => {
  const npcs = [];

  npcs.push({
    id: quote.value.id,
    name: quote.value.name.de,
  });

  return npcs;
});

const answer = ref();

const runTimer = () => {
  let lastUpdate = Date.now();

  const interval = setInterval(() => {
    const delta = Date.now() - lastUpdate;
    timer.value += delta / 1000;
    lastUpdate = Date.now();

    if (answer.value) {
      clearInterval(interval);
    }
  }, 50);
};

const playAudio = () => {
  if (timer.value === -3) {
    runTimer();
  }

  audio.pause();
  audio.currentTime = 0;
  audio.play();
};

const selectAnswer = (npcId: number) => {
  answer.value = npcId;
};
</script>

<template>
  <div
    class="bg-black text-lg bg-opacity-75 text-white p-8 backdrop-filter backdrop-saturate-0"
  >
    <div>
      {{ timer.toFixed(1) }}
    </div>
    <button @click="playAudio" class="text-8xl" hover="text-primary">
      <div class="ico-mdi-play"></div>
    </button>

    <div>
      <button
        v-for="(npc, index) in npcs"
        :key="index"
        @click="selectAnswer(npc.id)"
      >
        {{ npc.name }}
      </button>
    </div>
  </div>
</template>

<style></style>
