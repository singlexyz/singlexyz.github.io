import{j as a,m as i,a as r,R as c,b as u}from"./vendor.c24a2a03.js";const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};d();var m="assets/notice.be3c486f.svg";function f(){return a("div",{className:"flex min-h-screen flex-col relative justify-center overflow-hidden",children:[a(i.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:[.36,.66,.04,1]},className:"text-center leading-relaxed transform -translate-y-1/4",children:[r("img",{style:{aspectRatio:"203 / 200"},className:"max-w-[200px] w-[52%] mx-auto mb-4",src:m}),r("p",{className:"text-lg text-[#222]",children:"\u6253\u5F00\u901A\u77E5"}),r("p",{className:"text-lg text-[#888]",children:"\u6211\u4EEC\u4F1A\u5E2E\u4F60\u63A8\u9001\u4E00\u4E9B\u4F60\u9700\u8981\u77E5\u9053\u7684\u4E8B\u60C5\u3002"})]}),a(i.menu,{initial:{y:"100%"},animate:{y:"0%"},transition:{delay:.2,ease:[.36,.66,.04,1]},style:{paddingBottom:"constant(safe-area-inset-bottom)",paddingBottom:"env(safe-area-inset-bottom)"},className:"absolute space-y-1 inset-x-0 bg-white shadow-2xl m-0 bottom-0 p-6 text-center",children:[r("button",{className:"block text-lg transition-transform transform active:scale-[.99] py-3 text-white bg-[#FEC72E] w-full rounded-full",children:"\u5F00\u542F\u901A\u77E5"}),r("button",{className:"block text-lg transition-transform transform active:scale-[.99] py-3 text-[#FEC72E] w-full",children:"\u4EE5\u540E\u518D\u8BF4"})]})]})}c.render(r(u.StrictMode,{children:r(f,{})}),document.getElementById("root"));
