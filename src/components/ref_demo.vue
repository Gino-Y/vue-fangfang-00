<script setup>
import {ref, reactive} from 'vue';
import FileName from './elements/fileName.vue'

let id = ref(100)
let obj = reactive({id:100})
</script>

<template>
  <div class="comm">
    <div class="title">06-ref函数</div>
    <FileName fileName="ref_demo.vue"/>
    {{id}}
    {{obj.id}}
    <div>
      <input type="text" v-model="id">
      <button @click="id++">input number ++</button>
    </div>
  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 1);
  height: 200px;
  width: 200px;
}
</style>