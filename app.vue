<script setup lang="ts">
const isDarkMode = useDarkMode();
</script>

<template>
  <div :class="{ dark: isDarkMode }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
