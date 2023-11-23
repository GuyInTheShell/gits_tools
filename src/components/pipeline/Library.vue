<script setup lang="ts">
import type { Component } from "vue"
import draggable from 'vuedraggable'

import ToBase64 from './transformers/ToBase64.vue'
import FromBase64 from './transformers/FromBase64.vue'
import ToHex from './transformers/ToHex.vue'
import FromHex from './transformers/FromHex.vue'

const components: Component[] = [ToBase64, FromBase64, ToHex, FromHex]
</script>

<template>
  <draggable v-model="components" :group="{ name: 'transformers', put: false, pull: 'clone' }" item-key="id">
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
