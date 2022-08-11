<script setup>
const {a} = defineProps({
  a:{
    type:Number,
    default:()=>0
  }
})

</script>
<template >
  <div class="num">{{a}}</div>
</template>


<style scoped>
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 100px;
  background-color: #91b0b9;
}
</style>