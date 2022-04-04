<template>
  <div id="app">
    <div id="message"></div>
    <router-view></router-view>
  </div>
</template>


<style scoped>
  #app {
    margin: 0 auto;
    /* width: 100%; */
    max-width: 414px;
  }
  
  #message {
    position: absolute;
    margin-top: 50px;
    max-width: 414px;
    width: 60%;
    /* animation: message-fade; */
  }

  #message strong {
    margin-right: 10px;
  }

  
</style>
