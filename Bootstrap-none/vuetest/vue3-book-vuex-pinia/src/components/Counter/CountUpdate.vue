<template>
    <div>
        <select v-model.number="num" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="clickIncrement">增加</button>
        <button @click="clickDecrement">减少</button>
        <button @click="clickIncrementIfOdd">奇数增加</button>
        <button @click="clickIncrementAsync">异步增加（延迟1秒）</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import {useStore} from 'vuex'
import useCounterStore from '@/strore/modules/counter';

const num=ref(1)

// const props=defineProps({
//     increment:Function,
//     decrement:Function,
//     incrementIfOdd:Function,
//     incrementAsync:Function 
// })
// const store=useStore()
const store=useCounterStore()

const clickIncrement=()=>{
    // props.increment(num.value)
    // store.commit('counter/increment', num.value)
    store.increment(num.value)
}
const clickDecrement=()=>{
    // props.decrement(num.value)
    // store.commit('counter/decrement',num.value)
    store.decrement(num.value)
}
const clickIncrementIfOdd=()=>{
    // props.incrementIfOdd(num.value)
    // store.dispatch('counter/incrementIfOdd', num.value)
    store.incrementIfOdd(num.value)
}
const clickIncrementAsync=()=>{
    // props.incrementAsync(num.value)
    // store.dispatch('counter/incrementAsync',num.value)
    store.incrementAsync(num.value)
}
</script>
<script>
export default {
    name:'CountUpdate'
}
</script>