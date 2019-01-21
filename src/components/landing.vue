<template>
<div>


    <section class="banner-area">
        <div class="container box_1170">
            <div class="row fullscreen d-flex align-items-center justify-content-center">
                <div class="banner-content text-center col-lg-8">
                    <h1>
                        Be Social
                    </h1>
                </div>
            </div>
        </div>
    </section>
    <section class="mm">
		<div class="container box_1170 ">
			<div class="row justify-content-center">
				<div class="col-lg-10">

						<div class="post-box uk-card uk-card-default mb-30" v-for="i in article" :key="i.id">
							<div class="d-flex">
								<div>
									<a href="#">
										<i class="fa fa-user fa-3x"></i>
									</a>
								</div>
								<div class="post-meta">
									<div class="meta-head">
										<a href="#">{{ i.uname }}</a>
									</div>
									<div class="meta-details">
										<ul>
											<li>
												<a href="#">
													<span class="lnr lnr-calendar-full"></span>
													Ajouter le  : {{ `${i.CreatedAt.getDate()}/${i.CreatedAt.getMonth()}/${i.CreatedAt.getFullYear()}`}}
												</a>
											</li>
											<li>
												<a href="#">
													<span class="lnr lnr-coffee-cup"></span>
													{{i.badge}}
												</a>
											</li>

										</ul>
									</div>
								</div>
							</div>
							<p>{{i.des}}</p>
							<div class="post-btn">
								<a v-on:click="route(i.id)" class="primary-btn text-uppercase">Read More</a>
							</div>
						</div>
					</div>
			</div>
		</div>
    </section>
</div>
</template>

<script>
import Service from '../Service'
export default {
    data() {
        return {
            article : []
        }
    },
    async mounted () {
        this.article = await Service.GetFirstArticle() 
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
.mm{
    padding-top: -100;
    margin-top: -100px
}
</style>
