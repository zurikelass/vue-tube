<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ApplicationLogo from "../icons/ApplicationLogo.vue";

const store = useStore();


const topMenuLinks = computed(() => store.getters["navigation/getTopMenu"]);

const lastItem = function (item) {
  return (
    [...topMenuLinks.value].indexOf(item) !== [...topMenuLinks.value].length - 1
  );
};

onMounted(() => {

});
</script>
<template>
<nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg" class="w-24">
    </div>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-500 hover:border-red-500">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg lg:flex-grow">
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 font-bold uppercase mr-4">Home</a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 font-bold uppercase mr-4">Trending</a>
            <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-500 font-bold uppercase mr-4">Subscriptions</a>
        </div>
        <div class="relative">
            <input type="text" class="px-4 py-2 pr-10 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white" placeholder="Search">
            <div class="absolute right-0 top-0 mt-2 mr-3">
                <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 15.5L20 20"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4H4v6"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v6h-6"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 15.5L4 20"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.5L20 4"/>
                </svg>
            </div>
        </div>
        </div>
</nav>


</template>
