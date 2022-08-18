<script setup>
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'
import Emits_sub from "./emits_sub.vue";
import {NTag} from 'naive-ui'

let title = ref('查看详情')
let msg = ref('消息')

function myclick(v) { // 接收子的行为 v就是子传过来的数据
  msg.value = v
}
</script>

<template>
  <div class="comm">
    <div class="title">14-使用组件及传参_子->父</div>
    <file-name fileName="emission.vue"/>

    <emits_sub @subClick="myclick"/>
    <n-tag style="height: 100px" size="large">父组件展示的: {{msg}}</n-tag>

  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  //background: rgba(68, 63, 63, 0.67);
  background: rgba(68, 63, 63, 1);
  width: 200px;
  height: 260px;
}
</style>