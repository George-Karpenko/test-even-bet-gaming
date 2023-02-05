<script setup lang="ts">
import { useBalanceStore } from '@/stores/balance';
import { onBeforeUnmount } from "vue";
import BaseBalance from './BaseBalance.vue';

const storeBalance = useBalanceStore();
storeBalance.listBalance();

let timerUpdateBalance = setInterval(() => storeBalance.listBalance(), 30 * 1000);

onBeforeUnmount(() => {
  clearInterval(timerUpdateBalance);
})
</script>

<template>
  <div>
    <BaseBalance v-for="balance in storeBalance.balances" :balance="balance" />
  </div>
</template>
