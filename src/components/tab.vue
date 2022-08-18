<script setup>
import {NButton, NDrawer, NDrawerContent, NCode} from 'naive-ui'
import { ref } from 'vue'
import FileName from './elements/fileName.vue'

const num = ref(1)

const active = ref(false);
const placement = ref("right");
const activate = (place) => {
  active.value = true;
  placement.value = place;
};
const code = `
<script setup>

const num = ref(1)

<//script>


<template>
    <div class="num">{{num}}</div>

    <div>
      <button :class="{active:num===1}" @click="num = 1">新闻</button>
      <button :class="{active:num===2}" @click="num = 2">热点</button>
    </div>

    <div class="tab-con">
      <div v-show="num===1">新闻内容</div>
      <div v-show="num===2">热点资讯</div>
    </div>
</template>

`

</script>

<template>
  <div class="comm">
    <div class="title">04-setup语法糖</div>
    <FileName fileName="tab.vue" @click="activate('bottom')"/>


    <div class="num">{{num}}</div>

    <div>
      <button :class="{active:num===1}" @click="num = 1">新闻</button>
      <button :class="{active:num===2}" @click="num = 2">热点</button>
    </div>

    <div class="tab-con">
      <div v-show="num===1">新闻内容</div>
      <div v-show="num===2">热点资讯</div>
    </div>

    <n-drawer v-model:show="active" :default-height="800" :placement="placement">
      <n-drawer-content title="tab.vue">

        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers word-wrap/>
        </div>

      </n-drawer-content>
    </n-drawer>

  </div>
</template>

<style scoped>
.title{
  color: #bdb57e;
  background-color: #394042;
}

.comm{
  background: rgb(68, 65, 66);
  width: 200px;
  height: 260px;
}
button{
  float: left;
  width: 100px;
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
  background-color: rgb(109, 129, 134);
}
</style>
