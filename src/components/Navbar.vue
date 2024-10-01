<script setup>
import logo from '@/assets/images/logo2.png'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
// import DrawerNav from './DrawerNav.vue';
// import router from '@/router';

const isOpen = ref(false);

const close = () => {
  return isOpen.value = false
}

// computed(
//  menuIcon( isOpen ? ['pi', 'times'] : ['pi', 'bars'] )
// )

</script>

<template>
  <nav class="fixed z-10 w-full">
  <div class="mx-4 lg:mx-32 lg:mt-8 px-2 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
    <!-- Logo -->
     <router-link to="/" class="flex items-center gap-2 cursor-pointer">
      <img class="h-8 md:h-12 w-auto bg-white px-2 py-1 " :src="logo" alt="Gams and Lams" />
      <div class="text-center">
      <h1 class="text-lg lg:text-2xl uppercase font-bold tracking-wider ">Gams & Lams</h1>
      <p class="-mt-1 text-[.6rem] lg:text-[.8rem] tracking-wider uppercase">Painting & Decorating</p>
    </div>
     </router-link>
     <div class="md:ml-auto" >
      <i :class="isOpen ? 'pi pi-times' :'pi pi-bars'"  class="text-3xl lg:text-4xl cursor-pointer hover:text-orange hover:scale-125" @click="isOpen = !isOpen" ref='nav'></i>
     
     </div>
    </div>
  </div>
  </nav>
   
  <div v-if="isOpen" class="absolute z-[5]"> 
    <div class="bg-black w-[100vw] h-[100vh] ">
      <ul class="pt-44 flex flex-col gap-5 uppercase
       text-4xl tracking-wide pl-12">
        <li class="hover:text-orange" >
          <router-link @click="close" to="/">Home</router-link>
        </li>
        <li class="hover:text-orange"> 
          <router-link @click="close" to="/about-us" >About Us</router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services">Interior & Exterior Painting</router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services">Interior Decor</router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services">5D Wallpaper Installation</router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services"> Wallpanel & Flutter panel </router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services"> enkako crown moulding </router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services"> enkako window frame moulding </router-link>
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services">POP & Plasterboard Design</router-link>
        
        </li>
        <li class="hover:text-orange">
          <router-link @click="close" to="/services">Vinyl Floor Tiles & Carpets</router-link>

        </li>
        <li class="hover:text-orange" > 
          <router-link @click="close" to="/contact-us">Contact Us</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</template>