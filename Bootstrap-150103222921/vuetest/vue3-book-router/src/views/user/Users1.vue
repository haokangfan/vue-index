<template>
    <div>
       <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/" class="text-decoration-none">首页1</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/users" class="text-decoration-none">用户1</router-link>
                </li>
            </ol>
       </nav>
       <div class="row">
            <div class="col-3">
                <h1>用户列表</h1>
                <div class="list-group">
                    <!-- <a href="#" class="list-group-item list-group-item-action active">用户1</a>
                    <a href="#" class="list-group-item list-group-item-action" >用户2</a> -->

                    <!-- <router-link to="/users/detail"
                        class="list-group-item list-group-item-action"
                    >用户1</router-link>
                     <router-link to="/users/detail"
                        class="list-group-item list-group-item-action"
                    >用户2</router-link> -->

                    <router-link v-for="id in ids" :to="`/users/${id}`" :key="id" 
                    class="list-group-item list-group-item-action " :class="{active:id===currentId}" >
                        用户{{id}}
                    </router-link>
                </div>
            </div>
            <div class="col-9">
                <!-- <h1>请选择用户进行查看与编辑</h1>
                <h1>查看用户详情</h1>
                <h1>编辑用户</h1> -->
                <router-view name="users-alert"></router-view>
                <router-view></router-view>
                <router-view name="users-alert"></router-view>

            </div>
       </div>
    </div>
</template>
<script setup>
import {
    ref,
    watch,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    onActivated,
    onDeactivated, 
    onBeforeUpdate,
    onUpdated
} from 'vue'
import {useRoute} from 'vue-router'
const ids=ref([1,2,3,4,5])
const route=useRoute()
console.log(route)
const currentId=ref(null)
watch(
    ()=>route.params.id,
    (val)=>{
        currentId.value=+val;
    },
    {immediate:true}
)
onUnmounted(()=>{
    console.log("Users onUnmounted")
})
onBeforeMount(()=>{
    console.log("Users OnBeforeMount")
})
onMounted(()=>{
    console.log("Users onMounted")
})
onBeforeUpdate(()=>{
    console.log("Users onBeforeUpdate")
})
onUpdated(()=>{
    console.log("Users onUpdated")
})
onBeforeUnmount(()=>{
    console.log("Users onBeforeUnmount")
})
onActivated(()=>{
    console.log("Users onActiveted")
})
onDeactivated(()=>{
    console.log("Users onDeactivated")
})

</script>
<script>
export default {
    name:'Users'
}
</script>