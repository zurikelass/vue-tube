<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const data = {
        email: this.email,
        password: this.password
      };
      
      axios.post('https://items.magischer.de/api/auth/login', data)
      .then(response => {
        if(response.data.status){
           this.$store.dispatch('register/token', response.data.token)
              this.$router.push({ name: 'settings'})
            }else{
              this.$router.push({name: 'settings', params: 'error'})
            }
          })
          .catch(error => {
          });
       
    }
  }
}
</script>

<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" v-model="email" required class="border rounded-lg py-2 px-3 w-full">
        </div>
        
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" required class="border rounded-lg py-2 px-3 w-full">
        </div>
        <RouterLink to="/settings">
          <div class="text-center">
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
        </div>
        </RouterLink>
       
      </form>
    </div>
    <RouterView></RouterView>
  </template>
  
 