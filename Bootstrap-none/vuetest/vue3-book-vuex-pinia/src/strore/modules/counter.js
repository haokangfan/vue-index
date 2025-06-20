import {defineStore} from 'pinia';
const useCounterStore=defineStore('counter',{
    persist:true,
    state:()=>{
        return {
            count:0
        }
    },
    actions:{
        increment(num){
            this.count+=num
        },
        decrement(num){
            this.count-=num
        },
        incrementIfOdd(num){
            if(this.count%2===1){
                this.increment(num)
            }
        },
        incrementAsync(num){
            setTimeout(() => {
                this.increment(num)
            }, 1000);
        }
    },
    getters:{
        oddOrEven(){
            return this.count%2===1?'奇数':'偶数'
        }
    }
})
export default useCounterStore

// export default {
//     namespaced: true,
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment(state,payload){
//             state.count+=payload
//         },
//          decrement(state,payload){
//             state.count-=payload
//         }
//     },
//     actions:{
//         incrementIfOdd(context,num){
//             if(context.state.count%2 ===1 ){
//                 context.commit('increment',num)
//             }
//         },
//         incrementAsync(context,num){
//             setTimeout(()=>{
//                 context.commit('increment',num)
//             },1000)
//         }
//     },
//     getters: {
//         oddOrEven(state){
//             return state.count%2===1?'奇数':'偶数'
//         }
//     }
   
// }