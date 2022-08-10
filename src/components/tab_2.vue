<script setup>
import { ref } from 'vue'

const num = ref(0)
const items = ref([
  {id:1, title:'新闻', content:'新闻头条消息。'},
  {id:2, title:'热点', content:'热点娱乐资讯。'},
  {id:3, title:'实时', content:'实时头条消息。'},
  {id:4, title:'推荐', content:'推荐热门资讯。'}
])
function action(i) {
  num.value = i
}
</script>

<template>
  <div class="comm">
    <div class="title">04-setup语法糖</div>

    <div class="num">{{num}}</div>

    <div class="btb">
      <button v-for="(v, i) in items" :key="v.id" :class="{active:num===i}" @click="action(i)">{{v.title}}</button>
    </div>

    <div class="tab-con">
      <div v-for="(v, i) in items" :key="v.id" v-show="num===i">{{v.content}}</div>
    </div>

  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}

.comm{
  background: rgb(89, 86, 87);
  height: 200px;
  width: 200px;
}
button{
  float: left;
  height: 50px;
  width: 25%;
}
.btb{
  width: 200px;
  height: 50px;
}
.tab-con{
  color: #b9b4b0;
  text-align:center;
  font-size: 25px;
}
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 100px;
  background-color: #91b0b9;
}
.active{
  background-color: rgba(109, 129, 134, 0.78);
}
</style>
