<template>
  <div>
    <h1>Child</h1>
    {{ msg }}
    {{ count }}
    <Grandson></Grandson>
</div>
</template>
<script setup>
import Grandson from './Grandson.vue';
import {ref,provide} from 'vue'
const msg=ref("a")
const count=ref(0)
provide('count',count)
</script>
 