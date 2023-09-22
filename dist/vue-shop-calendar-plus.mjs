import { ref as $, computed as J, watch as E, openBlock as y, createElementBlock as D, normalizeClass as L, createElementVNode as S, createTextVNode as O, toDisplayString as h, unref as x, createCommentVNode as C, Fragment as B, renderList as j, renderSlot as Q } from "vue";
const N = [
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
], X = [
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
], _ = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], b0 = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], U = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], e0 = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], f0 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], c0 = ["初", "十", "廿", "卅"], a0 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], K = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], W = {
  "1.1": "春节",
  "1.15": "元宵节",
  "5.5": "端午节",
  "7.7": "七夕节",
  "8.15": "中秋节",
  "9.9": "重阳节",
  "12.30": "除夕"
}, G = {
  "1.1": "元旦",
  "2.14": "情人节",
  "3.8": "妇女节",
  "5.1": "劳动节",
  "5.4": "青年节",
  "10.1": "国庆节",
  "12.25": "圣诞节"
}, t0 = (b) => {
  let t = 348;
  for (let a = 32768; a > 8; a >>= 1)
    t += N[b - 1900] & a ? 1 : 0;
  return t + R(b);
}, R = (b) => Z(b) ? N[b - 1900] & 65536 ? 30 : 29 : 0, Z = (b) => N[b - 1900] & 15, l0 = (b, t) => t > 12 || t < 1 ? -1 : N[b - 1900] & 65536 >> t ? 30 : 29, V = (b) => _[b % 10] + b0[b % 12], H = (b, t) => {
  if (b < 1900 || b > 2100 || t < 1 || t > 24)
    return -1;
  const a = X[b - 1900], f = [
    parseInt("0x" + a.substr(0, 5)).toString(),
    parseInt("0x" + a.substr(5, 5)).toString(),
    parseInt("0x" + a.substr(10, 5)).toString(),
    parseInt("0x" + a.substr(15, 5)).toString(),
    parseInt("0x" + a.substr(20, 5)).toString(),
    parseInt("0x" + a.substr(25, 5)).toString()
  ], o = [
    f[0].substr(0, 1),
    f[0].substr(1, 2),
    f[0].substr(3, 1),
    f[0].substr(4, 2),
    f[1].substr(0, 1),
    f[1].substr(1, 2),
    f[1].substr(3, 1),
    f[1].substr(4, 2),
    f[2].substr(0, 1),
    f[2].substr(1, 2),
    f[2].substr(3, 1),
    f[2].substr(4, 2),
    f[3].substr(0, 1),
    f[3].substr(1, 2),
    f[3].substr(3, 1),
    f[3].substr(4, 2),
    f[4].substr(0, 1),
    f[4].substr(1, 2),
    f[4].substr(3, 1),
    f[4].substr(4, 2),
    f[5].substr(0, 1),
    f[5].substr(1, 2),
    f[5].substr(3, 1),
    f[5].substr(4, 2)
  ];
  return parseInt(o[t - 1]);
}, d0 = (b) => e0[(b - 4) % 12], s0 = (b) => {
  const t = parseInt(b / 1e3), a = parseInt(b % 1e3 / 100), f = parseInt(b % 100 / 10), o = b % 10;
  return K[t] + K[a] + K[f] + K[o] + "年";
}, P = (b) => b > 12 || b < 1 ? -1 : a0[b - 1] + "月", A = (b) => {
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
      t = c0[Math.floor(b / 10)], t += f0[b % 10];
  }
  return t;
}, n0 = (b, t, a) => {
  if (b < 1900 || b > 2100 || b == 1900 && t == 1 && a < 31)
    return -1;
  let f = /* @__PURE__ */ new Date();
  b && (f = new Date(b, t - 1, a));
  let o = 1900, r = 0;
  b = f.getFullYear(), t = f.getMonth() + 1, a = f.getDate();
  let d = (Date.UTC(f.getFullYear(), f.getMonth(), f.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  for (; o < 2101 && d > 0; o++)
    r = t0(o), d -= r;
  d < 0 && (d += r, o--);
  let g = Z(o), v = !1, n = 1;
  for (; n < 13 && d > 0; n++)
    g > 0 && n == g + 1 && v == !1 ? (--n, v = !0, r = R(o)) : r = l0(o, n), v == !0 && n == g + 1 && (v = !1), d -= r;
  d == 0 && g > 0 && n == g + 1 && (v ? v = !1 : (v = !0, --n)), d < 0 && (d += r, --n);
  const i = d + 1;
  let Y = t - 1, z = H(b, 3), w = V(b - 4), T = new Date(b, 1, z).getTime();
  new Date(b, Y, a).getTime() < T && (w = V(b - 5));
  const I = H(b, t * 2 - 1), l = H(b, t * 2);
  let c = V((b - 1900) * 12 + t + 11);
  a >= I && (c = V((b - 1900) * 12 + t + 12));
  let e = !1, u = "";
  I == a && (e = !0, u = U[t * 2 - 2]), l == a && (e = !0, u = U[t * 2 - 1]);
  const s = Date.UTC(b, Y, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, k = V(s + a - 1);
  let p = !1;
  return (G[t + "." + a] || W[n + "." + i]) && (p = !0), {
    animal: d0(o),
    cnYear: s0(o),
    cnMonth: (v && g === n ? "闰" : "") + P(n),
    cnDay: A(i),
    gzYear: w + "年",
    gzMonth: c + "月",
    gzDay: k + "日",
    isLeap: v,
    isTerm: e,
    isHoliday: p,
    outStr: p ? G[t + "." + a] || W[n + "." + i] : e ? u : A(i) === "初一" ? (v && g === n ? "闰" : "") + P(n) : A(i)
  };
};
const x0 = {
  key: 0,
  class: "calendar-top"
}, o0 = { class: "middle-msg" }, r0 = { class: "calendar-center" }, u0 = { class: "calendar-bottom" }, i0 = ["onClick"], y0 = { class: "item-tit" }, D0 = {
  key: 1,
  class: "work-txt"
}, v0 = {
  key: 2,
  class: "rest-txt"
}, m0 = {
  key: 0,
  class: "item-div-content"
}, g0 = {
  __name: "index",
  props: {
    // 绑定当前时间
    modelValue: {
      type: String,
      default: ""
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
      default: 1
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
    const a = b, f = $({
      workDayKey: a.props.workDayKey || "",
      restDayKey: a.props.restDayKey || "",
      diyDayDayKey: a.props.diyDayDayKey || "day",
      diyDayDesKey: a.props.diyDayDesKey || "des"
    });
    let o = $([]), r = $([]), d = $({
      year: "",
      month: "",
      valFullTime: ""
    });
    const g = $(42), v = (l) => l % 4 === 0 ? l % 100 === 0 ? l % 400 === 0 : !0 : !1, n = (l, c) => {
      switch (c) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
        case 2:
          return v(l) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
      }
    }, i = (l) => {
      const c = new Date(l);
      return {
        year: c.getFullYear(),
        month: c.getMonth() + 1,
        day: c.getDate(),
        weekDay: c.getDay(),
        fullTime: `${c.getFullYear()}-${c.getMonth() + 1}-${c.getDate()}`,
        valFullTime: `${c.getFullYear()}-${c.getMonth() + 1 > 9 ? c.getMonth() + 1 : "0" + (c.getMonth() + 1)}-${c.getDate() > 9 ? c.getDate() : "0" + c.getDate()}`,
        inMonth: !1,
        solarData: n0(c.getFullYear(), c.getMonth() + 1, c.getDate())
      };
    }, Y = () => {
      o.value = [];
      const l = a.i18n ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["一", "二", "三", "四", "五", "六", "日"];
      let c = a.firstDay - 1;
      for (let e = 0; e < 7; e++, c++)
        c > 6 && (c = 0), o.value.push(l[c]);
    }, z = (l, c) => {
      r.value = [];
      for (let m = 0; m < n(l, c); m++) {
        let M = i(`${l}-${c}-${m + 1}`);
        M.inMonth = !0, r.value.push(M);
      }
      let e = l, u = c - 1, s = r.value[0].weekDay - a.firstDay;
      u === 0 && (e = l - 1, u = 12), s < 0 && (s += 7);
      for (let m = 0; m < s; m++) {
        let M = i(
          `${e}-${u}-${n(e, u) - m}`
        );
        r.value.unshift(M);
      }
      let k = l, p = c + 1, q = g.value - r.value.length;
      p === 13 && (k = l + 1, p = 1);
      for (let m = 0; m < q; m++) {
        let M = i(`${k}-${p}-${m + 1}`);
        r.value.push(M);
      }
    }, w = (l) => {
      (d.value.year !== l.year || d.value.month !== l.month) && z(l.year, l.month), d.value = { ...l }, t("change", l, {
        startTime: r.value[0].valFullTime,
        endTime: r.value[g.value - 1].valFullTime
      });
    }, T = async (l, c) => {
      let e = null;
      if (c === 1)
        e = { ...l };
      else {
        let u = d.value.year, s = d.value.month;
        s += l, s > 12 ? (s = 1, u += 1) : s < 1 && (s = 12, u -= 1), e = { ...i(`${u}-${s}-1`) };
      }
      await t("update:modelValue", e.valFullTime), a.modelValue || w(e);
    }, F = $(i((/* @__PURE__ */ new Date()).toLocaleDateString())), I = J(() => `${d.value.year}${a.i18n ? "-" : "年"}${d.value.month > 9 ? "" : "0"}${d.value.month}${a.i18n ? "" : "月"}`);
    return E(
      () => a.modelValue,
      () => {
        w(i(a.modelValue));
      }
    ), E(
      () => a.i18n,
      () => {
        Y();
      }
    ), Y(), a.modelValue ? w(i(a.modelValue)) : T(i((/* @__PURE__ */ new Date()).toLocaleDateString()), 1), (l, c) => (y(), D("div", {
      class: L(["vue-shop-calendar-plus", b.simple ? "is-simple" : "", b.control ? "is-control" : ""])
    }, [
      b.control ? C("", !0) : (y(), D("div", x0, [
        S("div", {
          class: "left-btn",
          onClick: c[0] || (c[0] = (e) => T(-1, 2))
        }, "<"),
        S("div", o0, [
          O(h(x(I)) + " ", 1),
          !b.simple && x(d).fullTime !== x(F).fullTime ? (y(), D("div", {
            key: 0,
            class: "other-msg",
            onClick: c[1] || (c[1] = (e) => T(x(F), 1))
          }, " 今 ")) : C("", !0)
        ]),
        S("div", {
          class: "right-btn",
          onClick: c[2] || (c[2] = (e) => T(1, 2))
        }, ">")
      ])),
      S("div", r0, [
        (y(!0), D(B, null, j(x(o), (e, u) => (y(), D("div", {
          class: "item",
          key: u
        }, h(e), 1))), 128))
      ]),
      S("div", u0, [
        (y(!0), D(B, null, j(x(r), (e, u) => (y(), D("div", {
          class: L([
            "item",
            e.day < 9 ? "samll-num" : "",
            e.valFullTime === x(F).valFullTime ? "is-today" : "",
            e.valFullTime === x(d).valFullTime ? "select" : "",
            e.weekDay === 6 || e.weekDay === 0 ? "rest" : "",
            e.inMonth ? "" : "not-in-month"
          ]),
          key: u,
          onClick: (s) => b.control || e.valFullTime === x(d).valFullTime ? null : T(e, 1)
        }, [
          S("div", y0, [
            O(h(b.simple && !b.control && e.valFullTime === x(F).valFullTime ? "今" : e.day) + " ", 1),
            !b.simple && !b.hidSolar ? (y(), D("div", {
              key: 0,
              class: L(["solar-day", e.solarData.isHoliday ? "else" : ""])
            }, h(e.solarData.outStr), 3)) : C("", !0),
            !b.simple && (x(f).workDayKey ? b.workDay.findIndex((s) => s[x(f).workDayKey] === e.valFullTime) !== -1 : b.workDay.indexOf(e.valFullTime) !== -1) ? (y(), D("div", D0, h(b.i18n ? "work" : "班"), 1)) : C("", !0),
            !b.simple && (x(f).restDayKey ? b.restDay.findIndex((s) => s[x(f).restDayKey] === e.valFullTime) !== -1 : b.restDay.indexOf(e.valFullTime) !== -1) ? (y(), D("div", v0, h(b.i18n ? "rest" : "休"), 1)) : C("", !0)
          ]),
          b.simple ? C("", !0) : (y(), D("div", m0, [
            Q(l.$slots, "dateCell", {
              date: e,
              data: {
                isToday: e.valFullTime === x(F).valFullTime,
                isSelected: e.valFullTime === x(d).valFullTime,
                isRest: e.weekDay === 6 || e.weekDay === 0,
                isInMonth: e.inMonth
              }
            }, () => [
              (y(!0), D(B, null, j(b.diyDay.filter((s) => s[x(f).diyDayDayKey] === e.valFullTime), (s, k) => (y(), D("div", { key: k }, h(k + 1) + ". " + h(s[x(f).diyDayDesKey]), 1))), 128))
            ])
          ]))
        ], 10, i0))), 128))
      ])
    ], 2));
  }
}, h0 = [g0], T0 = {
  install(b) {
    h0.forEach((t) => {
      b.component("vueShopCalendarPlus", t);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(T0);
export {
  T0 as default
};
