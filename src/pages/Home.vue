<template>
  <div>
    <h2>Welcome home</h2>
    <Dashboard v-bind:prop='dashboardProp'></Dashboard>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard'
  export default {
    name: 'Home',
    components: {
      Dashboard
    },
    data() {
      return {
        dashboardProp: 'I am dashboard prop'
      }
    }
  }
</script>
