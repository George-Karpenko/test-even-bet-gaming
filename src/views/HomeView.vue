<script setup lang="ts">
import TheGames from '@/components/TheGames.vue';
import TheAside from '@/components/TheAside.vue';
import { onBeforeUnmount } from 'vue';
import AuthService from '@/services/auth.service';

let timerUpdateAuth = setInterval(() => AuthService.updateAuth(), 800 * 1000);

onBeforeUnmount(() => {
  clearInterval(timerUpdateAuth);
})
</script>

<template>
  <div class="wrapper">
    <TheAside class="aside" />
    <main>
      <TheGames />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  @apply grid grid-cols-4 gap-3;
}

.aside {
  @apply col-span-4 lg:col-span-1;
}

main {
  @apply col-span-4 lg:col-span-3;
}
</style>