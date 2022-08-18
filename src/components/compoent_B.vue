<script setup>
import {NStatistic, NSpace, NNumberAnimation, NButton, NCountdown, NSwitch, NTag } from 'naive-ui'
import {ref, reactive, computed} from "vue";
const activeRef = ref(true);
const countdownRef = ref();
function handleReset() {
  countdownRef.value?.reset();
}
let active= activeRef
let countdown= countdownRef
</script>

<template>
  <n-tag>

    <n-space>
    <span style="font-variant-numeric: tabular-nums">
      <n-countdown ref="countdown" :duration="86400000" :active="active" />
    </span>
      <n-button size="tiny" @click="handleReset">
        重置
      </n-button>
      <n-switch v-model:value="active" />
    </n-space>

  </n-tag>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.com{
  background: #ffffff;
  /*background: rgba(68, 63, 63, 1);*/
  width: 200px;
  height: 100px;
}
</style>