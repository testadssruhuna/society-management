const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-DOBYIyqJ.js","assets/vendor-react-DFHPY69B.js","assets/vendor-icons-CuqApSGN.js","assets/vendor-supabase-DqvqN50L.js","assets/vendor-6pgEYSA5.js","assets/Register-Dqa6VCWo.js","assets/imageOptimizer-B7dhkxfR.js","assets/PlacementQuestionnaire-D9l05qed.js","assets/Dashboard-i3Re58t0.js","assets/queryCache-9w56PyI2.js","assets/CycleSelector-Df-DbmAR.js","assets/Members-DBcZXoOi.js","assets/Pagination-kQxqtPAr.js","assets/Events-CrrTtpOh.js","assets/DatePicker-kEb5ri2t.js","assets/DatePicker-CPVejJYq.css","assets/Attendance-nxwNQ4CM.js","assets/EventSelect-DnYMPT01.js","assets/vendor-scanner-CRRJkh5G.js","assets/Committee-DUXHBGLx.js","assets/Setup-CpCHcoH8.js","assets/Access-BfnUZFiB.js","assets/documentService-7sGQ-hpN.js","assets/MyInfo-Dh82Iyre.js","assets/Messages-Di3kq1IU.js","assets/Tasks-DBfkexLj.js","assets/Landing-Bir9lGx1.js","assets/PublicEvent-BqEqmSEU.js","assets/Notices-HTPl2hl7.js","assets/vendor-markdown-C_9llh6Y.js","assets/PublicNotice-DtcXi8YZ.js","assets/ScanAttendance-DuS_ZO4U.js","assets/Letters-oykdyAcb.js","assets/AssistantPage-0Zy5b8sv.js","assets/PrivacyPolicy-DMII7Ijp.js","assets/TermsOfService-BHN3EfOg.js","assets/Documents-c2WVvzIF.js"])))=>i.map(i=>d[i]);
var ot=Object.defineProperty;var it=(r,i,t)=>i in r?ot(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t;var $e=(r,i,t)=>it(r,typeof i!="symbol"?i+"":i,t);import{r as a,j as e,R as Ge,c as ct}from"./vendor-react-DFHPY69B.js";import{c as dt}from"./vendor-supabase-DqvqN50L.js";import{y as lt,j as ee,x as ie,ao as ht,P as pt,E as xt,az as mt,aM as re,aA as ft,a7 as bt,aC as ut,ak as gt,al as vt,F as yt,n as ge,as as Ke,ad as Se,ax as _e,a5 as Ce,a0 as Xe,aF as Ee,a8 as ue,a6 as ve,g as Qe,C as de,aw as Ze,q as Ae,p as jt,f as Ie,Q as et,T as kt,aI as wt,au as Nt,m as St,ar as _t,af as Ct,aa as Et,G as tt,d as ze,t as Me,u as be}from"./vendor-icons-CuqApSGN.js";import"./vendor-6pgEYSA5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(l){if(l.ep)return;l.ep=!0;const n=t(l);fetch(l.href,n)}})();const At="modulepreload",It=function(r){return"/"+r},We={},O=function(i,t,c){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),h=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(t.map(v=>{if(v=It(v),v in We)return;We[v]=!0;const f=v.endsWith(".css"),E=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${E}`))return;const s=document.createElement("link");if(s.rel=f?"stylesheet":At,f||(s.as="script"),s.crossOrigin="",s.href=v,h&&s.setAttribute("nonce",h),document.head.appendChild(s),f)return new Promise((b,y)=>{s.addEventListener("load",b),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function n(o){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=o,window.dispatchEvent(h),!h.defaultPrevented)throw o}return l.then(o=>{for(const h of o||[])h.status==="rejected"&&n(h.reason);return i().catch(n)})},Rt="https://zbhwelmxdgldbwbnsfhd.supabase.co",Dt="sb_publishable_xPa0SGJFvPb3bqtmcsRkSg_-MlmlDdR",P=dt(Rt,Dt,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0,storageKey:"adss-auth",storage:window.localStorage}}),Be=10;async function Pt(r,i=[],t="guest"){if(!r||!r.trim())return{success:!1,error:"Message cannot be empty."};const c=i.length>Be?i.slice(i.length-Be):i;try{const{data:l,error:n}=await P.functions.invoke("chat-assistant",{body:{userMessage:r.trim(),history:c,userRole:t}});return n?{success:!1,error:n.message||"Failed to communicate with AI Assistant service."}:l||{success:!1,error:"No response received from AI Assistant service."}}catch(l){return{success:!1,error:l.message||"Unexpected error connecting to AI Assistant."}}}const at=a.createContext(null),ke="adss_ai_assistant_history_v1";function Lt({children:r,role:i="guest"}){const[t,c]=a.useState(()=>{try{const p=sessionStorage.getItem(ke);return p?JSON.parse(p):[]}catch{return[]}}),[l,n]=a.useState(""),[o,h]=a.useState(!1),[v,f]=a.useState(!1);a.useEffect(()=>{try{sessionStorage.setItem(ke,JSON.stringify(t))}catch{}},[t]);const E=a.useCallback(()=>{f(p=>!p)},[]),s=a.useCallback(()=>{f(!0)},[]),b=a.useCallback(()=>{f(!1)},[]),y=a.useCallback(()=>{c([]);try{sessionStorage.removeItem(ke)}catch{}},[]),g=a.useCallback(async(p,L=i)=>{const N=p.trim();if(!N||o)return;const A={role:"user",text:N,id:`u-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(m=>[...m,A]),n(""),h(!0);const C=t.map(m=>({role:m.role==="user"?"user":"model",text:m.text}));try{const m=await Pt(N,C,L),u={role:"assistant",text:m.success?m.text:`⚠️ ${m.error??"Something went wrong. Please try again."}`,id:`a-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};c(I=>[...I,u])}catch{c(u=>[...u,{role:"assistant",text:"⚠️ Unexpected error connecting to ADSS Intelligence. Please try again.",id:`err-${Date.now()}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}finally{h(!1)}},[o,t,i]),w={messages:t,input:l,setInput:n,loading:o,sendMessage:g,clearChat:y,isWidgetOpen:v,setIsWidgetOpen:f,toggleWidget:E,openWidget:s,closeWidget:b};return e.jsx(at.Provider,{value:w,children:r})}function Ot(){const r=a.useContext(at);if(!r)throw new Error("useAiChat must be used within an AiChatProvider");return r}function ce({size:r=20,className:i="",variant:t="brand",animate:c=!1,style:l={}}){const n=t==="monochrome"?"currentColor":"#e4f222",o=t==="monochrome"?"currentColor":"#8a8f98",h=t==="glow"?"drop-shadow(0 0 6px rgba(228, 242, 34, 0.4))":void 0;return e.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`adss-ai-icon ${c?"adss-ai-icon--pulse":""} ${i}`,style:{filter:h,flexShrink:0,...l},"aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"2.5",r:"1.25",fill:o,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"7.25",r:"1.25",fill:o,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"16.75",r:"1.25",fill:o,fillOpacity:"0.5"}),e.jsx("circle",{cx:"12",cy:"21.5",r:"1.25",fill:o,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"16.75",r:"1.25",fill:o,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"7.25",r:"1.25",fill:o,fillOpacity:"0.5"}),e.jsx("line",{x1:"12",y1:"3.75",x2:"12",y2:"7.5",stroke:o,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"12",y1:"16.5",x2:"12",y2:"20.25",stroke:o,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"4.8",y1:"8",x2:"8.5",y2:"10.5",stroke:o,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"19.2",y1:"16",x2:"15.5",y2:"13.5",stroke:o,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("path",{d:"M12 4.5 C12 8.6 15.4 12 19.5 12 C15.4 12 12 15.4 12 19.5 C12 15.4 8.6 12 4.5 12 C8.6 12 12 8.6 12 4.5 Z",fill:n}),e.jsx("circle",{cx:"12",cy:"12",r:"1.75",fill:"#08090a"}),e.jsx("circle",{cx:"12",cy:"12",r:"0.75",fill:"#ffffff"})]})}const Tt=[{tag:"IMPORT",text:"How do I import members via CSV?"},{tag:"ATTENDANCE",text:"How do I generate a QR code for attendance?"},{tag:"ACCESS",text:"How do I invite an editor or manage permissions?"},{tag:"DOCS",text:"How do I upload and restrict society documents?"}],$t=[{tag:"REGISTRATION",text:"How do I register as an active society member?"},{tag:"COMMITTEE",text:"How do I apply for the Organizing Committee (OC)?"},{tag:"LETTERS",text:"How do I request an official appreciation letter?"},{tag:"QR SCAN",text:"How do I check in for event attendance using QR?"}];function zt({filename:r="event_attendance.csv",csvData:i}){const[t,c]=a.useState(!1),l=()=>{const n=new Blob([i],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(n),h=document.createElement("a");h.setAttribute("href",o),h.setAttribute("download",r),document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(o),c(!0),setTimeout(()=>c(!1),2500)};return e.jsx("div",{className:"chat-csv-wrapper",children:e.jsxs("button",{type:"button",onClick:l,className:"chat-csv-btn",title:"Export CSV data",children:[t?e.jsx(ee,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(pt,{className:"w-3.5 h-3.5 chat-csv-icon"}),e.jsx("span",{className:"font-berkeley-mono text-[12px] tracking-tight",children:t?"CSV EXPORTED":"DOWNLOAD ATTENDANCE CSV"}),e.jsx(xt,{className:"w-3 h-3 chat-csv-download-icon ml-auto"})]})})}function Mt({code:r}){const[i,t]=a.useState(!1),c=async()=>{try{await navigator.clipboard.writeText(r),t(!0),setTimeout(()=>t(!1),2e3)}catch{}};return e.jsxs("div",{className:"chat-codeblock",children:[e.jsxs("div",{className:"chat-codeblock-header",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-berkeley-mono chat-codeblock-label",children:[e.jsx(mt,{className:"w-3 h-3 chat-codeblock-term-icon"}),e.jsx("span",{children:"SNIPPET"})]}),e.jsxs("button",{type:"button",onClick:c,className:"chat-copy-code-btn",title:"Copy code",children:[i?e.jsx(ee,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(ie,{className:"w-3 h-3"}),e.jsx("span",{className:"text-[10px] font-berkeley-mono",children:i?"COPIED":"COPY"})]})]}),e.jsx("pre",{className:"chat-codeblock-content",children:e.jsx("code",{children:r})})]})}function Wt(r){if(!r)return null;const i=/```(?:csv|text|json|sql|javascript|js)?\n([\s\S]*?)\n```/g,t=[];let c=0,l;for(;(l=i.exec(r))!==null;){const o=r.slice(c,l.index);o&&t.push({type:"text",content:o});const h=l[1].trim();l[0].startsWith("```csv")||h.includes(",")&&(h.toLowerCase().includes("st id")||h.toLowerCase().includes("email")||h.toLowerCase().includes("attended"))?t.push({type:"csv",content:h}):t.push({type:"code",content:h}),c=l.index+l[0].length}const n=r.slice(c);return n&&t.push({type:"text",content:n}),e.jsx(e.Fragment,{children:t.map((o,h)=>{if(o.type==="csv")return e.jsx(zt,{csvData:o.content},`csv-${h}`);if(o.type==="code")return e.jsx(Mt,{code:o.content},`code-${h}`);const v=o.content.split(`
`),f=[];return v.forEach((E,s)=>{if(s>0){if(E.trim()===""){f.push(e.jsx("div",{className:"h-2"},`gap-${s}`));return}f.push(e.jsx("br",{},`br-${s}`))}const b=[],y=/\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|([^*`]+)/g;let g,w=0;for(;(g=y.exec(E))!==null;)g[1]!==void 0?b.push(e.jsx("strong",{className:"font-semibold chat-md-strong",children:g[1]},`${h}-${s}-b-${w++}`)):g[2]!==void 0?b.push(e.jsx("em",{className:"italic chat-md-em",children:g[2]},`${h}-${s}-i-${w++}`)):g[3]!==void 0?b.push(e.jsx("code",{className:"chat-inline-code",children:g[3]},`${h}-${s}-c-${w++}`)):b.push(e.jsx("span",{children:g[4]},`${h}-${s}-t-${w++}`));f.push(...b)}),e.jsx("span",{children:f},`text-block-${h}`)})})}function Bt({messages:r=[],loading:i=!1,input:t="",onInputChange:c,onSendMessage:l,role:n="guest",compact:o=!1,inputRef:h,className:v="",theme:f}){const E=a.useRef(null),[s,b]=a.useState(null),[y,g]=a.useState(!1),w=n==="admin"||n==="editor",p=w?Tt:$t;a.useEffect(()=>{var m;(m=E.current)==null||m.scrollIntoView({behavior:"smooth"})},[r,i]);const L=m=>{const u=m.trim();!u||i||y||(l(u,n),g(!0),setTimeout(()=>g(!1),1500))},N=m=>{m.preventDefault(),L(t)},A=async(m,u)=>{try{await navigator.clipboard.writeText(u),b(m),setTimeout(()=>b(null),2e3)}catch{}},C=i||y||!t.trim();return e.jsxs("div",{className:`chat-conversation ${o?"chat-conv--compact":"chat-conv--full"} ${v}`,"data-theme":f,children:[e.jsxs("div",{className:"chat-conv-messages",role:"log","aria-live":"polite","aria-label":"Conversation History",children:[r.length===0&&!i&&e.jsxs("div",{className:"chat-conv-empty",children:[e.jsx("div",{className:"chat-conv-empty-icon-wrap",children:e.jsx(ce,{size:o?36:48,animate:!0,variant:"brand"})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("span",{className:"chat-conv-telemetry-badge",children:"ADSS TELEMETRY V2.6"}),e.jsx("span",{className:"chat-conv-grounded-badge",children:"LIVE GROUNDING"})]}),e.jsx("h2",{className:"chat-conv-empty-title",children:"ADSS Portal Intelligence"}),e.jsx("p",{className:"chat-conv-empty-sub",children:w?"Instant precision answers regarding society operations, member directories, attendance analytics, and role governance.":"Instant precision answers regarding membership registration, event check-in, OC recruitment, and official letters."})]}),e.jsx("div",{className:"chat-conv-chips",children:p.map((m,u)=>e.jsxs("button",{type:"button",className:"chat-conv-chip",onClick:()=>L(m.text),disabled:i||y,children:[e.jsx("span",{className:"chat-conv-chip-tag",children:m.tag}),e.jsx("span",{className:"chat-conv-chip-text",children:m.text}),e.jsx(lt,{className:"w-3 h-3 chat-conv-chip-arrow ml-auto shrink-0"})]},u))})]}),r.map((m,u)=>{const I=m.role==="user",M=m.id||`msg-${u}`;return e.jsxs("div",{className:`chat-conv-msg-row ${I?"chat-conv-msg-row--user":"chat-conv-msg-row--assistant"}`,children:[!I&&e.jsx("div",{className:"chat-conv-avatar-wrap",title:"ADSS Portal AI Assistant",children:e.jsx(ce,{size:16,variant:"brand"})}),e.jsxs("div",{className:"chat-conv-msg-body",children:[e.jsx("div",{className:`chat-conv-bubble ${I?"chat-conv-bubble--user":"chat-conv-bubble--assistant"}`,children:I?m.text:Wt(m.text)}),!I&&e.jsxs("div",{className:"chat-conv-msg-meta",children:[e.jsx("span",{className:"chat-conv-msg-time",children:m.timestamp||"ADSS INTEL"}),e.jsx("button",{type:"button",onClick:()=>A(M,m.text),className:"chat-conv-copy-action",title:"Copy response",children:s===M?e.jsxs(e.Fragment,{children:[e.jsx(ee,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"COPIED"})]}):e.jsxs(e.Fragment,{children:[e.jsx(ie,{className:"w-3 h-3"}),e.jsx("span",{children:"COPY"})]})})]})]})]},M)}),i&&e.jsxs("div",{className:"chat-conv-msg-row chat-conv-msg-row--assistant",children:[e.jsx("div",{className:"chat-conv-avatar-wrap",children:e.jsx(ce,{size:16,animate:!0,variant:"brand"})}),e.jsx("div",{className:"chat-conv-msg-body",children:e.jsxs("div",{className:"chat-conv-bubble chat-conv-bubble--assistant chat-conv-thinking",children:[e.jsx("div",{className:"chat-pulse-node"}),e.jsx("span",{className:"font-berkeley-mono text-[11px] chat-thinking-text tracking-wider uppercase",children:"Analyzing ADSS records…"})]})})]}),e.jsx("div",{ref:E})]}),e.jsx("form",{className:"chat-conv-input-bar",onSubmit:N,children:e.jsxs("div",{className:"chat-conv-input-wrapper",children:[e.jsx("input",{ref:h,className:"chat-conv-input",type:"text",placeholder:y?"Rate limit throttle (1s)...":i?"ADSS intelligence processing...":"Ask ADSS Intelligence (e.g. attendance, OC, letters)...",value:t,onChange:m=>c(m.target.value),disabled:i||y,autoComplete:"off","aria-label":"Message to ADSS AI Assistant"}),e.jsx("button",{type:"submit",className:"chat-conv-send-btn",disabled:C,"aria-label":"Send query",title:"Execute query (Enter)",children:e.jsx(ht,{className:"w-3.5 h-3.5"})})]})}),e.jsx("style",{children:`
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

      `})]})}function Fe({role:r="guest",session:i={},onNavigate:t,currentPage:c,theme:l}){const n=(i==null?void 0:i.role)||r||"guest",{messages:o,input:h,setInput:v,loading:f,sendMessage:E,clearChat:s,isWidgetOpen:b,setIsWidgetOpen:y,toggleWidget:g,closeWidget:w}=Ot(),p=a.useRef(null),L=a.useRef(null),N=a.useRef(null);a.useEffect(()=>{b&&setTimeout(()=>{var u;return(u=L.current)==null?void 0:u.focus()},100)},[b]),a.useEffect(()=>{const u=I=>{var M;if((I.ctrlKey||I.metaKey)&&I.key==="/"){I.preventDefault(),g();return}I.key==="Escape"&&b&&(w(),(M=N.current)==null||M.focus())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[b,g,w]);const A=()=>{w(),t?t("assistant"):(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate")))},C=()=>{o.length!==0&&window.confirm("Clear active ADSS intelligence conversation?")&&s()},m=n==="admin"?"STAFF COMMAND":n==="editor"?"EDITOR PORTAL":n==="member"?"MEMBER PORTAL":"GUEST ACCESS";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"adss-ai-trigger-container",children:e.jsxs("button",{ref:N,id:"adss-ai-widget-toggle",className:`adss-ai-trigger-btn ${b?"adss-ai-trigger-btn--open":""}`,onClick:g,"aria-label":b?"Close ADSS AI assistant":"Open ADSS AI assistant","aria-expanded":b,"aria-controls":"adss-ai-widget-panel",title:"ADSS Portal AI Assistant (Ctrl+/)",children:[b?e.jsx(re,{className:"w-5 h-5 text-current transition-transform duration-200"}):e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx(ce,{size:22,variant:"brand",animate:f}),e.jsx("span",{className:"adss-ai-status-indicator"})]}),!b&&e.jsxs("div",{className:"adss-ai-trigger-tooltip",children:[e.jsx("span",{className:"font-sans text-[12px] font-medium adss-ai-tooltip-text",children:"ADSS AI"}),e.jsx("span",{className:"adss-ai-shortcut-badge",children:"Ctrl /"})]})]})}),e.jsxs("div",{id:"adss-ai-widget-panel",ref:p,className:`adss-ai-panel ${b?"adss-ai-panel--open":""}`,"data-theme":l,role:"dialog","aria-modal":"true","aria-label":"ADSS Portal AI Assistant",children:[e.jsx("div",{className:"adss-ai-mobile-handle"}),e.jsxs("div",{className:"adss-ai-header",children:[e.jsxs("div",{className:"adss-ai-header-left",children:[e.jsx("div",{className:"adss-ai-header-emblem",children:e.jsx(ce,{size:18,variant:"brand"})}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("h3",{className:"adss-ai-title",children:"ADSS Intelligence"}),e.jsx("span",{className:"adss-ai-role-badge",children:m})]})]}),e.jsxs("div",{className:"adss-ai-header-actions",children:[o.length>0&&e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:C,title:"Clear conversation","aria-label":"Clear conversation history",children:e.jsx(ft,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:A,title:"Expand to full workspace view (/assistant)","aria-label":"Open in full screen page",children:e.jsx(bt,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:w,title:"Close panel (Esc)","aria-label":"Close assistant",children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"adss-ai-content",children:e.jsx(Bt,{messages:o,loading:f,input:h,onInputChange:v,onSendMessage:E,compact:!0,inputRef:L,role:n,theme:l})})]}),b&&e.jsx("div",{className:"adss-ai-backdrop",onClick:w,"aria-hidden":"true"}),e.jsx("style",{children:`
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
      `})]})}class Ft extends Ge.Component{constructor(t){super(t);$e(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),this.props.onReset&&this.props.onReset()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,c){console.error("ErrorBoundary caught an error:",t,c)}render(){return this.state.hasError?e.jsxs("div",{className:"p-8 my-6 max-w-xl mx-auto rounded-[12px] bg-[#0f1011] border border-[#eb5757]/30 text-[#ffffff] space-y-4 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center gap-2.5 text-[#eb5757] pb-2 border-b border-[#23252a]",children:[e.jsx(ut,{className:"w-5 h-5 flex-shrink-0"}),e.jsx("h3",{className:"text-[15px] font-[510] tracking-tight",children:"Section Encountered an Error"})]}),e.jsx("p",{className:"text-[12px] text-[#8a8f98] leading-relaxed",children:"An unexpected error occurred while rendering this section. You can retry rendering or return to the main dashboard."}),this.state.error&&e.jsx("pre",{className:"p-3 rounded-[6px] bg-[#161718] border border-[#23252a] text-[11px] font-berkeley-mono text-[#eb5757] overflow-x-auto whitespace-pre-wrap break-all",children:this.state.error.message||String(this.state.error)}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-2",children:[e.jsxs("button",{onClick:this.handleReset,className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#e4f222] text-[#08090a] text-[12px] font-[510] hover:bg-[#d8e61e] transition-colors cursor-pointer",children:[e.jsx(gt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Retry View"})]}),e.jsxs("button",{onClick:()=>{this.handleReset(),this.props.onNavigate?this.props.onNavigate("dashboard"):typeof window<"u"&&window.location.reload()},className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#161718] border border-[#23252a] text-[#d0d6e0] text-[12px] hover:bg-[#23252a] transition-colors cursor-pointer",children:[e.jsx(vt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Back to Dashboard"})]})]})]}):this.props.children}}function Ut({page:r,setPage:i,visibleSections:t=[],session:c={},pendingMsgCount:l=0,theme:n="dark",toggleTheme:o,isRealStaff:h=!1,viewAsMember:v=!1,handleToggleViewAsMember:f,handleLogout:E,connected:s=null,canAccessAi:b=!1}){const[y,g]=a.useState(!1);a.useEffect(()=>{const j=R=>{R.key==="Escape"&&y&&g(!1)};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[y]),a.useEffect(()=>(y?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[y]);const w=j=>{if(!j)return"U";const R=j.trim().split(/\s+/);return R.length===1?R[0].substring(0,2).toUpperCase():(R[0][0]+R[R.length-1][0]).toUpperCase()},p=c.role==="admin"||c.role==="editor",L=c.role==="member",N=!!c.stId;let A=[];p&&!v?A=[{id:"dashboard",label:"Dash",icon:Xe},{id:"my_info",label:"My Info",icon:Ee},{id:"notices",label:"Notices",icon:ue},{id:"messages",label:"Messages",icon:ve,badge:l}]:L||v?A=[{id:"attendance",label:"Dash",icon:Qe},{id:N?"my_info":"events",label:N?"My Info":"Events",icon:N?Ee:de},{id:"notices",label:"Notices",icon:ue},{id:"messages",label:"Messages",icon:ve,badge:l}]:A=[{id:"events",label:"Events",icon:de},{id:"notices",label:"Notices",icon:ue},{id:"assistant",label:"Assistant",icon:Ze}];const m=!new Set(A.map(j=>j.id)).has(r)||y,I=t.flatMap(j=>j.items).find(j=>j.id===r),M=I?I.label:r?String(r).replace("_"," ").toUpperCase():p&&!v?"DASHBOARD":"ATTENDANCE",X=j=>{g(!1),i(j)};return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"mobile-topbar",role:"banner",children:[e.jsxs("div",{className:"mobile-topbar-left cursor-pointer",onClick:()=>X(p&&!v?"dashboard":"attendance"),children:[e.jsx("img",{src:`/${n==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"mobile-topbar-logo",alt:"ADSS"}),e.jsxs("div",{className:"mobile-topbar-title-wrap",children:[e.jsx("div",{className:"mobile-topbar-brand",children:"ADSS RUHUNA"}),e.jsx("div",{className:"mobile-topbar-page",children:M})]})]}),e.jsx("div",{className:"mobile-topbar-right flex items-center",children:e.jsx("div",{className:"mobile-telemetry-dot",title:s===null?"Synchronizing":s?"DB Synchronized":"Offline",children:e.jsx("span",{className:`dot ${s===null?"pending":s?"ok":"err"}`})})})]}),e.jsx("nav",{className:"mobile-bottom-bar",role:"navigation","aria-label":"Mobile Navigation",children:e.jsxs("div",{className:"mobile-bottom-grid",children:[A.map(j=>{const R=j.icon,Q=r===j.id&&!y;return e.jsxs("button",{className:`mobile-tab-btn ${Q?"active":""}`,onClick:()=>X(j.id),"aria-label":j.label,children:[e.jsxs("div",{className:"mobile-tab-icon-box",children:[e.jsx(R,{className:"mobile-tab-icon"}),j.badge>0&&e.jsx("span",{className:"mobile-tab-badge",children:j.badge>99?"99+":j.badge})]}),e.jsx("span",{className:"mobile-tab-label",children:j.label})]},j.id)}),e.jsxs("button",{className:`mobile-tab-btn ${m?"active":""}`,onClick:()=>g(j=>!j),"aria-label":"More navigation options","aria-expanded":y,children:[e.jsx("div",{className:"mobile-tab-icon-box",children:e.jsx(yt,{className:"mobile-tab-icon"})}),e.jsx("span",{className:"mobile-tab-label",children:"More"})]})]})}),e.jsx("div",{className:`mobile-drawer-backdrop ${y?"open":""}`,onClick:()=>g(!1),"aria-hidden":!y}),e.jsx("aside",{className:`mobile-drawer ${y?"open":""}`,"aria-label":"Additional Navigation","aria-hidden":!y,children:e.jsxs("div",{className:"mobile-drawer-inner",children:[e.jsxs("div",{className:"mobile-drawer-header",children:[e.jsxs("div",{className:"mobile-drawer-header-left",children:[e.jsx("div",{className:"mobile-drawer-title",children:"Navigation"}),e.jsx("div",{className:"mobile-drawer-subtitle",children:"ADSS Ruhuna Portal"})]}),e.jsx("button",{className:"mobile-drawer-close-btn",onClick:()=>g(!1),"aria-label":"Close menu",children:e.jsx(re,{className:"w-5 h-5"})})]}),c.role!=="guest"&&e.jsxs("div",{className:"mobile-drawer-profile-card",children:[e.jsx("div",{className:"mobile-drawer-avatar",children:w(c.name||c.email)}),e.jsxs("div",{className:"mobile-drawer-user-info",children:[e.jsx("div",{className:"mobile-drawer-user-name",children:c.preferredName||c.name||"Member"}),e.jsxs("div",{className:"mobile-drawer-user-meta",children:[e.jsx("span",{className:"mobile-drawer-role-badge",children:c.role}),c.stId&&e.jsx("span",{className:"mobile-drawer-stid",children:c.stId})]})]})]}),e.jsx("div",{className:"mobile-drawer-nav-scroll",children:t.map(j=>e.jsxs("div",{className:"mobile-drawer-group",children:[e.jsx("div",{className:"mobile-drawer-group-title",children:j.title}),e.jsx("div",{className:"mobile-drawer-group-items",children:j.items.map(R=>{const Q=R.icon,T=r===R.id,ae=R.id==="messages"&&l>0;return e.jsxs("button",{className:`mobile-drawer-item ${T?"active":""}`,onClick:()=>{i(R.id),g(!1)},children:[e.jsxs("div",{className:"mobile-drawer-item-left",children:[e.jsx("span",{className:"mobile-drawer-item-icon",children:e.jsx(Q,{className:"w-4 h-4"})}),e.jsx("span",{className:"mobile-drawer-item-label",children:R.label})]}),e.jsxs("div",{className:"mobile-drawer-item-right",children:[ae&&e.jsx("span",{className:"mobile-drawer-badge",children:l>99?"99+":l}),e.jsx(ge,{className:"w-3.5 h-3.5 opacity-40"})]})]},R.id)})})]},j.title))}),e.jsxs("div",{className:"mobile-drawer-footer",children:[e.jsxs("div",{className:"mobile-drawer-controls-grid",children:[h&&e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${v?"":"active-staff"}`,onClick:f,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[e.jsx(Ke,{className:"w-3.5 h-3.5 text-[#6366f1]"}),e.jsx("span",{children:v?"Member":"Staff"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:v?"OFF":"ON"})]}),e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${n==="dark"?"active-dark":""}`,onClick:o,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[n==="dark"?e.jsx(Se,{className:"w-3.5 h-3.5 text-amber-400"}):e.jsx(_e,{className:"w-3.5 h-3.5 text-amber-500"}),e.jsx("span",{children:n==="dark"?"Dark":"Light"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:"MODE"})]})]}),e.jsxs("button",{type:"button",className:"mobile-drawer-logout-btn",onClick:()=>{g(!1),c.role!=="guest"?E():(window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")))},children:[e.jsxs("div",{className:"mobile-drawer-logout-left",children:[e.jsx(Ce,{className:"w-4 h-4 text-[#eb5757]"}),e.jsx("span",{children:c.role!=="guest"?"Logout":"Login"})]}),e.jsx(ge,{className:"w-4 h-4 opacity-40"})]})]})]})})]})}const Vt="bhanukadilshan2002@gmail.com";function Ht({isOpen:r,onClose:i,session:t,isDark:c=!0}){const[l,n]=a.useState(""),[o,h]=a.useState(!1),[v,f]=a.useState(null);if(!r)return null;const E=async s=>{if(s.preventDefault(),!l.trim()){f({type:"error",text:"Please enter a message before sending."});return}h(!0),f(null);const b=new FormData;b.append("access_key","a550f902-9114-4a93-be4f-44fd2145d58e"),b.append("subject","Society Management System - Issue Report"),b.append("name",(t==null?void 0:t.name)||"Guest User"),b.append("email",(t==null?void 0:t.email)||"no-reply@society.com");const y=`
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
`;b.append("message",y);try{const w=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:b})).json();w.success?(f({type:"success",text:"Your message has been sent successfully!"}),n("")):f({type:"error",text:w.message||"Failed to send the email. Please try again."})}catch{f({type:"error",text:"A network error occurred. Please check your connection."})}finally{h(!1)}};return e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:s=>{s.target===s.currentTarget&&i()},children:e.jsxs("div",{className:`w-full max-w-[620px] rounded-[10px] p-6 shadow-2xl relative text-left animate-in fade-in zoom-in-95 duration-150 border ${c?"bg-[#121316] border-[#23252a] text-[#e5e5e6]":"bg-white border-gray-200 text-gray-900"}`,role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[e.jsx("span",{className:`text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono ${c?"text-[#8a8f98]":"text-gray-500"}`,children:"CONTACT FOR ISSUES"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:`px-2.5 py-1 rounded-full text-[11px] font-berkeley-mono ${c?"bg-[#18191c] border border-[#26282d] text-[#a0a5ad]":"bg-gray-100 border border-gray-200 text-gray-600"}`,children:Vt}),e.jsx("button",{type:"button",onClick:i,className:`transition-colors cursor-pointer p-1 rounded ${c?"text-[#8a8f98] hover:text-white hover:bg-[#23252a]/60":"text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`,title:"Close",children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsxs("p",{className:`text-[13.5px] leading-relaxed mb-4 ${c?"text-[#9da3ad]":"text-gray-600"}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`font-bold hover:underline ${c?"text-white":"text-gray-900"}`,children:"Bhanuka Dilshan"}),". If you encounter any bugs, issues, or have feedback, please write a message below to send an email."]}),v&&e.jsxs("div",{className:`p-3 rounded-[6px] mb-4 text-[12.5px] flex items-center gap-2 ${v.type==="success"?"bg-[#27a644]/15 border border-[#27a644]/30 text-[#4ade80]":"bg-[#eb5757]/15 border border-[#eb5757]/30 text-[#f87171]"}`,children:[v.type==="success"?e.jsx(Ae,{className:"w-4 h-4 flex-shrink-0"}):e.jsx(jt,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:v.text})]}),e.jsxs("form",{onSubmit:E,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:`block text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono mb-2 ${c?"text-[#8a8f98]":"text-gray-600"}`,children:"SHORT MESSAGE"}),e.jsx("textarea",{rows:4,placeholder:"Write the issue shortly...",value:l,onChange:s=>n(s.target.value),disabled:o,className:`w-full rounded-[6px] p-3 text-[13.5px] focus:outline-none resize-y transition-colors border ${c?"bg-[#0d0e10] border-[#23252a] text-white placeholder:text-[#525866] focus:border-[#4b5563]":"bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500"}`})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"submit",disabled:o,className:`font-[510] text-[13px] px-4 py-2 rounded-[6px] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm ${c?"bg-white hover:bg-[#e4e7eb] text-black":"bg-gray-900 hover:bg-black text-white"}`,children:o?"Sending...":"Send Email"})})]})]})})}function Yt({session:r,isDark:i,className:t=""}){const[c,l]=a.useState(!1),n=i!==void 0?i:typeof document<"u"?document.documentElement.classList.contains("dark"):!0;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`text-center text-[12px] font-berkeley-mono transition-colors ${n?"text-[#62666d]":"text-gray-500"} ${t}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`underline transition-colors ${n?"text-[#8a8f98] hover:text-white":"text-gray-600 hover:text-gray-900"}`,children:"Bhanuka Dilshan"})," • ",e.jsx("button",{type:"button",onClick:()=>l(!0),className:`transition-colors cursor-pointer inline-flex items-center ${n?"text-[#8a8f98] hover:text-[#e4f222]":"text-gray-600 hover:text-indigo-600 font-medium"}`,children:"Contact For Issues"})]}),e.jsx(Ht,{isOpen:c,onClose:()=>l(!1),session:r,isDark:n})]})}const qt=a.lazy(()=>O(()=>import("./Login-DOBYIyqJ.js"),__vite__mapDeps([0,1,2,3,4]))),Jt=a.lazy(()=>O(()=>import("./Register-Dqa6VCWo.js"),__vite__mapDeps([5,1,6,7,2,3,4]))),Ue=a.lazy(()=>O(()=>import("./Dashboard-i3Re58t0.js"),__vite__mapDeps([8,1,9,10,2,3,4]))),Gt=a.lazy(()=>O(()=>import("./Members-DBcZXoOi.js"),__vite__mapDeps([11,1,12,7,2,3,4]))),Kt=a.lazy(()=>O(()=>import("./Events-CrrTtpOh.js"),__vite__mapDeps([13,1,6,12,14,15,10,2,3,4]))),we=a.lazy(()=>O(()=>import("./Attendance-nxwNQ4CM.js"),__vite__mapDeps([16,1,17,2,18,10,3,4]))),Xt=a.lazy(()=>O(()=>import("./Committee-DUXHBGLx.js"),__vite__mapDeps([19,1,12,17,2,10,3,4]))),Qt=a.lazy(()=>O(()=>import("./Setup-CpCHcoH8.js"),__vite__mapDeps([20,1]))),Zt=a.lazy(()=>O(()=>import("./Access-BfnUZFiB.js"),__vite__mapDeps([21,1,22,2,3,4]))),Ve=a.lazy(()=>O(()=>import("./MyInfo-Dh82Iyre.js"),__vite__mapDeps([23,1,9,6,2,3,4]))),ea=a.lazy(()=>O(()=>import("./Messages-Di3kq1IU.js"),__vite__mapDeps([24,1,2,3,4]))),ta=a.lazy(()=>O(()=>import("./Tasks-DBfkexLj.js"),__vite__mapDeps([25,1,17,2,14,15,10,3,4]))),aa=a.lazy(()=>O(()=>import("./Landing-Bir9lGx1.js"),__vite__mapDeps([26,1,2,3,4]))),sa=a.lazy(()=>O(()=>import("./PublicEvent-BqEqmSEU.js"),__vite__mapDeps([27,1,3,4,2]))),ra=a.lazy(()=>O(()=>import("./Notices-HTPl2hl7.js"),__vite__mapDeps([28,1,12,29,10,2,4,3]))),na=a.lazy(()=>O(()=>import("./PublicNotice-DtcXi8YZ.js"),__vite__mapDeps([30,1,29,2,3,4]))),oa=a.lazy(()=>O(()=>import("./ScanAttendance-DuS_ZO4U.js"),__vite__mapDeps([31,1,2,3,4]))),ia=a.lazy(()=>O(()=>import("./Letters-oykdyAcb.js"),__vite__mapDeps([32,1,9,10,2,3,4]))),He=a.lazy(()=>O(()=>import("./AssistantPage-0Zy5b8sv.js"),__vite__mapDeps([33,1,2,3,4]))),Ye=a.lazy(()=>O(()=>import("./PrivacyPolicy-DMII7Ijp.js"),__vite__mapDeps([34,1,2]))),qe=a.lazy(()=>O(()=>import("./TermsOfService-BHN3EfOg.js"),__vite__mapDeps([35,1,2]))),ca=a.lazy(()=>O(()=>import("./Documents-c2WVvzIF.js"),__vite__mapDeps([36,1,12,22,10,2,3,4])));function K(){return e.jsx("div",{style:{display:"flex",minHeight:"50vh",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("div",{style:{width:"32px",height:"32px",border:"2px solid rgba(129, 140, 248, 0.2)",borderTop:"2px solid #818cf8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})})}const st=[{title:"Workspace",items:[{id:"dashboard",label:"Dashboard",icon:Xe},{id:"notices",label:"Notices",icon:ue},{id:"my_info",label:"My Credentials",icon:Ee},{id:"messages",label:"Messages",icon:ve}]},{title:"Operations",items:[{id:"events",label:"Events",icon:de},{id:"attendance",label:"Attendance",icon:Qe},{id:"committee",label:"Committee (OC)",icon:Ie},{id:"letters",label:"Letter Requests",icon:et},{id:"documents",label:"Documents",icon:kt}]},{title:"Directory & Intel",items:[{id:"members",label:"Members",icon:wt},{id:"assistant",label:"AI Assistant",icon:Ze},{id:"access",label:"Access Control",icon:Nt}]}],da=st.flatMap(r=>r.items),Je=r=>r==="admin"||r==="editor",la=(r,i,t)=>{if(!t)return[];const c=(r||"").trim().toUpperCase(),l=(i||"").trim().toLowerCase();if(Array.isArray(t))return t.some(o=>{const h=(o||"").trim();return c&&h.toUpperCase()===c||l&&h.toLowerCase()===l})?["Events","Budgets","Permissions","Guidance"]:[];if(typeof t=="object")for(const[n,o]of Object.entries(t)){const h=(n||"").trim();if(c&&h.toUpperCase()===c||l&&h.toLowerCase()===l)return Array.isArray(o)?o:[]}return[]},Re="adss-profile-cache",ha=()=>{try{const r=localStorage.getItem(Re);return r?JSON.parse(r):null}catch{return null}},oe=r=>{try{localStorage.setItem(Re,JSON.stringify(r))}catch{}},pa=()=>{try{localStorage.removeItem(Re)}catch{}},xa=()=>{var r;try{const i=localStorage.getItem("adss-auth");return i&&((r=JSON.parse(i))==null?void 0:r.user)}catch{return!1}};function ma(){const r=ha(),i=xa(),t=!!(r&&i),[c,l]=a.useState(()=>localStorage.getItem("theme")||"dark"),[n,o]=a.useState(()=>t?r.role==="member"?"attendance":r.role==="admin"?"dashboard":"members":"dashboard"),[h,v]=a.useState(null),[f,E]=a.useState(()=>window.innerWidth>768),[s,b]=a.useState(()=>t?r:{role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),[y,g]=a.useState(!t),[w,p]=a.useState(!0),[L,N]=a.useState(!0),[A,C]=a.useState([]),[m,u]=a.useState(!1),[I,M]=a.useState(0),[X,j]=a.useState(!1),[R,Q]=a.useState(window.location.pathname),[T,ae]=a.useState(window.location.hash);a.useEffect(()=>{const d=()=>{Q(window.location.pathname),ae(window.location.hash)};return window.addEventListener("popstate",d),window.addEventListener("hashchange",d),()=>{window.removeEventListener("popstate",d),window.removeEventListener("hashchange",d)}},[]);const le=R.startsWith("/event")||T.startsWith("#/event")||T.startsWith("#event"),he=R.startsWith("/notice")||T.startsWith("#/notice")||T.startsWith("#notice"),pe=R.startsWith("/scan-attendance")||T.startsWith("#/scan-attendance")||T.startsWith("#scan-attendance"),x=R.startsWith("/assistant")||T.startsWith("#/assistant")||T.startsWith("#assistant"),z=R.startsWith("/privacy")||T.startsWith("#/privacy")||T.startsWith("#privacy"),H=R.startsWith("/terms")||T.startsWith("#/terms")||T.startsWith("#terms"),W=R==="/login"||T==="#/login"||T==="#login",q=R==="/register"||T==="#/register"||T==="#register";a.useEffect(()=>{document.documentElement.classList.toggle("dark",c==="dark"),document.documentElement.setAttribute("data-theme",c),document.documentElement.style.background=c==="dark"?"#08090a":"#ffffff",localStorage.setItem("theme",c)},[c]),a.useEffect(()=>{P.from("members").select("count",{count:"exact",head:!0}).then(({error:S})=>v(!S));const d=()=>{P.from("system_settings").select("key, value").in("key",["registration_enabled","ai_feature_enabled","document_access_members"]).then(({data:S})=>{if(S){const k=S.find(B=>B.key==="registration_enabled"),$=S.find(B=>B.key==="ai_feature_enabled"),_=S.find(B=>B.key==="document_access_members");if(k&&p(k.value==="true"),$&&N($.value==="true"),_)try{const B=JSON.parse(_.value);C(B||{})}catch{C({})}}})};d();const D=P.channel("app-system-settings-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},S=>{const k=S.new;if(!k||!k.key){d();return}if(k.key==="registration_enabled"&&p(k.value==="true"),k.key==="ai_feature_enabled"&&N(k.value==="true"),k.key==="document_access_members")try{const $=JSON.parse(k.value);C($||{})}catch{C({})}}).subscribe();return()=>{P.removeChannel(D)}},[]),a.useEffect(()=>{if(!s.stId){M(0);return}const d=async()=>{const{data:S}=await P.from("messages").select("id",{count:"exact"}).eq("receiver_st_id",s.stId).eq("status","pending");M((S==null?void 0:S.length)??0)};d();const D=P.channel(`nav-pending-${s.stId}`).on("postgres_changes",{event:"*",schema:"public",table:"messages"},()=>d()).subscribe();return()=>P.removeChannel(D)},[s.stId]),a.useEffect(()=>{let d=!0;const D=async k=>{const $=k==null?void 0:k.user;if(!$){d&&(b({role:"guest",stId:"",name:"",email:"",userId:""}),u(!1),o("dashboard"),g(!1));return}const{data:_}=await P.from("profiles").select("id, email, full_name, preferred_name, role, st_id, status").eq("id",$.id).maybeSingle();if(d){let B=((_==null?void 0:_.st_id)||"").trim();const te=((_==null?void 0:_.email)||$.email||"").trim();if(!B&&te)try{const{data:V}=await P.from("members").select("st_id").ilike("email",te).maybeSingle();V!=null&&V.st_id&&(B=V.st_id.trim(),P.from("profiles").update({st_id:B}).eq("id",$.id).then(()=>{}))}catch{}const Z=(_==null?void 0:_.role)||"member",G=(_==null?void 0:_.status)||"approved",Oe={role:Z,stId:B,name:(_==null?void 0:_.preferred_name)||(_==null?void 0:_.full_name)||$.email||"",fullName:(_==null?void 0:_.full_name)||"",preferredName:(_==null?void 0:_.preferred_name)||"",email:te,userId:$.id,status:G};b(Oe),oe(Oe),u(!1),o(V=>G==="pending"||G==="pending_editor_review"?Z==="member"?"attendance":Z==="admin"?"dashboard":"members":Z==="member"&&(V==="dashboard"||V==="members"||V==="access"||V==="letters"||V==="about")?"attendance":V==="about"?Z==="admin"?"dashboard":"members":V),g(!1);const Te=window.location.pathname,fe=window.location.hash;(Te==="/login"||fe==="#/login"||fe==="#login"||Te==="/register"||fe==="#/register"||fe==="#register")&&(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")))}};P.auth.getSession().then(({data:k})=>D(k.session));const{data:S}=P.auth.onAuthStateChange((k,$)=>{g(!0),D($)});return()=>{d=!1,S.subscription.unsubscribe()}},[]),a.useEffect(()=>{if(!s.userId||s.status!=="pending"&&s.status!=="pending_editor_review")return;const d=P.channel(`profile-status-${s.userId}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"profiles",filter:`id=eq.${s.userId}`},D=>{const S=D.new;if(S&&(S.status==="approved"||S.status==="active")){const k=S.role||s.role||"member",$={...s,status:S.status,role:k,stId:S.st_id||s.stId,name:S.preferred_name||S.full_name||s.name,fullName:S.full_name||s.fullName,preferredName:S.preferred_name||s.preferredName};oe($),b($),o(k==="admin"||k==="editor"?k==="admin"?"dashboard":"members":"attendance")}}).subscribe();return()=>{P.removeChannel(d)}},[s.userId,s.status]);const Y=Je(s.role),F=m&&Y?"member":s.role,U=Je(F),J=U||L;a.useEffect(()=>{s.role==="guest"||s.status==="pending"||s.status==="pending_editor_review"||s.status==="rejected"||!U&&(n==="dashboard"||n==="members"||n==="access"||n==="letters")&&o("attendance")},[n,U,s.role,s.status]);const se=d=>{o(!U&&(d==="dashboard"||d==="members"||d==="access"||d==="letters")?"attendance":d)},je=!U&&(n==="dashboard"||n==="members"||n==="access"||n==="letters")?we:{dashboard:Ue,notices:ra,members:Gt,committee:Xt,events:Kt,attendance:we,access:Zt,setup:Qt,my_info:Ve,profile:Ve,messages:ea,tasks:ta,letters:ia,assistant:He,privacy:Ye,terms:qe,documents:ca}[n]||(U?Ue:we),xe=async()=>{var d;j(!0);try{const{data:D}=await P.auth.getSession(),S=(d=D==null?void 0:D.session)==null?void 0:d.user;if(S){const{data:k}=await P.from("profiles").select("id, status, role, st_id, full_name, preferred_name, email").eq("id",S.id).maybeSingle();if(k){let $=(k.st_id||s.stId||"").trim();const _=(k.email||S.email||s.email||"").trim();if(!$&&_)try{const{data:G}=await P.from("members").select("st_id").ilike("email",_).maybeSingle();G!=null&&G.st_id&&($=G.st_id.trim())}catch{}const B=k.role||"member",te=k.status||"approved",Z={...s,status:te,role:B,stId:$,name:k.preferred_name||k.full_name||s.name,fullName:k.full_name||s.fullName||"",preferredName:k.preferred_name||s.preferredName||"",email:_,userId:S.id};oe(Z),b(Z),u(!1),te!=="pending"&&te!=="pending_editor_review"&&o(B==="admin"||B==="editor"?B==="admin"?"dashboard":"members":"attendance")}}}catch(D){console.error("Error refreshing status:",D)}finally{j(!1)}},De=d=>F==="guest"?d.id==="privacy"||d.id==="terms"||d.id==="assistant"&&J:d.id==="access"?F==="admin":d.id==="letters"?U:d.id==="my_info"?!!s.stId:d.id==="members"?U:d.id==="assistant"?J:d.id==="documents"?U?!0:la(s.stId,s.email,A).length>0:U||d.id!=="dashboard";da.filter(De);const Pe=st.map(d=>({...d,items:d.items.filter(De)})).filter(d=>d.items.length>0),ne=async()=>{pa(),await P.auth.signOut(),b({role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),u(!1),o("dashboard")},me=()=>l(d=>d==="dark"?"light":"dark"),Le=()=>{u(d=>{const D=!d;return D?(n==="dashboard"||n==="members"||n==="access")&&o("attendance"):n==="attendance"&&o(s.role==="admin"?"dashboard":"members"),D})};if(le)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(sa,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(he)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(na,{theme:c,onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(pe)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(oa,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(z)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Ye,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(H)return e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(qe,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(x)return J?e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(He,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},role:F,session:s,theme:c})}):e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem",color:"var(--text)"},children:e.jsxs("div",{className:"card",style:{maxWidth:"440px",width:"100%",textAlign:"center",padding:"2.5rem 2rem",boxShadow:"var(--shadow-xl)"},children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"var(--amber)",marginBottom:"1rem"},children:"lock"}),e.jsx("h2",{style:{margin:"0 0 8px 0",fontSize:"20px"},children:"AI Assistant Disabled"}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"14px",margin:0,lineHeight:1.5},children:"The AI Assistant feature is currently disabled for members by an administrator."}),e.jsx("button",{className:"btn btn-primary",style:{marginTop:"1.5rem",width:"100%"},onClick:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},children:"Back to Home"})]})});if(W)return s.userId&&s.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(qt,{theme:c,onNavigate:d=>{window.history.pushState({},"",d==="register"?"/register":"/"),window.dispatchEvent(new Event("popstate"))},onLoginSuccess:d=>{b(d),oe(d),u(!1),o((d.status==="pending"||d.status==="pending_editor_review",d.role==="member"?"attendance":d.role==="admin"?"dashboard":"members")),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(q)return s.userId&&s.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Jt,{theme:c,regEnabled:w,onNavigate:d=>{window.history.pushState({},"",d==="login"?"/login":"/"),window.dispatchEvent(new Event("popstate"))},onRegisterSuccess:(d,D)=>{b(d),oe(d),u(!1),o(d.role==="member"?"attendance":d.role==="admin"?"dashboard":"members"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(s.userId&&(s.status==="pending"||s.status==="pending_editor_review")){const d=s.status==="pending_editor_review";return e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"1.25rem 1rem",boxSizing:"border-box"},children:e.jsxs("div",{className:"card",style:{maxWidth:"480px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)",padding:"1.75rem 1.25rem",boxSizing:"border-box",borderRadius:"16px"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"1.5rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"2.75rem",color:"var(--amber)",marginBottom:"0.75rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"44px"},children:d?"rate_review":"hourglass_top"})}),e.jsx("h1",{className:"page-title",style:{fontSize:"clamp(1.2rem, 4.5vw, 1.45rem)",fontWeight:700,margin:"0 0 6px 0",lineHeight:1.3,letterSpacing:"-0.015em"},children:d?"Registration Under Editorial Review":"Registration Pending"}),e.jsx("p",{className:"page-subtitle",style:{fontSize:"13.5px",color:"var(--text3)",margin:0,lineHeight:1.5},children:d?"Your application and placement skills assessment have been submitted.":"Your account is currently under review by an administrator or editor."})]}),e.jsxs("div",{style:{textAlign:"left",marginBottom:"1.75rem",padding:"1rem 1.25rem",borderRadius:"12px",background:"rgba(0, 122, 255, 0.06)",border:"1px solid rgba(0, 122, 255, 0.18)",display:"flex",flexDirection:"column",gap:"10px",boxSizing:"border-box",width:"100%"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",borderBottom:"1px solid rgba(0, 122, 255, 0.1)",paddingBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Name"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:"var(--text)",wordBreak:"break-word"},children:s.name||"—"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",borderBottom:"1px solid rgba(0, 122, 255, 0.1)",paddingBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Student ID"}),e.jsx("span",{style:{fontSize:"13.5px",fontWeight:600,fontFamily:"var(--mono, monospace)",color:"var(--text)",wordBreak:"break-all"},children:s.stId||"—"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",borderBottom:"1px solid rgba(0, 122, 255, 0.1)",paddingBottom:"8px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Email"}),e.jsx("span",{style:{fontSize:"13.5px",color:"var(--text)",wordBreak:"break-all"},children:s.email||"—"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",paddingTop:"2px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text3)"},children:"Review Status"}),e.jsx("div",{children:e.jsx("span",{className:"badge badge-purple",style:{display:"inline-block",fontSize:"11px",fontWeight:600,letterSpacing:"0.04em",padding:"4px 10px",borderRadius:"6px"},children:d?"PENDING EDITORIAL REVIEW":(s.role||"MEMBER").toUpperCase()})})]})]}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"13.5px",margin:"0 0 1.75rem 0",lineHeight:"1.6"},children:d?"Registration submitted for editorial review. Your functional team will be assigned by the executive committee based on your skills assessment.":"Once approved, you will be granted access to the society portal. Thank you for your patience!"}),e.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",width:"100%"},children:[e.jsxs("button",{className:"btn btn-primary",type:"button",disabled:X,style:{minWidth:"140px",flex:"1 1 140px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:xe,children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"18px",animation:X?"spin 0.8s linear infinite":"none"},children:"refresh"}),X?"Checking...":"Refresh Status"]}),e.jsx("button",{className:"btn btn-ghost",type:"button",style:{minWidth:"100px",flex:"0 1 100px"},onClick:ne,children:"Logout"})]})]})})}return s.userId&&s.status==="rejected"?e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"1.25rem 1rem",boxSizing:"border-box"},children:e.jsxs("div",{className:"card",style:{maxWidth:"480px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)",padding:"1.75rem 1.25rem",boxSizing:"border-box",borderRadius:"16px"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"1.5rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"2.75rem",color:"var(--red)",marginBottom:"0.75rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"44px"},children:"cancel"})}),e.jsx("h1",{className:"page-title",style:{fontSize:"clamp(1.2rem, 4.5vw, 1.45rem)",fontWeight:700,margin:"0 0 6px 0",lineHeight:1.3,letterSpacing:"-0.015em"},children:"Registration Rejected"}),e.jsx("p",{className:"page-subtitle",style:{fontSize:"13.5px",color:"var(--text3)",margin:0,lineHeight:1.5},children:"Your registration request has been rejected by the administrator or editor"})]}),e.jsx("div",{style:{textAlign:"center",marginBottom:"1.75rem",padding:"1rem",borderRadius:"12px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:"600",color:"var(--red)"},children:"Your registration has been rejected."})}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"13.5px",marginBottom:"1.75rem",lineHeight:"1.6"},children:"Please contact the society administrators if you believe this was in error or if you need to submit correct information."}),e.jsx("div",{style:{display:"flex",gap:"10px",justifyContent:"center"},children:e.jsx("button",{className:"btn btn-ghost",type:"button",onClick:ne,children:"Logout"})})]})}):y&&!s.userId?e.jsxs("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",flexDirection:"column",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"32px",height:"32px",border:"3px solid var(--border)",borderTop:"3px solid var(--accent)",borderRadius:"50%",animation:"spin 0.6s linear infinite",margin:"0 auto 12px"}}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),e.jsx("div",{style:{position:"fixed",bottom:"24px",left:0,right:0},children:e.jsx(Yt,{session:s})})]}):s.role==="guest"?e.jsxs(a.Suspense,{fallback:e.jsx(K,{}),children:[e.jsx(aa,{theme:c,onThemeToggle:me,regEnabled:w,aiEnabled:J,onLoginClick:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},onRegisterClick:()=>{window.history.pushState({},"","/register"),window.dispatchEvent(new Event("popstate"))}}),J&&e.jsx(Fe,{role:"guest",session:s,theme:c,onNavigate:d=>{d==="assistant"?(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate"))):o(d)},currentPage:"landing"})]}):e.jsxs("div",{className:"app-shell",children:[e.jsx(Ut,{page:n,setPage:se,visibleSections:Pe,session:s,pendingMsgCount:I,theme:c,toggleTheme:me,isRealStaff:Y,viewAsMember:m,handleToggleViewAsMember:Le,handleLogout:ne,connected:h,canAccessAi:J}),e.jsxs("aside",{className:`sidebar ${f?"open":"collapsed"}`,children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[e.jsx("img",{src:`/${c==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"logo-img",alt:"ADSS Logo"}),f&&e.jsx("div",{className:"logo-text min-w-0",children:e.jsx("span",{className:"logo-title",children:"ADSS RUHUNA"})})]}),e.jsx("button",{className:"sidebar-toggle",onClick:()=>E(!f),"aria-label":"Toggle navigation menu",children:f?e.jsx(St,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"}):e.jsx(ge,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"})})]}),e.jsxs("div",{className:"connection-badge",children:[e.jsx("span",{className:`dot ${h===null?"pending":h?"ok":"err"}`}),f&&e.jsx("span",{className:"text-[10px] font-berkeley-mono uppercase tracking-wider text-[#8a8f98]",children:h===null?"SYNCHRONIZING...":h?"DB SYNCHRONIZED":"OFFLINE"})]}),e.jsx("nav",{className:"sidebar-nav",children:Pe.map(d=>e.jsxs("div",{className:"sidebar-group",children:[f&&e.jsx("div",{className:"sidebar-group-title",children:d.title}),e.jsx("div",{className:"sidebar-group-items",children:d.items.map(D=>{const S=D.icon,k=n===D.id;return e.jsxs("button",{className:`nav-item ${k?"active":""}`,onClick:()=>{o(D.id),window.innerWidth<=768&&E(!1)},title:f?void 0:D.label,children:[e.jsx("span",{className:"nav-icon",children:e.jsx(S,{className:"w-4 h-4"})}),f&&e.jsx("span",{className:"nav-label",children:D.label}),D.id==="messages"&&I>0&&e.jsx("span",{className:"nav-badge-pill",children:I>99?"99+":I})]},D.id)})})]},d.title))}),f?e.jsxs("div",{className:"sidebar-footer",children:[e.jsxs("div",{className:`sidebar-grid-row ${Y?"two-cols":"one-col"}`,children:[Y&&e.jsxs("div",{className:`sidebar-compact-card ${m?"":"active-staff"}`,onClick:Le,title:m?"Switch to Staff View":"Switch to Member View",children:[e.jsxs("div",{className:"sidebar-compact-header",children:[e.jsx(Ke,{className:"w-3.5 h-3.5 icon text-[#6366f1]"}),e.jsx("span",{className:"sidebar-compact-title",children:m?"Member":"Staff"})]}),e.jsx("div",{className:"sidebar-compact-badge",children:m?"OFF":"ON"})]}),e.jsxs("div",{className:`sidebar-compact-card ${c==="dark"?"active-dark":""}`,onClick:me,title:`Switch to ${c==="dark"?"light":"dark"} mode`,children:[e.jsxs("div",{className:"sidebar-compact-header",children:[c==="dark"?e.jsx(Se,{className:"w-3.5 h-3.5 icon text-amber-400"}):e.jsx(_e,{className:"w-3.5 h-3.5 icon text-amber-500"}),e.jsx("span",{className:"sidebar-compact-title",children:c==="dark"?"Dark":"Light"})]}),e.jsx("div",{className:`sidebar-toggle-switch mini ${c==="dark"?"active":""}`,children:e.jsx("div",{className:"sidebar-toggle-thumb"})})]})]}),e.jsx("div",{className:"sidebar-divider"}),e.jsxs("div",{className:"sidebar-pref-card logout-card",onClick:s.role!=="guest"?ne:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")),window.innerWidth<=768&&E(!1)},children:[e.jsxs("div",{className:"sidebar-pref-left",children:[e.jsx(Ce,{className:"w-3.5 h-3.5 text-[#eb5757]"}),e.jsx("span",{className:"sidebar-logout-title",children:s.role!=="guest"?"Logout":"Login"})]}),e.jsx(ge,{className:"w-3.5 h-3.5 text-[#62666d]"})]})]}):e.jsxs("div",{className:"p-2 border-t border-[#23252a] flex flex-col items-center gap-2",children:[e.jsx("button",{onClick:me,className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#8a8f98] hover:text-white hover:bg-[#161718] transition-colors",title:`Switch to ${c==="dark"?"light":"dark"} mode`,children:c==="dark"?e.jsx(Se,{className:"w-4 h-4 text-amber-400"}):e.jsx(_e,{className:"w-4 h-4 text-amber-500"})}),e.jsx("button",{onClick:s.role!=="guest"?ne:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#eb5757] hover:bg-[#eb5757]/10 transition-colors",title:s.role!=="guest"?"Logout":"Login",children:e.jsx(Ce,{className:"w-4 h-4"})})]})]}),e.jsx("main",{className:"main-content",children:e.jsx("div",{className:"page-wrapper",children:e.jsx(Ft,{onNavigate:se,children:e.jsx(a.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(je,{onNavigate:se,isAdmin:U,role:F,session:s,theme:c,docAccessMembers:A,setDocAccessMembers:C})})},n)})}),J&&n!=="assistant"&&e.jsx(Fe,{role:F,session:s,onNavigate:se,currentPage:n,theme:c})]})}function fa({phone:r}){const[i,t]=a.useState(!1);if(!r)return e.jsx("span",{className:"text-muted",children:"Not provided"});const c=n=>{let o=n.replace(/\D/g,"");return o.startsWith("0")&&o.length===10&&(o="94"+o.substring(1)),`https://wa.me/${o}`},l=n=>`tel:${n.replace(/[^\d+]/g,"")}`;return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"contact-number-link",onClick:()=>t(!0),children:r}),i&&e.jsx("div",{className:"contact-choice-overlay",onClick:n=>n.target===n.currentTarget&&t(!1),children:e.jsxs("div",{className:"contact-choice-card",children:[e.jsxs("div",{className:"contact-choice-header",children:[e.jsx("h3",{className:"contact-choice-title",children:"Contact Options"}),e.jsx("button",{className:"contact-choice-close",onClick:()=>t(!1),children:"×"})]}),e.jsxs("div",{className:"contact-choice-body",children:[e.jsxs("a",{href:l(r),className:"contact-choice-btn call",onClick:()=>t(!1),children:[e.jsx("span",{children:"📞"}),e.jsx("span",{children:"Call Phone"})]}),e.jsxs("a",{href:c(r),target:"_blank",rel:"noopener noreferrer",className:"contact-choice-btn whatsapp",onClick:()=>t(!1),children:[e.jsx("span",{children:"💬"}),e.jsx("span",{children:"WhatsApp Message"})]})]})]})})]})}function ba({stId:r,onClose:i}){var I,M,X,j,R,Q,T,ae,le,he,pe;const[t,c]=a.useState(null),[l,n]=a.useState(!0),[o,h]=a.useState("overview"),[v,f]=a.useState(null),[E,s]=a.useState(!1),b=(x,z)=>{x&&navigator.clipboard.writeText(x).then(()=>{f(z),setTimeout(()=>f(null),1800)})},y=()=>{var W,q,Y;if(!t)return;const x=((W=t.letters)==null?void 0:W.filter(F=>F.status==="done"||F.status==="completed").length)||0,z=((q=t.letters)==null?void 0:q.length)||0,H=`STUDENT DOSSIER: ${t.preferred_name||t.name}
ID: ${t.st_id}
Full Name: ${t.name||"—"}
Calling Name: ${t.preferred_name||"—"}
Academic Level: Year ${t.level||"—"}
Society Position: ${t.st_position||"General Member"}
Function: ${t.member_function||"Unassigned"}
Email: ${t.email||"—"}
Phone: ${t.mobile_number||"—"}
Attendance Rate: ${p}% (${w}/${g} events)
OC Positions: ${((Y=t.oc)==null?void 0:Y.length)||0}
Letter Requests: ${z} (${x} Issued)
LinkedIn: ${t.linkedin_url||"None"}`;navigator.clipboard.writeText(H).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};if(a.useEffect(()=>{if(!r)return;let x=!0;const z=W=>{W.key==="Escape"&&(i==null||i())};return window.addEventListener("keydown",z),(async()=>{n(!0);try{const W=typeof r=="string"?r.trim():String(r),{data:q,error:Y}=await P.from("members").select("*").eq("st_id",W).maybeSingle();if(Y)throw Y;if(!q){alert(`Student profile not found for ID: ${W}`),i==null||i();return}const F=q.st_id||W,{data:U,error:J}=await P.from("oc").select("oc_position, apply_status, events(name, date), functions(function_name)").eq("st_id",F);if(J)throw J;const{data:se,error:ye}=await P.from("attendance").select("attend, events(name, date)").eq("st_id",F);if(ye)throw ye;const{data:je,error:xe}=await P.from("letter_requests").select("id, st_id, name_on_letter, selected_events, additional_details, status, created_at").eq("st_id",F).order("created_at",{ascending:!1});xe&&console.warn("Could not fetch letter requests:",xe),x&&c({...q,oc:U||[],attendance:se||[],letters:je||[]})}catch(W){x&&(alert("Error loading profile: "+W.message),i==null||i())}finally{x&&n(!1)}})(),()=>{x=!1,window.removeEventListener("keydown",z)}},[r,i]),!r)return null;const g=((I=t==null?void 0:t.attendance)==null?void 0:I.length)||0,w=((M=t==null?void 0:t.attendance)==null?void 0:M.filter(x=>x.attend==="YES").length)||0,p=g>0?Math.round(w/g*100):0,L=((X=t==null?void 0:t.oc)==null?void 0:X.filter(x=>x.apply_status==="Accept").length)||0,N=((j=t==null?void 0:t.letters)==null?void 0:j.filter(x=>x.status==="done"||x.status==="completed").length)||0,A=((t==null?void 0:t.mobile_number)||"").replace(/\D/g,""),C=A?`https://wa.me/${A.startsWith("0")?"94"+A.substring(1):A}`:null,m=t!=null&&t.linkedin_url?t.linkedin_url.trim().toLowerCase().startsWith("http")?t.linkedin_url.trim():`https://${t.linkedin_url.trim()}`:null,u=x=>{if(!x)return"S";const z=x.trim().split(/\s+/);return z.length===1?z[0].substring(0,2).toUpperCase():(z[0][0]+z[z.length-1][0]).toUpperCase()};return e.jsx("div",{className:"fixed inset-0 z-[120] bg-black/40 dark:bg-[#08090a]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150",onClick:x=>x.target===x.currentTarget&&(i==null?void 0:i()),role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"bg-[#ffffff] dark:bg-[#0f1011] border border-[#e4e4e7] dark:border-[#23252a] rounded-[12px] shadow-[0_24px_48px_rgba(0,0,0,0.25),inset_0_0_0_1px_#e4e4e7] dark:shadow-[0_24px_48px_rgba(0,0,0,0.8),inset_0_0_0_1px_#23252a] w-full max-w-[680px] max-h-[92vh] flex flex-col overflow-hidden text-[#3f3f46] dark:text-[#d0d6e0] my-auto",children:[e.jsxs("div",{className:"px-5 py-3.5 border-b border-[#e4e4e7] dark:border-[#23252a] bg-[#f7f8f8]/50 dark:bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] tracking-wider text-[#62666d] dark:text-[#8a8f98] uppercase bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-2 py-0.5 rounded-[4px] font-[510]",children:"STUDENT DOSSIER"}),t&&e.jsx("span",{className:"font-berkeley-mono text-[11px] text-[#8a8f98] dark:text-[#62666d] truncate",children:t.st_id})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[t&&e.jsx("button",{type:"button",onClick:y,className:"h-7 px-2.5 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] hover:border-[#d4d4d8] dark:hover:border-[#383b3f] transition-colors font-berkeley-mono text-[11px] flex items-center gap-1.5",title:"Copy dossier summary to clipboard",children:E?e.jsxs(e.Fragment,{children:[e.jsx(ee,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(_t,{className:"w-3 h-3"}),e.jsx("span",{children:"Share"})]})}),e.jsx("button",{type:"button",onClick:i,className:"w-7 h-7 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] hover:border-[#d4d4d8] dark:hover:border-[#383b3f] transition-colors flex items-center justify-center text-[13px]",title:"Close (ESC)",children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"overflow-y-auto p-5 space-y-5 flex-1 custom-scrollbar",children:l||!t?e.jsxs("div",{className:"py-16 text-center flex flex-col items-center justify-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-[#e4f222] border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98]",children:"Retrieving student dossier telemetry..."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"dossier-hero flex flex-col sm:!flex-row gap-4 sm:gap-5 items-center sm:!items-center text-center sm:!text-left bg-[#f4f5f6]/40 dark:bg-[#161718]/40 border border-[#e4e4e7] dark:border-[#23252a] rounded-[10px] p-4 sm:p-5",children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[t.profile_image_url?e.jsx("img",{src:t.profile_image_url,alt:t.preferred_name||t.name,className:"dossier-avatar w-20 h-20 sm:!w-28 sm:!h-28 rounded-[10px] sm:rounded-[12px] object-cover border border-[#e4e4e7] dark:border-[#23252a] shadow-sm bg-[#f4f5f6] dark:bg-[#161718]",onError:x=>{x.target.onerror=null,x.target.src="https://api.dicebear.com/7.x/initials/svg?seed="+encodeURIComponent(t.preferred_name||t.name)}}):e.jsx("div",{className:"dossier-avatar w-20 h-20 sm:!w-28 sm:!h-28 rounded-[10px] sm:rounded-[12px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] flex items-center justify-center font-berkeley-mono text-[24px] sm:text-[32px] font-[510] text-[#3f3f46] dark:text-[#d0d6e0]",children:u(t.preferred_name||t.name)}),e.jsx("span",{className:`absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white dark:border-[#0f1011] ${t.status==="active"||t.status==="approved"||!t.status?"bg-[#27a644]":"bg-[#f59e0b]"}`,title:t.status||"Active"})]}),e.jsxs("div",{className:"dossier-hero-info flex-1 min-w-0 w-full space-y-1.5 sm:space-y-2",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"dossier-hero-row flex items-baseline justify-center sm:!justify-start gap-2 flex-wrap",children:[e.jsx("h1",{className:"text-[20px] sm:text-[23px] font-[510] text-[#0a0a0b] dark:text-[#ffffff] tracking-[-0.022em] leading-tight",children:t.preferred_name||t.name}),t.preferred_name&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#62666d] dark:text-[#8a8f98] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-1.5 py-0.5 rounded-[3px]",children:"Calling Name"})]}),t.preferred_name&&t.name&&e.jsxs("div",{className:"text-[12.5px] sm:text-[13px] text-[#62666d] dark:text-[#8a8f98] mt-1 font-[400] truncate",children:["Full Name: ",e.jsx("span",{className:"text-[#3f3f46] dark:text-[#d0d6e0] font-[510]",children:t.name})]})]}),e.jsxs("div",{className:"dossier-hero-row flex items-center justify-center sm:!justify-start gap-1.5 flex-wrap pt-0.5",children:[e.jsxs("button",{type:"button",onClick:()=>b(t.st_id,"st_id"),className:"font-berkeley-mono text-[11px] text-[#3f3f46] dark:text-[#d0d6e0] bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] px-2 py-0.5 rounded-[4px] inline-flex items-center gap-1.5 transition-colors group/copy",title:"Click to copy Student ID",children:[e.jsx("span",{children:t.st_id}),v==="st_id"?e.jsx(ee,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(ie,{className:"w-3 h-3 text-[#8a8f98] dark:text-[#62666d] group-hover/copy:text-[#0a0a0b] dark:group-hover/copy:text-white transition-colors"})]}),t.level?e.jsx("span",{className:`font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] border uppercase ${t.level>4?"bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border-[#e4e4e7] dark:border-[#23252a]":"bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border-[#6366f1]/30"}`,children:t.level>4?"ALUMNI":`YEAR ${t.level}`}):null,t.st_position&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#e4f222]/10 text-[#5f6b00] dark:text-[#e4f222] border border-[#e4f222]/30",children:t.st_position}),t.member_function&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#f4f5f6] dark:bg-[#161718] text-[#3f3f46] dark:text-[#d0d6e0] border border-[#e4e4e7] dark:border-[#23252a]",children:t.member_function})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-berkeley-mono text-[11px]",children:[e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Attendance Rate"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsxs("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:[p,"%"]}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[w,"/",g]})]}),e.jsx("div",{className:"w-full bg-[#e4e4e7] dark:bg-[#08090a] h-1 rounded-full overflow-hidden",children:e.jsx("div",{className:"bg-[#27a644] h-full rounded-full transition-all duration-300",style:{width:`${p}%`}})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"OC Engagements"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:((R=t.oc)==null?void 0:R.length)||0}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[L," Accepted"]})]}),e.jsx("div",{className:"text-[10px] text-[#62666d] dark:text-[#8a8f98] truncate",children:((Q=t.oc)==null?void 0:Q.length)>0?"Active committee":"No assignments"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Letter Requests"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:((T=t.letters)==null?void 0:T.length)||0}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[N," Issued"]})]}),e.jsx("div",{className:"text-[10px] text-[#62666d] dark:text-[#8a8f98] truncate",children:((ae=t.letters)==null?void 0:ae.length)>0?"Dossier logged":"No requests"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Membership"}),e.jsx("div",{className:"flex items-baseline justify-between",children:e.jsx("span",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff] uppercase truncate",children:t.role||"Member"})}),e.jsx("div",{className:"text-[10px] text-[#27a644] truncate",children:"✓ Verified Profile"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap bg-[#f4f5f6]/40 dark:bg-[#161718]/40 border border-[#e4e4e7] dark:border-[#23252a] p-2 rounded-[8px]",children:[t.email?e.jsxs("div",{className:"flex items-center gap-1 bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[6px] px-2.5 py-1",children:[e.jsx(ve,{className:"w-3.5 h-3.5 text-[#62666d] dark:text-[#8a8f98]"}),e.jsx("a",{href:`mailto:${t.email}`,className:"text-[11.5px] text-[#3f3f46] dark:text-[#d0d6e0] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] transition-colors truncate max-w-[170px]",title:`Send email to ${t.email}`,children:t.email}),e.jsx("button",{type:"button",onClick:()=>b(t.email,"email"),className:"p-1 text-[#8a8f98] dark:text-[#62666d] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] rounded transition-colors ml-1",title:"Copy Email",children:v==="email"?e.jsx(ee,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(ie,{className:"w-3 h-3"})})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#8a8f98] dark:text-[#62666d] px-2",children:"No email provided"}),t.mobile_number?e.jsxs("div",{className:"flex items-center gap-1 bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[6px] px-2.5 py-1 font-berkeley-mono text-[11px]",children:[e.jsx(Ct,{className:"w-3.5 h-3.5 text-[#62666d] dark:text-[#8a8f98]"}),e.jsx(fa,{phone:t.mobile_number}),C&&e.jsxs("a",{href:C,target:"_blank",rel:"noreferrer",className:"ml-1 text-[10px] text-[#27a644] hover:underline flex items-center gap-0.5",title:"Chat on WhatsApp",children:[e.jsx(Et,{className:"w-3 h-3"}),e.jsx("span",{children:"WA"})]})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#8a8f98] dark:text-[#62666d] px-2",children:"No phone provided"}),m&&e.jsxs("a",{href:m,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] text-[#4f46e5] dark:text-[#818cf8] px-2.5 py-1 rounded-[6px] font-berkeley-mono text-[11px] transition-colors ml-auto",title:"Open LinkedIn in new tab",children:[e.jsx("span",{children:"LinkedIn Profile"}),e.jsx(tt,{className:"w-3 h-3"})]})]}),e.jsxs("div",{className:"border-b border-[#e4e4e7] dark:border-[#23252a] flex items-center gap-1 font-berkeley-mono text-[11.5px] overflow-x-auto",children:[e.jsxs("button",{type:"button",onClick:()=>h("overview"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${o==="overview"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(et,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Dossier Overview"})]}),e.jsxs("button",{type:"button",onClick:()=>h("attendance"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${o==="attendance"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(de,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Attendance Record"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((le=t.attendance)==null?void 0:le.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>h("oc"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${o==="oc"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(Ie,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Committee (OC)"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((he=t.oc)==null?void 0:he.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>h("letters"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${o==="letters"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(ze,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Letters"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((pe=t.letters)==null?void 0:pe.length)||0})]})]}),e.jsxs("div",{children:[o==="overview"&&e.jsx("div",{className:"space-y-3 font-sans",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Full Legal Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.name||"—"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Preferred Calling Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#5f6b00] dark:text-[#e4f222]",children:t.preferred_name||e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] italic",children:"Not provided"})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Functional Division"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.member_function||e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d]",children:"General Pool"})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Society Position / Rank"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.st_position||"Active Society Member"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Academic Standing"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.level?`Undergraduate Year ${t.level}`:"Undergraduate"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Profile Registration Date"}),e.jsx("div",{className:"font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98]",children:t.created_at?new Date(t.created_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Legacy Database Record"})]})]})}),o==="attendance"&&e.jsx("div",{className:"space-y-3",children:t.attendance.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(de,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No event attendance records on file for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Name"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Date"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Attendance"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.attendance.map((x,z)=>{var H,W;return e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff] block",children:((H=x.events)==null?void 0:H.name)||"Official Society Session"})}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#62666d] dark:text-[#8a8f98]",children:((W=x.events)==null?void 0:W.date)||"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${x.attend==="YES"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30"}`,children:x.attend==="YES"?e.jsxs(e.Fragment,{children:[e.jsx(Ae,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Attended"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Me,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Absent"})]})})})]},z)})})]})})})}),o==="oc"&&e.jsx("div",{className:"space-y-3",children:t.oc.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(Ie,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No organizing committee appointments logged for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event & Team"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Assigned Role(s)"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Selection Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.oc.map((x,z)=>{var H,W;return e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff] block",children:((H=x.events)==null?void 0:H.name)||"Official Event"}),e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#4f46e5] dark:text-[#818cf8]",children:((W=x.functions)==null?void 0:W.function_name)||"General Committee"})]}),e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:x.oc_position?x.oc_position.split(",").map((q,Y)=>e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border border-[#6366f1]/30",children:q.trim()},Y)):e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border border-[#e4e4e7] dark:border-[#23252a]",children:"Committee Member"})})}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:x.apply_status==="Accept"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#27a644]/10 text-[#27a644] border border-[#27a644]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(ee,{className:"w-2.5 h-2.5"})," Accepted"]}):x.apply_status==="Reject"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#eb5757]/10 text-[#eb5757] border border-[#eb5757]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(re,{className:"w-2.5 h-2.5"})," Rejected"]}):x.apply_status==="Interview Scheduled"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#02b8cc]/10 text-[#02b8cc] border border-[#02b8cc]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(be,{className:"w-2.5 h-2.5"})," Interview"]}):e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#f59e0b]/10 text-[#b45309] dark:text-[#f59e0b] border border-[#f59e0b]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(be,{className:"w-2.5 h-2.5"})," Pending"]})})]},z)})})]})})})}),o==="letters"&&e.jsx("div",{className:"space-y-3",children:t.letters.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(ze,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No letter requests or issued certificates found for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Document & Events"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Submitted"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.letters.map(x=>e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:"Appreciation Letter"}),x.name_on_letter&&e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border border-[#e4e4e7] dark:border-[#23252a]",children:["Name: ",x.name_on_letter]})]}),x.selected_events&&Array.isArray(x.selected_events)&&x.selected_events.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:x.selected_events.map((z,H)=>e.jsx("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border border-[#6366f1]/30",children:z},H))}),x.additional_details&&e.jsx("p",{className:"text-[11px] text-[#62666d] dark:text-[#8a8f98] mt-1 line-clamp-2",children:x.additional_details})]}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#62666d] dark:text-[#8a8f98] whitespace-nowrap align-top",children:x.created_at?new Date(x.created_at).toLocaleDateString():"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right whitespace-nowrap align-top",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${x.status==="done"||x.status==="completed"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":x.status==="inprogress"?"bg-[#818cf8]/10 text-[#4f46e5] dark:text-[#818cf8] border-[#818cf8]/30":x.status==="rejected"?"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30":"bg-[#f59e0b]/10 text-[#b45309] dark:text-[#f59e0b] border-[#f59e0b]/30"}`,children:x.status==="done"||x.status==="completed"?e.jsxs(e.Fragment,{children:[e.jsx(Ae,{className:"w-2.5 h-2.5 text-[#27a644]"}),e.jsx("span",{children:"Issued"})]}):x.status==="inprogress"?e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-2.5 h-2.5 text-[#4f46e5] dark:text-[#818cf8]"}),e.jsx("span",{children:"In Progress"})]}):x.status==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx(Me,{className:"w-2.5 h-2.5 text-[#eb5757]"}),e.jsx("span",{children:"Rejected"})]}):e.jsxs(e.Fragment,{children:[e.jsx(be,{className:"w-2.5 h-2.5 text-[#b45309] dark:text-[#f59e0b]"}),e.jsx("span",{children:"Pending"})]})})})]},x.id))})]})})})})]})]})}),e.jsxs("div",{className:"px-5 py-3.5 border-t border-[#e4e4e7] dark:border-[#23252a] bg-[#f7f8f8]/50 dark:bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"font-berkeley-mono text-[11px] text-[#8a8f98] dark:text-[#62666d] hidden sm:block",children:["Press ",e.jsx("kbd",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-1 py-0.5 rounded text-[#62666d] dark:text-[#8a8f98]",children:"ESC"})," to exit"]}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsxs("button",{type:"button",onClick:y,className:"h-8 px-3.5 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] text-[#3f3f46] dark:text-[#d0d6e0] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] font-berkeley-mono text-[11.5px] transition-colors flex items-center gap-1.5",children:[E?e.jsx(ee,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(ie,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:E?"Copied":"Copy Summary"})]}),e.jsx("button",{type:"button",onClick:i,className:"h-8 px-4 rounded-[6px] bg-[#e4f222] text-[#08090a] font-[510] text-[12.5px] hover:bg-[#d5e31f] transition-all flex items-center gap-1.5 shadow-sm active:scale-[0.98]",children:e.jsx("span",{children:"Close Dossier"})})]})]})]})})}const rt=a.createContext({activeStudentId:null,openStudentProfile:()=>{},closeStudentProfile:()=>{}});function ua({children:r}){const[i,t]=a.useState(null),c=a.useCallback(n=>{n&&typeof n=="string"?t(n.trim()):n&&t(String(n))},[]),l=a.useCallback(()=>{t(null)},[]);return e.jsxs(rt.Provider,{value:{activeStudentId:i,openStudentProfile:c,closeStudentProfile:l},children:[r,i&&e.jsx(ba,{stId:i,onClose:l})]})}function ga(){const r=a.useContext(rt);return r||{activeStudentId:null,openStudentProfile:i=>{console.warn("StudentProfileProvider missing, cannot open:",i)},closeStudentProfile:()=>{}}}function Sa({stId:r,name:i,subtext:t,showIcon:c=!0,showAvatar:l=!1,showId:n=!1,avatarUrl:o,className:h="",size:v="md",children:f}){const{openStudentProfile:E}=ga(),s=i||f||(r?`Student (${r})`:"Unknown Student");if(!r)return e.jsx("span",{className:`text-gray-600 dark:text-[#8a8f98] font-[400] ${h}`,children:s});const b=w=>{w.stopPropagation(),E(r)},y={sm:"text-[12px] gap-1",md:"text-[13px] gap-1.5",lg:"text-[15px] gap-2"},g=w=>{if(!w)return"S";const p=w.trim().split(/\s+/);return p.length===1?p[0].substring(0,2).toUpperCase():(p[0][0]+p[p.length-1][0]).toUpperCase()};return e.jsxs("button",{type:"button",onClick:b,title:`Inspect Student Dossier (${r})`,className:`inline-flex items-center text-left group/student transition-all duration-150 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-indigo-500/50 dark:focus:ring-[#e4f222]/50 ${y[v]||y.md} ${h}`,children:[l&&e.jsx("span",{className:"w-6 h-6 rounded-[4px] bg-gray-100 dark:bg-[#161718] border border-gray-200 dark:border-[#23252a] overflow-hidden flex items-center justify-center font-berkeley-mono text-[10px] text-gray-700 dark:text-[#ffffff] flex-shrink-0 group-hover/student:border-indigo-500/40 dark:group-hover/student:border-[#e4f222]/40 transition-colors",children:o?e.jsx("img",{src:o,alt:"",className:"w-full h-full object-cover"}):g(s)}),e.jsxs("span",{className:"flex flex-col min-w-0",children:[e.jsxs("span",{className:"flex items-center gap-1 leading-snug",children:[e.jsx("span",{className:"font-[510] text-gray-900 dark:text-[#ffffff] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] transition-colors truncate",children:s}),c&&e.jsx("span",{className:"inline-flex items-center text-gray-400 dark:text-[#62666d] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] group-hover/student:translate-x-0.5 transition-all flex-shrink-0","aria-hidden":"true",children:e.jsx(tt,{className:"w-2.5 h-2.5 opacity-60 group-hover/student:opacity-100"})})]}),(t||n)&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-gray-500 dark:text-[#8a8f98] group-hover/student:text-gray-700 dark:group-hover/student:text-[#d0d6e0] transition-colors truncate",children:t||r})]})]})}const nt=a.createContext(null),Ne=[{id:"cycle-2024-2025",name:"2024/2025",startDate:"2024-01-01",endDate:"2025-12-31",isActive:!0,isVisible:!0,description:"ADSS Academic Cycle 2024/2025"},{id:"cycle-2023-2024",name:"2023/2024",startDate:"2023-01-01",endDate:"2023-12-31",isActive:!1,isVisible:!0,description:"ADSS Academic Cycle 2023/2024"}];function va({children:r}){const[i,t]=a.useState(()=>{try{const p=localStorage.getItem("adss_cycles_cache");return p?JSON.parse(p):Ne}catch{return Ne}}),[c,l]=a.useState(()=>{try{return localStorage.getItem("adss_active_cycle_id")||"cycle-2024-2025"}catch{return"cycle-2024-2025"}}),[n,o]=a.useState(()=>{try{return localStorage.getItem("adss_selected_cycle_id")||"active"}catch{return"active"}}),[h,v]=a.useState(!0),f=a.useMemo(()=>i.find(p=>p.id===c||p.isActive)||i[0]||Ne[0],[i,c]),E=a.useMemo(()=>n==="all"?null:n==="active"?f:i.find(p=>p.id===n)||f,[i,n,f]),s=a.useMemo(()=>i.filter(p=>p.isVisible!==!1||p.id===(f==null?void 0:f.id)),[i,f]),b=a.useCallback(async()=>{try{const{data:p,error:L}=await P.from("system_settings").select("key, value").in("key",["academic_cycles","active_cycle_id"]);if(!L&&p&&p.length>0){const N=p.find(u=>u.key==="academic_cycles"),A=p.find(u=>u.key==="active_cycle_id");let C=null;if(N&&N.value)try{const u=JSON.parse(N.value);Array.isArray(u)&&u.length>0&&(C=u)}catch(u){console.error("Failed to parse academic_cycles:",u)}let m=(A==null?void 0:A.value)||null;if(C){if(!m){const u=C.find(I=>I.isActive);m=u?u.id:C[0].id}t(C),l(m);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(C)),localStorage.setItem("adss_active_cycle_id",m)}catch{}}}}catch(p){console.warn("Could not load cycles from DB, using fallback:",p)}finally{v(!1)}},[]);a.useEffect(()=>{b();const p=P.channel("system-settings-cycles-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},L=>{var A;const N=(A=L.new)==null?void 0:A.key;(N==="academic_cycles"||N==="active_cycle_id")&&b()}).subscribe();return()=>{P.removeChannel(p)}},[b]);const y=a.useCallback(p=>{o(p);try{localStorage.setItem("adss_selected_cycle_id",p)}catch{}},[]),g=a.useCallback((p,L=E)=>{if(!L)return!0;if(!p)return!1;try{let N="";return typeof p=="string"?N=p.substring(0,10):p instanceof Date?N=p.toISOString().substring(0,10):N=String(p).substring(0,10),!(L.startDate&&N<L.startDate||L.endDate&&N>L.endDate)}catch{return!0}},[E]),w=a.useCallback(async(p,L)=>{var N,A;try{const C=L||((N=p.find(M=>M.isActive))==null?void 0:N.id)||((A=p[0])==null?void 0:A.id),m=p.map(M=>({...M,isActive:M.id===C})),[u,I]=await Promise.all([P.from("system_settings").upsert({key:"academic_cycles",value:JSON.stringify(m)},{onConflict:"key"}),P.from("system_settings").upsert({key:"active_cycle_id",value:C},{onConflict:"key"})]);if(u.error)throw u.error;if(I.error)throw I.error;t(m),l(C);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(m)),localStorage.setItem("adss_active_cycle_id",C)}catch{}return{success:!0}}catch(C){return console.error("Error saving cycles to system_settings:",C),{success:!1,error:C.message||"Failed to save cycles"}}},[]);return e.jsx(nt.Provider,{value:{cycles:i,visibleCycles:s,activeCycle:f,activeCycleId:c,selectedCycleId:n,selectedCycle:E,setSelectedCycleId:y,isWithinCycle:g,saveCycles:w,reloadCycles:b,loading:h},children:r})}function _a(){const r=a.useContext(nt);if(!r)throw new Error("useCycle must be used within a CycleProvider");return r}ct.createRoot(document.getElementById("root")).render(e.jsx(Ge.StrictMode,{children:e.jsx(va,{children:e.jsx(ua,{children:e.jsx(Lt,{children:e.jsx(ma,{})})})})}));export{ce as A,Bt as C,Yt as M,fa as P,Sa as S,ba as a,_a as b,ga as c,la as g,P as s,Ot as u};
