<template>
  <div class="container">
    <app-http></app-http>
    <!-- <app-learn-filter></app-learn-filter>
    <p>{{text | toUppercase}}</p>
    <hr>
    <app-directive-file></app-directive-file> -->
  </div>
</template>

<script>
import Http from "./components/Http";
import DirectiveFile from "./components/directiveFile";
import LearnFilter from "./components/learnFilter";
export default {
  components: {
    appHttp: Http,
    appDirectiveFile: DirectiveFile,
    appLearnFilter: LearnFilter
  }
  // data() {
  //   return {
  //     text: "Lol putang ina mo?"
  //   };
  // }
};
</script>

<style>
</style>
