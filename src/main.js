import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css';

import UserIndex from './components/UserIndex';
import MyApi from './components/MyApi';
import MyEarning from './components/Earning';
import LoginPage from './components/LoginPage';

import 'bootstrap'

const routes = [
  { path: '/', component: LoginPage, title: "IYUHO" },
  { path: '/login', component: LoginPage, title: "IYUHO"},
  { path: '/logout', component: LoginPage, title: "IYUHO"},
  { path: '/user/index', component: UserIndex, title: "IYUHO"},
  { path: '/user/myapi', component: MyApi, title: "IYUHO"},
  { path: '/user/earning', component: MyEarning, title: "IYUHO"},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(window['vue-tel-input'])
app.use(router)
app.use(VueTelInput)
app.mount('#app')
