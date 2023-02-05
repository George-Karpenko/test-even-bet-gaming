<script setup lang="ts">
defineProps<{
  modelValue: string;
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <input @input="updateInput" class="input" />
</template>

<style scoped>
.input {
  @apply appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-3 ring-1 ring-slate-200 shadow-sm;
}
</style>