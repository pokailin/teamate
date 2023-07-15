<script setup lang="ts">
const props = defineProps<{
  imgUrl: string;
  description: string;
  subtitle: string;
}>();

const emit = defineEmits<{
  (event: "rightClick"): void;
  (event: "leftClick"): void;
}>();

const handleLeftClick = () => {
  emit("leftClick");
};

const handleRightClick = () => {
  emit("rightClick");
};
</script>

<template>
  <section class="dark:text-white">
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
          class="hover:bg-primary/10 transition-colors duration-300 rounded-full p-3"
        >
          <Icon
            name="ph:plus-bold"
            class="text-6xl aspect-square rotate-0 hover:rotate-180 transition duration-500 hover:scale-125"
          />
        </button>
      </div>
    </div>
    <div class="article-nav-section article-section w-full flex">
      <button type="button" @click="handleLeftClick">
        <Icon name="ph:arrow-bend-double-up-left-thin" class="text-6xl" />
      </button>
      <button type="button" @click="handleRightClick">
        <Icon name="ph:arrow-bend-double-up-right-thin" class="text-6xl" />
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  @apply grid h-full absolute left-0 top-0;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;

  .article-section {
    height: 100%;
    width: 100%;
  }

  .article-nav-section {
    button {
      @apply flex-1;

      &:nth-child(1) {
        @apply border-r border-onSurface/10 dark:border-surface/10;
      }

      &:hover {
        @apply bg-primary/5;
      }
    }
  }

  .article-description-section,
  .article-nav-section {
    @apply border-l border-onSurface/10 dark:border-surface/10;
  }

  .article-title-section,
  .article-nav-section {
    @apply border-t border-onSurface/10 dark:border-surface/10;
  }

  .article-image-section {
    background-position: center;
    background-size: cover;
  }
}
</style>
