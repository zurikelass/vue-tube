



<script>
export default {
  name: "UserList",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    fetch("https://items.magischer.de/api/users")
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });
  }
};
</script>

<template>
  <div>
    <h1>Users:</h1>
    <ul></ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>