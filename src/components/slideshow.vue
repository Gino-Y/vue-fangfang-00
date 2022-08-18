<script setup>
import {NCarousel} from 'naive-ui'
import {ref, reactive, computed} from "vue";
import FileName from './elements/fileName.vue'

</script>

<template>
  <div class="comm" >
    <div class="title">12-轮播图</div>
    <file-name style="width: 400px" fileName="slideshow.vue"/>

      <n-carousel autoplay interval="1500">
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
         alt="">
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
         alt="">
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </n-carousel>

  </div>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  //background: rgba(68, 63, 63, 0.67);
  background: rgba(68, 63, 63, 1);
  width: 400px;
  height: 215px;
}
</style>