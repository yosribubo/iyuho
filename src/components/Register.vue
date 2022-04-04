<template>
    <section>
        <header>
            <section>
                <svg id="back_btn" xmlns="http://www.w3.org/2000/svg" width="9.991" height="10.04" viewBox="0 0 9.991 10.04" v-on:click="goBack">
                    <g id="Group_407" data-name="Group 407" transform="translate(-167 -334)">
                        <path id="ios-arrow-back" d="M12.981,11.212l3.8-3.8A.718.718,0,1,0,15.763,6.4l-4.3,4.3a.716.716,0,0,0-.021.989l4.322,4.331a.717.717,0,0,0,1.016-1.013Z" transform="translate(160 327.807)" fill="#fff"/>
                        <path id="ios-arrow-back-2" data-name="ios-arrow-back" d="M1.73,5.019l3.8-3.8A.718.718,0,1,0,4.513.21l-4.3,4.3A.716.716,0,0,0,.188,5.5L4.51,9.831A.717.717,0,0,0,5.526,8.817Z" transform="translate(172.74 344.04) rotate(180)" fill="#fff"/>
                    </g>
                    </svg>
                <p>Register</p>
            </section>
        </header>
        <main class="top">
            <section class="register-logo">
                <img src="../assets/img/logo.svg" alt="">
            </section>
            <section class="register-input-field">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="--@example.com" v-model="email">
            </section>
            <section class="register-input-field">
                <label for="mobile">Phone Number</label>
                <input type="text" id="mobile" name="mobile" class="mobile" placeholder="Phone Number" v-model="mobile">
            </section>
            <section class="register-input-field captaha-field">
                <div>
                    <label for="captcha">Captcha</label>
                    <input type="text" id="captcha" name="captcha" placeholder="--" v-model="captcha">
                </div>
                <img style="width:30%;margin:auto;margin-right: 10px;border-radius:10px;box-shadow:0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);" src="Http://app.iyuho.net/captcha.html" id="captcha_img" onclick="javascript:this.src='Http://app.iyuho.net/captcha.html?rand='+Math.random()">
            </section>
            <section class="transfer-field-input">
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" minlength="8" placeholder="********" v-model="password">
                </div>
                <svg style="padding-right: 20px;" id="new-pwd-reg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.20157 3.99925C4.20157 4.95256 5.00821 5.72537 6.00326 5.72537C6.9983 5.72537 7.80494 4.95256 7.80494 3.99925C7.80494 3.04593 6.9983 2.27313 6.00326 2.27313C5.00821 2.27312 4.20157 3.04594 4.20157 3.99925ZM6 0.405209C7.03025 0.409779 8.09814 0.660589 9.10904 1.14078C9.85962 1.512 10.5911 2.03574 11.2261 2.68219C11.5379 3.01218 11.9357 3.49 12 3.99981C11.9924 4.44142 11.5187 4.9865 11.2261 5.31744C10.6306 5.9385 9.9182 6.44762 9.10904 6.85923C8.16633 7.31674 7.12288 7.58015 6 7.5948C4.96877 7.59016 3.90112 7.33646 2.89134 6.85923C2.14076 6.48801 1.40891 5.96389 0.773941 5.31744C0.462091 4.98745 0.0643203 4.50962 2.68221e-07 3.99981C0.00760027 3.5582 0.481301 3.0131 0.773941 2.68217C1.36937 2.06111 2.08218 1.55238 2.89134 1.14076C3.83356 0.683598 4.87958 0.421999 6 0.405209ZM6.00076 1.29769C4.43957 1.29769 3.17401 2.50763 3.17401 4.0002C3.17401 5.49276 4.43957 6.7027 6.00076 6.7027C7.56195 6.7027 8.82751 5.49275 8.82751 4.0002C8.82751 2.50763 7.56195 1.29769 6.00076 1.29769Z" fill="#FAFAFA"/>
                    </svg>
            </section>
            <section class="transfer-field-input">
                <div>
                    <label for="repassword">Repeat Password</label>
                    <input type="password" id="repassword" name="repassword" minlength="8" placeholder="********" v-model="repassword">
                </div>
                <svg style="padding-right: 20px;" id="confirm-pwd-reg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.20157 3.99925C4.20157 4.95256 5.00821 5.72537 6.00326 5.72537C6.9983 5.72537 7.80494 4.95256 7.80494 3.99925C7.80494 3.04593 6.9983 2.27313 6.00326 2.27313C5.00821 2.27312 4.20157 3.04594 4.20157 3.99925ZM6 0.405209C7.03025 0.409779 8.09814 0.660589 9.10904 1.14078C9.85962 1.512 10.5911 2.03574 11.2261 2.68219C11.5379 3.01218 11.9357 3.49 12 3.99981C11.9924 4.44142 11.5187 4.9865 11.2261 5.31744C10.6306 5.9385 9.9182 6.44762 9.10904 6.85923C8.16633 7.31674 7.12288 7.58015 6 7.5948C4.96877 7.59016 3.90112 7.33646 2.89134 6.85923C2.14076 6.48801 1.40891 5.96389 0.773941 5.31744C0.462091 4.98745 0.0643203 4.50962 2.68221e-07 3.99981C0.00760027 3.5582 0.481301 3.0131 0.773941 2.68217C1.36937 2.06111 2.08218 1.55238 2.89134 1.14076C3.83356 0.683598 4.87958 0.421999 6 0.405209ZM6.00076 1.29769C4.43957 1.29769 3.17401 2.50763 3.17401 4.0002C3.17401 5.49276 4.43957 6.7027 6.00076 6.7027C7.56195 6.7027 8.82751 5.49275 8.82751 4.0002C8.82751 2.50763 7.56195 1.29769 6.00076 1.29769Z" fill="#FAFAFA"/>
                    </svg>
            </section>
            <section class="transfer-choose-field" style="margin-bottom:5px">
                <select name="package_register" id="package_register" style="background-image: url('../assets/img/UpDown.svg');">
                    <option value="0" selected>Choose a Membership Package</option>
                    <option value="1">Bronze - 100 USDT</option>
                    <option value="2">Silver - 200 USDT</option>
                    <option value="3">Gold - 400 USDT</option>
                    <option value="4">Platinum - 1000 USDT</option>
                    <option value="special">Test Package - 1 PIN</option>
                </select>
            </section>
            <section id="package_description" style="padding-left:5px;color:white;font-size:12px;opacity:0.7;display:none;">
                <span>--</span>
            </section>
            <section class="register-input-field">
                <label for="direct">Direct Sponsor</label>
                <input type="text" id="direct" name="direct" placeholder="--@example.com" v-model="direct">
            </section>
            <section class="register-input-field">
                <label for="invit">Position Upline</label>
                <input type="text" id="invit" name="invit" placeholder="--@example.com" v-model="invit">
            </section>
            <section class="register-input-field">
                <label style="margin-bottom: 5px;">Position</label>
                <div class="gender-btn">
                    <div id="left" class="gender g-active">
                        <div><section></section></div>
                        <label>Left</label>
                    </div>
                    <div id="right" class="gender">
                        <div><section></section></div>
                        <label>Right</label>
                    </div>
                    <input type="hidden" id="position" name="position" value="left" readonly>
                </div>
            </section>
            <section class="register-accept" id="accept">
                <div>
                    <svg id="accept-mark" xmlns="http://www.w3.org/2000/svg" width="8.923" height="7.472" viewBox="0 0 8.923 7.472">
                        <path id="Path_114" data-name="Path 114" d="M18.409,12.375,13.4,18.341,11.25,15.955" transform="translate(-10.367 -11.494)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>
                    </svg>
                </div>
                <p>I Accept All The Terms And Conditions.</p>
            </section>
            <section class="transfer-button">
                <button class="register-button">Register</button>
            </section>
        </main>
    </section>
</template>

<script lang="js">

    import $ from 'jquery';
    import Axios from "axios";
    import intlTelInput from "../assets/build/js/intlTelInput.js";


export default {
    data: function() {
        return {
            trans_lock: 0,
            invite: '',
            direct: '',
            email: '',
            country_code: '',
            mobile: '',
            password: '',
            repassword: '',
            captcha: '',
            package_register: '',
            nposition:'',
        }
    },

    mounted() {       
        
        var input = document.querySelector("#mobile");
        // eslint-disable-next-line no-unused-vars
        var iti = intlTelInput(input, {
            placeholderNumberType: "MOBILE",
            preferredCountries: ['my'],
            separateDialCode: true,
            utilsScript: "../asssets/build/js/utils.js",
        });

        var invit_data = this.GetURLParameter('invit');
        var direct_data = this.GetURLParameter('direct');

        if (this.invit_data) {
            Axios({
                    method:'GET',
                    url:'http://app.iyuho.net/Api/invit',
                    data: {invit:invit_data},
                    headers:{
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Content-Type':'text/json'
                    }
                })
                .then((res) => {
                    const data = res;
                    if(data.code == 1){
                        var arr = data.data;
                        $("#invit").val(arr.invit);
                        $("#direct").val(arr.direct);
                    }
                })
                .catch(err => console.log(err));
        } else {
            Axios({
                    method:'GET',
                    url:'http://app.iyuho.net/Api/invit',
                    data: {direct:direct_data},
                    headers:{
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Content-Type':'text/json'
                    }
                })
                .then((res) => {
                    const data = res;
                    if(data.code == 1){
                        var arr = data.data;
                        $("#direct").val(arr.direct);
                        $("#invit").val(arr.invit);
                    }
                })
                .catch(err => console.log(err));
        }

        $('#package_register').change(function() {
            var package_no = $(this).val();
            var package_description = '--';
            if(package_no == 1){
                package_description = '+ 4 PIN ';
            }else if(package_no == 2){
                package_description = '+ 100 Gas + 8 PIN ';
            }else if(package_no == 3){
                package_description = '+ 100 Gas + 1 NFT + 16 PIN ';
            }else if(package_no == 4){
                package_description = '+ 300 Gas + 3 NFT + 40 PIN ';
            }else if(package_no == 'special'){
                package_description = '2 months period';
            }
            
            this.package_description = package_description;
            $('#package_description').text(package_description);
            $('#package_description').show();
        });

        $(".gender").click(function (){
            var now_position = $(this).attr('id');
            $("#position").val(now_position);
            $(".g-active").removeClass("g-active");
            $(this).addClass("g-active");
        });
        
        $("#new-pwd-reg").click(function(){
            if($("#password").attr("type") == "password") {
                $("#password").attr("type", "text");
            }else{
                $("#password").attr("type", "password");
            }
        });
        
        $("#confirm-pwd-reg").click(function(){
            if($("#repassword").attr("type") == "password") {
                $("#repassword").attr("type", "text");
            }else{
                $("#repassword").attr("type", "password");
            }
        });
        
        $("#mobile").blur(function(value) {
            return /^\d*$/.test(value);
            });
            
        $("#accept").click(function() {
            $("#accept-mark").toggle();
        });
        
        $("#mobile").inputFilter(function(value) {
          return /^\d*$/.test(value); 
        });
    },

    methods: {

        GetURLParameter: function (sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return decodeURIComponent(sParameterName[1]);
                }
            }
        },

        validateEmail: function (enname) {
            var re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(enname); 
        },

        goBack: function () {
            window.history.back();
        },

        onRegister: function () {
            if (this.trans_lock) {
                // TODO: show message "Do not resubmit"
                return;
            }
            this.trans_lock = 1;
            // eslint-disable-next-line no-undef
            this.country_code = iti.selectedCountryData.dialCode;
            this.nposition = $("#position").val();

            if (this.email == "" || this.email == null) {
                // TODO: show message "Please enter email address"
                this.trans_lock = 0;
                return false;
            }

            if (!this.validateEmail(this.email)) {
                // TODO: show message "Email address format error"
                this.trans_lock = 0;
                return false;
            }

            if (this.country_code == "" || this.country_code == null) {
                // TODO: show message "Please select country code"
                this.trans_lock = 0;
                return false;
            }
            
            if (this.mobile == "" || this.mobile == null) {
                // TODO: show message 'Please enter mobile phone'
                this.trans_lock = 0;
                return false;
            }
            
            if (this.captcha == "" || this.captcha == null) {
                // TODO: show message 'Please enter captcha'
                this.trans_lock = 0;
                return false;
            }
            
            if (this.password == "" || this.password == null) {
                // TODO: show message 'Please enter password'
                this.trans_lock = 0;
                return false;
            }
            if (this.repassword == "" || this.repassword == null) {
                // TODO: show message 'Please enter a confirmation password'
                this.trans_lock = 0;
                return false;
            }
            if (this.password != this.repassword) {
                // TODO: show message 'The password entered twice is inconsistent'
                this.trans_lock = 0;
                return false;
            }

            if (this.direct == "" || this.direct == null) {
                // TODO: show message 'Please enter direct sponsor'
                this.trans_lock = 0;
                return false;
            }
            
            if (this.invit == "" || this.invit == null) {
                // TODO: show message 'Please enter position upline'
                this.trans_lock = 0;
                return false;
            }
            
            if (this.nposition == "" || this.nposition == null) {
                // TODO: show message 'Please select user position'
                this.trans_lock = 0;
                return false;
            }
            
            if (this.nposition != "left" && this.nposition != "right") {
                // TODO: show message 'Please select left or right position'
                this.trans_lock = 0;
                return false;
            }

            var form = {
                mobile: this.mobile, 
                email: this.email, 
                nposition:this.nposition, 
                password: this.password, 
                repassword: this.repassword, 
                direct: this.direct, 
                invit: this.invit, 
                verify: this.captcha, 
                qz: this.country_code,
                packages:this.package_register
            }

            Axios({
                method:'post',
                url:'http://app.iyuho.net/Api/upregister',
                data: form,
                headers:{
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Content-Type':'text/json'
                }
            }) 
            .then( response => {
                console.log(response);
                if (response.status == 1) {
                    // TODO: success message
                    window.location.href = "/User/index";
                } else {
                    // TODO: error message
                    if (response.url) {
                        window.location.href = response.url;
                    }
                }
            })
            .catch(error => {
                console.log(error);
            }); 
        },

    }
}
</script>

<style lang="css" scoped>
    @import '../assets/build/css/intlTelInput.css';
    @import '../assets/css/styles.css';

    .iti__country-name {
        color: black !important;
    }
</style>