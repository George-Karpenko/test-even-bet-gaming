<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseFormGroup from '@/components/BaseFormGroup.vue';
import BaseFormInput from '@/components/BaseFormInput.vue';
import TheAuthErrors from '@/components/TheAuthErrors.vue';
import { useUserStore } from '@/stores/user';
import type { ApiErrorAuth } from '@/types';
import { reactive, ref } from 'vue';

const user = useUserStore();

const errors = ref<ApiErrorAuth[]>([]);
const authorization = reactive({
  login: '',
  password: ''
});

async function onSubmit() {
  errors.value = await user.login(authorization);
}
</script>

<template>
  <main>
    <TheAuthErrors :errors="errors" />
    <h1>Авторизация</h1>
    <BaseForm @submit.stop.prevent="onSubmit">
      <BaseFormGroup for="login" text="login">
        <BaseFormInput v-model="authorization.login" id="login" type="text" placeholder="enter your username" />
      </BaseFormGroup>
      <BaseFormGroup for="password" text="password">
        <BaseFormInput v-model="authorization.password" id="password" type="password" placeholder="enter your password" />
      </BaseFormGroup>
      <BaseButton>Вход</BaseButton>
    </BaseForm>
  </main>
</template>
