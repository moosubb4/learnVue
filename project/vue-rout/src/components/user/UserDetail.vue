<template>
    <div>
        <h3>User Detail</h3>
        <p>User loaded pages {{$route.params.id}}</p>
        <router-link tag="button" 
                     :to="link"
                     class="btn btn-warning">
                     Edit User
        </router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "en",
          q: 100
        },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    if (true) {
      // authentication or somthing
      next();
    } else {
      next(false);
    }
    console.log("beforeRouteEnter");
  }
};
</script>

<style>
</style>
