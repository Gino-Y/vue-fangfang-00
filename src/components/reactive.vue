<script setup>
import {reactive} from 'vue'
import FileName from './elements/fileName.vue'

const list = reactive([
  // {id: 1, name: 'itlove1'},
  // {id: 2, name: 'itlove2'},
  // {id: 3, name: 'itlove3'},
])
const obj = reactive({id: 0, name:'请输入名字'})

function action() {
  let maxID = list.length > 0 ? Math.max(...list.map(v=>v.id)) +1 : 1
  list.push({id:maxID, name: obj.name})
}
</script>

<template>
  <div class="comm">
    <div class="title">05-reactive函数</div>
    <FileName fileName="reactive.vue"/>
    <input type="text" v-model="obj.name"/><!--v-model-->
    <button @click="action">输入玩家</button>
<!--    <div class="name"> {{obj.name}}</div>-->

    <div class="name" v-for="v in list" :key="v.id">玩家: {{v.name}}___ID: {{v.id}}</div>
  </div>
</template>



<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.name{
  margin-left: 5px;
  color: #d3d3d3;
}
.comm{
  background: rgba(68, 63, 63, 0.67);
  height: 200px;
  width: 200px;
}
input{
  margin-left: 5px;
  margin-top: 10px;
  float: left;
  width: 55%;
  background-color: #423d3d;
  color: #9b9595;
}
button{
  margin-top: 10px;
  float: left;
  width: 35%;
}
</style>