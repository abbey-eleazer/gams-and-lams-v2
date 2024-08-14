<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>
 
<template>
  <div class="bg-black">
    <Navbar />
    <RouterView />
</div>
</template>