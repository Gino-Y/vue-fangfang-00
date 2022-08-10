<script setup>
  import {reactive} from 'vue'
  const obj1 = reactive({id: 0, name:'请输入名字'})
  const obj2 = reactive([
    // {id: 1, name: 'itlove1'},
    // {id: 2, name: 'itlove2'},
    // {id: 3, name: 'itlove3'},
  ])

  function action() {
    let maxID = obj2.length > 0 ? Math.max(...obj2.map(v=>v.id)) +1 : 1
    obj2.push({id:maxID, name: obj1.name})
  }
</script>

<template>
  <div class="comm">
    <div class="title">05-reactive函数</div>
    <input type="text" v-model="obj1.name"/>
    <button @click="action">输入玩家</button>
<!--    <div class="name"> {{obj1.name}}</div>-->

    <div class="name" v-for="v in obj2" :key="v.id">玩家: {{v.name}}___ID: {{v.id}}</div>

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