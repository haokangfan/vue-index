<template>
    <div>
        首页
    </div>
</template>
<script setup>
import {
   onBeforeMount,
   onMounted,
   onBeforeUnmount,
   onUnmounted,
   onActivated,
   onDeactivated, 
   onBeforeUpdate,
   onUpdated
}from 'vue'
onUnmounted(()=>{
    console.log("home onUnmounted")
})
onBeforeMount(()=>{
    console.log("Home OnBeforeMount")
})
onMounted(()=>{
    console.log("Home onMounted")
})
onBeforeUpdate(()=>{
    console.log("Home onBeforeUpdate")
})
onUpdated(()=>{
    console.log("Home onUpdated")
})
onBeforeUnmount(()=>{
    console.log("Home onBeforeUnmount")
})
onActivated(()=>{
    console.log("Home onActiveted")
})
onDeactivated(()=>{
    console.log("Home onDeactivated")
})


</script>
<script>
export default {
    name:'Home'
}
</script>