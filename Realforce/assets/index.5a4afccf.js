import{j as k,F as i,f as m,a as u,b as h,c as p,d as w,e as g,g as b,h as x,R as v,i as R}from"./vendor.4746f4bc.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&y(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function y(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};N();const e=k.exports.jsx,c=k.exports.jsxs,d=k.exports.Fragment;function a({area:o,rows:r}){return e("div",{className:"grid",style:{alignItems:"stretch",gridArea:o,gridTemplate:"subgrid / subgrid"},children:r.map((s,y)=>e(j,{row:s,rowIndex:y}))})}function j({row:o}){return e(d,{children:o.map(({key:r,width:s=1,height:y=1,color:t="#eee",offset:n,symbol:l,side:f})=>c("span",{style:{backgroundColor:t,gridColumn:`${n?n*4:"auto"} / span ${s*4}`,gridRow:`auto / span ${y}`,aspectRatio:`${s>1||y>1?"none":"1"}`,perspective:"500px"},className:"rounded-sm transform active:translate-x-[1px] active:translate-y-[1px] cursor-pointer text-black overflow-hidden",children:[c("span",{style:{boxShadow:"0 0 0 10em rgba(0,0,0,.06)"},className:"flex flex-col justify-center items-center leading-tight rounded-md w-full h-full",children:[l&&e("span",{children:l}),r]}),f&&e("span",{style:{transform:"scale(.65) rotatex(-50deg)"},className:"origin-bottom scale-80 block text-xs bottom-0 inset-x-0 text-center absolute",children:f})]},o.key))})}const C=[[{key:e(i,{icon:m})},{key:e(i,{icon:u})},{key:e(i,{icon:h})},{key:e(i,{icon:p})}]],L=[[{key:"Num"},{key:"/"},{key:"*"},{key:"-"}],[{key:"7"},{key:"8"},{key:"9"},{key:"+",height:2}],[{key:"4"},{key:"5"},{key:"6"}],[{key:"1"},{key:"2"},{key:"3"},{key:e("span",{className:"flex flex-col text-sm leading-none",children:"enter".split("").map(o=>e("span",{className:"leading-tight",children:o}))}),height:2}],[{key:"0",width:2},{key:"."}]];function $(){return c(d,{children:[e(a,{area:"1 / 77 / -1 / -1",rows:C}),e(a,{area:"3 / 77 / -1 / -1",rows:L})]})}const F=[[{key:"`",symbol:"~"},{key:"1",symbol:"!"},{key:"2",symbol:"@"},{key:"3",symbol:"#"},{key:"4",symbol:"$"},{key:"5",symbol:"%"},{key:"6",symbol:"^"},{key:"7",symbol:"&"},{key:"8",symbol:"*"},{key:"9",symbol:"("},{key:"0",symbol:")"},{key:"-",symbol:"_"},{key:"=",symbol:"+"},{key:"backspace",width:2}],[{key:"tab",width:1.5},{key:"q"},{key:"w"},{key:"e"},{key:"r"},{key:"t"},{key:"y"},{key:"u"},{key:"i"},{key:"o"},{key:"p"},{key:"["},{key:"]"},{key:"\\",width:1.5}],[{key:"capslock",width:1.75},{key:"a"},{key:"s"},{key:"d"},{key:"f"},{key:"g"},{key:"h"},{key:"j"},{key:"k"},{key:"l"},{key:";"},{key:"'"},{key:"return",width:2.25}],[{key:"LShift",width:2.25},{key:"z"},{key:"x"},{key:"c"},{key:"v"},{key:"b"},{key:"n"},{key:"m"},{key:","},{key:"."},{key:"/"},{key:"RShift",width:2.75}],[{key:"LCtrl",width:1.25},{key:"LWin",width:1.25},{key:"LAlt",width:1.25},{key:"",width:6.25},{key:"RAlt",width:1.25},{key:"RWin",width:1.25},{key:"fn",width:1.25},{key:"RCtrl",width:1.25}]];function P(){return e(a,{area:"3 / 1 / -1 / 61",rows:F})}const S=[[{key:"Prs"},{key:"Srl"},{key:"Pas"}]],A=[[{key:"Ins"},{key:"Home"},{key:"Pup"}],[{key:"Del"},{key:"End"},{key:"Pdn"}]],I=[[{key:e(i,{icon:w}),offset:1.25}],[{key:e(i,{icon:g}),offset:.25},{key:e(i,{icon:b})},{key:e(i,{icon:x})}]];function O(){return c(d,{children:[e(a,{area:"1 / 63 / -1 / 75",rows:S}),e(a,{area:"3 / 63 / -1 / 75",rows:A}),e(a,{area:"6 / 63 / -1 / 75",rows:I})]})}const D=[[{key:"esc",color:"#CB444D",text:"black"},{key:"f1",offset:2.25},{key:"f2"},{key:"f3"},{key:"f4"},{key:"f5",offset:6.75},{key:"f6"},{key:"f7"},{key:"f8"},{key:"f9",offset:11.25},{key:"f10"},{key:"f11"},{key:"f12"}]];function M(){return e(a,{area:"1 / 1 / 2 / 61",rows:D})}function E({children:o,col:r,row:s}){return e("div",{className:"grid font-mono gap-1 whitespace-nowrap text-base p-6 relative select-none capitalize",style:{gridTemplateColumns:`repeat(${r}, minmax(0, 1fr))`,gridTemplateRows:`1fr .5fr repeat(${s-1}, minmax(0, 1fr))`},children:o})}function T(){return e("div",{className:"shadow-md rounded-md gap-2 grid grid-flow-col mx-8 w-full bg-[#111]",children:c(E,{row:6,col:92,children:[e(M,{}),e(P,{}),e(O,{}),e($,{})]})})}function V(){return e("div",{className:"bg-[wheat] flex flex-col px-8 justify-center items-center min-h-screen",children:e(T,{})})}v.render(e(R.StrictMode,{children:e(V,{})}),document.getElementById("root"));
