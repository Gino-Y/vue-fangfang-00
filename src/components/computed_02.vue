<script setup>
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'

const count = ref(0)
const numbers = reactive({
  a:0,
  b:0
})

const total = computed(()=>{
  return  count.value + numbers.a + numbers.b
})

function increment(){
  count.value += 1;
}
function increase(num){
  numbers[num] += 1;
}
</script>

<template>
 <div class="comm">
   <div class="title">07-computed计算属性</div>
   <file-name fileName="computed_02.vue"/>
   <button @click="increment">{{count}}</button>
   <button @click="increase('a')">{{numbers.a}}</button>
   <button @click="increase('b')">{{numbers.b}}</button>
   <button style="background-color: black;color: white" >{{total}}</button>

 </div>
</template>

<style scoped>

.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 0.67);
  width: 200px;
  height: 260px;
}
button{
  margin-top: 10px;
  width: 25%;
  height: 20%;
  font-size: 30px;
}
</style>