<template>
  <div>
    <h1>Child</h1>
   2
   <button @click="increase">increase</button>
</div>
</template>
<script setup>
import emitter from '@/services/emitter';
const increase=()=>{
  emitter.emit('increaseCount',2);
}
</script>
 