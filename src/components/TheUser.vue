<script setup lang="ts">
import TokenService from '@/services/token.service';
import AuthService from '@/services/auth.service';
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

const user = ref(TokenService.getUser())
</script>

<template>
  <div class="user">
    <img class="user__img" src="@/assets/user.png">
    <p class="user__text">{{ user.login }}</p>
    <BaseButton @click="AuthService.logout()">Exit</BaseButton>
  </div>
</template>

<style scoped>
.user {
  @apply flex flex-col items-center;
}

.user__text {
  @apply text-2xl;
}

.user__img {
  @apply w-24;
}
</style>