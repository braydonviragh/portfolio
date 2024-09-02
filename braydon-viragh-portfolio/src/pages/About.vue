<template>
  <div class="full-width flex flex-center">
    <q-card
        flat
        bordered
        class="bg-transparent text-white full-width q-pa-md"
        >
      <q-card-section>
        <div class="text-h3 text-center q-mb-md">About Me</div>
        
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
          class="bg-transparent text-white shadow-1 rounded-borders full-width carousel-container p-0 md:p-5"
        >
          <q-carousel-slide :name="1" class="column no-wrap flex-center p-0 md:p-5">
            <div class="text-h5 q-mb-md">Tech Enthusiast</div>
            <p class="text-body1 q-mb-lg text-center">
              Since childhood, I've been fascinated by computers and technology. I was always the first to tinker, break things apart, and reassemble them. This curiosity has led me to a career in software development. There's always something new to learn and discover.
            </p>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap flex-center p-0 md:p-5">
            <div class="text-h5 q-mb-md">Solution Oriented</div>
            <p class="text-body1 q-mb-lg text-center">
              I have a solutions-oriented work ethic that drives me to always find answers. If I don't have a solution immediately, you can bet I'm working on one, and will update you as I make progress.
            </p>
          </q-carousel-slide>
        </q-carousel>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1)
</script>

<style scoped>
.full-width {
  width: 100%;
}

.carousel-container {
  padding: 0 !important;
  margin: 0 !important;
}

.q-carousel__navigation {
  top: auto !important;
  bottom: 16px !important;
}

@media (max-width: 767px) {
  .q-carousel {
    height: 400px !important;
  }

  .q-carousel__slide {
    padding: 16px !important;
  }
}

@media (min-width: 768px) {
  .q-carousel__slide {
    padding: 0 16px;
  }
}
</style>
