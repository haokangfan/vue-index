<script setup>
import HelloWorld from './components/HelloWorld.vue';
import {ref} from 'vue'
// const count1=ref(8)
// const increment=(v)=>{
//   count1.value+=v;
// }
// const refCount=ref(null)
// const incr=()=>{
//   console.log(ref(null))
//   refCount.value.count++
// }
// const incfun=()=>{
//   refCount.value.inc();
// }
const changeHandler=()=>{
  console.log('changeHandler',Event);
}
const customClickHandler=(msg)=>{
  console.log('customClickHandler:',msg);
}
</script>

<template>
<div>
  <!-- <h2>App 组件标题</h2>
  <P>count:{{count1 }}</P>
  <button @click="increment(1)"> 增加</button>
  <button @click="incr"> 增加1</button>
  <button @click="incfun"> 增加2</button>
  
  <HelloWorld @incaaa="increment" ref="refCount" msg="aaa" /> -->
  <!-- count='99' -->
<HelloWorld msg="你好" value="val" style="color: red;" 
@change="changeHandler" 
@customClick="customClickHandler"
></HelloWorld>

</div>
</template>
<style scoped>
div{
  border: 1px solid red;
}
div :deep(h3){
  font-size: 10px;
}
</style>