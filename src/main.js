import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// import VueTelInput from 'vue-tel-input'
// import 'vue-tel-input/dist/vue-tel-input.css';

import UserIndex from './components/UserIndex';
import MyApi from './components/MyApi';
import MyEarning from './components/Earning';
import LoginPage from './components/LoginPage';
import MyTeam from './components/MyTeam';
import MyLock from './components/MyLock';
import Register from './components/Register';

// import 'bootstrap'
// import Toasted from 'vue-toasted';

const routes = [
  { path: '/', component: LoginPage, title: "IYUHO", name:"home" },
  { path: '/login', component: LoginPage, title: "IYUHO", name:"login"},
  { path: '/logout', component: LoginPage, title: "IYUHO", name:"logout"},
  { path: '/user/index', component: UserIndex, title: "IYUHO", name:"user"},
  { path: '/user/myapi', component: MyApi, title: "IYUHO", name:"myapi"},
  { path: '/user/earning', component: MyEarning, title: "IYUHO", name:"earning"},
  { path: '/user/mylock', component: MyLock, title: "IYUHO", name:"mylock"},
  { path: '/user/myteam', component: MyTeam, title: "IYUHO", name:"myteam"},
  { path: '/user/Register', component: Register, title: "IYUHO", name:"register"},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
// app.use(window['vue-tel-input'])
app.use(router)
// app.use(VueTelInput)
// app.use(Toasted, {
//   duration: 1000
// })
app.mount('#app')
