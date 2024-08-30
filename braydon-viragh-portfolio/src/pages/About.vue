<template>
  <div class="full-width flex flex-center">
    <q-card
        flat
        bordered
        class="bg-transparent text-white full-width q-pa-md"
        >
      <q-card-section>
        <div class="text-h3 q-mb-md text-center">About Me</div>
        
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="300px"
          class="bg-transparent text-white shadow-1 rounded-borders full-width"
        >
          <q-carousel-slide :name="1" class="column no-wrap flex-center">
            <div class="text-h5 q-mb-md">Tech Enthusiast</div>
            <p class="text-body1 q-mb-lg text-center">
              Since childhood, I've been fascinated by computers and technology. I was always the first to tinker, break things apart, and reassemble them. This curiosity has driven my passion for software development. There's always something new to learn and upgrade.
            </p>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap flex-center">
            <div class="text-h5 q-mb-md">Solution Oriented</div>
            <p class="text-body1 q-mb-lg text-center">
              I have a solutions-oriented personality that drives me to always find answers. If I don't have a solution immediately, you can bet I'm working on one.   I thrive on challenges and view them as opportunities to innovate and improve.
            </p>
          </q-carousel-slide>

          <q-carousel-slide :name="3" class="column no-wrap flex-center">
            <div class="text-h5 q-mb-md">Simplifying Complexity</div>
            <p class="text-body1 q-mb-lg text-center">
              I love taking complex ideas and problems and transforming them into user-friendly solutions. My goal is to ensure that the end-user has a positive and seamless experience.
            </p>
          </q-carousel-slide>

          <q-carousel-slide :name="4" class="column no-wrap flex-center w-full">
            <div class="text-h5 q-mb-md">Other Hobbies</div>
            <div class="flex flex-wrap gap-2 justify-center">
              <q-chip
                v-for="hobby in hobbies"
                :key="hobby"
                icon="favorite"
                color="primary"
                text-color="white">
                {{ hobby }}
              </q-chip>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1)
const hobbies = ['Golf', 'Fitness', 'Basketball', 'Soccer', 'Video Games']
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
