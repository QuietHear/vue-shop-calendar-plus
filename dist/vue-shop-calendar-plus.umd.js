(function(e,k){typeof exports=="object"&&typeof module<"u"?module.exports=k(require("vue")):typeof define=="function"&&define.amd?define(["vue"],k):(e=typeof globalThis<"u"?globalThis:e||self,e.vueShopCalendarPlus=k(e.Vue))})(this,function(e){"use strict";const k="",B={class:"vue-shop-calendar-plus"},E={class:"calendar-top"},N={class:"middle-msg"},S={class:"calendar-center"},M={class:"calendar-bottom"},v=["onClick"],x={class:"item-tit"},K={key:0,class:"work-txt"},_={key:1,class:"rest-txt"},C={class:"item-div-content"},b=[{__name:"index",props:{modelValue:{type:String,default:""},i18n:{type:Boolean,default:!1},firstDay:{type:Number,default:1},props:{type:Object,default:()=>({})},workDay:{type:Array,default:()=>[]},restDay:{type:Array,default:()=>[]},diyDay:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(c,{emit:p}){const o=c,u=e.ref({workDayKey:o.props.workDayKey||"",restDayKey:o.props.restDayKey||"",diyDayDayKey:o.props.diyDayDayKey||"day",diyDayDesKey:o.props.diyDayDesKey||"des"});let F=e.ref([]),d=e.ref([]),r=e.ref({year:"",month:"",valFullTime:""});const $=e.ref(42),L=a=>a%4===0?a%100===0?a%400===0:!0:!1,V=(a,l)=>{switch(l){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 2:return L(a)?29:28;case 4:case 6:case 9:case 11:return 30}},y=a=>{const l=new Date(a);return{year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate(),weekDay:l.getDay(),fullTime:`${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()}`,valFullTime:`${l.getFullYear()}-${l.getMonth()+1>9?l.getMonth()+1:"0"+(l.getMonth()+1)}-${l.getDate()>9?l.getDate():"0"+l.getDate()}`,inMonth:!1}},Y=()=>{const a=o.i18n?["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]:["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"];let l=o.firstDay-1;for(let t=0;t<7;t++,l++)l>6&&(l=0),F.value.push(a[l])},j=(a,l)=>{d.value=[];for(let i=0;i<V(a,l);i++){let m=y(`${a}-${l}-${i+1}`);m.inMonth=!0,d.value.push(m)}let t=a,s=l-1,n=d.value[0].weekDay-o.firstDay;s===0&&(t=a-1,s=12),n<0&&(n+=7);for(let i=0;i<n;i++){let m=y(`${t}-${s}-${V(t,s)-i}`);d.value.unshift(m)}let D=a,T=l+1,A=$.value-d.value.length;T===13&&(D=a+1,T=1);for(let i=0;i<A;i++){let m=y(`${D}-${T}-${i+1}`);d.value.push(m)}},g=a=>{(r.value.year!==a.year||r.value.month!==a.month)&&j(a.year,a.month),r.value={...a},p("change",a,{startTime:d.value[0].valFullTime,endTime:d.value[$.value-1].valFullTime})},f=async(a,l)=>{let t=null;if(l===1)t={...a};else{let s=r.value.year,n=r.value.month;n+=a,n>12?(n=1,s+=1):n<1&&(n=12,s-=1),t={...y(`${s}-${n}-1`)}}await p("update:modelValue",t.valFullTime),o.modelValue||g(t)},h=e.ref(y(new Date().toLocaleDateString())),O=e.computed(()=>`${r.value.year}${o.i18n?"-":"\u5E74"}${r.value.month>9?"":"0"}${r.value.month}${o.i18n?"":"\u6708"}`);return e.watch(()=>o.modelValue,()=>{g(y(o.modelValue))}),Y(),o.modelValue?g(y(o.modelValue)):f(y(new Date().toLocaleDateString()),1),(a,l)=>(e.openBlock(),e.createElementBlock("div",B,[e.createElementVNode("div",E,[e.createElementVNode("div",{class:"left-btn",onClick:l[0]||(l[0]=t=>f(-1,2))},"<"),e.createElementVNode("div",N,[e.createTextVNode(e.toDisplayString(e.unref(O))+" ",1),e.unref(r).fullTime!==h.value.fullTime?(e.openBlock(),e.createElementBlock("div",{key:0,class:"other-msg",onClick:l[1]||(l[1]=t=>f(h.value,1))}," \u4ECA ")):e.createCommentVNode("",!0)]),e.createElementVNode("div",{class:"right-btn",onClick:l[2]||(l[2]=t=>f(1,2))},">")]),e.createElementVNode("div",S,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(F),(t,s)=>(e.openBlock(),e.createElementBlock("div",{class:"item",key:s},e.toDisplayString(t),1))),128))]),e.createElementVNode("div",M,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(t,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["item",t.day<9?"samll-num":"",t.valFullTime===h.value.valFullTime?"is-today":"",t.valFullTime===e.unref(r).valFullTime?"select":"",t.weekDay===6||t.weekDay===0?"rest":"",t.inMonth?"":"not-in-month"]),key:s,onClick:n=>t.valFullTime===e.unref(r).valFullTime?null:f(t,1)},[e.createElementVNode("div",x,[e.createTextVNode(e.toDisplayString(t.day)+" ",1),(u.value.workDayKey?c.workDay.findIndex(n=>n[u.value.workDayKey]===t.valFullTime)!==-1:c.workDay.indexOf(t.valFullTime)!==-1)?(e.openBlock(),e.createElementBlock("div",K,e.toDisplayString(c.i18n?"work":"\u73ED"),1)):e.createCommentVNode("",!0),(u.value.restDayKey?c.restDay.findIndex(n=>n[u.value.restDayKey]===t.valFullTime)!==-1:c.restDay.indexOf(t.valFullTime)!==-1)?(e.openBlock(),e.createElementBlock("div",_,e.toDisplayString(c.i18n?"rest":"\u4F11"),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",C,[e.renderSlot(a.$slots,"dateCell",{date:t,data:{isToday:t.valFullTime===h.value.valFullTime,isSelected:t.valFullTime===e.unref(r).valFullTime,isRest:t.weekDay===6||t.weekDay===0,isInMonth:t.inMonth}},()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.diyDay.filter(n=>n[u.value.diyDayDayKey]===t.valFullTime),(n,D)=>(e.openBlock(),e.createElementBlock("div",{key:D},e.toDisplayString(D+1)+". "+e.toDisplayString(n[u.value.diyDayDesKey]),1))),128))])])],10,v))),128))])]))}}],w={install(c){b.forEach(p=>{c.component("vueShopCalendarPlus",p)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(w),w});