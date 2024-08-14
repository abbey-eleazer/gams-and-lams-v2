<script setup>
import {slides} from '@/slide';


</script>

<template>
    <v-carousel height="100vh" :show-arrows="false" cycle hide-delimiter-background >
    <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.img" cover >
      <div class="w-full h-full bg-gradient-to-b from-black/80  to-black/70 flex items-center justify-center">
        <div class="text-center mt-64">
        <h1 class="text-3xl px-3 lg:text-6xl font-bold font-sans capitalize lg:w-[50rem] text-center mx-auto mb-16">{{ item.heading }}</h1>
        <router-link
      to="/contact-us" custom v-slot="{ navigate }">
      <button @click="navigate" role="link" class="bg-orange hover:bg-gray-400 py-3 px-8 rounded-md font-sans font-semibold hover:scale-125   ">
        Get estimate &rarr;
      </button>
      </router-link>
      </div>
    </div>
  </v-carousel-item>
  </v-carousel>
  
</template>

