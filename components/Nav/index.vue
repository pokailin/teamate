<script setup lang="ts">
import { useDarkMode } from "composables/darkMode";

const isDarkMode = useDarkMode();
</script>

<template>
  <nav class="flex items-center dark:text-white">
    <div id="nav-logo-section" class="nav-section">
      <NuxtLink to="/">
        <Icon name="ph:leaf-fill" class="text-primary text-3xl" />
        <span class="ml-2">TEA MATE</span>
      </NuxtLink>
    </div>

    <div id="nav-link-section" class="nav-section">
      <NuxtLink to="/about">ABOUT</NuxtLink>

      <NuxtLink to="/shop">SHOP</NuxtLink>

      <button
        type="button"
        @click="() => (isDarkMode = !isDarkMode)"
        class="hover:bg-primary/10 rounded-full p-2 flex items-center justify-center"
      >
        <Icon name="ph:moon" v-if="!isDarkMode" />
        <Icon name="ph:sun" v-else />
      </button>

      <NuxtLink to="/login">LOGIN</NuxtLink>
    </div>

    <div id="nav-social-section" class="nav-section">
      <NuxtLink to="#">
        <Icon name="ph:twitter-logo-fill" />
      </NuxtLink>

      <NuxtLink to="#">
        <Icon name="ph:youtube-logo-fill" />
      </NuxtLink>

      <NuxtLink to="#">
        <Icon name="ph:instagram-logo-fill" />
      </NuxtLink>
    </div>

    <div id="nav-contact-section" class="nav-section">
      <NuxtLink to="/contact">CONTACT US</NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  @apply border-b border-onSurface/10 dark:border-surface/10;

  .nav-section {
    @apply flex gap-8 items-center justify-center border-l border-onSurface/10 dark:border-surface/10;
    padding: 3rem 2rem;

    a {
      @apply text-black dark:text-white transition-colors duration-300;
    }
  }

  #nav-logo-section {
    justify-content: flex-start;
  }

  #nav-link-section {
    @apply gap-24;
  }

  #nav-logo-section,
  #nav-link-section {
    flex-basis: calc(100% / 3);
  }

  #nav-social-section,
  #nav-contact-section {
    flex-grow: 1;
  }
}
</style>
