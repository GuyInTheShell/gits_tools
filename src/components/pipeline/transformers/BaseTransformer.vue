<script>
</script>
<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUpdate } from 'vue'

const props = defineProps<{
  // Component setup
  title: string
  transform: Function
  forLibrary?: boolean  // Whether this is a read only display
  // Reactive transformer
  input?: string
}>()

const emit = defineEmits<{
  valueChange: [text: string]     // broadcasts the new value of the transformer
}>()

let out = ref<string>("")

function processInput() {
  if (props.input === undefined || !props.input) {
    return
  }
  out.value = props.transform(props.input)
  emit('valueChange', out.value);
}

// Reacts to input changes which is the only prop we expect to actually change
onBeforeUpdate(() => {
  processInput()
})

onBeforeMount(() => {
  processInput()
})

function inputDisplay() {
  if (props.input && props.input.length > 10) {
    return props.input.substring(0, 10) + "..."
  } else {
    return props.input
  }
}

function outputDisplay() {
  if (out.value && out.value.length > 10) {
    return out.value.substring(0, 10) + "..."
  } else {
    return out.value
  }
}
</script>

<template>
  <v-card color="#ECE3CE">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>bin <v-icon icon="mdi-arrow-right" /> str</v-card-subtitle>
    <v-card-text class="pa-0 mt-2">
      <!-- the below section exists only if the component is used as part of the pipeline, and not in the library -->
      <div v-if="!props.forLibrary">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel>
            <v-expansion-panel-title>
              Details
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-expansion-panels variant="accordion" multiple>
                <v-expansion-panel v-if="$slots.config">
                  <v-expansion-panel-title>
                    Configuration
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <slot name="config"></slot>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    Debug
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p>Input: {{ inputDisplay() }}</p>
                    <!-- the computed property needs to be used if we want the emit it contains to be triggered -->
                    <p>Output: {{ outputDisplay() }}</p>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-expansion-panel-title {
  padding: 8px !important;
  min-height: 0px !important;
}

:deep(.v-expansion-panel-text__wrapper) {
  padding: 8px !important;
}
</style>
