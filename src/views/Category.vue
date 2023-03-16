<script setup>

import { useStore } from "vuex";
import { onMounted,computed } from "vue";
const store = useStore();

const categories =computed(() => { return store.getters['categories/getCategories'] } )


onMounted(()=> {
  store.dispatch('categories/getCategoriesFromApi')
})


</script>

<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Id</th>
          <th class="px-4 py-2">Type</th>
        </tr>
      </thead>
      <tbody v-if="categories.length">
        <tr v-for="category in categories" :key="category.id">
          <td class="border px-4 py-2">{{ category.name }}</td>
          <td class="border px-4 py-2">{{ category.id }}</td>
          <td class="border px-4 py-2">{{ category.type }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
  <RouterView></RouterView>
</template>
