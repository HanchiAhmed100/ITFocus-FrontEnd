<template>
    <div>
        <landing></landing>
        <smain></smain>
    </div>
</template>

<script>
import landing from '../components/landing'
import smain from '../components/smain'
export default {
    name : "home",
    components : {
        landing,
        smain
    },
    data () {
        return {
            
        }
    }  
    ,mounted() {

    if(localStorage.token && localStorage.id){
      this.LoginId =  localStorage.id
      this.Logintoken =  localStorage.token

    }else{
     this.$router.push('login')
    }
  }
}
</script>

<style>

</style>
