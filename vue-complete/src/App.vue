<template>
   <div class="container">
     <div class="row">
         <div class="col-xs-12 col-lg-12">
           <button @click="selectedComponent = 'appQuote'">Quote</button>
           <button @click="selectedComponent = 'appAuth'">Auth</button>
           <button @click="selectedComponent = 'appNew'">New</button>
           <hr>
            <!-- <app-quote>
              <h2 slot="title">{{quoteTitle}}</h2>
              <p>A quote are wondelful</p>
            </app-quote>
            <hr> -->
            <keep-alive>
             <component :is="selectedComponent">
               <p>A quote are wondelful</p>
             </component>
            </keep-alive>
         </div>
     </div>
   </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Auth from "./components/Auth";
import New from "./components/New";
export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuth: Auth,
    appNew: New
  }
};
</script>

<style>
</style>

