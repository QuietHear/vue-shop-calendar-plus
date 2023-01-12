/*
 * @Author: aFei
 * @Date: 2022-11-17 14:27:47
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-01-12 16:54:19
*/
import vueShopCalendarPlus from "./index.vue";
const arr = [vueShopCalendarPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component('vueShopCalendarPlus', item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;