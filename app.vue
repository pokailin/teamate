<script setup lang="ts">
import { useDarkMode } from "composables/darkMode";

const isDarkMode = useDarkMode();
</script>

<template>
  <div :class="{ dark: isDarkMode }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
