import { ref as g, computed as O, watch as A, openBlock as d, createElementBlock as c, createElementVNode as D, createTextVNode as S, toDisplayString as f, unref as n, createCommentVNode as M, Fragment as V, renderList as K, normalizeClass as B, renderSlot as E } from "vue";
const W = { class: "vue-shop-calendar-plus" }, I = { class: "calendar-top" }, z = { class: "middle-msg" }, P = { class: "calendar-center" }, R = { class: "calendar-bottom" }, q = ["onClick"], G = { class: "item-tit" }, H = {
  key: 0,
  class: "work-txt"
}, J = {
  key: 1,
  class: "rest-txt"
}, Q = { class: "item-div-content" }, U = {
  __name: "index",
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
  emits: ["update:modelValue", "change"],
  setup(i, { emit: p }) {
    const o = i, m = g({
      workDayKey: o.props.workDayKey || "",
      restDayKey: o.props.restDayKey || "",
      diyDayDayKey: o.props.diyDayDayKey || "day",
      diyDayDesKey: o.props.diyDayDesKey || "des"
    });
    let x = g([]), y = g([]), s = g({
      year: "",
      month: "",
      valFullTime: ""
    });
    const _ = g(42), C = (t) => t % 4 === 0 ? t % 100 === 0 ? t % 400 === 0 : !0 : !1, b = (t, l) => {
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
          return C(t) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
          return 30;
      }
    }, v = (t) => {
      const l = new Date(t);
      return {
        year: l.getFullYear(),
        month: l.getMonth() + 1,
        day: l.getDate(),
        weekDay: l.getDay(),
        fullTime: `${l.getFullYear()}-${l.getMonth() + 1}-${l.getDate()}`,
        valFullTime: `${l.getFullYear()}-${l.getMonth() + 1 > 9 ? l.getMonth() + 1 : "0" + (l.getMonth() + 1)}-${l.getDate() > 9 ? l.getDate() : "0" + l.getDate()}`,
        inMonth: !1
      };
    }, N = () => {
      const t = o.i18n ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"];
      let l = o.firstDay - 1;
      for (let e = 0; e < 7; e++, l++)
        l > 6 && (l = 0), x.value.push(t[l]);
    }, Y = (t, l) => {
      y.value = [];
      for (let u = 0; u < b(t, l); u++) {
        let h = v(`${t}-${l}-${u + 1}`);
        h.inMonth = !0, y.value.push(h);
      }
      let e = t, r = l - 1, a = y.value[0].weekDay - o.firstDay;
      r === 0 && (e = t - 1, r = 12), a < 0 && (a += 7);
      for (let u = 0; u < a; u++) {
        let h = v(
          `${e}-${r}-${b(e, r) - u}`
        );
        y.value.unshift(h);
      }
      let T = t, F = l + 1, j = _.value - y.value.length;
      F === 13 && (T = t + 1, F = 1);
      for (let u = 0; u < j; u++) {
        let h = v(`${T}-${F}-${u + 1}`);
        y.value.push(h);
      }
    }, $ = (t) => {
      (s.value.year !== t.year || s.value.month !== t.month) && Y(t.year, t.month), s.value = { ...t }, p("change", t, {
        startTime: y.value[0].valFullTime,
        endTime: y.value[_.value - 1].valFullTime
      });
    }, k = async (t, l) => {
      let e = null;
      if (l === 1)
        e = { ...t };
      else {
        let r = s.value.year, a = s.value.month;
        a += t, a > 12 ? (a = 1, r += 1) : a < 1 && (a = 12, r -= 1), e = { ...v(`${r}-${a}-1`) };
      }
      await p("update:modelValue", e.valFullTime), o.modelValue || $(e);
    }, w = g(v(new Date().toLocaleDateString())), L = O(() => `${s.value.year}${o.i18n ? "-" : "\u5E74"}${s.value.month > 9 ? "" : "0"}${s.value.month}${o.i18n ? "" : "\u6708"}`);
    return A(
      () => o.modelValue,
      () => {
        $(v(o.modelValue));
      }
    ), N(), o.modelValue ? $(v(o.modelValue)) : k(v(new Date().toLocaleDateString()), 1), (t, l) => (d(), c("div", W, [
      D("div", I, [
        D("div", {
          class: "left-btn",
          onClick: l[0] || (l[0] = (e) => k(-1, 2))
        }, "<"),
        D("div", z, [
          S(f(n(L)) + " ", 1),
          n(s).fullTime !== n(w).fullTime ? (d(), c("div", {
            key: 0,
            class: "other-msg",
            onClick: l[1] || (l[1] = (e) => k(n(w), 1))
          }, " \u4ECA ")) : M("", !0)
        ]),
        D("div", {
          class: "right-btn",
          onClick: l[2] || (l[2] = (e) => k(1, 2))
        }, ">")
      ]),
      D("div", P, [
        (d(!0), c(V, null, K(n(x), (e, r) => (d(), c("div", {
          class: "item",
          key: r
        }, f(e), 1))), 128))
      ]),
      D("div", R, [
        (d(!0), c(V, null, K(n(y), (e, r) => (d(), c("div", {
          class: B([
            "item",
            e.day < 9 ? "samll-num" : "",
            e.valFullTime === n(w).valFullTime ? "is-today" : "",
            e.valFullTime === n(s).valFullTime ? "select" : "",
            e.weekDay === 6 || e.weekDay === 0 ? "rest" : "",
            e.inMonth ? "" : "not-in-month"
          ]),
          key: r,
          onClick: (a) => e.valFullTime === n(s).valFullTime ? null : k(e, 1)
        }, [
          D("div", G, [
            S(f(e.day) + " ", 1),
            (n(m).workDayKey ? i.workDay.findIndex((a) => a[n(m).workDayKey] === e.valFullTime) !== -1 : i.workDay.indexOf(e.valFullTime) !== -1) ? (d(), c("div", H, f(i.i18n ? "work" : "\u73ED"), 1)) : M("", !0),
            (n(m).restDayKey ? i.restDay.findIndex((a) => a[n(m).restDayKey] === e.valFullTime) !== -1 : i.restDay.indexOf(e.valFullTime) !== -1) ? (d(), c("div", J, f(i.i18n ? "rest" : "\u4F11"), 1)) : M("", !0)
          ]),
          D("div", Q, [
            E(t.$slots, "dateCell", {
              date: e,
              data: {
                isToday: e.valFullTime === n(w).valFullTime,
                isSelected: e.valFullTime === n(s).valFullTime,
                isRest: e.weekDay === 6 || e.weekDay === 0,
                isInMonth: e.inMonth
              }
            }, () => [
              (d(!0), c(V, null, K(i.diyDay.filter((a) => a[n(m).diyDayDayKey] === e.valFullTime), (a, T) => (d(), c("div", { key: T }, f(T + 1) + ". " + f(a[n(m).diyDayDesKey]), 1))), 128))
            ])
          ])
        ], 10, q))), 128))
      ])
    ]));
  }
}, X = [U], Z = {
  install(i) {
    X.forEach((p) => {
      i.component("vueShopCalendarPlus", p);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Z);
export {
  Z as default
};
