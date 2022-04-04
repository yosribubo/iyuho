<template>
    <main>
        <section class="login-top">
            <img src="@/assets/img/logo.svg" alt="">
        </section>
        <section class="login-loginto">
            <h3>Login to iYuho</h3>
        </section>
        <section class="login-field update-contact-field iyuhotooltiop">
            <small id="login_change" v-on:click="toggleBtn">Change</small>
            <div id="div_email" :class="{'active':flag == 1, 'inactive':flag == 2}">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" 
                    placeholder="user@example.com" 
                    v-model="email" 
                    v-on:click="closetip"
                    required />
            </div>
            <div  id="div_mobile" :class="{'active':flag == 2, 'inactive':flag == 1}">
                <label for="mobile">Mobile</label>
                <input type="tel" id="mobile" name="mobile" class="mobile" v-model="mobile" v-on:click="closetip" required>
                <!-- <vue-tel-input :value="phone" mode="international"></vue-tel-input> -->               
            </div>
            <span id="emailtip" class="iyuhotooltioptext">{{emailErrMsg}}</span>
        </section>
        <section class="login-field iyuhotooltiop">
            <svg id="login-pwd-show-hide" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" v-on:click="showPassword">
                <path d="M4.20157 3.99925C4.20157 4.95256 5.00821 5.72537 6.00326 5.72537C6.9983 5.72537 7.80494 4.95256 7.80494 3.99925C7.80494 3.04593 6.9983 2.27313 6.00326 2.27313C5.00821 2.27312 4.20157 3.04594 4.20157 3.99925ZM6 0.405209C7.03025 0.409779 8.09814 0.660589 9.10904 1.14078C9.85962 1.512 10.5911 2.03574 11.2261 2.68219C11.5379 3.01218 11.9357 3.49 12 3.99981C11.9924 4.44142 11.5187 4.9865 11.2261 5.31744C10.6306 5.9385 9.9182 6.44762 9.10904 6.85923C8.16633 7.31674 7.12288 7.58015 6 7.5948C4.96877 7.59016 3.90112 7.33646 2.89134 6.85923C2.14076 6.48801 1.40891 5.96389 0.773941 5.31744C0.462091 4.98745 0.0643203 4.50962 2.68221e-07 3.99981C0.00760027 3.5582 0.481301 3.0131 0.773941 2.68217C1.36937 2.06111 2.08218 1.55238 2.89134 1.14076C3.83356 0.683598 4.87958 0.421999 6 0.405209ZM6.00076 1.29769C4.43957 1.29769 3.17401 2.50763 3.17401 4.0002C3.17401 5.49276 4.43957 6.7027 6.00076 6.7027C7.56195 6.7027 8.82751 5.49275 8.82751 4.0002C8.82751 2.50763 7.56195 1.29769 6.00076 1.29769Z" fill="#FAFAFA"/>
            </svg>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" minlength="6" 
                placeholder="******"
                v-model="password"
                v-on:click="closetip"
                required />                
            <span id="passwordtip" class="iyuhotooltioptext">{{passwordErrMsg}}</span>
        </section>
        <section class="login-field login-captcha iyuhotooltiop">
            <div>
                <label for="verify">Captcha</label>
                <input type="text" id="verify" autocomplete="off" 
                    placeholder='--'
                    v-model="verify"
                    required>
            <span id="verifytip" class="iyuhotooltioptext">{{verifyErrMsg}}</span>
            </div>
            <img style="width:30%;margin-right: 10px;border-radius:10px;box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);" src="Http://app.iyuho.net/captcha.html" alt="load failed" id="captcha" onclick="javascript:this.src='Http://app.iyuho.net/captcha.html?rand='+Math.random()">
            
        </section> 
        <section class="login-forgot">
            <a class="coming_soon" href="#">Forgot Password?</a>
        </section>       
        <section class="login-button" v-on:click="onSubmit">
            <p>Login</p>
        </section>
    </main>
    
</template>

<script lang="js">

    // import Toasted from 'vue-toasted';

    import Axios from 'axios';
    import intlTelInput from "../assets/build/js/intlTelInput.js";

    export default {
        data() {
            return {
                email   : '',
                password: '',
                verify  : '',
                mobile  : '',
                country_code : '',
                flag    : 1,
                emailErrMsg : '',
                passwordErrMsg : '',
                verifyErrMsg: '',
                mobileErrMsg: '',
                // phone   : ''
            }
        },

        mounted(){
            var input = document.querySelector("#mobile");
            
            // eslint-disable-next-line no-unused-vars
            const iti = intlTelInput(input, {
                placeholderNumberType: "MOBILE",
                preferredCountries: ['my'],
                separateDialCode: true,
                utilsScript: "../asssets/build/js/utils.js",
            });

        },

        components: {
        },

        watch: {
            email(value) {
                // binding this to the data value in the email input
                this.email = value;
                this.validateEmail();
            },
            password(value) {
                // binding this to the data value in the password input
                this.password = value;
                this.validatePassword();
            },
            verify(value) {
                this.verify = value;
                this.validateVerify();
            }
        },

        methods: {

            validateEmail() {
                let el = document.getElementById('emailtip');              
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                        this.emailErrMsg = '';
                        this.closetip(el);
                        return true;
                } else {
                    this.emailErrMsg = 'Please enter a valid email address';                    
                    this.showtip(el);
                    return false
                }           
            },

            validatePassword() {
                let el = document.getElementById('passwordtip');
                if( this.password == '' ) {
                    this.passwordErrMsg = 'Please enter a password';
                    this.showtip(el);
                    return false;
                } else {
                    this.passwordErrMsg = '';
                    this.closetip(el);
                    return false;
                }
            },

            validateVerify() {
                let el = document.getElementById('verifytip');
                if (this.verify === '') {
                    this.verifyErrMsg = 'Place enter a CAPTCHA Code';
                    this.showtip(el);
                } else {
                    this.verifyErrMsg= '';
                    this.closetip(el);
                }
            }, 
            
            toggleBtn: function() {
                this.flag = this.flag == 1 ? 2 : 1;
                // alert(event);
                // document.getElementById('#div_email').toggle();
                // document.getElementById('#div_mobile').toggle();
            },

            showPassword: function() {
                let object = document.getElementById("password");
                if(object.getAttribute('type') == "password") {
                    object.setAttribute("type", "text");
                }else{
                    object.setAttribute("type", "password");
                }
            },

            showtip: function(obj) {
                // var obj = document.getElementById("tradetip");
                obj.style.visibility = "visible";
                obj.style.opacity = "1";
                obj.style.transitionDuration = "1s";
            },

            closetip: function() {
                var obj = document.getElementsByClassName("iyuhotooltioptext");
                for (let index = 0; index < obj.length; index++) {
                    const element = obj[index];
                    element.style.visibility = "hidden";
                    element.style.opacity = "0";
                    element.style.transitionDuration = "1s";
                }
                
            },

            showMessage: function (content, type=0) {
                
                var alert_type = 'alert-success';
                var alert_content = '';
                if (type == 0) {
                    alert_type = 'alert-success';
                    alert_content = '<strong>Successful! </strong>' + content;
                }                    
                if (type == 1) {
                    alert_type = 'alert-warning';
                    alert_content = '<strong>Warning! ' + content;
                }
                if (type == 2) {
                    alert_type = 'alert-danger';
                    alert_content = '<strong>Danger! </strong>' + content;
                }
                    
                var html = '<div class="alert ';
                html += alert_type; 
                html += ' alert-dismissible fade show"> <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="javascript:this.style.opacity=0;"></button>';
                html += alert_content;
                html + ' </div>';
                document.getElementById('message').innerHTML = html;
            },

            onSubmit: function() {

                // Toasted.show('onsubmit');
                
                var form;
                if(this.flag == 1){
                    if (this.email == "" || this.email == null) {
                        this.emailErrMsg = 'Please enter email address';
                        let el = document.getElementById('emailtip');
                        this.showtip(el);
                        return false;
                    }
                    if (!this.validateEmail(this.email)) {
                        this.emailErrMsg = 'Email address format error';
                        let el = document.getElementById('emailtip');
                        this.showtip(el);
                        return false;
                    }
                    form = {email: this.email, password: this.password, verify:this.verify};
                } else {
                    // eslint-disable-next-line no-undef
                    var country_code = iti.selectedCountryData.dialCode();
                    // alert(country_code);

                    if (this.mobile == "" || this.mobile == null || this.mobile.length<8) {
                        this.emailErrMsg = 'Please enter mobile number';
                        let el = document.getElementById('emailtip');
                        this.showtip(el);
                        return false;
                    }
                    if (country_code == "" || country_code == null) {
                        this.emailErrMsg = 'Please select country code';
                        this.trans_lock = 0;
                        return false;
                    }
                    // TODO : country_code validate
                    form = {mobile: this.mobile, country_code: country_code, password: this.password, email: this.eamil};
                }

                if ((this.email == "" || this.email == null) && (this.mobile == "" || this.mobile == null)) {
                     this.emailErrMsg = 'Please enter email address';
                    let el = document.getElementById('emailtip');
                    this.showtip(el);
                    return false;
                }
                
                if (this.password == "" || this.password == null) {
                    this.passwordErrMsg = 'Please enter your password';
                    let el = document.getElementById('passwordtip');
                    this.showtip(el);
                    return false;
                }
                if (this.verify == "" || this.verify == null) {
                    this.verifyErrMsg = 'Place enter a CAPTCHA Code';
                    let el = document.getElementById('verifytip');
                    this.showtip(el);
                    return false;
                }

                // const requestOptions = {
                //     method: "POST",
                //     headers: { "Content-Type": "application/json" },
                //     body: JSON.stringify(form)
                // };
                
                Axios({
                        method:'PUT',
                        url:'http://test.ait.capital/api/index/Login/uplogin',
                        data: form,
                        // withCredentials: true,
                        headers:{
                            // 'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                            'Content-Type':'application/json'
                        }
                    }) 
                    .then( response => {
                        const data = response.data;
                        console.log(data);
                        if (data.code == 1) {
                            this.showMessage(data.msg);
                             window.location.href = "/User/index";
                        } else {
                            this.showMessage(data.msg, 2);
                            if (data.url) {
                                this.verify = '';
                                // window.location.href = data.url;
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    }); 
            }
            
        }
    }
</script>

<style lang="css" scoped>

    @import '../assets/build/css/intlTelInput.css';
    @import '../assets/css/styles.css';
    .active {
        display: block;
    }
    .inactive {
        display: none;
    }

    .vue-tel-input .div:first-child {
        position: absolute;
    }

    .login-button:hover {
        cursor: pointer;
    }

    .iyuhotooltiop .iyuhotooltioptext {
        margin-bottom: -15px;
        margin-left: 3px;
    }

</style>