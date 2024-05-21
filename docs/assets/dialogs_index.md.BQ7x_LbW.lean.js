import{d as v,o as p,c,l as i,n as C,r as D,_ as x,j as d,I as r,a,a3 as o,a4 as h,m as y,a5 as B,F as A,E as T,w as u,t as _,a2 as f}from"./chunks/framework.BSWk7bsz.js";import{G as V,g as E,a as S}from"./chunks/GToggleDarkMode.Dvj2sB3c.js";const w={style:{display:"flex","align-items":"center",gap:"16px"}},q=v({__name:"GToggle",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(F,{emit:k}){const t=k;return(l,g)=>(p(),c("div",w,[i("div",{class:"g-toggle-container",onClick:g[0]||(g[0]=b=>t("update:modelValue",!l.modelValue))},[i("div",{class:C(["g-toggle-lever",l.modelValue?"g-toggle-lever-active":"g-toggle-lever-inactive"])},null,2)]),D(l.$slots,"default",{},void 0,!0)]))}}),m=x(q,[["__scopeId","data-v-6c937a14"]]),M={style:{display:"grid",gap:"8px","margin-top":"16px"}},P={style:{display:"flex",gap:"16px"}},U={style:{display:"flex",gap:"16px"}},G={style:{display:"flex",gap:"16px"}},I={style:{display:"flex",gap:"16px"}},O={style:{display:"flex",gap:"16px"}},$=["value"],j=v({__name:"GoodDialog",setup(F){const k=d(["gd-theme-indigo","gd-theme-primary","gd-theme-blue"]);d("gd-theme-indigo");const t=d({theme:"gd-theme-indigo",darkForce:!1,lightForce:!1,position:"center",persistent:!1,timer:null,title:"Title",subtitle:"Subtitle"}),l=d("Message");async function g(){await new S().confirm(l.value,t.value)}return d(!1),(b,s)=>(p(),c("main",null,[r(V),i("button",{class:"gd-v-button",onClick:g},"Launch Dialog"),i("section",M,[i("div",P,[a(" Message: "),o(i("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e)},null,512),[[h,l.value]])]),i("div",U,[a(" Title "),o(i("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>t.value.title=e)},null,512),[[h,t.value.title]])]),i("div",G,[a(" Subtitle "),o(i("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=e=>t.value.subtitle=e)},null,512),[[h,t.value.subtitle]])]),i("div",I,[a(" Confirm Button Text "),o(i("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=e=>t.value.confirmButtonText=e),onKeyup:s[4]||(s[4]=e=>{var n;return((n=t.value.confirmButtonText)==null?void 0:n.length)===0?t.value.confirmButtonText=y(E).options.confirmButtonText:""})},null,544),[[h,t.value.confirmButtonText]])]),i("div",O,[a(" Cancel Button Text "),o(i("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=e=>t.value.cancelButtonText=e),onKeyup:s[6]||(s[6]=e=>{var n;return((n=t.value.cancelButtonText)==null?void 0:n.length)===0?t.value.cancelButtonText=y(E).options.cancelButtonText:""})},null,544),[[h,t.value.cancelButtonText]])])]),i("section",null,[o(i("select",{style:{"margin-top":"16px","margin-bottom":"16px"},name:"",id:"","onUpdate:modelValue":s[7]||(s[7]=e=>t.value.theme=e)},[(p(!0),c(A,null,T(k.value,(e,n)=>(p(),c("option",{value:e},_(e),9,$))),256))],512),[[B,t.value.theme]]),i("section",null,[r(m,{modelValue:t.value.darkForce,"onUpdate:modelValue":s[8]||(s[8]=e=>t.value.darkForce=e)},{default:u(()=>[a("Dark Force")]),_:1},8,["modelValue"]),r(m,{modelValue:t.value.lightForce,"onUpdate:modelValue":s[9]||(s[9]=e=>t.value.lightForce=e)},{default:u(()=>[a("Light Force")]),_:1},8,["modelValue"]),r(m,{modelValue:t.value.persistent,"onUpdate:modelValue":s[10]||(s[10]=e=>t.value.persistent=e)},{default:u(()=>[a("Persistent")]),_:1},8,["modelValue"])])])]))}}),N=f(`<h1 id="dialogs" tabindex="-1">Dialogs <a class="header-anchor" href="#dialogs" aria-label="Permalink to &quot;Dialogs&quot;">​</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gooddialogs</span></span></code></pre></div><h2 id="import-single" tabindex="-1">Import single <a class="header-anchor" href="#import-single" aria-label="Permalink to &quot;Import single&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs/dist/base.min.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {goodDialogs} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="import-and-create-instance" tabindex="-1">Import and create instance <a class="header-anchor" href="#import-and-create-instance" aria-label="Permalink to &quot;Import and create instance&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs/dist/base.min.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {GoodDialogs} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> goodDialogs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GoodDialogs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,9),L=i("h2",{id:"with-options",tabindex:"-1"},[a("With Options "),i("a",{class:"header-anchor",href:"#with-options","aria-label":'Permalink to "With Options"'},"​")],-1),W=f('<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Options */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="confirm-dialog" tabindex="-1">Confirm Dialog <a class="header-anchor" href="#confirm-dialog" aria-label="Permalink to &quot;Confirm Dialog&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-a2Xnb" id="tab-M1syvWB" checked="checked"><label for="tab-M1syvWB">config.js</label><input type="radio" name="group-a2Xnb" id="tab-G5A0TjU"><label for="tab-G5A0TjU">ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="option-properties" tabindex="-1">Option Properties <a class="header-anchor" href="#option-properties" aria-label="Permalink to &quot;Option Properties&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td><code>alertClass</code></td><td><code>string</code></td><td>Additional CSS class for the alert.</td></tr><tr><td><code>alertIn</code></td><td><code>string</code></td><td>Defines the entry animation for the alert.</td></tr><tr><td><code>alertOut</code></td><td><code>string</code></td><td>Defines the exit animation for the alert.</td></tr><tr><td><code>cancelButtonClass</code></td><td><code>string</code></td><td>CSS class for the cancellation button.</td></tr><tr><td><code>cancelButtonText</code></td><td><code>string</code></td><td>Text for the cancellation button.</td></tr><tr><td><code>confirmButtonClass</code></td><td><code>string</code></td><td>CSS class for the confirmation button.</td></tr><tr><td><code>confirmButtonText</code></td><td><code>string</code></td><td>Text for the confirmation button.</td></tr><tr><td><code>containerClass</code></td><td><code>string</code></td><td>CSS class for the alert container.</td></tr><tr><td><code>darkForce</code></td><td><code>boolean</code></td><td>Forces the use of the dark theme.</td></tr><tr><td><code>divIconClass</code></td><td><code>string</code></td><td>CSS class for the icon within the alert.</td></tr><tr><td><code>footerClass</code></td><td><code>string</code></td><td>CSS class for the alert footer.</td></tr><tr><td><code>lightForce</code></td><td><code>boolean</code></td><td>Forces the use of the light theme.</td></tr><tr><td><code>onConfirm</code></td><td><code>() =&gt; void</code></td><td>Function that executes when the user confirms the alert.</td></tr><tr><td><code>persistent</code></td><td><code>boolean</code></td><td>Indicates whether the alert should remain visible until the user manually closes it.</td></tr><tr><td><code>position</code></td><td><code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;top-left&#39; | &#39;top-center&#39; | &#39;top-right&#39;</code></td><td>Defines the position of the alert on the screen.</td></tr><tr><td><code>subtitle</code></td><td><code>string | null</code></td><td>Subtitle of the alert.</td></tr><tr><td><code>theme</code></td><td><code>OptionTheme</code></td><td>Theme of the alert, defined by <code>OptionTheme</code>.</td></tr><tr><td><code>timer</code></td><td><code>number | null</code></td><td>Sets the time in milliseconds before the alert automatically closes.</td></tr><tr><td><code>title</code></td><td><code>string | null</code></td><td>Title of the alert.</td></tr></tbody></table>',6),J=JSON.parse('{"title":"Dialogs","description":"","frontmatter":{},"headers":[],"relativePath":"dialogs/index.md","filePath":"dialogs/index.md"}'),K={name:"dialogs/index.md"},H=v({...K,setup(F){return d(!1),(k,t)=>(p(),c("div",null,[N,i("p",null,[i("button",{class:"gd-v-button",onClick:t[0]||(t[0]=l=>y(E).confirm("Message"))},"Launch Dialog")]),L,r(j),W]))}});export{J as __pageData,H as default};
