<script setup>
import {ref, reactive} from 'vue';
import FileName from './elements/fileName.vue'

let num = ref(100)
let obj = reactive({num:100})

const itens = reactive([//===================>
  // {num:100},
  // {num:8},
])
function sum() {
  let n = num.value + obj.num
  itens.push({num: n})//===================>
}
</script>

<template>
  <div class="comm">
    <div class="title">06-ref函数_对比reactive</div>
    <FileName fileName="ref_reactive.vue"/>

    <div class="num">{{num}}</div>
    <div class="num">{{obj.num}}</div>

    <div>
      <input type="text" v-model="num">
      <input type="text" v-model="obj.num">
      <button @click="num++">+</button>
      <button @click="num--">-</button>
      <button @click="obj.num++">+</button>
      <button @click="obj.num--">-</button>
    </div>
    <div>
      <button class="sum" @click="sum">求和</button>
      <div class="label" v-for="(item, index) in itens" :key="index">{{index+1}}._{{item.num}}</div>
    </div>
  </div>
</template>

<style scoped>
button{
  width: 50px;
}
input{
  width: 45%;

}
.sum{
  width: 100%;
}
.label{
  margin-left: 10px;
  float:left;
  width: 50px;
  background-color: #7a888c;
  font-size: 10px;
  text-align: center;
  border-style:solid;
  border-width:1px;
  border-color: rgba(0, 0, 0, 0.5);
}

.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 1);
  width: 200px;
  height: 260px;
}
.num{
  float:left;
  text-align:center;
  font-size:35px;
  /*margin: auto;*/
  width: 45%;
  background-color: #91b0b9;
  border-style:solid;
  border-color: rgba(0, 0, 0, 0.39);
  border-width:2px;
}
</style>