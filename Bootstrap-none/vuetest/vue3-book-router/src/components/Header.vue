<template>
    <header class="d-flex flex-wrap justif-content-center py-3 mb-4 border-bottom">
        <router-link to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
        <span class="fs-4">Vue 路由</span>
    </router-link>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link to="/" class="nav-link">首页1</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/users" class="nav-link">用户1</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products" class="nav-link">产品</router-link>
        </li>
    </ul>
     <div class="dropdown text-end">
        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" 
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
        <img src="@/assets/logo.jpeg" alt="mdo" width="32" height="32" class="rounded-circle">

        </a>
        <ul class="dropdown-menu text-small">

            <li><a href="#" class="dropdown-item" @click="login">用户登录</a></li>
            <li><a href="#" class="dropdown-item" @click="logout">退出登录</a></li>
            <li><a href="javascript:void(0)" class="dropdown-item" @click="addProductRoute">动态添加产品列表页</a></li>
            <li><a href="javascript:void(0)" class="dropdown-item" @click="removeProductRoute">动态删除产品列表页</a></li>
        </ul>
     </div>
    </header>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router=useRouter()
const addProductRoute=()=>{
    if (router.hasRoute('products')){
        router.push("/products")
        return 
    }
    const Header=()=>import('@/components/Header')
    const Footer=()=>import("@/components/Footer")
    const Products=()=>import("@/views/Products")
    router.addRoute({
        name:'products',
        path:'/products',
        components:{
            default:Products,
            'router-view-header':Header,
            'router-view-footer':Footer
        }
    })
    router.push('/products')
}
const removeProductRoute=()=>{
    router.removeRoute('products')
    router.push('/')
}
const login=()=>{
    localStorage.setItem('loggedin',true)
}
const logout=()=>{
    localStorage.removeItem('loggedin')
}
</script>