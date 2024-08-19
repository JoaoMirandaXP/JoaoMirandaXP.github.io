<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="
	min-h-screen
	mx-auto
	bg-light
	dark:bg-dark
  grid grid-rows-auto
	">
	<!--Adicionar a opção de retornar para a página anterior (Muito útil em mobile) + Compartilhar Postagem -->
	<AppHeader />
	<AppMain/>
	<AppFooter />

  </div>
</template>
