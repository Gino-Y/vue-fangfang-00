<script setup>
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'

</script>

<template>
  <div class="comm">
    <div class="title">00-init</div>
    <file-name fileName="init.vue"/>

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