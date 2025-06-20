import {createRouter,createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import Home from '@/views/Home'
// // import Users from '@/views/Users'
// import Users from '@/views/user/Users1'
// import UsersStart from '@/views/user/UserStart'
// import UserDetail from '@/views/user/UserDetail'
// import UserEdit from '@/views/user/UserEdit'
// import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
// import UsersAlert from '../components/UsersAlert.vue'
// import NotFound from '@/views/NotFound/index'
const Home=()=>import("@/views/Home")
const Users=()=>import("@/views/user/Users1")
const UserDetail=()=>import("@/views/user/UserDetail")
const UserEdit=()=>import("@/views/user/UserEdit")
const UserStart=()=>import("@/views/user/UserStart")
const Header=()=>import("@/components/Header")
const Footer=()=>import("@/components/Footer")
const UsersAlert=()=>import("@/components/UsersAlert")
const NotFound=()=>import("@/views/NotFound")

const routes=[
    {
        path:'/:notFound(.*)',
        redirect:'/404'
    },
    {
        name:'404',
        path:'/404',
        components:{
            default:NotFound,
            'router-view-header':Header,
            'router-view-footer':Footer
        }
    },
    {
        path:'/redirect-to-users',
        redirect: '/users'
    },
    {
        path:'/',
        components:
        {
              default:Home,
             'router-view-header':Header,
             'router-view-footer':Footer
        },
        meta: {
             enterActiveClass:'animate__slideInLeft',
             leaveActiveClass:'animate__slideOutRight'
         }
    },
    {
        path:'/users',
        components:
        {
            default:Users,
            'router-view-header':Header
        },
        meta:{
            enterActiveClass:'animate__bounceIn',
            leaveActiveClass:'animate__bounceOut'
        },
        children:[
            {
                path:'',
                // component:UsersStart,
                components:{
                    default:UserStart,
                    'users-alert':UsersAlert
                }
               
            },
            // {path:'detail',component:UserDetail},
            // {path:'edit',component:UserEdit},
            {name:'userDetail',path:':id',component:UserDetail},
            {
                name:'userEdit',
                path:':id/edit',
                component:UserEdit,
                // props:true
                // props:{level:'初级'}
                props: (router)=>({
                    id:router.params.id,
                    name:router.query.name,
                    age:router.query.age,
                    level:'中级'

                }),
                beforeEnter:(to,from,next)=>{
                    console.log(from)
                    if(from.name!=='userDetail'){
                        next('/')
                    }
                    else{
                        next()
                    }
                }
            }
        ]
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
    NProgress.start()
    const loggedin=localStorage.getItem('loggedin')
    if(to.path!=='/'&&!loggedin){
        next({page:'/'})
        NProgress.done()
    }
    else{
        next()    
    }
})
router.afterEach(()=>{
    NProgress.done()
})
export default router