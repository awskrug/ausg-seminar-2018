<template>
  <div class="page">
    <p>안녕하세요! {{ serviceName }}에 오신 것을 환영합니다!</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      serviceName: 'AUSG'
    }
  },
}
</script>
