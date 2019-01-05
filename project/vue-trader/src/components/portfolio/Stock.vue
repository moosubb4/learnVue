<template>
  <div class="column is-6-mobile is-4-desktop">
    <article class="message is-primary">
      <div class="message-header">
        <h3>
             {{ stock.name }}
             <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
        </h3>
      </div>
     <div class="message-body">
      <div class="field">
          <input class="input" type="number" placeholder="Quantity" v-model="quantity" :class="{'is-danger': insufficientQuantity}">
         <button class="button is-success" @click="sellStock" 
         :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)">
         {{ insufficientQuantity?'Out of stock':'Sell' }}
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
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
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

<style scoped>
.dangers {
  border: solid 1px red;
}
article{
  margin: 5px;
}
</style>
