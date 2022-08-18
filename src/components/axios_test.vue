<script setup>
import {NScrollbar, NEllipsis, NSpace, NButton, NGrid, NGridItem, NLayout, NCard} from 'naive-ui'
import { NDrawer, NDrawerContent, NCode} from 'naive-ui'
import {ref, reactive, computed, onMounted} from "vue";
import FileName from './elements/fileName.vue'
import Commodity from './elements/commodity.vue'
import {getData} from '../api'

const lists = ref([]); //列表数据

onMounted(async()=>{
  let res = await getData();
  let {data} = res.data;
  lists.value = data; //数据存到上面的列表数据中
})

const active = ref(false);
const placement = ref("right");
const activate = (place) => {
  active.value = true;
  placement.value = place;
};
const code = `
<script setup>
import {ref, reactive, computed, onMounted} from "vue";
import Commodity from './elements/commodity.vue'
import {getList} from '../api'

const lists = ref([]); //列表数据

onMounted(async()=>{
  let res = await getData();
  let {data} = res.data;
  lists.value = data;  //数据存到上面的列表数据中
})

<//script>


<template>
      <n-layout  content-style="padding: 8px;" style="background-color: transparent">
          <n-scrollbar style="max-height: 205px;" >
            <n-grid :x-gap="12" :y-gap="8" :cols="3">

              <n-grid-item v-for="v in lists" :key="v.product_id">
                <commodity
                    :src="v.product_img_url"
                    :title="v.product_name"
                    :price=v.product_uprice
                />
              </n-grid-item>

            </n-grid>

          </n-scrollbar>
      </n-layout>
</template>
//------------------------------import Commodity from './elements/commodity.vue'
// 这个是组件
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
<//script>

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
//-------------------------------import {getData} from '../api'----------------
// 这是接口
// 具体的请求和返回内容
import axios from '../utils/request'

export function getData(){
    return axios({
        method:'get',
        url:'home/page/1/10',
    })
}
//-------------------------------import axios from '../utils/request'----------------
// 这是请求通道
// 设置服务器IP和端口
// 向服务器发送和接收请求的通道
import axios from 'axios'
const service = axios.create({
    baseURL:"http://139.196.42.209:3012/", //基本路径
    //timeout:1000
});
//请求拦截器
service.interceptors.request.use(config=>config);

//响应拦截器
service.interceptors.response.use(res=>{
    return res
},err=>{
    return Promise.reject(err)
})

export default service;

`

</script>

<template>
  <div class="comm">
    <div class="title" >16-数据前后端交互</div>
    <file-name fileName="axios_test.vue" style="width: 400px;" @click="activate('bottom')"/>

      <n-layout  content-style="padding: 8px;" style="background-color: transparent">
          <n-scrollbar style="max-height: 205px;" >
            <n-grid :x-gap="12" :y-gap="8" :cols="3">

              <n-grid-item v-for="v in lists" :key="v.product_id">
                <commodity
                    :src="v.product_img_url"
                    :title="v.product_name"
                    :price=v.product_uprice
                />
              </n-grid-item>

            </n-grid>

          </n-scrollbar>
      </n-layout>

    <n-drawer v-model:show="active" :default-height="800" :placement="placement">
      <n-drawer-content title="axios_test.vue" closable>

        <div style="overflow: auto">
          <n-code :code="code" />
        </div>

      </n-drawer-content>
    </n-drawer>

  </div>
</template>

<style scoped>
img{
  width: 100%;
}
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  /*background: rgba(68, 63, 63, 0.67);*/
  background: rgba(68, 63, 63, 1);
  width: 400px;
  height: 260px;
}
</style>