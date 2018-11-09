import Home from "./components/Home.vue";
import Stock from './components/stocks/Stock.vue';
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stock },
];