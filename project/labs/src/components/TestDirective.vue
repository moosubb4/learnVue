<template>
    <div class="container">        
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Hello directive</h1>
                <button 
                class="btn btn-info"
                v-customOn:click="clicked">Click ME</button>
                  <hr>
                <div 
                v-customOn:mouseenter="mouseEnter"
                v-customOn:mouseleave="mouseLeave"
                style="width:100px;height:100px;background-color:lightgreen;"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        //   el.onclick = function (){
        //       binding.value();
        //   }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("Clicked ed ed");
    },
    mouseEnter() {
      console.log("mouseEnter");
    },
    mouseLeave() {
      console.log("mouseLeave");
    }
  }
};
</script>

<style>
</style>
