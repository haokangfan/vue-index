import axios from 'axios'
import { defineStore } from 'pinia'

const useUserListStore=defineStore('userList',{
    persist:true,
    state:()=>{
        return {
            loading:false,
            users:[]
        }
    },
    actions:{
        async searchUsers(keyword){
            this.loading=true
            this.users=[]
            const response=await axios.get('https://api.github.com/search/users?q='+keyword )
            const users=response.data.items
            this.users=users
            this.loading=false
        }
    }
})
export default useUserListStore

// export default {
  
//     namespaced: true,
//     state:{
//         loading:false,
//         users:[]
//     },
//     mutations: {
//         requesting(state){
//             state.loading=true
//             state.users=[]
//         },
//         reqSuccess(state,users){
//             state.loading = false
//             state.users= users
//         }
//     },
//     actions:{
//         async searchUsers({commit},keyword){
//             commit('requesting')
//             const response=await axios.get('https://api.github.com/search/users?q='+keyword )
//             const users=response.data.items
//             commit('reqSuccess',users)

//         }
        
//     }
// }