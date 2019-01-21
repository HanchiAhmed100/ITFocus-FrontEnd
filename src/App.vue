<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <mfooter></mfooter>
  </div>
</template>
<script>
  import mfooter from './components/mfooter'
  import navbar from './components/navbar'
  export default {
    name: 'App',
    components : {
      mfooter,navbar
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style>
</style>
