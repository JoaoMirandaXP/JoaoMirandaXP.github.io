<script setup lang="ts">
const route = useRoute()
useHead({
	title: 'Ideias!'
})
</script>

<template>
  <div class="
	min-h-screen
  max-w-full
  mx-auto
	bg-light
  dark:bg-dark
  grid grid-rows-auto
  font-serif
	">
    <AppHeader />
    <div class="bg-light dark:bg-dark text-dark dark:text-light text-center my-[10vh]">
    <h1 class="lg:text-[7vw]
               md:text-[9vw]
               text-[11vw]
               font-semibold
               my-2">
      João
    </h1>
    <div id="descr" class="
              lg:text-[1vw]
              md:text-[2vw]
              text-[3vw]">
    <p>Aqui estão algumas ideias que estou refinando.</p>
    <p>Os tópicos podem variar entre os assuntos.</p>
    </div>
    </div>
    <AppFooter />
  </div>
</template>


