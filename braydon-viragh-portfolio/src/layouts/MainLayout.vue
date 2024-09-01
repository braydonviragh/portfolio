<template>
  <q-layout view="hHh LpR fFf" class="bg-background">
    <q-header elevated class="bg-black text-white ">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Braydon Viragh</q-toolbar-title>
        <q-tabs
          v-model="currentSection"
          class="gt-sm"
          inline-label
          align="right"
          narrow-indicator
        >
          <q-tab
            v-for="link in links"
            :key="link.to"
            :name="link.to.slice(1)"
            :label="link.label"
            @click="scrollToSection(link.to.slice(1))"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      behavior="mobile"
      elevated
      class="bg-sidebar"
    >
      <q-list>
        <q-item-label header class="text-white text-lg">Navigation</q-item-label>
        <q-item
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          exact
          class="text-white text-lg"
          :class="{ 'active-nav-item': currentSection === link.to.slice(1) }"
          @click="scrollToSection(link.to.slice(1))"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <div class="pt-0">
      <div class="scroll-container">
        <section id="home" ref="homeSection" class="page-section text-center sm:text-left p-0 md:p-5">
          <Home />
        </section>
        <section id="about" ref="aboutSection" class="page-section text-center sm:text-left p-0 md:p-5">
          <About />
        </section>
        <section id="skills" ref="skillsSection" class="page-section text-center sm:text-left p-0 md:p-5">
          <Skills />
        </section>
        <section id="projects" ref="projectsSection" class="page-section text-center sm:text-left p-0 md:p-5">
          <Projects />
        </section>
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Home from 'pages/Home.vue'
import About from 'pages/About.vue'
import Skills from 'pages/Skills.vue'
import Projects from 'pages/Projects.vue'

const leftDrawerOpen = ref(false)
const currentSection = ref('home')

const links = [
  { to: '#home', icon: 'home', label: 'Home' },
  { to: '#about', icon: 'person', label: 'About' },
  { to: '#skills', icon: 'code', label: 'Skills' },
  { to: '#projects', icon: 'work', label: 'Projects' },
]

const homeSection = ref(null)
const aboutSection = ref(null)
const skillsSection = ref(null)
const projectsSection = ref(null)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id
      }
    })
  }, { threshold: 0.5 })

  ;[homeSection.value, aboutSection.value, skillsSection.value, projectsSection.value].forEach((section) => {
    if (section) observer.observe(section)
  })
})
</script>

<style>
.q-header {
  border-bottom: 3px solid var(--q-primary);
}

.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.page-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.page-content {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.active-nav-item {
  background-color: var(--q-primary);
  color: white;
}

.q-tab {
  color: white;
}

.q-tab--active {
  color: var(--q-primary);
}

.q-tabs__content {
  color: white;
}

@media (max-width: 1023px) {
  .q-drawer {
    top: 50px !important;
  }
}
</style>
