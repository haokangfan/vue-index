<template>
  <div>
    <h1>Child</h1>
1{{ count }}
</div>
</template>
<script setup>
import {ref,onMounted, onBeforeUnmount}from 'vue';
import emitter from '@/services/emitter';
const count=ref(0);
const increaseCountCallback=(num)=>{
  count.value+=num;
}
onMounted(()=>{
  emitter.on('increaseCount',increaseCountCallback);
})
onBeforeUnmount(()=>{
  emitter.off('increaseCount',increaseCountCallback);
})
</script>
 