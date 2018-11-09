<template>
  <div class="container">
    <app-header></app-header>

    <div class="columns">
      <div class="column">
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
  }
};
</script>

<style>
</style>
