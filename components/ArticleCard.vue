<template>
  <div class="w-full max-w-xl bg-gray-50 p-5">
    <section class="mb-5">
      <nuxt-link :to="path">
        <h2>
          {{ title }}
        </h2>
      </nuxt-link>
      <span class="font-small italic">{{ createdAt }} </span>
    </section>
    <p>{{ description }}</p>
    <ul
      class="grid gap-5 grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
    >
      <li v-for="tagName in tags" :key="'tag-' + tagName">
        <ContentTag :tagName="tagName"></ContentTag>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "default title",
    },
    createdAt: {
      type: String,
      default: "01-01-2022",
    },
    description: {
      type: String,
      default: "words words words",
    },
    path: {
      type: String,
      default: "/",
    },
    tags: {
      type: Array,
      default: ["one", "two", "threeee", "two"],
    },
  },

};
</script>
