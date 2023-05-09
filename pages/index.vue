<template>
  <div class="flex flex-col h-screen overflow-hidden">
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

    <main class="flex-grow">
      <article>
        <div class="article-image-section article-section"></div>
        <div class="article-description-section article-section"></div>
        <div class="article-title-section article-section"></div>
        <div class="article-nav-section article-section"></div>
      </article>
      <article></article>
      <article></article>
      <article></article>
    </main>
  </div>
</template>

<style scoped lang="scss">
div {
  // --background-color: rgb(6, 11, 25);
  --background-color: rgb(226, 237, 227);
  --border-color: rgba(25, 124, 47, 0.1);

  background-color: var(--background-color);

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

  article {
    @apply grid h-full;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;

    .article-section {
      height: 100%;
    }

    .article-description-section,
    .article-nav-section {
      border-left: 1px solid var(--border-color);
    }

    .article-title-section,
    .article-nav-section {
      border-top: 1px solid var(--border-color);
    }
  }
}
</style>
