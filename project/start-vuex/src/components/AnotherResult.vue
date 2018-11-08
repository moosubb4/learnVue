<template>
  <div>
    <p>AnotherCounter is: {{ doubleCounter }}</p>
    <p>NUmber on Click: {{stringCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // props: ['counter']
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script> 