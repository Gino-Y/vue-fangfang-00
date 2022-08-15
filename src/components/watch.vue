<script setup>
import {ref, reactive, computed, watch} from "vue";
import FileName from './elements/fileName.vue'
import { NButton, NTag, NSpace } from 'naive-ui'

let num = ref(0)
let odevity = ref('偶数')
const stop = watch(num, (newValue, oldValue)=>{
  if(newValue % 2 === 0){
    odevity.value = '偶数'
  }else {
    odevity.value = '奇数'
  }
    })
function change() {
  num.value += 1
  if(num.value >= 8){
    odevity.value='不再监听'
    stop()
  }
}
function zero() {
  num.value = 0
}
</script>

<template>
  <div class="comm">
    <div class="title">10-watch监听和清除监听</div>
    <file-name fileName="watch.vue"/>
    <div class="num">{{num}}
      <n-tag :color="{ color: '#BBB', textColor: '#098af3', borderColor: 'rgba(85,85,85,0.1)' }"> {{odevity}} </n-tag>
    </div>
    <n-space>
      <n-button @click="change" type="info" size="large">
        Add
      </n-button>
      <n-button @click="zero" type="error" size="large">
        Zero
      </n-button>
    </n-space>
  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 0.67);
  /*background: rgba(68, 63, 63, 1);*/
  width: 200px;
  height: 260px;
}
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 150px;
  background-color: #91b0b9;
}

</style>