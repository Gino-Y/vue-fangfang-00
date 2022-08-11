<script setup>
import {ref} from 'vue'
import FileName from './elements/fileName.vue'

const arr = ref([])

function add() {
  arr.value.push({title:'标题', id:arr.value.length+1})
  console.log(arr.value)
}

</script>

<template>
  <div class="comm">
    <div class="title">04-setup语法糖</div>
    <file-name fileName="demo1.vue"/>

    <button @click="add">添加标签</button>

    <div class="label" v-for="(v, i) in arr" :key="v.id">{{v.title}}{{i+1}}</div>
  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
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
button{
  display:flex;
  margin:auto;
  width: 100px;
  height: 50px;
  text-align: center;
  font-size: 20px;
}
.comm{
  background: rgba(44, 40, 40, 0.67);
  width: 200px;
  height: 260px;
}
</style>