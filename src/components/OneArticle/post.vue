<template>
    <section class="blog_area section-gap single-post-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="main_blog_details" v-for="a in article" :key="a.id">
                        <img class="img-fluid" v-if="a.pic !='uploads/' " :src=" a.pic " alt="">
                        <img class="img-fluid" v-if="a.pic =='uploads/' " src="uploads/test.jpg" alt="">
                        <h4 class="uk-text-capitalize">{{a.titre}}</h4>
                        <div class="user_details">
                            <div class="float-left">
                                <a href="#">{{a.badge}}</a>
                            </div>
                            <div class="float-right">
                                <div class="media">
                                    <div class="media-body">
                                        <h5>{{a.uname}}</h5>
                                        <p>Ajouter le  : {{ `${a.CreatedAt.getDate()}/${a.CreatedAt.getMonth()}/${a.CreatedAt.getFullYear()}`}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>{{a.des}}</p>
                        <div class="news_d_footer">
                            <span v-if="show"><i  class="lnr lnr lnr-heart" v-on:click="like()"  style="color : red">  {{lii}} likes </i></span>
                            <span v-if="show == false"><i class="lnr lnr lnr-heart" v-on:click="unlike()" >  {{lii}} unlikes </i> </span>
                            <a class="justify-content-center ml-auto" href="#"><i class="lnr lnr lnr-bubble"></i>{{commentnbr}}
                                Comments</a>
                        </div>
                    </div>
                    <div class="comments-area">
                        <h4>{{commentnbr}} comments </h4>
                        <div class="comment-list" v-for="c in comments" :key=" c.id ">
                            <div class="single-comment justify-content-between d-flex">
                                <div class="user justify-content-between d-flex">
                                    <div class="thumb">
                                        <i class="fa fa-user fa-2x"></i>
                                    </div>
                                    <div class="desc">
                                        <h5><a href="#"> {{ c.uname }}</a></h5>
                                        <p class="date">{{ c.mydate}} </p>
                                        <p class="comment">
                                         {{c.uname}} :  {{ c.mytext }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comment-form">
                        <h4>Leave a Reply</h4>
                        <form>
                            <div class="form-group">
                                <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required="" v-model="mytext"></textarea>
                            </div>
                            <a v-on:click="AddComment" class="primary-btn submit_btn text-uppercase">Send Message</a>
                            <p v-if="alert">{{alert}}</p>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4 sidebar">
                    <search></search>
                    <popular></popular>
                    <newsletter></newsletter>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import newsletter from '../newsletter'
import popular from '../popular'
import Service from '../../Service'
import search from '../search'

export default {
    name : "smain",
    components : {
        newsletter,
        popular,
        search
    },
    data () {
        return {
            article : [],
            comments : [],
            commentnbr : 0,
            aid :  this.$route.params.id,
            uname :  localStorage.uname,
            uid : localStorage.id,
            mytext : '',
            alert : '',
            li : [],
            lii : '',
            show : true
        }
    },
    async mounted () {
        window.scrollTo(0, 0); // values are x,y-offset
        this.article = await Service.getOneArticle(this.aid)
        this.comments = await Service.getOneArticleComment(this.aid)
        this.li = await Service.getPostLikes(this.aid)
        this.lii = this.li.length
        if(this.comments.length != 0 ){
            for (let i = 0; i < this.comments.length; i++) {
                this.commentnbr = i
            }
            this.commentnbr ++

        }

        for (let x = 0; x < this.li.length; x++) {
            if(this.uid == this.li[x].uid){
                this.show = false 
            }
            
        }

    },
    methods: {
        async AddComment() {
            if(this.mytext != '' ){
                await Service.Addcomment(this.uid,this.uname,this.aid,this.mytext);
                this.comments = await Service.getOneArticleComment(this.aid)
               
                this.mytext =''
                this.alert = 'Commentaire ajouter '
            }
            else{
                this.alert = 'Le champs commantaire est obligatoire !'
            }
        },
        async like () {
            await Service.like(this.uid,this.aid)
            this.li = await Service.getPostLikes(this.aid)
            this.lii = this.li.length
            for (let x = 0; x < this.li.length; x++) {
                if(this.uid == this.li[x].uid){
                    this.show = false 
                }else{
                    this.show = true
                }
            }
        },
        async unlike () {
            await Service.unlike(this.aid,this.uid)
            this.li = await Service.getPostLikes(this.aid)
            this.lii = this.li.length
            for (let x = 0; x < this.li.length; x++) {
                if(this.uid == this.li[x].uid){
                    this.show = false 
                }else{
                    this.show = true
                }
            }
        }
    }   
}
</script>

<style>

</style>
