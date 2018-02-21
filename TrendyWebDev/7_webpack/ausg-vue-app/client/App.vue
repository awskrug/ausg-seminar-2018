<script>
export default {
  // 변수를 JS Object Literal 형식으로 선언 할 수 있습니다
  data: function() {
    return {
      name: 'AUSG',
    }
  },
  // 함수를 마찬가지로 선언 할 수 있습니다
  methods: {
    greet: function() {
      window.alert('hello!')
    },
  }
}
</script>

<template>
  <div id="app">
    <!-- <script>에서 선언한 data를 <template>에서 사용합니다 -->
    Hello, We Are {{ name }}
    <button v-on:click="greet">greet</button>
  </div>
</template>

<style>
button {
  display: block;
}
</style>