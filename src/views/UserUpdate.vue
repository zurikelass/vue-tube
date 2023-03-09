<script>
export default {
  data() {
    return {
      nickname: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Submitted:", this.nickname, this.email);
    },
  },
};
</script>
<template>
 
</template>
