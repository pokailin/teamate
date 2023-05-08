<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <nav class="flex">
      <div id="nav-logo-section">
        <NuxtLink to="/">
          <Icon name="fa6-solid:dumpster-fire" />
        </NuxtLink>
      </div>

      <div id="nav-link-section">
        <NuxtLink to="/about">ABOUT</NuxtLink>

        <NuxtLink to="/shop">SHOP</NuxtLink>
      </div>

      <div id="nav-social-section">
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

      <div id="nav-contact-section">
        <NuxtLink to="/contact">CONTACT US</NuxtLink>
      </div>
    </nav>

    <main>
      <h1>Home</h1>
    </main>
  </div>
</template>

<style scoped lang="scss">
div {
  --border-color: rgb(255, 255, 255, 0.1);

  nav {
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
