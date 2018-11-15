<template>
  <div>
<section class="hero is-success is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{ numRoute.title }}
      </h1>
      <h2 class="subtitle">
        {{ numRoute.subtitle }}
      </h2>
    </div>
  </div>
  <div class="hero-foot">
    <nav class="tabs is-boxed">
        <!--is-fullwidth-->
      <div class="container">
        <ul>
        <router-link to="/" tag="li" active-class="is-active" exact><a>Home</a></router-link>
        <router-link to="/about" tag="li" active-class="is-active" exact><a>About</a></router-link>
        </ul>
      </div>
    </nav>
  </div>
</section>
  </div>
</template>

<script lang="ts">

import { headerBus } from '../main';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  get numRoute() {
    const routeName = this.$route.name;
    const head = {
      title: 'My Pages',
      subtitle: 'Yeehaaaa!'
    }

    if (routeName == 'home') {
      head.title = 'Home';
      head.subtitle = 'Country road take me Home... to the place I belong West Virginia, Mountaun mama';
    } else if (routeName == 'about') {
      head.title = 'About';
      head.subtitle = 'Goodbye every body I just gotta go~';
    }

    return head;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
