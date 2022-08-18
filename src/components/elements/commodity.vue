<script setup>
import {NScrollbar, NEllipsis} from 'naive-ui'
const {src, name, price} = defineProps({
  src:{
    type:String,
    default:()=>["/src/assets/img/12.jpg"]
  },
  title:{
    type:String,
    default:()=>'名称'
  },
  price:{
    type:Number,
    default:()=>200
  },
})
</script>

<template>

    <div class="plan" >
        <img :src="src"/>
      <div>
        <n-ellipsis style="max-width: 70%; margin-left: 20px; font-size: small">
          {{title}}
        </n-ellipsis>
        <div style="margin-left: 50%">
          <i>￥</i>
          <b>{{price}}</b>
        </div>
      </div>
    </div>
</template>

<style scoped>
.plan{
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
}
img{
  width: 100%;
}
</style>