<script setup>
import FooterNav from './FooterNav.vue';
// import DrawerNav from './DrawerNav.vue';
</script>

<template>
  <header class="w-full mb-32">

    <div class=" w-full relative ">
      <img src="../assets/images/hall.jpg" alt="about img" class="w-full h-[90vh] object-cover">
          <div class="absolute bg-gradient-to-b from-black/75 via-black/60  to-black/80 w-full h-[100%] top-0 flex flex-col gap-8 items-center justify-center">
            <h1 class="capitalize text-3xl lg:text-7xl  font-bold tracking-wider">
              we are gams & lams
            </h1>
            <router-link
      to="/contact-us" custom v-slot="{ navigate }">
      <button @click="navigate" role="link" class="bg-orange hover:bg-gray-400 py-3 px-8 rounded-md font-sans font-semibold hover:scale-125   ">
        Get estimate &rarr;
      </button>
      </router-link>
          </div>
    </div>
  </header>

  <main>
    <!-- <DrawerNav /> -->
    <h2 class="text-2xl capitalize mx-auto border-l-4 border-orange w-32 pl-3 mb-32 md:text-4xl md:w-44 md:font-bold md:pl-5">
      about us
    </h2>
    <section class="lg:mx-32 md:mt-64 mb-32">
       <div class=" lg:flex lg:items-center lg:gap-16 ">
        <div class="flex-1">
          <img src="../assets/images/abimg.webp" alt="ab img" class="">
        </div>
        <div class=" mx-4 pt-5 flex-1 md:mx-0 md:pt-0">
          <h3 class="text-orange text-2xl capitalize pb-3 md:text-3xl md:font-semibold ">
            who we are
          </h3>
          <p class="md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa blanditiis illum eaque sunt aliquid reiciendis minus porro eos! Maiores dolore numquam dolorem illo omnis ipsum nisi in pariatur aspernatur placeat corporis tempore facilis eum perferendis provident ipsam adipisci consectetur voluptates, error, vel illum excepturi, harum amet. Commodi, aperiam tempore.</p>
        </div>
       </div>

       <div class=" lg:flex lg:flex-row-reverse lg:items-center lg:gap-16 mt-64 ">
        <div class="flex-1">
          <img src="../assets/images/abimg2.jpeg" alt="ab img" class="">
        </div>
        <div class=" mx-4 pt-5 flex-1 md:mx-0 md:pt-0">
          <h3 class="text-orange text-2xl capitalize pb-3 md:text-3xl md:font-semibold ">
            what we do
          </h3>
          <p class="md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa blanditiis illum eaque sunt aliquid reiciendis minus porro eos! Maiores dolore numquam dolorem illo omnis ipsum nisi in pariatur aspernatur placeat corporis tempore facilis eum perferendis provident ipsam adipisci consectetur voluptates, error, vel illum excepturi, harum amet. Commodi, aperiam tempore.</p>
        </div>
       </div>
    </section>
    <div class="md:mx-32 text-center mb-32">
      <h2 class="text-3xl text-orange text-center capitalize mx-auto pl-3 mb-12 lg:text-7xl md:font-bold w-2/3 ">
        let us handle all your painting projects
      </h2>
      <router-link
      to="/contact-us" custom v-slot="{ navigate }">
      <button @click="navigate" role="link" class="bg-orange py-3 px-8 rounded-md font-sans font-semibold hover:scale-125 ">
        Get estimate &rarr;
      </button>
      </router-link>
    </div>
  </main>
  <FooterNav />
</template>