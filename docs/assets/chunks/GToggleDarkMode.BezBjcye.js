import{d as B,j as E,k as x,h as y,o as b,c as k,l as f,n as I,t as w,_ as T}from"./framework.BSWk7bsz.js";const M=`
<svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.5 19.0554C43.4367 19.0554 45.3733 20.2658 46.8258 22.7212L67.2646 56.7858C70.2387 61.6967 67.9562 65.7083 62.25 65.7083H20.75C15.0437 65.7083 12.7612 61.6967 15.7008 56.8204L36.1396 22.7558C37.6267 20.2658 39.5633 19.0554 41.5 19.0554ZM41.5 12.1387C37.0042 12.1387 32.9233 14.6979 30.2258 19.1592L9.78708 53.2583C8.26541 55.8175 7.50458 58.4458 7.50458 60.9704C7.50458 62.9071 7.98874 64.8092 8.95708 66.5037C11.1704 70.3771 15.4587 72.625 20.75 72.625H62.25C67.5412 72.625 71.8296 70.3771 74.0429 66.5037C75.0458 64.74 75.53 62.8033 75.4954 60.7975C75.4608 58.3421 74.7 55.7483 73.2129 53.2583L52.7742 19.1937C50.0767 14.6979 45.9958 12.1387 41.5 12.1387ZM46.6875 57.9271C46.6875 57.9271 44.2321 59.1721 42.9871 58.5496C41.7421 57.9271 41.5 56.6821 42.1917 54.5725L43.6096 50.3533C44.9929 46.1342 43.1946 43.16 39.8746 42.9871C35.5171 42.745 32.8887 45.8575 32.8887 45.8575C32.8887 45.8575 35.3442 44.6125 36.5892 45.235C37.8342 45.8575 38.0762 47.1025 37.3846 49.2121L35.9667 53.4312C34.5833 57.6504 36.3817 60.59 39.7017 60.7975C44.0592 61.005 46.6875 57.9271 46.6875 57.9271Z" fill="black"/>
<path d="M41.5 39.0792C43.983 39.0792 45.9958 37.0663 45.9958 34.5833C45.9958 32.1003 43.983 30.0875 41.5 30.0875C39.017 30.0875 37.0042 32.1003 37.0042 34.5833C37.0042 37.0663 39.017 39.0792 41.5 39.0792Z" fill="black"/>
</svg>

`,_=`
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M24.5 0C10.9691 0 0 10.9691 0 24.5C0 38.0309 10.9691 49 24.5 49C38.0309 49 49 38.0309 49 24.5C49 10.9691 38.0309 0 24.5 0ZM24.5 5.32348C35.0909 5.32348 43.6735 13.9118 43.6735 24.5C43.6735 35.0883 35.0909 43.6735 24.5 43.6735C13.9091 43.6735 5.32646 35.0883 5.32646 24.5C5.3265 13.9118 13.9091 5.32348 24.5 5.32348ZM33.8879 12.8661L19.6879 27.069L15.0822 22.4633L10.5632 26.9793L15.1689 31.585L19.7178 36.1339L24.2338 31.6149L38.4367 17.415L33.8879 12.8661Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_4_2">
<rect width="49" height="49" fill="white"/>
</defs>
</svg>

`,O=`
<svg width="50" height="50" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="black"/>
</svg>
`,o={infoIcon:M,okIcon:_,cancelIcon:O};class F{constructor(t){this.createComponent=e=>{const l={alertIn:(e==null?void 0:e.alertIn)??this.options.alertIn,alertOut:(e==null?void 0:e.alertOut)??this.options.alertOut,position:(e==null?void 0:e.position)??this.options.position,title:(e==null?void 0:e.title)??this.options.title,subtitle:(e==null?void 0:e.subtitle)??this.options.subtitle,darkForce:(e==null?void 0:e.darkForce)??this.options.darkForce,lightForce:(e==null?void 0:e.lightForce)??this.options.lightForce,containerClass:(e==null?void 0:e.containerClass)??this.options.containerClass,theme:(e==null?void 0:e.theme)??this.options.theme,alertClass:(e==null?void 0:e.alertClass)??this.options.alertClass,footerClass:(e==null?void 0:e.footerClass)??this.options.footerClass,divIconClass:(e==null?void 0:e.divIconClass)??this.options.divIconClass,confirmButttonClass:(e==null?void 0:e.confirmButttonClass)??this.options.confirmButttonClass,cancelButtonClass:(e==null?void 0:e.cancelButtonClass)??this.options.cancelButtonClass,confirmButtonText:(e==null?void 0:e.confirmButtonText)??this.options.confirmButtonText,cancelButtonText:(e==null?void 0:e.cancelButtonText)??this.options.cancelButtonText,persistent:(e==null?void 0:e.persistent)??this.options.persistent,onConfirm:e==null?void 0:e.onConfirm},a=document.createElement("div"),c=document.createElement("div"),s=document.createElement("footer"),n=document.createElement("section"),d=document.createElement("div");if(d.innerHTML=o.infoIcon,d.classList.value=l.divIconClass,n.appendChild(d),l.title){const r=document.createElement("h2");r.classList.value="gooddialog-alert-title",r.textContent=l.title,n.appendChild(r)}if(l.subtitle){const r=document.createElement("h3");r.classList.value="gooddialog-alert-subtitle",r.textContent=l.subtitle,n.appendChild(r)}const u=document.createElement("p");u.classList.value="gooddialog-title-message",n.appendChild(u),c.appendChild(n),a.classList.value=l.containerClass+" "+l.theme+" "+(l.darkForce?"dark":"")+" "+(l.lightForce?"light":""),c.classList.value=l.alertClass,c.classList.add(l.alertIn),s.classList.value=l.footerClass,c.appendChild(s),document.documentElement.appendChild(a),l.persistent||a.addEventListener("click",r=>{r.target.classList.contains("gooddialog-container")&&(document.getElementsByClassName("gooddialog-container"),a.classList.add("gooddialog-container-fade-out"),a.addEventListener("animationend",()=>{a.style.backgroundColor="rgba(0, 0, 0, 0.0)"}),c.classList.add(l.alertOut),c.addEventListener("animationend",()=>{a.remove()}))}),document.getElementsByClassName("gooddialog-container").length>1||a.classList.add("gooddialog-container-fade-in"),a.appendChild(c);const m=document.createElement("button");m.classList.value=l.confirmButttonClass,m.textContent=l.confirmButtonText,m.addEventListener("click",()=>{document.getElementsByClassName("gooddialog-container").length>0?a.style.backgroundColor="rgba(0, 0, 0, 0.0)":(a.classList.add("gooddialog-container-fade-out"),a.addEventListener("animationend",()=>{a.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),c.classList.add(l.alertOut),c.addEventListener("animationend",()=>{a.remove()}),l.onConfirm&&l.onConfirm()}),s.appendChild(m);const i=document.createElement("button");return i.classList.value=l.cancelButtonClass,i.textContent=l.cancelButtonText,i.addEventListener("click",()=>{document.getElementsByClassName("gooddialog-container").length>0?a.style.backgroundColor="rgba(0, 0, 0, 0.0)":(a.classList.add("gooddialog-container-fade-out"),a.addEventListener("animationend",()=>{a.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),c.classList.add(l.alertOut),c.addEventListener("animationend",()=>{a.remove()})}),s.appendChild(i),s.addEventListener("keydown",r=>{if(r.key==="Tab"){r.preventDefault();const g=s.querySelectorAll(".gooddialog-button-event"),v=document.activeElement,L=(Array.from(g).indexOf(v)+1)%g.length;g[L].focus()}r.key==="Escape"&&(document.getElementsByClassName("gooddialog-container").length>0?a.style.backgroundColor="rgba(0, 0, 0, 0.0)":(a.classList.add("gooddialog-container-fade-out"),a.addEventListener("animationend",()=>{a.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),c.classList.add(l.alertOut),c.addEventListener("animationend",()=>{a.remove()}))}),{footer:s,container:a,alert:c,confirmButton:m,cancelButton:i,divIcon:d,titleMessage:u}},this.confirm=async(e,l,a)=>{const{alert:c,cancelButton:s,confirmButton:n,container:d,divIcon:u,footer:C,titleMessage:m}=this.createComponent(l);return n.focus(),n.tabIndex=1,s.tabIndex=2,m.textContent=e,new Promise(i=>{n.addEventListener("click",()=>{a&&a(n),i(!0)}),s.addEventListener("click",()=>{i(!1)})})},this.options={alertIn:(t==null?void 0:t.alertIn)??"goodalert-animation-aparecer",alertOut:(t==null?void 0:t.alertOut)??"goodalert-animation-desaparecer",position:(t==null?void 0:t.position)??"center",timer:(t==null?void 0:t.timer)??null,title:(t==null?void 0:t.title)??null,subtitle:(t==null?void 0:t.subtitle)??null,darkForce:(t==null?void 0:t.darkForce)??!1,lightForce:(t==null?void 0:t.lightForce)??!1,containerClass:(t==null?void 0:t.containerClass)??"gooddialog-container",theme:(t==null?void 0:t.theme)??"gd-theme-indigo",alertClass:(t==null?void 0:t.alertClass)??"gooddialog-alert",confirmButttonClass:(t==null?void 0:t.confirmButttonClass)??"gooddialog-confirm-button gooddialog-button-event",cancelButtonClass:(t==null?void 0:t.cancelButtonClass)??"gooddialog-cancel-button gooddialog-button-event",footerClass:(t==null?void 0:t.footerClass)??"gooddialog-footer",divIconClass:(t==null?void 0:t.divIconClass)??"gooddialog-alert-div-icon gooddialog-svg-container",confirmButtonText:(t==null?void 0:t.confirmButtonText)??"Confirm",cancelButtonText:(t==null?void 0:t.cancelButtonText)??"Cancel",persistent:(t==null?void 0:t.persistent)??!1}}async withOptions(t,e,l){const{alert:a,cancelButton:c,confirmButton:s,container:n,divIcon:d,footer:u,titleMessage:C}=this.createComponent(l);return C.textContent=t,u.classList.value="gooddialog-footer-1-col",u.removeChild(c),u.removeChild(s),new Promise(m=>{e.forEach(i=>{const r=document.createElement("button");i.buttonClass?r.classList.value=i.buttonClass:r.classList.value=(l==null?void 0:l.confirmButttonClass)??"gooddialog-confirm-button",r.classList.add("gooddialog-button-event"),r.textContent=i.label,r.addEventListener("click",()=>{i.onClick&&i.onClick(i.value),document.getElementsByClassName("gooddialog-container").length>=1?n.style.backgroundColor="rgba(0, 0, 0, 0.0)":(n.classList.add("gooddialog-container-fade-out"),n.addEventListener("animationend",()=>{n.style.backgroundColor="rgba(0, 0, 0, 0.0)"})),a.classList.add(l==null?void 0:l.alertOut),a.addEventListener("animationend",()=>{n.remove()}),m(i.value)}),u.appendChild(r)})})}success(t,e){const{alert:l,cancelButton:a,confirmButton:c,container:s,divIcon:n,footer:d,titleMessage:u}=this.createComponent(e);n.innerHTML=o.okIcon,n.style.width="100%",n.style.height="80px",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.classList.value="gooddialog-svg-container-ok",u.textContent=t??"Success",c.textContent=(e==null?void 0:e.confirmButtonText)??"Ok",d.removeChild(a),d.style.display="flex",d.style.alignItems="center",d.style.justifyContent="center",d.classList.value="",c.focus()}cancelled(t,e){const{alert:l,cancelButton:a,confirmButton:c,container:s,divIcon:n,footer:d,titleMessage:u}=this.createComponent(e);n.innerHTML=o.cancelIcon,n.style.width="100%",n.style.height="80px",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.classList.value="gooddialog-svg-container-cancel",u.textContent=t??"Cancelled",c.textContent=(e==null?void 0:e.confirmButtonText)??"Ok",d.removeChild(a),d.style.display="flex",d.style.alignItems="center",d.style.justifyContent="center",d.classList.value="",c.focus()}createNotification(t,e){const l={position:(e==null?void 0:e.position)??"top-right",timer:(e==null?void 0:e.timer)??this.options.timer,title:(e==null?void 0:e.title)??this.options.title,subtitle:(e==null?void 0:e.subtitle)??this.options.subtitle,darkForce:(e==null?void 0:e.darkForce)??this.options.darkForce,containerClass:(e==null?void 0:e.containerClass)??this.options.containerClass,theme:(e==null?void 0:e.theme)??this.options.theme,alertClass:(e==null?void 0:e.alertClass)??this.options.alertClass,footerClass:(e==null?void 0:e.footerClass)??this.options.footerClass,divIconClass:(e==null?void 0:e.divIconClass)??this.options.divIconClass,confirmButttonClass:(e==null?void 0:e.confirmButttonClass)??this.options.confirmButttonClass,cancelButtonClass:(e==null?void 0:e.cancelButtonClass)??this.options.cancelButtonClass,confirmButtonText:(e==null?void 0:e.confirmButtonText)??this.options.confirmButtonText,cancelButtonText:(e==null?void 0:e.cancelButtonText)??this.options.cancelButtonText,persistent:(e==null?void 0:e.persistent)??this.options.persistent,onConfirm:e==null?void 0:e.onConfirm};let a=document.getElementById("gooddialog-notification-container-"+l.position);a||(a=document.createElement("div"),a.id="gooddialog-notification-container-"+l.position,a.classList.value="gooddialog-notification-container-"+l.position,document.documentElement.appendChild(a));const c=document.createElement("div");c.classList.value="gooddialog-notification "+l.theme+" goodalert-animation-aparecer "+(l.darkForce?"dark":""),c.textContent=t??"";const s=l.timer??5e3;setTimeout(()=>{c.style.transform="translateX(100px)",c.style.opacity="0",c.addEventListener("transitionend",()=>{c.remove(),document.getElementsByClassName("gooddialog-notification").length<1&&a.remove()})},s),a.appendChild(c)}}const G=new F,N={style:{display:"flex","align-items":"center",gap:"16px"}},Z=B({__name:"GToggleDarkMode",emits:["update:modelValue"],setup(h,{emit:t}){const e=E();x(()=>{e.value=document.documentElement.classList.contains("dark")});const l=y(()=>e.value?"Dark Mode":"Light Mode");function a(){e.value=!e.value,e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return(c,s)=>(b(),k("div",N,[f("div",{class:"g-toggle-container",onClick:a},[f("div",{class:I(["g-toggle-lever",e.value?"g-toggle-lever-active":"g-toggle-lever-inactive"])},null,2)]),f("div",null,w(l.value),1)]))}}),A=T(Z,[["__scopeId","data-v-c89f9532"]]);export{A as G,F as a,G as g};
