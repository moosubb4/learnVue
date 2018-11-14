<template>
  <div>
      <h1>Exercise 2</h1>
      <!-- 1) Alert when the button clicked-->
      <div>
        <button @click="showAlert">Show Alert</button>
      </div>
      <hr>
      <!-- 2) get value when key down-->
      <div>
        <input type="text" @keydown="value=$event.target.value">
        <p>value: {{ value }}</p>
      </div>
      <hr>
       <!-- 3) get value when key down Enter-->
      <div>
        <input type="text" @keydown.enter="value=$event.target.value">
        <p>value: {{ value }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    showAlert() {
      alert("Muda Muda Mudaaaaaa");
    }
  }
};
</script>

<style>
</style>
