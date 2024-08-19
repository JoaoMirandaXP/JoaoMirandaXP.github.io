<template>
  <NuxtLayout>
    <div class="bg-light dark:bg-dark grid grid-rows-auto min-h-screen text-dark dark:text-light font-serif">
      <AppHeader />
      <div class="mx-auto text-center">
      <h1 class="text-3xl">{{err.message}}</h1>
      <p class="text-xl">Isso deveria acontecer ?</p>
      </div>
      <AppFooter />
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const err = useError();
</script>
