<script lang="ts">
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
  components: { UseFocusTrap },
};
</script>

<template>
  <UseFocusTrap role="dialog" v-if="isOpen" @click.self="close" class="modal">
    <div class="modal__dialog">
      <button @click="close" class="model__close">❌</button>
      <slot class="w-full"></slot>
    </div>
  </UseFocusTrap>
</template>

<style scoped>
.modal {
  @apply fixed top-0 left-0 h-screen w-full bg-neutral-900/25 mix-blend-normal fixed;
}

.modal__dialog {
  @apply relative m-auto mt-[2vh] h-5/6 w-full max-w-[769px] rounded shadow-2xl bg-white px-7 py-6;
}

.model__close {
  @apply absolute top-1 right-1.5 cursor-pointer text-base;
}
</style>