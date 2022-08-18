<script setup>
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'
import CompoentA from "./compoent_A.vue";
import CompoentB from "./compoent_B.vue";
import {NButton, NSpace} from "naive-ui";

const flag = ref(CompoentA)
</script>

<template>
  <div class="comm">
    <div class="title">15-动态组件</div>
    <file-name fileName="compoentTest.vue"/>

    <n-space>
      <n-button @click="flag=CompoentA" type="info" size="large">组件A</n-button>
      <n-button @click="flag=CompoentB" type="error" size="large">组件B</n-button>
    </n-space>

    <component :is="flag"></component>

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
</style>