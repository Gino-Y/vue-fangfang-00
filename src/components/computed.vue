<script setup>
import {reactive, computed} from "vue";
import FileName from './elements/fileName.vue'

const items = reactive([
  {title: '指压', check: false, price:298},
  {title: '中式', check: false, price:498},
  {title: '泰式', check: false, price:698},
  {title: '柔式', check: false, price:898},
  {title: '水疗', check: false, price:998},
])

const cate = reactive([
  {title: '生蚝', check: false, price:200},
  {title: '鱼翅', check: false, price:100},
  {title: '海参', check: false, price:300},
  {title: '鲍鱼', check: false, price:400},
  {title: '龙虾', check: false, price:500},
])

// const slectednum = computed(()=>items.filter(v=>v.check).length)

// const slectednum = computed(()=>{
//   return function (arr) {
//     return arr.filter(v=>v.check).length
//   }
// })

const slectednum = computed(()=>arr=>{
    return arr.filter(v=>v.check).length
})

</script>

<template>
  <div class="comm">
    <div class="title">07-computed计算属性</div>
    <file-name fileName="computed.vue"/>

    <div class="text">按了{{slectednum(items)}}/{{items.length}}个项目</div>
    <div class="text">吃了{{slectednum(cate)}}/{{cate.length}}种美食</div>
    <div class="text">本会所共消费_元</div>

    <div class="items">
      <div class="items" v-for="(v, i) in items" key="i">
        <input type="checkbox" v-model="v.check">{{v.title}}
      </div>
    </div>

    <div class="items">
      <div class="items" v-for="(v, i) in cate" key="i">
        <input type="checkbox" v-model="v.check">{{v.title}}
      </div>
    </div>


  </div>
</template>

<style scoped>
.text{
  /*color: #ffffff;*/
  background-color: #90afb9;
}
.items{
  /*background-color: red;*/
  color: #bebebe;
  width: 100px;
  float: left;
}
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 0.67);
  width: 200px;
  height: 260px;
}
</style>