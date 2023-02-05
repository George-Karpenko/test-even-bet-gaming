<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  @apply bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg;
}
</style>