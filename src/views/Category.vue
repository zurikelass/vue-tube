<script>
import axios from 'axios';

export default {
  data() {
    return {
      category: {},
    };
  },
  mounted() {
    axios.get('https://items.magischer.de/api/categories/', {
        params: {
          category_id:category.id
        }
      })
      .then(response => {
        this.category = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<template>
    <div>
      <h2>Category: {{ category.name }}</h2>
      <p>ID: {{ category.id }}</p>
    </div>
  </template>
  
 