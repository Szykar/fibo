<template>
  <div>
    <h1>Fibonnacii</h1>
    <div>
      <label for="nr">K = </label>
      <input id="nr" type="number" v-model="input" min="1" max="999"/>
    </div>
    <div>
      Fibonacci({{input}}) =  {{ result }}
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {computed} from "vue";

@Options({})
export default class Fibonnacci extends Vue {
  input = 1;

  calculateFibo = (result: number, counter: number): number => {
    if (counter === 0) {
      return 0;
    } else if (counter === 1) {
      return 1;
    } else {
      return this.calculateFibo(result, counter - 2)
          + this.calculateFibo(result, counter - 1);
    }
  }

  result = computed(() => {
    return this.calculateFibo(0, this.input);
  })


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
