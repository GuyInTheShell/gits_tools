<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onUpdated, ref } from 'vue'
import type { Component } from "vue"
import draggable from 'vuedraggable'

import ToBase64 from './transformers/ToBase64.vue'

const components: Component[] = [ToBase64]
</script>

<template>
  <draggable v-model="components" :group="{ name: 'transformers', put: false, pull: 'clone' }">
    <template #item="{ element, index: idx }">
      <component class="trans" :is="element" :key="idx" />
    </template>
  </draggable>
</template>

<style scoped>
.trans {
  border-style: inset;
  border-width: 1px;
}
</style>
