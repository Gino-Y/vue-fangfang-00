<script setup>
const {fileName} = defineProps({
  fileName:{
    type:String,
    default:()=>'file_name'
  }
})
</script>

<template>
  <div class="box">
    <div class="text">组件名: {{ fileName }}</div>
  </div>
</template>

<style scoped>
.box {
  width: 200px;
  /*height: 10px;*/

  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-end;
}
.text{
  color: rgba(185, 180, 176, 0.5);
  background-color: rgba(185, 52, 52, 0.2);
  text-align: end;
}

</style>