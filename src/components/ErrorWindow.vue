<template>
  <div>
    <h3>This is passed error message: {{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ErrorWindow',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
