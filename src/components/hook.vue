<script setup>
import {NTag, NSpace} from 'naive-ui'
import {ref, reactive, computed, onMounted, watch, onUpdated, onUnmounted} from "vue";
import FileName from './elements/fileName.vue'
let num = ref(1)
let odevity = ref('奇数')
let timer = null

// onMounted(function () {
//
// })
onMounted(()=>{
  timer = play()
})

function play() {
  setInterval(autoPlay, 1000)
}
function autoPlay() {
  num.value += 1
  if(num.value>5){
    num.value = 0
  }
}

// watch(num, (newValue, oldValue)=>{
//   if(newValue % 2 === 0){
//     odevity.value = '偶数'
//   }else {
//     odevity.value = '奇数'
//   }
// })
onUpdated(()=>{
  if(num.value % 2 === 0){
    odevity.value = '偶数'
  }else {
    odevity.value = '奇数'
  }
})

onUnmounted(()=>{
  clearInterval(timer) // 只要有定时器，那么一定要销毁！！！
})
</script>

<template>
  <div class="comm">
    <div class="title">11-生命周期钩子函数</div>
    <file-name fileName="hook.vue"/>

    <div class="num">
      {{num}}
      <n-tag size="small" type="error">
        {{odevity}}
      </n-tag>
    </div>

  </div>
</template>

<style scoped>
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 100px;
  background-color: #91b0b9;
}
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
</style>
