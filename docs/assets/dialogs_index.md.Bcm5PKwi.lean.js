import{d as f,o as p,c,l as e,n as x,r as C,_ as D,j as d,I as h,a,a3 as n,a4 as B,F as _,E as T,a5 as r,m as y,w as u,t as V,a2 as b}from"./chunks/framework.nAwuA4F5.js";import{G as A,g as v,a as S}from"./chunks/GToggleDarkMode.ClznvvR7.js";const w={style:{display:"flex","align-items":"center",gap:"16px"}},q=f({__name:"GToggle",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(E,{emit:g}){const t=g;return(l,k)=>(p(),c("div",w,[e("div",{class:"g-toggle-container",onClick:k[0]||(k[0]=F=>t("update:modelValue",!l.modelValue))},[e("div",{class:x(["g-toggle-lever",l.modelValue?"g-toggle-lever-active":"g-toggle-lever-inactive"])},null,2)]),C(l.$slots,"default",{},void 0,!0)]))}}),m=D(q,[["__scopeId","data-v-6c937a14"]]),P={style:{display:"flex","flex-direction":"column"}},I=["value"],U={style:{display:"grid",gap:"8px","margin-top":"16px"}},M={style:{display:"flex",gap:"16px"}},G={style:{display:"flex",gap:"16px"}},O={style:{display:"flex",gap:"16px"}},$={style:{display:"flex",gap:"16px"}},N={style:{display:"flex",gap:"16px"}},L=f({__name:"GoodDialog",setup(E){const g=d(["gd-theme-indigo","gd-theme-primary","gd-theme-blue"]);d("gd-theme-indigo");const t=d({theme:"gd-theme-indigo",darkForce:!1,lightForce:!1,position:"center",persistent:!1,timer:null,title:"Title",subtitle:"Subtitle"}),l=d("Message");async function k(){await new S().confirm(l.value,t.value)}return d(!1),(F,s)=>(p(),c("main",null,[e("section",P,[e("div",null,[h(A)]),e("div",null,[a(" Theme: "),n(e("select",{style:{"margin-top":"16px","margin-bottom":"16px"},name:"",id:"","onUpdate:modelValue":s[0]||(s[0]=i=>t.value.theme=i)},[(p(!0),c(_,null,T(g.value,(i,o)=>(p(),c("option",{value:i},V(i),9,I))),256))],512),[[B,t.value.theme]])]),e("div",null,[e("button",{class:"gd-v-button",onClick:k},"Launch Dialog")])]),e("section",U,[e("div",M,[a(" Message: "),n(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},null,512),[[r,l.value]])]),e("div",G,[a(" Title "),n(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=i=>t.value.title=i)},null,512),[[r,t.value.title]])]),e("div",O,[a(" Subtitle "),n(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=i=>t.value.subtitle=i)},null,512),[[r,t.value.subtitle]])]),e("div",$,[a(" Confirm Button Text "),n(e("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=i=>t.value.confirmButtonText=i),onKeyup:s[5]||(s[5]=i=>{var o;return((o=t.value.confirmButtonText)==null?void 0:o.length)===0?t.value.confirmButtonText=y(v).options.confirmButtonText:""})},null,544),[[r,t.value.confirmButtonText]])]),e("div",N,[a(" Cancel Button Text "),n(e("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=i=>t.value.cancelButtonText=i),onKeyup:s[7]||(s[7]=i=>{var o;return((o=t.value.cancelButtonText)==null?void 0:o.length)===0?t.value.cancelButtonText=y(v).options.cancelButtonText:""})},null,544),[[r,t.value.cancelButtonText]])])]),e("section",null,[e("section",null,[h(m,{modelValue:t.value.darkForce,"onUpdate:modelValue":s[8]||(s[8]=i=>t.value.darkForce=i)},{default:u(()=>[a("Dark Force")]),_:1},8,["modelValue"]),h(m,{modelValue:t.value.lightForce,"onUpdate:modelValue":s[9]||(s[9]=i=>t.value.lightForce=i)},{default:u(()=>[a("Light Force")]),_:1},8,["modelValue"]),h(m,{modelValue:t.value.persistent,"onUpdate:modelValue":s[10]||(s[10]=i=>t.value.persistent=i)},{default:u(()=>[a("Persistent")]),_:1},8,["modelValue"])])])]))}}),j=b(`<h1 id="dialogs" tabindex="-1">Dialogs <a class="header-anchor" href="#dialogs" aria-label="Permalink to &quot;Dialogs&quot;">​</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gooddialogs</span></span></code></pre></div><h2 id="import-single" tabindex="-1">Import single <a class="header-anchor" href="#import-single" aria-label="Permalink to &quot;Import single&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs/dist/base.min.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {goodDialogs} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="import-and-create-instance" tabindex="-1">Import and create instance <a class="header-anchor" href="#import-and-create-instance" aria-label="Permalink to &quot;Import and create instance&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs/dist/base.min.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {GoodDialogs} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> goodDialogs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GoodDialogs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,9),K=e("h2",{id:"with-options",tabindex:"-1"},[a("With Options "),e("a",{class:"header-anchor",href:"#with-options","aria-label":'Permalink to "With Options"'},"​")],-1),W=b('<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Options */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="confirm-dialog" tabindex="-1">Confirm Dialog <a class="header-anchor" href="#confirm-dialog" aria-label="Permalink to &quot;Confirm Dialog&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="option-properties" tabindex="-1">Option Properties <a class="header-anchor" href="#option-properties" aria-label="Permalink to &quot;Option Properties&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td><code>alertClass</code></td><td><code>string</code></td><td>Additional CSS class for the alert.</td></tr><tr><td><code>alertIn</code></td><td><code>string</code></td><td>Defines the entry animation for the alert.</td></tr><tr><td><code>alertOut</code></td><td><code>string</code></td><td>Defines the exit animation for the alert.</td></tr><tr><td><code>cancelButtonClass</code></td><td><code>string</code></td><td>CSS class for the cancellation button.</td></tr><tr><td><code>cancelButtonText</code></td><td><code>string</code></td><td>Text for the cancellation button.</td></tr><tr><td><code>confirmButtonClass</code></td><td><code>string</code></td><td>CSS class for the confirmation button.</td></tr><tr><td><code>confirmButtonText</code></td><td><code>string</code></td><td>Text for the confirmation button.</td></tr><tr><td><code>containerClass</code></td><td><code>string</code></td><td>CSS class for the alert container.</td></tr><tr><td><code>darkForce</code></td><td><code>boolean</code></td><td>Forces the use of the dark theme.</td></tr><tr><td><code>divIconClass</code></td><td><code>string</code></td><td>CSS class for the icon within the alert.</td></tr><tr><td><code>footerClass</code></td><td><code>string</code></td><td>CSS class for the alert footer.</td></tr><tr><td><code>lightForce</code></td><td><code>boolean</code></td><td>Forces the use of the light theme.</td></tr><tr><td><code>onConfirm</code></td><td><code>() =&gt; void</code></td><td>Function that executes when the user confirms the alert.</td></tr><tr><td><code>persistent</code></td><td><code>boolean</code></td><td>Indicates whether the alert should remain visible until the user manually closes it.</td></tr><tr><td><code>position</code></td><td><code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;top-left&#39; | &#39;top-center&#39; | &#39;top-right&#39;</code></td><td>Defines the position of the alert on the screen.</td></tr><tr><td><code>subtitle</code></td><td><code>string | null</code></td><td>Subtitle of the alert.</td></tr><tr><td><code>theme</code></td><td><code>OptionTheme</code></td><td>Theme of the alert, defined by <code>OptionTheme</code>.</td></tr><tr><td><code>timer</code></td><td><code>number | null</code></td><td>Sets the time in milliseconds before the alert automatically closes.</td></tr><tr><td><code>title</code></td><td><code>string | null</code></td><td>Title of the alert.</td></tr></tbody></table>',5),Q=JSON.parse('{"title":"Dialogs","description":"","frontmatter":{},"headers":[],"relativePath":"dialogs/index.md","filePath":"dialogs/index.md"}'),z={name:"dialogs/index.md"},R=f({...z,setup(E){return d(!1),(g,t)=>(p(),c("div",null,[j,e("p",null,[e("button",{class:"gd-v-button",onClick:t[0]||(t[0]=l=>y(v).confirm("Message"))},"Launch Dialog")]),K,h(L),W]))}});export{Q as __pageData,R as default};