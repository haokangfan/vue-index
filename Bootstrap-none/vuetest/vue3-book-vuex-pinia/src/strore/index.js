import {createStore} from 'vuex'
import counter from './modules/counter'
import userList from './modules/userList'
import createPersistedState from 'vuex-persistedstate'
const store=createStore({
    modules:{
        counter,
        userList
    },
     plugins: [createPersistedState(
        {paths:['counter']}
     )]


    // state:{
    //     count:0
    // },
    // getters:{
    //     oddOrEven(state){
    //         return state.count%2===1?'奇数':'偶数'
    //     }
    // },
    // mutations:{
    //     increment(state,num){
    //         state.count+=num
    //     },
    //     decrement(state,payload){
    //         state.count-=payload
    //     },


    // },
    // actions: {
    //     incrementIfOdd(context,num){
    //         if(context.state.count%2===1){
    //             context.commit('increment',num)
    //         }
    //     },
    //     incrementAsync({commit},num){
    //         setTimeout(() => {
    //             commit('increment',num)
    //         }, 1000);
    //     }
    // }
})
export default store