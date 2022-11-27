<script setup>
const { data: articles } = await useAsyncData("equal", () => {
  const articles = queryContent("blog")
    // .only(["title", "description", "tags", "createdAt", "description"])
    .find();
  return articles;
});
</script>

<template>
  <ul
    class="grid gap-5 grid-cols-1 grid-flow-row p-1 md:p-3 lg:p-5 bg-gray-900"
  >
    <li
      v-for="article in articles"
      :key="article"
      class="w-full justify-center flex"
    >
      <article-card
        :createdAt="article.createdAt"
        :title="article.title"
        :description="article.excerpt.children[1].children[0].value"
        :tags="article.tags"
        :path="article._path"
      ></article-card>
    </li>
  </ul>
</template>
<script>
import ArticleCard from "~~/components/ArticleCard.vue";

export default {
  components: { ArticleCard },
};
</script>
