<template>
  <div class="page-content">
    <q-card flat bordered class="bg-transparent text-white w-full">
      <q-card-section class="q-pa-lg md:q-pa-xl">
        <div class="about-container">
          <!-- Left Column: Image -->
          <div class="about-image-column">
            <q-img
              src="/images/about-me.png"
              alt="Braydon Viragh"
              class="about-image"
              :ratio="1"
              fit="cover"
            />
          </div>

          <!-- Right Column: Name and Content -->
          <div class="about-content-column">
            <!-- Name -->
            <div class="text-h3 md:text-h2 text-center md:text-left q-mb-md">
              About Me
            </div>

            <!-- Content -->
            <div class="text-body1 leading-relaxed">
              <p class="q-mb-md">
                A full stack developer since 2020, I've been on a journey of learning and growing ever since.
              </p>
              
              <p class="q-mb-md">
                Coding for me is not only a passion, but a means to achieve my greater interest: <span class="text-primary font-medium">to build great products</span>. 
                I take pride in putting ownerxship in my work, and enjoy finding a solution to any problem. Every project is an opportunity to learn a skill or master a new technology.
              </p>
              
              <p class="q-mb-md">
                When i'm not coding, you'll find me playing video games, golfing, staying active at the gym, 
                and playing sports.
              </p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed
</script>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 100%;
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
}

.about-image-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.about-content-column {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
}

.about-image {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 3px solid var(--color-primary);
  box-shadow: 0 0 20px rgba(188, 19, 254, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-image:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(188, 19, 254, 0.5);
}

.font-medium {
  font-weight: 500;
}

/* Desktop: 2-column layout */
@media (min-width: 768px) {
  .about-container {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }

  .about-image-column {
    flex: 0 0 auto;
  }

  .about-image {
    width: 320px;
    height: 320px;
  }

  .about-content-column {
    flex: 1;
  }
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .about-container {
    gap: 1.5rem;
  }
  
  .text-body1 {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>

