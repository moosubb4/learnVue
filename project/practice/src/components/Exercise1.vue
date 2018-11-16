<template>
  <div>
      <h1>Exercise 1</h1>
   <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>
    <hr>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>{{ age * 3 }}</p>
    <hr>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>{{ randoms() }}</p>
    <hr>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
        <img :src="imgPath" style="width:200px;height:125px">
    </div>
    <hr>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
        <input type="text" :value="name">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Thanathorn",
      age: 23,
      imgPath:
        "https://thumbs.gfycat.com/TornBraveAlligator-size_restricted.gif"
    };
  },
  methods: {
    randoms() {
      return Math.round(Math.random());
    }
  }
};
</script>

<style>
</style>
