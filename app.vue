<script setup lang="ts">
// const isDarkMode = useDarkMode();
</script>

<template>
  <div :class="{ dark: false }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
