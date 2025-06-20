<template>
    <div>
        <h1>查看用户详情</h1>
        <!-- <button class="btn btn-primary">编辑用户</button> -->
        <!-- <router-link to="/users/edit" class="btn btn-primary" >编辑用户</router-link> -->
        <!-- <router-link type="button" :to="`/users/${$route.params.id}/edit?name=张三&age=18`" class="btn btn-primary" >编辑用户</router-link> -->
        <!-- <router-link type="button" :to="{
            name:'userEdit',
            params:{id:$route.params.id},
            query:{name:'张三',age:18}
        }" class="btn btn-primary" >编辑用户</router-link> -->

        <button class="btn btn-primary" @click="gotoEdit">编辑</button>
    </div>
</template>
<script setup>
import {useRouter,useRoute} from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
const router=useRouter()
const route=useRoute()
const gotoEdit=()=>{
   // router.push(`/users/${route.params.id}/edit?name=张三&age=18`)
    // router.push({
    //     path:`/users/${route.params.id}/edit`,
    //     query:{name:'张三',age:18}
    // })
    // router.push({
    //     name:'userEdit',
    //     params:{id:route.params.id},
    //     query:{name:'张三',age:18}
    // })
    router.replace({
        name:'userEdit',
        params:{id:route.params.id},
        query:{name:'张三',age:18}
    })
}
onBeforeRouteUpdate((to,from)=>{
    if(to.params.id!==from.params.id){
        alert(`已经切换查看不同的用户信息，目标用户id为${to.params.id}`)
    }
})
</script>