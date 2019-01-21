import axios from 'axios';

let urlarticle = 'http://localhost:3008/api/article/';
let urlcomment = 'http://localhost:3008/api/comment/';
let urlauthlog = 'http://localhost:3008/api/auth/logusers';
let urlauthreg = 'http://localhost:3008/api/auth/regusers';
let urllike = 'http://localhost:3008/api/like/';
let d = 'd/c'
let ur = 'first/'
let popular = 'popular'
class Service {

    static getArticle(){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get(urlarticle);
                const data = res.data.Article;
                resolve(
                    data.map(article =>({
                        id : article.id,
                        titre : article.titre,
                        des : article.des,
                        badge : article.badge,
                        pic : "uploads/"+article.picture,
                        CreatedAt : new Date( article.date)

                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static getOneArticle(id){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get(`${urlcomment}${id}`);
                const data = res.data.article
                resolve(
                    data.map(article =>({
                        id : article.id,
                        titre : article.titre,
                        des : article.des,
                        badge : article.badge,
                        pic : "uploads/"+article.picture,
                        CreatedAt : new Date( article.date),
                        uname : article.u_name 


                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static GetFirstArticle(){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get(`${urlarticle}${ur}`);
                const data = res.data.Article
                resolve(
                    data.map(article =>({
                        id : article.id,
                        titre : article.titre,
                        des : article.des,
                        badge : article.badge,
                        CreatedAt : new Date( article.date),
                        uname : article.u_name 
                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static Getbylikes(){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get(`${urlarticle}${popular}`);
                const data = res.data.Article
                resolve(
                    data.map(article =>({
                        id : article.id,
                        titre : article.titre,
                        des : article.des,
                        badge : article.badge,
                        CreatedAt : new Date( article.date),
                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }

    static getOneArticleComment(id){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get(`${urlcomment}${id}`);
                const data = res.data.comment
                resolve(
                    data.map(comment =>({
                        id : comment.id,
                        mytext : comment.mytext,
                        uname : comment.uname,

                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static Addcomment(Uid,uname,Aid,mytext){
        return axios.post(urlcomment,{
            Uid,
            uname,
            Aid,
            mytext
        })
    }
    static AddArticle(titre,des,badge,uid,uname){
        return axios.post(urlarticle,{
            titre,
            des,
            badge,
            uid,
            uname
        })
    }
    static login(mail,password){
        return axios.post(urlauthlog,{
            mail,
            password
        })
    }
    static register(fullname,mail,password){
        return axios.post(urlauthreg,{
            fullname,
            mail,
            password,

        })
    }
    static getPostLikes(aid){
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.get(`${urllike}${aid}`);
                const data = res.data.likes
                resolve(
                    data.map(likes =>({
                        uid : likes.u_id,

                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }
    static like(uid,aid){
        return axios.post(`${urllike}${aid}`,{
            uid
        })
    }
    static unlike(aid,uid){
        return axios.post(`${urllike}${d}`,{
            aid,
            uid
        })
    }

/*
    static updateArticle(id,Name,Desc,Qte){
        return axios.put(`${url}${id}`,{
            Name,
            Desc,
            Qte
        }) 
    }
    static StockUpdate(id,Qte){
        return axios.post(`${url}${id}`,{
            Qte
        })
    }

    static deleteArticle(id){
        return axios.delete(`${url}${id}`);
    }
*/
}

export default Service
