import Vue from 'vue'
import Router from 'vue-router'
import Exios from 'axios'
import Home from '@/components/Home'
import AddCart from '@/components/Ads/AddCar'
import MyCars from '@/components/Ads/MyCars'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Order from '@/components/User/Orders'
import Car from '@/components/Ads/Car'

Vue.use(Router);
Vue.use(Exios);

export default new Router ({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/car/:id',
            name: 'car',
            component: Car,
            props: true
        },
        {
            path: '/registeration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/orders',
            name: 'orders',
            component: Order
        },
        {
            path: '/add_cars',
            name: 'add_car',
            component: AddCart
        },
        {
            path: '/my_cars',
            name: 'my_cars',
            component: MyCars
        }
    ],
    mode: 'history'
})