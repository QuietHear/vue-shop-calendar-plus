import { ref as $, computed as Z, watch as q, openBlock as v, createElementBlock as g, createElementVNode as m, createTextVNode as A, toDisplayString as p, unref as r, createCommentVNode as I, Fragment as z, renderList as L, normalizeClass as B, renderSlot as J } from "vue";
const _ = [
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
], Q = [
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
], X = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], b0 = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], E = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], e0 = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], f0 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], c0 = ["初", "十", "廿", "卅"], a0 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], K = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], O = {
  "1.1": "春节",
  "1.15": "元宵节",
  "5.5": "端午节",
  "7.7": "七夕节",
  "8.15": "中秋节",
  "9.9": "重阳节",
  "12.30": "除夕"
}, U = {
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
    t += _[b - 1900] & a ? 1 : 0;
  return t + G(b);
}, G = (b) => P(b) ? _[b - 1900] & 65536 ? 30 : 29 : 0, P = (b) => _[b - 1900] & 15, d0 = (b, t) => t > 12 || t < 1 ? -1 : _[b - 1900] & 65536 >> t ? 30 : 29, C = (b) => X[b % 10] + b0[b % 12], j = (b, t) => {
  if (b < 1900 || b > 2100 || t < 1 || t > 24)
    return -1;
  const a = Q[b - 1900], f = [
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
}, l0 = (b) => e0[(b - 4) % 12], s0 = (b) => {
  const t = parseInt(b / 1e3), a = parseInt(b % 1e3 / 100), f = parseInt(b % 100 / 10), o = b % 10;
  return K[t] + K[a] + K[f] + K[o] + "年";
}, W = (b) => b > 12 || b < 1 ? -1 : a0[b - 1] + "月", H = (b) => {
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
  let o = 1900, x = 0;
  b = f.getFullYear(), t = f.getMonth() + 1, a = f.getDate();
  let l = (Date.UTC(f.getFullYear(), f.getMonth(), f.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  for (; o < 2101 && l > 0; o++)
    x = t0(o), l -= x;
  l < 0 && (l += x, o--);
  let h = P(o), D = !1, n = 1;
  for (; n < 13 && l > 0; n++)
    h > 0 && n == h + 1 && D == !1 ? (--n, D = !0, x = G(o)) : x = d0(o, n), D == !0 && n == h + 1 && (D = !1), l -= x;
  l == 0 && h > 0 && n == h + 1 && (D ? D = !1 : (D = !0, --n)), l < 0 && (l += x, --n);
  const i = l + 1;
  let Y = t - 1, N = j(b, 3), F = C(b - 4), T = new Date(b, 1, N).getTime();
  new Date(b, Y, a).getTime() < T && (F = C(b - 5));
  const V = j(b, t * 2 - 1), d = j(b, t * 2);
  let c = C((b - 1900) * 12 + t + 11);
  a >= V && (c = C((b - 1900) * 12 + t + 12));
  let e = !1, u = "";
  V == a && (e = !0, u = E[t * 2 - 2]), d == a && (e = !0, u = E[t * 2 - 1]);
  const s = Date.UTC(b, Y, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, k = C(s + a - 1);
  let w = !1;
  return (U[t + "." + a] || O[n + "." + i]) && (w = !0), {
    animal: l0(o),
    cnYear: s0(o),
    cnMonth: (D && h === n ? "闰" : "") + W(n),
    cnDay: H(i),
    gzYear: F + "年",
    gzMonth: c + "月",
    gzDay: k + "日",
    isLeap: D,
    isTerm: e,
    isHoliday: w,
    outStr: w ? U[t + "." + a] || O[n + "." + i] : e ? u : H(i) === "初一" ? (D && h === n ? "闰" : "") + W(n) : H(i)
  };
};
const x0 = { class: "vue-shop-calendar-plus" }, r0 = { class: "calendar-top" }, o0 = { class: "middle-msg" }, u0 = { class: "calendar-center" }, i0 = { class: "calendar-bottom" }, D0 = ["onClick"], y0 = { class: "item-tit" }, v0 = {
  key: 1,
  class: "work-txt"
}, g0 = {
  key: 2,
  class: "rest-txt"
}, h0 = { class: "item-div-content" }, m0 = {
  __name: "index",
  props: {
    // 绑定当前时间
    modelValue: {
      type: String,
      default: ""
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
    let o = $([]), x = $([]), l = $({
      year: "",
      month: "",
      valFullTime: ""
    });
    const h = $(42), D = (d) => d % 4 === 0 ? d % 100 === 0 ? d % 400 === 0 : !0 : !1, n = (d, c) => {
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
          return D(d) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
      }
    }, i = (d) => {
      const c = new Date(d);
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
      const d = a.i18n ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["一", "二", "三", "四", "五", "六", "日"];
      let c = a.firstDay - 1;
      for (let e = 0; e < 7; e++, c++)
        c > 6 && (c = 0), o.value.push(d[c]);
    }, N = (d, c) => {
      x.value = [];
      for (let y = 0; y < n(d, c); y++) {
        let M = i(`${d}-${c}-${y + 1}`);
        M.inMonth = !0, x.value.push(M);
      }
      let e = d, u = c - 1, s = x.value[0].weekDay - a.firstDay;
      u === 0 && (e = d - 1, u = 12), s < 0 && (s += 7);
      for (let y = 0; y < s; y++) {
        let M = i(
          `${e}-${u}-${n(e, u) - y}`
        );
        x.value.unshift(M);
      }
      let k = d, w = c + 1, R = h.value - x.value.length;
      w === 13 && (k = d + 1, w = 1);
      for (let y = 0; y < R; y++) {
        let M = i(`${k}-${w}-${y + 1}`);
        x.value.push(M);
      }
    }, F = (d) => {
      (l.value.year !== d.year || l.value.month !== d.month) && N(d.year, d.month), l.value = { ...d }, t("change", d, {
        startTime: x.value[0].valFullTime,
        endTime: x.value[h.value - 1].valFullTime
      });
    }, T = async (d, c) => {
      let e = null;
      if (c === 1)
        e = { ...d };
      else {
        let u = l.value.year, s = l.value.month;
        s += d, s > 12 ? (s = 1, u += 1) : s < 1 && (s = 12, u -= 1), e = { ...i(`${u}-${s}-1`) };
      }
      await t("update:modelValue", e.valFullTime), a.modelValue || F(e);
    }, S = $(i((/* @__PURE__ */ new Date()).toLocaleDateString())), V = Z(() => `${l.value.year}${a.i18n ? "-" : "年"}${l.value.month > 9 ? "" : "0"}${l.value.month}${a.i18n ? "" : "月"}`);
    return q(
      () => a.modelValue,
      () => {
        F(i(a.modelValue));
      }
    ), Y(), a.modelValue ? F(i(a.modelValue)) : T(i((/* @__PURE__ */ new Date()).toLocaleDateString()), 1), (d, c) => (v(), g("div", x0, [
      m("div", r0, [
        m("div", {
          class: "left-btn",
          onClick: c[0] || (c[0] = (e) => T(-1, 2))
        }, "<"),
        m("div", o0, [
          A(p(r(V)) + " ", 1),
          r(l).fullTime !== r(S).fullTime ? (v(), g("div", {
            key: 0,
            class: "other-msg",
            onClick: c[1] || (c[1] = (e) => T(r(S), 1))
          }, " 今 ")) : I("", !0)
        ]),
        m("div", {
          class: "right-btn",
          onClick: c[2] || (c[2] = (e) => T(1, 2))
        }, ">")
      ]),
      m("div", u0, [
        (v(!0), g(z, null, L(r(o), (e, u) => (v(), g("div", {
          class: "item",
          key: u
        }, p(e), 1))), 128))
      ]),
      m("div", i0, [
        (v(!0), g(z, null, L(r(x), (e, u) => (v(), g("div", {
          class: B([
            "item",
            e.day < 9 ? "samll-num" : "",
            e.valFullTime === r(S).valFullTime ? "is-today" : "",
            e.valFullTime === r(l).valFullTime ? "select" : "",
            e.weekDay === 6 || e.weekDay === 0 ? "rest" : "",
            e.inMonth ? "" : "not-in-month"
          ]),
          key: u,
          onClick: (s) => e.valFullTime === r(l).valFullTime ? null : T(e, 1)
        }, [
          m("div", y0, [
            A(p(e.day) + " ", 1),
            b.hidSolar ? I("", !0) : (v(), g("div", {
              key: 0,
              class: B(["solar-day", e.solarData.isHoliday ? "else" : ""])
            }, p(e.solarData.outStr), 3)),
            (r(f).workDayKey ? b.workDay.findIndex((s) => s[r(f).workDayKey] === e.valFullTime) !== -1 : b.workDay.indexOf(e.valFullTime) !== -1) ? (v(), g("div", v0, p(b.i18n ? "work" : "班"), 1)) : I("", !0),
            (r(f).restDayKey ? b.restDay.findIndex((s) => s[r(f).restDayKey] === e.valFullTime) !== -1 : b.restDay.indexOf(e.valFullTime) !== -1) ? (v(), g("div", g0, p(b.i18n ? "rest" : "休"), 1)) : I("", !0)
          ]),
          m("div", h0, [
            J(d.$slots, "dateCell", {
              date: e,
              data: {
                isToday: e.valFullTime === r(S).valFullTime,
                isSelected: e.valFullTime === r(l).valFullTime,
                isRest: e.weekDay === 6 || e.weekDay === 0,
                isInMonth: e.inMonth
              }
            }, () => [
              (v(!0), g(z, null, L(b.diyDay.filter((s) => s[r(f).diyDayDayKey] === e.valFullTime), (s, k) => (v(), g("div", { key: k }, p(k + 1) + ". " + p(s[r(f).diyDayDesKey]), 1))), 128))
            ])
          ])
        ], 10, D0))), 128))
      ])
    ]));
  }
}, p0 = [m0], T0 = {
  install(b) {
    p0.forEach((t) => {
      b.component("vueShopCalendarPlus", t);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(T0);
export {
  T0 as default
};
