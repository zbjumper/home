<template>
  <div>
    <div class="max-w-xl">
      <template v-for="{ title, more } in sections" :key="title" :value="title">
        <nuxt-link :to="more.link">
          <SectionCard :title="title" :more="more"></SectionCard>
        </nuxt-link>
        <!-- <nuxt-link :to="link">{{text}}</nuxt-link> -->
      </template>
    </div>

    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script lang="ts" setup>
const sections = [
  {
    title: "AI 学习",
    more: {
      text: "学习 AI 的知识",
      link: "/ai-learning/",
    },
  },
  {
    title: "技术",
    more: {
      text: "技术类汇总",
      link: "/technolopy/",
    },
  },
];
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .max-w-xl {
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
