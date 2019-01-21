<template>
    <div class="main-body section-gap mt--30">
        <div class="container box_1170">
            <div class="row">
                <div class="col-lg-8 post-list">

                    <add-article></add-article>
                    <!-- Start Post Area -->
                    <section class="post-area" v-for="i in article" v-bind:key="i.id">
                        <div class="single-post-item" >
                            <figure v-if="i.pic">
                                <img class="post-img img-fluid uk-margin-remove-bottom" v-bind:src="i.pic" alt="">
                            </figure>
                            <figure v-if="i.pic == 'uploads/' ">
                                <img class="post-img img-fluid uk-margin-remove-bottom" style="max-height:500px" src="uploads/test4.jpg" alt="">
                            </figure>
                            <div class="post-box uk-card uk-card-default uk-margin-remove-top">
                                <div class="d-flex">
                                    <div class="post-meta">
                                        <div class="meta-head">
                                            <a href="#">{{i.titre}}</a>
                                            
                                        </div>
                                        <div class="meta-details">
                                            <p>{{i.des}}</p>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span class="lnr lnr-calendar-full">  Ajouter le  : {{ `${i.CreatedAt.getDate()}/${i.CreatedAt.getMonth()}/${i.CreatedAt.getFullYear()}`}}</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="lnr lnr-coffee-cup"></span> {{i.badge}}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>
                             <span class="uk-text-capitalize"></span>
                        </h3>
                        <p></p>
                        <a v-on:click="route(i.id)" class="primary-btn text-uppercase mt-15">continue Reading</a><br><br><br><br>
                    </section>

                    <!-- Start Post Area -->
                </div>

                <div class="col-lg-4 sidebar">
                    <search></search>
                    <popular></popular>
                    <newsletter></newsletter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import newsletter from './newsletter'
import popular from './popular'
import Service from '../Service'
import search from './search'
import AddArticle from './AddArticle'

export default {

    name : "smain",
    components : {
        newsletter,
        popular,
        AddArticle,
        search
    },
    data () {
        return {
            article : []
        }
    },
    async mounted () {
        this.article = await Service.getArticle()
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
