if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>r(e,t),d={module:{uri:t},exports:c,require:o};i[t]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-926a8ce9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"img/calc.png",revision:"e5f376babfa87f71727c7ad88b492212"},{url:"img/calc2.png",revision:"445e6a64463b1a14a2ceb597045b63d1"},{url:"index.html",revision:"21e8f1ad5b316816adeee3799e01b10c"},{url:"index.js",revision:"31a268f485c219502724c0b67aa266d7"},{url:"style.css",revision:"c229a0469edc028f2dad09d32dd33ee8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
