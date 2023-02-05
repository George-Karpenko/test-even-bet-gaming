<script setup lang="ts">
defineProps<{
  balance: any;
}>()
</script>

<template>
  <div class="balance">
    <span class="balance__currency">{{ balance.currency }}</span>
    <p>
      Available: {{ balance.available }}
    </p>
    <p>
      Bonus: {{ balance.bonus }}
    </p>
    <p>
      In play: {{ balance.inPlay }}
    </p>
  </div>
</template>

<style scoped>
.balance {
  @apply relative rounded border-2 border-slate-400 mt-5 p-5;
}

.balance__currency {
  @apply absolute top-0 left-2 -translate-y-1/2 text-lg px-2.5;
  background-color: var(--color-background);
}
</style>
