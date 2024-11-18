<template>
  <div class="page-content">
    <q-card flat bordered class="bg-transparent text-white w-full md:q-pa-md">
      <q-card-section>
        <div class="text-h2 q-mb-md">Braydon Viragh</div>
        <div class="text-h5 q-mb-lg">Full Stack Developer <span class="text-primary">Frontend UI/UX Focused</span></div>
        <p class="text-body1 q-mb-lg">
          Self-taught, self-driven, self-motivated.
          Love taking on challenges, learning new skills, and building great products.
        </p>
        <div class="flex justify-center q-gutter-md">
          <q-btn
          color="primary"
          rounded
          size="lg"
          type="a"
          href="https://linkedin.com/in/braydon-viragh"
          target="_blank"
          label="LinkedIn"
          rel="noopener noreferrer"
        />
        <q-btn
          color="primary"
          rounded
          label="GitHub"
          size="lg"
          type="a"
          href="https://github.com/braydonviragh"
          target="_blank"
          rel="noopener noreferrer"
        />
        <q-btn
            color="primary"
            rounded
            label="Resume"
            size="lg"
            type="a"
            href="/files/Braydon Viragh Resume- -.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <template #default>
              <q-icon name="download" />
            </template>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
