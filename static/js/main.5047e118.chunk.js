(this["webpackJsonpkulina-exercise"]=this["webpackJsonpkulina-exercise"]||[]).push([[0],{13:function(n,e,t){n.exports=t(23)},18:function(n,e,t){},21:function(n,e,t){n.exports=t.p+"static/media/meal1.ace60bc1.jpg"},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(9),o=t.n(i),c=(t(18),t(5)),u=t(2),l=t(1),d={Palletes:{PinkPrimary:"#f9423a",BrownChoco:"#a23530",GreyDarken:"#424749",GreyShadow:"#6e7679",GreySmooth:"#e2e4e4",WhiteClean:"#f1f1f2"},FontSizes:{xs:"8px",sm:"12px",md:"14px",lg:"16px",xl:"20px"},Boxes:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"40px"},Shadows:{boxShadows:"0 8px 10px 0 rgba(10, 31, 68, 0.1)"}};function f(){var n=Object(u.a)(["\n  max-width: 768px;\n  width: 100%;\n  background: #ffffff;\n"]);return f=function(){return n},n}function s(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  background: ",";\n"]);return s=function(){return n},n}var m=l.b.div(s(),(function(n){return n.theme.Palletes.WhiteClean})),b=l.b.div(f()),h=function(n){var e=n.children;return a.a.createElement(l.a,{theme:d},a.a.createElement(m,null,a.a.createElement(b,null,e)))};function v(){var n=Object(u.a)(["\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  display: flex;\n  overflow-x: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return v=function(){return n},n}function p(){var n=Object(u.a)(["\n  overflow-y: hidden;\n  background: #ffffff;\n"]);return p=function(){return n},n}var x=l.b.div(p()),w=l.b.div(v()),g=function(n){var e=n.children;return a.a.createElement(l.a,{theme:d},a.a.createElement(x,null,a.a.createElement(w,null,e)))};function y(){var n=Object(u.a)(["\n  font-size: ",";\n  font-weight: 600;\n"]);return y=function(){return n},n}function E(){var n=Object(u.a)(["\n  outline: none;\n  border: none;\n  transition: background-color 0.5s;\n  background: none;\n  border-radius: 100%;\n  height: 40px !important;\n  width: 40px !important;\n  min-width: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: ",";\n  font-size: ",";\n  color: ",";\n  scroll-snap-align: start;\n  ","\n"]);return E=function(){return n},n}var k=l.b.button(E(),(function(n){return n.theme.Boxes.sm}),(function(n){return n.theme.FontSizes.xs}),(function(n){return n.disabled?n.theme.Palletes.GreySmooth:n.theme.Palletes.GreyDarken}),(function(n){return n.actived&&"\n      background-color: ".concat(n.theme.Palletes.GreyDarken,";\n      color: ").concat(n.theme.Palletes.WhiteClean,";\n    ")})),j=l.b.div(y(),(function(n){return n.theme.FontSizes.sm})),O=function(n){var e=n.day,t=n.dayNumb,r=n.actived,i=n.disabled,o=n.handleClick;return a.a.createElement(l.a,{theme:d},a.a.createElement(k,{actived:r,disabled:i,onClick:o},a.a.createElement("div",null,e),a.a.createElement(j,null,t)))};function D(){var n=Object(u.a)(["\n  .active {\n    visibility: visible;\n    transition: all 200ms ease-in;\n  }\n  .hidden {\n    visibility: hidden;\n    transition: all 200ms ease-out;\n    transform: translate(0, -100%);\n  }\n"]);return D=function(){return n},n}function S(){var n=Object(u.a)(["\n  padding: ",";\n  outline: none;\n  border: none;\n  text-align: center;\n  width: 100%;\n  background: #ffffff;\n\n  ","\n"]);return S=function(){return n},n}function B(){var n=Object(u.a)(["\n  border-radius: 5px;\n  display: flex;\n  overflow: hidden;\n"]);return B=function(){return n},n}function P(){var n=Object(u.a)(["\n  padding: ",";\n  background: #ffffff;\n  position: fixed;\n  top: 104px;\n  width: 100%;\n  max-width: 752px;\n\n  @media (max-width: 768px) {\n    max-width: calc(100vw - 16px);\n  }\n"]);return P=function(){return n},n}var z=l.b.div(P(),(function(n){return n.theme.Boxes.sm})),C=l.b.div(B()),N=l.b.button(S(),(function(n){return n.theme.Boxes.sm}),(function(n){return n.actived&&"\n    background: ".concat(n.theme.Palletes.GreyDarken,";\n    color: ").concat(n.theme.Palletes.WhiteClean,";\n  ")})),G=l.b.div(D()),L=function(n){var e=n.tabItem,t=n.activeTab,r=n.showTab;return a.a.createElement(l.a,{theme:d},a.a.createElement(G,null,a.a.createElement(z,{className:r?"active":"hidden"},a.a.createElement(C,null,e.map((function(n){return a.a.createElement(N,{key:n.id,actived:n.id===t},n.name)}))))))},M=function(n){var e=n.color;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},a.a.createElement("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z",fill:e}))};function F(){var n=Object(u.a)(["\n  font-size: ",";\n  font-weight: 600;\n"]);return F=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return T=function(){return n},n}function I(){var n=Object(u.a)(["\n  font-size: ",";\n  margin: 0 ",";\n"]);return I=function(){return n},n}var W=l.b.div(I(),(function(n){return n.theme.FontSizes.xs}),(function(n){return n.theme.Boxes.sm})),Y=l.b.div(T()),A=l.b.div(F(),(function(n){return n.theme.FontSizes.md})),H=function(){return a.a.createElement(l.a,{theme:d},a.a.createElement(W,null,a.a.createElement("div",null,"ALAMAT PENGIRIMAN"),a.a.createElement(Y,null,a.a.createElement(A,null,"Tokopedia Tower"),a.a.createElement(M,{color:d.Palletes.PinkPrimary}))))},R=function(n){var e=n.color,t=n.height,r=n.width;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:t,viewBox:"0 0 24 24",width:r},a.a.createElement("path",{d:"M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z",fill:e}))};R.defaultProps={height:"24",width:"24"};var J=R;function $(){var n=Object(u.a)(["\n  display: flex;\n  justify-items: center;\n"]);return $=function(){return n},n}function q(){var n=Object(u.a)(["\n  background: #ffffff;\n  padding: ",";\n"]);return q=function(){return n},n}function K(){var n=Object(u.a)(["\n  width: 100%;\n  height: 288px;\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  background: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: ",";\n"]);return Q=function(){return n},n}var U=l.b.div(Q(),(function(n){return n.theme.Shadows.boxShadows})),V=l.b.img(K()),X=l.b.div(q(),(function(n){return n.theme.Boxes.sm})),Z=(l.b.div($()),function(n){return a.a.createElement(l.a,{theme:d},a.a.createElement(U,null,a.a.createElement(V,{src:t(21)}),a.a.createElement(X,null,"Hallo")))}),_=t(4),nn=t.n(_);function en(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n  transform: translateY(47px);\n  padding: ",";\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n  transition: all 0.5s;\n  font-size: ",";\n  font-weight: 600;\n  margin: "," 0;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  padding: ",";\n"]);return on=function(){return n},n}Date.prototype.addDays=function(n){var e=new Date(this.valueOf());return e.setDate(e.getDate()+n),e};var cn=function(n,e){for(var t=[],r=n;r<=e;){var a={day:nn()(r).format("ddd"),dayNumb:nn()(r).format("DD"),date:nn()(r).format("dddd, DD MMMM YYYY")};t.push(a),r=r.addDays(1)}return t}(new Date,(new Date).addDays(14)),un=l.b.div(on(),(function(n){return n.theme.Boxes.sm})),ln=l.b.div(an()),dn=l.b.div(rn(),(function(n){return n.theme.FontSizes.md}),(function(n){return n.theme.Boxes.lg})),fn=l.b.div(tn(),(function(n){return n.theme.Boxes.md})),sn=l.b.div(en()),mn=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(0),u=Object(c.a)(o,2),f=u[0],s=u[1],m=Object(r.useState)(null),b=Object(c.a)(m,2),v=b[0],p=b[1];Object(r.useEffect)((function(){var n=function(){s(document.body.getBoundingClientRect().top),i(document.body.getBoundingClientRect().top>f),console.log(t)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}));return a.a.createElement(l.a,{theme:d},a.a.createElement(h,null,a.a.createElement(ln,null,a.a.createElement(un,null,a.a.createElement(J,{color:d.Palletes.GreyDarken,width:"32",height:"32"}),a.a.createElement(H,null)),a.a.createElement(g,null,cn.map((function(n){return a.a.createElement(O,{key:n.dayNumb,disabled:"Sat"===n.day||"Sun"===n.day,handleClick:(e=n,function(n){p(e)}),actived:v&&n.dayNumb===v.dayNumb,day:n.day,dayNumb:n.dayNumb});var e})))),a.a.createElement(L,{tabItem:[{id:"1",name:"Launch"},{id:"2",name:"Dinner"}],activeTab:"2",showTab:t}),a.a.createElement(fn,null,a.a.createElement(dn,null,v&&v.date),a.a.createElement(sn,null,a.a.createElement(Z,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(mn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.5047e118.chunk.js.map