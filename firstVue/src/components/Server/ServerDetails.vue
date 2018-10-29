<template>
    <div class="">
        <p v-if="!server">Please Select a Server</p>
        <p v-else>Server #{{server.id}} selected, Status: {{server.status}}</p>
        <hr>
        <button @click="resetStatus"> Change tonarmal</button>
    </div>

</template>

<script>
import { serverBus } from "../../main";

export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    serverBus.$on("serverSelected", e => {
      this.server = e;
    });
  }
};
</script>

<style>
div {
  border: solid 1px red;
}
</style>
