<script setup lang="ts">
import quotes from "@/data/quotes.json";

const timer = ref(-1);
const audioUrl = ref();
const npc = ref();
const quote = ref();
const answers = ref<{ id: number; name: string }[]>([]);
const answer = ref();

const audio = computed(() => new Audio(audioUrl.value));

const getRandomNpc = () => {
  const npcsWithAudio = quotes.filter((npc) =>
    npc.quotes.some((quote) => quote.audio.files.de)
  );

  return npcsWithAudio[Math.floor(Math.random() * npcsWithAudio.length)];
};

const getRandomQuote = () => {
  return npc.value.quotes[Math.floor(Math.random() * npc.value.quotes.length)];
};

const runTimer = () => {
  let lastUpdate = Date.now();

  const interval = setInterval(() => {
    const delta = Date.now() - lastUpdate;
    timer.value += delta / 1000;
    lastUpdate = Date.now();

    if (answer.value) {
      clearInterval(interval);
      nextTurn();
    }
  }, 50);
};

const playAudio = () => {
  if (timer.value <= -1) {
    runTimer();
  }

  audio.value.pause();
  audio.value.currentTime = 0;
  audio.value.play();
};

const selectAnswer = (npcId: number) => {
  answer.value = npcId;
};

const nextTurn = () => {
  timer.value = -1;

  npc.value = getRandomNpc();
  quote.value = getRandomQuote();

  audioUrl.value = `./sounds/quotes/de/${npc.value.id}/${quote.value.audio.id}`;

  answers.value = [];
  answer.value = null;

  answers.value.push({
    id: npc.value.id,
    name: npc.value.name.de,
  });
};

onMounted(() => {
  nextTurn();
});
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
        :disabled="timer < 0"
        v-for="(answer, index) in answers"
        :key="index"
        @click="selectAnswer(answer.id)"
      >
        {{ answer.name }}
      </button>
    </div>
  </div>
</template>

<style></style>
