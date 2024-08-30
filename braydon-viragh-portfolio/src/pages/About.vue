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
            <div class="text-h5 q-mb-md">Foundation in Technical Curiosity</div>
            <p class="text-body1 q-mb-lg text-center">
              My journey in technology began with a natural inclination towards understanding complex systems. This early interest in computers and problem-solving laid the groundwork for my career in software development, where I continually apply analytical thinking to create innovative solutions.
            </p>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap flex-center">
            <div class="text-h5 q-mb-md">Analytical Approach to Development</div>
            <p class="text-body1 q-mb-lg text-center">
              In software development, I've found a perfect outlet for my problem-solving skills. I approach each project with an objective mindset, breaking down complex issues into manageable components. This methodical approach allows me to develop efficient, scalable solutions that address core business needs.
            </p>
          </q-carousel-slide>

          <q-carousel-slide :name="3" class="column no-wrap flex-center">
            <div class="text-h5 q-mb-md">User-Centric Solutions</div>
            <p class="text-body1 q-mb-lg text-center">
              My focus extends beyond just writing code; I'm committed to creating digital solutions that enhance user experiences. By bridging technical complexity with intuitive design, I strive to develop applications that are not only functionally robust but also user-friendly and impactful.
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
