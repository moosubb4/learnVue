<template>
  <div>
    <div>
      <h1>Exercise 3</h1>
      <!-- 1) show values-->
      <p>Current Value: {{ value }}</p>
      <button @click="value += 5">Add 5</button>
      <button @click="value += 1">Add 1</button>
      <p>
        {{ result }}
      </p>
    </div>
    <hr>
    <div>
      <input type="text">
      <p>{{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  computed: {
    result() {
      return this.value != 37 ? "not there yet" : "done";
    }
  },
  watch: {
    result: function() {
      const vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
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
