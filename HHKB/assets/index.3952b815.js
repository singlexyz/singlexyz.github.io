import{j as c,R as l,a as k}from"./vendor.66c97172.js";const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function y(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=y(e);fetch(e.href,t)}};a();const r=c.exports.jsx,d=[[{key:"esc",color:"#558AC8"},{key:"1"},{key:"2"},{key:"3"},{key:"4"},{key:"5"},{key:"6"},{key:"7"},{key:"8"},{key:"9"},{key:"0"},{key:"-"},{key:"="},{key:"\\"},{key:"`"}],[{key:"tab",width:1.5},{key:"q"},{key:"w"},{key:"e"},{key:"r"},{key:"t"},{key:"y"},{key:"u"},{key:"i"},{key:"o"},{key:"p"},{key:"["},{key:"]"},{key:"delete",width:1.5}],[{key:"control",width:1.75,color:"#CD4249"},{key:"a"},{key:"s"},{key:"d"},{key:"f"},{key:"g"},{key:"h"},{key:"j"},{key:"k"},{key:"l"},{key:";"},{key:"'"},{key:"enter",width:2.25}],[{key:"shift",width:2.25},{key:"z"},{key:"x"},{key:"c"},{key:"v"},{key:"b"},{key:"n"},{key:"m"},{key:","},{key:"."},{key:"/"},{key:"shift",width:1.75},{key:"fn"}],[{key:"alt",offset:1.75},{key:"command",width:1.5},{key:"",width:6},{key:"command",width:1.5},{key:"alt"}]];function f(){return r("div",{className:"flex flex-col font-mono gap-2 w-full sm:w-[640px] md:w-[768px] text-xs p-4 bg-[#111] shadow-md rounded-md",children:d.map((s,o)=>r("div",{className:"grid gap-2 capitalize select-none",style:{gridTemplateColumns:"repeat(60, minmax(0, 1fr))"},children:s.map(({key:y,width:n=1,color:e="#fefefe",offset:t})=>r("span",{style:{backgroundColor:e,gridColumn:`${t?t*4:"auto"} / span ${4*n}`,aspectRatio:`${n>1?"none":"1"}`},className:"rounded-sm transform active:translate-x-[1px] active:translate-y-[1px] cursor-pointer flex justify-center items-center text-black",children:y},y+o))},o))})}function m(){return r("div",{className:"bg-[wheat] flex justify-center items-center min-h-screen",children:r(f,{})})}l.render(r(k.StrictMode,{children:r(m,{})}),document.getElementById("root"));
