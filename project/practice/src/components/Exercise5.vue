<template>
  <div>
    <div>
      <h1>Exercise 5</h1>
      <!-- 1) toggle paragraphs use v-if v-show-->
      <div>
          <button @click="toogle=!toogle">Toggle</button>
          <p v-if="!toogle">You Either see me ...</p>
          <p v-show="toogle">...or me</p>
      </div>
      <hr>
      <!-- 2) Output orderlist print index-->
      <div>
        <ul>
          <li :key="index" v-for="(item,index) in arry">
            {{index+1}} : {{item}}
          </li>
        </ul>
      </div>
      <hr>
      <!-- 3) Output orderlist print index-->
      <div>
        <ul :key="key" v-for="(value,key,index) in books">
          <li>
           {{index+1}} - {{key}} : {{value}}
          </li>
        </ul>
      </div>
      <hr>
      <!-- 4) Output orderlist print index-->
      <div>
        <ol>
          <li :key="key"
           v-for="(value,key) in testData">
            <template v-if="Array.isArray(value)">
              <ul>
                <li :key="i"
              v-for="(el,i) in value">
              {{ el }}
              </li>
              </ul>
            </template>
            <template v-else>
              {{ value }}
            </template>
          </li>
        </ol>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toogle: false,
      arry: ["mama", "haha", "papa", "otou san"],
      books: {
        name: "StarWars7:The Force Awaken",
        director: "J.J. Abram",
        year: 2016
      },
      testData: {
        name: "Test Object",
        data: [1.67, 1.33, 0.98, 2.21]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>
 