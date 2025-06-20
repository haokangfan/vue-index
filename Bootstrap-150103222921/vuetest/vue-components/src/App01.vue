<script setup>
 import {provide,ref} from 'vue'
 import Child from './components/Child.vue'
 const count=ref(0)
 const msg=ref('')
 provide('count',count)
 provide('msg',msg)
 const increase=()=>{
    count.value++
 }
 provide('increase',increase)
</script>

<template>
  <div>
    <Child/>
    <p>msg:{{ msg }}</p>
    <p>count:{{ count }}</p>
    <!-- <p>state.count:{{ state.count }}</p> -->
  </div>
</template>
<style scoped>
 
</style>