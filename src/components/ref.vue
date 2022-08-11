<script setup>
import { ref } from 'vue'
import FileName from './elements/fileName.vue'

const a = ref(100);

function change() {
  a.value-=1;
}
</script>

<template>
  <div class="comm">
    <div class="title">01-响应式与函数方法</div>
    <file-name fileName="ref.vue"/>

    <div class="num">{{a}}</div>

    <button @click="a+=1">响应式: +</button>
    <button @click="change()">函数方法: -</button>

<!--    <text>-->
<!--      import { ref } from 'vue'-->

<!--      const a = ref(100);-->

<!--      function change() {-->
<!--      a.value-=1;-->
<!--      }-->
<!--    </text>-->
  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(58, 53, 53, 0.67);
  width: 200px;
  height: 260px;
}
button{
  /*float: left;*/
  width: 100px;
  height: 50px;
}
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 100px;
  background-color: #91b0b9;
}
</style>
