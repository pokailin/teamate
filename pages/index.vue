<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Nav />
    <main class="flex-grow">
      <HomeArticle
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure
        quaerat rem odit aliquam autem! Earum mollitia et beatae illo debitis
        quam quis ducimus praesentium?"
        img-url="https://images.unsplash.com/photo-1624262536362-12cbb4965721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        subtitle="Come Visit Our Store"
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
}
</style>
