<script setup lang="ts">
import Pipeline from './components/pipeline/Pipeline.vue'

</script>

<template>
  <v-app class="rounded rounded-md v-layout--full-width">
    <v-app-bar title="GITS">
      <template #image>
        <v-img src="/logos/gits_256.png"></v-img>
      </template>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Menu"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <Pipeline />
    </v-main>

    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>GITS</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<style scoped>
.v-footer {
  max-height: 55px;
}
</style>
