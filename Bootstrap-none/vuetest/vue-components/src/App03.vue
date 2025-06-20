
<template>
  <div>
    <GlobalAlert/>
    <button @click="changeTab(comp1)"  v-highlight:background.delayed.blink="{
      mainColor:'red',
      secondColor:'green',
      delay:500
    }" >change comp1 </button>
    <button @click="changeTab(comp2)">change comp2 </button>
    <button @click="changeTab(comp3)">change comp3 </button>
    <keep-alive include="comp1,comp2">
      <component :is="tab" />
    </keep-alive>
  </div>
</template>
 <script setup>
  import comp1 from './components/comp1.vue';
  import comp2 from './components/comp2.vue';
  import comp3 from './components/comp3.vue';
  import GlobalAlert from './components/GlobalAlert.vue';
  import { ref,markRaw} from 'vue'
 const tab=ref(markRaw(comp1))
 function changeTab(comp){
    tab.value=markRaw(comp);
 }
 changeTab(comp1);
</script>
<style scoped>

</style>