<template>
  <div class="container">
    <app-exercise5 class="item"></app-exercise5>
    <app-exercise4 class="item"></app-exercise4>
    <app-exercise3 class="item"></app-exercise3>
    <app-exercise2 class="item"></app-exercise2>
    <app-exercise1 class="item"></app-exercise1>

  </div>
</template>

<script>
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
export default {
  components: {
    appExercise1: Exercise1,
    appExercise2: Exercise2,
    appExercise3: Exercise3,
    appExercise4: Exercise4,
    appExercise5: Exercise5
  },
  data() {
    return {};
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: space-between;
}

.container > .item {
  border: solid 0.5px salmon;
  /* margin: 0px auto; */
  margin: 10px 5px;
  padding: 10px;
  order: 0;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto; /*length*/
  /* shotHand flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] */
  align-self: baseline;
}
</style>
