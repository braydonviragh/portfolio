<template>
  <section class="min-h-screen flex flex-col justify-center bg-background text-white p-4">
    <div class="w-full md:w-[800px] mx-auto">
      <div class="h-1 w-24 bg-primary mx-auto md:mx-0" />
      <h1 class="text-3xl md:text-4xl text-center md:text-left">
        <slot name="title">Default Title</slot>
      </h1>
      <h3 class="text-lg sm:text-xl md:text-2xl text-secondary text-center md:text-left leading-snug">
        <slot name="subtitle">Default Subtitle</slot>
      </h3>
      <p class="text-sm sm:text-base md:text-lg mb-8 text-center md:text-left leading-relaxed">
        <slot name="content">Default content goes here.</slot>
      </p>
      <div class="w-full text-center md:text-left space-y-4">
        <slot name="additional-content" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props or additional logic needed
</script>