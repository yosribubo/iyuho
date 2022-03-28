
<template>    
    
    <nav>
        <section>
            <svg id="Home" xmlns="http://www.w3.org/2000/svg" width="28" height="36.989" viewBox="0 0 28 36.989" v-on:click="goHome">
                <g transform="translate(-49 -752)" v-bind:opacity="homeopacity">
                  <path id="bxs-home-smile" d="M3.8,12.618H5.4v5.6a.8.8,0,0,0,.8.8h9.6a.8.8,0,0,0,.8-.8v-5.6h1.6a.8.8,0,0,0,.594-1.336l-7.2-8.006a.824.824,0,0,0-1.189,0l-7.2,8.006A.8.8,0,0,0,3.8,12.618Zm4.76-.253A2.726,2.726,0,0,0,11,14.219a2.735,2.735,0,0,0,2.44-1.85l1.52.5A4.317,4.317,0,0,1,11,15.82a4.319,4.319,0,0,1-3.96-2.954l1.52-.5Z" transform="translate(52 748.978)" v-bind:fill="homecolor"/>
                  <text id="Home-2" data-name="Home" transform="translate(63 785.989)" v-bind:fill="homecolor" font-size="10" font-family="Outfit-Regular, Outfit"><tspan x="-13.315" y="0">Home</tspan></text>
                </g>
            </svg>
            
            <svg id="AI_API" xmlns="http://www.w3.org/2000/svg" width="40" height="36.989" viewBox="0 0 40 36.989" v-on:click="goAiApi">
                <g data-name="AI API" transform="translate(-168 -752)" v-bind:opacity="apiopacity">
                  <g id="Group_378" data-name="Group 378" transform="translate(-28 700)">
                    <path id="Path_91" data-name="Path 91" d="M376.666,14.667a.5.5,0,0,0-.5-.5h-10a.5.5,0,0,0-.5.5v5.5a1.5,1.5,0,0,0,1.5,1.5h8a1.5,1.5,0,0,0,1.5-1.5Z" transform="translate(-155.167 46.333)" v-bind:fill="apicolor" fill-rule="evenodd"/>
                    <path id="Path_92" data-name="Path 92" d="M224,53.5a1.5,1.5,0,0,0-1.5-1.5h-8a1.5,1.5,0,0,0-1.5,1.5V58a1.5,1.5,0,0,0,1.5,1.5h8A1.5,1.5,0,0,0,224,58Zm-7.5.5a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,216.5,54Zm4,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,220.5,54Zm4.414,6.5H225a1.5,1.5,0,0,1,1.5,1.5v3a1.5,1.5,0,0,1-1.5,1.5V61A1.491,1.491,0,0,0,224.914,60.5Z" transform="translate(-2.5)" v-bind:fill="apicolor" fill-rule="evenodd"/>
                    <path id="Path_93" data-name="Path 93" d="M0,6H.086a1.5,1.5,0,0,0,1.06-.44A1.5,1.5,0,0,0,1.586,4.5v-3A1.5,1.5,0,0,0,1.146.439,1.5,1.5,0,0,0,.086,0V5.5A1.492,1.492,0,0,1,0,6Z" transform="translate(209.586 66.5) rotate(180)" v-bind:fill="apicolor" fill-rule="evenodd"/>
                  </g>
                  <text id="AI_API-2" data-name="AI API" transform="translate(192 785.989)" v-bind:fill="apicolor" font-size="10" font-family="Outfit-Regular, Outfit"><tspan x="-19.11" y="0">AI API</tspan></text>
                </g>
            </svg>
            <svg id="Earning" xmlns="http://www.w3.org/2000/svg" width="36" height="36.989" viewBox="0 0 36 36.989" v-on:click="goEarning">
                <g transform="translate(-295 -752)" v-bind:opacity="earningopacity">
                  <path id="bxs-wallet" d="M19,8.056V6.278A1.779,1.779,0,0,0,17.222,4.5H5.667A2.67,2.67,0,0,0,3,7.167V17.833A2.592,2.592,0,0,0,5.667,20.5H19a1.779,1.779,0,0,0,1.778-1.778V9.833A1.779,1.779,0,0,0,19,8.056Zm-1.778,8H15.444V12.5h1.778Zm-11.556-8a.889.889,0,0,1,0-1.778H17.222V8.056Z" transform="translate(301.111 747.5)" v-bind:fill="earningcolor"/>
                  <text id="Earning-2" data-name="Earning" transform="translate(313 785.989)" v-bind:fill="earningcolor" font-size="10" font-family="Outfit-Regular, Outfit"><tspan x="-17.325" y="0">Earning</tspan></text>
                </g>
            </svg>
        </section>
    </nav>
</template>

<script>   
    export default {
        name: 'Navbar',

        props: {
            activeflag: String
        },

        data: function() {
            return {
                homecolor: this.activeflag=='home'?'#ffcb74':'#fff',
                apicolor: this.activeflag=='api'?'#ffcb74':'#fff',
                earningcolor: this.activeflag=='earning'?'#ffcb74':'#fff',
                homeopacity: this.activeflag=='home'?'1':'0.65',
                apiopacity: this.activeflag=='api'?'1':'0.65',
                earningopacity: this.activeflag=='earning'?'1':'0.65',
            }
        },

        computed() {
            // if (this.activeflag == "home") {
            //     this.apicolor = this.activecolor;
            // }

            // if (this.activeflag == "api") {
            //     this.apicolor = this.activecolor;
            // }
            // if (this.activeflag == "earning") {
            //     this.earningcolor = this.activecolor;
            // }
        },

        methods: {
            isPath (par) {
                if (this.$router.history.current.path === par) {
                    return true
                } else {
                    return false
                }
            },

            goHome: function () {
                window.location.href = "/user/index";
            },

            goAiApi: function () {
                window.location.href = "/user/myapi";
            },

            goEarning: function () {
                window.location.href = "/user/earning";
            },

            onActive: function (e) {
                let svglist = document.getElementsByTagName("svg");
                for (let i = 0; i < svglist.length; i++) {
                    const svg = svglist[i];
                    if (svg.getElementsByTagName('text')[0].hasAttribute('fill')) {
                        svg.getElementsByTagName('text')[0].setAttribute('fill', '#fff')
                    }
                }
                if (e.getElementsByTagName('text')[0].hasAttribute('fill')) {
                    e.getElementsByTagName('text')[0].setAttribute('fill', '#ffcb74')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import '../assets/css/user_index.css';
</style>
