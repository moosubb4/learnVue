<template>
  <div>
    <div>
      <h1>Exercise 4</h1>

      <!-- 1) swith class-->
      <div>
        <button @click="startEffect">Start Effect</button>
        <div id="effect" :class="effectClasses"></div>
      </div>
      <hr>
      <!-- 2) attach Css class in array-->
      <div :class="freeStyle">I got no class :( </div>
      <hr>
      <!-- 3) Enter class an attach to div-->
      <div>
        <input type="text" placeholder="class" v-model="classKey">
        <div :class="[classKey,{visible:true}]" ></div>
      </div>
      <hr>
      <!-- 4) Enter class an attach to div-->
      <div>
        <input type="text" v-model="classKey"><br>
        <input type="text" v-model="isVisible">
        <div :class="[classKey,{visible:isVisible}]"></div>
      </div>
      <hr>
      <!-- 5) Enter class an attach to div-->
      <div>
        <input type="text" v-model="myStyle.backgroundColor">
        <div :style="myStyle"></div>
      </div>
      <hr>
      <!-- 6) Enter class an attach to div-->
      <div>
        <button @click="calProgress">Start Progress</button>
        <div :class="['progress-bar']">
          <div class="progress" 
          :style="{ width:progress+'px' }"></div>
        </div>
      </div>
      <hr>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      effectClasses: {
        highlight: false,
        shrink: true
      },
      freeStyle: ["float", "blue", "text-color"],
      classKey: "",
      isVisible: true,
      myStyle: {
        width: "100px",
        height: "150px",
        backgroundColor: "gray"
      },
      progress: 0
    };
  },
  computed: {},
  methods: {
    startEffect() {
      const vm = this;
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 500);
    },
    calProgress() {
      const progressPercent = setInterval(() => {
        if (this.progress === 200) {
          clearInterval(progressPercent);
        } else {
          this.progress += 20;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}
.blue {
  background-color: blue;
}
.float {
  float: right;
}
.text-color {
  color: white;
}
.visible {
  width: 100px;
  height: 50px;
}
.progress-bar {
  width: 200px;
  height: 20px;
  border: 1px solid black;
}

.progress-bar > .progress {
  width: 1%;
  height: 100%;
  background-color: greenyellow;
}
</style>
 