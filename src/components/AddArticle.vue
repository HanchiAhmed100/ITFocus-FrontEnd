<template>
    <div>
        <div class="col-lg-11 sidebar">
            <div class="single-widget search-widget">
                <button class="primary-btn text-uppercase"  href="#modal-sections" uk-toggle>
                    Add Article Now ! 
                </button>
                
            </div>
        </div>
        <div  id="modal-sections" uk-modal>
            <div class="uk-modal-dialog uk-margin uk-padding"><span class="uk-margin uk-padding-large-top">
                <button class="uk-modal-close-default " type="button" uk-close></button></span>
                <form class="uk-form-stacked">
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Titre</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" id="form-stacked-text" type="text" v-model="title" placeholder="Titre de l'article">
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Categorie</label>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-stacked-select" v-model="badge">
                                <option>Politique</option>
                                <option>Santé</option>
                                <option>Sport</option>
                                <option>Voyage</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">L'article</label>
                        <div class="uk-form-controls">
                            <textarea  v-model="des" class="form-control mb-10" rows="5" placeholder="Messege"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required="" ></textarea>
                        </div>
                    </div>
                    <div class="js-upload uk-placeholder uk-text-center">
                        <span uk-icon="icon: cloud-upload"></span>
                        <span class="uk-text-middle">Attachez une image ou </span>
                        <div uk-form-custom>
                            <input type="file" multiple>
                            <span class="uk-link"> select une image</span>
                        </div>
                    </div>
                    <button class="primary-btn text-uppercase" v-on:click="AddArticles()">
                        Valider
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../Service'
export default {

    name : "AddArticle",
    data () {
        return {
            des : '',
            title : '',
            badge : '',
            uid : localStorage.id,
            uname : localStorage.uname
        }
    },
    methods: {
        async AddArticles() {
            if(this.title != '' && this.des != '' && this.badge != '' ){
            
                await Service.AddArticle(this.title, this.des,this.badge,this.uid,this.uname)
                this.title = ''
                this.des = ''
                this.badge = ''
                console.log('hhhsqddqs')
                this.$router.push(home)
            }
            else{
                this.alert = 'Les champs sont obligatoire !'
            }

        }
    }

}
</script>

<style>

</style>
