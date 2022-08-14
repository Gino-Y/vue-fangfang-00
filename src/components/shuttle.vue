<script setup>
import { NTransfer } from 'naive-ui'
import { ref } from "vue";
import FileName from './elements/fileName.vue'

function createOptions() {
  return Array.from({ length: 100 }).map((v, i) => ({
    label: "Option " + i,
    value: i,
    // disabled: i % 5 === 0
  }));
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i);
}

const options = createOptions()
const value = ref(createValues())

</script>

<template>
  <div class="comm">
    <div class="title">09-穿梭框-全选-模糊匹配</div>
    <file-name style="width: 400px" fileName="shuttle.vue"/>

    <n-transfer
        ref="transfer"
        v-model:value="value"
        virtual-scroll=True
        :options="options"
        filterable=true
    />

  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 0.67);
//background: rgba(68, 63, 63, 1);
  width: 400px;
  height: 260px;
}
</style>


