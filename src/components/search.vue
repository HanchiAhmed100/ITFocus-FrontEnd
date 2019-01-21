<template>
<div>
    <div class="single-widget search-widget">
        <form class="example" action="#" style="margin:auto;max-width:300px">
            <input type="text" placeholder="Search Posts" v-model="search" v-on:input="filteredList">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <div v-if="articlessearch" class="single-widget search-widget">
      <div v-if="show">
        <div class="uk-card uk-card-default uk-card-body uk-margin-bottom" v-for="a in articlessearch" v-bind:key="a.id">
            <div class="d-flex">
                            <figure v-if="a.pic">
                                <img class="post-img img-fluid uk-margin-remove-bottom" v-bind:src="a.pic" alt="">
                            </figure>
                            <figure v-if="a.pic == 'uploads/' ">
                                <img class="post-img img-fluid  uk-margin-remove-bottom" src="uploads/test4.jpg" alt="">
                            </figure>
            </div>
            <h4>
                {{ a.badge }} : {{ a.titre }} 
            </h4>
            <p>
                {{a.des}}
            </p>
            <a v-on:click="route(a.id)" class="primary-btn text-uppercase mt-15">Ouvrir</a><br><br>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Service from '../Service';
export default {
    data () {
        return {
            articles : [],
            search : '',
            articlessearch : [],
            show : false
        }
    },
    async created() {
        this.articles = await Service.getArticle()
    },
    methods: {
    async filteredList() {
        this.show = true
        this.articlessearch = this.articles
        this.articlessearch = this.articles.filter(articles => {
        return articles.titre.toLowerCase().includes(this.search.toLowerCase())
        })
        if(this.search == '' || this.articlessearch == ''){
            this.show = false
            this.articlessearch = this.articles
        }
        
    },     route : function(id){
            console.log(id)
            let str = "/a/"+id
            this.$router.push(str)
        }
    }

}
</script>

<style>

</style>
