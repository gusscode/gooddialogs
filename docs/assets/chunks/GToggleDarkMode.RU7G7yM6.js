import{d as b,j as E,k,h as I,o as M,c as T,l as x,n as w,t as F,_}from"./framework.BSWk7bsz.js";const O=`
<svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.5 19.0554C43.4367 19.0554 45.3733 20.2658 46.8258 22.7212L67.2646 56.7858C70.2387 61.6967 67.9562 65.7083 62.25 65.7083H20.75C15.0437 65.7083 12.7612 61.6967 15.7008 56.8204L36.1396 22.7558C37.6267 20.2658 39.5633 19.0554 41.5 19.0554ZM41.5 12.1387C37.0042 12.1387 32.9233 14.6979 30.2258 19.1592L9.78708 53.2583C8.26541 55.8175 7.50458 58.4458 7.50458 60.9704C7.50458 62.9071 7.98874 64.8092 8.95708 66.5037C11.1704 70.3771 15.4587 72.625 20.75 72.625H62.25C67.5412 72.625 71.8296 70.3771 74.0429 66.5037C75.0458 64.74 75.53 62.8033 75.4954 60.7975C75.4608 58.3421 74.7 55.7483 73.2129 53.2583L52.7742 19.1937C50.0767 14.6979 45.9958 12.1387 41.5 12.1387ZM46.6875 57.9271C46.6875 57.9271 44.2321 59.1721 42.9871 58.5496C41.7421 57.9271 41.5 56.6821 42.1917 54.5725L43.6096 50.3533C44.9929 46.1342 43.1946 43.16 39.8746 42.9871C35.5171 42.745 32.8887 45.8575 32.8887 45.8575C32.8887 45.8575 35.3442 44.6125 36.5892 45.235C37.8342 45.8575 38.0762 47.1025 37.3846 49.2121L35.9667 53.4312C34.5833 57.6504 36.3817 60.59 39.7017 60.7975C44.0592 61.005 46.6875 57.9271 46.6875 57.9271Z" fill="black"/>
<path d="M41.5 39.0792C43.983 39.0792 45.9958 37.0663 45.9958 34.5833C45.9958 32.1003 43.983 30.0875 41.5 30.0875C39.017 30.0875 37.0042 32.1003 37.0042 34.5833C37.0042 37.0663 39.017 39.0792 41.5 39.0792Z" fill="black"/>
</svg>

`,A=`
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M24.5 0C10.9691 0 0 10.9691 0 24.5C0 38.0309 10.9691 49 24.5 49C38.0309 49 49 38.0309 49 24.5C49 10.9691 38.0309 0 24.5 0ZM24.5 5.32348C35.0909 5.32348 43.6735 13.9118 43.6735 24.5C43.6735 35.0883 35.0909 43.6735 24.5 43.6735C13.9091 43.6735 5.32646 35.0883 5.32646 24.5C5.3265 13.9118 13.9091 5.32348 24.5 5.32348ZM33.8879 12.8661L19.6879 27.069L15.0822 22.4633L10.5632 26.9793L15.1689 31.585L19.7178 36.1339L24.2338 31.6149L38.4367 17.415L33.8879 12.8661Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_4_2">
<rect width="49" height="49" fill="white"/>
</defs>
</svg>

`,o=`
<svg width="50" height="50" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="black"/>
</svg>
`,y={infoIcon:O,okIcon:A,cancelIcon:o};class D{constructor(a){this.createComponent=e=>{const l={messageMaxWidth:(e==null?void 0:e.messageMaxWidth)??this.options.messageMaxWidth,messageAlign:(e==null?void 0:e.messageAlign)??this.options.messageAlign,instance:(e==null?void 0:e.instance)??this.options.instance,type:(e==null?void 0:e.type)??void 0,alertIn:(e==null?void 0:e.alertIn)??this.options.alertIn,alertOut:(e==null?void 0:e.alertOut)??this.options.alertOut,position:(e==null?void 0:e.position)??this.options.position,title:(e==null?void 0:e.title)??this.options.title,subtitle:(e==null?void 0:e.subtitle)??this.options.subtitle,darkForce:(e==null?void 0:e.darkForce)??this.options.darkForce,lightForce:(e==null?void 0:e.lightForce)??this.options.lightForce,containerClass:(e==null?void 0:e.containerClass)??this.options.containerClass,theme:(e==null?void 0:e.theme)??this.options.theme,alertClass:(e==null?void 0:e.alertClass)??this.options.alertClass,footerClass:(e==null?void 0:e.footerClass)??this.options.footerClass,divIconClass:(e==null?void 0:e.divIconClass)??this.options.divIconClass,confirmButttonClass:(e==null?void 0:e.confirmButttonClass)??this.options.confirmButttonClass,cancelButtonClass:(e==null?void 0:e.cancelButtonClass)??this.options.cancelButtonClass,confirmButtonText:(e==null?void 0:e.confirmButtonText)??this.options.confirmButtonText,cancelButtonText:(e==null?void 0:e.cancelButtonText)??this.options.cancelButtonText,persistent:(e==null?void 0:e.persistent)??this.options.persistent,onConfirm:e==null?void 0:e.onConfirm},t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("footer"),c=document.createElement("section"),r=document.createElement("div");if(r.innerHTML=y.infoIcon,r.classList.value=l.divIconClass,c.appendChild(r),c.style.maxWidth=l.messageMaxWidth,c.style.display="flex",c.style.justifyContent="center",c.style.flexDirection="column",l.title){const i=document.createElement("h2");i.classList.value="gooddialog-alert-title",i.textContent=l.title,c.appendChild(i)}if(l.subtitle){const i=document.createElement("h3");i.classList.value="gooddialog-alert-subtitle",i.textContent=l.subtitle,c.appendChild(i)}const g=document.createElement("p");g.classList.value="gooddialog-title-message",g.style.textAlign=l.messageAlign,c.appendChild(g),n.appendChild(c),t.classList.value=l.containerClass+" "+l.theme+" "+(l.darkForce?"dark":"")+" "+(l.lightForce?"light":""),n.classList.value=l.alertClass,n.classList.add(l.alertIn),d.classList.value=l.footerClass;const f=document.createElement("div");n.appendChild(f),n.appendChild(d),l.type&&t.classList.add("gooddialog-"+l.type),l.persistent||t.addEventListener("click",i=>{i.target.classList.contains("gooddialog-container")&&(document.getElementsByClassName("gooddialog-container"),t.classList.add("gooddialog-container-fade-out"),t.addEventListener("animationend",()=>{t.style.backgroundColor="rgba(0, 0, 0, 0.0)"}),n.classList.add(l.alertOut),n.addEventListener("animationend",()=>{document.body.classList.remove("gooddialog-html-element"),t.remove()}))}),document.getElementsByClassName("gooddialog-container").length>1||t.classList.add("gooddialog-container-fade-in"),t.appendChild(n);const s=document.createElement("button");s.classList.value=l.confirmButttonClass,s.textContent=l.confirmButtonText,s.addEventListener("click",()=>{document.getElementsByClassName("gooddialog-container").length>0?t.style.backgroundColor="rgba(0, 0, 0, 0.0)":(t.classList.add("gooddialog-container-fade-out"),t.addEventListener("animationend",()=>{t.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),n.classList.add(l.alertOut),n.addEventListener("animationend",()=>{document.body.classList.remove("gooddialog-html-element"),t.remove()}),l.onConfirm&&l.onConfirm()}),d.appendChild(s);const m=document.createElement("button");return m.classList.value=l.cancelButtonClass,m.textContent=l.cancelButtonText,m.addEventListener("click",()=>{document.getElementsByClassName("gooddialog-container").length>0?t.style.backgroundColor="rgba(0, 0, 0, 0.0)":(t.classList.add("gooddialog-container-fade-out"),t.addEventListener("animationend",()=>{t.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),n.classList.add(l.alertOut),n.addEventListener("animationend",()=>{document.body.classList.remove("gooddialog-html-element"),t.remove()})}),d.appendChild(m),d.addEventListener("keydown",i=>{if(i.key==="Tab"){i.preventDefault();const u=d.querySelectorAll(".gooddialog-button-event"),C=document.activeElement,L=(Array.from(u).indexOf(C)+1)%u.length;u[L].focus()}i.key==="Escape"&&(document.getElementsByClassName("gooddialog-container").length>0?t.style.backgroundColor="rgba(0, 0, 0, 0.0)":(t.classList.add("gooddialog-container-fade-out"),t.addEventListener("animationend",()=>{t.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),n.classList.add(l.alertOut),n.addEventListener("animationend",()=>{document.body.classList.remove("gooddialog-html-element"),t.remove()}))}),l.instance&&(document.body.classList.add("gooddialog-html-element"),document.body.appendChild(t)),{footer:d,container:t,alert:n,confirmButton:s,cancelButton:m,divIcon:r,titleMessage:g,contentDiv:f}},this.confirm=async(e,l,t)=>{const{alert:n,cancelButton:d,confirmButton:c,container:r,divIcon:g,footer:f,titleMessage:v}=this.createComponent(l);return c.focus(),c.tabIndex=1,d.tabIndex=2,v.textContent=e,new Promise(s=>{c.addEventListener("click",()=>{t&&t(c),s(!0)}),d.addEventListener("click",()=>{s(!1)})})},this.form=async(e,l,t)=>{(t==null?void 0:t.messageAlign)??this.options.messageAlign,(t==null?void 0:t.messageMaxWidth)??this.options.messageMaxWidth,(t==null?void 0:t.instance)??this.options.instance,(t==null?void 0:t.type)??this.options.type,t==null||t.position,(t==null?void 0:t.timer)??this.options.timer,(t==null?void 0:t.title)??this.options.title,(t==null?void 0:t.subtitle)??this.options.subtitle,(t==null?void 0:t.darkForce)??this.options.darkForce,(t==null?void 0:t.lightForce)??this.options.lightForce,(t==null?void 0:t.containerClass)??this.options.containerClass,(t==null?void 0:t.theme)??this.options.theme,(t==null?void 0:t.alertClass)??this.options.alertClass,(t==null?void 0:t.footerClass)??this.options.footerClass,(t==null?void 0:t.divIconClass)??this.options.divIconClass,(t==null?void 0:t.confirmButttonClass)??this.options.confirmButttonClass,(t==null?void 0:t.cancelButtonClass)??this.options.cancelButtonClass,(t==null?void 0:t.confirmButtonText)??this.options.confirmButtonText,(t==null?void 0:t.cancelButtonText)??this.options.cancelButtonText,(t==null?void 0:t.persistent)??this.options.persistent,t==null||t.onConfirm;const{alert:n,cancelButton:d,confirmButton:c,container:r,divIcon:g,footer:f,titleMessage:v,contentDiv:s}=this.createComponent(t);return l.forEach((m,i)=>{s.style.display="grid",s.style.gridTemplateColumns="1fr",s.style.gap="12px",s.style.marginBottom="12px";const u=document.createElement("div");u.classList.add("gooddialogs-input-form-item-box");const C=document.createElement("label");C.textContent=m.label,C.setAttribute("for","gooddialogs-item-"+i+"-"+m.type);const h=document.createElement("input");h.type=m.type,h.name=m.name,h.classList.add("gooddialogs-input-form-instance"),h.id="gooddialogs-item-"+i+"-"+m.type,u.appendChild(C),u.appendChild(h),s.appendChild(u)}),c.focus(),c.tabIndex=1,d.tabIndex=2,v.textContent=e,new Promise(m=>{const i={};c.addEventListener("click",()=>{document.querySelectorAll(".gooddialogs-input-form-instance").forEach(C=>{if(C instanceof HTMLInputElement){const h=C.getAttribute("name");let L=C.value;C.type==="checkbox"&&(L=C.checked),h&&(i[h]=L)}}),m(i)}),d.addEventListener("click",()=>{m(!1)})})},this.options={messageAlign:(a==null?void 0:a.messageAlign)??"center",messageMaxWidth:(a==null?void 0:a.messageMaxWidth)??"100%",instance:(a==null?void 0:a.instance)??!0,type:(a==null?void 0:a.type)??void 0,alertIn:(a==null?void 0:a.alertIn)??"goodalert-animation-aparecer",alertOut:(a==null?void 0:a.alertOut)??"goodalert-animation-desaparecer",position:(a==null?void 0:a.position)??"center",timer:(a==null?void 0:a.timer)??null,title:(a==null?void 0:a.title)??null,subtitle:(a==null?void 0:a.subtitle)??null,darkForce:(a==null?void 0:a.darkForce)??!1,lightForce:(a==null?void 0:a.lightForce)??!1,containerClass:(a==null?void 0:a.containerClass)??"gooddialog-container",theme:(a==null?void 0:a.theme)??"gd-theme-indigo",alertClass:(a==null?void 0:a.alertClass)??"gooddialog-alert",confirmButttonClass:(a==null?void 0:a.confirmButttonClass)??"gooddialog-confirm-button gooddialog-button-event",cancelButtonClass:(a==null?void 0:a.cancelButtonClass)??"gooddialog-cancel-button gooddialog-button-event",footerClass:(a==null?void 0:a.footerClass)??"gooddialog-footer",divIconClass:(a==null?void 0:a.divIconClass)??"gooddialog-alert-div-icon gooddialog-svg-container",confirmButtonText:(a==null?void 0:a.confirmButtonText)??"Confirm",cancelButtonText:(a==null?void 0:a.cancelButtonText)??"Cancel",persistent:(a==null?void 0:a.persistent)??!1}}async withOptions(a,e,l){const{alert:t,cancelButton:n,confirmButton:d,container:c,divIcon:r,footer:g,titleMessage:f}=this.createComponent(l);return f.textContent=a,g.classList.value="gooddialog-footer-1-col",g.removeChild(n),g.removeChild(d),new Promise(v=>{e.forEach(s=>{const m=document.createElement("button");s.buttonClass?m.classList.value=s.buttonClass:m.classList.value=(l==null?void 0:l.confirmButttonClass)??"gooddialog-confirm-button",m.classList.add("gooddialog-button-event"),m.textContent=s.label,m.addEventListener("click",()=>{s.onClick&&s.onClick(s.value),document.getElementsByClassName("gooddialog-container").length>=1?c.style.backgroundColor="rgba(0, 0, 0, 0.0)":(c.classList.add("gooddialog-container-fade-out"),c.addEventListener("animationend",()=>{c.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),t.classList.add(l==null?void 0:l.alertOut),t.addEventListener("animationend",()=>{document.body.classList.remove("gooddialog-html-element"),c.remove()}),v(s.value)}),g.appendChild(m)})})}success(a,e){const{alert:l,cancelButton:t,confirmButton:n,container:d,divIcon:c,footer:r,titleMessage:g}=this.createComponent(e);c.innerHTML=y.okIcon,c.style.width="100%",c.style.height="80px",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center",c.classList.value="gooddialog-svg-container-ok",g.textContent=a??"Success",n.textContent=(e==null?void 0:e.confirmButtonText)??"Ok",r.removeChild(t),r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.classList.value="",n.focus()}cancelled(a,e){const{alert:l,cancelButton:t,confirmButton:n,container:d,divIcon:c,footer:r,titleMessage:g}=this.createComponent(e);c.innerHTML=y.cancelIcon,c.style.width="100%",c.style.height="80px",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center",c.classList.value="gooddialog-svg-container-cancel",g.textContent=a??"Cancelled",n.textContent=(e==null?void 0:e.confirmButtonText)??"Ok",r.removeChild(t),r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.classList.value="",n.focus()}createNotification(a,e){const l={instance:(e==null?void 0:e.instance)??this.options.instance,type:(e==null?void 0:e.type)??this.options.type,position:(e==null?void 0:e.position)??"top-right",timer:(e==null?void 0:e.timer)??this.options.timer,title:(e==null?void 0:e.title)??this.options.title,subtitle:(e==null?void 0:e.subtitle)??this.options.subtitle,darkForce:(e==null?void 0:e.darkForce)??this.options.darkForce,lightForce:(e==null?void 0:e.lightForce)??this.options.lightForce,containerClass:(e==null?void 0:e.containerClass)??this.options.containerClass,theme:(e==null?void 0:e.theme)??this.options.theme,alertClass:(e==null?void 0:e.alertClass)??this.options.alertClass,footerClass:(e==null?void 0:e.footerClass)??this.options.footerClass,divIconClass:(e==null?void 0:e.divIconClass)??this.options.divIconClass,confirmButttonClass:(e==null?void 0:e.confirmButttonClass)??this.options.confirmButttonClass,cancelButtonClass:(e==null?void 0:e.cancelButtonClass)??this.options.cancelButtonClass,confirmButtonText:(e==null?void 0:e.confirmButtonText)??this.options.confirmButtonText,cancelButtonText:(e==null?void 0:e.cancelButtonText)??this.options.cancelButtonText,persistent:(e==null?void 0:e.persistent)??this.options.persistent,onConfirm:e==null?void 0:e.onConfirm};let t=document.getElementById("gooddialog-notification-container-"+l.position);t||(t=document.createElement("div"),t.id="gooddialog-notification-container-"+l.position,t.classList.value="gooddialog-notification-container-"+l.position,document.body.appendChild(t));const n=document.createElement("div");n.classList.value="gooddialog-notification "+l.theme+" goodalert-animation-aparecer "+(l.darkForce?"dark":"")+" "+(l.lightForce?"light":""),n.textContent=a??"";const d=document.createElement("button");d.addEventListener("click",r),d.innerHTML=y.cancelIcon,n.appendChild(d),l.type&&n.classList.add("gooddialog-"+l.type);const c=l.timer??5e3;setTimeout(()=>{r()},c);function r(){n.style.transform="translateX(100px)",n.style.opacity="0",n.addEventListener("transitionend",()=>{n.remove(),document.getElementsByClassName("gooddialog-notification").length<1&&t&&t.remove()})}t.appendChild(n)}}const j=new D,N={style:{display:"flex","align-items":"center",gap:"16px"}},W=b({__name:"GToggleDarkMode",emits:["update:modelValue"],setup(B,{emit:a}){const e=E();k(()=>{e.value=document.documentElement.classList.contains("dark")});const l=I(()=>e.value?"Dark Mode":"Light Mode");function t(){e.value=!e.value,e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return(n,d)=>(M(),T("div",N,[x("div",{class:"g-toggle-container",onClick:t},[x("div",{class:w(["g-toggle-lever",e.value?"g-toggle-lever-active":"g-toggle-lever-inactive"])},null,2)]),x("div",null,F(l.value),1)]))}}),G=_(W,[["__scopeId","data-v-c89f9532"]]);export{G,D as a,j as g};