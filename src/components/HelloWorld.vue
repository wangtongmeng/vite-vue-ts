<script setup lang="ts">
import { ref } from "vue"
import logoUrl from "../assets/logo.png"
const count = ref(0)

defineProps<{ msg: string }>()
</script>
<template>
  <h1>{{ msg }}</h1>
  <img :src="logoUrl" />
  <div>
    <button type="button">count is: {{ count }}</button>
  </div>
</template>
