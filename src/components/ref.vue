<script setup>
// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// hljs.registerLanguage('javascript', javascript)

import {NButton, NDrawer, NDrawerContent, NCode} from 'naive-ui'
import { ref } from 'vue'
import FileName from './elements/fileName.vue'

const a = ref(100);

function change() {
  a.value-=1;
}


const active = ref(false);
const placement = ref("right");
const activate = (place) => {
  active.value = true;
  placement.value = place;
};
const code = `
<script setup>
const a = ref(100);

//函数式
function change() {
  a.value-=1;
}
<//script>

<template>
    <div class="num">{{a}}</div>

    <n-button type="primary" @click="a+=1">响应式: +</n-button>
    <n-button type="primary" @click="change()">函数方法: -</n-button>
</template>

`
</script>

<template>
  <div class="comm">
    <div class="title" >01-响应式与函数方法</div>
    <file-name  fileName="ref.vue" @click="activate('bottom')"/>

    <div class="num">{{a}}</div>

    <n-button type="primary" @click="a+=1">响应式: +</n-button>
    <n-button type="primary" @click="change()">函数方法: -</n-button>



    <n-drawer v-model:show="active" :default-height="800" :placement="placement">
      <n-drawer-content title="ref.vue">

          <div style="overflow: auto">
            <n-code :code="code" language="javascript" show-line-numbers word-wrap/>
          </div>

      </n-drawer-content>
    </n-drawer>

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
  border-radius: 20px;
}
/*
button{
  float: left;
  width: 100px;
  height: 50px;
}*/
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 100px;
  background-color: #91b0b9;
}
</style>
