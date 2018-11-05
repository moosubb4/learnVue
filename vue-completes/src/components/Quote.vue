<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default">
          <div class="panel-body quote">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.panel-body {
  /* font-family: "Inconsolata", monospace; */
  font-family: "Pacifico", cursive;
  font-size: 18px;
  color: #6e6e6e;
  border: solid 1px #6e6e6e;
  padding: 10px;
  margin: 10px;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>
