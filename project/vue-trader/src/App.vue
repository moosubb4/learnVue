<template>
  <div class="container">
    <app-header></app-header>
    <div class="columns">
      <div class="column is-full-mobile">
         <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from "./components/shared/Header";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
