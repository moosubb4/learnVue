<template>
   <div class="container">
     <div class="row">
         <div class="col-xs-12 col-lg-12">
            <app-quote>
              <h2 slot="title">{{quoteTitle}}</h2>
              <p>A quote are wondelful</p>
            </app-quote>
            <!-- <button class="btn btn-info">BUTT</button> -->
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
      quoteTitle: "The Quote"
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

