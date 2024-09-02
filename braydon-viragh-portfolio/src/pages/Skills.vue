<template>
    <div class="flex flex-center">
      <q-card flat bordered class="bg-transparent text-white q-pa-lg">
        <q-card-section>
          <div class="text-h3 q-mb-lg">Skills & Values</div>
          <div v-for="skill in skills" :key="skill.title" class="q-mb-lg">
          <div class="text-h6 text-primary">{{ skill.title }}</div>
          <div class="text-body1">{{ skill.description }}</div>
        </div>
          <div class="text-h5">Tech Stack</div>
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
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
    </div>
  </template>
  
  <script setup lang="ts">
  const skills = [
    {
      title: 'Strong Communication',
      description: 'Providing regular updates, estimates, and meeting deadlines. Ensuring transparency throughout the development process.',
    },
    {
      title: 'Code With A Stratedy',
      description: 'Never settling for technical debt, I plan my approach and strategize with best practices to ensure scalable, maintainable, and efficient code.',
    },
    {
      title: 'Ownership Focused',
      description: 'Taking full responsibility for my work and delivering a product I can put my name on proudly. This ownership is reflected in my work ethic and attention to detail.',
    },
  ]

  const techStack = ['Laravel PHP', 'Vue 3', 'JavaScript', 'MySQL', 'React', 'TypeScript', 'Quasar Framework', 'Tailwind CSS']

  </script>
