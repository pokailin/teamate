<script setup lang="ts">
import articles from '@/assets/data/articles';

const currentIndex = ref(0);

const decrementIndex = () => {
  currentIndex.value = currentIndex.value === 0 ? 3 : currentIndex.value - 1;
};

const incrementIndex = () => {
  currentIndex.value = currentIndex.value === 3 ? 0 : currentIndex.value + 1;
};
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Nav />
    <main class="flex-grow relative">
      <HomeArticle
        v-for="(article, index) of articles"
        :key="index"
        :data-index="index"
        :data-status="currentIndex === index ? 'active' : 'inactive'"
        :description="article.description"
        :img-url="article.imgUrl"
        :subtitle="article.subtitle"
        @left-click="decrementIndex"
        @right-click="incrementIndex"
      />
    </main>
  </div>
</template>

<style scoped lang="scss">
div {
  // --background-color: rgb(6, 11, 25);
  --background-color: rgb(235, 244, 236);
  --border-color: rgba(25, 124, 47, 0.1);

  background-color: var(--background-color);

  article {
    @apply transition-all duration-1000;

    &[data-status='inactive'] {
      transform: translateX(-100%);
    }
  }
}
</style>
