<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

</script>

<template>
  <v-app class="rounded rounded-md v-layout--full-width">
    <v-app-bar color="blue-grey">
      <v-container fluid class="d-flex ga-6">
        <v-row>
          <v-col class="flex-grow-0">
            <img src="/logos/gits_transparent_256.png" class="logo" />
          </v-col>
          <v-col>
            <p class="brand">Guy In The Shell</p>
          </v-col>
          <v-col>
            <RouterLink :to="{ name: 'root' }">Main</RouterLink>
          </v-col>
          <v-col>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-app-bar color="blue-grey" location="bottom">
      <v-container>
        <v-row>
          <v-spacer />
          <v-col>{{ new Date().getFullYear() }} — <strong>GITS</strong></v-col>
          <v-spacer />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center ma-2">
      <RouterView></RouterView>
    </v-main>

  </v-app>
</template>

<style scoped>
.v-footer {
  max-height: 55px;
}

.logo {
  width: 70px;
  margin-left: 15px;
}

.brand {
  color: #004b73;
  font-weight: 600;
  font-size: 2.5rem;
}
</style>
