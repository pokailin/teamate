<script setup lang="ts">
import articles from "@/assets/data/articles";

const currentIndex = ref(0);
const buttonClicked = ref<"left" | "right">("left");

const decrementIndex = () => {
  buttonClicked.value = "left";
  const tempInd = currentIndex.value;

  setTimeout(() => {
    currentIndex.value = tempInd === 0 ? articles.length - 1 : tempInd - 1;
  }, 100);
};

const incrementIndex = () => {
  buttonClicked.value = "right";
  const tempInd = currentIndex.value;

  setTimeout(() => {
    currentIndex.value = tempInd === articles.length - 1 ? 0 : tempInd + 1;
  }, 100);
};

const currentStatus = (index: number) => {
  const endIndex = articles.length - 1;

  if (currentIndex.value === 0 && index === endIndex) {
    return "after";
  }

  if (currentIndex.value === endIndex && index == 0) {
    return "before";
  }

  if (index === currentIndex.value + 1) {
    return "before";
  }

  if (index === currentIndex.value - 1) {
    return "after";
  }

  return currentIndex.value === index ? "active" : "inactive";
};
</script>

<template>
  <main class="flex-grow relative">
    <HomeArticle
      v-for="(article, index) of articles"
      :key="index"
      class="transition-all duration-500"
      :class="{
        '-translate-x-full transition-none':
          buttonClicked === 'left' && currentStatus(index) === 'after',
        '-translate-x-full': currentStatus(index) === 'after',
        'translate-x-full transition-none':
          buttonClicked === 'right' && currentStatus(index) === 'before',
        'translate-x-full': currentStatus(index) === 'before',
        '-z-10 transition-none': currentStatus(index) === 'inactive',
      }"
      :description="article.description"
      :img-url="article.imgUrl"
      :subtitle="article.subtitle"
      @left-click="decrementIndex"
      @right-click="incrementIndex"
    />
  </main>
</template>
