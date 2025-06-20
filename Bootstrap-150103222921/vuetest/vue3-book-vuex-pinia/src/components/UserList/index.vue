<template>
    <h2>GitHub用户列表</h2>
    <button @click="clickGetUsers"> 获取用户列表 </button>
    <!-- <h3 v-if="store.state.userList.loading">正在加载中</h3> -->
    <h3 v-if="loading">正在加载中</h3>
    <ul v-else>
        <!-- <li v-for="user in store.state.userList.users" :key="user.login"> -->
        <li v-for="user in users" :key="user.login">
            <a :href="user.html_url" target="_blank">{{ user.login }}</a>
        </li>
    </ul>
</template>
<script setup>
import { useStore } from 'vuex';
import useUserListStore from '@/strore/modules/userList';
import { storeToRefs } from 'pinia';
const userListStore=useUserListStore()
const {loading,users} =storeToRefs(userListStore)
const  clickGetUsers=()=>{
    userListStore.searchUsers('atguigu')
}
// const store=useStore()
// const clickGetUsers=()=>{
//     store.dispatch('userList/searchUsers','atguigu')
// }

</script>
<script>
export default {
    name:'UserList'
}
</script>