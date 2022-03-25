import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserIndex from './components/UserIndex';
import LoginPage from './components/LoginPage';

const routes = [
  { path: '/user/index', component: UserIndex, title: "IYUHO"},
  { path: '/', component: LoginPage, title: "IYUHO" },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router);
app.mount('#app')
