import Vue from 'vue'
import Router from 'vue-router'
import first from "../components/first";
import second from "../components/second";
import user from "../components/user";
import note from "../components/note";


Vue.use(Router)

export default new Router({
    routes: [
        {path: "/first", component: first},
        {path: '/second', component: second},
        {path: '/user', component: user},
        {path: '/note', component: note},
        {path: '/', redirect: '/first'},
        {path: '/*', redirect: '/first'},

    ]
})
