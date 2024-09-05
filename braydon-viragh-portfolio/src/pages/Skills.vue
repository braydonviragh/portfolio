<template>
  <div class="page-content">
    <q-card flat bordered class="bg-transparent text-white q-pa-lg">
        <q-card-section>
          <div class="text-h4">Skills & Values</div>
          <div v-for="skill in skills" :key="skill.title" class="q-mb-sm">
          <div class="text-h6 text-primary">{{ skill.title }}</div>
          <div class="text-caption">{{ skill.description }}</div>
        </div>
          <div class="text-h5">Tech Stack</div>
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <q-chip
                v-for="tech in techStack"
                :key="tech"
                color="primary"
                text-color="white"
                class="text-caption">
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
      title: 'Solution Oriented',
      description: "Driven to always find an answer. If I don't have a solution immediately, you can bet I'm working on one. Providing regular updates, estimates, and meeting deadlines.",
    },
    {
      title: 'Code With A Strategy',
      description: 'Never settling for technical debt, I plan my approach and strategize with best practices such as KISS, DRY, and SOLID, to ensure scalable, maintainable, and efficient code.',
    },
    {
      title: 'Ownership Focused',
      description: 'Taking full responsibility for my work and delivering a product I can put my name on proudly. This ownership is reflected in my work ethic and attention to detail.',
    },
  ]

  const techStack = ['Laravel PHP', 'Vue 3', 'JavaScript', 'MySQL', 'React', 'TypeScript', 'Quasar Framework', 'Tailwind CSS']

  </script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.q-card-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
