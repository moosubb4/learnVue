import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import WelcomePage from '@/components/welcome/Welcome.vue';
import DashboardPage from '@/components/dashboard/Dashboard.vue';
import SignupPage from '@/components/auth/Signup.vue';
import SigninPage from '@/components/auth/Signin.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage },
];

// component: () => import('./views/About.vue')

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

