<template>
  <div>
      <h1>List vue mixins</h1>
       <input type="text" v-model="filterText">
       <ul>
           <li v-for="item in filterdFruits">{{item}}</li>
       </ul>
  </div>
</template>

<script>
import { fruitMixin } from "../js/fruitMixin.js";
export default {
  mixins: [fruitMixin]
};
</script>

<style>
</style>
