<template>
    <div>
        <count-show :count="count" />
        <hr>
        <count-update
        :increment="increment"
        :decrement="decrement"
        :incrementIfOdd="incrementIfOdd"
        :incrementAsync="incrementAsync"
        />

  
   </div>
</template>
<script setup>
import {ref} from 'vue'
import CountShow from './CountShow.vue'
import  CountUpdate from './CountUpdate.vue'
const count=ref(0)
const increment=(num)=>{
    count.value+=num
}
const decrement=(num)=>{
    count.value-=num
}
const incrementIfOdd=(num)=>{
    if(count.value%2===1){
        count.value+=num
    }
}
const incrementAsync=(num)=>{
    setTimeout(() => {
        count.value+=num
    }, 1000);
}

</script>