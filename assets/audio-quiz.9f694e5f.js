import{q}from"./quotes.7333fe73.js";import{e as w,f as o,g as y,h as M,o as c,c as d,a as l,t as h,F as A,i as C}from"./index.b47e9d16.js";const D={class:"bg-black text-lg bg-opacity-75 text-white p-8 backdrop-filter backdrop-saturate-0"},B=l("div",{class:"ico-mdi-play"},null,-1),F=[B],T=["disabled","onClick"],U=w({__name:"audio-quiz",setup($){const n=o(-1),v=o(),t=o(),p=o(),u=o([]),i=o(),r=y(()=>new Audio(v.value)),_=()=>{const e=q.filter(s=>s.quotes.some(a=>a.audio.files.de));return e[Math.floor(Math.random()*e.length)]},f=()=>t.value.quotes[Math.floor(Math.random()*t.value.quotes.length)],g=()=>{let e=Date.now();const s=setInterval(()=>{const a=Date.now()-e;n.value+=a/1e3,e=Date.now(),i.value&&(clearInterval(s),m())},50)},b=()=>{n.value<=-1&&g(),r.value.pause(),r.value.currentTime=0,r.value.play()},k=e=>{i.value=e},m=()=>{n.value=-1,t.value=_(),p.value=f(),v.value=`./sounds/quotes/de/${t.value.id}/${p.value.audio.id}`,u.value=[],i.value=null,u.value.push({id:t.value.id,name:t.value.name.de})};return M(()=>{m()}),(e,s)=>(c(),d("div",D,[l("div",null,h(n.value.toFixed(1)),1),l("button",{onClick:b,class:"text-8xl",hover:"text-primary"},F),l("div",null,[(c(!0),d(A,null,C(u.value,(a,x)=>(c(),d("button",{disabled:n.value<0,key:x,onClick:I=>k(a.id)},h(a.name),9,T))),128))])]))}});export{U as default};