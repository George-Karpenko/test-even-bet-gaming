<script setup lang="ts">
import type { ApiErrorAuth } from '@/types';

defineProps<{
  errors: ApiErrorAuth[];
}>()
</script>

<template>
  <div v-if="errors?.length" class="errors">
    <ul>
      <li v-for="error in errors">
        {{ error.detail }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.errors {
  @apply border border-red-900 bg-red-400 rounded-lg px-2.5;
}
</style>