const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-D-qx_WNf.js","assets/vendor-react-DFHPY69B.js","assets/vendor-icons-DnMZd3Dk.js","assets/vendor-supabase-DqvqN50L.js","assets/vendor-6pgEYSA5.js","assets/Register-Cvp8upLc.js","assets/imageOptimizer-B7dhkxfR.js","assets/PlacementQuestionnaire-Bl-zVYOk.js","assets/Dashboard-DBn20Pa6.js","assets/queryCache-9w56PyI2.js","assets/CycleSelector-B0YVOTZX.js","assets/Members-DCUxNxG4.js","assets/Pagination-kQxqtPAr.js","assets/Events-C0mI6Sa3.js","assets/DatePicker-kEb5ri2t.js","assets/DatePicker-CPVejJYq.css","assets/Attendance-Dlh6iZ6J.js","assets/EventSelect-GY4Va00R.js","assets/vendor-scanner-CRRJkh5G.js","assets/Committee-CcDH9IGo.js","assets/Setup-CpCHcoH8.js","assets/Access-B1ZXjl45.js","assets/documentService-DaqVeHEx.js","assets/MyInfo-Dx3Z5owl.js","assets/Messages-DvSzFZ70.js","assets/Tasks-C3rHWBjl.js","assets/Landing-DITfo5Sg.js","assets/PublicEvent-DWTiWe6e.js","assets/Notices-vunUDPSU.js","assets/vendor-markdown-C_9llh6Y.js","assets/PublicNotice-CodqpQ3t.js","assets/ScanAttendance-B_lCiHRH.js","assets/Letters-BsSMZ9cr.js","assets/AssistantPage-BThhPmNW.js","assets/PrivacyPolicy-filGobdr.js","assets/TermsOfService-mGXixRpj.js","assets/Documents-BAj8v6Ky.js"])))=>i.map(i=>d[i]);
var nt=Object.defineProperty;var ot=(r,n,t)=>n in r?nt(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var $e=(r,n,t)=>ot(r,typeof n!="symbol"?n+"":n,t);import{r as a,j as e,R as Je,c as it}from"./vendor-react-DFHPY69B.js";import{c as ct}from"./vendor-supabase-DqvqN50L.js";import{y as lt,j as Z,x as ie,ap as dt,P as ht,E as pt,aA as xt,aN as re,aB as mt,a8 as ft,aD as bt,al as ut,am as gt,F as vt,n as ve,at as Ge,ae as Se,ay as _e,a6 as Ce,a0 as Ke,aG as Ee,a9 as ge,a7 as ye,g as Xe,C as le,ax as Qe,q as Ae,p as yt,f as Ie,Q as Ze,T as jt,aJ as kt,av as wt,m as Nt,as as St,ag as _t,ab as Ct,G as et,d as ze,t as Me,u as be}from"./vendor-icons-DnMZd3Dk.js";import"./vendor-6pgEYSA5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();const Et="modulepreload",At=function(r){return"/"+r},We={},O=function(n,t,c){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),h=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));l=Promise.allSettled(t.map(v=>{if(v=At(v),v in We)return;We[v]=!0;const f=v.endsWith(".css"),E=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${E}`))return;const s=document.createElement("link");if(s.rel=f?"stylesheet":Et,f||(s.as="script"),s.crossOrigin="",s.href=v,h&&s.setAttribute("nonce",h),document.head.appendChild(s),f)return new Promise((b,y)=>{s.addEventListener("load",b),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(i){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=i,window.dispatchEvent(h),!h.defaultPrevented)throw i}return l.then(i=>{for(const h of i||[])h.status==="rejected"&&o(h.reason);return n().catch(o)})},It="https://zbhwelmxdgldbwbnsfhd.supabase.co",Rt="sb_publishable_xPa0SGJFvPb3bqtmcsRkSg_-MlmlDdR",P=ct(It,Rt,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0,storageKey:"adss-auth",storage:window.localStorage}}),Be=10;async function Dt(r,n=[],t="guest"){if(!r||!r.trim())return{success:!1,error:"Message cannot be empty."};const c=n.length>Be?n.slice(n.length-Be):n;try{const{data:l,error:o}=await P.functions.invoke("chat-assistant",{body:{userMessage:r.trim(),history:c,userRole:t}});return o?{success:!1,error:o.message||"Failed to communicate with AI Assistant service."}:l||{success:!1,error:"No response received from AI Assistant service."}}catch(l){return{success:!1,error:l.message||"Unexpected error connecting to AI Assistant."}}}const tt=a.createContext(null),we="adss_ai_assistant_history_v1";function Pt({children:r,role:n="guest"}){const[t,c]=a.useState(()=>{try{const p=sessionStorage.getItem(we);return p?JSON.parse(p):[]}catch{return[]}}),[l,o]=a.useState(""),[i,h]=a.useState(!1),[v,f]=a.useState(!1);a.useEffect(()=>{try{sessionStorage.setItem(we,JSON.stringify(t))}catch{}},[t]);const E=a.useCallback(()=>{f(p=>!p)},[]),s=a.useCallback(()=>{f(!0)},[]),b=a.useCallback(()=>{f(!1)},[]),y=a.useCallback(()=>{c([]);try{sessionStorage.removeItem(we)}catch{}},[]),g=a.useCallback(async(p,L=n)=>{const S=p.trim();if(!S||i)return;const A={role:"user",text:S,id:`u-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(m=>[...m,A]),o(""),h(!0);const C=t.map(m=>({role:m.role==="user"?"user":"model",text:m.text}));try{const m=await Dt(S,C,L),u={role:"assistant",text:m.success?m.text:`⚠️ ${m.error??"Something went wrong. Please try again."}`,id:`a-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(I=>[...I,u])}catch{c(u=>[...u,{role:"assistant",text:"⚠️ Unexpected error connecting to ADSS Intelligence. Please try again.",id:`err-${Date.now()}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}finally{h(!1)}},[i,t,n]),k={messages:t,input:l,setInput:o,loading:i,sendMessage:g,clearChat:y,isWidgetOpen:v,setIsWidgetOpen:f,toggleWidget:E,openWidget:s,closeWidget:b};return e.jsx(tt.Provider,{value:k,children:r})}function Lt(){const r=a.useContext(tt);if(!r)throw new Error("useAiChat must be used within an AiChatProvider");return r}function ce({size:r=20,className:n="",variant:t="brand",animate:c=!1,style:l={}}){const o=t==="monochrome"?"currentColor":"#e4f222",i=t==="monochrome"?"currentColor":"#8a8f98",h=t==="glow"?"drop-shadow(0 0 6px rgba(228, 242, 34, 0.4))":void 0;return e.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`adss-ai-icon ${c?"adss-ai-icon--pulse":""} ${n}`,style:{filter:h,flexShrink:0,...l},"aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"2.5",r:"1.25",fill:i,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"7.25",r:"1.25",fill:i,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"16.75",r:"1.25",fill:i,fillOpacity:"0.5"}),e.jsx("circle",{cx:"12",cy:"21.5",r:"1.25",fill:i,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"16.75",r:"1.25",fill:i,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"7.25",r:"1.25",fill:i,fillOpacity:"0.5"}),e.jsx("line",{x1:"12",y1:"3.75",x2:"12",y2:"7.5",stroke:i,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"12",y1:"16.5",x2:"12",y2:"20.25",stroke:i,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"4.8",y1:"8",x2:"8.5",y2:"10.5",stroke:i,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"19.2",y1:"16",x2:"15.5",y2:"13.5",stroke:i,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("path",{d:"M12 4.5 C12 8.6 15.4 12 19.5 12 C15.4 12 12 15.4 12 19.5 C12 15.4 8.6 12 4.5 12 C8.6 12 12 8.6 12 4.5 Z",fill:o}),e.jsx("circle",{cx:"12",cy:"12",r:"1.75",fill:"#08090a"}),e.jsx("circle",{cx:"12",cy:"12",r:"0.75",fill:"#ffffff"})]})}const Ot=[{tag:"IMPORT",text:"How do I import members via CSV?"},{tag:"ATTENDANCE",text:"How do I generate a QR code for attendance?"},{tag:"ACCESS",text:"How do I invite an editor or manage permissions?"},{tag:"DOCS",text:"How do I upload and restrict society documents?"}],Tt=[{tag:"REGISTRATION",text:"How do I register as an active society member?"},{tag:"COMMITTEE",text:"How do I apply for the Organizing Committee (OC)?"},{tag:"LETTERS",text:"How do I request an official appreciation letter?"},{tag:"QR SCAN",text:"How do I check in for event attendance using QR?"}];function $t({filename:r="event_attendance.csv",csvData:n}){const[t,c]=a.useState(!1),l=()=>{const o=new Blob([n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(o),h=document.createElement("a");h.setAttribute("href",i),h.setAttribute("download",r),document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(i),c(!0),setTimeout(()=>c(!1),2500)};return e.jsx("div",{className:"chat-csv-wrapper",children:e.jsxs("button",{type:"button",onClick:l,className:"chat-csv-btn",title:"Export CSV data",children:[t?e.jsx(Z,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(ht,{className:"w-3.5 h-3.5 chat-csv-icon"}),e.jsx("span",{className:"font-berkeley-mono text-[12px] tracking-tight",children:t?"CSV EXPORTED":"DOWNLOAD ATTENDANCE CSV"}),e.jsx(pt,{className:"w-3 h-3 chat-csv-download-icon ml-auto"})]})})}function zt({code:r}){const[n,t]=a.useState(!1),c=async()=>{try{await navigator.clipboard.writeText(r),t(!0),setTimeout(()=>t(!1),2e3)}catch{}};return e.jsxs("div",{className:"chat-codeblock",children:[e.jsxs("div",{className:"chat-codeblock-header",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-berkeley-mono chat-codeblock-label",children:[e.jsx(xt,{className:"w-3 h-3 chat-codeblock-term-icon"}),e.jsx("span",{children:"SNIPPET"})]}),e.jsxs("button",{type:"button",onClick:c,className:"chat-copy-code-btn",title:"Copy code",children:[n?e.jsx(Z,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(ie,{className:"w-3 h-3"}),e.jsx("span",{className:"text-[10px] font-berkeley-mono",children:n?"COPIED":"COPY"})]})]}),e.jsx("pre",{className:"chat-codeblock-content",children:e.jsx("code",{children:r})})]})}function Mt(r){if(!r)return null;const n=/```(?:csv|text|json|sql|javascript|js)?\n([\s\S]*?)\n```/g,t=[];let c=0,l;for(;(l=n.exec(r))!==null;){const i=r.slice(c,l.index);i&&t.push({type:"text",content:i});const h=l[1].trim();l[0].startsWith("```csv")||h.includes(",")&&(h.toLowerCase().includes("st id")||h.toLowerCase().includes("email")||h.toLowerCase().includes("attended"))?t.push({type:"csv",content:h}):t.push({type:"code",content:h}),c=l.index+l[0].length}const o=r.slice(c);return o&&t.push({type:"text",content:o}),e.jsx(e.Fragment,{children:t.map((i,h)=>{if(i.type==="csv")return e.jsx($t,{csvData:i.content},`csv-${h}`);if(i.type==="code")return e.jsx(zt,{code:i.content},`code-${h}`);const v=i.content.split(`
`),f=[];return v.forEach((E,s)=>{if(s>0){if(E.trim()===""){f.push(e.jsx("div",{className:"h-2"},`gap-${s}`));return}f.push(e.jsx("br",{},`br-${s}`))}const b=[],y=/\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|([^*`]+)/g;let g,k=0;for(;(g=y.exec(E))!==null;)g[1]!==void 0?b.push(e.jsx("strong",{className:"font-semibold chat-md-strong",children:g[1]},`${h}-${s}-b-${k++}`)):g[2]!==void 0?b.push(e.jsx("em",{className:"italic chat-md-em",children:g[2]},`${h}-${s}-i-${k++}`)):g[3]!==void 0?b.push(e.jsx("code",{className:"chat-inline-code",children:g[3]},`${h}-${s}-c-${k++}`)):b.push(e.jsx("span",{children:g[4]},`${h}-${s}-t-${k++}`));f.push(...b)}),e.jsx("span",{children:f},`text-block-${h}`)})})}function Wt({messages:r=[],loading:n=!1,input:t="",onInputChange:c,onSendMessage:l,role:o="guest",compact:i=!1,inputRef:h,className:v="",theme:f}){const E=a.useRef(null),[s,b]=a.useState(null),[y,g]=a.useState(!1),k=o==="admin"||o==="editor",p=k?Ot:Tt;a.useEffect(()=>{var m;(m=E.current)==null||m.scrollIntoView({behavior:"smooth"})},[r,n]);const L=m=>{const u=m.trim();!u||n||y||(l(u,o),g(!0),setTimeout(()=>g(!1),1500))},S=m=>{m.preventDefault(),L(t)},A=async(m,u)=>{try{await navigator.clipboard.writeText(u),b(m),setTimeout(()=>b(null),2e3)}catch{}},C=n||y||!t.trim();return e.jsxs("div",{className:`chat-conversation ${i?"chat-conv--compact":"chat-conv--full"} ${v}`,"data-theme":f,children:[e.jsxs("div",{className:"chat-conv-messages",role:"log","aria-live":"polite","aria-label":"Conversation History",children:[r.length===0&&!n&&e.jsxs("div",{className:"chat-conv-empty",children:[e.jsx("div",{className:"chat-conv-empty-icon-wrap",children:e.jsx(ce,{size:i?36:48,animate:!0,variant:"brand"})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("span",{className:"chat-conv-telemetry-badge",children:"ADSS TELEMETRY V2.6"}),e.jsx("span",{className:"chat-conv-grounded-badge",children:"LIVE GROUNDING"})]}),e.jsx("h2",{className:"chat-conv-empty-title",children:"ADSS Portal Intelligence"}),e.jsx("p",{className:"chat-conv-empty-sub",children:k?"Instant precision answers regarding society operations, member directories, attendance analytics, and role governance.":"Instant precision answers regarding membership registration, event check-in, OC recruitment, and official letters."})]}),e.jsx("div",{className:"chat-conv-chips",children:p.map((m,u)=>e.jsxs("button",{type:"button",className:"chat-conv-chip",onClick:()=>L(m.text),disabled:n||y,children:[e.jsx("span",{className:"chat-conv-chip-tag",children:m.tag}),e.jsx("span",{className:"chat-conv-chip-text",children:m.text}),e.jsx(lt,{className:"w-3 h-3 chat-conv-chip-arrow ml-auto shrink-0"})]},u))})]}),r.map((m,u)=>{const I=m.role==="user",M=m.id||`msg-${u}`;return e.jsxs("div",{className:`chat-conv-msg-row ${I?"chat-conv-msg-row--user":"chat-conv-msg-row--assistant"}`,children:[!I&&e.jsx("div",{className:"chat-conv-avatar-wrap",title:"ADSS Portal AI Assistant",children:e.jsx(ce,{size:16,variant:"brand"})}),e.jsxs("div",{className:"chat-conv-msg-body",children:[e.jsx("div",{className:`chat-conv-bubble ${I?"chat-conv-bubble--user":"chat-conv-bubble--assistant"}`,children:I?m.text:Mt(m.text)}),!I&&e.jsxs("div",{className:"chat-conv-msg-meta",children:[e.jsx("span",{className:"chat-conv-msg-time",children:m.timestamp||"ADSS INTEL"}),e.jsx("button",{type:"button",onClick:()=>A(M,m.text),className:"chat-conv-copy-action",title:"Copy response",children:s===M?e.jsxs(e.Fragment,{children:[e.jsx(Z,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"COPIED"})]}):e.jsxs(e.Fragment,{children:[e.jsx(ie,{className:"w-3 h-3"}),e.jsx("span",{children:"COPY"})]})})]})]})]},M)}),n&&e.jsxs("div",{className:"chat-conv-msg-row chat-conv-msg-row--assistant",children:[e.jsx("div",{className:"chat-conv-avatar-wrap",children:e.jsx(ce,{size:16,animate:!0,variant:"brand"})}),e.jsx("div",{className:"chat-conv-msg-body",children:e.jsxs("div",{className:"chat-conv-bubble chat-conv-bubble--assistant chat-conv-thinking",children:[e.jsx("div",{className:"chat-pulse-node"}),e.jsx("span",{className:"font-berkeley-mono text-[11px] chat-thinking-text tracking-wider uppercase",children:"Analyzing ADSS records…"})]})})]}),e.jsx("div",{ref:E})]}),e.jsx("form",{className:"chat-conv-input-bar",onSubmit:S,children:e.jsxs("div",{className:"chat-conv-input-wrapper",children:[e.jsx("input",{ref:h,className:"chat-conv-input",type:"text",placeholder:y?"Rate limit throttle (1s)...":n?"ADSS intelligence processing...":"Ask ADSS Intelligence (e.g. attendance, OC, letters)...",value:t,onChange:m=>c(m.target.value),disabled:n||y,autoComplete:"off","aria-label":"Message to ADSS AI Assistant"}),e.jsx("button",{type:"submit",className:"chat-conv-send-btn",disabled:C,"aria-label":"Send query",title:"Execute query (Enter)",children:e.jsx(dt,{className:"w-3.5 h-3.5"})})]})}),e.jsx("style",{children:`
        .chat-conversation {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          min-height: 0;
          background: #08090a;
          color: #d0d6e0;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          position: relative;
        }

        .chat-conv-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scroll-behavior: smooth;
        }

        .chat-conv--full .chat-conv-messages {
          padding: 24px 32px;
          gap: 20px;
        }

        /* Empty State */
        .chat-conv-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin: auto 0;
          padding: 16px 8px;
        }

        .chat-conv--full .chat-conv-empty {
          max-width: 680px;
          margin: auto;
          padding: 40px 16px;
        }

        .chat-conv-empty-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: #0f1011;
          border: 1px solid #23252a;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px 0px, rgb(35, 37, 42) 0px 0px 0px 1px inset;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .chat-conv--full .chat-conv-empty-icon-wrap {
          width: 76px;
          height: 76px;
        }

        .chat-conv-empty-title {
          font-size: 17px;
          font-weight: 510;
          color: #ffffff;
          letter-spacing: -0.012em;
          margin: 0;
        }

        .chat-conv--full .chat-conv-empty-title {
          font-size: 22px;
        }

        .chat-conv-empty-sub {
          font-size: 13px;
          color: #8a8f98;
          max-width: 420px;
          margin: 6px auto 0;
          line-height: 1.5;
        }

        .chat-conv--full .chat-conv-empty-sub {
          font-size: 14px;
          max-width: 560px;
        }

        .chat-conv-chips {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          margin-top: 10px;
        }

        .chat-conv--full .chat-conv-chips {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .chat-conv-chip {
          background: #0f1011;
          border: 1px solid #23252a;
          border-radius: 6px;
          padding: 9px 12px;
          color: #d0d6e0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          transition: background 0.15s, border-color 0.15s, transform 0.12s;
        }

        .chat-conv-chip:hover:not(:disabled) {
          background: #161718;
          border-color: #383b3f;
          transform: translateY(-1px);
        }

        .chat-conv-chip:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chat-conv-chip-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8a8f98;
          background: #161718;
          border: 1px solid #23252a;
          padding: 1px 5px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .chat-conv-chip-text {
          font-size: 12.5px;
          color: #d0d6e0;
          line-height: 1.35;
          flex: 1;
        }

        /* Message Rows */
        .chat-conv-msg-row {
          display: flex;
          gap: 10px;
          max-width: 90%;
          animation: chat-fadein 0.18s ease;
        }

        .chat-conv--full .chat-conv-msg-row {
          max-width: 82%;
          gap: 14px;
        }

        @keyframes chat-fadein {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-conv-msg-row--user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .chat-conv-msg-row--assistant {
          align-self: flex-start;
        }

        .chat-conv-avatar-wrap {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #0f1011;
          border: 1px solid #23252a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .chat-conv--full .chat-conv-avatar-wrap {
          width: 32px;
          height: 32px;
        }

        .chat-conv-msg-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .chat-conv-bubble {
          padding: 10px 14px;
          font-size: 13.5px;
          line-height: 1.6;
          word-break: break-word;
          border-radius: 6px;
        }

        .chat-conv--full .chat-conv-bubble {
          padding: 14px 18px;
          font-size: 14.5px;
          border-radius: 8px;
        }

        .chat-conv-bubble--user {
          background: #161718;
          border: 1px solid #23252a;
          color: #ffffff;
        }

        .chat-conv-bubble--assistant {
          background: #0f1011;
          border: 1px solid #23252a;
          color: #d0d6e0;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset;
        }

        .chat-conv-msg-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 2px;
        }

        .chat-conv-msg-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #62666d;
        }

        .chat-conv-copy-action {
          background: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8a8f98;
          padding: 2px 4px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
        }

        .chat-conv-copy-action:hover {
          color: #ffffff;
          background: #161718;
        }

        /* Thinking State */
        .chat-conv-thinking {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
        }

        .chat-pulse-node {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e4f222;
          box-shadow: 0 0 8px rgba(228, 242, 34, 0.6);
          animation: chat-pulse 1s infinite alternate ease-in-out;
        }

        @keyframes chat-pulse {
          from { transform: scale(0.85); opacity: 0.6; }
          to { transform: scale(1.15); opacity: 1; }
        }

        /* Code & CSV */
        .chat-inline-code {
          background: #161718;
          border: 1px solid #23252a;
          color: #e5e5e6;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 1px 4px;
          border-radius: 4px;
        }

        .chat-codeblock {
          background: #08090a;
          border: 1px solid #23252a;
          border-radius: 6px;
          margin: 8px 0;
          overflow: hidden;
        }

        .chat-codeblock-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0f1011;
          border-bottom: 1px solid #23252a;
          padding: 4px 10px;
        }

        .chat-copy-code-btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 4px;
          color: #8a8f98;
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .chat-copy-code-btn:hover {
          background: #161718;
          color: #ffffff;
        }

        .chat-codeblock-content {
          padding: 10px 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          line-height: 1.5;
          color: #e5e5e6;
          overflow-x: auto;
          margin: 0;
        }

        .chat-csv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f1011;
          border: 1px solid #23252a;
          border-radius: 6px;
          padding: 8px 12px;
          color: #ffffff;
          cursor: pointer;
          margin: 6px 0;
          width: 100%;
          transition: background 0.15s, border-color 0.15s;
        }

        .chat-csv-btn:hover {
          background: #161718;
          border-color: #383b3f;
        }

        /* Input Bar */
        .chat-conv-input-bar {
          padding: 12px 14px;
          background: #0f1011;
          border-top: 1px solid #23252a;
          flex-shrink: 0;
        }

        .chat-conv--full .chat-conv-input-bar {
          padding: 16px 24px;
        }

        .chat-conv-input-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #161718;
          border: 1px solid #23252a;
          border-radius: 6px;
          padding: 4px 6px 4px 12px;
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .chat-conv-input-wrapper:focus-within {
          border-color: #383b3f;
          box-shadow: 0 0 0 1px #383b3f;
        }

        .chat-conv-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 13.5px;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          min-width: 0;
        }

        .chat-conv-input::placeholder {
          color: #8a8f98;
        }

        /* Primary Action Button — The Acid Lime Flashlight */
        .chat-conv-send-btn {
          background: #e4f222;
          color: #08090a;
          border: none;
          border-radius: 6px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: opacity 0.15s, transform 0.12s;
        }

        .chat-conv-send-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: scale(1.04);
        }

        .chat-conv-send-btn:disabled {
          background: #23252a;
          color: #62666d;
          cursor: not-allowed;
          transform: none;
        }

        /* Base Themeable Token Styles */
        .chat-csv-icon {
          color: #e4f222;
        }

        .chat-csv-download-icon {
          color: #8a8f98;
        }

        .chat-codeblock-label {
          color: #8a8f98;
        }

        .chat-codeblock-term-icon {
          color: #e4f222;
        }

        .chat-md-strong {
          color: #ffffff;
        }

        .chat-md-em {
          color: #d0d6e0;
        }

        .chat-conv-telemetry-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #8a8f98;
          background: #161718;
          border: 1px solid #23252a;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .chat-conv-grounded-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          color: #e4f222;
          background: rgba(228, 242, 34, 0.1);
          border: 1px solid rgba(228, 242, 34, 0.2);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .chat-conv-chip-arrow {
          color: #62666d;
          transition: color 0.15s;
        }

        .chat-conv-chip:hover .chat-conv-chip-arrow {
          color: #e4f222;
        }

        .chat-thinking-text {
          color: #8a8f98;
        }

        .chat-quick-label {
          color: #62666d;
        }

        .chat-disclaimer-text {
          color: #8a8f98;
        }

        /* ─── Light Mode Theme Support ─── */
        [data-theme='light'] .chat-conversation,
        .chat-conversation[data-theme='light'] {
          background: #ffffff;
          color: #18181b;
        }

        [data-theme='light'] .chat-conv-empty-icon-wrap,
        .chat-conversation[data-theme='light'] .chat-conv-empty-icon-wrap {
          background: #18181b;
          border-color: #27272a;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        [data-theme='light'] .chat-conv-empty-title,
        .chat-conversation[data-theme='light'] .chat-conv-empty-title {
          color: #09090b;
        }

        [data-theme='light'] .chat-conv-empty-sub,
        .chat-conversation[data-theme='light'] .chat-conv-empty-sub {
          color: #52525b;
        }

        [data-theme='light'] .chat-conv-telemetry-badge,
        .chat-conversation[data-theme='light'] .chat-conv-telemetry-badge {
          color: #52525b;
          background: #f4f4f5;
          border-color: #e4e4e7;
        }

        [data-theme='light'] .chat-conv-grounded-badge,
        .chat-conversation[data-theme='light'] .chat-conv-grounded-badge {
          color: #854d0e;
          background: #fef9c3;
          border-color: #fde047;
          font-weight: 500;
        }

        [data-theme='light'] .chat-conv-chip,
        .chat-conversation[data-theme='light'] .chat-conv-chip {
          background: #fafafa;
          border-color: #e4e4e7;
          color: #18181b;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
        }

        [data-theme='light'] .chat-conv-chip:hover:not(:disabled),
        .chat-conversation[data-theme='light'] .chat-conv-chip:hover:not(:disabled) {
          background: #f4f4f5;
          border-color: #d4d4d8;
        }

        [data-theme='light'] .chat-conv-chip-tag,
        .chat-conversation[data-theme='light'] .chat-conv-chip-tag {
          color: #52525b;
          background: #f4f4f5;
          border-color: #e4e4e7;
        }

        [data-theme='light'] .chat-conv-chip-text,
        .chat-conversation[data-theme='light'] .chat-conv-chip-text {
          color: #18181b;
        }

        [data-theme='light'] .chat-conv-chip-arrow,
        .chat-conversation[data-theme='light'] .chat-conv-chip-arrow {
          color: #a1a1aa;
        }

        [data-theme='light'] .chat-conv-chip:hover:not(:disabled) .chat-conv-chip-arrow,
        .chat-conversation[data-theme='light'] .chat-conv-chip:hover:not(:disabled) .chat-conv-chip-arrow {
          color: #09090b;
        }

        [data-theme='light'] .chat-conv-avatar-wrap,
        .chat-conversation[data-theme='light'] .chat-conv-avatar-wrap {
          background: #18181b;
          border-color: #27272a;
        }

        [data-theme='light'] .chat-conv-bubble--user,
        .chat-conversation[data-theme='light'] .chat-conv-bubble--user {
          background: #09090b;
          border-color: #09090b;
          color: #ffffff;
        }

        [data-theme='light'] .chat-conv-bubble--assistant,
        .chat-conversation[data-theme='light'] .chat-conv-bubble--assistant {
          background: #f8fafc;
          border-color: #e2e8f0;
          color: #0f172a;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        [data-theme='light'] .chat-md-strong,
        .chat-conversation[data-theme='light'] .chat-md-strong {
          color: #09090b;
        }

        [data-theme='light'] .chat-md-em,
        .chat-conversation[data-theme='light'] .chat-md-em {
          color: #334155;
        }

        [data-theme='light'] .chat-inline-code,
        .chat-conversation[data-theme='light'] .chat-inline-code {
          background: #f1f5f9;
          border-color: #e2e8f0;
          color: #0f172a;
        }

        [data-theme='light'] .chat-codeblock,
        .chat-conversation[data-theme='light'] .chat-codeblock {
          background: #f8fafc;
          border-color: #e2e8f0;
        }

        [data-theme='light'] .chat-codeblock-header,
        .chat-conversation[data-theme='light'] .chat-codeblock-header {
          background: #f1f5f9;
          border-bottom-color: #e2e8f0;
        }

        [data-theme='light'] .chat-codeblock-label,
        .chat-conversation[data-theme='light'] .chat-codeblock-label {
          color: #64748b;
        }

        [data-theme='light'] .chat-codeblock-term-icon,
        .chat-conversation[data-theme='light'] .chat-codeblock-term-icon {
          color: #0284c7;
        }

        [data-theme='light'] .chat-copy-code-btn,
        .chat-conversation[data-theme='light'] .chat-copy-code-btn {
          color: #64748b;
        }

        [data-theme='light'] .chat-copy-code-btn:hover,
        .chat-conversation[data-theme='light'] .chat-copy-code-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        [data-theme='light'] .chat-codeblock-content,
        .chat-conversation[data-theme='light'] .chat-codeblock-content {
          color: #0f172a;
        }

        [data-theme='light'] .chat-csv-btn,
        .chat-conversation[data-theme='light'] .chat-csv-btn {
          background: #ffffff;
          border-color: #e4e4e7;
          color: #09090b;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        [data-theme='light'] .chat-csv-btn:hover,
        .chat-conversation[data-theme='light'] .chat-csv-btn:hover {
          background: #f4f4f5;
          border-color: #d4d4d8;
        }

        [data-theme='light'] .chat-csv-icon,
        .chat-conversation[data-theme='light'] .chat-csv-icon {
          color: #16a34a;
        }

        [data-theme='light'] .chat-csv-download-icon,
        .chat-conversation[data-theme='light'] .chat-csv-download-icon {
          color: #71717a;
        }

        [data-theme='light'] .chat-conv-msg-time,
        .chat-conversation[data-theme='light'] .chat-conv-msg-time {
          color: #71717a;
        }

        [data-theme='light'] .chat-conv-copy-action,
        .chat-conversation[data-theme='light'] .chat-conv-copy-action {
          color: #71717a;
        }

        [data-theme='light'] .chat-conv-copy-action:hover,
        .chat-conversation[data-theme='light'] .chat-conv-copy-action:hover {
          color: #09090b;
          background: #f4f4f5;
        }

        [data-theme='light'] .chat-pulse-node,
        .chat-conversation[data-theme='light'] .chat-pulse-node {
          background: #ca8a04;
          box-shadow: 0 0 8px rgba(202, 138, 4, 0.5);
        }

        [data-theme='light'] .chat-thinking-text,
        .chat-conversation[data-theme='light'] .chat-thinking-text {
          color: #71717a;
        }



        [data-theme='light'] .chat-conv-input-bar,
        .chat-conversation[data-theme='light'] .chat-conv-input-bar {
          background: #ffffff;
          border-top-color: #e4e4e7;
        }

        [data-theme='light'] .chat-conv-input-wrapper,
        .chat-conversation[data-theme='light'] .chat-conv-input-wrapper {
          background: #f4f4f5;
          border-color: #e4e4e7;
        }

        [data-theme='light'] .chat-conv-input-wrapper:focus-within,
        .chat-conversation[data-theme='light'] .chat-conv-input-wrapper:focus-within {
          border-color: #09090b;
          box-shadow: 0 0 0 1px #09090b;
          background: #ffffff;
        }

        [data-theme='light'] .chat-conv-input,
        .chat-conversation[data-theme='light'] .chat-conv-input {
          color: #09090b;
        }

        [data-theme='light'] .chat-conv-input::placeholder,
        .chat-conversation[data-theme='light'] .chat-conv-input::placeholder {
          color: #71717a;
        }

        [data-theme='light'] .chat-conv-send-btn,
        .chat-conversation[data-theme='light'] .chat-conv-send-btn {
          background: #09090b;
          color: #ffffff;
        }

        [data-theme='light'] .chat-conv-send-btn:hover:not(:disabled),
        .chat-conversation[data-theme='light'] .chat-conv-send-btn:hover:not(:disabled) {
          background: #27272a;
          opacity: 1;
        }

        [data-theme='light'] .chat-conv-send-btn:disabled,
        .chat-conversation[data-theme='light'] .chat-conv-send-btn:disabled {
          background: #e4e4e7;
          color: #a1a1aa;
        }

      `})]})}function Fe({role:r="guest",session:n={},onNavigate:t,currentPage:c,theme:l}){const o=(n==null?void 0:n.role)||r||"guest",{messages:i,input:h,setInput:v,loading:f,sendMessage:E,clearChat:s,isWidgetOpen:b,setIsWidgetOpen:y,toggleWidget:g,closeWidget:k}=Lt(),p=a.useRef(null),L=a.useRef(null),S=a.useRef(null);a.useEffect(()=>{b&&setTimeout(()=>{var u;return(u=L.current)==null?void 0:u.focus()},100)},[b]),a.useEffect(()=>{const u=I=>{var M;if((I.ctrlKey||I.metaKey)&&I.key==="/"){I.preventDefault(),g();return}I.key==="Escape"&&b&&(k(),(M=S.current)==null||M.focus())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[b,g,k]);const A=()=>{k(),t?t("assistant"):(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate")))},C=()=>{i.length!==0&&window.confirm("Clear active ADSS intelligence conversation?")&&s()},m=o==="admin"?"STAFF COMMAND":o==="editor"?"EDITOR PORTAL":o==="member"?"MEMBER PORTAL":"GUEST ACCESS";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"adss-ai-trigger-container",children:e.jsxs("button",{ref:S,id:"adss-ai-widget-toggle",className:`adss-ai-trigger-btn ${b?"adss-ai-trigger-btn--open":""}`,onClick:g,"aria-label":b?"Close ADSS AI assistant":"Open ADSS AI assistant","aria-expanded":b,"aria-controls":"adss-ai-widget-panel",title:"ADSS Portal AI Assistant (Ctrl+/)",children:[b?e.jsx(re,{className:"w-5 h-5 text-current transition-transform duration-200"}):e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx(ce,{size:22,variant:"brand",animate:f}),e.jsx("span",{className:"adss-ai-status-indicator"})]}),!b&&e.jsxs("div",{className:"adss-ai-trigger-tooltip",children:[e.jsx("span",{className:"font-sans text-[12px] font-medium adss-ai-tooltip-text",children:"ADSS AI"}),e.jsx("span",{className:"adss-ai-shortcut-badge",children:"Ctrl /"})]})]})}),e.jsxs("div",{id:"adss-ai-widget-panel",ref:p,className:`adss-ai-panel ${b?"adss-ai-panel--open":""}`,"data-theme":l,role:"dialog","aria-modal":"true","aria-label":"ADSS Portal AI Assistant",children:[e.jsx("div",{className:"adss-ai-mobile-handle"}),e.jsxs("div",{className:"adss-ai-header",children:[e.jsxs("div",{className:"adss-ai-header-left",children:[e.jsx("div",{className:"adss-ai-header-emblem",children:e.jsx(ce,{size:18,variant:"brand"})}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("h3",{className:"adss-ai-title",children:"ADSS Intelligence"}),e.jsx("span",{className:"adss-ai-role-badge",children:m})]})]}),e.jsxs("div",{className:"adss-ai-header-actions",children:[i.length>0&&e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:C,title:"Clear conversation","aria-label":"Clear conversation history",children:e.jsx(mt,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:A,title:"Expand to full workspace view (/assistant)","aria-label":"Open in full screen page",children:e.jsx(ft,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:k,title:"Close panel (Esc)","aria-label":"Close assistant",children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"adss-ai-content",children:e.jsx(Wt,{messages:i,loading:f,input:h,onInputChange:v,onSendMessage:E,compact:!0,inputRef:L,role:o,theme:l})})]}),b&&e.jsx("div",{className:"adss-ai-backdrop",onClick:k,"aria-hidden":"true"}),e.jsx("style",{children:`
        /* Trigger Container */
        .adss-ai-trigger-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
        }

        .adss-ai-trigger-btn {
          width: 50px;
          height: 50px;
          border-radius: 9999px;
          background: #0f1011;
          color: #ffffff;
          border: 1px solid #23252a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 16px 0px, rgb(35, 37, 42) 0px 0px 0px 1px inset;
          transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.18s ease,
                      background 0.18s ease;
          position: relative;
        }

        .adss-ai-trigger-btn:hover {
          transform: scale(1.06);
          background: #161718;
          border-color: #383b3f;
        }

        .adss-ai-trigger-btn:focus-visible {
          outline: 2px solid #e4f222;
          outline-offset: 3px;
        }

        .adss-ai-trigger-btn:active {
          transform: scale(0.95);
        }

        .adss-ai-trigger-btn--open {
          background: #161718;
          border-color: #383b3f;
        }

        /* Status Dot */
        .adss-ai-status-indicator {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e4f222;
          border: 2px solid #0f1011;
          box-shadow: 0 0 6px rgba(228, 242, 34, 0.6);
        }

        /* Tooltip */
        .adss-ai-trigger-tooltip {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: #0f1011;
          border: 1px solid #23252a;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 12px;
          border-radius: 6px;
          padding: 5px 9px;
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        .adss-ai-trigger-btn:hover .adss-ai-trigger-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .adss-ai-shortcut-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8a8f98;
          background: #161718;
          border: 1px solid #23252a;
          border-radius: 3px;
          padding: 1px 4px;
        }

        /* Floating Popup Window Panel */
        .adss-ai-panel {
          position: fixed;
          bottom: 86px;
          right: 24px;
          z-index: 999;
          width: 390px;
          height: 540px;
          max-height: calc(100vh - 110px);
          background: #0f1011;
          border: 1px solid #23252a;
          border-radius: 12px;
          box-shadow: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px, rgb(35, 37, 42) 0px 0px 0px 1px inset;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(12px) scale(0.97);
          pointer-events: none;
          transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .adss-ai-panel--open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .adss-ai-mobile-handle {
          display: none;
        }

        /* Header Bar */
        .adss-ai-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: #0f1011;
          border-bottom: 1px solid #23252a;
          flex-shrink: 0;
        }

        .adss-ai-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .adss-ai-header-emblem {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: #161718;
          border: 1px solid #23252a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .adss-ai-title {
          font-size: 13px;
          font-weight: 510;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .adss-ai-role-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: #8a8f98;
          background: #161718;
          border: 1px solid #23252a;
          border-radius: 4px;
          padding: 0 4px;
          letter-spacing: 0.02em;
        }



        .adss-ai-header-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .adss-ai-action-btn {
          background: transparent;
          border: none;
          color: #8a8f98;
          padding: 5px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.15s, background 0.15s;
        }

        .adss-ai-action-btn:hover {
          color: #ffffff;
          background: #161718;
        }

        .adss-ai-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .adss-ai-backdrop {
          display: none;
        }

        /* ─── Light Mode Theme Support ─── */
        [data-theme='light'] .adss-ai-panel,
        .adss-ai-panel[data-theme='light'] {
          background: #ffffff;
          border-color: #e4e4e7;
          box-shadow: 0 12px 48px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
        }

        [data-theme='light'] .adss-ai-header,
        .adss-ai-panel[data-theme='light'] .adss-ai-header {
          background: #ffffff;
          border-bottom-color: #e4e4e7;
        }

        [data-theme='light'] .adss-ai-header-emblem,
        .adss-ai-panel[data-theme='light'] .adss-ai-header-emblem {
          background: #18181b;
          border-color: #27272a;
        }

        [data-theme='light'] .adss-ai-title,
        .adss-ai-panel[data-theme='light'] .adss-ai-title {
          color: #09090b;
        }

        [data-theme='light'] .adss-ai-role-badge,
        .adss-ai-panel[data-theme='light'] .adss-ai-role-badge {
          color: #52525b;
          background: #f4f4f5;
          border-color: #e4e4e7;
        }



        [data-theme='light'] .adss-ai-action-btn,
        .adss-ai-panel[data-theme='light'] .adss-ai-action-btn {
          color: #71717a;
        }

        [data-theme='light'] .adss-ai-action-btn:hover,
        .adss-ai-panel[data-theme='light'] .adss-ai-action-btn:hover {
          color: #09090b;
          background: #f4f4f5;
        }

        [data-theme='light'] .adss-ai-mobile-handle,
        .adss-ai-panel[data-theme='light'] .adss-ai-mobile-handle {
          background: #e4e4e7;
        }

        [data-theme='light'] .adss-ai-backdrop {
          background: rgba(0, 0, 0, 0.35);
        }

        [data-theme='light'] .adss-ai-trigger-btn {
          background: #09090b;
          color: #ffffff;
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.22);
        }

        [data-theme='light'] .adss-ai-trigger-btn:hover {
          background: #18181b;
          border-color: rgba(0, 0, 0, 0.25);
        }

        [data-theme='light'] .adss-ai-trigger-btn--open {
          background: #18181b;
          border-color: rgba(0, 0, 0, 0.25);
        }

        [data-theme='light'] .adss-ai-trigger-tooltip {
          background: #ffffff;
          border-color: #e4e4e7;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        [data-theme='light'] .adss-ai-tooltip-text {
          color: #09090b;
        }

        [data-theme='light'] .adss-ai-shortcut-badge {
          color: #52525b;
          background: #f4f4f5;
          border-color: #e4e4e7;
        }

        /* Mobile Viewport Adaptations (Phone & Tablet with Mobile Bottom Bar) */
        @media (max-width: 768px) {
          .adss-ai-trigger-container {
            bottom: calc(76px + env(safe-area-inset-bottom, 0px));
            right: 16px;
            z-index: 45; /* Below mobile-bottom-bar (50), drawer-backdrop (90) and drawer (100) */
          }

          .adss-ai-trigger-btn {
            width: 44px;
            height: 44px;
          }

          .adss-ai-trigger-tooltip {
            display: none !important;
          }

          .adss-ai-panel {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 76vh;
            max-height: 80vh;
            border-radius: 14px 14px 0 0;
            border-bottom: none;
            border-left: none;
            border-right: none;
            transform: translateY(100%);
            z-index: 999;
          }

          .adss-ai-panel--open {
            transform: translateY(0);
          }

          .adss-ai-mobile-handle {
            display: block;
            width: 36px;
            height: 4px;
            border-radius: 9999px;
            background: #23252a;
            margin: 8px auto 2px;
          }

          .adss-ai-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            z-index: 998;
          }
        }
      `})]})}class Bt extends Je.Component{constructor(t){super(t);$e(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),this.props.onReset&&this.props.onReset()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,c){console.error("ErrorBoundary caught an error:",t,c)}render(){return this.state.hasError?e.jsxs("div",{className:"p-8 my-6 max-w-xl mx-auto rounded-[12px] bg-[#0f1011] border border-[#eb5757]/30 text-[#ffffff] space-y-4 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center gap-2.5 text-[#eb5757] pb-2 border-b border-[#23252a]",children:[e.jsx(bt,{className:"w-5 h-5 flex-shrink-0"}),e.jsx("h3",{className:"text-[15px] font-[510] tracking-tight",children:"Section Encountered an Error"})]}),e.jsx("p",{className:"text-[12px] text-[#8a8f98] leading-relaxed",children:"An unexpected error occurred while rendering this section. You can retry rendering or return to the main dashboard."}),this.state.error&&e.jsx("pre",{className:"p-3 rounded-[6px] bg-[#161718] border border-[#23252a] text-[11px] font-berkeley-mono text-[#eb5757] overflow-x-auto whitespace-pre-wrap break-all",children:this.state.error.message||String(this.state.error)}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-2",children:[e.jsxs("button",{onClick:this.handleReset,className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#e4f222] text-[#08090a] text-[12px] font-[510] hover:bg-[#d8e61e] transition-colors cursor-pointer",children:[e.jsx(ut,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Retry View"})]}),e.jsxs("button",{onClick:()=>{this.handleReset(),this.props.onNavigate?this.props.onNavigate("dashboard"):typeof window<"u"&&window.location.reload()},className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#161718] border border-[#23252a] text-[#d0d6e0] text-[12px] hover:bg-[#23252a] transition-colors cursor-pointer",children:[e.jsx(gt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Back to Dashboard"})]})]})]}):this.props.children}}function Ft({page:r,setPage:n,visibleSections:t=[],session:c={},pendingMsgCount:l=0,theme:o="dark",toggleTheme:i,isRealStaff:h=!1,viewAsMember:v=!1,handleToggleViewAsMember:f,handleLogout:E,connected:s=null,canAccessAi:b=!1}){const[y,g]=a.useState(!1);a.useEffect(()=>{const j=D=>{D.key==="Escape"&&y&&g(!1)};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[y]),a.useEffect(()=>(y?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[y]);const k=j=>{if(!j)return"U";const D=j.trim().split(/\s+/);return D.length===1?D[0].substring(0,2).toUpperCase():(D[0][0]+D[D.length-1][0]).toUpperCase()},p=c.role==="admin"||c.role==="editor",L=c.role==="member",S=!!c.stId;let A=[];p&&!v?A=[{id:"dashboard",label:"Dash",icon:Ke},{id:"my_info",label:"My Info",icon:Ee},{id:"notices",label:"Notices",icon:ge},{id:"messages",label:"Messages",icon:ye,badge:l}]:L||v?A=[{id:"attendance",label:"Dash",icon:Xe},{id:S?"my_info":"events",label:S?"My Info":"Events",icon:S?Ee:le},{id:"notices",label:"Notices",icon:ge},{id:"messages",label:"Messages",icon:ye,badge:l}]:A=[{id:"events",label:"Events",icon:le},{id:"notices",label:"Notices",icon:ge},{id:"assistant",label:"Assistant",icon:Qe}];const m=!new Set(A.map(j=>j.id)).has(r)||y,I=t.flatMap(j=>j.items).find(j=>j.id===r),M=I?I.label:r?String(r).replace("_"," ").toUpperCase():p&&!v?"DASHBOARD":"ATTENDANCE",X=j=>{g(!1),n(j)};return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"mobile-topbar",role:"banner",children:[e.jsxs("div",{className:"mobile-topbar-left cursor-pointer",onClick:()=>X(p&&!v?"dashboard":"attendance"),children:[e.jsx("img",{src:`/${o==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"mobile-topbar-logo",alt:"ADSS"}),e.jsxs("div",{className:"mobile-topbar-title-wrap",children:[e.jsx("div",{className:"mobile-topbar-brand",children:"ADSS RUHUNA"}),e.jsx("div",{className:"mobile-topbar-page",children:M})]})]}),e.jsx("div",{className:"mobile-topbar-right flex items-center",children:e.jsx("div",{className:"mobile-telemetry-dot",title:s===null?"Synchronizing":s?"DB Synchronized":"Offline",children:e.jsx("span",{className:`dot ${s===null?"pending":s?"ok":"err"}`})})})]}),e.jsx("nav",{className:"mobile-bottom-bar",role:"navigation","aria-label":"Mobile Navigation",children:e.jsxs("div",{className:"mobile-bottom-grid",children:[A.map(j=>{const D=j.icon,Q=r===j.id&&!y;return e.jsxs("button",{className:`mobile-tab-btn ${Q?"active":""}`,onClick:()=>X(j.id),"aria-label":j.label,children:[e.jsxs("div",{className:"mobile-tab-icon-box",children:[e.jsx(D,{className:"mobile-tab-icon"}),j.badge>0&&e.jsx("span",{className:"mobile-tab-badge",children:j.badge>99?"99+":j.badge})]}),e.jsx("span",{className:"mobile-tab-label",children:j.label})]},j.id)}),e.jsxs("button",{className:`mobile-tab-btn ${m?"active":""}`,onClick:()=>g(j=>!j),"aria-label":"More navigation options","aria-expanded":y,children:[e.jsx("div",{className:"mobile-tab-icon-box",children:e.jsx(vt,{className:"mobile-tab-icon"})}),e.jsx("span",{className:"mobile-tab-label",children:"More"})]})]})}),e.jsx("div",{className:`mobile-drawer-backdrop ${y?"open":""}`,onClick:()=>g(!1),"aria-hidden":!y}),e.jsx("aside",{className:`mobile-drawer ${y?"open":""}`,"aria-label":"Additional Navigation","aria-hidden":!y,children:e.jsxs("div",{className:"mobile-drawer-inner",children:[e.jsxs("div",{className:"mobile-drawer-header",children:[e.jsxs("div",{className:"mobile-drawer-header-left",children:[e.jsx("div",{className:"mobile-drawer-title",children:"Navigation"}),e.jsx("div",{className:"mobile-drawer-subtitle",children:"ADSS Ruhuna Portal"})]}),e.jsx("button",{className:"mobile-drawer-close-btn",onClick:()=>g(!1),"aria-label":"Close menu",children:e.jsx(re,{className:"w-5 h-5"})})]}),c.role!=="guest"&&e.jsxs("div",{className:"mobile-drawer-profile-card",children:[e.jsx("div",{className:"mobile-drawer-avatar",children:k(c.name||c.email)}),e.jsxs("div",{className:"mobile-drawer-user-info",children:[e.jsx("div",{className:"mobile-drawer-user-name",children:c.preferredName||c.name||"Member"}),e.jsxs("div",{className:"mobile-drawer-user-meta",children:[e.jsx("span",{className:"mobile-drawer-role-badge",children:c.role}),c.stId&&e.jsx("span",{className:"mobile-drawer-stid",children:c.stId})]})]})]}),e.jsx("div",{className:"mobile-drawer-nav-scroll",children:t.map(j=>e.jsxs("div",{className:"mobile-drawer-group",children:[e.jsx("div",{className:"mobile-drawer-group-title",children:j.title}),e.jsx("div",{className:"mobile-drawer-group-items",children:j.items.map(D=>{const Q=D.icon,T=r===D.id,te=D.id==="messages"&&l>0;return e.jsxs("button",{className:`mobile-drawer-item ${T?"active":""}`,onClick:()=>{n(D.id),g(!1)},children:[e.jsxs("div",{className:"mobile-drawer-item-left",children:[e.jsx("span",{className:"mobile-drawer-item-icon",children:e.jsx(Q,{className:"w-4 h-4"})}),e.jsx("span",{className:"mobile-drawer-item-label",children:D.label})]}),e.jsxs("div",{className:"mobile-drawer-item-right",children:[te&&e.jsx("span",{className:"mobile-drawer-badge",children:l>99?"99+":l}),e.jsx(ve,{className:"w-3.5 h-3.5 opacity-40"})]})]},D.id)})})]},j.title))}),e.jsxs("div",{className:"mobile-drawer-footer",children:[e.jsxs("div",{className:"mobile-drawer-controls-grid",children:[h&&e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${v?"":"active-staff"}`,onClick:f,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[e.jsx(Ge,{className:"w-3.5 h-3.5 text-[#6366f1]"}),e.jsx("span",{children:v?"Member":"Staff"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:v?"OFF":"ON"})]}),e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${o==="dark"?"active-dark":""}`,onClick:i,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[o==="dark"?e.jsx(Se,{className:"w-3.5 h-3.5 text-amber-400"}):e.jsx(_e,{className:"w-3.5 h-3.5 text-amber-500"}),e.jsx("span",{children:o==="dark"?"Dark":"Light"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:"MODE"})]})]}),e.jsxs("button",{type:"button",className:"mobile-drawer-logout-btn",onClick:()=>{g(!1),c.role!=="guest"?E():(window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")))},children:[e.jsxs("div",{className:"mobile-drawer-logout-left",children:[e.jsx(Ce,{className:"w-4 h-4 text-[#eb5757]"}),e.jsx("span",{children:c.role!=="guest"?"Logout":"Login"})]}),e.jsx(ve,{className:"w-4 h-4 opacity-40"})]})]})]})})]})}const Ut="bhanukadilshan2002@gmail.com";function Vt({isOpen:r,onClose:n,session:t,isDark:c=!0}){const[l,o]=a.useState(""),[i,h]=a.useState(!1),[v,f]=a.useState(null);if(!r)return null;const E=async s=>{if(s.preventDefault(),!l.trim()){f({type:"error",text:"Please enter a message before sending."});return}h(!0),f(null);const b=new FormData;b.append("access_key","a550f902-9114-4a93-be4f-44fd2145d58e"),b.append("subject","Society Management System - Issue Report"),b.append("name",(t==null?void 0:t.name)||"Guest User"),b.append("email",(t==null?void 0:t.email)||"no-reply@society.com");const y=`
Sender Details:
------------------------------------------
Name: ${(t==null?void 0:t.name)||"Guest User"}
Email: ${(t==null?void 0:t.email)||"Not Available"}
Student ID: ${(t==null?void 0:t.stId)||"Not Available"}
Role: ${(t==null?void 0:t.role)||"guest"}

System Context:
------------------------------------------
User Agent: ${navigator.userAgent}
URL: ${window.location.href}
Time: ${new Date().toLocaleString()}

Message/Issue Description:
------------------------------------------
${l.trim()}
`;b.append("message",y);try{const k=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:b})).json();k.success?(f({type:"success",text:"Your message has been sent successfully!"}),o("")):f({type:"error",text:k.message||"Failed to send the email. Please try again."})}catch{f({type:"error",text:"A network error occurred. Please check your connection."})}finally{h(!1)}};return e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:s=>{s.target===s.currentTarget&&n()},children:e.jsxs("div",{className:`w-full max-w-[620px] rounded-[10px] p-6 shadow-2xl relative text-left animate-in fade-in zoom-in-95 duration-150 border ${c?"bg-[#121316] border-[#23252a] text-[#e5e5e6]":"bg-white border-gray-200 text-gray-900"}`,role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[e.jsx("span",{className:`text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono ${c?"text-[#8a8f98]":"text-gray-500"}`,children:"CONTACT FOR ISSUES"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:`px-2.5 py-1 rounded-full text-[11px] font-berkeley-mono ${c?"bg-[#18191c] border border-[#26282d] text-[#a0a5ad]":"bg-gray-100 border border-gray-200 text-gray-600"}`,children:Ut}),e.jsx("button",{type:"button",onClick:n,className:`transition-colors cursor-pointer p-1 rounded ${c?"text-[#8a8f98] hover:text-white hover:bg-[#23252a]/60":"text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`,title:"Close",children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsxs("p",{className:`text-[13.5px] leading-relaxed mb-4 ${c?"text-[#9da3ad]":"text-gray-600"}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`font-bold hover:underline ${c?"text-white":"text-gray-900"}`,children:"Bhanuka Dilshan"}),". If you encounter any bugs, issues, or have feedback, please write a message below to send an email."]}),v&&e.jsxs("div",{className:`p-3 rounded-[6px] mb-4 text-[12.5px] flex items-center gap-2 ${v.type==="success"?"bg-[#27a644]/15 border border-[#27a644]/30 text-[#4ade80]":"bg-[#eb5757]/15 border border-[#eb5757]/30 text-[#f87171]"}`,children:[v.type==="success"?e.jsx(Ae,{className:"w-4 h-4 flex-shrink-0"}):e.jsx(yt,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:v.text})]}),e.jsxs("form",{onSubmit:E,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:`block text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono mb-2 ${c?"text-[#8a8f98]":"text-gray-600"}`,children:"SHORT MESSAGE"}),e.jsx("textarea",{rows:4,placeholder:"Write the issue shortly...",value:l,onChange:s=>o(s.target.value),disabled:i,className:`w-full rounded-[6px] p-3 text-[13.5px] focus:outline-none resize-y transition-colors border ${c?"bg-[#0d0e10] border-[#23252a] text-white placeholder:text-[#525866] focus:border-[#4b5563]":"bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500"}`})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"submit",disabled:i,className:`font-[510] text-[13px] px-4 py-2 rounded-[6px] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm ${c?"bg-white hover:bg-[#e4e7eb] text-black":"bg-gray-900 hover:bg-black text-white"}`,children:i?"Sending...":"Send Email"})})]})]})})}function Ht({session:r,isDark:n,className:t=""}){const[c,l]=a.useState(!1),o=n!==void 0?n:typeof document<"u"?document.documentElement.classList.contains("dark"):!0;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`text-center text-[12px] font-berkeley-mono transition-colors ${o?"text-[#62666d]":"text-gray-500"} ${t}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`underline transition-colors ${o?"text-[#8a8f98] hover:text-white":"text-gray-600 hover:text-gray-900"}`,children:"Bhanuka Dilshan"})," • ",e.jsx("button",{type:"button",onClick:()=>l(!0),className:`transition-colors cursor-pointer inline-flex items-center ${o?"text-[#8a8f98] hover:text-[#e4f222]":"text-gray-600 hover:text-indigo-600 font-medium"}`,children:"Contact For Issues"})]}),e.jsx(Vt,{isOpen:c,onClose:()=>l(!1),session:r,isDark:o})]})}const Yt=a.lazy(()=>O(()=>import("./Login-D-qx_WNf.js"),__vite__mapDeps([0,1,2,3,4]))),qt=a.lazy(()=>O(()=>import("./Register-Cvp8upLc.js"),__vite__mapDeps([5,1,6,7,2,3,4]))),Ue=a.lazy(()=>O(()=>import("./Dashboard-DBn20Pa6.js"),__vite__mapDeps([8,1,9,10,2,3,4]))),Jt=a.lazy(()=>O(()=>import("./Members-DCUxNxG4.js"),__vite__mapDeps([11,1,12,7,2,3,4]))),Gt=a.lazy(()=>O(()=>import("./Events-C0mI6Sa3.js"),__vite__mapDeps([13,1,6,12,14,15,10,2,3,4]))),Kt=a.lazy(()=>O(()=>import("./Attendance-Dlh6iZ6J.js"),__vite__mapDeps([16,1,17,2,18,10,3,4]))),Xt=a.lazy(()=>O(()=>import("./Committee-CcDH9IGo.js"),__vite__mapDeps([19,1,12,17,2,10,3,4]))),Qt=a.lazy(()=>O(()=>import("./Setup-CpCHcoH8.js"),__vite__mapDeps([20,1]))),Zt=a.lazy(()=>O(()=>import("./Access-B1ZXjl45.js"),__vite__mapDeps([21,1,22,2,3,4]))),ue=a.lazy(()=>O(()=>import("./MyInfo-Dx3Z5owl.js"),__vite__mapDeps([23,1,9,6,7,2,3,4]))),ea=a.lazy(()=>O(()=>import("./Messages-DvSzFZ70.js"),__vite__mapDeps([24,1,2,3,4]))),ta=a.lazy(()=>O(()=>import("./Tasks-C3rHWBjl.js"),__vite__mapDeps([25,1,17,2,14,15,10,3,4]))),aa=a.lazy(()=>O(()=>import("./Landing-DITfo5Sg.js"),__vite__mapDeps([26,1,2,3,4]))),sa=a.lazy(()=>O(()=>import("./PublicEvent-DWTiWe6e.js"),__vite__mapDeps([27,1,3,4,2]))),ra=a.lazy(()=>O(()=>import("./Notices-vunUDPSU.js"),__vite__mapDeps([28,1,12,29,10,2,4,3]))),na=a.lazy(()=>O(()=>import("./PublicNotice-CodqpQ3t.js"),__vite__mapDeps([30,1,29,2,3,4]))),oa=a.lazy(()=>O(()=>import("./ScanAttendance-B_lCiHRH.js"),__vite__mapDeps([31,1,2,3,4]))),ia=a.lazy(()=>O(()=>import("./Letters-BsSMZ9cr.js"),__vite__mapDeps([32,1,9,10,2,3,4]))),Ve=a.lazy(()=>O(()=>import("./AssistantPage-BThhPmNW.js"),__vite__mapDeps([33,1,2,3,4]))),He=a.lazy(()=>O(()=>import("./PrivacyPolicy-filGobdr.js"),__vite__mapDeps([34,1,2]))),Ye=a.lazy(()=>O(()=>import("./TermsOfService-mGXixRpj.js"),__vite__mapDeps([35,1,2]))),ca=a.lazy(()=>O(()=>import("./Documents-BAj8v6Ky.js"),__vite__mapDeps([36,1,12,22,10,2,3,4])));function K(){return e.jsx("div",{style:{display:"flex",minHeight:"50vh",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("div",{style:{width:"32px",height:"32px",border:"2px solid rgba(129, 140, 248, 0.2)",borderTop:"2px solid #818cf8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})})}const at=[{title:"Workspace",items:[{id:"dashboard",label:"Dashboard",icon:Ke},{id:"notices",label:"Notices",icon:ge},{id:"my_info",label:"My Credentials",icon:Ee},{id:"messages",label:"Messages",icon:ye}]},{title:"Operations",items:[{id:"events",label:"Events",icon:le},{id:"attendance",label:"Attendance",icon:Xe},{id:"committee",label:"Committee (OC)",icon:Ie},{id:"letters",label:"Letter Requests",icon:Ze},{id:"documents",label:"Documents",icon:jt}]},{title:"Directory & Intel",items:[{id:"members",label:"Members",icon:kt},{id:"assistant",label:"AI Assistant",icon:Qe},{id:"access",label:"Access Control",icon:wt}]}],la=at.flatMap(r=>r.items),qe=r=>r==="admin"||r==="editor",da=(r,n,t)=>{if(!t)return[];const c=(r||"").trim().toUpperCase(),l=(n||"").trim().toLowerCase();if(Array.isArray(t))return t.some(i=>{const h=(i||"").trim();return c&&h.toUpperCase()===c||l&&h.toLowerCase()===l})?["Events","Budgets","Permissions","Guidance"]:[];if(typeof t=="object")for(const[o,i]of Object.entries(t)){const h=(o||"").trim();if(c&&h.toUpperCase()===c||l&&h.toLowerCase()===l)return Array.isArray(i)?i:[]}return[]},Re="adss-profile-cache",ha=()=>{try{const r=localStorage.getItem(Re);return r?JSON.parse(r):null}catch{return null}},oe=r=>{try{localStorage.setItem(Re,JSON.stringify(r))}catch{}},pa=()=>{try{localStorage.removeItem(Re)}catch{}},xa=()=>{var r;try{const n=localStorage.getItem("adss-auth");return n&&((r=JSON.parse(n))==null?void 0:r.user)}catch{return!1}};function ma(){const r=ha(),n=xa(),t=!!(r&&n&&r.userId&&r.userId===n.id),[c,l]=a.useState(()=>localStorage.getItem("theme")||"dark"),[o,i]=a.useState(()=>t&&r.role==="member"?"my_info":"dashboard"),[h,v]=a.useState(null),[f,E]=a.useState(()=>window.innerWidth>768),[s,b]=a.useState(()=>t?r:{role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),[y,g]=a.useState(!t),[k,p]=a.useState(!0),[L,S]=a.useState(!0),[A,C]=a.useState([]),[m,u]=a.useState(!1),[I,M]=a.useState(0),[X,j]=a.useState(!1),[D,Q]=a.useState(window.location.pathname),[T,te]=a.useState(window.location.hash);a.useEffect(()=>{const d=()=>{Q(window.location.pathname),te(window.location.hash)};return window.addEventListener("popstate",d),window.addEventListener("hashchange",d),()=>{window.removeEventListener("popstate",d),window.removeEventListener("hashchange",d)}},[]);const de=D.startsWith("/event")||T.startsWith("#/event")||T.startsWith("#event"),he=D.startsWith("/notice")||T.startsWith("#/notice")||T.startsWith("#notice"),pe=D.startsWith("/scan-attendance")||T.startsWith("#/scan-attendance")||T.startsWith("#scan-attendance"),x=D.startsWith("/assistant")||T.startsWith("#/assistant")||T.startsWith("#assistant"),z=D.startsWith("/privacy")||T.startsWith("#/privacy")||T.startsWith("#privacy"),H=D.startsWith("/terms")||T.startsWith("#/terms")||T.startsWith("#terms"),W=D==="/login"||T==="#/login"||T==="#login",q=D==="/register"||T==="#/register"||T==="#register";a.useEffect(()=>{document.documentElement.classList.toggle("dark",c==="dark"),document.documentElement.setAttribute("data-theme",c),document.documentElement.style.background=c==="dark"?"#08090a":"#ffffff",localStorage.setItem("theme",c)},[c]),a.useEffect(()=>{P.from("members").select("count",{count:"exact",head:!0}).then(({error:w})=>v(!w));const d=()=>{P.from("system_settings").select("key, value").in("key",["registration_enabled","ai_feature_enabled","document_access_members"]).then(({data:w})=>{if(w){const N=w.find(B=>B.key==="registration_enabled"),$=w.find(B=>B.key==="ai_feature_enabled"),_=w.find(B=>B.key==="document_access_members");if(N&&p(N.value==="true"),$&&S($.value==="true"),_)try{const B=JSON.parse(_.value);C(B||{})}catch{C({})}}})};d();const R=P.channel("app-system-settings-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},w=>{const N=w.new;if(!N||!N.key){d();return}if(N.key==="registration_enabled"&&p(N.value==="true"),N.key==="ai_feature_enabled"&&S(N.value==="true"),N.key==="document_access_members")try{const $=JSON.parse(N.value);C($||{})}catch{C({})}}).subscribe();return()=>{P.removeChannel(R)}},[]),a.useEffect(()=>{if(!s.stId){M(0);return}const d=async()=>{const{data:w}=await P.from("messages").select("id",{count:"exact"}).eq("receiver_st_id",s.stId).eq("status","pending");M((w==null?void 0:w.length)??0)};d();const R=P.channel(`nav-pending-${s.stId}`).on("postgres_changes",{event:"*",schema:"public",table:"messages"},()=>d()).subscribe();return()=>P.removeChannel(R)},[s.stId]),a.useEffect(()=>{let d=!0;const R=async N=>{const $=N==null?void 0:N.user;if(!$){d&&(b({role:"guest",stId:"",name:"",email:"",userId:""}),u(!1),i("dashboard"),g(!1));return}const{data:_}=await P.from("profiles").select("id, email, full_name, preferred_name, role, st_id, status").eq("id",$.id).maybeSingle();if(d){let B=((_==null?void 0:_.st_id)||"").trim();const ee=((_==null?void 0:_.email)||$.email||"").trim();if(!B&&ee)try{const{data:V}=await P.from("members").select("st_id").ilike("email",ee).maybeSingle();V!=null&&V.st_id&&(B=V.st_id.trim(),P.from("profiles").update({st_id:B}).eq("id",$.id).then(()=>{},()=>{}))}catch{}const se=(_==null?void 0:_.role)||"member",G=(_==null?void 0:_.status)||"approved",Oe={role:se,stId:B,name:(_==null?void 0:_.preferred_name)||(_==null?void 0:_.full_name)||$.email||"",fullName:(_==null?void 0:_.full_name)||"",preferredName:(_==null?void 0:_.preferred_name)||"",email:ee,userId:$.id,status:G};b(Oe),oe(Oe),u(!1),i(V=>G==="pending"||G==="pending_editor_review"?se==="member"?"my_info":"dashboard":se==="member"&&(V==="dashboard"||V==="members"||V==="access"||V==="letters"||V==="about")?"my_info":V==="about"?"dashboard":V),g(!1);const Te=window.location.pathname,fe=window.location.hash;(Te==="/login"||fe==="#/login"||fe==="#login"||Te==="/register"||fe==="#/register"||fe==="#register")&&(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")))}};P.auth.getSession().then(({data:N})=>R(N.session));const{data:w}=P.auth.onAuthStateChange((N,$)=>{g(!0),R($)});return()=>{d=!1,w.subscription.unsubscribe()}},[]),a.useEffect(()=>{if(!s.userId||s.status!=="pending"&&s.status!=="pending_editor_review")return;const d=P.channel(`profile-status-${s.userId}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"profiles",filter:`id=eq.${s.userId}`},R=>{const w=R.new;if(w&&(w.status==="approved"||w.status==="active")){const N=w.role||s.role||"member",$={...s,status:w.status,role:N,stId:w.st_id||s.stId,name:w.preferred_name||w.full_name||s.name,fullName:w.full_name||s.fullName,preferredName:w.preferred_name||s.preferredName};oe($),b($),i(N==="admin"||N==="editor"?"dashboard":"my_info")}}).subscribe();return()=>{P.removeChannel(d)}},[s.userId,s.status]);const Y=qe(s.role),F=m&&Y?"member":s.role,U=qe(F),J=U||L;a.useEffect(()=>{s.role==="guest"||s.status==="pending"||s.status==="pending_editor_review"||s.status==="rejected"||!U&&(o==="dashboard"||o==="members"||o==="access"||o==="letters")&&i("my_info")},[o,U,s.role,s.status]);const ae=d=>{i(!U&&(d==="dashboard"||d==="members"||d==="access"||d==="letters")?"my_info":d)},ke=!U&&(o==="dashboard"||o==="members"||o==="access"||o==="letters")?ue:{dashboard:Ue,notices:ra,members:Jt,committee:Xt,events:Gt,attendance:Kt,access:Zt,setup:Qt,my_info:ue,profile:ue,messages:ea,tasks:ta,letters:ia,assistant:Ve,privacy:He,terms:Ye,documents:ca}[o]||(U?Ue:ue),xe=async()=>{var d;j(!0);try{const{data:R}=await P.auth.getSession(),w=(d=R==null?void 0:R.session)==null?void 0:d.user;if(w){const{data:N}=await P.from("profiles").select("id, status, role, st_id, full_name, preferred_name, email").eq("id",w.id).maybeSingle();if(N){let $=(N.st_id||s.stId||"").trim();const _=(N.email||w.email||s.email||"").trim();if(!$&&_)try{const{data:G}=await P.from("members").select("st_id").ilike("email",_).maybeSingle();G!=null&&G.st_id&&($=G.st_id.trim())}catch{}const B=N.role||"member",ee=N.status||"approved",se={...s,status:ee,role:B,stId:$,name:N.preferred_name||N.full_name||s.name,fullName:N.full_name||s.fullName||"",preferredName:N.preferred_name||s.preferredName||"",email:_,userId:w.id};oe(se),b(se),u(!1),ee!=="pending"&&ee!=="pending_editor_review"&&i(B==="admin"||B==="editor"?"dashboard":"my_info")}}}catch(R){console.error("Error refreshing status:",R)}finally{j(!1)}},De=d=>F==="guest"?d.id==="privacy"||d.id==="terms"||d.id==="assistant"&&J:d.id==="access"?F==="admin":d.id==="letters"?U:d.id==="my_info"?!!s.stId:d.id==="members"?U:d.id==="assistant"?J:d.id==="documents"?U?!0:da(s.stId,s.email,A).length>0:U||d.id!=="dashboard";la.filter(De);const Pe=at.map(d=>({...d,items:d.items.filter(De)})).filter(d=>d.items.length>0),ne=async()=>{pa(),await P.auth.signOut(),b({role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),u(!1),i("dashboard")},me=()=>l(d=>d==="dark"?"light":"dark"),Le=()=>{u(d=>{const R=!d;return R?(o==="dashboard"||o==="members"||o==="access")&&i("my_info"):o==="my_info"&&i("dashboard"),R})};if(de)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(sa,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(he)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(na,{theme:c,onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(pe)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(oa,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(z)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(He,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(H)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Ye,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(x)return J?e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Ve,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},role:F,session:s,theme:c})}):e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem",color:"var(--text)"},children:e.jsxs("div",{className:"card",style:{maxWidth:"440px",width:"100%",textAlign:"center",padding:"2.5rem 2rem",boxShadow:"var(--shadow-xl)"},children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"var(--amber)",marginBottom:"1rem"},children:"lock"}),e.jsx("h2",{style:{margin:"0 0 8px 0",fontSize:"20px"},children:"AI Assistant Disabled"}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"14px",margin:0,lineHeight:1.5},children:"The AI Assistant feature is currently disabled for members by an administrator."}),e.jsx("button",{className:"btn btn-primary",style:{marginTop:"1.5rem",width:"100%"},onClick:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},children:"Back to Home"})]})});if(W)return s.userId&&s.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Yt,{theme:c,onNavigate:d=>{window.history.pushState({},"",d==="register"?"/register":"/"),window.dispatchEvent(new Event("popstate"))},onLoginSuccess:d=>{b(d),oe(d),u(!1);const R=d.role==="admin"||d.role==="editor";i(R?"dashboard":"my_info"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(q)return s.userId&&s.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(qt,{theme:c,regEnabled:k,onNavigate:d=>{window.history.pushState({},"",d==="login"?"/login":"/"),window.dispatchEvent(new Event("popstate"))},onRegisterSuccess:(d,R)=>{b(d),oe(d),u(!1);const w=d.role==="admin"||d.role==="editor";i(w?"dashboard":"my_info"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(s.userId&&(s.status==="pending"||s.status==="pending_editor_review")){const d=s.status==="pending_editor_review";return e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"1.25rem 1rem",boxSizing:"border-box"},children:e.jsxs("div",{className:"card",style:{maxWidth:"480px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)",padding:"1.75rem 1.25rem",boxSizing:"border-box",borderRadius:"16px"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"1.5rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"2.75rem",color:"var(--amber)",marginBottom:"0.75rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"44px"},children:d?"rate_review":"hourglass_top"})}),e.jsx("h1",{className:"page-title",style:{fontSize:"clamp(1.2rem, 4.5vw, 1.45rem)",fontWeight:700,margin:"0 0 6px 0",lineHeight:1.3,letterSpacing:"-0.015em"},children:d?"Registration Under Editorial Review":"Registration Pending"}),e.jsx("p",{className:"page-subtitle",style:{fontSize:"13.5px",color:"var(--text3)",margin:0,lineHeight:1.5},children:d?"Your application and placement skills assessment have been submitted.":"Your account is currently under review by an administrator or editor."})]}),e.jsxs("div",{style:{textAlign:"left",marginBottom:"1.75rem",padding:"1rem 1.25rem",borderRadius:"12px",background:"rgba(0, 122, 255, 0.06)",border:"1px solid rgba(0, 122, 255, 0.18)",display:"flex",flexDirection:"column",gap:"10px",boxSizing:"border-box",width:"100%"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",borderBottom:"1px solid rgba(0, 122, 255, 0.1)",paddingBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Name"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--text)",wordBreak:"break-word"},children:s.name||"—"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",borderBottom:"1px solid rgba(0, 122, 255, 0.1)",paddingBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Student ID"}),e.jsx("span",{style:{fontSize:"13.5px",fontWeight:600,fontFamily:"var(--mono, monospace)",color:"var(--text)",wordBreak:"break-all"},children:s.stId||"—"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",borderBottom:"1px solid rgba(0, 122, 255, 0.1)",paddingBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Email"}),e.jsx("span",{style:{fontSize:"13.5px",color:"var(--text)",wordBreak:"break-all"},children:s.email||"—"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",paddingTop:"2px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Review Status"}),e.jsx("div",{children:e.jsx("span",{className:"badge badge-purple",style:{display:"inline-block",fontSize:"11px",fontWeight:600,letterSpacing:"0.04em",padding:"4px 10px",borderRadius:"6px"},children:d?"PENDING EDITORIAL REVIEW":(s.role||"MEMBER").toUpperCase()})})]})]}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"13.5px",margin:"0 0 1.75rem 0",lineHeight:"1.6"},children:d?"Registration submitted for editorial review. Your functional team will be assigned by the executive committee based on your skills assessment.":"Once approved, you will be granted access to the society portal. Thank you for your patience!"}),e.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",width:"100%"},children:[e.jsxs("button",{className:"btn btn-primary",type:"button",disabled:X,style:{minWidth:"140px",flex:"1 1 140px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:xe,children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"18px",animation:X?"spin 0.8s linear infinite":"none"},children:"refresh"}),X?"Checking...":"Refresh Status"]}),e.jsx("button",{className:"btn btn-ghost",type:"button",style:{minWidth:"100px",flex:"0 1 100px"},onClick:ne,children:"Logout"})]})]})})}return s.userId&&s.status==="rejected"?e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"1.25rem 1rem",boxSizing:"border-box"},children:e.jsxs("div",{className:"card",style:{maxWidth:"480px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)",padding:"1.75rem 1.25rem",boxSizing:"border-box",borderRadius:"16px"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"1.5rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"2.75rem",color:"var(--red)",marginBottom:"0.75rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"44px"},children:"cancel"})}),e.jsx("h1",{className:"page-title",style:{fontSize:"clamp(1.2rem, 4.5vw, 1.45rem)",fontWeight:700,margin:"0 0 6px 0",lineHeight:1.3,letterSpacing:"-0.015em"},children:"Registration Rejected"}),e.jsx("p",{className:"page-subtitle",style:{fontSize:"13.5px",color:"var(--text3)",margin:0,lineHeight:1.5},children:"Your registration request has been rejected by the administrator or editor"})]}),e.jsx("div",{style:{textAlign:"center",marginBottom:"1.75rem",padding:"1rem",borderRadius:"12px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"var(--red)"},children:"Your registration has been rejected."})}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"13.5px",marginBottom:"1.75rem",lineHeight:"1.6"},children:"Please contact the society administrators if you believe this was in error or if you need to submit correct information."}),e.jsx("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:e.jsx("button",{className:"btn btn-ghost",type:"button",onClick:ne,children:"Logout"})})]})}):y&&!s.userId?e.jsxs("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",flexDirection:"column",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"32px",height:"32px",border:"3px solid var(--border)",borderTop:"3px solid var(--accent)",borderRadius:"50%",animation:"spin 0.6s linear infinite",margin:"0 auto 12px"}}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),e.jsx("div",{style:{position:"fixed",bottom:"24px",left:0,right:0},children:e.jsx(Ht,{session:s})})]}):s.role==="guest"?e.jsxs(a.Suspense,{fallback:e.jsx(K,{}),children:[e.jsx(aa,{theme:c,onThemeToggle:me,regEnabled:k,aiEnabled:J,onLoginClick:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},onRegisterClick:()=>{window.history.pushState({},"","/register"),window.dispatchEvent(new Event("popstate"))}}),J&&e.jsx(Fe,{role:"guest",session:s,theme:c,onNavigate:d=>{d==="assistant"?(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate"))):i(d)},currentPage:"landing"})]}):e.jsxs("div",{className:"app-shell",children:[e.jsx(Ft,{page:o,setPage:ae,visibleSections:Pe,session:s,pendingMsgCount:I,theme:c,toggleTheme:me,isRealStaff:Y,viewAsMember:m,handleToggleViewAsMember:Le,handleLogout:ne,connected:h,canAccessAi:J}),e.jsxs("aside",{className:`sidebar ${f?"open":"collapsed"}`,children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[e.jsx("img",{src:`/${c==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"logo-img",alt:"ADSS Logo"}),f&&e.jsx("div",{className:"logo-text min-w-0",children:e.jsx("span",{className:"logo-title",children:"ADSS RUHUNA"})})]}),e.jsx("button",{className:"sidebar-toggle",onClick:()=>E(!f),"aria-label":"Toggle navigation menu",children:f?e.jsx(Nt,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"}):e.jsx(ve,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"})})]}),e.jsxs("div",{className:"connection-badge",children:[e.jsx("span",{className:`dot ${h===null?"pending":h?"ok":"err"}`}),f&&e.jsx("span",{className:"text-[10px] font-berkeley-mono uppercase tracking-wider text-[#8a8f98]",children:h===null?"SYNCHRONIZING...":h?"DB SYNCHRONIZED":"OFFLINE"})]}),e.jsx("nav",{className:"sidebar-nav",children:Pe.map(d=>e.jsxs("div",{className:"sidebar-group",children:[f&&e.jsx("div",{className:"sidebar-group-title",children:d.title}),e.jsx("div",{className:"sidebar-group-items",children:d.items.map(R=>{const w=R.icon,N=o===R.id;return e.jsxs("button",{className:`nav-item ${N?"active":""}`,onClick:()=>{i(R.id),window.innerWidth<=768&&E(!1)},title:f?void 0:R.label,children:[e.jsx("span",{className:"nav-icon",children:e.jsx(w,{className:"w-4 h-4"})}),f&&e.jsx("span",{className:"nav-label",children:R.label}),R.id==="messages"&&I>0&&e.jsx("span",{className:"nav-badge-pill",children:I>99?"99+":I})]},R.id)})})]},d.title))}),f?e.jsxs("div",{className:"sidebar-footer",children:[e.jsxs("div",{className:`sidebar-grid-row ${Y?"two-cols":"one-col"}`,children:[Y&&e.jsxs("div",{className:`sidebar-compact-card ${m?"":"active-staff"}`,onClick:Le,title:m?"Switch to Staff View":"Switch to Member View",children:[e.jsxs("div",{className:"sidebar-compact-header",children:[e.jsx(Ge,{className:"w-3.5 h-3.5 icon text-[#6366f1]"}),e.jsx("span",{className:"sidebar-compact-title",children:m?"Member":"Staff"})]}),e.jsx("div",{className:"sidebar-compact-badge",children:m?"OFF":"ON"})]}),e.jsxs("div",{className:`sidebar-compact-card ${c==="dark"?"active-dark":""}`,onClick:me,title:`Switch to ${c==="dark"?"light":"dark"} mode`,children:[e.jsxs("div",{className:"sidebar-compact-header",children:[c==="dark"?e.jsx(Se,{className:"w-3.5 h-3.5 icon text-amber-400"}):e.jsx(_e,{className:"w-3.5 h-3.5 icon text-amber-500"}),e.jsx("span",{className:"sidebar-compact-title",children:c==="dark"?"Dark":"Light"})]}),e.jsx("div",{className:`sidebar-toggle-switch mini ${c==="dark"?"active":""}`,children:e.jsx("div",{className:"sidebar-toggle-thumb"})})]})]}),e.jsx("div",{className:"sidebar-divider"}),e.jsxs("div",{className:"sidebar-pref-card logout-card",onClick:s.role!=="guest"?ne:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")),window.innerWidth<=768&&E(!1)},children:[e.jsxs("div",{className:"sidebar-pref-left",children:[e.jsx(Ce,{className:"w-3.5 h-3.5 text-[#eb5757]"}),e.jsx("span",{className:"sidebar-logout-title",children:s.role!=="guest"?"Logout":"Login"})]}),e.jsx(ve,{className:"w-3.5 h-3.5 text-[#62666d]"})]})]}):e.jsxs("div",{className:"p-2 border-t border-[#23252a] flex flex-col items-center gap-2",children:[e.jsx("button",{onClick:me,className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#8a8f98] hover:text-white hover:bg-[#161718] transition-colors",title:`Switch to ${c==="dark"?"light":"dark"} mode`,children:c==="dark"?e.jsx(Se,{className:"w-4 h-4 text-amber-400"}):e.jsx(_e,{className:"w-4 h-4 text-amber-500"})}),e.jsx("button",{onClick:s.role!=="guest"?ne:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#eb5757] hover:bg-[#eb5757]/10 transition-colors",title:s.role!=="guest"?"Logout":"Login",children:e.jsx(Ce,{className:"w-4 h-4"})})]})]}),e.jsx("main",{className:"main-content",children:e.jsx("div",{className:"page-wrapper",children:e.jsx(Bt,{onNavigate:ae,children:e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(ke,{onNavigate:ae,isAdmin:U,role:F,session:s,theme:c,docAccessMembers:A,setDocAccessMembers:C})})},o)})}),J&&o!=="assistant"&&e.jsx(Fe,{role:F,session:s,onNavigate:ae,currentPage:o,theme:c})]})}function fa({phone:r}){const[n,t]=a.useState(!1);if(!r)return e.jsx("span",{className:"text-muted",children:"Not provided"});const c=o=>{let i=o.replace(/\D/g,"");return i.startsWith("0")&&i.length===10&&(i="94"+i.substring(1)),`https://wa.me/${i}`},l=o=>`tel:${o.replace(/[^\d+]/g,"")}`;return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"contact-number-link",onClick:()=>t(!0),children:r}),n&&e.jsx("div",{className:"contact-choice-overlay",onClick:o=>o.target===o.currentTarget&&t(!1),children:e.jsxs("div",{className:"contact-choice-card",children:[e.jsxs("div",{className:"contact-choice-header",children:[e.jsx("h3",{className:"contact-choice-title",children:"Contact Options"}),e.jsx("button",{className:"contact-choice-close",onClick:()=>t(!1),children:"×"})]}),e.jsxs("div",{className:"contact-choice-body",children:[e.jsxs("a",{href:l(r),className:"contact-choice-btn call",onClick:()=>t(!1),children:[e.jsx("span",{children:"📞"}),e.jsx("span",{children:"Call Phone"})]}),e.jsxs("a",{href:c(r),target:"_blank",rel:"noopener noreferrer",className:"contact-choice-btn whatsapp",onClick:()=>t(!1),children:[e.jsx("span",{children:"💬"}),e.jsx("span",{children:"WhatsApp Message"})]})]})]})})]})}function ba({stId:r,onClose:n}){var I,M,X,j,D,Q,T,te,de,he,pe;const[t,c]=a.useState(null),[l,o]=a.useState(!0),[i,h]=a.useState("overview"),[v,f]=a.useState(null),[E,s]=a.useState(!1),b=(x,z)=>{x&&navigator.clipboard.writeText(x).then(()=>{f(z),setTimeout(()=>f(null),1800)})},y=()=>{var W,q,Y;if(!t)return;const x=((W=t.letters)==null?void 0:W.filter(F=>F.status==="done"||F.status==="completed").length)||0,z=((q=t.letters)==null?void 0:q.length)||0,H=`STUDENT DOSSIER: ${t.preferred_name||t.name}
ID: ${t.st_id}
Full Name: ${t.name||"—"}
Calling Name: ${t.preferred_name||"—"}
Academic Level: Year ${t.level||"—"}
Society Position: ${t.st_position||"General Member"}
Function: ${t.member_function||"Unassigned"}
Email: ${t.email||"—"}
Phone: ${t.mobile_number||"—"}
Attendance Rate: ${p}% (${k}/${g} events)
OC Positions: ${((Y=t.oc)==null?void 0:Y.length)||0}
Letter Requests: ${z} (${x} Issued)
LinkedIn: ${t.linkedin_url||"None"}`;navigator.clipboard.writeText(H).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};if(a.useEffect(()=>{if(!r)return;let x=!0;const z=W=>{W.key==="Escape"&&(n==null||n())};return window.addEventListener("keydown",z),(async()=>{o(!0);try{const W=typeof r=="string"?r.trim():String(r),{data:q,error:Y}=await P.from("members").select("*").eq("st_id",W).maybeSingle();if(Y)throw Y;if(!q){alert(`Student profile not found for ID: ${W}`),n==null||n();return}const F=q.st_id||W,{data:U,error:J}=await P.from("oc").select("oc_position, apply_status, events(name, date), functions(function_name)").eq("st_id",F);if(J)throw J;const{data:ae,error:je}=await P.from("attendance").select("attend, events(name, date)").eq("st_id",F);if(je)throw je;const{data:ke,error:xe}=await P.from("letter_requests").select("id, st_id, name_on_letter, selected_events, additional_details, status, created_at").eq("st_id",F).order("created_at",{ascending:!1});xe&&console.warn("Could not fetch letter requests:",xe),x&&c({...q,oc:U||[],attendance:ae||[],letters:ke||[]})}catch(W){x&&(alert("Error loading profile: "+W.message),n==null||n())}finally{x&&o(!1)}})(),()=>{x=!1,window.removeEventListener("keydown",z)}},[r,n]),!r)return null;const g=((I=t==null?void 0:t.attendance)==null?void 0:I.length)||0,k=((M=t==null?void 0:t.attendance)==null?void 0:M.filter(x=>x.attend==="YES").length)||0,p=g>0?Math.round(k/g*100):0,L=((X=t==null?void 0:t.oc)==null?void 0:X.filter(x=>x.apply_status==="Accept").length)||0,S=((j=t==null?void 0:t.letters)==null?void 0:j.filter(x=>x.status==="done"||x.status==="completed").length)||0,A=((t==null?void 0:t.mobile_number)||"").replace(/\D/g,""),C=A?`https://wa.me/${A.startsWith("0")?"94"+A.substring(1):A}`:null,m=t!=null&&t.linkedin_url?t.linkedin_url.trim().toLowerCase().startsWith("http")?t.linkedin_url.trim():`https://${t.linkedin_url.trim()}`:null,u=x=>{if(!x)return"S";const z=x.trim().split(/\s+/);return z.length===1?z[0].substring(0,2).toUpperCase():(z[0][0]+z[z.length-1][0]).toUpperCase()};return e.jsx("div",{className:"fixed inset-0 z-[120] bg-black/40 dark:bg-[#08090a]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150",onClick:x=>x.target===x.currentTarget&&(n==null?void 0:n()),role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"bg-[#ffffff] dark:bg-[#0f1011] border border-[#e4e4e7] dark:border-[#23252a] rounded-[12px] shadow-[0_24px_48px_rgba(0,0,0,0.25),inset_0_0_0_1px_#e4e4e7] dark:shadow-[0_24px_48px_rgba(0,0,0,0.8),inset_0_0_0_1px_#23252a] w-full max-w-[680px] max-h-[92vh] flex flex-col overflow-hidden text-[#3f3f46] dark:text-[#d0d6e0] my-auto",children:[e.jsxs("div",{className:"px-5 py-3.5 border-b border-[#e4e4e7] dark:border-[#23252a] bg-[#f7f8f8]/50 dark:bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] tracking-wider text-[#62666d] dark:text-[#8a8f98] uppercase bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-2 py-0.5 rounded-[4px] font-[510]",children:"STUDENT DOSSIER"}),t&&e.jsx("span",{className:"font-berkeley-mono text-[11px] text-[#8a8f98] dark:text-[#62666d] truncate",children:t.st_id})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[t&&e.jsx("button",{type:"button",onClick:y,className:"h-7 px-2.5 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] hover:border-[#d4d4d8] dark:hover:border-[#383b3f] transition-colors font-berkeley-mono text-[11px] flex items-center gap-1.5",title:"Copy dossier summary to clipboard",children:E?e.jsxs(e.Fragment,{children:[e.jsx(Z,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(St,{className:"w-3 h-3"}),e.jsx("span",{children:"Share"})]})}),e.jsx("button",{type:"button",onClick:n,className:"w-7 h-7 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] hover:border-[#d4d4d8] dark:hover:border-[#383b3f] transition-colors flex items-center justify-center text-[13px]",title:"Close (ESC)",children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"overflow-y-auto p-5 space-y-5 flex-1 custom-scrollbar",children:l||!t?e.jsxs("div",{className:"py-16 text-center flex flex-col items-center justify-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-[#e4f222] border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98]",children:"Retrieving student dossier telemetry..."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dossier-hero flex flex-col sm:!flex-row gap-4 sm:gap-5 items-center sm:!items-center text-center sm:!text-left bg-[#f4f5f6]/40 dark:bg-[#161718]/40 border border-[#e4e4e7] dark:border-[#23252a] rounded-[10px] p-4 sm:p-5",children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[t.profile_image_url?e.jsx("img",{src:t.profile_image_url,alt:t.preferred_name||t.name,className:"dossier-avatar w-20 h-20 sm:!w-28 sm:!h-28 rounded-[10px] sm:rounded-[12px] object-cover border border-[#e4e4e7] dark:border-[#23252a] shadow-sm bg-[#f4f5f6] dark:bg-[#161718]",onError:x=>{x.target.onerror=null,x.target.src="https://api.dicebear.com/7.x/initials/svg?seed="+encodeURIComponent(t.preferred_name||t.name)}}):e.jsx("div",{className:"dossier-avatar w-20 h-20 sm:!w-28 sm:!h-28 rounded-[10px] sm:rounded-[12px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] flex items-center justify-center font-berkeley-mono text-[24px] sm:text-[32px] font-[510] text-[#3f3f46] dark:text-[#d0d6e0]",children:u(t.preferred_name||t.name)}),e.jsx("span",{className:`absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white dark:border-[#0f1011] ${t.status==="active"||t.status==="approved"||!t.status?"bg-[#27a644]":"bg-[#f59e0b]"}`,title:t.status||"Active"})]}),e.jsxs("div",{className:"dossier-hero-info flex-1 min-w-0 w-full space-y-1.5 sm:space-y-2",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"dossier-hero-row flex items-baseline justify-center sm:!justify-start gap-2 flex-wrap",children:[e.jsx("h1",{className:"text-[20px] sm:text-[23px] font-[510] text-[#0a0a0b] dark:text-[#ffffff] tracking-[-0.022em] leading-tight",children:t.preferred_name||t.name}),t.preferred_name&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#62666d] dark:text-[#8a8f98] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-1.5 py-0.5 rounded-[3px]",children:"Calling Name"})]}),t.preferred_name&&t.name&&e.jsxs("div",{className:"text-[12.5px] sm:text-[13px] text-[#62666d] dark:text-[#8a8f98] mt-1 font-[400] truncate",children:["Full Name: ",e.jsx("span",{className:"text-[#3f3f46] dark:text-[#d0d6e0] font-[510]",children:t.name})]})]}),e.jsxs("div",{className:"dossier-hero-row flex items-center justify-center sm:!justify-start gap-1.5 flex-wrap pt-0.5",children:[e.jsxs("button",{type:"button",onClick:()=>b(t.st_id,"st_id"),className:"font-berkeley-mono text-[11px] text-[#3f3f46] dark:text-[#d0d6e0] bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] px-2 py-0.5 rounded-[4px] inline-flex items-center gap-1.5 transition-colors group/copy",title:"Click to copy Student ID",children:[e.jsx("span",{children:t.st_id}),v==="st_id"?e.jsx(Z,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(ie,{className:"w-3 h-3 text-[#8a8f98] dark:text-[#62666d] group-hover/copy:text-[#0a0a0b] dark:group-hover/copy:text-white transition-colors"})]}),t.level?e.jsx("span",{className:`font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] border uppercase ${t.level>4?"bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border-[#e4e4e7] dark:border-[#23252a]":"bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border-[#6366f1]/30"}`,children:t.level>4?"ALUMNI":`YEAR ${t.level}`}):null,t.st_position&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#e4f222]/10 text-[#5f6b00] dark:text-[#e4f222] border border-[#e4f222]/30",children:t.st_position}),t.member_function&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#f4f5f6] dark:bg-[#161718] text-[#3f3f46] dark:text-[#d0d6e0] border border-[#e4e4e7] dark:border-[#23252a]",children:t.member_function})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-berkeley-mono text-[11px]",children:[e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Attendance Rate"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsxs("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:[p,"%"]}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[k,"/",g]})]}),e.jsx("div",{className:"w-full bg-[#e4e4e7] dark:bg-[#08090a] h-1 rounded-full overflow-hidden",children:e.jsx("div",{className:"bg-[#27a644] h-full rounded-full transition-all duration-300",style:{width:`${p}%`}})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"OC Engagements"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:((D=t.oc)==null?void 0:D.length)||0}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[L," Accepted"]})]}),e.jsx("div",{className:"text-[10px] text-[#62666d] dark:text-[#8a8f98] truncate",children:((Q=t.oc)==null?void 0:Q.length)>0?"Active committee":"No assignments"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Letter Requests"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:((T=t.letters)==null?void 0:T.length)||0}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[S," Issued"]})]}),e.jsx("div",{className:"text-[10px] text-[#62666d] dark:text-[#8a8f98] truncate",children:((te=t.letters)==null?void 0:te.length)>0?"Dossier logged":"No requests"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Membership"}),e.jsx("div",{className:"flex items-baseline justify-between",children:e.jsx("span",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff] uppercase truncate",children:t.role||"Member"})}),e.jsx("div",{className:"text-[10px] text-[#27a644] truncate",children:"✓ Verified Profile"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap bg-[#f4f5f6]/40 dark:bg-[#161718]/40 border border-[#e4e4e7] dark:border-[#23252a] p-2 rounded-[8px]",children:[t.email?e.jsxs("div",{className:"flex items-center gap-1 bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[6px] px-2.5 py-1",children:[e.jsx(ye,{className:"w-3.5 h-3.5 text-[#62666d] dark:text-[#8a8f98]"}),e.jsx("a",{href:`mailto:${t.email}`,className:"text-[11.5px] text-[#3f3f46] dark:text-[#d0d6e0] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] transition-colors truncate max-w-[170px]",title:`Send email to ${t.email}`,children:t.email}),e.jsx("button",{type:"button",onClick:()=>b(t.email,"email"),className:"p-1 text-[#8a8f98] dark:text-[#62666d] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] rounded transition-colors ml-1",title:"Copy Email",children:v==="email"?e.jsx(Z,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(ie,{className:"w-3 h-3"})})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#8a8f98] dark:text-[#62666d] px-2",children:"No email provided"}),t.mobile_number?e.jsxs("div",{className:"flex items-center gap-1 bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[6px] px-2.5 py-1 font-berkeley-mono text-[11px]",children:[e.jsx(_t,{className:"w-3.5 h-3.5 text-[#62666d] dark:text-[#8a8f98]"}),e.jsx(fa,{phone:t.mobile_number}),C&&e.jsxs("a",{href:C,target:"_blank",rel:"noreferrer",className:"ml-1 text-[10px] text-[#27a644] hover:underline flex items-center gap-0.5",title:"Chat on WhatsApp",children:[e.jsx(Ct,{className:"w-3 h-3"}),e.jsx("span",{children:"WA"})]})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#8a8f98] dark:text-[#62666d] px-2",children:"No phone provided"}),m&&e.jsxs("a",{href:m,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] text-[#4f46e5] dark:text-[#818cf8] px-2.5 py-1 rounded-[6px] font-berkeley-mono text-[11px] transition-colors ml-auto",title:"Open LinkedIn in new tab",children:[e.jsx("span",{children:"LinkedIn Profile"}),e.jsx(et,{className:"w-3 h-3"})]})]}),e.jsxs("div",{className:"border-b border-[#e4e4e7] dark:border-[#23252a] flex items-center gap-1 font-berkeley-mono text-[11.5px] overflow-x-auto",children:[e.jsxs("button",{type:"button",onClick:()=>h("overview"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${i==="overview"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(Ze,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Dossier Overview"})]}),e.jsxs("button",{type:"button",onClick:()=>h("attendance"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${i==="attendance"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(le,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Attendance Record"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((de=t.attendance)==null?void 0:de.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>h("oc"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${i==="oc"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(Ie,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Committee (OC)"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((he=t.oc)==null?void 0:he.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>h("letters"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${i==="letters"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(ze,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Letters"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((pe=t.letters)==null?void 0:pe.length)||0})]})]}),e.jsxs("div",{children:[i==="overview"&&e.jsx("div",{className:"space-y-3 font-sans",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Full Legal Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.name||"—"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Preferred Calling Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#5f6b00] dark:text-[#e4f222]",children:t.preferred_name||e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] italic",children:"Not provided"})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Functional Division"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.member_function||e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d]",children:"General Pool"})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Society Position / Rank"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.st_position||"Active Society Member"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Academic Standing"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.level?`Undergraduate Year ${t.level}`:"Undergraduate"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Profile Registration Date"}),e.jsx("div",{className:"font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98]",children:t.created_at?new Date(t.created_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Legacy Database Record"})]})]})}),i==="attendance"&&e.jsx("div",{className:"space-y-3",children:t.attendance.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(le,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No event attendance records on file for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Name"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Date"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Attendance"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.attendance.map((x,z)=>{var H,W;return e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff] block",children:((H=x.events)==null?void 0:H.name)||"Official Society Session"})}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#62666d] dark:text-[#8a8f98]",children:((W=x.events)==null?void 0:W.date)||"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${x.attend==="YES"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30"}`,children:x.attend==="YES"?e.jsxs(e.Fragment,{children:[e.jsx(Ae,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Attended"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Me,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Absent"})]})})})]},z)})})]})})})}),i==="oc"&&e.jsx("div",{className:"space-y-3",children:t.oc.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(Ie,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No organizing committee appointments logged for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event & Team"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Assigned Role(s)"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Selection Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.oc.map((x,z)=>{var H,W;return e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff] block",children:((H=x.events)==null?void 0:H.name)||"Official Event"}),e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#4f46e5] dark:text-[#818cf8]",children:((W=x.functions)==null?void 0:W.function_name)||"General Committee"})]}),e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:x.oc_position?x.oc_position.split(",").map((q,Y)=>e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border border-[#6366f1]/30",children:q.trim()},Y)):e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border border-[#e4e4e7] dark:border-[#23252a]",children:"Committee Member"})})}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:x.apply_status==="Accept"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#27a644]/10 text-[#27a644] border border-[#27a644]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(Z,{className:"w-2.5 h-2.5"})," Accepted"]}):x.apply_status==="Reject"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#eb5757]/10 text-[#eb5757] border border-[#eb5757]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(re,{className:"w-2.5 h-2.5"})," Rejected"]}):x.apply_status==="Interview Scheduled"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#02b8cc]/10 text-[#02b8cc] border border-[#02b8cc]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(be,{className:"w-2.5 h-2.5"})," Interview"]}):e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#f59e0b]/10 text-[#b45309] dark:text-[#f59e0b] border border-[#f59e0b]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(be,{className:"w-2.5 h-2.5"})," Pending"]})})]},z)})})]})})})}),i==="letters"&&e.jsx("div",{className:"space-y-3",children:t.letters.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(ze,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No letter requests or issued certificates found for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Document & Events"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Submitted"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.letters.map(x=>e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:"Appreciation Letter"}),x.name_on_letter&&e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border border-[#e4e4e7] dark:border-[#23252a]",children:["Name: ",x.name_on_letter]})]}),x.selected_events&&Array.isArray(x.selected_events)&&x.selected_events.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:x.selected_events.map((z,H)=>e.jsx("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border border-[#6366f1]/30",children:z},H))}),x.additional_details&&e.jsx("p",{className:"text-[11px] text-[#62666d] dark:text-[#8a8f98] mt-1 line-clamp-2",children:x.additional_details})]}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#62666d] dark:text-[#8a8f98] whitespace-nowrap align-top",children:x.created_at?new Date(x.created_at).toLocaleDateString():"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right whitespace-nowrap align-top",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${x.status==="done"||x.status==="completed"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":x.status==="inprogress"?"bg-[#818cf8]/10 text-[#4f46e5] dark:text-[#818cf8] border-[#818cf8]/30":x.status==="rejected"?"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30":"bg-[#f59e0b]/10 text-[#b45309] dark:text-[#f59e0b] border-[#f59e0b]/30"}`,children:x.status==="done"||x.status==="completed"?e.jsxs(e.Fragment,{children:[e.jsx(Ae,{className:"w-2.5 h-2.5 text-[#27a644]"}),e.jsx("span",{children:"Issued"})]}):x.status==="inprogress"?e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-2.5 h-2.5 text-[#4f46e5] dark:text-[#818cf8]"}),e.jsx("span",{children:"In Progress"})]}):x.status==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx(Me,{className:"w-2.5 h-2.5 text-[#eb5757]"}),e.jsx("span",{children:"Rejected"})]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-2.5 h-2.5 text-[#b45309] dark:text-[#f59e0b]"}),e.jsx("span",{children:"Pending"})]})})})]},x.id))})]})})})})]})]})}),e.jsxs("div",{className:"px-5 py-3.5 border-t border-[#e4e4e7] dark:border-[#23252a] bg-[#f7f8f8]/50 dark:bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"font-berkeley-mono text-[11px] text-[#8a8f98] dark:text-[#62666d] hidden sm:block",children:["Press ",e.jsx("kbd",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-1 py-0.5 rounded text-[#62666d] dark:text-[#8a8f98]",children:"ESC"})," to exit"]}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsxs("button",{type:"button",onClick:y,className:"h-8 px-3.5 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] text-[#3f3f46] dark:text-[#d0d6e0] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] font-berkeley-mono text-[11.5px] transition-colors flex items-center gap-1.5",children:[E?e.jsx(Z,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(ie,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:E?"Copied":"Copy Summary"})]}),e.jsx("button",{type:"button",onClick:n,className:"h-8 px-4 rounded-[6px] bg-[#e4f222] text-[#08090a] font-[510] text-[12.5px] hover:bg-[#d5e31f] transition-all flex items-center gap-1.5 shadow-sm active:scale-[0.98]",children:e.jsx("span",{children:"Close Dossier"})})]})]})]})})}const st=a.createContext({activeStudentId:null,openStudentProfile:()=>{},closeStudentProfile:()=>{}});function ua({children:r}){const[n,t]=a.useState(null),c=a.useCallback(o=>{o&&typeof o=="string"?t(o.trim()):o&&t(String(o))},[]),l=a.useCallback(()=>{t(null)},[]);return e.jsxs(st.Provider,{value:{activeStudentId:n,openStudentProfile:c,closeStudentProfile:l},children:[r,n&&e.jsx(ba,{stId:n,onClose:l})]})}function ga(){const r=a.useContext(st);return r||{activeStudentId:null,openStudentProfile:n=>{console.warn("StudentProfileProvider missing, cannot open:",n)},closeStudentProfile:()=>{}}}function Sa({stId:r,name:n,subtext:t,showIcon:c=!0,showAvatar:l=!1,showId:o=!1,avatarUrl:i,className:h="",size:v="md",children:f}){const{openStudentProfile:E}=ga(),s=n||f||(r?`Student (${r})`:"Unknown Student");if(!r)return e.jsx("span",{className:`text-gray-600 dark:text-[#8a8f98] font-[400] ${h}`,children:s});const b=k=>{k.stopPropagation(),E(r)},y={sm:"text-[12px] gap-1",md:"text-[13px] gap-1.5",lg:"text-[15px] gap-2"},g=k=>{if(!k)return"S";const p=k.trim().split(/\s+/);return p.length===1?p[0].substring(0,2).toUpperCase():(p[0][0]+p[p.length-1][0]).toUpperCase()};return e.jsxs("button",{type:"button",onClick:b,title:`Inspect Student Dossier (${r})`,className:`inline-flex items-center text-left group/student transition-all duration-150 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-indigo-500/50 dark:focus:ring-[#e4f222]/50 ${y[v]||y.md} ${h}`,children:[l&&e.jsx("span",{className:"w-6 h-6 rounded-[4px] bg-gray-100 dark:bg-[#161718] border border-gray-200 dark:border-[#23252a] overflow-hidden flex items-center justify-center font-berkeley-mono text-[10px] text-gray-700 dark:text-[#ffffff] flex-shrink-0 group-hover/student:border-indigo-500/40 dark:group-hover/student:border-[#e4f222]/40 transition-colors",children:i?e.jsx("img",{src:i,alt:"",className:"w-full h-full object-cover"}):g(s)}),e.jsxs("span",{className:"flex flex-col min-w-0",children:[e.jsxs("span",{className:"flex items-center gap-1 leading-snug",children:[e.jsx("span",{className:"font-[510] text-gray-900 dark:text-[#ffffff] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] transition-colors truncate",children:s}),c&&e.jsx("span",{className:"inline-flex items-center text-gray-400 dark:text-[#62666d] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] group-hover/student:translate-x-0.5 transition-all flex-shrink-0","aria-hidden":"true",children:e.jsx(et,{className:"w-2.5 h-2.5 opacity-60 group-hover/student:opacity-100"})})]}),(t||o)&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-gray-500 dark:text-[#8a8f98] group-hover/student:text-gray-700 dark:group-hover/student:text-[#d0d6e0] transition-colors truncate",children:t||r})]})]})}const rt=a.createContext(null),Ne=[{id:"cycle-2024-2025",name:"2024/2025",startDate:"2024-01-01",endDate:"2025-12-31",isActive:!0,isVisible:!0,description:"ADSS Academic Cycle 2024/2025"},{id:"cycle-2023-2024",name:"2023/2024",startDate:"2023-01-01",endDate:"2023-12-31",isActive:!1,isVisible:!0,description:"ADSS Academic Cycle 2023/2024"}];function va({children:r}){const[n,t]=a.useState(()=>{try{const p=localStorage.getItem("adss_cycles_cache");return p?JSON.parse(p):Ne}catch{return Ne}}),[c,l]=a.useState(()=>{try{return localStorage.getItem("adss_active_cycle_id")||"cycle-2024-2025"}catch{return"cycle-2024-2025"}}),[o,i]=a.useState(()=>{try{return localStorage.getItem("adss_selected_cycle_id")||"active"}catch{return"active"}}),[h,v]=a.useState(!0),f=a.useMemo(()=>n.find(p=>p.id===c||p.isActive)||n[0]||Ne[0],[n,c]),E=a.useMemo(()=>o==="all"?null:o==="active"?f:n.find(p=>p.id===o)||f,[n,o,f]),s=a.useMemo(()=>n.filter(p=>p.isVisible!==!1||p.id===(f==null?void 0:f.id)),[n,f]),b=a.useCallback(async()=>{try{const{data:p,error:L}=await P.from("system_settings").select("key, value").in("key",["academic_cycles","active_cycle_id"]);if(!L&&p&&p.length>0){const S=p.find(u=>u.key==="academic_cycles"),A=p.find(u=>u.key==="active_cycle_id");let C=null;if(S&&S.value)try{const u=JSON.parse(S.value);Array.isArray(u)&&u.length>0&&(C=u)}catch(u){console.error("Failed to parse academic_cycles:",u)}let m=(A==null?void 0:A.value)||null;if(C){if(!m){const u=C.find(I=>I.isActive);m=u?u.id:C[0].id}t(C),l(m);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(C)),localStorage.setItem("adss_active_cycle_id",m)}catch{}}}}catch(p){console.warn("Could not load cycles from DB, using fallback:",p)}finally{v(!1)}},[]);a.useEffect(()=>{b();const p=P.channel("system-settings-cycles-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},L=>{var A;const S=(A=L.new)==null?void 0:A.key;(S==="academic_cycles"||S==="active_cycle_id")&&b()}).subscribe();return()=>{P.removeChannel(p)}},[b]);const y=a.useCallback(p=>{i(p);try{localStorage.setItem("adss_selected_cycle_id",p)}catch{}},[]),g=a.useCallback((p,L=E)=>{if(!L)return!0;if(!p)return!1;try{let S="";return typeof p=="string"?S=p.substring(0,10):p instanceof Date?S=p.toISOString().substring(0,10):S=String(p).substring(0,10),!(L.startDate&&S<L.startDate||L.endDate&&S>L.endDate)}catch{return!0}},[E]),k=a.useCallback(async(p,L)=>{var S,A;try{const C=L||((S=p.find(M=>M.isActive))==null?void 0:S.id)||((A=p[0])==null?void 0:A.id),m=p.map(M=>({...M,isActive:M.id===C})),[u,I]=await Promise.all([P.from("system_settings").upsert({key:"academic_cycles",value:JSON.stringify(m)},{onConflict:"key"}),P.from("system_settings").upsert({key:"active_cycle_id",value:C},{onConflict:"key"})]);if(u.error)throw u.error;if(I.error)throw I.error;t(m),l(C);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(m)),localStorage.setItem("adss_active_cycle_id",C)}catch{}return{success:!0}}catch(C){return console.error("Error saving cycles to system_settings:",C),{success:!1,error:C.message||"Failed to save cycles"}}},[]);return e.jsx(rt.Provider,{value:{cycles:n,visibleCycles:s,activeCycle:f,activeCycleId:c,selectedCycleId:o,selectedCycle:E,setSelectedCycleId:y,isWithinCycle:g,saveCycles:k,reloadCycles:b,loading:h},children:r})}function _a(){const r=a.useContext(rt);if(!r)throw new Error("useCycle must be used within a CycleProvider");return r}it.createRoot(document.getElementById("root")).render(e.jsx(Je.StrictMode,{children:e.jsx(va,{children:e.jsx(ua,{children:e.jsx(Pt,{children:e.jsx(ma,{})})})})}));export{ce as A,Wt as C,Ht as M,fa as P,Sa as S,ba as a,_a as b,ga as c,da as g,P as s,Lt as u};
