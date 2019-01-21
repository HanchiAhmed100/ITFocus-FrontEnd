<template>
    <header id="header">
        <div class="container box_1170 main-menu">
            <div class="row align-items-center justify-content-between d-flex">
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li class="menu-active" v-on:click="homeroute()"><a>Home</a></li>
                        <li class="menu-active" v-on:click="logroute()" ><a>Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
    ,
    
    methods : {
        homeroute : function(){
            this.$router.push('/')
        },
        logroute : function(){
            this.$router.push('/login')
        },
    
    }
}
</script>

<style>

</style>
