<template>

  <section class="px-10">
    <h1 class="font-outfit text-5xl text-slate-800 font-extrabold text-center mb-5 flex justify-center flex-col">
      Circuitos
      <small class="text-slate-800 text-lg font-outfit font-semibold">donde hemos rodado</small>
    </h1>
    <div class="">
      <Carousel :items-to-show="isMobile ? 1 : 3.9" :wrap-around="true">
        <Slide v-for="track in tracks" :key="track.name">
          <div class=" bg-white border border-gray-200 rounded-lg shadow min-h-[420px]">
            <a href="#">
              <img class="rounded-t-lg max-h-48 object-cover w-full" :src="track.image" alt="nyr" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {{ track.name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ track.description }}
              </p>
              <a href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Ver todos los tiempos
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>

      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import { tracks } from '../const/tracks.js'

import 'vue3-carousel/dist/carousel.css'

// check us mobile
const isMobile = window.innerWidth < 768



</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}
</style>
