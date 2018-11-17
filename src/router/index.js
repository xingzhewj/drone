import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home';
import Light from '@/pages/light';
import LightList from '@/pages/light/list';
import LightWord from '@/pages/light/word';
import LightPicture from '@/pages/light/pictures';
import LightVideo from '@/pages/light/video';
import Fire from '@/pages/fire';
import Infrared from '@/pages/infrared';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/light',
                    name: 'light',
                    component: Light,
                    children: [
                        {
                            path: '/lightWord',
                            name: 'lightWord',
                            component: LightWord
                        },
                        {
                            path: '/lightList',
                            name: 'lightList',
                            component: LightList
                        },
                        {
                            path: '/lightPicture',
                            name: 'lightPicture',
                            component: LightPicture
                        },
                        {
                            path: '/lightVideo',
                            name: 'lightVideo',
                            component: LightVideo
                        }
                    ]
                },
                {
                    path: '/Fire',
                    name: 'fire',
                    component: Fire
                },
                {
                    path: '/infrared',
                    name: 'infrared',
                    component: Infrared
                }
            ]
        }
    ]
})
