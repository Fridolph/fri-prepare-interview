import{R as i}from"./chunks/theme.2mmvzF1C.js";import{j as o,a9 as u,aa as c,ab as l,ac as f,ad as d,ae as m,af as h,ag as g,ah as A,ai as v,d as w,u as y,l as C,z as P,aj as R,ak as b,al as j,a8 as D}from"./chunks/framework.CMKosmpS.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),E=w({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return C(()=>{P(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),b(),j(),s.setup&&s.setup(),()=>D(s.Layout)}});async function S(){const e=x(),a=T();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function T(){return g(E)}function x(){let e=o,a;return A(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{S as createApp};
