<template>
    <li
     class="panel-block"
     style="cursor:pointer"
    @click="serverSelected">
        Server #{{ server.id }}
     </li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: ["server"],
  methods: {
    serverSelected() {
      serverBus.$emit("serverSelected", this.server);
    }
  }
};
</script>

 <style scoped>
div {
  border: solid 1px blue;
}
</style>
