<template>
    <div>
        <button class="btn btn-info" @click="asyncIncrement({by:50,duration:500})">AnotherIncrement</button>
        <button class="btn btn-info" @click="asyncDecrement({by:50,duration:500})">AnotherDecrement</button>
    </div>
</template>

<script>
import * as types from "../store/types.js";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      asyncIncrement: types.ASYNC_INCREMENT_COUNTER,
      asyncDecrement: types.ASYNC_DECREMENT_COUNTER
    })
  }
};
</script>