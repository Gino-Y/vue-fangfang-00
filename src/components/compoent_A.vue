<script setup>
import {NStatistic, NSpace, NNumberAnimation, NButton, NTag } from 'naive-ui'
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'
const numberAnimationInstRef = ref(null);
function handleClick() {
  numberAnimationInstRef.value?.play();
}

</script>

<template>
  <div style="width: 200px; height:170px; background-color: white">

    <n-statistic label="你一共处理了" tabular-nums>
      <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
      <template #suffix>
        条群消息
      </template>
    </n-statistic>
    <n-space vertical>
      花时间、花精力、花心思，愿你每一份努力都不负所望
      <n-button @click="handleClick">
        播放
      </n-button>
    </n-space>

  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.com{
  /*background: rgba(68, 63, 63, 0.67);*/
  /*background: rgba(68, 63, 63, 1);*/
  width: 200px;
  /*height: 100px;*/
}
</style>