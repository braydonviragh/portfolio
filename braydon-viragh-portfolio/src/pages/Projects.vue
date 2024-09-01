<template>
  <div class="full-width flex flex-center q-pa-md">
    <q-card
        flat
        bordered
        class="bg-transparent text-white full-width"
    >
      <q-card-section>
        <div class="text-h3 text-center q-mb-md">Projects</div>
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
          class="bg-transparent text-white shadow-1 rounded-borders carousel-container max-w-[800px]"
        >
          <q-carousel-slide
            v-for="(project, index) in projects"
            :key="project.title"
            :name="index"
            class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <q-card class="project-card full-width" @click="openProjectModal(project)">
                <q-img :src="project.coverImage" :alt="project.title">
                  <div class="absolute-bottom text-center q-pa-sm">
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
      </q-card-section>
    </q-card>

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
            flat
            label="View Code on GitHub"
            color="primary"
            :href="selectedProject.githubLink"
            target="_blank"
            class="q-mr-sm bg-primary text-white"
          />
          <q-btn
            flat
            label="Visit Project"
            color="primary"
            :href="selectedProject.link"
            target="_blank"
          />
          <q-btn
            v-close-popup
            flat
            label="Close"
            color="primary"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  coverImage: string;
  features: string[];
  techStack: string[];
}

const projectModalOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const projects: Project[] = [
  {
    title: 'Chicago Art Institute API Project',
    description: 'An interactive web application showcasing artworks from the Art Institute of Chicago.',
    link: 'https://chicago-art-api.web.app/',
    githubLink: 'https://github.com/braydonviragh/chicago-art-api-react-project',
    coverImage: '/images/art-project-screenshot.png',
    features: [
      'Browse artworks from the Art Institute of Chicago',
      'Save favorite artworks',
      'Dedicated page for viewing saved favorites',
      'Responsive design for mobile and desktop',
    ],
    techStack: ['Vue 3', 'Axios', 'Vuex', 'Art Institute of Chicago API'],
  },
  {
    title: 'Think You Can Quiz',
    description: 'A React-based quiz application utilizing the Open Trivia API for dynamic question generation.',
    link: 'https://thinkyoucanquiz.web.app/',
    githubLink: 'https://github.com/braydonviragh/Quiz-Application-ReactJS',
    coverImage: '/images/quiz-screenshot.png',
    features: [
      'Pull questions from Open Trivia API',
      'React state management for question handling',
      'Save and track user answers',
      'Interactive quiz interface',
      'Responsive design for various devices',
    ],
    techStack: ['React', 'Open Trivia API', 'React State Management', 'CSS'],
  },
  // ... other projects ...
]

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  projectModalOpen.value = true
}

const slide = ref(0)
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
