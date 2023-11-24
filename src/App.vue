<script setup lang="ts">
import Pipeline from './components/pipeline/Pipeline.vue'

</script>

<template>
  <v-app class="rounded rounded-md v-layout--full-width">
    <v-app-bar color="blue-grey">
      <div id="app-bar">
        <div>
          <img src="/logos/gits_transparent_256.png" class="logo" />
        </div>
        <div id="brand">
          <p>Guy In The Shell</p>
        </div>
      </div>
    </v-app-bar>

    <v-app-bar color="blue-grey" location="bottom">
      <v-container>
        <v-row>
          <v-spacer />
          <v-column>{{ new Date().getFullYear() }} — <strong>GITS</strong></v-column>
          <v-spacer />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center ma-2" style="min-height: 300px;">
      <Pipeline />
    </v-main>

  </v-app>
</template>

<style scoped>
.v-footer {
  max-height: 55px;
}

img.logo {
  width: 70px;
  margin-left: 15px;
}

#app-bar {
  display: flex;
  gap: 25px;
}

#brand {
  display: flex;
  flex-direction: row;
  align-items: center;

  >p {
    color: #004b73;
    font-weight: 600;
    font-size: 24pt;
  }
}
</style>
