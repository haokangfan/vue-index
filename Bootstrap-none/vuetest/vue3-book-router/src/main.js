import { createApp } from 'vue'
import './style.css'
import {createRouter,createWebHashHistory} from 'vue-router';

import App from './App01.vue'
// import Home from '@/views/Home'
// // import Users from '@/views/Users'
// import Users from '@/views/user/Users1'
// import UsersStart from '@/views/user/UserStart'
// import UserDetail from '@/views/user/UserDetail'
// import UserEdit from '@/views/user/UserEdit'


// const routes=[
//     {path:'/',component:Home},
//     {
//         path:'/users',
//         component:Users,
//         children:[
//             {path:'',component:UsersStart},
//             // {path:'detail',component:UserDetail},
//             // {path:'edit',component:UserEdit},
//             {path:':id',component:UserDetail},
//             {
//                 path:':id/edit',
//                 component:UserEdit,
//                 // props:true
//                 // props:{level:'初级'}
//                 props: (router)=>({
//                     id:router.params.id,
//                     name:router.query.name,
//                     age:router.query.age,
//                     level:'中级'

//                 })
//             }
//         ]
//     }
// ]
// const router=createRouter({
//     history:createWebHashHistory(),
//     routes,
//     linkActiveClass:'active'
// })
import router from './router'
createApp(App).use(router).mount('#app')
