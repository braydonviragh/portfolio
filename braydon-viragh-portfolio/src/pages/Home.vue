<template>
  <div class="page-content">
    <!-- Main content with name and slogan -->
    <q-card flat bordered class="bg-transparent text-white w-full md:q-pa-md">
      <q-card-section>
        <div class="text-h2 q-mb-sm">Braydon Viragh</div>
        <div class="text-h5 q-mb-sm">Full Stack Developer <span class="text-primary">UI/UX Focused</span></div>
        <div class="mb-0 italic">
          Self-taught, self-driven, self-motivated.
          Love taking on challenges, learning new skills, and building great products.
        </div>
      </q-card-section>
    </q-card>
    
    <!-- Recent Projects Carousel -->
    <div class="mt-8">
      <ProjectCarousel 
        :projects="projects"
        height="400px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCarousel from 'components/ProjectCarousel.vue'
import { projects } from '../data/projects'
</script>

<style scoped>
.full-width {
  width: 100%;
}

.carousel-container {
  min-height: 400px;
  max-height: 600px;
}

.project-card {
  cursor: pointer;
  transition: transform 0.2s;
  height: 100%;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-modal {
  border-radius: 8px;
}

.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0.7);
}

.text-primary {
  color: var(--color-primary);
}

a.hover\:text-primary:hover {
  color: var(--color-primary);
}
</style>
