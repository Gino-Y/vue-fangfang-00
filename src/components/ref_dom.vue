<script setup>
import {ref, reactive} from 'vue';
import FileName from './elements/fileName.vue'

let domChange = ref()
let text = ref('')
function changeDom() {
  domChange.value.style.color = 'red'
  domChange.value.focus()
}
</script>

<template>
  <div class="comm">
    <div class="title">06-ref函数_DOM引用</div>
    <FileName fileName="ref_dom.vue"/>

    <div>
      <input class="size" type="text" placeholder="请输入信息" ref="domChange" v-model="text">
      <button class="size" @click="changeDom">变红且聚焦</button>
    </div>
    <textarea>{{text}}</textarea>
  </div>
</template>

<style scoped>
textarea{
  margin-top: 10px;
  width: 95%;
  height: 50%;
}
.size{
  margin-top: 20px;
  width: 95px;
  height: 30px;
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
</style>