# 工作日历（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-shop-calendar '右键新窗口浏览')


## 预览
	clone项目后npm run preview即可


## 安装
	npm i vue-shop-calendar-plus


## 使用
	import vueShopCalendarPlus from "vue-shop-calendar-plus";
	import "vue-shop-calendar-plus/index.css";
	
	app.use(vueShopCalendarPlus);


## 0. 可改动样式变量
* `--top-active-color`：#db3218;-->顶部按钮触摸颜色

* `--border-color`：#ebeef5;-->表格边框颜色

* `--border-color-s`：transparent;-->表格边框颜色--简易模式

* `--out-width`：90%;-->组件宽度

* `--out-width-s`：100%;-->组件宽度--简易模式

* `--item-height`：85px;-->表格项高度

* `--item-height-s`：22px;-->表格项高度--简易模式

* `--item-active-bg-color`：#d7e8f8;-->表格项触摸颜色

* `--item-active-bg-color-s`：#0068FF;-->表格项触摸颜色--简易模式

* `--today-color`：#b31552;-->今天圈的颜色

* `--rest-clor`：#f39f03;-->本月周末字体颜色

* `--rest-dis-clor`：#fed891;-->非本月周末字体颜色

* `--dis-color`：#c0c4cc;-->非本月非周末字体颜色

* `--diy-work-color`：#f30a0a;-->自定义加班日颜色

* `--diy-rest-color`：#26c629;-->自定义节假日颜色

* `--holiday-color`：#b513e7;-->本月内置节假日颜色

* `--holiday-dis-color`：#b613e74e;-->非本月内置节假日颜色


## 1. 参数
* `v-model`：绑定当前时间-->String;非必传;默认*''*

* `prevMonthIcon`：关闭图标-->Object;非必传;默认*{icon:'<'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `nextMonthIcon`：关闭图标-->Object;非必传;默认*{icon:'>'}>*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `control`：受控模式-->Boolean;非必传;默认*false*

* `simple`：简易模式-->Boolean;非必传;默认*false*

* `i18n`：开启国际化-->Boolean;非必传;默认*false*

* `firstDay`：周首日，校验变量只能是1-7-->Number;非必传;默认*1*

* `props`：特殊日期键值配置-->Object;非必传;默认*{}*
>
	// 配置项说明
	workDayKey:'' // 工作日键值，空值时当普通数组处理
	restDayKey:'' // 节假日键值，空值时当普通数组处理
	diyDayDayKey:'day' // 自定义节日日期键值
	diyDayDesKey:'des' // 自定义节日描述键值
>

* `hidSolar`：隐藏农历（简易模式不显示）-->Boolean;非必传;默认*false*

* `workDay`：法定加班日（简易模式不显示）-->Array;非必传;默认*[]*
>
	日期的值格式只能为YYYY-MM-DD
>

* `restDay`：法定休息日（简易模式不显示）-->Array;非必传;默认*[]*
>
	日期的值格式只能为YYYY-MM-DD
>

* `diyDay`：自定义节日（简易模式不显示）-->Array;非必传;默认*[]*
>
	日期的值格式只能为YYYY-MM-DD
>

* `@change`：当选中日期改变时触发（受控模式不触发）-->第一个参数返回选中日期的详情，第二个参数返回月组数据的开始和结束时间


## 2. 插槽
* `dateCell`：替换默认展示的自定义节日列表
>
	date:返回当前节点的日期详情
	data:返回当前节点的一些判断（当天/选中/周末/在本月）
>


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | [**拖拽卡片布局组件**](https://github.com/QuietHear/vue-drag-component-plus '右键新窗口浏览') | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | ***工作日历*** | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**uEditor**](https://github.com/QuietHear/vue-ueditor-block-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')