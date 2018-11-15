<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { headerBus } from '../main';

@Component({
})
export default class About extends Vue {


  private created() {
    // headerBus.$emit('routSelected' , 'about');
  }

}
</script>
