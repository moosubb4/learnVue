<template>
  <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
       <h1>Vue Filter & mixins</h1>
       <p>{{text |toUppercase | to-lowercase}}</p> 
       <hr>
       <input type="text" v-model="filterText">
       <ul>
           <li v-for="item in filterdFruits">{{item}}</li>
       </ul>
       <hr>
      <app-list></app-list>
      </div>
      
  </div>
</template>

<script>
import List from "./List";
import { fruitMixin } from "../js/fruitMixin.js";
export default {
  components: {
    appList: List
  },
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello f*ck yeah"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>
