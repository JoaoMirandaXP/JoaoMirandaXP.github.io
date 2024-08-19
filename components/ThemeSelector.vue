<script setup lang="ts">
const route =  useRoute()
const colorMode = useColorMode()
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>
<template>
  <button @click="changeColor">
    <div v-if="colorMode.value === 'light'">
      <LightIcon />
    </div>
    <div v-if="colorMode.value === 'dark'">
      <DarkIcon />
    </div>
  </button>
</template>
