<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    axios
      .get(
        "https://items.magischer.de/api/users"
      )
      .then((response) => {
        console.log(response);
        this.data = response.data[0].data;
      })
   
  },
};
</script>
<template>
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">id</th>
          <th class="px-4 py-2">name</th>
          <th class="px-4 py-2">email</th>
          <th class="px-4 py-2">roles</th>
          
        </tr>
      </thead>
      <tbody v-if="this.data.length">
        <tr v-for="data in this.data" :key="data.code">
          <td class="border px-4 py-2">{{ data.id }}</td>
          <td class="border px-4 py-2">{{ data.name }}</td>
          <td class="border px-4 py-2">{{ data.email }}</td>
          <td class="border px-4 py-2">{{data.roles }}</td>
 
        </tr>
      </tbody>
    </table>
  </div>
</template>