<script setup>
 import { watch } from 'vue'
 import { useStore } from 'vuex';
 

 const store = useStore()
 const searchQuery = computed ()
 watch ((searchQuery)=> {
 console.log(searchQuery)})
 
</script>

<template>
  <input type="text" v-model="searchQuery" placeholder="Search..." />
</template>
