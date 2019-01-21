<template>
    <div>
        <div class="uk-height-max-small uk-width-3-4">
            <BarChart :chart-data="datacollection" :styles="{height: '250px'}" ></BarChart>
        </div>
    </div>    
</template>

<script>
import Service from '../Service';
import BarChart from '../assets/BarChart.js'

export default {
    name : "statistique",
    components: {
        BarChart
    },
    data () {
        return {
            article : [],
            LoginId : '',
            Logintoken : '',
            articlestmp : []

        }
    },
    async created() {

      if(localStorage.token && localStorage.id){
        this.LoginId =  localStorage.id
        this.Logintoken =  localStorage.token
      }else{
      this.$router.push('login')
      }

    },
    async mounted () {


        this.articles = await  Service.getArticle()

        this.fillData()
        let object = {
            label: [],
            backgroundColor: [],
            data: []
        }



        for (let index = 0; index < this.articles.length; index++) {

                this.articlestmp = this.articles.filter(articles => {
                    return articles.badge.toLowerCase().includes(this.article[index].badge.toLowerCase())
                })

            this.datacollection.labels.push(this.articles[index].Title)
            object.data.push(this.articles[index])
            object.backgroundColor.push(this.getRandomColor())
        }




        
      
        this.datacollection.datasets.push(object)
    },
    methods: {
        fillData () {
            this.datacollection = {
            labels: [],
            datasets: [],
            backgroundColors: []
            }
        },
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }
}
</script>

<style>

</style>
