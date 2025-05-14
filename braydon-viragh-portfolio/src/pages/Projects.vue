<template>
  <div class="page-content">
    <q-card
        flat
        bordered
        class="bg-transparent text-white full-width"
    >
      <q-card-section>
        <div class="text-h3 text-center q-mb-lg">Projects</div>
        <ProjectCarousel 
          :projects="projects"
          :showTitle="false"
        />
      </q-card-section>
    </q-card>
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
  height: calc(100vh - 200px);
  min-height: 400px;
  max-height: 700px;
}

.q-carousel__navigation {
  top: auto !important;
  bottom: 16px !important;
}

@media (max-width: 767px) {
  .carousel-container {
    height: calc(100vh - 150px);
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

.project-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card .q-img {
  height: 250px;
}

.project-card .absolute-bottom {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
}

.tech-chip {
  font-size: 0.7rem;
}

.project-modal {
  border-radius: 8px;
}
</style>
