<template>
    <q-page class="flex flex-center">
      <q-card flat bordered class="bg-transparent text-white q-pa-lg">
        <q-card-section>
          <div class="text-h3 q-mb-md">Skills & Expertise</div>
          <div class="text-h5 q-mb-lg">Crafting Scalable and Sustainable Solutions</div>
          <div v-for="skill in skills" :key="skill.title" class="q-mb-lg">
          <div class="text-h6 text-primary">{{ skill.title }}</div>
          <div class="text-body1">{{ skill.description }}</div>
        </div>
          <div class="text-h5">Tech Stack</div>
          <div class="flex flex-wrap gap-2">
            <q-chip
                v-for="tech in techStack"
                :key="tech"
                color="primary"
                text-color="white">
            {{ tech }}
            </q-chip>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup lang="ts">
  const skills = [
    {
      title: 'Clean Coding',
      description: 'Following SOLID, DRY, and KISS principles. Writing clear, maintainable code.',
    },
    {
      title: 'Mobile-First Design',
      description: 'Creating responsive layouts. Using modern CSS techniques.',
    },
    {
      title: 'Modern Workflow',
      description: 'Using Git, CI/CD, and Agile methods. Experienced with Docker.',
    },
  ]

  const techStack = ['Laravel PHP', 'Vue 3', 'JavaScript', 'MySQL', 'React', 'TypeScript', 'Quasar Framework']

  </script>
