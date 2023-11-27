<template>
  <div>
    <div class="max-w-xl">
      <template v-for="(link, text) in links" :key="text" :value="link">
        <!-- <SectionCard title="hello" ></SectionCard> -->
        <nuxt-link :to="link">{{text}}</nuxt-link>
      </template>
    </div>

    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const foo = "bar1";

const sections = [
  {
    title: 'hello',
    more: {
      text: 'more',
      link: '/hello'
    }
  }
]

const links = {'Amount' : '/ai-learning', 'Contact' : '/contact'}
</script>
