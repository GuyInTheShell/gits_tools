<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useTodoStore } from '@/stores/todo'

const store = useCounterStore()
const todoStore = useTodoStore()
</script>

<template>
  <div>
    <h1>About</h1>
    <p>{{ store.count }}</p>
    <v-btn @click="store.increment">++</v-btn>
    <p>Fetched data:</p>
    <p>{{ todoStore.todo }}</p>
  </div>
</template>

<style scoped></style>
