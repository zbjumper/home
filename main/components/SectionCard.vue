<!-- 板块卡片 -->

<template>
  <div class="section-card">
    <div class="section-card__header">
      <div class="section-card__title">{{ title }}</div>
      <div class="section-card__more" v-if="more">
        <router-link :to="more.link">{{ more.text }}</router-link>
      </div>
    </div>
    <div class="section-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  more: Object
})
</script>