<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <button @click="goto">go to Play</button>
    <app-hello-world msg="Welcome to Home page !"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { headerBus } from '../main';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    appHelloWorld: HelloWorld,
  },
})
export default class Home extends Vue {

  private created() {
    // headerBus.$emit('routSelected' , 'home');
  }

  public goto() {
    // this.$router.push('/play');
    
  }

}
</script>
