<template>
    <div>
        <h1>编辑用户</h1>
        <p>用户编号：{{$route.params.id}}</p>
        <p>用户名称：{{$route.query.name}}</p>
        <p>用户编号：{{$route.query.age}}</p>
    <h2>参数映射的内容：</h2>
    <p>id:{{ id }}</p>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <p>age:{{ level }}</p>
    <button class="btn btn-primary" @click="goback">返回上一页</button>
    </div>
    
</template>
<script setup>
import {useRouter,onBeforeRouteLeave} from 'vue-router'
const props=defineProps(['id','name','age','level'])
const router=useRouter()
console.log(router)
const goback=()=>{
   router.back()
}
onBeforeRouteLeave((to,from,next)=>{
    if(window.confirm('你是否确认离开本页面？点击"取消"按钮将停留于此页面！')){
        next()
    }
})

</script>