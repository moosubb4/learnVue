<template>
    <div class="container" :style="{'margin':'24px'}">
        <app-header></app-header>
        <hr>
        <div class="columns">
            <app-servers class="column is-half"></app-servers>
            <app-server-details class="column is-half"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  components: {
    "app-header": Header,
    "app-servers": Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
