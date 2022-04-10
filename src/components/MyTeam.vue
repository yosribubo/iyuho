<template>
    <div>
        <header>
            <section>
                <svg id="back_btn_home" xmlns="http://www.w3.org/2000/svg" width="15.516" height="15.058" viewBox="0 0 15.516 15.058" v-on:click="goBack">
                    <g id="menu-left" transform="translate(-3.211 -5.571)">
                    <g id="__TEMP__SVG__" transform="translate(-3.07 -1.244)">
                        <path id="Path_110" data-name="Path 110" d="M13.5,20.812,7.031,14.344,13.5,7.875" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Path_111" data-name="Path 111" d="M8.438,18H21.555" transform="translate(-0.508 -3.656)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                    </g>
                </svg>
                <p>My Team</p>
                <div class="dropdown">
                    <svg class="dropdown" id="dropdown-content" xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" v-on:click="dropdowntoggle">
                        <g id="menu-left" transform="translate(-3 -7.1)">
                        <rect id="Rectangle_1" data-name="Rectangle 1" width="10" height="2" rx="1" transform="translate(10 7.1)" fill="#fff"/>
                        <rect id="Rectangle_3" data-name="Rectangle 3" width="17" height="2" rx="1" transform="translate(3 12.1)" fill="#fff"/>
                        <rect id="Rectangle_2" data-name="Rectangle 2" width="10" height="2" rx="1" transform="translate(3 17.1)" fill="#fff"/>
                        </g>
                    </svg>
                    <div class="dropdown-content">
                        <p id="myteam_drop"><span style="opacity:0.2">Team</span></p>
                        <p id="mydirect_drop" v-on:click="goDirect_Drop">Direct</p>
                    </div>
                </div>
            </section>
        </header>
        <main class="top">
            <div class="user-profile">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">
                            <h5 id='user_name' style="color:#fff;font-size: 1rem;font-weight: 700;margin:5px 0 0px 0">{{user_name}}</h5>
                            <h5 id='user_package' style="color:#909090;font-size: 0.7rem;font-weight: 700;margin:0px 0 8px 0">{{user_package}}</h5>
                            <p id="self_register" style="" v-if="flag_self_register" v-html="my_register">
                            </p>
                        </div>
                        <div class="col-6 text-right">
                            <img src="@/assets/img/logo.svg" style="width: 20%" width="30" height="45">
                        </div>
                    </div>
                </div>
            </div>

            <div class="ri-section-body">
                <div class="ri-section-top">
                    <span>Performance</span>
                </div>
                <div class="ri-section">
                    <span class="ri-section-title">1st Level</span>
                    <div class="ri-section-left-right">
                        <span id='closed_direct'>{{closed_direct}}</span>
                        <span>Inactive</span>
                    </div>
                    <!--<div class="ri-section-divider"></div>-->
                    <div class="ri-section-left-right">
                        <span id='opened_direct'>{{opened_direct}}</span>
                        <span>Active</span>
                    </div>
                </div>
                <div class="ri-section">
                    <span class="ri-section-title">Group</span>
                    <div class="ri-section-left-right">
                        <span id='closed_team'>{{closed_team}}</span>
                        <span>Inactive</span>
                    </div>
                    <!--<div class="ri-section-divider"></div>-->
                    <div class="ri-section-left-right">
                        <span id='opened_team'>{{opened_team}}</span>
                        <span>Active</span>
                    </div>
                </div>
                <div class="ri-section">
                    <span class="ri-section-title">USDT</span>
                    <div id="qrcode_left" style="position: absolute;left:10px;" v-if="flag_qrcode_left">
                        <svg style="box-shadow: 0 4px 8px 0 rgb(0 0 0 / 60%), 0 6px 20px 0 rgb(0 0 0 / 60%);" width="24px" height="24px" color="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M8,21H4a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2Zm14-6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h4a3,3,0,0,0,3-3V16A1,1,0,0,0,22,15ZM20,1H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V4A3,3,0,0,0,20,1ZM2,9A1,1,0,0,0,3,8V4A1,1,0,0,1,4,3H8A1,1,0,0,0,8,1H4A3,3,0,0,0,1,4V8A1,1,0,0,0,2,9Zm8-4H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5ZM9,9H7V7H9Zm5,2h4a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v4A1,1,0,0,0,14,11Zm1-4h2V9H15Zm-5,6H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,17H7V15H9Zm5-1a1,1,0,0,0,1-1,1,1,0,0,0,0-2H14a1,1,0,0,0-1,1v1A1,1,0,0,0,14,16Zm4-3a1,1,0,0,0-1,1v3a1,1,0,0,0,0,2h1a1,1,0,0,0,1-1V14A1,1,0,0,0,18,13Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,14,17Z" stroke="#fff" fill="#fff"/></svg>
                    </div>
                    <div class="ri-section-left-right">
                        <span id='left_position'>{{left_position}}</span>
                        <span>Left</span>
                    </div>
                    <!--<div class="ri-section-divider"></div>-->
                    <div class="ri-section-left-right">
                        <span id='right_position'>{{right_position}}</span>
                        <span>Right</span>
                    </div>
                    <div id="qrcode_right" style="position: absolute;right:10px;" v-if="flag_qrcode_right" >
                        <svg style="box-shadow: 0 4px 8px 0 rgb(0 0 0 / 60%), 0 6px 20px 0 rgb(0 0 0 / 60%);" width="24px" height="24px" color="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M8,21H4a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2Zm14-6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h4a3,3,0,0,0,3-3V16A1,1,0,0,0,22,15ZM20,1H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V4A3,3,0,0,0,20,1ZM2,9A1,1,0,0,0,3,8V4A1,1,0,0,1,4,3H8A1,1,0,0,0,8,1H4A3,3,0,0,0,1,4V8A1,1,0,0,0,2,9Zm8-4H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5ZM9,9H7V7H9Zm5,2h4a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v4A1,1,0,0,0,14,11Zm1-4h2V9H15Zm-5,6H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,17H7V15H9Zm5-1a1,1,0,0,0,1-1,1,1,0,0,0,0-2H14a1,1,0,0,0-1,1v1A1,1,0,0,0,14,16Zm4-3a1,1,0,0,0-1,1v3a1,1,0,0,0,0,2h1a1,1,0,0,0,1-1V14A1,1,0,0,0,18,13Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,14,17Z" stroke="#fff" fill="#fff"/></svg>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="ri-section-top">
                <span>My Team</span>
            </div>
            <div class="scrollmenu">
                <span @click="next_list(current)" id="list{{current}}" value="{{user_name}}">{{user_name}}&gt;</span>
            </div>
            <p class="list_loader"></p>
            <div>
                <div v-for="item of teamlist" class="row" :key="item.id">
                    <div class="gradient-list" id="team_list" style="">
                        <div class="transfer-field-input" style="align-items: baseline;width:98%; height:auto;">
                            <div style="float:left;width:60%;">
                                <h3 class="h5">
                                    <span id="user10237" class="black"> {{item.username}} </span>
                                    <span style="padding:5px;font-size:0.75rem;color:goldenrod;border-radius: 5px;background: #3b3b3b;">{{item.position_name}}</span>
                                </h3>
                                <p class="small">Total Earning: {{item.user_total }} USDT</p>
                                <p class="small">Left Total Earning: {{item.left_group }} USDT</p>
                                <p class="small" style="margin-bottom: 6px;">Right Total Earning: {{item.right_group}} USDT</p>
                                <p id="activate_{{item.id}}" class="small" style="padding:5px 0;">
                                    <span style="box-shadow:0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);padding:5px;background:linear-gradient(180deg, maroon 0%, black 100%);border-radius:5px;text-decoration: none;" onclick="activate_account(10237)">Register (L/R)</span>
                                </p>
                            </div>
                            <div class="small" style="float:right;width:40%;text-align:right;">
                                <p>{{item.datetime}}</p>
                                <br>
                                <div v-if="item.total_group > 0">
                                    <p v-on:click="next_list(item.id)">
                                        <span style="padding:10px;background:linear-gradient(180deg, #83e4e2 0%, #a2ed56 100%);color:#000;border-radius:5px;text-decoration: none;">{{item.total_group}} <i class="fa fa-user"></i></span>
                                    </p>
                                </div>
                                <div v-else>
                                    <p>
                                        <span style="padding:10px;background:linear-gradient(180deg, #83e4e2 0%, #a2ed56 100%);color:#000;border-radius:5px;text-decoration: none;">{{item.total_group}} <i class="fa fa-user"></i></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="furthest_div">
                    <span id="furthest_left" class="furthest_button" style="opacity: 0.2;">«</span>
                    <span id="furthest_right" class="furthest_button" style="opacity: 0.2;">»</span>
                </div>
            </div>
        </main>
        <div class="popup-qrcode">
            <div id="qrcode-div">
                <div id="qrcode_title"></div>
                <div id="qrcode"></div>
                <div id="qrcode_button">Copy</div>
            </div>
        </div>
        <div class="black-screen"></div>
    </div>
</template>

<script>

    import axios from 'axios';
    import $ from 'jquery';

    const myteamJsonData = require('./json/myteam.json');

    // const headers = {
    //                 // 'Access-Control-Allow-Origin' : '*',
    //                 // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //                 'Content-Type':'application/json'
    //             };
    export default {
        data: function () {
            return {
                current: '--',
                selft: '--',
                user_name: '--',
                user_package: '--',
                opened_direct: '--',
                closed_direct: '--',
                opened_team: '--',
                closed_team: '--',
                left_position: '--',
                right_position: '--',
                flag_qrcode_left: false,
                flag_qrcode_right: false,
                flag_self_register: false,
                teamlist: [],
            }
        },

        created() {
            $("#dropdown-content").click(function (){
                $('.dropdown-content').toggle();
            });
                // TODO: api/myteam
                /*
                axios({
                    method:'GET',
                    url:'http://test.ait.capital/api/index/Api/myteam',
                    withCredentials: true,
                    headers: headers
                })
                .then(async response => {
                    const data = response;
                    // check for error response
                    if (response.status != 200) {
                        // get error message from body or default to response statusText
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    if (data.code == 1) {
                        var arr = data.data;
                        this.current = arr.current;
                        this.self = arr.current;

                        $("#qrcode_left").show();
                        $("#qrcode_right").show();

                        this.user_name = arr.user_name;
                        this.user_package = arr.user_package;
                        this.opened_direct = arr.opend;
                        this.closed_direct = arr.closed;
                        this.opened_team = arr.opened_team;
                        this.closed_team = arr.closed_team;
                        this.left_position = arr.left_my;
                        this.right_position = arr.right_my;

                        if (arr.down_right || arr.down_left) {
                            var my_position = '';
                            if(arr.down_right && arr.down_left){
                                my_position = "(L/R)"
                            }else if(arr.down_right){
                                my_position = "(R)"
                            }else if(arr.down_left){
                                my_position = "(L)"
                            }
                            var my_register = '<span style="box-shadow:0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);padding:5px;background:linear-gradient(180deg, maroon 0%, black 100%);border-radius:5px;font-size: 10px;" onclick="activate_account('+arr.id+')">Register '+my_position+'</span>';
                            document.getElementById('self_register').html(my_register);
                            $('#self_register').show();
                        }
                        var team_list = arr.list;
                        $('#list'+this.current).nextAll().add('#list'+this.current).remove();
                        $( ".scrollmenu" ).append( '<span onclick="next_list('+ this.current +')" id="list'+ this.current +'" value="'+ arr.user_name +'">'+  arr.user_name +'></span>' );
                        $("#team_list").html('');
                        $('#team_list').fadeOut(100, function() { 
                            $(this).html('');
                            $(this).fadeIn();
                            team_list.forEach(this.build_list);
                        });
                        this.furthest_b(this.current);
                    } else {
                        this.onLogout();
                    }
                })
                .catch(error => {
                // this.errorMessage = error;
                console.error("Request: " + error);
                }
            );
            */
            
            
        },

        mounted() {
            if (myteamJsonData.code == 1) {
                var arr = myteamJsonData.data;
                this.current = arr.current;
                this.self = arr.current;

                this.flag_qrcode_left = true;
                this.flag_qrcode_right = true;

                this.user_name = arr.user_name;
                this.user_package = arr.user_package;
                this.opened_direct = arr.opend;
                this.closed_direct = arr.closed;
                this.opened_team = arr.opened_team;
                this.closed_team = arr.closed_team;
                this.left_position = arr.left_my;
                this.right_position = arr.right_my;

                if (arr.down_right || arr.down_left) {
                    var my_position = '';
                    if(arr.down_right && arr.down_left){
                        my_position = "(L/R)"
                    }else if(arr.down_right){
                        my_position = "(R)"
                    }else if(arr.down_left){
                        my_position = "(L)"
                    }
                    this.my_register = '<span style="box-shadow:0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);padding:5px;background:linear-gradient(180deg, maroon 0%, black 100%);border-radius:5px;font-size: 10px;" onclick="activate_account('+arr.id+')">Register '+my_position+'</span>';
                    // document.getElementById('self_register').html(my_register);
                    this.flag_self_register =true;
                }
                var team_list = arr.list;
                // $('#list'+this.current).nextAll().add('#list'+this.current).remove();
                // $( ".scrollmenu" ).append( '<span onclick="next_list('+ this.current +')" id="list'+ this.current +'" value="'+ arr.user_name +'">'+  arr.user_name +'></span>' );
                
                var data=[];
                for (let index = 0; index < team_list.length; index++) {
                    data = [];
                    const element = team_list[index];
                    data = element;
                    
                    if (element.down_right || element.down_left) {
                        if (element.down_right && element.down_left) {
                            data.position="(L/R)";
                        } else if (element.down_right) {
                            data.position = "(R)";
                        } else if (element.down_left) {
                            data.position = "(L)";
                        }
                    }

                    data.status_color = '<span style="color: #696969;">--';

                    if (element.sold_price !== 0) {
                        if(element.earning>=0){
                            data.status_color = '<span style="color: #49E052;">+'+"$" + Math.abs(element.earning).toLocaleString("en-US") + "(USDT)</span>";
                        }else{
                            data.status_color = '<span style="color: #ff4d54;">-'+"$" + Math.abs(element.earning).toLocaleString("en-US") + "(USDT)</span>";
                        }
                    }

                    this.teamlist[index] = data;
                }
                
                // $("#team_list").html('');
                // $('#team_list').fadeOut(100, function() { 
                //     $(this).html('');
                //     $(this).fadeIn();
                //     team_list.forEach(this.build_list);
                // });
                // this.furthest_b(this.current);
            }
        },

        methods: {
            furthest_b: function(id) {
                if (id == "" || id == null) {
                    return false;
                }
                    axios({
                        method:'POST',
                        url:'http://test.ait.capital/api/index/Api/getFurthest',
                        data: {id:id},
                        withCredentials: true,
                        // headers: headers
                    })
                    .then(async response => {
                            const data = response;
                            // check for error response
                            if (response.ok != 200) {
                                // get error message from body or default to response statusText
                                const error = (data && data.message) || response.statusText;
                                return Promise.reject(error);
                            } 

                            if (data.code == 1) {
                                var arr = data.data;
                                if(arr.left>0){
                                    $("#furthest_left").css('opacity','1');
                                    $('#furthest_left').attr('onclick', 'furthest_list(' + arr.left + ', "Furthest Left")');
                                }else{
                                    $("#furthest_left").css('opacity','0.2');
                                    $('#furthest_left').prop('onclick', null);
                                }
                                if(arr.right>0){
                                    $("#furthest_right").css('opacity','1');
                                    $('#furthest_right').attr('onclick', 'furthest_list(' + arr.right + ',"Furthest Right")');
                                }else{
                                    $("#furthest_right").css('opacity','0.2');
                                    $('#furthest_right').prop('onclick', null);
                                }
                            } else {
                                this.onLogout();
                            }
                    })
                    .catch((err) => console.log(err));
            },

            next_list: function(id) {
                var user = $("#user"+id).text();
                if(user == '' || user == null){
                    user = $("#list"+id).attr('value');
                }
                if (id == "" || id == null || id == this.current) {
                    return false;
                }
                $( ".list_loader" ).show(100);
                    axios({
                        method:'POST',
                        url:'http://test.ait.capital/api/index/Api/upmyteam',
                        data: {id:id},
                        withCredentials: true,
                        // headers: headers
                    })
                    .then(async response => {
                        const data = response;
                        if (response.ok != 200) {
                            // get error message from body or default to response statusText
                            const error = (data && data.message) || response.statusText;
                            return Promise.reject(error);
                        }
                        if (data.code == 1) {
                            this.furthest_b(id);
                            $( ".list_loader" ).hide(100);
                            const arr = data.data;
                            this.current = id;
                            $('#list'+id).nextAll().add('#list'+id).remove();
                            $( ".scrollmenu" ).append( '<span onclick="next_list('+ id +')" id="list'+ id +'" value="'+ user +'">'+ user +'></span>' );
                            $("#team_list").html('');
                            arr.forEach(this.build_list);
                            
                        } else if (data.code == 0) {
                            this.onLogout();
                        } else{
                            $( ".list_loader" ).hide(100);
                        }
                    })
                    .catch(err => console.log(err));
            },

            furthest_list: function(id, user) {
                if (id == "" || id == null || id == this.current) {
                    return false;
                }
                $( ".list_loader" ).show(100);
                    axios({
                        method:'POST',
                        url:'http://test.ait.capital/api/index/Api/upmyteam',
                        data: {id:id},
                        withCredentials: true,
                        // headers: headers
                    })
                    .then(async response => {
                        const data = response;
                        if (response.ok != 200) {
                            // get error message from body or default to response statusText
                            const error = (data && data.message) || response.statusText;
                            return Promise.reject(error);
                        }
                        if (data.code == 1) {
                            this.furthest_b(id);
                            $( ".list_loader" ).hide(100);
                            const arr = data.data;
                            this.current = id;
                            $('#list'+id).nextAll().add('#list'+id).remove();
                            $( ".scrollmenu" ).append( '<span onclick="next_list('+ id +')" id="list'+ id +'" value="'+ user +'">'+ user +'></span>' );
                            $("#team_list").html('');
                            arr.forEach(this.build_list);
                            
                        } else if (data.code == 0) {
                            this.onLogout();
                        } else{
                            $( ".list_loader" ).hide(100);
                        }
                    })
                    .catch(err => console.log(err));
            },

            // build_list: function(item, index) {
            build_list: function(item) {
                var build = '';
                var special_build = '';
                var click = '';
                var position = '';
                if(item.total_group > 0){
                    click = 'onclick="next_list('+item.id+')"';
                }
                if(item.down_right || item.down_left){
                    if(item.down_right && item.down_left){
                        position = "(L/R)"
                    }else if(item.down_right){
                        position = "(R)"
                    }else if(item.down_left){
                        position = "(L)"
                    }
                    special_build = '<p id="activate_'+item.id+'" class="small" style="padding:5px 0;"><span style="box-shadow:0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 50%);padding:5px;background:linear-gradient(180deg, maroon 0%, black 100%);border-radius:5px;text-decoration: none;" onclick="activate_account('+item.id+')">Register '+position+'</span></p>';
                }
                
                
                build = '<div class="transfer-field-input" style="align-items: baseline;width:98%;height: auto;"><div  style="float:left;width:60%;"><h3 class="h5"><span id="user'+ item.id +'" class="black">' + item.username + ' </span><span style="padding:5px;font-size:0.75rem;color:goldenrod;border-radius: 5px;background: #3b3b3b;">'+item.position_name+'</span></h3><p class="small">Total Earning: ' + item.user_total + ' USDT</p><p class="small">Left Total Earning: ' + item.left_group + ' USDT</p><p class="small" style="margin-bottom: 6px;">Right Total Earning: ' + item.right_group + ' USDT</p>'+ special_build +'</div><div class="small" style="float:right;width:40%;text-align:right;" class="h4"><p>' + item.datetime + '</p><br><p '+ click +'><span style="padding:10px;background:linear-gradient(180deg, #83e4e2 0%, #a2ed56 100%);color:#000;border-radius:5px;text-decoration: none;">' + item.total_group + ' <i class="fa fa-user"></i></span></p></div></div>';

                $( "#team_list" ).append( build );
            },

            activate_account: function(id) {
                // TODO: router-link
                window.location.hrfef = "/User.register?invit="+id;
            },

            copy_url: function (UrlToCopy) {
                var TempText = document.createElement("input");
                TempText.value = UrlToCopy;
                document.body.appendChild(TempText);
                TempText.select();
                
                document.execCommand("copy");
                document.body.removeChild(TempText);

                // TODO: copied message

                // layer.msg("Copied", { icon: 6 });
                // $("#qrcode_button").animate({opacity:0.3},200,"linear",function(){
                //     $(this).animate({opacity:1},200);
                // });
            },

            dropdowntoggle: function () {
                $('.dropdown-content').toggle();
            },

            goDirect_Drop: function() {
                // TODO: routter-link
                window.location.href = "/User/mydirect";
            },

            goBack: function() {
                // TODO: routter-link
                window.location.href = "/User/index"
            },

            onLogout: function() {
                window.location.href = "/";
            },
        }
    }
</script>

<style scoped>
    @import '../assets/css/myteam.css'

</style>