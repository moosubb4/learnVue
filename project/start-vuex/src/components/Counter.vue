<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../store/types.js";
export default {
  methods: {
    ...mapActions({
      increment: types.INCREMENT_COUNTER,
      decrement: types.DECREMENT_COUNTER
    })
  }
};
// export default {
//   methods: {
//     increment() {
//       // this.$emit('updated', 1);
//       this.$store.state.counter++;
//     },
//     decrement() {
//     //   this.$emit("updated", -1);
//       this.$store.state.counter--
//     }
//   }
// };
</script>