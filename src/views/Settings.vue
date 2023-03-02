<script setup>
import MainLayout from "../layouts/mainLayout.vue";
</script>
<template>
  <MainLayout>
    <div>setting</div>
    <ul>
      <li><RouterLink :to="{ name: 'User' }">User </RouterLink></li>
      <li><RouterLink :to="{ name: 'UserUpdate' }">User Info </RouterLink></li>
    </ul>

    <RouterView></RouterView>
  </MainLayout>
</template>
