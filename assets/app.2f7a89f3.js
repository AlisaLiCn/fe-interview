import{Q as o,Z as i,$ as p,a0 as u,a1 as c,a2 as l,a3 as f,a4 as d,a5 as m,a6 as A,a7 as h,a8 as g,n as v,u as P,k as y,v as C,a9 as _,aa as b,ab as w,ac as R}from"./chunks/framework.b959575c.js";import{t as D}from"./chunks/theme.fa1ae2d2.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=r(D),E=v({name:"VitePressApp",setup(){const{site:e}=P();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),b(),w(),s.setup&&s.setup(),()=>R(s.Layout)}});async function j(){const e=T(),a=O();a.provide(p,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:d}),{app:a,router:e,data:t}}function O(){return m(E)}function T(){let e=o,a;return A(t=>{let n=h(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),g(()=>import(n),[])):null},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{j as createApp};