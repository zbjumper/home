<template>
  <div class="h-60 center">hello {{ foo }}</div>
</template>

<script setup>

const props = defineProps(['foo'])

console.log(props.foo)
</script>