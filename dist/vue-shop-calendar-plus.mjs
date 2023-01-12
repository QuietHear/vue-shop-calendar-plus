import { ref as g, computed as O, watch as A, openBlock as i, createElementBlock as d, createElementVNode as v, createTextVNode as S, toDisplayString as D, unref as f, createCommentVNode as M, Fragment as V, renderList as K, normalizeClass as B, renderSlot as E } from "vue";
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
  setup(r, { emit: p }) {
    const n = r, m = g({
      workDayKey: n.props.workDayKey || "",
      restDayKey: n.props.restDayKey || "",
      diyDayDayKey: n.props.diyDayDayKey || "day",
      diyDayDesKey: n.props.diyDayDesKey || "des"
    });
    let x = g([]), c = g([]), o = g({
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
    }, y = (t) => {
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
      const t = n.i18n ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"];
      let l = n.firstDay - 1;
      for (let e = 0; e < 7; e++, l++)
        l > 6 && (l = 0), x.value.push(t[l]);
    }, Y = (t, l) => {
      c.value = [];
      for (let u = 0; u < b(t, l); u++) {
        let h = y(`${t}-${l}-${u + 1}`);
        h.inMonth = !0, c.value.push(h);
      }
      let e = t, s = l - 1, a = c.value[0].weekDay - n.firstDay;
      s === 0 && (e = t - 1, s = 12), a < 0 && (a += 7);
      for (let u = 0; u < a; u++) {
        let h = y(
          `${e}-${s}-${b(e, s) - u}`
        );
        c.value.unshift(h);
      }
      let T = t, F = l + 1, j = _.value - c.value.length;
      F === 13 && (T = t + 1, F = 1);
      for (let u = 0; u < j; u++) {
        let h = y(`${T}-${F}-${u + 1}`);
        c.value.push(h);
      }
    }, $ = (t) => {
      (o.value.year !== t.year || o.value.month !== t.month) && Y(t.year, t.month), o.value = { ...t }, p("change", t, {
        startTime: c.value[0].valFullTime,
        endTime: c.value[_.value - 1].valFullTime
      });
    }, k = async (t, l) => {
      let e = null;
      if (l === 1)
        e = { ...t };
      else {
        let s = o.value.year, a = o.value.month;
        a += t, a > 12 ? (a = 1, s += 1) : a < 1 && (a = 12, s -= 1), e = { ...y(`${s}-${a}-1`) };
      }
      await p("update:modelValue", e.valFullTime), n.modelValue || $(e);
    }, w = g(y(new Date().toLocaleDateString())), L = O(() => `${o.value.year}${n.i18n ? "-" : "\u5E74"}${o.value.month > 9 ? "" : "0"}${o.value.month}${n.i18n ? "" : "\u6708"}`);
    return A(
      () => n.modelValue,
      () => {
        $(y(n.modelValue));
      }
    ), N(), n.modelValue ? $(y(n.modelValue)) : k(y(new Date().toLocaleDateString()), 1), (t, l) => (i(), d("div", W, [
      v("div", I, [
        v("div", {
          class: "left-btn",
          onClick: l[0] || (l[0] = (e) => k(-1, 2))
        }, "<"),
        v("div", z, [
          S(D(f(L)) + " ", 1),
          f(o).fullTime !== w.value.fullTime ? (i(), d("div", {
            key: 0,
            class: "other-msg",
            onClick: l[1] || (l[1] = (e) => k(w.value, 1))
          }, " \u4ECA ")) : M("", !0)
        ]),
        v("div", {
          class: "right-btn",
          onClick: l[2] || (l[2] = (e) => k(1, 2))
        }, ">")
      ]),
      v("div", P, [
        (i(!0), d(V, null, K(f(x), (e, s) => (i(), d("div", {
          class: "item",
          key: s
        }, D(e), 1))), 128))
      ]),
      v("div", R, [
        (i(!0), d(V, null, K(f(c), (e, s) => (i(), d("div", {
          class: B([
            "item",
            e.day < 9 ? "samll-num" : "",
            e.valFullTime === w.value.valFullTime ? "is-today" : "",
            e.valFullTime === f(o).valFullTime ? "select" : "",
            e.weekDay === 6 || e.weekDay === 0 ? "rest" : "",
            e.inMonth ? "" : "not-in-month"
          ]),
          key: s,
          onClick: (a) => e.valFullTime === f(o).valFullTime ? null : k(e, 1)
        }, [
          v("div", G, [
            S(D(e.day) + " ", 1),
            (m.value.workDayKey ? r.workDay.findIndex((a) => a[m.value.workDayKey] === e.valFullTime) !== -1 : r.workDay.indexOf(e.valFullTime) !== -1) ? (i(), d("div", H, D(r.i18n ? "work" : "\u73ED"), 1)) : M("", !0),
            (m.value.restDayKey ? r.restDay.findIndex((a) => a[m.value.restDayKey] === e.valFullTime) !== -1 : r.restDay.indexOf(e.valFullTime) !== -1) ? (i(), d("div", J, D(r.i18n ? "rest" : "\u4F11"), 1)) : M("", !0)
          ]),
          v("div", Q, [
            E(t.$slots, "dateCell", {
              date: e,
              data: {
                isToday: e.valFullTime === w.value.valFullTime,
                isSelected: e.valFullTime === f(o).valFullTime,
                isRest: e.weekDay === 6 || e.weekDay === 0,
                isInMonth: e.inMonth
              }
            }, () => [
              (i(!0), d(V, null, K(r.diyDay.filter((a) => a[m.value.diyDayDayKey] === e.valFullTime), (a, T) => (i(), d("div", { key: T }, D(T + 1) + ". " + D(a[m.value.diyDayDesKey]), 1))), 128))
            ])
          ])
        ], 10, q))), 128))
      ])
    ]));
  }
}, X = [U], Z = {
  install(r) {
    X.forEach((p) => {
      r.component("vueShopCalendarPlus", p);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Z);
export {
  Z as default
};
