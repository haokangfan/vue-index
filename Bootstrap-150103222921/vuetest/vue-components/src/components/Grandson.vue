<template>
  <div>
    <h2>Grandson</h2>
    <p>msg:{{ msg }}</p>
    <p>count:{{ count }}</p>
    <button @click="increaseCount">increaseCount</button>
    <button @click="increase">increase</button>
</div>
</template>
 <script setup>
import {inject} from 'vue';
const msg=inject('msg')
const count=inject('count')
const increase=inject('increase')
const increaseCount=()=>{
  count.value++
}
msg.value="dfdfd"
</script>