<template>
  <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
       <h1>Http</h1>
         <div class="form-group">
           <label for="username">Username:</label>
           <input type="text" class="form-control" v-model="user.username">
         </div>
         <div class="form-group">
           <label for="Mail">Mail:</label>
           <input type="text" class="form-control" v-model="user.email">
         </div>
         <button 
         class="btn btn-success"
         type="submit"
          @click.prevent="submit">Submit</button>
          <hr>
          <button 
          class="btn btn-primary"
          type="button"
          @click.prevent="getData">FetchData</button>
          <ul class="list-group">
              <li class="list-group-item"
                  v-for="u in users"
                  :key="u.username">
              {{u.username}} - {{u.email}} 
              </li>
          </ul>
      </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get("data.json")
        .then(
          res => {
            return res.json();
          },
          error => {
            console.error(error);
          }
        )
        .then(data => {
          const obj = Object.values(data);
          this.users = obj;
        });
    },
    submit() {
      //   this.$http.post("data.json", this.user).then(
      //     res => {
      //       console.log(res);
      //     },
      //     error => {
      //       console.error(error);
      //     }
      //   );
      //   this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>

<style>
</style>
