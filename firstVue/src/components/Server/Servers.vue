<template>
    <div class="">
        <ul class="panel">
           <app-server v-for="server in servers"
           :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
import Server from "./Server.vue";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Mother F*cker" }
      ]
    };
  },
  components: {
    appServer: Server
  }
};
</script>

 <style scoped>
div {
  border: solid 1px blue;
}
</style>
