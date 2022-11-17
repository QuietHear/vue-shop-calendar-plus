# 工作日历（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-shop-calendar '浏览')


## 安装
	npm i vue-shop-calendar-plus

## 使用
	import vueShopCalendarPlus from "vue-shop-calendar-plus";
	import "vue-shop-calendar-plus/index.css";
	
	app.use(vueShopCalendarPlus);


## 1. 参数
* `showBtn`：是否显示点击按钮-->Boolean;非必传;默认*true*

* `space`：抠图到图形边沿的距离-->Number;非必传;默认*10*

* `imgList`：资源图片路径集合-->Array;非必传;默认使用组件内置的10张图片
>
	// 例子
	:imgList="[url,url,url...]"
>

* `getFunction`：通过接口获取初始化图片相关信息-->Function;必传
>
	// 例子
    const test = (obj) => {
		// 这个地方的obj是组件内部传入，参数分别代表
		// r:1; eg:圆弧最大半径，无用参数
		// width1:1; eg:假数据，无用参数
		// width2:1; eg:x方向最小值
		// width3:1; eg:x方向最大值
		// width4:1; eg:假数据，无用参数
		// height1:1; eg:y方向最小值
		// height2:1; eg:假数据，无用参数
		// height3:1; eg:假数据，无用参数
		// height4:1; eg:y方向最大值
    	return new Promise((resolve) => {
        	APIUrl(obj).then((res) => {
				// 接口返回的数据中请包含以下信息
				// code:''; eg:是否请求成功，只有为200才算成功
				// data:{  eg:返回的必要值
				//   width:1; eg:抠图x方向最终的值，需要后端或者前端存起来后面做校验，这个地方需进行加密(先平方再减64，等到的结果转换为8进制，然后使用btoa加密)
				//   height:1; eg:假数据，建议使用obj.height2，无用参数
				//   x:1; eg:假数据，建议使用obj.width4，需要与width相同的方法加密，无用参数
				//   y:1; eg:抠图y方向最终的值
				//};
				// msg/message:''; eg:错误提示消息
        		resolve(res);
        	});
    	});
    };
>

* `setFunction`：通过接口提交校验结果-->Function;必传
>
	// 例子
    const test = (obj) => {
		// 这个地方的obj是组件内部传入，参数分别代表
		// x:''; eg:加密后的移动距离，需要解密（btoa先解密，再将4进制转换为10进制，然后加16再开方）
		// time:1; eg:移动花费的时间
    	return new Promise((resolve) => {
        	APIUrl(obj).then((res) => {
				// 接口返回的数据中请包含以下信息
				// code:''; eg:是否请求成功，200为成功，123为拼接错误，其他为服务器错误
				// data:{  eg:返回的必要值
				//   percentage:1; eg:超越人数百分比，可以使用100 - Math.round((obj.time / 5) * 100)计算，允许为负数，负数代表超时，不建议把超时标准弄得太小
				//};
				// msg/message:''; eg:错误提示消息
        		resolve(res);
        	});
    	});
    };
>

* `@change`：验证结果改变时触发返回事件-->第一个参数返回true/false


## 2. 方法
* `initPop`：手动开始触发验证-->建议showBtn为false时使用