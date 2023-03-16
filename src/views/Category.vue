<script setup>
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();



axios.get('https://items.magischer.de/api/categories').then(response => {
      
      if (response.data.success) {
        store.dispatch('categories/setCategories', response.data.data);
       
      }
    }).catch((e) => console.log(e));
 

    const categories = computed(() => {
     console.log(store.state.categories)
    return store.state.categories;


});

</script>

<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">id</th>
          <th class="px-4 py-2">type</th>
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
</template>
