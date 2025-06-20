<template>
    <div>
        <!-- 点击次数：{{ count }},当前次数为：{{ oddOrEven }} -->
        <!-- 点击次数：{{ store.state.counter.count }},<br>
        当前次数为：{{ store.getters['counter/oddOrEven'] }} -->
         点击次数：{{conterStore.count }},<br>
        当前次数为：{{ conterStore.oddOrEven }}
    </div>
</template>
<script setup>
    // import {computed} from 'vue'
    // const props=defineProps({
    //     count:Number
    // })
    // const oddOrEven=computed(()=>{
    //     return props.count%2 ===1 ?'奇数':'偶数';
    // })
    import useCounterStore from '@/strore/modules/counter';
    const conterStore=useCounterStore()
    // import {useStore} from 'vuex'
    // const store=useStore()
    // console.log(store)
</script>
<script>
export default {
    name:'CountShow'
}
</script>