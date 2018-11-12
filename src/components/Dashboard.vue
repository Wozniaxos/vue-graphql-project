<template>
  <div>
    <h3>This is dashboard with prop: {{ prop }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    prop: String
  }
}
</script>

<style scoped>
</style>
