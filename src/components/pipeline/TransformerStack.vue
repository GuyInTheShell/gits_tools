<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onUpdated, ref } from 'vue'
import type { Component } from "vue";

var stepValues = ref<any[]>([])

const props = defineProps<{
  input: string               // The input value to be converted through the chain
  components: Component[]     // The chain of transformation to apply to the input
}>()

const emit = defineEmits<{
  done: [value: string]
}>()

onBeforeUpdate(() => {
  stepValues.value[0] = props.input
})

onBeforeMount(() => {
  stepValues.value.push(props.input)
  for (let i = 0; i < props.components.length - 1; i++) {
    stepValues.value.push("")
  }
  console.log(props.components.length)
})

onUpdated(() => {
  emit('done', stepValues.value[stepValues.value.length - 1])
})

</script>

<template>
  <div class="stack">
    <component class="trans" v-for="idx in props.components.length + 1" :is="props.components[idx - 1]"
      :input="stepValues[idx - 1]" @value-change="(value: any) => stepValues[idx] = value" :key="idx" />
    <div> {{ stepValues }} </div>
    <div hidden> foo </div>
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
}

.trans {
  border-style: inset;
  border-width: 1px;
}
</style>
