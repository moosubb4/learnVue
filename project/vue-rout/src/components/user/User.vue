<template>
    <div>
        <h3>The User Pages</h3>
        <hr>
        <!-- <p>Loaded Id:{{ id }}</p> -->
        <button @click="navigateToHome" 
                class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>
