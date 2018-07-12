
import App from '../App.vue';

const home = () => import(/* webpackChunkName: "home" */'../page/home/home.vue');
const profile = () => import(/* webpackChunkName: "profile" */ '../page/profile/profile.vue');
const recharge = () => import(/* webpackChunkName: "recharge" */ '../page/profile/children/recharge.vue');

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        redirect: '/home'
    },{
        path: '/home',
        component: home
    },{
        path: '/profile',
        component: profile,
        children: [{
            path: 'recharge',
            component: recharge
        }]
    }]
}]

