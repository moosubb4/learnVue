<template>
  <div class="column is-6-mobile is-4-desktop">
    <article class="message is-success">
      <div class="message-header">
        <h3>
             {{stock.name}}
             <small>(Price: {{stock.price}})</small>
        </h3>
      </div>
     <div class="message-body">
      <div class="field">
          <input class="input" type="number" placeholder="Quantity" v-model="quantity">
         <button class="button is-success" @click="buyStock" 
         :disabled="quantity <= 0 || Number.isInteger(quantity)">Buy</button>
      </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: +this.stock.price,
        quantity: +this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>
