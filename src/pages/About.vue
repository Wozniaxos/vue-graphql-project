<template>
  <div>
    <h2>About page</h2>
    <ProjectInformation/>
  </div>
</template>

<script>
  import ProjectInformation from '../components/ProjectInformation'

  export default {
    name: "About",
    components: {
      ProjectInformation
    }
  }
</script>
