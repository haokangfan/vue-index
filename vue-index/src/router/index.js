import {createRouter,createWebHashHistory} from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const Main=()=>import("@/components/Main")
const Left=()=>import("@/components/LeftBox")
const Home=()=>import("@/views/Home");
const NotFound=()=>import("@/views/NotFound")
const routes=[
    {
        path:'/:notFound(.*)',
        redirect: '/404'
    },
        {
        name:'404',
        path:'/404',
        components:{
            default:NotFound,
            'router-view-header':Main,
        }
    },
    {
        path:'/',
        components: {
            default:Home,
            'router-view-header':Main,
            'router-view-left':Left
        }
    }

]
const router=createRouter({
    history:createWebHashHistory(),
    routes,
    linkActiveClass:'active',
    scrollBehavior:(to,from,savedPosition)=>{
        if(savedPosition){
            return savedPosition
        }
        return {left:0,top:0}
    }
})
router.beforeEach((to,from,next)=>{
    nprogress.start()
    next()
    // const loggedin=localStorage.getItem('loggedin')
    // if(to.path!=='/'&&!loggedin){
    //     next({page:'/'})
    //     nprogress.done()
    // }
    // else{
    //     next()    
    // }
})
router.afterEach(()=>{
    nprogress.done()
})
export default router