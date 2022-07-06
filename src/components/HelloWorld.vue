<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      class="btn btn-warning"
      @click="toast"
    ><i class="fa fa-user"></i>amani</div>

  </div>
  <div
      class="btn btn-danger"
      @click="command"
    ><i class="fa fa-save"></i>Console</div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    toast() {
      alert("You have clicked this");
    },
    command(){
    console.log("This Console Log,You are welcome SIR")
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fa-user {
  color: rgb(211, 226, 211);
  size: 32px;
  padding: 5px;
  margin: 3px;
}
</style>
