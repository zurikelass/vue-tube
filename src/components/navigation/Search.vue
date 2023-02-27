<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  watch: {
    searchQuery() {
      this.$emit("search", this.searchQuery.trim());
    },
  },
};
</script>

<template>
  <input type="text" v-model="searchQuery" placeholder="Search..." />
</template>
