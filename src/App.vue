<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Ref from './components/ref.vue'
import Tab from './components/tab.vue'
import Tab_2 from './components/tab_2.vue'
import Demo1 from './components/demo1.vue'
import Reactive from './components/reactive.vue'
import Ref_demo from './components/ref_demo.vue'
import Ref_demo_reactive from "./components/ref_reactive.vue";
import Ref_demo_dom from "./components/ref_dom.vue";
import Computed from "./components/computed.vue";
import Computed_02 from "./components/computed_02.vue";
import Init from "./components/init.vue";
import Tag from "./components/tag.vue";
import Shuttle from './components/shuttle.vue'

</script>

<template>
  <div class="bg">
    <ref class="float"/>
    <Tab class="float"/>
    <Tab_2 class="float"/>
    <Demo1 class="float"/>
    <Reactive class="float"/>
    <Ref_demo_dom class="float"/>
    <Ref_demo class="float"/>
    <Ref_demo_reactive class="float"/>
    <computed_02 class="float"/>
    <computed class="float"/>
    <tag class="float"/>
    <Shuttle class="float"/>
    <init class="float"/>
  </div>
</template>

<style>
.bg {
  margin:0 auto;
  background-color: #7a7a7a;
  width: 600px;
  height: 2000px;
}
.float {
  float: left;
}
</style>
