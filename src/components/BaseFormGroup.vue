<script setup lang="ts">
defineProps<{
  text: string;
}>()
</script>

<template>
  <div class="form-group">
    <label v-bind="$attrs" class="form-group__label">{{ text }}</label>
    <slot></slot>
  </div>
</template>

<style scoped>
.form-group {
  @apply mb-3;
}

.form-group__label {
  @apply inline-block mb-2 text-gray-700;
}
</style>