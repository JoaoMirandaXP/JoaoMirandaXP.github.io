<script setup lang="ts">
const route = useRoute()
useHead({
	title: 'Posts'
})
</script>
<template>
  <div class="
  grid grid-rows-auto
	mx-auto
	bg-light
	dark:bg-dark
	">
	<AppHeader />
	<PostItem />
	<AppFooter />
	</div>
</template>
