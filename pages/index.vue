<script setup lang="ts">
const currentIndex = ref(0);

const articles = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure quaerat rem odit aliquam autem! Earum mollitia et beatae illo debitis quam quis ducimus praesentium?',
    imgUrl:
      'https://images.unsplash.com/photo-1624262536362-12cbb4965721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    subtitle: 'Come Visit Our Store',
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure quaerat rem odit aliquam autem! Earum mollitia et beatae illo debitis quam quis ducimus praesentium?',
    imgUrl:
      'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    subtitle: 'Buy Tea',
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure quaerat rem odit aliquam autem! Earum mollitia et beatae illo debitis quam quis ducimus praesentium?',
    imgUrl:
      'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    subtitle: 'Sourced from clean mountains',
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure quaerat rem odit aliquam autem! Earum mollitia et beatae illo debitis quam quis ducimus praesentium?',
    imgUrl:
      'https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    subtitle: 'Tea Appliances',
  },
];

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

  article[data-status='inactive'] {
    transform: translateX(-100%);
  }
}
</style>
