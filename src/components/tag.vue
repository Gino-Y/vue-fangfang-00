<script setup>
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'
const tagData = reactive([
  {name:'生活',id:1,flag:false},
  {name:'游戏',id:2,flag:false},
  {name:'娱乐',id:3,flag:false},
  {name:'知识',id:4,flag:false},
  {name:'影视',id:5,flag:false},
  {name:'音乐',id:6,flag:false},
  {name:'动画',id:7,flag:false},
  {name:'时尚',id:8,flag:false},
  {name:'美食',id:9,flag:false},
  {name:'汽车',id:10,flag:false},
  {name:'运动',id:11,flag:false},
  {name:'科技',id:12,flag:false},
  {name:'动物圈',id:13,flag:false},
  {name:'舞蹈',id:14,flag:false},
  {name:'国创',id:15,flag:false},
  {name:'鬼畜',id:16,flag:false},
  {name:'纪录片',id:17,flag:false},
  {name:'番剧',id:18,flag:false},
  {name:'电视剧',id:19,flag:false},
  {name:'电影',id:20,flag:false}
]);
const myTag = ref([]); //我的标签
let status = ref('hide'); //删除图标的显示与隐藏 hide-隐藏  show-显示

function addTag(v){
  //判断最大数据 10
  if(myTag.value.length>=10){
    alert('最多只能添加10个标签');
    return;
  };
  v.flag = true; //选中的状态
  //id去重
  //
  // for(var i=0;i<myTag.value.length;i++){
  //   if(v.id==myTag.value[i].id) return
  // };
  let filter = myTag.value.filter(item=>v.id==item.id);
  if(filter.length>0) return;
  myTag.value = [...myTag.value,v];
};
//标签删除
function delTag(v,i){
  myTag.value.splice(i,1);
  tagData.forEach(item=>{
    if(item.id==v.id){
      item.flag = false;
    }
  })

}
//计算所剩标签数
const tagNum = computed(()=>10 - myTag.value.length);
</script>

<template>
  <div class="comm">
    <div class="title">08-标签多项选择框</div>
    <file-name style="width: 400px" fileName="tag.vue"/>

    <div class="panel panel-default">

      <!--标题-->
      <div class="panel-heading">
        <h3 class="panel-title"> 推荐标签({{tagData.length}})</h3>
      </div>
      <!--内容-->
      <div class="panel-body panel-height">
          <li :class="v.flag ?'selected':''" v-for="v in tagData" :key="v.id" @click="addTag(v)">
            {{v.name}}
          </li>
      </div>

    </div>
    <div class="panel panel-default">

      <div class="panel-heading">
        <h3 class="panel-title">我的标签({{myTag.length}}) / 还可以选择{{tagNum}}个标签</h3>
      </div>

      <!--内容-->
      <div class="panel-body panel-height panel-right" style="height: 65px">
          <li  v-for="(v,i) in myTag" :key="v.id" @mouseover="status=i" @mouseout="status='hide'">{{v.name}}
            <span class="del" @click="delTag(v,i)" v-show="status==i"> × </span>
          </li>
      </div>

    </div>

  </div>
</template>

<style scoped>
.qwe{
  width: 10px;
  height: 10px;
  background-color: red;
}
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
.panel {
  margin-bottom: 5px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  padding: 5px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  color: inherit;
//font-weight: 500;
  height: 14px;
}
.panel-height {
  //height: 83px;
  overflow-y: scroll;
}
.panel-height li {
  cursor:default;
  background: #f9f9f9;
  display: inline-block;
  border: 1px solid #d6e9c6;
  margin: 2px;
  padding: 2px 5px;
  position:relative;
}
.panel-height li:hover {
  border: 1px solid #ff709e;
}
.panel-height li span.del{
  position:absolute;
  color:black;
  right:3px;
  top:-3px;
}
.panel-height li span.del:hover{
  color:#ff709e;
}
.panel-height li.selected ,.panel-right li{
  color: #ff709e;
  background: #fff;
  border: 1px solid #ff709e;
  border-radius: 10px;
}
.panel-default .panel-title span {
  float: right;
}
</style>