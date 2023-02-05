<script setup lang="ts">
import { ref } from 'vue';
import { useGamesStore } from '@/stores/games';
import BaseModal from '@/components/BaseModal.vue';
import BaseButton from '@/components/BaseButton.vue';

const modal = ref<InstanceType<typeof BaseModal> | null>(null);
function playDemo(gameId: number) {
  games.gameId(gameId);
  modal.value!.open();
}
const games = useGamesStore();
games.listGames()
</script>

<template>
  <div class="games">
    <div class="games__item" v-for="game in games.games">
      <img class="games__img" :src="game.image" />
      <p class="games__text">{{ game.title }}</p>
      <BaseButton class="games__button" @click="playDemo(game.id)">Play Demo</BaseButton>
    </div>
  </div>
  <BaseModal ref="modal">
    <iframe class="w-full h-full" :src="games.urlGame"></iframe>
  </BaseModal>
</template>

<style scoped>
.games {
  @apply grid grid-cols-2 gap-4 lg:grid-cols-4;
}

.games__item {
  @apply flex flex-col items-center rounded-md border-2 overflow-hidden;
}

.games__text {
  @apply text-lg text-center mt-auto;
}

.games__button {
  @apply mb-3;
}

.games__img {
  @apply w-full;
}
</style>