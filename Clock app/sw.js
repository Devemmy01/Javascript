if(!self.define){let e,f={};const r=(r,s)=>(r=new URL(r+".js",s).href,f[r]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=f,document.head.appendChild(e)}else e=r,importScripts(r),f()})).then((()=>{let e=f[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(f[d])return;let a={};const o=e=>r(e,d),n={module:{uri:d},exports:a,require:o};f[d]=Promise.all(s.map((e=>n[e]||o(e)))).then((e=>(i(...e),a)))}}define(["./workbox-926a8ce9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"countdown.html",revision:"68a8f636d264e9f83fe4f533fdc52a91"},{url:"css/all.css",revision:"30bcab9c086559aad11d39876ecebcec"},{url:"img/cl1.png",revision:"006d6e5a5a03a8f42e988f564f50aa6c"},{url:"img/cl2.png",revision:"efe6ceebba45e6b6ffebeac4371fbba3"},{url:"img/cl3.png",revision:"5eed9a64fb82c7cbdb8632dd53aa3fce"},{url:"index.html",revision:"a7527e15bd50229bc7131683bdc41f63"},{url:"index.js",revision:"c88da49fd2fed6832598d88f6155b287"},{url:"index2.js",revision:"c360de1f0714acbc781ef23539520004"},{url:"index3.js",revision:"0c8ea0dbb337d5bb86c6a4723f722fb1"},{url:"stopwatch.html",revision:"b5f0d9532f378a90039600c200064215"},{url:"style.css",revision:"727120c6c24dcc623b6c42aeffa34059"},{url:"webfonts/fa-brands-400.eot",revision:"592643a83b8541edc52063d84c468700"},{url:"webfonts/fa-brands-400.svg",revision:"1d5619cd804367cefe6da2d79289218a"},{url:"webfonts/fa-brands-400.ttf",revision:"513aa607d398efaccc559916c3431403"},{url:"webfonts/fa-brands-400.woff",revision:"1a575a4138e5f366474f0e7c5bd614a5"},{url:"webfonts/fa-brands-400.woff2",revision:"ed311c7a0ade9a75bb3ebf5a7670f31d"},{url:"webfonts/fa-regular-400.eot",revision:"b0e2db3b634d1bc3928e127458d993d8"},{url:"webfonts/fa-regular-400.svg",revision:"c5d109be8edd3de0f60eb472bd9ef691"},{url:"webfonts/fa-regular-400.ttf",revision:"766913e6c0088ab8c9f73e18b4127bc4"},{url:"webfonts/fa-regular-400.woff",revision:"d1d7e3b4c219fde0f7376c6facfd7149"},{url:"webfonts/fa-regular-400.woff2",revision:"b91d376b8d7646d671cd820950d5f7f1"},{url:"webfonts/fa-solid-900.eot",revision:"0c6bfc668a72935760178f91327aed3a"},{url:"webfonts/fa-solid-900.svg",revision:"37bc7099f6f1ba80236164f22e905837"},{url:"webfonts/fa-solid-900.ttf",revision:"b9625119ce4300f0ef890a8f3234c773"},{url:"webfonts/fa-solid-900.woff",revision:"d745348d289b149026921f197929a893"},{url:"webfonts/fa-solid-900.woff2",revision:"d824df7eb2e268626a2dd9a6a741ac4e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
