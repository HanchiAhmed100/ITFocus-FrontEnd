<template>
  <div class="uk-padding-large uk-margin-large">
    <div class="cont">
      <div class="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Email</span>
          <input type="email" v-model="logmail" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" v-model="logpassword" />
        </label>
                  <p class="forgot-pass" v-if="alert" style="color : red">        {{ alert}}</p>

        <button type="button" class="submit btn" v-on:click="login()">Sign In</button>


      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>Are you New here</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h2>One of us?</h2>
            <p>If you already has an account, just sign in. We've missed you!</p>
          </div>
          <div class="img__btn" v-on:click="signupfunc">
            <span class="m--up">Sign Up</span>
            <span class="m--in">Sign In</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>Time to feel like home,</h2>
          <label>
            <span>Full Name</span>
            <input type="text" v-model="fullname" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" v-model="regmail"/>
          </label>
          <label>
            <span>Password</span>
            <input type="password" v-model="regpassword"/>
          </label>
          <button type="button" class="submit btn" v-on:click="signup">Sign Up</button><br>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from '../Service'

export default {
    name : "login",
    data () {
        return {
          logmail : '',
          logpassword :'',
          fullname : '',
          regmail : '',
          regpassword : '',
          alert : '',
          stat : ''
        }
    },
    created () {

    },methods: {
      signupfunc : function(){
        document.querySelector('.cont').classList.toggle('s--signup');
      },
      async signup(){
        if(this.fullname != '' && this.regmail != '' && this.regpassword != '' ){
          await Service.register(this.fullname, this.regmail,this.regpassword)
          this.fullname = ''
          this.regmail = ''
          this.regpassword = ''
          this.alert ='Votre compte a été creé'
          this.signupfunc()
        }
        else{
          this.alert = 'Les champs sont obligatoire !'
        }
      },
      async login(){
        if(this.logmail != '' && this.logpassword != '' ){
          this.stat = await Service.login(this.logmail, this.logpassword)
          this.logmail = ''
          this.logpassword = ''
          if(this.stat){
              console.log(this.stat.data.s)
              localStorage.id =  this.stat.data.s.id;
              localStorage.token =  this.stat.data.s.token;
              localStorage.uname =  this.stat.data.s.uname;
              this.$router.push('/')
          }
          this.$router.push(home)
        }
        else{
          this.alert = 'Les champs sont obligatoire !'
        }
      }

    }
    



}
</script>

 <style scoped>

	
	*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  background: #ededed;
}

input, button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  overflow: hidden;
  position: relative;
  width: 900px;
  height: 500px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  width: 640px;
  height: 100%;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}
.cont.s--signup .sub-cont {
  -webkit-transform: translate3d(-640px, 0, 0);
          transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius:0px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
button:hover{
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}
.img:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg");
  background-size: cover;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}
.img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.cont.s--signup .img:before {
  -webkit-transform: translate3d(640px, 0, 0);
          transform: translate3d(640px, 0, 0);
}
.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}
.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}
.img__text p {
  font-size: 14px;
  line-height: 1.5;
}
.cont.s--signup .img__text.m--up {
  -webkit-transform: translateX(520px);
          transform: translateX(520px);
}
.img__text.m--in {
  -webkit-transform: translateX(-520px);
          transform: translateX(-520px);
}
.cont.s--signup .img__text.m--in {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}
.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}
.img__btn:after {
  content: '';
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius:0px;
}
.img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: -webkit-transform 1.2s;
  transition: transform 1.2s;
  transition: transform 1.2s, -webkit-transform 1.2s;
}
.img__btn span.m--in {
  -webkit-transform: translateY(-72px);
          transform: translateY(-72px);
}
.cont.s--signup .img__btn span.m--in {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
.cont.s--signup .img__btn span.m--up {
  -webkit-transform: translateY(72px);
          transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;

}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}
label span {
  font-size: 12px;
  color: #cfcfcf;
  text-transform: uppercase;
  font-family: sans-serif;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}
.btn{
	background-color: rgba(128, 80, 250, 0.9);
}
.btn:hover{
	background-color: #fff;
	border:1px solid rgba(128, 80, 250, 0.9);
	color: rgba(128, 80, 250, 0.9);

}
.fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}
.fb-btn span {
  font-weight: bold;
  color: #455a81;
}

.sign-in {
  transition-timing-function: ease-out;
}
</style>
