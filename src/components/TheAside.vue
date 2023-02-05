<script setup lang="ts">
import TheBalances from "../components/TheBalances.vue";
import TheUser from "@/components/TheUser.vue";
</script>

<template>
  <aside>
    <div class="wrapper-aside">
      <TheUser />
      <TheBalances class="balance-list" />
    </div>
  </aside>
</template>

<style scoped>
.wrapper-aside {
  @apply lg:sticky top-3;
}
.balance-list {
  @apply flex lg:flex-col flex-wrap justify-center gap-2 mb-3;
}
</style>
