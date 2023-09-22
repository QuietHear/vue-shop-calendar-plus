/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-22 10:04:43
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <el-button @click="control = !control">切换受控</el-button>
      <el-button @click="hidSolar = !hidSolar">切换农历</el-button>
      <el-button @click="i18n = !i18n">切换语言</el-button>
      <vue-shop-calendar-plus v-model="val" :workDay="[{ day: '2023-07-29' }]" :restDay="['2023-07-25']" :diyDay="[
        { day: '2023-07-23', des: '111' },
        { day: '2023-07-23', des: '222' },
        { day: '2023-07-23', des: '333' },
        { day: '2023-07-24', des: '444' },
      ]" :props="{ workDayKey: 'day' }" :hidSolar="hidSolar" :control="control" :i18n="i18n" :firstDay="7" />
      <div style="width: 260px;">
        <vue-shop-calendar-plus v-model="val" :workDay="[{ day: '2023-07-29' }]" :restDay="['2023-07-25']" :diyDay="[
          { day: '2023-07-23', des: '111' },
          { day: '2023-07-23', des: '222' },
          { day: '2023-07-23', des: '333' },
          { day: '2023-07-24', des: '444' },
        ]" :props="{ workDayKey: 'day' }" :hidSolar="hidSolar" :control="control" :i18n="i18n" :firstDay="7" simple />
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueShopCalendarPlus from "~/lib/index.vue";
const val = ref("2023-7-28");
const control = ref(false);
const hidSolar = ref(false);
const i18n = ref(false);
</script>