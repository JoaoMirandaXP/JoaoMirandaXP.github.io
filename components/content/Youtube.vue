<template>
  <iframe :src="'https://www.youtube.com/embed/'+ $props.url" title="Video do Youtube" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="mx-auto w-[80vw] lg:max-w-[64rem] my-4 aspect-video">
  </iframe>
</template>

<script setup lang="ts">
  defineProps({
    url:{
      type: String,
      default: '',
    }
  })
</script>
