(()=>{var u=e=>{let t=0,n=0,o=e.offsetWidth,r=e.offsetHeight;for(;e;)t+=e.offsetTop,n+=e.offsetLeft,e=e.offsetParent;let l=document.documentElement.clientHeight-r,a=document.documentElement.clientWidth-o;return{top:t,bottom:l,left:n,right:a,width:o,height:r}};var E=(e,t)=>[].slice.call(e.querySelectorAll(t));var m=e=>E(document,e);var d=(e,t,n)=>e!=null&&t<e?e:n!=null&&t>n?n:t;var f=(e,t,n=!1)=>{let o;return function(){var r=this,l=arguments;window.clearTimeout(o),o=window.setTimeout(function(){o=null,n||e.apply(r,l)},t),n&&!o&&e.apply(r,l)}};var c={};function p(e,t,n){c[e]||(c[e]=[]),c[e].push({el:t,cb:n}),setTimeout(H,0)}function H(){for(let e in c){let t=c[e].length;c[e].sort(S).forEach((n,o)=>{n.cb(o,t)})}c={}}function S(e,t){return e.el===t.el?0:e.el.compareDocumentPosition(t.el)&2?1:-1}var b="DOWN",v="UP",h=!1,s=[],L,i={},y;function g(){Y(),O(),w()}var D=f(g,250);function O(){for(let e=0;e<s.length;e++)Object.assign(s[e].entry,u(s[e].entry.target))}function Y(){let e=window,t=document.documentElement;i.scrollX=e.scrollX,i.scrollY=e.scrollY,i.scrollHeight=t.scrollHeight,i.direction=e.scrollY>=L?b:v,i.width=t.clientWidth,i.height=t.clientHeight}function w(){let e=s.length;if(!!e){i.scrollX=window.scrollX,i.scrollY=window.scrollY,i.direction=window.scrollY>=L?b:v;for(let t=e-1;t>=0;t--){let{entry:n,cb:o}=s[t];o({entry:n,root:i})}}}function x(e,t){if(s.some(o=>o.entry.target===e&&o.cb===t)){console.error("addScrollListener: target already subscribed with callback");return}let n=Object.assign({target:e},u(e));s.push({entry:n,cb:t}),h||(h=!0,g(),C()),t({entry:n,root:i})}function T(e,t){t?s=s.filter(n=>!(n.entry.target===e&&n.cb===t)):s=s.filter(n=>n.entry.target!==e)}function C(){window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",g,{passive:!0}),y=new MutationObserver(D),y.observe(document.documentElement,{attributes:!1,childList:!0,subtree:!0})}var k=(e,t=0)=>{let{entry:n,root:o}=e,r=o.scrollY+t,l=o.scrollY+o.height-t;return n.top<l&&n.top+n.height>r},M=(e,t=0)=>{if(!k(e,t))return 0;let{entry:n,root:o}=e;if(n.height===0)return 0;let r=o.scrollY+t,l=o.scrollY+o.height-t,a=Math.min(l-n.top,n.top+n.height-r,n.height,o.height);return d(0,a/n.height,1)};m(".card").forEach((e,t)=>{t==10&&(e.style.outline="10px solid pink");let n=0,o=r=>{M(r)>.2&&(e.setAttribute("data-intersected",""),T(e,o),n&&console.log("!fired too many times",e,n),n++,p("visible-card",e,a=>{setTimeout(()=>{requestAnimationFrame(()=>{e.classList.add("is-visible")})},a*100)}))};x(e,o)});})();
//# sourceMappingURL=scroll-stagger.js.map
