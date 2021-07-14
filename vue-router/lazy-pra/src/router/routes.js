import About from '../views/About.vue'
import InfoList from '../views/InfoList.vue'
import MaskList from '../views/MaskList.vue'
import Home from '../views/Home.vue'

export default [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/home/infolist',
                component: InfoList
            },
            {
                path: '/home/masklist',
                component: MaskList
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => About
    }
]