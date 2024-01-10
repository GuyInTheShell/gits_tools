<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>About</h1>
    <p>{{ store.count }}</p>
    <v-btn @click="store.increment">++</v-btn>
  </div>
</template>

<style scoped></style>
