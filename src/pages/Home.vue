<template>
  <div>
    <p>Welcome home</p>
    {{ msg }}
    <Sraj></Sraj>
  </div>
</template>

<script>
import Sraj from '../components/Srajkonent'
  export default {
    name: "Home",
    components: {
      Sraj
    },
    data() {
      return {
        msg: "dupa"
      }
    }
  }
</script>
