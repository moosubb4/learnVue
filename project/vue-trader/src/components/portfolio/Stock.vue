<template>
  <div class="column is-6-mobile is-4-desktop">
    <article class="message is-success">
      <div class="message-header">
        <h3>
             {{ stock.name }}
             <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
        </h3>
      </div>
     <div class="message-body">
      <div class="field">
          <input class="input" type="number" placeholder="Quantity" v-model="quantity">
         <button class="button is-success" @click="sellStock" :disabled="quantity <= 0 || quantity > stock.quantity || Number.isInteger(quantity)">
         Sell
         </button>
      </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: +this.stock.price,
        quantity: +this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>
