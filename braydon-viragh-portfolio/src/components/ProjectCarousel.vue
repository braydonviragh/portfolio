<template>
  <div>
    <div class="text-h6 text-white q-mb-md mt-1" v-if="showTitle">{{ title }}</div>
    <q-carousel
      v-model="currentSlide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      :height="height"
      class="bg-transparent text-white shadow-1 rounded-borders carousel-container max-w-full"
    >
      <q-carousel-slide
        v-for="(project, index) in projects"
        :key="project.title"
        :name="index"
        class="column no-wrap"
      >
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="project-card full-width" @click="openProjectModal(project)">
            <q-img :src="project.coverImage" :alt="project.title">
              <div class="absolute-bottom text-center q-pa-sm bg-dark-transparent">
                <div class="text-subtitle1 q-mb-xs">{{ project.title }}</div>
                <div class="q-gutter-xs">
                  <q-chip
                    v-for="tech in project.techStack"
                    :key="tech"
                    size="sm"
                    color="primary"
                    text-color="white"
                    class="tech-chip"
                  >
                    {{ tech }}
                  </q-chip>
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
    
    <!-- Project Modal -->
    <q-dialog v-model="projectModalOpen" :maximized="$q.screen.lt.sm">
      <q-card v-if="selectedProject" class="project-modal w-3/4 max-w-[1000px] h-3/4">
        <q-img :src="selectedProject.coverImage" />
        <q-card-section>
          <div class="text-h4">{{ selectedProject.title }}</div>
          <div class="text-subtitle1 q-mt-md">{{ selectedProject.description }}</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Features:</div>
          <ul>
            <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
          </ul>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Tech Stack:</div>
          <q-chip 
            v-for="tech in selectedProject.techStack" 
            :key="tech" 
            color="primary" 
            text-color="white"
          >
            {{ tech }}
          </q-chip>
        </q-card-section>
        <q-card-actions align="right" class="q-pa-md">
          <q-btn
            v-if="selectedProject.githubLink"
            flat
            label="View Code on GitHub"
            color="primary"
            :href="selectedProject.githubLink"
            target="_blank"
            class="q-mr-sm bg-primary text-white"
            no-caps
          />
          <q-btn
            v-if="selectedProject.link"
            flat
            label="Visit Project"
            color="primary"
            :href="selectedProject.link"
            target="_blank"
            no-caps
          />
          <q-btn
            v-close-popup
            flat
            label="Close"
            color="primary"
            no-caps
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Project } from './models'

defineProps({
  projects: {
    type: Array as () => Project[],
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  height: {
    type: String,
    default: '400px',
  },
})

const currentSlide = ref(0)
const projectModalOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  projectModalOpen.value = true
}
</script>

<style scoped>
.full-width {
  width: 100%;
}

.carousel-container {
  min-height: 300px;
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
</style> 