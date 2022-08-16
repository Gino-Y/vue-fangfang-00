<script setup>
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'
import Num from "./elements/num.vue";
let num = ref(1)
function add(){
  num.value += 1
}
</script>

<template>
  <div class="comm">
    <div class="title">13-使用组件及传参_父->子</div>
    <file-name fileName="defineProps.vue"/>
    <num :num=num :action="add" :color="'red'"/>
  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  //background: rgba(68, 63, 63, 0.67);
  background: rgba(68, 63, 63, 0.67);
  width: 200px;
  height: 260px;
}
</style>