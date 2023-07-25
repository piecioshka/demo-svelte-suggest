var Y=Object.defineProperty;var Z=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var S=(e,t,n)=>(Z(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function b(){}function K(e){return e()}function B(){return Object.create(null)}function A(e){e.forEach(K)}function V(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function I(e,t){return e===t?!0:(j||(j=document.createElement("a")),j.href=t,e===j.href)}function ee(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function v(){return x(" ")}function ne(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}let q;function E(e){q=e}const $=[],k=[];let w=[];const M=[],re=Promise.resolve();let N=!1;function le(){N||(N=!0,re.then(G))}function P(e){w.push(e)}const L=new Set;let y=0;function G(){if(y!==0)return;const e=q;do{try{for(;y<$.length;){const t=$[y];y++,E(t),oe(t.$$)}}catch(t){throw $.length=0,y=0,t}for(E(null),$.length=0,y=0;k.length;)k.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];L.has(n)||(L.add(n),n())}w.length=0}while($.length);for(;M.length;)M.pop()();N=!1,L.clear(),E(e)}function oe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function ue(e){const t=[],n=[];w.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),w=t}const C=new Set;let ie;function H(e,t){e&&e.i&&(C.delete(e),e.i(t))}function ce(e,t,n,s){if(e&&e.o){if(C.has(e))return;C.add(e),ie.c.push(()=>{C.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function fe(e){e&&e.c()}function J(e,t,n){const{fragment:s,after_update:l}=e.$$;s&&s.m(t,n),P(()=>{const u=e.$$.on_mount.map(K).filter(V);e.$$.on_destroy?e.$$.on_destroy.push(...u):A(u),e.$$.on_mount=[]}),l.forEach(P)}function Q(e,t){const n=e.$$;n.fragment!==null&&(ue(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){e.$$.dirty[0]===-1&&($.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,s,l,u,f,h=[-1]){const g=q;E(e);const r=e.$$={fragment:null,ctx:[],props:u,update:b,not_equal:l,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:B(),dirty:h,skip_bound:!1,root:t.target||g.$$.root};f&&f(r.root);let i=!1;if(r.ctx=n?n(e,t.props||{},(o,p,...c)=>{const m=c.length?c[0]:p;return r.ctx&&l(r.ctx[o],r.ctx[o]=m)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](m),i&&ae(e,o)),p}):[],r.update(),i=!0,A(r.before_update),r.fragment=s?s(r.ctx):!1,t.target){if(t.hydrate){const o=se(t.target);r.fragment&&r.fragment.l(o),o.forEach(O)}else r.fragment&&r.fragment.c();t.intro&&H(e.$$.fragment),J(e,t.target,t.anchor),G()}E(g)}class X{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){Q(this,1),this.$destroy=b}$on(t,n){if(!V(n))return b;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const de="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);async function he(e,t={}){return(await fetch(e,t)).json()}const ge="https://fakes.piecioshka.io/users",pe=e=>new Promise(t=>setTimeout(t,e)),me=async(e,t={})=>{const n=await he(`${ge}?q=${e}`,t);return await pe(1e3),n},_e=(e,t)=>{let n;return function(...s){n&&clearTimeout(n),n=setTimeout(e,t,...s)}};function D(e,t,n){const s=e.slice();return s[5]=t[n],s}function F(e){let t,n,s,l,u,f=e[5].name+"",h,g,r,i=e[5].email+"",o,p;return{c(){t=_("li"),n=_("img"),l=v(),u=_("span"),h=x(f),g=v(),r=_("em"),o=x(i),p=v(),I(n.src,s=e[5].avatarUrl)||a(n,"src",s),a(n,"class","user-avatar svelte-1omjy88"),a(n,"alt",""),a(u,"class","user-name svelte-1omjy88"),a(r,"class","user-email svelte-1omjy88"),a(t,"class","suggest-item svelte-1omjy88")},m(c,m){U(c,t,m),d(t,n),d(t,l),d(t,u),d(u,h),d(t,g),d(t,r),d(r,o),d(t,p)},p(c,m){m&1&&!I(n.src,s=c[5].avatarUrl)&&a(n,"src",s),m&1&&f!==(f=c[5].name+"")&&T(h,f),m&1&&i!==(i=c[5].email+"")&&T(o,i)},d(c){c&&O(t)}}}function ye(e){let t,n,s,l,u,f,h,g,r=R(e[0]),i=[];for(let o=0;o<r.length;o+=1)i[o]=F(D(e,r,o));return{c(){t=_("div"),n=_("label"),s=x(`🔎
    `),l=_("input"),u=v(),f=_("ul");for(let o=0;o<i.length;o+=1)i[o].c();a(l,"class","suggest-input svelte-1omjy88"),a(l,"type","text"),a(l,"placeholder","Example 'Brandon Crona'"),a(n,"class","suggest-label svelte-1omjy88"),a(f,"class","suggest-list svelte-1omjy88"),a(t,"class","suggest svelte-1omjy88")},m(o,p){U(o,t,p),d(t,n),d(n,s),d(n,l),d(t,u),d(t,f);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(f,null);h||(g=ne(l,"input",e[1]),h=!0)},p(o,[p]){if(p&1){r=R(o[0]);let c;for(c=0;c<r.length;c+=1){const m=D(o,r,c);i[c]?i[c].p(m,p):(i[c]=F(m),i[c].c(),i[c].m(f,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}},i:b,o:b,d(o){o&&O(t),te(i,o),h=!1,g()}}}function $e(e,t,n){let s=[],l=new AbortController,u=null;const f=_e(async g=>{console.debug("piecioshka, displayUsers",{phrase:g}),u&&(l.abort(),l=new AbortController);try{u=me(g,{signal:l.signal}),n(0,s=await u)}catch{}u=null},500);return[s,g=>{const r=g.target.value.trim();console.debug("piecioshka, onChange",{phrase:r}),n(0,s.length=0,s),r&&f(r)}]}class ve extends X{constructor(t){super(),W(this,t,$e,ye,z,{})}}function we(e){let t,n,s,l=" ",u,f,h,g,r,i;return r=new ve({}),{c(){t=_("div"),n=_("h1"),s=x("Demo app with Suggest AutoComplete in"),u=x(l),f=v(),h=_("a"),h.textContent="Svelte",g=v(),fe(r.$$.fragment),a(h,"href","https://svelte.dev/"),a(h,"target","blank"),a(h,"rel","outerlink"),a(h,"class","svelte-g894dw"),a(n,"class","svelte-g894dw"),a(t,"id","app"),a(t,"class","svelte-g894dw")},m(o,p){U(o,t,p),d(t,n),d(n,s),d(n,u),d(n,f),d(n,h),d(t,g),J(r,t,null),i=!0},p:b,i(o){i||(H(r.$$.fragment,o),i=!0)},o(o){ce(r.$$.fragment,o),i=!1},d(o){o&&O(t),Q(r)}}}class be extends X{constructor(t){super(),W(this,t,null,we,z,{})}}new be({target:document.getElementById("root")});
