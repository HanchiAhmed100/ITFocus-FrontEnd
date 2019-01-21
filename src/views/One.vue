<template>
    <div>
        <post></post>
    </div>
</template>

<script>
import landing from '../components/landing'
import post from '../components/OneArticle/post'
export default {
    name : "home",
    components : {
        landing,
        post
    },
    data () {
        return {
            
        }
    },  
    mounted() {

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
