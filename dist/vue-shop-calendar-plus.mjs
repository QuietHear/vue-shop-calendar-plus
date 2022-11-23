import { ref as k, computed as E, watch as W, openBlock as y, createElementBlock as v, createElementVNode as f, createTextVNode as N, toDisplayString as h, createCommentVNode as M, Fragment as S, renderList as V, normalizeClass as $, renderSlot as I } from "vue";
const P = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [t, _] of i)
    r[t] = _;
  return r;
}, z = {
  name: "vueShopCalendarPlus",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    i18n: {
      type: Boolean,
      default: !1
    },
    firstDay: {
      type: Number,
      default: 1
    },
    props: {
      type: Object,
      default: () => ({})
    },
    workDay: {
      type: Array,
      default: () => []
    },
    restDay: {
      type: Array,
      default: () => []
    },
    diyDay: {
      type: Array,
      default: () => []
    }
  },
  setup(n, { attrs: i, slots: r, emit: t, expose: _ }) {
    const K = k({
      workDayKey: n.props.workDayKey || "",
      restDayKey: n.props.restDayKey || "",
      diyDayDayKey: n.props.diyDayDayKey || "day",
      diyDayDesKey: n.props.diyDayDesKey || "des"
    });
    let e = k([]), s = k([]), o = k({
      year: "",
      month: "",
      valFullTime: ""
    });
    const T = k(42), Y = (a) => a % 4 === 0 ? a % 100 === 0 ? a % 400 === 0 : !0 : !1, x = (a, l) => {
      switch (l) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31;
        case 2:
          return Y(a) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
      }
    }, m = (a) => {
      const l = new Date(a);
      return {
        year: l.getFullYear(),
        month: l.getMonth() + 1,
        day: l.getDate(),
        weekDay: l.getDay(),
        fullTime: `${l.getFullYear()}-${l.getMonth() + 1}-${l.getDate()}`,
        valFullTime: `${l.getFullYear()}-${l.getMonth() + 1 > 9 ? l.getMonth() + 1 : "0" + (l.getMonth() + 1)}-${l.getDate() > 9 ? l.getDate() : "0" + l.getDate()}`,
        inMonth: !1
      };
    }, L = () => {
      const a = n.i18n ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"];
      let l = n.firstDay - 1;
      for (let d = 0; d < 7; d++, l++)
        l > 6 && (l = 0), e.value.push(a[l]);
    }, O = (a, l) => {
      s.value = [];
      for (let c = 0; c < x(a, l); c++) {
        let g = m(`${a}-${l}-${c + 1}`);
        g.inMonth = !0, s.value.push(g);
      }
      let d = a, D = l - 1, u = s.value[0].weekDay - n.firstDay;
      D === 0 && (d = a - 1, D = 12), u < 0 && (u += 7);
      for (let c = 0; c < u; c++) {
        let g = m(
          `${d}-${D}-${x(d, D) - c}`
        );
        s.value.unshift(g);
      }
      let C = a, F = l + 1, B = T.value - s.value.length;
      F === 13 && (C = a + 1, F = 1);
      for (let c = 0; c < B; c++) {
        let g = m(`${C}-${F}-${c + 1}`);
        s.value.push(g);
      }
    }, w = (a) => {
      (o.value.year !== a.year || o.value.month !== a.month) && O(a.year, a.month), o.value = { ...a }, t("change", a, {
        startTime: s.value[0].valFullTime,
        endTime: s.value[T.value - 1].valFullTime
      });
    }, b = async (a, l) => {
      let d = null;
      if (l === 1)
        d = { ...a };
      else {
        let D = o.value.year, u = o.value.month;
        u += a, u > 12 ? (u = 1, D += 1) : u < 1 && (u = 12, D -= 1), d = { ...m(`${D}-${u}-1`) };
      }
      await t("update:modelValue", d.valFullTime), n.modelValue || w(d);
    }, j = k(m(new Date().toLocaleDateString())), A = E(() => `${o.value.year}${n.i18n ? "-" : "\u5E74"}${o.value.month > 9 ? "" : "0"}${o.value.month}${n.i18n ? "" : "\u6708"}`);
    return W(
      () => n.modelValue,
      () => {
        w(m(n.modelValue));
      }
    ), L(), n.modelValue ? w(m(n.modelValue)) : b(m(new Date().toLocaleDateString()), 1), {
      nameSet: K,
      weekList: e,
      monthData: s,
      selectDay: o,
      changeTime: b,
      today: j,
      topMiddle: A
    };
  }
}, R = { class: "vue-shop-calendar-plus" }, q = { class: "calendar-top" }, G = { class: "middle-msg" }, H = { class: "calendar-center" }, J = { class: "calendar-bottom" }, Q = ["onClick"], U = { class: "item-tit" }, X = {
  key: 0,
  class: "work-txt"
}, Z = {
  key: 1,
  class: "rest-txt"
}, p = { class: "item-div-content" };
function ee(n, i, r, t, _, K) {
  return y(), v("div", R, [
    f("div", q, [
      f("div", {
        class: "left-btn",
        onClick: i[0] || (i[0] = (e) => t.changeTime(-1, 2))
      }, "<"),
      f("div", G, [
        N(h(t.topMiddle) + " ", 1),
        t.selectDay.fullTime !== t.today.fullTime ? (y(), v("div", {
          key: 0,
          class: "other-msg",
          onClick: i[1] || (i[1] = (e) => t.changeTime(t.today, 1))
        }, " \u4ECA ")) : M("", !0)
      ]),
      f("div", {
        class: "right-btn",
        onClick: i[2] || (i[2] = (e) => t.changeTime(1, 2))
      }, ">")
    ]),
    f("div", H, [
      (y(!0), v(S, null, V(t.weekList, (e, s) => (y(), v("div", {
        class: "item",
        key: s
      }, h(e), 1))), 128))
    ]),
    f("div", J, [
      (y(!0), v(S, null, V(t.monthData, (e, s) => (y(), v("div", {
        class: $([
          "item",
          e.day < 9 ? "samll-num" : "",
          e.valFullTime === t.today.valFullTime ? "is-today" : "",
          e.valFullTime === t.selectDay.valFullTime ? "select" : "",
          e.weekDay === 6 || e.weekDay === 0 ? "rest" : "",
          e.inMonth ? "" : "not-in-month"
        ]),
        key: s,
        onClick: (o) => e.valFullTime === t.selectDay.valFullTime ? null : t.changeTime(e, 1)
      }, [
        f("div", U, [
          N(h(e.day) + " ", 1),
          (t.nameSet.workDayKey ? r.workDay.findIndex((o) => o[t.nameSet.workDayKey] === e.valFullTime) !== -1 : r.workDay.indexOf(e.valFullTime) !== -1) ? (y(), v("div", X, h(r.i18n ? "work" : "\u73ED"), 1)) : M("", !0),
          (t.nameSet.restDayKey ? r.restDay.findIndex((o) => o[t.nameSet.restDayKey] === e.valFullTime) !== -1 : r.restDay.indexOf(e.valFullTime) !== -1) ? (y(), v("div", Z, h(r.i18n ? "rest" : "\u4F11"), 1)) : M("", !0)
        ]),
        f("div", p, [
          I(n.$slots, "dateCell", {
            date: e,
            data: {
              isToday: e.valFullTime === t.today.valFullTime,
              isSelected: e.valFullTime === t.selectDay.valFullTime,
              isRest: e.weekDay === 6 || e.weekDay === 0,
              isInMonth: e.inMonth
            }
          }, () => [
            (y(!0), v(S, null, V(r.diyDay.filter((o) => o[t.nameSet.diyDayDayKey] === e.valFullTime), (o, T) => (y(), v("div", { key: T }, h(T + 1) + ". " + h(o[t.nameSet.diyDayDesKey]), 1))), 128))
          ])
        ])
      ], 10, Q))), 128))
    ])
  ]);
}
const le = /* @__PURE__ */ P(z, [["render", ee]]), te = [le], ae = {
  install(n) {
    te.forEach((i) => {
      n.component(i.name, i);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ae);
export {
  ae as default
};
