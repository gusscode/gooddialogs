import{_ as t,c as s,o as i,a2 as a}from"./chunks/framework.hN3_JQ2W.js";const E=JSON.parse('{"title":"Dialogs","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}'),e={name:"README.md"},d=a(`<h1 id="dialogs" tabindex="-1">Dialogs <a class="header-anchor" href="#dialogs" aria-label="Permalink to &quot;Dialogs&quot;">​</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gooddialogs</span></span></code></pre></div><h2 id="import-single" tabindex="-1">Import single <a class="header-anchor" href="#import-single" aria-label="Permalink to &quot;Import single&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {goodDialogs} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="import-and-create-instance" tabindex="-1">Import and create instance <a class="header-anchor" href="#import-and-create-instance" aria-label="Permalink to &quot;Import and create instance&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {GoodDialogs} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gooddialogs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> goodDialogs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GoodDialogs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="with-options" tabindex="-1">With Options <a class="header-anchor" href="#with-options" aria-label="Permalink to &quot;With Options&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Options */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="confirm-dialog" tabindex="-1">Confirm Dialog <a class="header-anchor" href="#confirm-dialog" aria-label="Permalink to &quot;Confirm Dialog&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> resDialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mensaje&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="option-properties" tabindex="-1">Option Properties <a class="header-anchor" href="#option-properties" aria-label="Permalink to &quot;Option Properties&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Explanation</th></tr></thead><tbody><tr><td><code>alertClass</code></td><td><code>string</code></td><td>Additional CSS class for the alert.</td></tr><tr><td><code>alertIn</code></td><td><code>string</code></td><td>Defines the entry animation for the alert.</td></tr><tr><td><code>alertOut</code></td><td><code>string</code></td><td>Defines the exit animation for the alert.</td></tr><tr><td><code>cancelButtonClass</code></td><td><code>string</code></td><td>CSS class for the cancellation button.</td></tr><tr><td><code>cancelButtonText</code></td><td><code>string</code></td><td>Text for the cancellation button.</td></tr><tr><td><code>confirmButtonClass</code></td><td><code>string</code></td><td>CSS class for the confirmation button.</td></tr><tr><td><code>confirmButtonText</code></td><td><code>string</code></td><td>Text for the confirmation button.</td></tr><tr><td><code>containerClass</code></td><td><code>string</code></td><td>CSS class for the alert container.</td></tr><tr><td><code>darkForce</code></td><td><code>boolean</code></td><td>Forces the use of the dark theme.</td></tr><tr><td><code>divIconClass</code></td><td><code>string</code></td><td>CSS class for the icon within the alert.</td></tr><tr><td><code>footerClass</code></td><td><code>string</code></td><td>CSS class for the alert footer.</td></tr><tr><td><code>lightForce</code></td><td><code>boolean</code></td><td>Forces the use of the light theme.</td></tr><tr><td><code>onConfirm</code></td><td><code>() =&gt; void</code></td><td>Function that executes when the user confirms the alert.</td></tr><tr><td><code>persistent</code></td><td><code>boolean</code></td><td>Indicates whether the alert should remain visible until the user manually closes it.</td></tr><tr><td><code>position</code></td><td><code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;center&#39; | &#39;top-left&#39; | &#39;top-center&#39; | &#39;top-right&#39;</code></td><td>Defines the position of the alert on the screen.</td></tr><tr><td><code>subtitle</code></td><td><code>string | null</code></td><td>Subtitle of the alert.</td></tr><tr><td><code>theme</code></td><td><code>OptionTheme</code></td><td>Theme of the alert, defined by <code>OptionTheme</code>.</td></tr><tr><td><code>timer</code></td><td><code>number | null</code></td><td>Sets the time in milliseconds before the alert automatically closes.</td></tr><tr><td><code>title</code></td><td><code>string | null</code></td><td>Title of the alert.</td></tr></tbody></table>`,15),o=[d];function n(l,h,r,c,p,k){return i(),s("div",null,o)}const u=t(e,[["render",n]]);export{E as __pageData,u as default};
