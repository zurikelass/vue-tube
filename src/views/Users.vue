<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios.get("https://items.magischer.de/api/users")
      .then((response) => {
        this.users = response.data;
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  },
}

</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
      </tr>
    </tbody>
  </table>

  <RouterView></RouterView>
</template>
