<template>
<div class="container">
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <router-link  to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" ><span class="fs-4">Vue 路由</span></router-link>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link  to="/" class='btn btn-secondary'>首页</router-link>

      </li>
      <li>
         <router-link    to="/users" custom class='btn btn-secondary' v-slot="{navigate,isActive}">
          <button class="btn btn-secondary" 
                  :class="[isActive&&'active']"
                  @click="navigate"
                  >
                  用户页
          </button>
        </router-link>
      </li>
    </ul>
   
  </header>
<!-- <button class="btn btn-secondary" @click="changePage(Home)">首页</button>
<button class="btn btn-secondary" @click="changePage(Users)">用户页</button> -->
<!-- <hr></hr> -->
 <!-- <component :is="selectPage"></component> -->
 
  <router-view></router-view>
</div>
</template>
<script setup>
// import Home from '@/views/Home'
// import Users from '@/views/Users';
// import{ ref, markRaw} from 'vue';
// const selectPage=ref(null);
// function changePage(page){
//   selectPage.value=markRaw(page);
// }
// changePage(Home)
</script>
<style>
.router-link-active{
  background-color: #222;
  font-weight: bolder;
}
</style>