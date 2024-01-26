/*
 * @Author: aFei
 * @Date: 2022-11-17 14:27:47
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-01-26 16:26:14
*/
<template>
  <div :class="['vue-shop-calendar-plus', simple ? 'is-simple' : '', control ? 'is-control' : '']">
    <!-- 顶部操作区域 -->
    <div class="calendar-top" v-if="!control">
      <!-- 上月 -->
      <div class="left-btn" @click="changeTime(-1, 2)">
        <Icon :iconObj="prevMonthIcon" v-if="prevMonthIcon && (prevMonthIcon.icon || prevMonthIcon.type)" />
      </div>
      <!-- 当前展示月 -->
      <div class="middle-msg">
        {{ topMiddle }}
        <div class="other-msg" v-if="!simple && selectDay.fullTime !== today.fullTime" @click="changeTime(today, 1)">
          今
        </div>
      </div>
      <!-- 下月 -->
      <div class="right-btn" @click="changeTime(1, 2)">
        <Icon :iconObj="nextMonthIcon" v-if="nextMonthIcon && (nextMonthIcon.icon || nextMonthIcon.type)" />
      </div>
    </div>
    <!-- 日历头部星期 -->
    <div class="calendar-center">
      <div class="item" v-for="(item, index) in weekList" :key="index">
        {{ item }}
      </div>
    </div>
    <!-- 日历底部日子 -->
    <div class="calendar-bottom">
      <div :class="[
        'item',
        item.day < 9 ? 'samll-num' : '',
        item.valFullTime === today.valFullTime ? 'is-today' : '',
        item.valFullTime === selectDay.valFullTime ? 'select' : '',
        item.weekDay === 6 || item.weekDay === 0 ? 'rest' : '',
        item.inMonth ? '' : 'not-in-month',
      ]" v-for="(item, index) in monthData" :key="index" @click="
  control || item.valFullTime === selectDay.valFullTime
    ? null
    : changeTime(item, 1)
  ">
        <div class="item-tit">
          {{ simple && !control && item.valFullTime === today.valFullTime ? '今' : item.day }}
          <div :class="['solar-day', item.solarData.isHoliday ? 'else' : '']" v-if="!simple && !hidSolar">
            {{ item.solarData.outStr }}
          </div>
          <!-- 加班日标记 -->
          <div class="work-txt"
            v-if="!simple && (nameSet.workDayKey ? workDay.findIndex(one => one[nameSet.workDayKey] === item.valFullTime) !== -1 : workDay.indexOf(item.valFullTime) !== -1)">
            {{ i18n ? "work" : "班" }}
          </div>
          <!-- 休息日标记 -->
          <div class="rest-txt"
            v-if="!simple && (nameSet.restDayKey ? restDay.findIndex(one => one[nameSet.restDayKey] === item.valFullTime) !== -1 : restDay.indexOf(item.valFullTime) !== -1)">
            {{ i18n ? "rest" : "休" }}
          </div>
        </div>
        <div class="item-div-content" v-if="!simple">
          <slot name="dateCell" :date="item" :data="{
            isToday: item.valFullTime === today.valFullTime,
            isSelected: item.valFullTime === selectDay.valFullTime,
            isRest: item.weekDay === 6 || item.weekDay === 0,
            isInMonth: item.inMonth,
          }">
            <!-- 自定义节日 -->
            <div v-for="(one, oneIndex) in diyDay.filter((it) => {
              return it[nameSet.diyDayDayKey] === item.valFullTime;
            })" :key="oneIndex">
              {{ oneIndex + 1 }}. {{ one[nameSet.diyDayDesKey] }}
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from "./components/icon.vue";
import solarExchange from "./js/solarExchange";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  // 绑定当前时间
  modelValue: {
    type: String,
    default: "",
  },
  // 上一月图标
  prevMonthIcon: {
    type: Object,
    default: () => {
      return {
        icon: "<"
      };
    },
  },
  // 下一月图标
  nextMonthIcon: {
    type: Object,
    default: () => {
      return {
        icon: ">"
      };
    },
  },
  // 受控模式
  control: {
    type: Boolean,
    default: false,
  },
  // 简易模式
  simple: {
    type: Boolean,
    default: false,
  },
  // 开启国际化
  i18n: {
    type: Boolean,
    default: false,
  },
  // 周首日，1-7
  firstDay: {
    type: Number,
    default: 1,
  },
  // 特殊日期键值配置
  props: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 隐藏农历
  hidSolar: {
    type: Boolean,
    default: false,
  },
  // 法定加班日
  workDay: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 法定休息日
  restDay: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 自定义节日
  diyDay: {
    type: Array,
    default: () => {
      return [];
    },
  }
});
// 字段唯一值
const nameSet = ref({
  workDayKey: props.props.workDayKey || "",
  restDayKey: props.props.restDayKey || "",
  diyDayDayKey: props.props.diyDayDayKey || "day",
  diyDayDesKey: props.props.diyDayDesKey || "des",
});
// 周头排序
let weekList = ref([]);
// 当前月数据
let monthData = ref([]);
// 当前选中时间
let selectDay = ref({
  year: "",
  month: "",
  valFullTime: "",
});
// 面板数据量，6*7
const maxNum = ref(42);
// 判断是否为闰年
const checkLeapYear = (year) => {
  return year % 4 === 0
    ? year % 100 === 0
      ? year % 400 === 0
        ? true
        : false
      : true
    : false;
};
// 检测某年某月总天数
const checkDays = (year, month) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return checkLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
};
// 格式化某一天的时间格式
const dealOneDay = (time) => {
  const lin = new Date(time);
  return {
    year: lin.getFullYear(),
    month: lin.getMonth() + 1,
    day: lin.getDate(),
    weekDay: lin.getDay(),
    fullTime: `${lin.getFullYear()}-${lin.getMonth() + 1}-${lin.getDate()}`,
    valFullTime: `${lin.getFullYear()}-${lin.getMonth() + 1 > 9
      ? lin.getMonth() + 1
      : "0" + (lin.getMonth() + 1)
      }-${lin.getDate() > 9 ? lin.getDate() : "0" + lin.getDate()}`,
    inMonth: false,
    solarData: solarExchange(lin.getFullYear(), lin.getMonth() + 1, lin.getDate())
  };
};
// 获取周头排序
const getWeek = () => {
  weekList.value = [];
  // 标准时间
  const standWeek = props.i18n
    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    : ["一", "二", "三", "四", "五", "六", "日"];
  // 起始下标
  let index = props.firstDay - 1;
  for (let i = 0; i < 7; i++, index++) {
    if (index > 6) {
      index = 0;
    }
    weekList.value.push(standWeek[index]);
  }
};
// 获取月完整数据
const getMonthData = (year, month) => {
  monthData.value = [];
  // 添加当前月数据
  for (let i = 0; i < checkDays(year, month); i++) {
    let obj = dealOneDay(`${year}-${month}-${i + 1}`);
    obj.inMonth = true;
    monthData.value.push(obj);
  }
  // 添加补位上月数据
  let beforeYear = year;
  let beforeMonth = month - 1;
  let beforeNum = monthData.value[0].weekDay - props.firstDay;
  if (beforeMonth === 0) {
    beforeYear = year - 1;
    beforeMonth = 12;
  }
  if (beforeNum < 0) {
    beforeNum += 7;
  }
  for (let i = 0; i < beforeNum; i++) {
    let obj = dealOneDay(
      `${beforeYear}-${beforeMonth}-${checkDays(beforeYear, beforeMonth) - i
      }`
    );
    monthData.value.unshift(obj);
  }
  // 添加补位下月数据
  let afterYear = year;
  let afterMonth = month + 1;
  let afterNum = maxNum.value - monthData.value.length;
  if (afterMonth === 13) {
    afterYear = year + 1;
    afterMonth = 1;
  }
  for (let i = 0; i < afterNum; i++) {
    let obj = dealOneDay(`${afterYear}-${afterMonth}-${i + 1}`);
    monthData.value.push(obj);
  }
  console.log(monthData.value, 'monthData.value');
};
// 校验当前要改变的时间
const checkTime = (time) => {
  console.log(time, "checkTime");
  // 检测是否需要更新当前月数据
  if (
    selectDay.value.year !== time.year ||
    selectDay.value.month !== time.month
  ) {
    getMonthData(time.year, time.month);
  }
  selectDay.value = { ...time };
  emit("change", time, {
    startTime: monthData.value[0].valFullTime,
    endTime: monthData.value[maxNum.value - 1].valFullTime,
  });
};
// 组件内触发时间改变
const changeTime = async (time, type) => {
  let lin = null;
  // 点击到具体某天
  if (type === 1) {
    lin = { ...time };
  }
  // 点击头部上\下个月
  else {
    let linYear = selectDay.value.year;
    let linMonth = selectDay.value.month;
    linMonth += time;
    if (linMonth > 12) {
      linMonth = 1;
      linYear += 1;
    } else if (linMonth < 1) {
      linMonth = 12;
      linYear -= 1;
    }
    lin = { ...dealOneDay(`${linYear}-${linMonth}-1`) };
  }
  await emit("update:modelValue", lin.valFullTime);
  console.log(props.modelValue, "props.modelValue");
  // 没有绑定v-model时手动触发时间校验
  if (!props.modelValue) {
    console.log("手动触发校验");
    checkTime(lin);
  }
};
// 今天
const today = ref(dealOneDay(new Date().toLocaleDateString()));
// 顶部标题
const topMiddle = computed(() => {
  return `${selectDay.value.year}${props.i18n ? "-" : "年"}${selectDay.value.month > 9 ? "" : "0"
    }${selectDay.value.month}${props.i18n ? "" : "月"}`;
});
watch(
  () => props.modelValue,
  () => {
    console.log("绑定值改变");
    checkTime(dealOneDay(props.modelValue));
  }
);
watch(
  () => props.i18n,
  () => {
    getWeek();
  }
);
getWeek();
if (!props.modelValue) {
  console.log("需要初始化");
  changeTime(dealOneDay(new Date().toLocaleDateString()), 1);
} else {
  console.log("不需要初始化");
  checkTime(dealOneDay(props.modelValue));
}
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>