<template>
  <header>
      <section>
          <svg id="support" width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.184C16 3.14 12.86 0 9 0S2 3.14 2 7c-1.163.597-2 1.696-2 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 5 5 0 0 1 10 0 1 1 0 0 0-1 1v6a1 1 0 0 0 1 1v1h-2.592c-.206-.581-.756-1-1.408-1H8a1.5 1.5 0 0 0 0 3h6a2 2 0 0 0 2-2v-1.183A2.992 2.992 0 0 0 18 12v-2a2.99 2.99 0 0 0-2-2.816L-7 62" fill="#fff" fill-rule="evenodd"/>
          </svg>
          <p>iYuho</p>
          <svg id="logout" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="18" viewBox="0 0 256 256" xml:space="preserve" v-on:click="onLogout">
              <g transform="translate(128 128) scale(1.21 1.21)" style="">
                  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-104.85 -104.85000000000001) scale(2.33 2.33)" >
                    <path d="M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z" 
                          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" 
                          transform=" matrix(1 0 0 1 0 0) " 
                          stroke-linecap="round" />
                    <path d="M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z" 
                          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" 
                          transform=" matrix(1 0 0 1 0 0) " 
                          stroke-linecap="round" />
                    <path d="M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  </g>
              </g>
          </svg>
      </section>
  </header>
  <nav-bar activeflag="home"></nav-bar>
  <div id='user'>
    <div class="popup-banner">
            <iframe id="iframe_news" src=""></iframe>
    </div>
    <div class="black-screen"></div>
    <main class="top bottom">
        <div id="banner" class="carousel slide" data-bs-ride="carousel">

          <!-- Indicators/dots -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#banner" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="3"></button>
          </div>
          
          <!-- The slideshow/carousel -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/img/banner22.png" alt="Los Angeles" class="d-block" style="width:100%">
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/iyuhop2.png" alt="Chicago" class="d-block" style="width:100%">
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/iyuhop3.png" alt="New York" class="d-block" style="width:100%">
            </div>
            <div class="carousel-item">
              <img src="@/assets/img/iyuhop1.png" alt="New York" class="d-block" style="width:100%">
            </div>
          </div>
          
          <!-- Left and right controls/icons -->
          <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <section class="home-box">
            <div id="deposit_url">
                <img src="../assets/img/deposit4.png"  width="40.001" height="40">
                <p>My Wallet</p>
            </div>
            <div id="transfer_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.001" height="26" viewBox="0 0 26.001 26">
                    <path id="send" d="M25.593.16a.906.906,0,0,1,.391.929L22.271,23.374a.913.913,0,0,1-.464.653.889.889,0,0,1-.45.116.979.979,0,0,1-.348-.072l-6.572-2.684-3.511,4.28a.855.855,0,0,1-.711.334.788.788,0,0,1-.319-.058.928.928,0,0,1-.61-.871V20.008L21.821,4.642,6.311,18.064.58,15.713A.918.918,0,0,1,.464,14.06L24.606.131A.886.886,0,0,1,25.071,0a.9.9,0,0,1,.522.16Z" transform="translate(0.002)" fill="#ffcb74"/>
                  </svg>
                <p>Transfer</p>
            </div>
            <div id="withdraw_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="30.857" height="26" viewBox="0 0 30.857 26">
                    <g id="Group_387" data-name="Group 387" transform="translate(-1 -4.62)">
                      <path id="Path_94" data-name="Path 94" d="M12.74,32.579a1.245,1.245,0,0,0,1.248,1.248H26.6a1.245,1.245,0,0,0,1.248-1.248V14.36H12.74ZM25.016,19.686a.5.5,0,0,1,1.006,0V24.5a.5.5,0,0,1-1.006,0Zm0,6.862a.5.5,0,0,1,1.006,0v4.81a.5.5,0,0,1-1.006,0Zm-2.3-6.862a.5.5,0,0,1,1.006,0V24.5a.5.5,0,1,1-1.006,0Zm0,6.862a.5.5,0,1,1,1.006,0v4.81a.5.5,0,0,1-1.006,0Zm-7.64-9.311a1.868,1.868,0,1,1,2.63,1.7,1.872,1.872,0,1,1-1.516,0,1.855,1.855,0,0,1-1.114-1.7Zm0,10.384h3.736v3.736H15.074Z" transform="translate(-3.865 -3.206)" fill="#ffcb74"/>
                      <path id="Path_95" data-name="Path 95" d="M30.569,4.62H2.288A1.288,1.288,0,0,0,1,5.908V16.889a1.288,1.288,0,0,0,1.288,1.288H7.869V12.643H7.111a1.248,1.248,0,0,1,0-2.5H25.933a1.248,1.248,0,1,1,0,2.5h-.946v5.534h5.581a1.288,1.288,0,0,0,1.288-1.288V5.908A1.288,1.288,0,0,0,30.569,4.62Z" transform="translate(0)" fill="#ffcb74"/>
                    </g>
                  </svg>
                <p>Withdraw</p>
            </div>
        </section>
        <section class="home-box">
            <div id="lock_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="29.576" height="25.894" viewBox="0 0 29.576 25.894">
                    <g id="Group_388" data-name="Group 388" transform="translate(-61 -85.277)">
                      <path id="Path_96" data-name="Path 96" d="M74.92,99.219a4.9,4.9,0,0,0,4.738,3.93A4.442,4.442,0,0,0,83.5,101.2a5.984,5.984,0,0,0,.9-1.982.758.758,0,0,1,.744-.611h8.988L89.371,86.249a1.526,1.526,0,0,0-1.415-.972h-16.6a1.526,1.526,0,0,0-1.415.972L65.188,98.608h8.988a.758.758,0,0,1,.744.611Zm-.429-10.035H84.825a.758.758,0,1,1,0,1.517H74.492a.758.758,0,0,1,0-1.517Zm-2.546,5.167a.758.758,0,0,1,.758-.758h13.91a.758.758,0,0,1,0,1.517H72.7A.758.758,0,0,1,71.945,94.351Z" transform="translate(-3.87)" fill="#ffcb74"/>
                      <path id="Path_97" data-name="Path 97" d="M80.868,283.013a6.272,6.272,0,0,1-10.16,0,7.631,7.631,0,0,1-.976-1.948H61v8.013a3.037,3.037,0,0,0,3.033,3.033H87.542a3.037,3.037,0,0,0,3.033-3.033v-8.013H81.844A7.634,7.634,0,0,1,80.868,283.013Z" transform="translate(0 -180.94)" fill="#ffcb74"/>
                    </g>
                  </svg>
                <p>Wallet Records</p>
            </div>
            <div id="activate_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                    <g id="Group_389" data-name="Group 389" transform="translate(-52 -52)">
                      <path id="Path_98" data-name="Path 98" d="M15,19.813v6.5a.813.813,0,0,0,1.625,0v-6.5a.813.813,0,0,0-1.625,0Z" transform="translate(49.188 44.375)" fill="#ffcb74" fill-rule="evenodd"/>
                      <path id="Path_99" data-name="Path 99" d="M2.795,26.656V25.438a.813.813,0,0,1,.812-.812H19.045a.813.813,0,0,1,.812.813v1.625a.812.812,0,1,0,1.625,0V25.438A2.437,2.437,0,0,0,19.045,23H3.607A2.437,2.437,0,0,0,1.17,25.438v1.219a.812.812,0,1,0,1.625,0Z" transform="translate(53.674 44.438)" fill="#ffcb74" fill-rule="evenodd"/>
                      <path id="Path_100" data-name="Path 100" d="M72.313,54.438A2.437,2.437,0,0,0,69.875,52h-9.75a2.437,2.437,0,0,0-2.437,2.438v8.125A2.437,2.437,0,0,0,60.125,65h9.75a2.437,2.437,0,0,0,2.438-2.437Zm-4.875,1.625v4.875a.813.813,0,0,0,1.625,0V56.063a.813.813,0,0,0-1.625,0Zm-6.5,4.875v-3.25a2.438,2.438,0,0,1,4.875,0v3.25a.813.813,0,0,1-1.625,0v-.812H62.563v.813a.813.813,0,0,1-1.625,0Zm3.25-2.437v-.812a.813.813,0,0,0-1.625,0V58.5ZM59.313,73.125a2.437,2.437,0,0,0-2.437-2.437H54.438A2.437,2.437,0,0,0,52,73.125v2.438A2.437,2.437,0,0,0,54.438,78h2.438a2.437,2.437,0,0,0,2.438-2.437Zm9.344,0a2.437,2.437,0,0,0-2.437-2.437H63.781a2.437,2.437,0,0,0-2.437,2.438v2.438A2.437,2.437,0,0,0,63.781,78h2.438a2.437,2.437,0,0,0,2.438-2.437Zm9.344,0a2.437,2.437,0,0,0-2.437-2.437H73.125a2.437,2.437,0,0,0-2.437,2.438v2.438A2.437,2.437,0,0,0,73.125,78h2.438A2.437,2.437,0,0,0,78,75.563Z" fill="#ffcb74" fill-rule="evenodd"/>
                    </g>
                  </svg>
                <p>Activate AI</p>
            </div>
            <div id="transaction_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.143" height="26" viewBox="0 0 24.143 26">
                    <g id="Layer_2" data-name="Layer 2" transform="translate(-3 -2)">
                      <path id="Path_101" data-name="Path 101" d="M7.643,20.571V13.143A4.643,4.643,0,0,1,12.286,8.5h7.429V4.786A2.794,2.794,0,0,0,16.929,2H5.786A2.794,2.794,0,0,0,3,4.786V25.214A2.794,2.794,0,0,0,5.786,28H16.929a2.794,2.794,0,0,0,2.786-2.786H12.286a4.643,4.643,0,0,1-4.643-4.643ZM10.429,3.857h1.857a.929.929,0,0,1,0,1.857H10.429a.929.929,0,0,1,0-1.857Z" fill="#ffcb74"/>
                      <path id="Path_102" data-name="Path 102" d="M24.857,11H12.786A2.794,2.794,0,0,0,10,13.786v1.857H27.643V13.786A2.794,2.794,0,0,0,24.857,11ZM10,21.214A2.794,2.794,0,0,0,12.786,24H24.857a2.794,2.794,0,0,0,2.786-2.786V17.5H10Z" transform="translate(-0.5 -0.643)" fill="#ffcb74"/>
                    </g>
                  </svg>
                <p>AI Transcation</p>
            </div>
        </section>
        <section class="home-box">
            <div id="mygas_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                    <g id="Group_391" data-name="Group 391" transform="translate(-0.8 -0.8)">
                      <path id="Path_103" data-name="Path 103" d="M14.553,6a8.553,8.553,0,1,0,8.553,8.553A8.553,8.553,0,0,0,14.553,6Zm0,7.7a2.566,2.566,0,0,1,.855,4.978v1.009H13.7V18.675a2.566,2.566,0,0,1-1.711-2.412H13.7a.855.855,0,1,0,.855-.855A2.566,2.566,0,0,1,13.7,10.43V9.421h1.711V10.43a2.566,2.566,0,0,1,1.711,2.412H15.408a.855.855,0,1,0-.855.855Z" transform="translate(-0.753 -0.753)" fill="#ffcb74"/>
                      <path id="Path_104" data-name="Path 104" d="M13.391,4.247l2.1-1.394,2.1,1.394.941-1.42L15.486.8,12.45,2.827Z" transform="translate(-1.686)" fill="#ffcb74"/>
                      <path id="Path_105" data-name="Path 105" d="M2.827,12.45.8,15.486l2.027,3.036,1.42-.941-1.394-2.1,1.394-2.1Z" transform="translate(0 -1.686)" fill="#ffcb74"/>
                      <path id="Path_106" data-name="Path 106" d="M15.486,28.564l-2.1-1.394-.941,1.42,3.036,2.027,3.036-2.027-.941-1.42Z" transform="translate(-1.686 -3.817)" fill="#ffcb74"/>
                      <path id="Path_107" data-name="Path 107" d="M27.17,13.391l1.394,2.1-1.394,2.1,1.42.941,2.027-3.036L28.59,12.45Z" transform="translate(-3.817 -1.686)" fill="#ffcb74"/>
                    </g>
                  </svg>
                <p>Gas/NFT/PIN</p>
            </div>
            <div id="affiliate_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.533" height="26" viewBox="0 0 22.533 26">
                    <g id="user-solid" transform="translate(-5 -3)">
                      <path id="Path_108" data-name="Path 108" d="M27.2,23.784a14.872,14.872,0,0,0-21.857,0A1.309,1.309,0,0,0,5,24.65v5.2a1.3,1.3,0,0,0,1.3,1.283H26.233a1.3,1.3,0,0,0,1.3-1.3v-5.2a1.309,1.309,0,0,0-.338-.849Z" transform="translate(0 -2.133)" fill="#ffcb74"/>
                      <path id="Path_109" data-name="Path 109" d="M23.133,9.067A6.067,6.067,0,1,1,17.067,3a6.067,6.067,0,0,1,6.067,6.067Z" transform="translate(-0.8)" fill="#ffcb74"/>
                    </g>
                  </svg>
                <p>My Team</p>
            </div>
            <div id="security_url">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.096" height="23.373" viewBox="0 0 19.096 23.373">
                    <path id="shield-security" d="M9.548.375,19.1,4.652v6.365A13.179,13.179,0,0,1,16.361,19.1a11.874,11.874,0,0,1-6.813,4.649A11.877,11.877,0,0,1,2.735,19.1,13.178,13.178,0,0,1,0,11.017V4.652Zm0,11.687V2.712L2.138,5.994v6.067h7.41v9.5a10.14,10.14,0,0,0,4.973-3.581,11.833,11.833,0,0,0,2.437-5.918Z" transform="translate(0 -0.375)" fill="#ffcb74"/>
                  </svg>
                <p>Security Setting</p>
            </div>
        </section>
        <section class="home-bar">
            <div class="home-bar-title">
                <p>Gas</p>
                <p><span id="gas_amount">{{ gas_amuont }}</span> USDT</p>
            </div>
            <div class="home-bar-line"><div id="gas_percent" style="width: 0%;"></div></div>
        </section>
        <section class="home-bar">
            <div class="home-bar-title">
                <p>Activate Days</p>
                <p><span id="days_left">{{days_left}}</span> Days/<span id="days_total">{{days_total}}</span></p>
            </div>
            <div class="home-bar-line"><div id="days_percent" style="width: 0%;">{{days_percent}}%</div></div>
        </section>
        <section class="help-search-answers">
            <p>Crypto News</p>
        </section>
        <section class="help-questions"  v-if="heart_flag">
            <div class="heart-loading">
              <div class="lds-heart">
                <div></div>
              </div>
            </div>
        </section>
        <section class="help-questions" v-else>
            <div v-for="n of news" class="row" :key="n.id">
              <div class='user-news-grid'>
                <div>
                  <img class='image-news' src= '{{ n.img_src }}'>
                  <section class='section-news'>
                    <p class='small-word-news'>{{n.date}}</p>
                    <p class='smaller-word-news'>{{ n.title }}</p>
                    </section>
                    </div>
                    </div>
            </div>
        </section>
    </main>
    <!-- TODO -->
    <section id="popup-banner" class="modal-container">  
        <div class="modal-dialog">    
            <svg class="modal-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="MyGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color:#2C5364;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#203A43;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#0F2027;stop-opacity:1" />
                  </radialGradient>
                </defs>
                <polygon class="modal-polygon" />
            </svg>
            <div class="modal-content">
                <h2 style="text-align:center;margin-bottom: 35px;">Customer Support</h2>
                <div id="qrcode">
                
                </div>
            </div>            
        </div>
    </section>
  </div>
</template>

<script>

  import NavBar from "./NavBar.vue";
  import {h} from 'vue';

  export default {
    data: function() {
      return {
          gas_amuont: 0,
          days_total: "--",
          days_left: "--",
          days_percent: 0,
          msg: [],
          heart_flag: true,
          news: [
            {
              id: 0,
              img_src: 'news.jpg',
              date: 'Fir,25 Mar 2022 12:17:36',
              title: 'Bank of England and regulators assess crypto regulation in raft of new reports'
            },
            {
              id: 1,
              img_src: 'news.jpg',
              date: 'Fir,25 Mar 2022 12:17:36',
              title: 'Bank of England and regulators assess crypto regulation in raft of new reports'
            },
            {
              id: 2,
              img_src: 'news.jpg',
              date: 'Fir,25 Mar 2022 12:17:36',
              title: 'Bank of England and regulators assess crypto regulation in raft of new reports'
            },
            {
              id: 3,
              img_src: 'news.jpg',
              date: 'Fir,25 Mar 2022 12:17:36',
              title: 'Bank of England and regulators assess crypto regulation in raft of new reports'
            },
            {
              id: 4,
              img_src: 'news.jpg',
              date: 'Fir,25 Mar 2022 12:17:36',
              title: 'Bank of England and regulators assess crypto regulation in raft of new reports'
            },
          ]
        };
    },

    created() {
      fetch("https://app.iyuho.net/Api/home")
        .then(async response => {
          const data = await response.json();
          console.log(data);
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          if (data.code == 1) {
            var arr = data.data;
            if (parseInt(arr.days_total) && parseInt(arr.days.days_left)) {
              this.days_total = arr.days_total;
              this.days_left = arr.days_left;
              this.days_percent = (arr.days_left/arr.days_total * 100).toFixed(2);
              document.getElementById('days_percent').animate({ width: this.days_percent + '%' }, 1500);
            }
          }
        })
        .catch(error => {
          // this.errorMessage = error;
          console.error("Request: " + error);
        });

        fetch("https://app.iyuho.net/Api/userWallet")
        .then(async response => {
          const data = await response.json();
          console.log(data);
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          if (data.code == 1) {
            var arr = data.data;
            if(parseInt(arr.gas)){
                var gas_percent = Number(arr.gas).toFixed(2);
                this.gas_amount = gas_percent;
            }
          }
        })
        .catch(error => {
          // this.errorMessage = error;
          console.error("Request: " + error);
        });

        fetch("https://app.iyuho.net/Api/rsstojson/")
        .then(async response => {
          const data = await response.json();
          console.log(data);
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          if (data.code == 1) {
            this.heart_flag = false;
            var list = data.data;
            for (let index = 0; index < list.length; index++) {
              const element = list[index];
              data.id = element.id;
              data.img_scr = element.img_src;
              data.date = element.date;
              data.title = element.title;
              this.news[index] = data;
            }
          }
        })
        .catch(error => {
          // this.errorMessage = error;
          console.error("Request: " + error);
        });
    },

    components: {
      NavBar,
    },

    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },

    methods: {    
      createModal: function (container) {
            return container
      },

      createPoint:  function (x, y) {
        var point;
        // var point = polygon.points.appendItem(svg.createSVGPoint());
        point.x = x || 0;
        point.y = y || 0;
        return point;
      },

      onLogout: function() {
        window.location.href = "/logout";
      },
    },

    computed: {

    },

    render() {
      return h('#user', { onClick: () => {
        alert('click');
        document.getElementsByClassName('popup-banner').hide();
        document.getElementsByClassName('black-screen').hide(300, 'swing');
      } })
    }
  };
  </script>

<style>
  @import '../assets/css/user_index.css';
  @import'~bootstrap/dist/css/bootstrap.css';
  @import '../assets/css/styles.css';

  .carousel-inner {
    margin: 10px 0;
  }
</style>
