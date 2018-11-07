<template>
    <div>
        <h3>The User Pages</h3>
        <hr>
        <p>Loaded Id:{{ id }}</p>
        <button @click="navigateToHome" 
                class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, frrom) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
