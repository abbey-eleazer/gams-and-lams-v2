<template>
    
  <nav>
    <div class="bg-orange w-[50%] h-[100vh] text-center">
      <div class="flex flex-col text-3xl gap-4 pl-12">
        <router-link to="/" class="px-2 py-1 hover:bg-orange-200 rounded-lg font-semibold">Home</router-link>

        <router-link to="/services" class="px-2 py-1 hover:bg-orange-200 rounded-lg font-semibold">Services</router-link>

        <router-link to="/about-us"  class="px-2 py-1 hover:bg-orange-200 rounded-lg font-semibold">About Us</router-link>

        <router-link to="/contact-us" class="px-2 py-1 hover:bg-orange-200 rounded-lg font-semibold">Contact Us</router-link>
      </div>
    </div>
  </nav>
</template>