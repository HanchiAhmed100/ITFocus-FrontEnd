<template>
    <div class="single-widget popular-posts-widget" >
        <div v-for="i in article" :key="i.id">
            <h4>Most popular</h4>
            <h4 class="title">{{ i.titre }}</h4>
            <div class="blog-list ">
                <div class="single-popular-post d-flex flex-row">
                    <div class="popular-details">
                        <a v-on:click="route(i.id)" >
                            <h6>{{ i.des }}</h6>
                        </a>
                        <p> {{ i.badge }} </p>
                        <p class="text-uppercase">Le : {{ `${i.CreatedAt.getDate()}/${i.CreatedAt.getMonth()}/${i.CreatedAt.getFullYear()}`}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../Service'
export default {
    name : "popular",
    component : {

    },
    data () {
        return {
            article : []
        }
    },
    async mounted() {
        this.article = await Service.Getbylikes()  
    },
    methods : {
        route : function(id){
            console.log(id)
            let str = "/a/"+id
            this.$router.push(str)
        }
    }
}
</script>

<style>

</style>
