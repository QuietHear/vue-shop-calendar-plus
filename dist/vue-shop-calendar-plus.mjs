import { resolveComponent as e0, openBlock as s, createBlock as C, resolveDynamicComponent as P, normalizeProps as U, mergeProps as V, withCtx as c0, createElementBlock as y, toDisplayString as g, ref as S, computed as f0, watch as W, normalizeClass as L, createElementVNode as I, createCommentVNode as k, createTextVNode as q, unref as x, Fragment as B, renderList as H, renderSlot as a0 } from "vue";
const G = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(b) {
    return (t, a) => {
      const c = e0("el-icon");
      return b.iconObj.type === "custom" ? (s(), C(P(b.iconObj.icon), U(V({ key: 0 }, b.iconObj.attrs)), null, 16)) : b.iconObj.type === "el" ? (s(), C(c, U(V({ key: 1 }, b.iconObj.attrs)), {
        default: c0(() => [
          (s(), C(P(b.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : b.iconObj.type === "iconfont" ? (s(), y("i", V({
        key: 2,
        class: ["icon iconfont", "icon-" + b.iconObj.icon]
      }, b.iconObj.attrs), null, 16)) : (s(), y("i", V({
        key: 3,
        class: b.iconObj.type
      }, b.iconObj.attrs), g(b.iconObj.icon), 17));
    };
  }
}, N = [
  19416,
  19168,
  42352,
  21717,
  53856,
  55632,
  91476,
  22176,
  39632,
  21970,
  //1900-1909
  19168,
  42422,
  42192,
  53840,
  119381,
  46400,
  54944,
  44450,
  38320,
  84343,
  //1910-1919
  18800,
  42160,
  46261,
  27216,
  27968,
  109396,
  11104,
  38256,
  21234,
  18800,
  //1920-1929
  25958,
  54432,
  59984,
  28309,
  23248,
  11104,
  100067,
  37600,
  116951,
  51536,
  //1930-1939
  54432,
  120998,
  46416,
  22176,
  107956,
  9680,
  37584,
  53938,
  43344,
  46423,
  //1940-1949
  27808,
  46416,
  86869,
  19872,
  42416,
  83315,
  21168,
  43432,
  59728,
  27296,
  //1950-1959
  44710,
  43856,
  19296,
  43748,
  42352,
  21088,
  62051,
  55632,
  23383,
  22176,
  //1960-1969
  38608,
  19925,
  19152,
  42192,
  54484,
  53840,
  54616,
  46400,
  46752,
  103846,
  //1970-1979
  38320,
  18864,
  43380,
  42160,
  45690,
  27216,
  27968,
  44870,
  43872,
  38256,
  //1980-1989
  19189,
  18800,
  25776,
  29859,
  59984,
  27480,
  23232,
  43872,
  38613,
  37600,
  //1990-1999
  51552,
  55636,
  54432,
  55888,
  30034,
  22176,
  43959,
  9680,
  37584,
  51893,
  //2000-2009
  43344,
  46240,
  47780,
  44368,
  21977,
  19360,
  42416,
  86390,
  21168,
  43312,
  //2010-2019
  31060,
  27296,
  44368,
  23378,
  19296,
  42726,
  42208,
  53856,
  60005,
  54576,
  //2020-2029
  23200,
  30371,
  38608,
  19195,
  19152,
  42192,
  118966,
  53840,
  54560,
  56645,
  //2030-2039
  46496,
  22224,
  21938,
  18864,
  42359,
  42160,
  43600,
  111189,
  27936,
  44448,
  //2040-2049
  84835,
  37744,
  18936,
  18800,
  25776,
  92326,
  59984,
  27424,
  108228,
  43744,
  //2050-2059
  37600,
  53987,
  51552,
  54615,
  54432,
  55888,
  23893,
  22176,
  42704,
  21972,
  //2060-2069
  21200,
  43448,
  43344,
  46240,
  46758,
  44368,
  21920,
  43940,
  42416,
  21168,
  //2070-2079
  45683,
  26928,
  29495,
  27296,
  44368,
  84821,
  19296,
  42352,
  21732,
  53600,
  //2080-2089
  59752,
  54560,
  55968,
  92838,
  22224,
  19168,
  43476,
  42192,
  53584,
  62034,
  //2090-2099
  54560
  //2100
], t0 = [
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "9778397bd19801ec9210c965cc920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd197c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bcf97c3598082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd19801ec9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bd07f1487f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b97bd197c36c9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b70c9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "977837f0e37f149b0723b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0723b06bd",
  "7f07e7f0e37f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e37f14998083b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14898082b0723b02d5",
  "7f07e7f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66aa89801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e26665b66a449801e9808297c35",
  "665f67f0e37f1489801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722"
], l0 = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], n0 = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], R = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], d0 = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], s0 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], o0 = ["初", "十", "廿", "卅"], x0 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], K = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], Z = {
  "1.1": "春节",
  "1.15": "元宵节",
  "5.5": "端午节",
  "7.7": "七夕节",
  "8.15": "中秋节",
  "9.9": "重阳节",
  "12.30": "除夕"
}, J = {
  "1.1": "元旦",
  "2.14": "情人节",
  "3.8": "妇女节",
  "5.1": "劳动节",
  "5.4": "青年节",
  "10.1": "国庆节",
  "12.25": "圣诞节"
}, r0 = (b) => {
  let t = 348;
  for (let a = 32768; a > 8; a >>= 1)
    t += N[b - 1900] & a ? 1 : 0;
  return t + X(b);
}, X = (b) => _(b) ? N[b - 1900] & 65536 ? 30 : 29 : 0, _ = (b) => N[b - 1900] & 15, i0 = (b, t) => t > 12 || t < 1 ? -1 : N[b - 1900] & 65536 >> t ? 30 : 29, p = (b) => l0[b % 10] + n0[b % 12], A = (b, t) => {
  if (b < 1900 || b > 2100 || t < 1 || t > 24)
    return -1;
  const a = t0[b - 1900], c = [
    parseInt("0x" + a.substr(0, 5)).toString(),
    parseInt("0x" + a.substr(5, 5)).toString(),
    parseInt("0x" + a.substr(10, 5)).toString(),
    parseInt("0x" + a.substr(15, 5)).toString(),
    parseInt("0x" + a.substr(20, 5)).toString(),
    parseInt("0x" + a.substr(25, 5)).toString()
  ], r = [
    c[0].substr(0, 1),
    c[0].substr(1, 2),
    c[0].substr(3, 1),
    c[0].substr(4, 2),
    c[1].substr(0, 1),
    c[1].substr(1, 2),
    c[1].substr(3, 1),
    c[1].substr(4, 2),
    c[2].substr(0, 1),
    c[2].substr(1, 2),
    c[2].substr(3, 1),
    c[2].substr(4, 2),
    c[3].substr(0, 1),
    c[3].substr(1, 2),
    c[3].substr(3, 1),
    c[3].substr(4, 2),
    c[4].substr(0, 1),
    c[4].substr(1, 2),
    c[4].substr(3, 1),
    c[4].substr(4, 2),
    c[5].substr(0, 1),
    c[5].substr(1, 2),
    c[5].substr(3, 1),
    c[5].substr(4, 2)
  ];
  return parseInt(r[t - 1]);
}, u0 = (b) => d0[(b - 4) % 12], y0 = (b) => {
  const t = parseInt(b / 1e3), a = parseInt(b % 1e3 / 100), c = parseInt(b % 100 / 10), r = b % 10;
  return K[t] + K[a] + K[c] + K[r] + "年";
}, Q = (b) => b > 12 || b < 1 ? -1 : x0[b - 1] + "月", E = (b) => {
  let t;
  switch (b) {
    case 10:
      t = "初十";
      break;
    case 20:
      t = "二十";
      break;
    case 30:
      t = "三十";
      break;
    default:
      t = o0[Math.floor(b / 10)], t += s0[b % 10];
  }
  return t;
}, D0 = (b, t, a) => {
  if (b < 1900 || b > 2100 || b == 1900 && t == 1 && a < 31)
    return -1;
  let c = /* @__PURE__ */ new Date();
  b && (c = new Date(b, t - 1, a));
  let r = 1900, i = 0;
  b = c.getFullYear(), t = c.getMonth() + 1, a = c.getDate();
  let n = (Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  for (; r < 2101 && n > 0; r++)
    i = r0(r), n -= i;
  n < 0 && (n += i, r--);
  let h = _(r), m = !1, o = 1;
  for (; o < 13 && n > 0; o++)
    h > 0 && o == h + 1 && m == !1 ? (--o, m = !0, i = X(r)) : i = i0(r, o), m == !0 && o == h + 1 && (m = !1), n -= i;
  n == 0 && h > 0 && o == h + 1 && (m ? m = !1 : (m = !0, --o)), n < 0 && (n += i, --o);
  const D = n + 1;
  let O = t - 1, z = A(b, 3), F = p(b - 4), T = new Date(b, 1, z).getTime();
  new Date(b, O, a).getTime() < T && (F = p(b - 5));
  const Y = A(b, t * 2 - 1), l = A(b, t * 2);
  let f = p((b - 1900) * 12 + t + 11);
  a >= Y && (f = p((b - 1900) * 12 + t + 12));
  let e = !1, u = "";
  Y == a && (e = !0, u = R[t * 2 - 2]), l == a && (e = !0, u = R[t * 2 - 1]);
  const d = Date.UTC(b, O, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, M = p(d + a - 1);
  let w = !1;
  return (J[t + "." + a] || Z[o + "." + D]) && (w = !0), {
    animal: u0(r),
    cnYear: y0(r),
    cnMonth: (m && h === o ? "闰" : "") + Q(o),
    cnDay: E(D),
    gzYear: F + "年",
    gzMonth: f + "月",
    gzDay: M + "日",
    isLeap: m,
    isTerm: e,
    isHoliday: w,
    outStr: w ? J[t + "." + a] || Z[o + "." + D] : e ? u : E(D) === "初一" ? (m && h === o ? "闰" : "") + Q(o) : E(D)
  };
};
const m0 = {
  key: 0,
  class: "calendar-top"
}, v0 = { class: "middle-msg" }, h0 = { class: "calendar-center" }, g0 = { class: "calendar-bottom" }, k0 = ["onClick"], T0 = { class: "item-tit" }, M0 = {
  key: 1,
  class: "work-txt"
}, w0 = {
  key: 2,
  class: "rest-txt"
}, F0 = {
  key: 0,
  class: "item-div-content"
}, $0 = {
  __name: "index",
  props: {
    // 绑定当前时间
    modelValue: {
      type: String,
      default: ""
    },
    // 上一月图标
    prevMonthIcon: {
      type: Object,
      default: () => ({
        icon: "<"
      })
    },
    // 下一月图标
    nextMonthIcon: {
      type: Object,
      default: () => ({
        icon: ">"
      })
    },
    // 受控模式
    control: {
      type: Boolean,
      default: !1
    },
    // 简易模式
    simple: {
      type: Boolean,
      default: !1
    },
    // 开启国际化
    i18n: {
      type: Boolean,
      default: !1
    },
    // 周首日，1-7
    firstDay: {
      type: Number,
      default: 1,
      validator(b, t) {
        return b >= 1 && b <= 7;
      }
    },
    // 特殊日期键值配置
    props: {
      type: Object,
      default: () => ({})
    },
    // 隐藏农历
    hidSolar: {
      type: Boolean,
      default: !1
    },
    // 法定加班日
    workDay: {
      type: Array,
      default: () => []
    },
    // 法定休息日
    restDay: {
      type: Array,
      default: () => []
    },
    // 自定义节日
    diyDay: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "change"],
  setup(b, { emit: t }) {
    const a = b, c = S({
      workDayKey: a.props.workDayKey || "",
      restDayKey: a.props.restDayKey || "",
      diyDayDayKey: a.props.diyDayDayKey || "day",
      diyDayDesKey: a.props.diyDayDesKey || "des"
    });
    let r = S([]), i = S([]), n = S({
      year: "",
      month: "",
      valFullTime: ""
    });
    const h = S(42), m = (l) => l % 4 === 0 ? l % 100 === 0 ? l % 400 === 0 : !0 : !1, o = (l, f) => {
      switch (f) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
        case 2:
          return m(l) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
      }
    }, D = (l) => {
      const f = new Date(l);
      return {
        year: f.getFullYear(),
        month: f.getMonth() + 1,
        day: f.getDate(),
        weekDay: f.getDay(),
        fullTime: `${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()}`,
        valFullTime: `${f.getFullYear()}-${f.getMonth() + 1 > 9 ? f.getMonth() + 1 : "0" + (f.getMonth() + 1)}-${f.getDate() > 9 ? f.getDate() : "0" + f.getDate()}`,
        inMonth: !1,
        solarData: D0(f.getFullYear(), f.getMonth() + 1, f.getDate())
      };
    }, O = () => {
      r.value = [];
      const l = a.i18n ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["一", "二", "三", "四", "五", "六", "日"];
      let f = a.firstDay - 1;
      for (let e = 0; e < 7; e++, f++)
        f > 6 && (f = 0), r.value.push(l[f]);
    }, z = (l, f) => {
      i.value = [];
      for (let v = 0; v < o(l, f); v++) {
        let j = D(`${l}-${f}-${v + 1}`);
        j.inMonth = !0, i.value.push(j);
      }
      let e = l, u = f - 1, d = i.value[0].weekDay - a.firstDay;
      u === 0 && (e = l - 1, u = 12), d < 0 && (d += 7);
      for (let v = 0; v < d; v++) {
        let j = D(
          `${e}-${u}-${o(e, u) - v}`
        );
        i.value.unshift(j);
      }
      let M = l, w = f + 1, b0 = h.value - i.value.length;
      w === 13 && (M = l + 1, w = 1);
      for (let v = 0; v < b0; v++) {
        let j = D(`${M}-${w}-${v + 1}`);
        i.value.push(j);
      }
    }, F = (l) => {
      (n.value.year !== l.year || n.value.month !== l.month) && z(l.year, l.month), n.value = { ...l }, t("change", l, {
        startTime: i.value[0].valFullTime,
        endTime: i.value[h.value - 1].valFullTime
      });
    }, T = async (l, f) => {
      let e = null;
      if (f === 1)
        e = { ...l };
      else {
        let u = n.value.year, d = n.value.month;
        d += l, d > 12 ? (d = 1, u += 1) : d < 1 && (d = 12, u -= 1), e = { ...D(`${u}-${d}-1`) };
      }
      await t("update:modelValue", e.valFullTime), a.modelValue || F(e);
    }, $ = S(D((/* @__PURE__ */ new Date()).toLocaleDateString())), Y = f0(() => `${n.value.year}${a.i18n ? "-" : "年"}${n.value.month > 9 ? "" : "0"}${n.value.month}${a.i18n ? "" : "月"}`);
    return W(
      () => a.modelValue,
      () => {
        F(D(a.modelValue));
      }
    ), W(
      () => a.i18n,
      () => {
        O();
      }
    ), O(), a.modelValue ? F(D(a.modelValue)) : T(D((/* @__PURE__ */ new Date()).toLocaleDateString()), 1), (l, f) => (s(), y("div", {
      class: L(["vue-shop-calendar-plus", b.simple ? "is-simple" : "", b.control ? "is-control" : ""])
    }, [
      b.control ? k("", !0) : (s(), y("div", m0, [
        I("div", {
          class: "left-btn",
          onClick: f[0] || (f[0] = (e) => T(-1, 2))
        }, [
          b.prevMonthIcon && (b.prevMonthIcon.icon || b.prevMonthIcon.type) ? (s(), C(G, {
            key: 0,
            iconObj: b.prevMonthIcon
          }, null, 8, ["iconObj"])) : k("", !0)
        ]),
        I("div", v0, [
          q(g(x(Y)) + " ", 1),
          !b.simple && x(n).fullTime !== x($).fullTime ? (s(), y("div", {
            key: 0,
            class: "other-msg",
            onClick: f[1] || (f[1] = (e) => T(x($), 1))
          }, g(b.i18n ? "N" : "今"), 1)) : k("", !0)
        ]),
        I("div", {
          class: "right-btn",
          onClick: f[2] || (f[2] = (e) => T(1, 2))
        }, [
          b.nextMonthIcon && (b.nextMonthIcon.icon || b.nextMonthIcon.type) ? (s(), C(G, {
            key: 0,
            iconObj: b.nextMonthIcon
          }, null, 8, ["iconObj"])) : k("", !0)
        ])
      ])),
      I("div", h0, [
        (s(!0), y(B, null, H(x(r), (e, u) => (s(), y("div", {
          class: "item",
          key: u
        }, g(e), 1))), 128))
      ]),
      I("div", g0, [
        (s(!0), y(B, null, H(x(i), (e, u) => (s(), y("div", {
          class: L([
            "item",
            e.day < 9 ? "samll-num" : "",
            e.valFullTime === x($).valFullTime ? "is-today" : "",
            e.valFullTime === x(n).valFullTime ? "select" : "",
            e.weekDay === 6 || e.weekDay === 0 ? "rest" : "",
            e.inMonth ? "" : "not-in-month"
          ]),
          key: u,
          onClick: (d) => b.control || e.valFullTime === x(n).valFullTime ? null : T(e, 1)
        }, [
          I("div", T0, [
            q(g(b.simple && !b.control && e.valFullTime === x($).valFullTime ? b.i18n ? "N" : "今" : e.day) + " ", 1),
            !b.simple && !b.hidSolar ? (s(), y("div", {
              key: 0,
              class: L(["solar-day", e.solarData.isHoliday ? "else" : ""])
            }, g(e.solarData.outStr), 3)) : k("", !0),
            !b.simple && (x(c).workDayKey ? b.workDay.findIndex((d) => d[x(c).workDayKey] === e.valFullTime) !== -1 : b.workDay.indexOf(e.valFullTime) !== -1) ? (s(), y("div", M0, g(b.i18n ? "work" : "班"), 1)) : k("", !0),
            !b.simple && (x(c).restDayKey ? b.restDay.findIndex((d) => d[x(c).restDayKey] === e.valFullTime) !== -1 : b.restDay.indexOf(e.valFullTime) !== -1) ? (s(), y("div", w0, g(b.i18n ? "rest" : "休"), 1)) : k("", !0)
          ]),
          b.simple ? k("", !0) : (s(), y("div", F0, [
            a0(l.$slots, "dateCell", {
              date: e,
              data: {
                isToday: e.valFullTime === x($).valFullTime,
                isSelected: e.valFullTime === x(n).valFullTime,
                isRest: e.weekDay === 6 || e.weekDay === 0,
                isInMonth: e.inMonth
              }
            }, () => [
              (s(!0), y(B, null, H(b.diyDay.filter((d) => d[x(c).diyDayDayKey] === e.valFullTime), (d, M) => (s(), y("div", { key: M }, g(M + 1) + ". " + g(d[x(c).diyDayDesKey]), 1))), 128))
            ])
          ]))
        ], 10, k0))), 128))
      ])
    ], 2));
  }
}, j0 = [$0], S0 = {
  install(b) {
    j0.forEach((t) => {
      b.component("vueShopCalendarPlus", t);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(S0);
export {
  S0 as default
};
