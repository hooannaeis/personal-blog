<template>
  <div class="bg-gray-900 text-gray-50 p-2 flex gap-2">
    <tag-icon class="fill-gray-50"></tag-icon>
    <span>
      {{ tagName }}
    </span>
  </div>
</template>
<script>
import TagIcon from "./creatives/TagIcon.vue";

export default {
  components: { TagIcon },
  props: {
    tagName: { default: "default-tag", type: String },
  },
};
</script>
