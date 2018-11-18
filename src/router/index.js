import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home';
// 可见光无人机
import Light from '@/pages/light';
import LightList from '@/pages/light/list';
import LightWord from '@/pages/light/word';
import LightPicture from '@/pages/light/pictures';
import LightVideo from '@/pages/light/video';
// 喷火无人机
import Fire from '@/pages/fire';
import FireList from '@/pages/fire/list';
import FireWord from '@/pages/fire/word';
import FirePicture from '@/pages/fire/pictures';
import FireVideo from '@/pages/fire/video';
// 红外无人机
import Infrared from '@/pages/infrared';
import InfraredList from '@/pages/infrared/list';
import InfraredWord from '@/pages/infrared/word';
import InfraredPicture from '@/pages/infrared/pictures';
import InfraredVideo from '@/pages/infrared/video';

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
                    ],
                    redirect: 'lightList'
                },
                {
                    path: '/fire',
                    name: 'fire',
                    component: Fire,
                    children: [
                        {
                            path: '/fireWord',
                            name: 'fireWord',
                            component: FireWord
                        },
                        {
                            path: '/fireList',
                            name: 'fireList',
                            component: FireList
                        },
                        {
                            path: '/firePicture',
                            name: 'firePicture',
                            component: FirePicture
                        },
                        {
                            path: '/fireVideo',
                            name: 'fireVideo',
                            component: FireVideo
                        }
                    ],
                    redirect: '/fireList'
                },
                {
                    path: '/infrared',
                    name: 'infrared',
                    component: Infrared,
                    children: [
                        {
                            path: '/infraredWord',
                            name: 'infraredWord',
                            component: InfraredWord
                        },
                        {
                            path: '/infraredList',
                            name: 'infraredList',
                            component: InfraredList
                        },
                        {
                            path: '/infraredPicture',
                            name: 'infraredPicture',
                            component: InfraredPicture
                        },
                        {
                            path: '/infraredVideo',
                            name: 'infraredVideo',
                            component: InfraredVideo
                        }
                    ],
                    redirect: '/infraredList'
                }
            ]
        }
    ]
})
