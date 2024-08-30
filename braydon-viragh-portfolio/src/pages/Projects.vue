<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="bg-transparent text-white q-pa-lg">
      <q-card-section>
        <div class="text-h3 q-mb-md">Projects</div>
        <div class="text-h5 q-mb-lg">Showcasing My Work and Expertise</div>
        <p class="text-body1 q-mb-lg">Here are some of the projects I've worked on that demonstrate my skills and experience:</p>
        <div class="row q-col-gutter-md">
          <div v-for="project in projects" :key="project.title" class="col-12 col-md-6">
            <q-card class="project-card">
              <q-card-section>
                <div class="text-h6">{{ project.title }}</div>
                <div class="text-subtitle2">{{ project.description }}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn
                    flat
                    color="primary"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer">
                  View Project
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Example Project',
    description: 'A brief description of project 1.',
    link: '#',
  },
  {
    title: 'Example Project 2',
    description: 'A brief description of project 2.',
    link: '#',
  },
  // Add more projects as needed
]
</script>
