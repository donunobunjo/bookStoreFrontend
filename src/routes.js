import Login from './components/Login.vue';
import Home from './components/Home.vue';


export const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'login',
        path: '/',
        component: Login
    },
    
];