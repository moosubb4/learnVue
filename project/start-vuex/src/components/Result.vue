<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";
export default {
  computed: {
    ...mapGetters({
      counter: types.DOUBLE_COUNTER
    })
  }
};
// import { mapGetters } from "vuex";
// export default {
//   computed: {
//     ...mapGetters(["counter"])
//   }
// };
// export default {
//   // props: ['counter']
//   computed: {
//     counter() {
//       return this.$store.state.counter;
//     }
//   }
// };
</script>