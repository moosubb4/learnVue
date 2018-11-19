<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address : {{ email }}</p>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { User } from '../model/User';
import { Component, Vue } from 'vue-property-decorator';

export interface Users extends User {
  id: string;
}

@Component({

})

export default class Dashboard extends Vue {

  public email: string = ''

  public created() {
    axios.get('users.json')
      .then((res) => {
        // console.log(res);
        const data = res.data;
        const users: Users[] = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }

        console.log("​Dashboard ", users);
        this.email = users[0]['email'];

      })
      .catch(err => console.log(err))
  }

}
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>