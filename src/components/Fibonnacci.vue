<template>
  <div>
    <h1>Fibonnacii</h1>
    <div>
      <input type="number" v-model="input" min="0" max="999"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class Fibonnacci extends Vue {
  input = 0;
}
</script>

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
</style>
