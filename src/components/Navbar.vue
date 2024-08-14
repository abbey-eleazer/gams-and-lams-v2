<script setup>
import logo from '@/assets/images/logo2.png'
import { RouterLink } from 'vue-router';
// import DrawerNav from './DrawerNav.vue';

</script>

<template>
  <nav class="absolute z-10 w-full">
  <div class="mx-4 lg:mx-32 lg:mt-8 px-2 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
    <!-- Logo -->
     <router-link class="flex items-center gap-2 cursor-pointer">
      <img class="h-8 md:h-12 w-auto bg-white px-2 py-1 " :src="logo" alt="Gams and Lams" />
      <div class="text-center">
      <h1 class="text-lg lg:text-2xl uppercase font-bold tracking-wider ">Gams & Lams</h1>
      <p class="-mt-1 text-[.6rem] lg:text-[.8rem] tracking-wider uppercase">Painting & Decorating</p>
    </div>
     </router-link>
     <div class="md:ml-auto">
      <i class="pi pi-bars text-3xl lg:text-4xl cursor-pointer hover:text-orange hover:scale-125"></i>
       <!-- <DrawerNav /> -->
     
     </div>
    </div>
  </div>
  </nav>
</template>