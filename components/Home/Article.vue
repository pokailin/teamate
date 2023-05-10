<script setup lang="ts">
const props = defineProps<{
  imgUrl: string;
  description: string;
  subtitle: string;
}>();
</script>

<template>
  <article>
    <div
      class="article-image-section article-section"
      :style="`background-image: url(${imgUrl})`"
    ></div>
    <div
      class="article-description-section article-section px-24 py-20 flex flex-col justify-end"
    >
      <p class="text-lg">
        {{ description }}
      </p>
    </div>
    <div class="article-title-section article-section px-24 py-20">
      <div class="flex justify-between h-full items-center">
        <p class="text-6xl uppercase">{{ subtitle }}</p>
        <button
          type="button"
          class="hover:bg-green-500/10 transition-colors duration-300 rounded-full p-3"
        >
          <Icon
            name="ph:plus-bold"
            class="text-6xl aspect-square rotate-0 hover:rotate-180 transition duration-500 hover:scale-125"
          />
        </button>
      </div>
    </div>
    <div class="article-nav-section article-section w-full flex">
      <button type="button" class="flex-1 border-r-2 hover:bg-emerald-100/30">
        <Icon name="ph:arrow-bend-double-up-left-thin" class="text-6xl" />
      </button>
      <button type="button" class="flex-1 hover:bg-emerald-100/30">
        <Icon name="ph:arrow-bend-double-up-right-thin" class="text-6xl" />
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
article {
  @apply grid h-full;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;

  .article-section {
    height: 100%;
    width: 100%;
  }

  .article-description-section,
  .article-nav-section {
    border-left: 1px solid var(--border-color);
  }

  .article-title-section,
  .article-nav-section {
    border-top: 1px solid var(--border-color);
  }

  .article-image-section {
    background-position: center;
    background-size: cover;
  }
}
</style>
