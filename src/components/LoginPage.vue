<template>
    <main>
        <section class="login-loginto">
            <h3>Login to iYuho</h3>
        </section>
        <section class="login-field update-contact-field">
            <small id="login_change" v-on:click="toggleBtn">Change</small>
            <div id="div_email" :class="{'active':flag == 1, 'inactive':flag == 2}">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" 
                    placeholder="user@example.com" 
                    v-model="email" 
                    @blur = "validateEmail"
                    required />
            </div>
            <div  id="div_mobile" :class="{'active':flag == 2, 'inactive':flag == 1}">
                <label for="mobile">Mobile</label>
                <!-- <input type="tel" id="mobile" name="mobile" required> -->
                <vue-tel-input :value="phone" mode="international"></vue-tel-input>

                
            </div>
        </section>
        <section class="login-field">
            <svg id="login-pwd-show-hide" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" v-on:click="showPassword">
                <path d="M4.20157 3.99925C4.20157 4.95256 5.00821 5.72537 6.00326 5.72537C6.9983 5.72537 7.80494 4.95256 7.80494 3.99925C7.80494 3.04593 6.9983 2.27313 6.00326 2.27313C5.00821 2.27312 4.20157 3.04594 4.20157 3.99925ZM6 0.405209C7.03025 0.409779 8.09814 0.660589 9.10904 1.14078C9.85962 1.512 10.5911 2.03574 11.2261 2.68219C11.5379 3.01218 11.9357 3.49 12 3.99981C11.9924 4.44142 11.5187 4.9865 11.2261 5.31744C10.6306 5.9385 9.9182 6.44762 9.10904 6.85923C8.16633 7.31674 7.12288 7.58015 6 7.5948C4.96877 7.59016 3.90112 7.33646 2.89134 6.85923C2.14076 6.48801 1.40891 5.96389 0.773941 5.31744C0.462091 4.98745 0.0643203 4.50962 2.68221e-07 3.99981C0.00760027 3.5582 0.481301 3.0131 0.773941 2.68217C1.36937 2.06111 2.08218 1.55238 2.89134 1.14076C3.83356 0.683598 4.87958 0.421999 6 0.405209ZM6.00076 1.29769C4.43957 1.29769 3.17401 2.50763 3.17401 4.0002C3.17401 5.49276 4.43957 6.7027 6.00076 6.7027C7.56195 6.7027 8.82751 5.49275 8.82751 4.0002C8.82751 2.50763 7.56195 1.29769 6.00076 1.29769Z" fill="#FAFAFA"/>
            </svg>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" minlength="6" 
                placeholder="******"
                v-model="password"
                @blur="validatePassword"
                required />
                
        </section>
        <section class="login-field login-captcha">
            <div>
                <label for="verify">Captcha</label>
                <input type="text" id="verify" autocomplete="off" 
                    placeholder='--'
                    v-model="verify"
                    required>
                    <span v-if="msg.verify">{{ msg.verify }}</span>
            </div>
            <img style="width:30%;margin-right: 10px;border-radius:10px;box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);" src="{:captcha_src()}" alt="load failed" id="captcha" onclick="javascript:this.src='{:captcha_src()}?rand='+Math.random()">
            
        </section>           
        <section class="login-button" v-on:click="clickSubmit">
            <p>Login</p>
        </section>
        <vue-tel-input :value="phone" mode="international"></vue-tel-input>
    </main>
    <!-- <RouterView /> -->
</template>

<script>
    
    import { ref } from 'vue';
    import { VueTelInput } from 'vue-tel-input';
    import 'vue-tel-input/dist/vue-tel-input.css';
    // import { reactive, toRefs } from '@vue/reactivity';

    export default {
        data() {
            return {
                email   : '',
                password: '',
                verify  : '',
                msg     : [],
                flag    : 1,
                // phone   : null
            }
        },

        components: {
            VueTelInput,
        },

        step: () => {
            const phone = ref(null);
            return {
                phone,
            }
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
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                        this.msg['email'] = '';
                    } else {
                        this.msg['email'] = 'Please enter a valid email address';
                }
            },

            validatePassword() {
                if( this.password === '' ) {
                    this.msg['password'] = 'Please enter a password';
                } else if ( this.password.length < 8 ) {
                    this.msg['password'] = 'Password length must be minium 8 chracters';
                } else {
                    this.msg['password'] = '';
                }
            },

            validateVerify() {
                if (this.verify === '') {
                    this.msg['verify'] = 'Place enter a CAPTCHA Code';
                } else {
                    this.msg['verify'] = '';
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

            onInput({ number, isValid, country }) {
                console.log(number, isValid, country);
            }

        }
    }
</script>

<style>
    /* @import 'vue-tel-input/dist/vue-tel-input.css'; */
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
</style>