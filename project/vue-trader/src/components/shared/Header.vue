<template>
  <div>
   <nav class="navbar is-info" role="navigation" aria-label="main navigation">
     <div class="navbar-brand">
    <router-link 
     to="/"
     tag="a"
     class="navbar-item">
      <b>STOCK TRADER 
        <span class="icon">
         <i class="eva eva-car"></i>
        </span>
      </b>
    </router-link>

    <a role="button" class="navbar-burger burger" 
       aria-label="menu" 
       aria-expanded="false" 
       data-target="navbarBasicExample"
       @click="onHamburger = !onHamburger">

      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" 
       :class="{'is-active':onHamburger}" class="navbar-menu">

    <div class="navbar-start">
      <router-link tag="a" to="/portfolio" 
      active-class="is-active" exact
      class="navbar-item">
        Portfolio
      </router-link>

      <router-link tag="a" to="/stocks"
      active-class="is-active" exact
      class="navbar-item">
        Stocks
      </router-link>
    </div>

    <div class="navbar-end"> 
        <a class="navbar-link">
            End Day
        </a>
      <div class="navbar-item is-hoverable">
        <a class="navbar-link">
            Save&Load
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
             Save Data
          </a>
          <a class="navbar-item">
             Load Data
          </a>
        </div>
      </div>
    </div>

  </div>
</nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onHamburger: false
    };
  },
  methods: {}
};
</script>

<style>
</style>
