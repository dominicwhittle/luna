(()=>{var d=t=>document.documentElement.contains(t);var i=(t,e)=>t.querySelector(e),a=(t,e)=>[].slice.call(t.querySelectorAll(e));var g=(t,e,n=!1)=>{let o;return function(){var s=this,r=arguments;window.clearTimeout(o),o=window.setTimeout(function(){o=null,n||t.apply(s,r)},e),n&&!o&&t.apply(s,r)}};var c=[],p,f=new Map;function u(t,e){return{observe(){b(t,e)},disconnect(){x(t)}}}function T(){c=c.map(t=>{let e=[];return t.instances=t.instances.reduce((n,o)=>{let{el:s,onunmount:r}=o;return d(s)?(e.push(s),n.push(o)):r(),n},[]),[].slice.call(t.liveList).forEach(n=>{e.includes(n)||t.instances.push(E(n,t.onmount))}),t})}function b(t,e){if(!t.startsWith(".")||t.includes(" ")){console.error('Class selectors only please; eg ".Component"');return}if(c.some(r=>r.selector===t))return;let n=document.getElementsByClassName(t.slice(1)),s=[].slice.call(n).map(r=>E(r,e));if(c.push({selector:t,onmount:e,liveList:n,instances:s}),!p){let r=g(T,250);p=new MutationObserver(r),p.observe(document.documentElement,{attributes:!1,childList:!0,subtree:!0})}}function E(t,e){let n={el:t,onunmount:()=>{}};return e(t,{unmount:s=>{n.onunmount=s},setMethods:s=>{f.set(t,s)},getMethods:s=>new Promise((r,l)=>{setTimeout(()=>{let m=f.get(s);m?r(m):l()},0)})}),n}function x(t){let e=c.find(o=>o.selector===t);if(!e)return;let n=c.indexOf(e);c[n].instances.forEach(({el:o})=>{f.delete(o)}),c.splice(n,1)}var L=u(".Apple",(t,{setMethods:e})=>{console.log("Init \u{1F34F}");let n={clicks:0},o=i(t,"button"),s=i(t,"small"),r=()=>{n.clicks++,s.innerText=n.clicks.toString(),console.log(`\u{1F34F} ${n.clicks} clicks`)};o.addEventListener("click",r),e({click:r})}),H=u(".Banana",(t,{getMethods:e})=>{let n=i(t,"button"),o=t.closest(".SaladBowl");o?n.addEventListener("click",()=>e(o).then(s=>s.logFruit())):console.log("Not in a salad bowl")}),h=u(".SaladBowl",(t,{getMethods:e,setMethods:n})=>{let o=a(t,".Apple"),s=a(t,"[data-click-apple]"),r=i(t,"[data-disconnect-apples]");e(o[o.length-1]).then(l=>l.click()),s.forEach((l,m)=>{l.addEventListener("click",()=>{e(o[m]).then(M=>M.click())})}),n({logFruit:()=>console.log(a(t,".Apple, .Banana"))}),r.addEventListener("click",L.disconnect)});h.observe();L.observe();H.observe();})();
//# sourceMappingURL=component.js.map
