<template>
    <header>
        <section>            
            <p>Binance Settings</p>
        </section>
    </header>
    <nav-bar activeflag="api" />
    <main class="top">
        <section id="apikey_section" class="transfer-field change_setting" v-on:click="onToggle">
            <div>
                <img src="../assets/img/api3.png" alt="gas" style="width:37%">
                  <p>API KEY</p>
            </div>
            <p id="apikey" v-if="apikey">--</p>
            <p v-else>--</p>
        </section>
        <section id="secret_section" class="transfer-field transfer-field-border-top change_setting" v-on:click="onToggle">
            <div>
                &nbsp;<img src="../assets/img/key.png" alt="gas" style="width:14%">
                <p>Secret</p>
            </div>
            <p id="secret" v-if="secret">--</p>
            <p v-else>--</p>
        </section>
        <section class="transfer-input-field hide-myapi" style="display: block">
            <label for="addr">API KEY</label>
            <input type="password" id="apikey_input" name="apikey_input" placeholder="****************" v-model="apikey">
        </section>
        <section class="transfer-input-field hide-myapi" style="display: block">
            <label for="addr">Secret</label>
            <input type="password" id="secret_input" name="secret_input" placeholder="****************" v-model="secret">
        </section>
        <section class="transfer-input-field iyuhotooltiop">
            <label for="addr">USDT Trading Amount</label>
            <input type="number" id="trade_amount" name="trade_amount" placeholder="100" v-model="trade_amount" v-on:focus="closetip">
            <span id="tradetip" class="iyuhotooltioptext">{{tradetipcontent}}</span>
        </section>
        <section class="field-row transfer-input-field">
            <label for="addr">Trading Type</label>
            <div class="button-cover">
                <div class="button-role b2" id="button-13">
                    <input type="checkbox" class="checkbox" id="trade_type" ref="trade_type">
                    <div class="knobs">
                        <span></span>
                    </div>
                    <div class="layer-role"></div>
                </div>
            </div>

        </section>
        <section class="transfer-input-field iyuhotooltiop">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" minlength="6" placeholder="********" v-model="password" v-on:focus="closetip">
            <span id="passwordtip" class="iyuhotooltioptext">{{passwordtipcontent}}</span>
        </section>
        <section class="transfer-button">
            <button class="api-submit-button" v-on:click="onSubmit">Submit</button>
        </section>
        <section style="margin: 30px 0 0 30px;color:#909090;">
            <ul>
                <li>Minimum Trading amount: 200 USDT</li>
                <li>Your maximum trading amount: <span id="min_amount" v-if="min_amount">{{min_amoount}}</span><span v-else>--</span> USDT.<br>To increase your maximum trading amount, please have more GAS</li>
                <li>Trading will stop when your gas fee is lower than 20 GAS</li>
            </ul>
        </section>
    </main>
</template>

<script>
    import axios from 'axios'
    import NavBar from './NavBar.vue'

    export default {
        components: {
            NavBar
        },

        data: function() {
            return {
                apiReq: 'http://test.ait.capital/api/index/Api/myapi',
                apikey: null,
                password: null,
                secret: null,
                trade_amount: null,
                trade_type: 0,
                min_amount: null,
                tradetipcontent: "Please enter the amount to transfer",
                passwordtipcontent: "Enter your password"
            }
        },

        methods: {

            onToggle: function() {
                let elList = document.querySelectorAll('.hide-myapi');
                for (let i = 0; i < elList.length; i++) {
                    this.toggle(elList[i]);
                }
            },           

            onShow: function() {
                let elList = document.querySelectorAll('.hide-myapi');
                    for (let i = 0; i < elList.length; i++) {
                        this.show(elList[i]);
                }
            },          

            onHide: function() {
                let elList = document.querySelectorAll('.hide-myapi');
                    for (let i = 0; i < elList.length; i++) {
                        this.hide(elList[i]);
                }
            },

            show: function (el) {
                var old = el.getAttribute("displayOld");
                el.style.display = old || "";
            },

            toggle: function (el) {
                el.style.display = (el.style.display == 'none') ? 'block' : 'none';
            },

            hide: function (el) {
                if (!el.hasAttribute('displayOld')) {
                    el.setAttribute("displayOld", el.style.display)
                }
                el.style.display = "none"
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

            onLogout: function() {
                window.location.href = "/";
            },

            showMessage: function (content, type=0) {                
                var alert_type = 'alert-success';
                var alert_content = '';
                if (type == 0) {
                    alert_type = 'alert-success';
                    alert_content = '<strong>Success! </strong>' + content;
                }                    
                if (type == 1) {
                    alert_type = 'alert-warning';
                    alert_content = '<strong>Warning! </strong>' + content;
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

            onSubmit: function () {
                // TODO: form login action

                if ( document.getElementById('trade_type').checked == true) {
                    this.trade_type = 1
                } else {
                    this.trade_type = 0
                }

                if ( this.trade_amount == "" || this.trade_amount == null || this.trade_amount <= 0 ) {
                    let el = document.getElementById('tradetip');
                    this.showtip(el);
                    return false
                }

                if (this.password == "" || this.password == null) {
                    let el = document.getElementById('passwordtip');
                    this.showtip(el);
                    return false;
                }

                // TODO: ajax 
                axios({
                    method:'PUT',
                    url:'http://test.ait.capital/api/index/Api/upmyapi',
                    data: {
                            apikey:this.apikey,
                            secret:this.secret,
                            amount:this.trade_amount,
                            trade_type:this.trade_type, 
                            password:this.password
                    },
                    withCredentials: true,
                }) 
                .then( response => {
                    const data = response.data;
                    this.trans_lock = 0;
                    // check for error response
                    if (response.status != 200) {
                        // get error message from body or default to response statusText
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    if (data.code == 1) {
                        // TODO show message data.info
                        this.showMessage(data.msg);
                        location.reload();
                    } else {
                        this.onLogout();
                    }
                })
                .catch(error => {
                    console.log(error);
                }); 
            }
        },

        mounted() {
                axios({
                    method:'GET',
                    url:this.apiReq,
                    withCredentials: true,
                    headers:{
                        // 'Access-Control-Allow-Origin' : '*',
                        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Content-Type':'application/json'
                    }
                })
                .then((res) => {
                    console.log(res);
                    var data = res.data;

                    if (res.status != 200) {
                        // TODO: show error message
                        return false;
                    }
                    if (data.code == 1) {
                        let info = data.data;
                        this.apikey = info.apikey;
                        this.secret = info.secret;
                        this.trade = info.trade;
                        this.min_amount = info.min_amount;

                        this.onHide();

                        if (this.trade_type == 1) {
                            document.getElementById("trade_type").prop('checked', true);
                        }
                    } else if (data.code == 0){
                        this.onLogout();
                    } else {
                        document.querySelector("#apikey_section,#secret_section").css('opacity', '0.6');
                        this.onShow();
                    }
                });
        }
    }
</script>

<style>
    /* @import url('../assets/css/myapi.scss'); */

    li{
        padding:5px 0;
        font-family:'Outfit-Light';
        font-size:13px;
    }
    .checkbox
    {
        user-select: none;
        -webkit-tap-highlight-color:transparent;
    }

    .checkbox:focus
    {
        outline: none;
    }
</style>