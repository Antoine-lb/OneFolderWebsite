import{S as T,i as q,s as z,k as E,r as F,a as $,l as M,m as B,u as G,c as d,h as m,p as P,b as h,H as b,v as I,n as R,D as L,z as w,A,B as k,g as _,f as N,E as j,F as J,G as K,d as p,C as v,M as O,w as Q}from"../chunks/index.b52223fa.js";import{P as U,A as V,a as W}from"../chunks/ArticleMeta.3d7cbb0f.js";function H(o){let t,n,i,s;return{c(){t=E("br"),n=$(),i=E("a"),s=F("Read More →"),this.h()},l(a){t=M(a,"BR",{}),n=d(a),i=M(a,"A",{class:!0,href:!0});var e=B(i);s=G(e,"Read More →"),e.forEach(m),this.h()},h(){P(i,"class","font-mono text-[#666]"),P(i,"href",o[2])},m(a,e){h(a,t,e),h(a,n,e),h(a,i,e),b(i,s)},p:R,d(a){a&&m(t),a&&m(n),a&&m(i)}}}function X(o){let t,n,i,s=o[1]&&H(o);return{c(){t=E("p"),n=F(o[0]),i=$(),s&&s.c(),this.h()},l(a){t=M(a,"P",{class:!0});var e=B(t);n=G(e,o[0]),i=d(e),s&&s.l(e),e.forEach(m),this.h()},h(){P(t,"class","max-w-xl text-lg text-[#333]")},m(a,e){h(a,t,e),b(t,n),b(t,i),s&&s.m(t,null)},p(a,[e]){e&1&&I(n,a[0]),a[1]?s?s.p(a,e):(s=H(a),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:R,o:R,d(a){a&&m(t),s&&s.d()}}}function Y(o,t,n){let{description:i}=t,{slug:s=""}=t;const a=s&&`/blog/${s}`;return o.$$set=e=>{"description"in e&&n(0,i=e.description),"slug"in e&&n(1,s=e.slug)},[i,s,a]}class Z extends T{constructor(t){super(),q(this,t,Y,X,z,{description:0,slug:1})}}function S(o,t,n){const i=o.slice();return i[3]=t[n].slug,i[4]=t[n].title,i[5]=t[n].author,i[6]=t[n].description,i[7]=t[n].date,i}function D(o){let t,n,i,s,a,e,g;return n=new V({props:{slug:o[3],title:o[4]}}),s=new W({props:{author:o[5],date:o[7]}}),e=new Z({props:{description:o[6],slug:o[3]}}),{c(){t=E("article"),w(n.$$.fragment),i=$(),w(s.$$.fragment),a=$(),w(e.$$.fragment),this.h()},l(c){t=M(c,"ARTICLE",{class:!0});var r=B(t);A(n.$$.fragment,r),i=d(r),A(s.$$.fragment,r),a=d(r),A(e.$$.fragment,r),r.forEach(m),this.h()},h(){P(t,"class","py-3")},m(c,r){h(c,t,r),k(n,t,null),b(t,i),k(s,t,null),b(t,a),k(e,t,null),g=!0},p(c,r){const l={};r&1&&(l.slug=c[3]),r&1&&(l.title=c[4]),n.$set(l);const f={};r&1&&(f.author=c[5]),r&1&&(f.date=c[7]),s.$set(f);const u={};r&1&&(u.description=c[6]),r&1&&(u.slug=c[3]),e.$set(u)},i(c){g||(_(n.$$.fragment,c),_(s.$$.fragment,c),_(e.$$.fragment,c),g=!0)},o(c){p(n.$$.fragment,c),p(s.$$.fragment,c),p(e.$$.fragment,c),g=!1},d(c){c&&m(t),v(n),v(s),v(e)}}}function y(o){let t,n,i,s;t=new U({props:{title:"Home",description:"An awesome blog about development with Svelte"}});let a=o[0].posts,e=[];for(let l=0;l<a.length;l+=1)e[l]=D(S(o,a,l));const g=l=>p(e[l],1,1,()=>{e[l]=null}),c=o[2].default,r=L(c,o,o[1],null);return{c(){w(t.$$.fragment),n=$();for(let l=0;l<e.length;l+=1)e[l].c();i=$(),r&&r.c()},l(l){A(t.$$.fragment,l),n=d(l);for(let f=0;f<e.length;f+=1)e[f].l(l);i=d(l),r&&r.l(l)},m(l,f){k(t,l,f),h(l,n,f);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(l,f);h(l,i,f),r&&r.m(l,f),s=!0},p(l,[f]){if(f&1){a=l[0].posts;let u;for(u=0;u<a.length;u+=1){const C=S(l,a,u);e[u]?(e[u].p(C,f),_(e[u],1)):(e[u]=D(C),e[u].c(),_(e[u],1),e[u].m(i.parentNode,i))}for(Q(),u=a.length;u<e.length;u+=1)g(u);N()}r&&r.p&&(!s||f&2)&&j(r,c,l,l[1],s?K(c,l[1],f,null):J(l[1]),null)},i(l){if(!s){_(t.$$.fragment,l);for(let f=0;f<a.length;f+=1)_(e[f]);_(r,l),s=!0}},o(l){p(t.$$.fragment,l),e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)p(e[f]);p(r,l),s=!1},d(l){v(t,l),l&&m(n),O(e,l),l&&m(i),r&&r.d(l)}}}function x(o,t,n){let{$$slots:i={},$$scope:s}=t,{data:a}=t;return o.$$set=e=>{"data"in e&&n(0,a=e.data),"$$scope"in e&&n(1,s=e.$$scope)},[a,s,i]}class le extends T{constructor(t){super(),q(this,t,x,y,z,{data:0})}}export{le as component};