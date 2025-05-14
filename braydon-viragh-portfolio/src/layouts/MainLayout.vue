<template>
  <q-layout view="hHh LpR fFf" class="bg-background">
    <q-header elevated class="bg-black text-white fixed-top">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          no-caps
          icon="menu"
          aria-label="Menu"
          class="lt-md"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="cursor-pointer" @click="scrollToSection('home')">Braydon Viragh</q-toolbar-title>
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

    <!-- Social Sidebar -->
    <div class="social-sidebar">
      <div class="social-links">
        <a 
          href="https://github.com/braydonviragh" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-link"
        >
          <span class="social-text">GitHub</span>
        </a>
        <a 
          href="https://linkedin.com/in/braydon-viragh" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-link"
        >
          <span class="social-text">LinkedIn</span>
        </a>
        <a 
          href="/files/Braydon Viragh Full Stack Developer Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          download
          class="social-link"
        >
          <span class="social-text">Resume</span>
        </a>
      </div>
    </div>

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

    <q-page-container>
      <div class="pt-[53px]">
        <div class="scroll-container">
          <section id="home" ref="homeSection" class="page-section text-center sm:text-left p-0 md:p-5">
            <Home />
          </section>
          <section id="skills" ref="skillsSection" class="page-section text-center sm:text-left p-0 md:p-5">
            <Skills />
          </section>
          <section id="projects" ref="projectsSection" class="page-section text-center sm:text-left p-0 md:p-5">
            <Projects />
          </section>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Home from 'pages/Home.vue'
import Skills from 'pages/Skills.vue'
import Projects from 'pages/Projects.vue'

const leftDrawerOpen = ref(false)
const currentSection = ref('home')

const links = [
  { to: '#home', icon: 'home', label: 'Home' },
  { to: '#skills', icon: 'code', label: 'Skills' },
  { to: '#projects', icon: 'work', label: 'Projects' },
]

const homeSection = ref(null)
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

  ;[homeSection.value, skillsSection.value, projectsSection.value].forEach((section) => {
    if (section) observer.observe(section)
  })
})
</script>

<style>
.q-header {
  border-bottom: 3px solid var(--q-primary);
  height: 53px;
}

.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: calc(100vh - 53px);
  padding-top: 0;
}

.page-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100vh;
  min-height: calc(100vh - 53px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0;
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

/* Social Sidebar Styles */
.social-sidebar {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  transition: transform 0.3s ease;
}

.social-sidebar:hover {
  transform: translateY(-50%) translateX(3px);
}

.social-links {
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 15, 15, 0.7);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 12px 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

.social-link {
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 12px;
  margin: 5px 0;
  transition: all 0.3s ease;
  border-radius: 4px;
  text-decoration: none;
  opacity: 0.85;
}

.social-link:hover {
  color: var(--color-primary);
  background-color: rgba(30, 30, 30, 0.7);
  transform: translateX(3px);
  opacity: 1;
}

.social-text {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .social-sidebar {
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    transform: none;
  }
  
  .social-sidebar:hover {
    transform: none;
  }
  
  .social-links {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 5px 10px;
  }
  
  .social-link {
    margin: 0 10px;
    padding: 8px 15px;
  }
  
  .social-link:hover {
    transform: translateY(-3px);
  }
  
  .social-text {
    display: none;
  }
}

@media (max-width: 1023px) {
  .q-drawer {
    top: 50px !important;
  }
}
</style>
