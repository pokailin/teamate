<template>
  <nav class="flex items-center">
    <div id="nav-logo-section" class="nav-section">
      <NuxtLink to="/">
        <Icon name="ph:leaf-fill" class="text-green-500 text-3xl" />
        <span class="ml-2">TEA MATE</span>
      </NuxtLink>
    </div>

    <div id="nav-link-section" class="nav-section">
      <NuxtLink to="/about">ABOUT</NuxtLink>

      <NuxtLink to="/shop">SHOP</NuxtLink>
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
  border-bottom: 1px solid var(--border-color);

  .nav-section {
    @apply flex gap-8 items-center justify-center;
    padding: 3rem 2rem;
    border-left: 1px solid var(--border-color);

    a {
      color: black;
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
