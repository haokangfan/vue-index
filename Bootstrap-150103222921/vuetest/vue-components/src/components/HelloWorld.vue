<template>
  <div>

    <!-- <h3>{{ msg }}</h3>
    <h3>{{ count }}</h3>
    <h3>{{ update }}</h3> 

    <button @click="inc">aa++</button>
    <button @click="$emit('incaaa',2)">自定义事件</button> -->


    <input type="text" v-bind="attrs">
    <p>{{ props.msg }}</p>
    <button @click="$emit('customClick','自定义事件')">自定义事件</button>
</div>
</template>
<script setup>
import {ref} from 'vue'
import { useAttrs } from 'vue';
const props=defineProps(['msg']);
const attrs=useAttrs();
console.log('props',props);
console.log('attrs',attrs);
// const count=ref(0)
// const prop=defineProps({'msg':String
// ,'count':{
//   type:Number,
//   defult:8,
//   required:true,
//   validator:(val)=>val>0&&val<3
// }
// }
// )
// const update=ref(prop.count)s
// const inc=()=>{
//   // update.value++;
//   count.value++;
// }
// defineExpose({
//   count,
//   inc
// })


</script>
<!-- <script>
export default{
  inheritAttrs:false
}
</script> -->