<template>
<div class="container" style="height: 1200px;">
 <!-- <Header></Header> -->
<!-- <button class="btn btn-secondary" @click="changePage(Home)">首页</button>
<button class="btn btn-secondary" @click="changePage(Users)">用户页</button> -->
<!-- <hr></hr> -->
 <!-- <component :is="selectPage"></component> -->
 
  <router-view name="router-view-header"></router-view>
  <!-- <transition enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__bounceOut"
  >
  <router-view></router-view>
  </transition> -->
  <router-view v-slot="{Component,route}">
    <transition name="" mode="out-in" 
    :enter-active-class="`animate__animated ${route.meta.enterActiveClass}`"
    :leave-active-class="`animate__animated ${route.meta.leaveActiveClass}`"
    >
    <!-- <keep-alive include="Home"> -->
    <keep-alive :include="['Home']">
      <component :is="Component"></component>
    </keep-alive>
    </transition>
  </router-view>

  <router-view name="router-view-footer"></router-view>
</div>
</template>
<script setup>
import Header from '@/components/Header'

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