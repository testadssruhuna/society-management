const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-gDgjyCuP.js","assets/vendor-react-DFHPY69B.js","assets/vendor-icons-CuqApSGN.js","assets/vendor-supabase-DqvqN50L.js","assets/vendor-6pgEYSA5.js","assets/Register-BFE6txBQ.js","assets/imageOptimizer-B7dhkxfR.js","assets/PlacementQuestionnaire-D3jQPx6a.js","assets/Dashboard-DQbtxQ6g.js","assets/queryCache-9w56PyI2.js","assets/CycleSelector-DEhiW-w4.js","assets/Members-F9F7rlIA.js","assets/Pagination-kQxqtPAr.js","assets/Events-D35qfvXT.js","assets/DatePicker-kEb5ri2t.js","assets/DatePicker-CPVejJYq.css","assets/Attendance-Dedsg3yj.js","assets/EventSelect-B4A4wipX.js","assets/vendor-scanner-CRRJkh5G.js","assets/Committee-DDsbRoAG.js","assets/Setup-CpCHcoH8.js","assets/Access-BCXJB9nf.js","assets/documentService-DJnY4iuB.js","assets/MyInfo-D_yhfxfe.js","assets/Messages-49Mleob7.js","assets/Tasks-5t87-5T4.js","assets/Landing-QorpfkNU.js","assets/PublicEvent-CC1mH-Ct.js","assets/Notices-Bz-SJniu.js","assets/vendor-markdown-C_9llh6Y.js","assets/PublicNotice-C-_fSjga.js","assets/ScanAttendance-BqeJhFOp.js","assets/Letters-BfWa1d4q.js","assets/AssistantPage-B17Ovl1S.js","assets/PrivacyPolicy-D4fuzBcA.js","assets/TermsOfService-CRgePtWg.js","assets/Documents-BeG9W7mD.js"])))=>i.map(i=>d[i]);
var tt=Object.defineProperty;var at=(s,n,t)=>n in s?tt(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var De=(s,n,t)=>at(s,typeof n!="symbol"?n+"":n,t);import{r as a,j as e,R as Ve,c as st}from"./vendor-react-DFHPY69B.js";import{c as rt}from"./vendor-supabase-DqvqN50L.js";import{y as nt,j as X,x as re,ao as ot,P as it,E as ct,az as dt,aM as ae,aA as lt,a7 as ht,aC as xt,ak as pt,al as mt,F as ft,n as me,as as He,ad as je,ax as ke,a5 as we,a0 as Ye,aF as Ne,a8 as pe,a6 as fe,g as qe,C as oe,aw as Je,q as Se,p as bt,f as _e,Q as Ge,T as ut,aI as gt,au as vt,m as yt,ar as jt,af as kt,aa as wt,G as Ke,d as Pe,t as Le,u as xe}from"./vendor-icons-CuqApSGN.js";import"./vendor-6pgEYSA5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const i of d)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(d){const i={};return d.integrity&&(i.integrity=d.integrity),d.referrerPolicy&&(i.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?i.credentials="include":d.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(d){if(d.ep)return;d.ep=!0;const i=t(d);fetch(d.href,i)}})();const Nt="modulepreload",St=function(s){return"/"+s},Oe={},L=function(n,t,o){let d=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(t.map(v=>{if(v=St(v),v in Oe)return;Oe[v]=!0;const f=v.endsWith(".css"),C=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${C}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":Nt,f||(c.as="script"),c.crossOrigin="",c.href=v,l&&c.setAttribute("nonce",l),document.head.appendChild(c),f)return new Promise((b,y)=>{c.addEventListener("load",b),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return d.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return n().catch(i)})},_t="https://zbhwelmxdgldbwbnsfhd.supabase.co",Ct="sb_publishable_xPa0SGJFvPb3bqtmcsRkSg_-MlmlDdR",P=rt(_t,Ct,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0,storageKey:"adss-auth",storage:window.localStorage}}),$e=10;async function Et(s,n=[],t="guest"){if(!s||!s.trim())return{success:!1,error:"Message cannot be empty."};const o=n.length>$e?n.slice(n.length-$e):n;try{const{data:d,error:i}=await P.functions.invoke("chat-assistant",{body:{userMessage:s.trim(),history:o,userRole:t}});return i?{success:!1,error:i.message||"Failed to communicate with AI Assistant service."}:d||{success:!1,error:"No response received from AI Assistant service."}}catch(d){return{success:!1,error:d.message||"Unexpected error connecting to AI Assistant."}}}const Xe=a.createContext(null),ge="adss_ai_assistant_history_v1";function At({children:s,role:n="guest"}){const[t,o]=a.useState(()=>{try{const p=sessionStorage.getItem(ge);return p?JSON.parse(p):[]}catch{return[]}}),[d,i]=a.useState(""),[r,l]=a.useState(!1),[v,f]=a.useState(!1);a.useEffect(()=>{try{sessionStorage.setItem(ge,JSON.stringify(t))}catch{}},[t]);const C=a.useCallback(()=>{f(p=>!p)},[]),c=a.useCallback(()=>{f(!0)},[]),b=a.useCallback(()=>{f(!1)},[]),y=a.useCallback(()=>{o([]);try{sessionStorage.removeItem(ge)}catch{}},[]),g=a.useCallback(async(p,R=n)=>{const N=p.trim();if(!N||r)return;const E={role:"user",text:N,id:`u-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(m=>[...m,E]),i(""),l(!0);const _=t.map(m=>({role:m.role==="user"?"user":"model",text:m.text}));try{const m=await Et(N,_,R),u={role:"assistant",text:m.success?m.text:`⚠️ ${m.error??"Something went wrong. Please try again."}`,id:`a-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(A=>[...A,u])}catch{o(u=>[...u,{role:"assistant",text:"⚠️ Unexpected error connecting to ADSS Intelligence. Please try again.",id:`err-${Date.now()}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}finally{l(!1)}},[r,t,n]),k={messages:t,input:d,setInput:i,loading:r,sendMessage:g,clearChat:y,isWidgetOpen:v,setIsWidgetOpen:f,toggleWidget:C,openWidget:c,closeWidget:b};return e.jsx(Xe.Provider,{value:k,children:s})}function It(){const s=a.useContext(Xe);if(!s)throw new Error("useAiChat must be used within an AiChatProvider");return s}function ne({size:s=20,className:n="",variant:t="brand",animate:o=!1,style:d={}}){const i=t==="monochrome"?"currentColor":"#e4f222",r=t==="monochrome"?"currentColor":"#8a8f98",l=t==="glow"?"drop-shadow(0 0 6px rgba(228, 242, 34, 0.4))":void 0;return e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`adss-ai-icon ${o?"adss-ai-icon--pulse":""} ${n}`,style:{filter:l,flexShrink:0,...d},"aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"2.5",r:"1.25",fill:r,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"7.25",r:"1.25",fill:r,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"16.75",r:"1.25",fill:r,fillOpacity:"0.5"}),e.jsx("circle",{cx:"12",cy:"21.5",r:"1.25",fill:r,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"16.75",r:"1.25",fill:r,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"7.25",r:"1.25",fill:r,fillOpacity:"0.5"}),e.jsx("line",{x1:"12",y1:"3.75",x2:"12",y2:"7.5",stroke:r,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"12",y1:"16.5",x2:"12",y2:"20.25",stroke:r,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"4.8",y1:"8",x2:"8.5",y2:"10.5",stroke:r,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"19.2",y1:"16",x2:"15.5",y2:"13.5",stroke:r,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("path",{d:"M12 4.5 C12 8.6 15.4 12 19.5 12 C15.4 12 12 15.4 12 19.5 C12 15.4 8.6 12 4.5 12 C8.6 12 12 8.6 12 4.5 Z",fill:i}),e.jsx("circle",{cx:"12",cy:"12",r:"1.75",fill:"#08090a"}),e.jsx("circle",{cx:"12",cy:"12",r:"0.75",fill:"#ffffff"})]})}const Rt=[{tag:"IMPORT",text:"How do I import members via CSV?"},{tag:"ATTENDANCE",text:"How do I generate a QR code for attendance?"},{tag:"ACCESS",text:"How do I invite an editor or manage permissions?"},{tag:"DOCS",text:"How do I upload and restrict society documents?"}],Dt=[{tag:"REGISTRATION",text:"How do I register as an active society member?"},{tag:"COMMITTEE",text:"How do I apply for the Organizing Committee (OC)?"},{tag:"LETTERS",text:"How do I request an official appreciation letter?"},{tag:"QR SCAN",text:"How do I check in for event attendance using QR?"}];function Pt({filename:s="event_attendance.csv",csvData:n}){const[t,o]=a.useState(!1),d=()=>{const i=new Blob([n],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),l=document.createElement("a");l.setAttribute("href",r),l.setAttribute("download",s),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(r),o(!0),setTimeout(()=>o(!1),2500)};return e.jsx("div",{className:"chat-csv-wrapper",children:e.jsxs("button",{type:"button",onClick:d,className:"chat-csv-btn",title:"Export CSV data",children:[t?e.jsx(X,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(it,{className:"w-3.5 h-3.5 chat-csv-icon"}),e.jsx("span",{className:"font-berkeley-mono text-[12px] tracking-tight",children:t?"CSV EXPORTED":"DOWNLOAD ATTENDANCE CSV"}),e.jsx(ct,{className:"w-3 h-3 chat-csv-download-icon ml-auto"})]})})}function Lt({code:s}){const[n,t]=a.useState(!1),o=async()=>{try{await navigator.clipboard.writeText(s),t(!0),setTimeout(()=>t(!1),2e3)}catch{}};return e.jsxs("div",{className:"chat-codeblock",children:[e.jsxs("div",{className:"chat-codeblock-header",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-berkeley-mono chat-codeblock-label",children:[e.jsx(dt,{className:"w-3 h-3 chat-codeblock-term-icon"}),e.jsx("span",{children:"SNIPPET"})]}),e.jsxs("button",{type:"button",onClick:o,className:"chat-copy-code-btn",title:"Copy code",children:[n?e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(re,{className:"w-3 h-3"}),e.jsx("span",{className:"text-[10px] font-berkeley-mono",children:n?"COPIED":"COPY"})]})]}),e.jsx("pre",{className:"chat-codeblock-content",children:e.jsx("code",{children:s})})]})}function Ot(s){if(!s)return null;const n=/```(?:csv|text|json|sql|javascript|js)?\n([\s\S]*?)\n```/g,t=[];let o=0,d;for(;(d=n.exec(s))!==null;){const r=s.slice(o,d.index);r&&t.push({type:"text",content:r});const l=d[1].trim();d[0].startsWith("```csv")||l.includes(",")&&(l.toLowerCase().includes("st id")||l.toLowerCase().includes("email")||l.toLowerCase().includes("attended"))?t.push({type:"csv",content:l}):t.push({type:"code",content:l}),o=d.index+d[0].length}const i=s.slice(o);return i&&t.push({type:"text",content:i}),e.jsx(e.Fragment,{children:t.map((r,l)=>{if(r.type==="csv")return e.jsx(Pt,{csvData:r.content},`csv-${l}`);if(r.type==="code")return e.jsx(Lt,{code:r.content},`code-${l}`);const v=r.content.split(`
`),f=[];return v.forEach((C,c)=>{if(c>0){if(C.trim()===""){f.push(e.jsx("div",{className:"h-2"},`gap-${c}`));return}f.push(e.jsx("br",{},`br-${c}`))}const b=[],y=/\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|([^*`]+)/g;let g,k=0;for(;(g=y.exec(C))!==null;)g[1]!==void 0?b.push(e.jsx("strong",{className:"font-semibold chat-md-strong",children:g[1]},`${l}-${c}-b-${k++}`)):g[2]!==void 0?b.push(e.jsx("em",{className:"italic chat-md-em",children:g[2]},`${l}-${c}-i-${k++}`)):g[3]!==void 0?b.push(e.jsx("code",{className:"chat-inline-code",children:g[3]},`${l}-${c}-c-${k++}`)):b.push(e.jsx("span",{children:g[4]},`${l}-${c}-t-${k++}`));f.push(...b)}),e.jsx("span",{children:f},`text-block-${l}`)})})}function $t({messages:s=[],loading:n=!1,input:t="",onInputChange:o,onSendMessage:d,role:i="guest",compact:r=!1,inputRef:l,className:v="",theme:f}){const C=a.useRef(null),[c,b]=a.useState(null),[y,g]=a.useState(!1),k=i==="admin"||i==="editor",p=k?Rt:Dt;a.useEffect(()=>{var m;(m=C.current)==null||m.scrollIntoView({behavior:"smooth"})},[s,n]);const R=m=>{const u=m.trim();!u||n||y||(d(u,i),g(!0),setTimeout(()=>g(!1),1500))},N=m=>{m.preventDefault(),R(t)},E=async(m,u)=>{try{await navigator.clipboard.writeText(u),b(m),setTimeout(()=>b(null),2e3)}catch{}},_=n||y||!t.trim();return e.jsxs("div",{className:`chat-conversation ${r?"chat-conv--compact":"chat-conv--full"} ${v}`,"data-theme":f,children:[e.jsxs("div",{className:"chat-conv-messages",role:"log","aria-live":"polite","aria-label":"Conversation History",children:[s.length===0&&!n&&e.jsxs("div",{className:"chat-conv-empty",children:[e.jsx("div",{className:"chat-conv-empty-icon-wrap",children:e.jsx(ne,{size:r?36:48,animate:!0,variant:"brand"})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("span",{className:"chat-conv-telemetry-badge",children:"ADSS TELEMETRY V2.6"}),e.jsx("span",{className:"chat-conv-grounded-badge",children:"LIVE GROUNDING"})]}),e.jsx("h2",{className:"chat-conv-empty-title",children:"ADSS Portal Intelligence"}),e.jsx("p",{className:"chat-conv-empty-sub",children:k?"Instant precision answers regarding society operations, member directories, attendance analytics, and role governance.":"Instant precision answers regarding membership registration, event check-in, OC recruitment, and official letters."})]}),e.jsx("div",{className:"chat-conv-chips",children:p.map((m,u)=>e.jsxs("button",{type:"button",className:"chat-conv-chip",onClick:()=>R(m.text),disabled:n||y,children:[e.jsx("span",{className:"chat-conv-chip-tag",children:m.tag}),e.jsx("span",{className:"chat-conv-chip-text",children:m.text}),e.jsx(nt,{className:"w-3 h-3 chat-conv-chip-arrow ml-auto shrink-0"})]},u))})]}),s.map((m,u)=>{const A=m.role==="user",$=m.id||`msg-${u}`;return e.jsxs("div",{className:`chat-conv-msg-row ${A?"chat-conv-msg-row--user":"chat-conv-msg-row--assistant"}`,children:[!A&&e.jsx("div",{className:"chat-conv-avatar-wrap",title:"ADSS Portal AI Assistant",children:e.jsx(ne,{size:16,variant:"brand"})}),e.jsxs("div",{className:"chat-conv-msg-body",children:[e.jsx("div",{className:`chat-conv-bubble ${A?"chat-conv-bubble--user":"chat-conv-bubble--assistant"}`,children:A?m.text:Ot(m.text)}),!A&&e.jsxs("div",{className:"chat-conv-msg-meta",children:[e.jsx("span",{className:"chat-conv-msg-time",children:m.timestamp||"ADSS INTEL"}),e.jsx("button",{type:"button",onClick:()=>E($,m.text),className:"chat-conv-copy-action",title:"Copy response",children:c===$?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"COPIED"})]}):e.jsxs(e.Fragment,{children:[e.jsx(re,{className:"w-3 h-3"}),e.jsx("span",{children:"COPY"})]})})]})]})]},$)}),n&&e.jsxs("div",{className:"chat-conv-msg-row chat-conv-msg-row--assistant",children:[e.jsx("div",{className:"chat-conv-avatar-wrap",children:e.jsx(ne,{size:16,animate:!0,variant:"brand"})}),e.jsx("div",{className:"chat-conv-msg-body",children:e.jsxs("div",{className:"chat-conv-bubble chat-conv-bubble--assistant chat-conv-thinking",children:[e.jsx("div",{className:"chat-pulse-node"}),e.jsx("span",{className:"font-berkeley-mono text-[11px] chat-thinking-text tracking-wider uppercase",children:"Analyzing ADSS records…"})]})})]}),e.jsx("div",{ref:C})]}),e.jsx("form",{className:"chat-conv-input-bar",onSubmit:N,children:e.jsxs("div",{className:"chat-conv-input-wrapper",children:[e.jsx("input",{ref:l,className:"chat-conv-input",type:"text",placeholder:y?"Rate limit throttle (1s)...":n?"ADSS intelligence processing...":"Ask ADSS Intelligence (e.g. attendance, OC, letters)...",value:t,onChange:m=>o(m.target.value),disabled:n||y,autoComplete:"off","aria-label":"Message to ADSS AI Assistant"}),e.jsx("button",{type:"submit",className:"chat-conv-send-btn",disabled:_,"aria-label":"Send query",title:"Execute query (Enter)",children:e.jsx(ot,{className:"w-3.5 h-3.5"})})]})}),e.jsx("style",{children:`
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

      `})]})}function Te({role:s="guest",session:n={},onNavigate:t,currentPage:o,theme:d}){const i=(n==null?void 0:n.role)||s||"guest",{messages:r,input:l,setInput:v,loading:f,sendMessage:C,clearChat:c,isWidgetOpen:b,setIsWidgetOpen:y,toggleWidget:g,closeWidget:k}=It(),p=a.useRef(null),R=a.useRef(null),N=a.useRef(null);a.useEffect(()=>{b&&setTimeout(()=>{var u;return(u=R.current)==null?void 0:u.focus()},100)},[b]),a.useEffect(()=>{const u=A=>{var $;if((A.ctrlKey||A.metaKey)&&A.key==="/"){A.preventDefault(),g();return}A.key==="Escape"&&b&&(k(),($=N.current)==null||$.focus())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[b,g,k]);const E=()=>{k(),t?t("assistant"):(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate")))},_=()=>{r.length!==0&&window.confirm("Clear active ADSS intelligence conversation?")&&c()},m=i==="admin"?"STAFF COMMAND":i==="editor"?"EDITOR PORTAL":i==="member"?"MEMBER PORTAL":"GUEST ACCESS";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"adss-ai-trigger-container",children:e.jsxs("button",{ref:N,id:"adss-ai-widget-toggle",className:`adss-ai-trigger-btn ${b?"adss-ai-trigger-btn--open":""}`,onClick:g,"aria-label":b?"Close ADSS AI assistant":"Open ADSS AI assistant","aria-expanded":b,"aria-controls":"adss-ai-widget-panel",title:"ADSS Portal AI Assistant (Ctrl+/)",children:[b?e.jsx(ae,{className:"w-5 h-5 text-current transition-transform duration-200"}):e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx(ne,{size:22,variant:"brand",animate:f}),e.jsx("span",{className:"adss-ai-status-indicator"})]}),!b&&e.jsxs("div",{className:"adss-ai-trigger-tooltip",children:[e.jsx("span",{className:"font-sans text-[12px] font-medium adss-ai-tooltip-text",children:"ADSS AI"}),e.jsx("span",{className:"adss-ai-shortcut-badge",children:"Ctrl /"})]})]})}),e.jsxs("div",{id:"adss-ai-widget-panel",ref:p,className:`adss-ai-panel ${b?"adss-ai-panel--open":""}`,"data-theme":d,role:"dialog","aria-modal":"true","aria-label":"ADSS Portal AI Assistant",children:[e.jsx("div",{className:"adss-ai-mobile-handle"}),e.jsxs("div",{className:"adss-ai-header",children:[e.jsxs("div",{className:"adss-ai-header-left",children:[e.jsx("div",{className:"adss-ai-header-emblem",children:e.jsx(ne,{size:18,variant:"brand"})}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("h3",{className:"adss-ai-title",children:"ADSS Intelligence"}),e.jsx("span",{className:"adss-ai-role-badge",children:m})]})]}),e.jsxs("div",{className:"adss-ai-header-actions",children:[r.length>0&&e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:_,title:"Clear conversation","aria-label":"Clear conversation history",children:e.jsx(lt,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:E,title:"Expand to full workspace view (/assistant)","aria-label":"Open in full screen page",children:e.jsx(ht,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:k,title:"Close panel (Esc)","aria-label":"Close assistant",children:e.jsx(ae,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"adss-ai-content",children:e.jsx($t,{messages:r,loading:f,input:l,onInputChange:v,onSendMessage:C,compact:!0,inputRef:R,role:i,theme:d})})]}),b&&e.jsx("div",{className:"adss-ai-backdrop",onClick:k,"aria-hidden":"true"}),e.jsx("style",{children:`
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
      `})]})}class Tt extends Ve.Component{constructor(t){super(t);De(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),this.props.onReset&&this.props.onReset()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,o){console.error("ErrorBoundary caught an error:",t,o)}render(){return this.state.hasError?e.jsxs("div",{className:"p-8 my-6 max-w-xl mx-auto rounded-[12px] bg-[#0f1011] border border-[#eb5757]/30 text-[#ffffff] space-y-4 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center gap-2.5 text-[#eb5757] pb-2 border-b border-[#23252a]",children:[e.jsx(xt,{className:"w-5 h-5 flex-shrink-0"}),e.jsx("h3",{className:"text-[15px] font-[510] tracking-tight",children:"Section Encountered an Error"})]}),e.jsx("p",{className:"text-[12px] text-[#8a8f98] leading-relaxed",children:"An unexpected error occurred while rendering this section. You can retry rendering or return to the main dashboard."}),this.state.error&&e.jsx("pre",{className:"p-3 rounded-[6px] bg-[#161718] border border-[#23252a] text-[11px] font-berkeley-mono text-[#eb5757] overflow-x-auto whitespace-pre-wrap break-all",children:this.state.error.message||String(this.state.error)}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-2",children:[e.jsxs("button",{onClick:this.handleReset,className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#e4f222] text-[#08090a] text-[12px] font-[510] hover:bg-[#d8e61e] transition-colors cursor-pointer",children:[e.jsx(pt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Retry View"})]}),e.jsxs("button",{onClick:()=>{this.handleReset(),this.props.onNavigate?this.props.onNavigate("dashboard"):typeof window<"u"&&window.location.reload()},className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#161718] border border-[#23252a] text-[#d0d6e0] text-[12px] hover:bg-[#23252a] transition-colors cursor-pointer",children:[e.jsx(mt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Back to Dashboard"})]})]})]}):this.props.children}}function Mt({page:s,setPage:n,visibleSections:t=[],session:o={},pendingMsgCount:d=0,theme:i="dark",toggleTheme:r,isRealStaff:l=!1,viewAsMember:v=!1,handleToggleViewAsMember:f,handleLogout:C,connected:c=null,canAccessAi:b=!1}){const[y,g]=a.useState(!1);a.useEffect(()=>{const w=j=>{j.key==="Escape"&&y&&g(!1)};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[y]),a.useEffect(()=>(y?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[y]);const k=w=>{if(!w)return"U";const j=w.trim().split(/\s+/);return j.length===1?j[0].substring(0,2).toUpperCase():(j[0][0]+j[j.length-1][0]).toUpperCase()},p=o.role==="admin"||o.role==="editor",R=o.role==="member",N=!!o.stId;let E=[];p&&!v?E=[{id:"dashboard",label:"Dash",icon:Ye},{id:"my_info",label:"My Info",icon:Ne},{id:"notices",label:"Notices",icon:pe},{id:"messages",label:"Messages",icon:fe,badge:d}]:R||v?E=[{id:"attendance",label:"Dash",icon:qe},{id:N?"my_info":"events",label:N?"My Info":"Events",icon:N?Ne:oe},{id:"notices",label:"Notices",icon:pe},{id:"messages",label:"Messages",icon:fe,badge:d}]:E=[{id:"events",label:"Events",icon:oe},{id:"notices",label:"Notices",icon:pe},{id:"assistant",label:"Assistant",icon:Je}];const m=!new Set(E.map(w=>w.id)).has(s)||y,A=t.flatMap(w=>w.items).find(w=>w.id===s),$=A?A.label:s?String(s).replace("_"," ").toUpperCase():"DASHBOARD",F=w=>{g(!1),n(w)};return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"mobile-topbar",role:"banner",children:[e.jsxs("div",{className:"mobile-topbar-left cursor-pointer",onClick:()=>F("dashboard"),children:[e.jsx("img",{src:`/${i==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"mobile-topbar-logo",alt:"ADSS"}),e.jsxs("div",{className:"mobile-topbar-title-wrap",children:[e.jsx("div",{className:"mobile-topbar-brand",children:"ADSS RUHUNA"}),e.jsx("div",{className:"mobile-topbar-page",children:$})]})]}),e.jsx("div",{className:"mobile-topbar-right flex items-center",children:e.jsx("div",{className:"mobile-telemetry-dot",title:c===null?"Synchronizing":c?"DB Synchronized":"Offline",children:e.jsx("span",{className:`dot ${c===null?"pending":c?"ok":"err"}`})})})]}),e.jsx("nav",{className:"mobile-bottom-bar",role:"navigation","aria-label":"Mobile Navigation",children:e.jsxs("div",{className:"mobile-bottom-grid",children:[E.map(w=>{const j=w.icon,J=s===w.id&&!y;return e.jsxs("button",{className:`mobile-tab-btn ${J?"active":""}`,onClick:()=>F(w.id),"aria-label":w.label,children:[e.jsxs("div",{className:"mobile-tab-icon-box",children:[e.jsx(j,{className:"mobile-tab-icon"}),w.badge>0&&e.jsx("span",{className:"mobile-tab-badge",children:w.badge>99?"99+":w.badge})]}),e.jsx("span",{className:"mobile-tab-label",children:w.label})]},w.id)}),e.jsxs("button",{className:`mobile-tab-btn ${m?"active":""}`,onClick:()=>g(w=>!w),"aria-label":"More navigation options","aria-expanded":y,children:[e.jsx("div",{className:"mobile-tab-icon-box",children:e.jsx(ft,{className:"mobile-tab-icon"})}),e.jsx("span",{className:"mobile-tab-label",children:"More"})]})]})}),e.jsx("div",{className:`mobile-drawer-backdrop ${y?"open":""}`,onClick:()=>g(!1),"aria-hidden":!y}),e.jsx("aside",{className:`mobile-drawer ${y?"open":""}`,"aria-label":"Additional Navigation","aria-hidden":!y,children:e.jsxs("div",{className:"mobile-drawer-inner",children:[e.jsxs("div",{className:"mobile-drawer-header",children:[e.jsxs("div",{className:"mobile-drawer-header-left",children:[e.jsx("div",{className:"mobile-drawer-title",children:"Navigation"}),e.jsx("div",{className:"mobile-drawer-subtitle",children:"ADSS Ruhuna Portal"})]}),e.jsx("button",{className:"mobile-drawer-close-btn",onClick:()=>g(!1),"aria-label":"Close menu",children:e.jsx(ae,{className:"w-5 h-5"})})]}),o.role!=="guest"&&e.jsxs("div",{className:"mobile-drawer-profile-card",children:[e.jsx("div",{className:"mobile-drawer-avatar",children:k(o.name||o.email)}),e.jsxs("div",{className:"mobile-drawer-user-info",children:[e.jsx("div",{className:"mobile-drawer-user-name",children:o.preferredName||o.name||"Member"}),e.jsxs("div",{className:"mobile-drawer-user-meta",children:[e.jsx("span",{className:"mobile-drawer-role-badge",children:o.role}),o.stId&&e.jsx("span",{className:"mobile-drawer-stid",children:o.stId})]})]})]}),e.jsx("div",{className:"mobile-drawer-nav-scroll",children:t.map(w=>e.jsxs("div",{className:"mobile-drawer-group",children:[e.jsx("div",{className:"mobile-drawer-group-title",children:w.title}),e.jsx("div",{className:"mobile-drawer-group-items",children:w.items.map(j=>{const J=j.icon,ee=s===j.id,te=j.id==="messages"&&d>0;return e.jsxs("button",{className:`mobile-drawer-item ${ee?"active":""}`,onClick:()=>{n(j.id),g(!1)},children:[e.jsxs("div",{className:"mobile-drawer-item-left",children:[e.jsx("span",{className:"mobile-drawer-item-icon",children:e.jsx(J,{className:"w-4 h-4"})}),e.jsx("span",{className:"mobile-drawer-item-label",children:j.label})]}),e.jsxs("div",{className:"mobile-drawer-item-right",children:[te&&e.jsx("span",{className:"mobile-drawer-badge",children:d>99?"99+":d}),e.jsx(me,{className:"w-3.5 h-3.5 opacity-40"})]})]},j.id)})})]},w.title))}),e.jsxs("div",{className:"mobile-drawer-footer",children:[e.jsxs("div",{className:"mobile-drawer-controls-grid",children:[l&&e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${v?"":"active-staff"}`,onClick:f,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[e.jsx(He,{className:"w-3.5 h-3.5 text-[#6366f1]"}),e.jsx("span",{children:v?"Member":"Staff"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:v?"OFF":"ON"})]}),e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${i==="dark"?"active-dark":""}`,onClick:r,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[i==="dark"?e.jsx(je,{className:"w-3.5 h-3.5 text-amber-400"}):e.jsx(ke,{className:"w-3.5 h-3.5 text-amber-500"}),e.jsx("span",{children:i==="dark"?"Dark":"Light"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:"MODE"})]})]}),e.jsxs("button",{type:"button",className:"mobile-drawer-logout-btn",onClick:()=>{g(!1),o.role!=="guest"?C():(window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")))},children:[e.jsxs("div",{className:"mobile-drawer-logout-left",children:[e.jsx(we,{className:"w-4 h-4 text-[#eb5757]"}),e.jsx("span",{children:o.role!=="guest"?"Logout":"Login"})]}),e.jsx(me,{className:"w-4 h-4 opacity-40"})]})]})]})})]})}const zt="bhanukadilshan2002@gmail.com";function Ft({isOpen:s,onClose:n,session:t,isDark:o=!0}){const[d,i]=a.useState(""),[r,l]=a.useState(!1),[v,f]=a.useState(null);if(!s)return null;const C=async c=>{if(c.preventDefault(),!d.trim()){f({type:"error",text:"Please enter a message before sending."});return}l(!0),f(null);const b=new FormData;b.append("access_key","a550f902-9114-4a93-be4f-44fd2145d58e"),b.append("subject","Society Management System - Issue Report"),b.append("name",(t==null?void 0:t.name)||"Guest User"),b.append("email",(t==null?void 0:t.email)||"no-reply@society.com");const y=`
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
${d.trim()}
`;b.append("message",y);try{const k=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:b})).json();k.success?(f({type:"success",text:"Your message has been sent successfully!"}),i("")):f({type:"error",text:k.message||"Failed to send the email. Please try again."})}catch{f({type:"error",text:"A network error occurred. Please check your connection."})}finally{l(!1)}};return e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:c=>{c.target===c.currentTarget&&n()},children:e.jsxs("div",{className:`w-full max-w-[620px] rounded-[10px] p-6 shadow-2xl relative text-left animate-in fade-in zoom-in-95 duration-150 border ${o?"bg-[#121316] border-[#23252a] text-[#e5e5e6]":"bg-white border-gray-200 text-gray-900"}`,role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[e.jsx("span",{className:`text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono ${o?"text-[#8a8f98]":"text-gray-500"}`,children:"CONTACT FOR ISSUES"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:`px-2.5 py-1 rounded-full text-[11px] font-berkeley-mono ${o?"bg-[#18191c] border border-[#26282d] text-[#a0a5ad]":"bg-gray-100 border border-gray-200 text-gray-600"}`,children:zt}),e.jsx("button",{type:"button",onClick:n,className:`transition-colors cursor-pointer p-1 rounded ${o?"text-[#8a8f98] hover:text-white hover:bg-[#23252a]/60":"text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`,title:"Close",children:e.jsx(ae,{className:"w-4 h-4"})})]})]}),e.jsxs("p",{className:`text-[13.5px] leading-relaxed mb-4 ${o?"text-[#9da3ad]":"text-gray-600"}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`font-bold hover:underline ${o?"text-white":"text-gray-900"}`,children:"Bhanuka Dilshan"}),". If you encounter any bugs, issues, or have feedback, please write a message below to send an email."]}),v&&e.jsxs("div",{className:`p-3 rounded-[6px] mb-4 text-[12.5px] flex items-center gap-2 ${v.type==="success"?"bg-[#27a644]/15 border border-[#27a644]/30 text-[#4ade80]":"bg-[#eb5757]/15 border border-[#eb5757]/30 text-[#f87171]"}`,children:[v.type==="success"?e.jsx(Se,{className:"w-4 h-4 flex-shrink-0"}):e.jsx(bt,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:v.text})]}),e.jsxs("form",{onSubmit:C,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:`block text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono mb-2 ${o?"text-[#8a8f98]":"text-gray-600"}`,children:"SHORT MESSAGE"}),e.jsx("textarea",{rows:4,placeholder:"Write the issue shortly...",value:d,onChange:c=>i(c.target.value),disabled:r,className:`w-full rounded-[6px] p-3 text-[13.5px] focus:outline-none resize-y transition-colors border ${o?"bg-[#0d0e10] border-[#23252a] text-white placeholder:text-[#525866] focus:border-[#4b5563]":"bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500"}`})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"submit",disabled:r,className:`font-[510] text-[13px] px-4 py-2 rounded-[6px] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm ${o?"bg-white hover:bg-[#e4e7eb] text-black":"bg-gray-900 hover:bg-black text-white"}`,children:r?"Sending...":"Send Email"})})]})]})})}function Bt({session:s,isDark:n,className:t=""}){const[o,d]=a.useState(!1),i=n!==void 0?n:typeof document<"u"?document.documentElement.classList.contains("dark"):!0;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`text-center text-[12px] font-berkeley-mono transition-colors ${i?"text-[#62666d]":"text-gray-500"} ${t}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`underline transition-colors ${i?"text-[#8a8f98] hover:text-white":"text-gray-600 hover:text-gray-900"}`,children:"Bhanuka Dilshan"})," • ",e.jsx("button",{type:"button",onClick:()=>d(!0),className:`transition-colors cursor-pointer inline-flex items-center ${i?"text-[#8a8f98] hover:text-[#e4f222]":"text-gray-600 hover:text-indigo-600 font-medium"}`,children:"Contact For Issues"})]}),e.jsx(Ft,{isOpen:o,onClose:()=>d(!1),session:s,isDark:i})]})}const Wt=a.lazy(()=>L(()=>import("./Login-gDgjyCuP.js"),__vite__mapDeps([0,1,2,3,4]))),Ut=a.lazy(()=>L(()=>import("./Register-BFE6txBQ.js"),__vite__mapDeps([5,1,6,7,2,3,4]))),Me=a.lazy(()=>L(()=>import("./Dashboard-DQbtxQ6g.js"),__vite__mapDeps([8,1,9,10,2,3,4]))),Vt=a.lazy(()=>L(()=>import("./Members-F9F7rlIA.js"),__vite__mapDeps([11,1,12,7,2,3,4]))),Ht=a.lazy(()=>L(()=>import("./Events-D35qfvXT.js"),__vite__mapDeps([13,1,6,12,14,15,10,2,3,4]))),Yt=a.lazy(()=>L(()=>import("./Attendance-Dedsg3yj.js"),__vite__mapDeps([16,1,17,2,18,10,3,4]))),qt=a.lazy(()=>L(()=>import("./Committee-DDsbRoAG.js"),__vite__mapDeps([19,1,12,17,2,10,3,4]))),Jt=a.lazy(()=>L(()=>import("./Setup-CpCHcoH8.js"),__vite__mapDeps([20,1]))),Gt=a.lazy(()=>L(()=>import("./Access-BCXJB9nf.js"),__vite__mapDeps([21,1,22,2,3,4]))),ze=a.lazy(()=>L(()=>import("./MyInfo-D_yhfxfe.js"),__vite__mapDeps([23,1,9,6,2,3,4]))),Kt=a.lazy(()=>L(()=>import("./Messages-49Mleob7.js"),__vite__mapDeps([24,1,2,3,4]))),Xt=a.lazy(()=>L(()=>import("./Tasks-5t87-5T4.js"),__vite__mapDeps([25,1,17,2,14,15,10,3,4]))),Qt=a.lazy(()=>L(()=>import("./Landing-QorpfkNU.js"),__vite__mapDeps([26,1,2,3,4]))),Zt=a.lazy(()=>L(()=>import("./PublicEvent-CC1mH-Ct.js"),__vite__mapDeps([27,1,3,4,2]))),ea=a.lazy(()=>L(()=>import("./Notices-Bz-SJniu.js"),__vite__mapDeps([28,1,12,29,10,2,4,3]))),ta=a.lazy(()=>L(()=>import("./PublicNotice-C-_fSjga.js"),__vite__mapDeps([30,1,29,2,3,4]))),aa=a.lazy(()=>L(()=>import("./ScanAttendance-BqeJhFOp.js"),__vite__mapDeps([31,1,2,3,4]))),sa=a.lazy(()=>L(()=>import("./Letters-BfWa1d4q.js"),__vite__mapDeps([32,1,9,10,2,3,4]))),Fe=a.lazy(()=>L(()=>import("./AssistantPage-B17Ovl1S.js"),__vite__mapDeps([33,1,2,3,4]))),Be=a.lazy(()=>L(()=>import("./PrivacyPolicy-D4fuzBcA.js"),__vite__mapDeps([34,1,2]))),We=a.lazy(()=>L(()=>import("./TermsOfService-CRgePtWg.js"),__vite__mapDeps([35,1,2]))),ra=a.lazy(()=>L(()=>import("./Documents-BeG9W7mD.js"),__vite__mapDeps([36,1,12,22,10,2,3,4])));function q(){return e.jsx("div",{style:{display:"flex",minHeight:"50vh",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("div",{style:{width:"32px",height:"32px",border:"2px solid rgba(129, 140, 248, 0.2)",borderTop:"2px solid #818cf8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})})}const Qe=[{title:"Workspace",items:[{id:"dashboard",label:"Dashboard",icon:Ye},{id:"notices",label:"Notices",icon:pe},{id:"my_info",label:"My Credentials",icon:Ne},{id:"messages",label:"Messages",icon:fe}]},{title:"Operations",items:[{id:"events",label:"Events",icon:oe},{id:"attendance",label:"Attendance",icon:qe},{id:"committee",label:"Committee (OC)",icon:_e},{id:"letters",label:"Letter Requests",icon:Ge},{id:"documents",label:"Documents",icon:ut}]},{title:"Directory & Intel",items:[{id:"members",label:"Members",icon:gt},{id:"assistant",label:"AI Assistant",icon:Je},{id:"access",label:"Access Control",icon:vt}]}],na=Qe.flatMap(s=>s.items),Ue=s=>s==="admin"||s==="editor",oa=(s,n,t)=>{if(!t)return[];const o=(s||"").trim().toUpperCase(),d=(n||"").trim().toLowerCase();if(Array.isArray(t))return t.some(r=>{const l=(r||"").trim();return o&&l.toUpperCase()===o||d&&l.toLowerCase()===d})?["Events","Budgets","Permissions","Guidance"]:[];if(typeof t=="object")for(const[i,r]of Object.entries(t)){const l=(i||"").trim();if(o&&l.toUpperCase()===o||d&&l.toLowerCase()===d)return Array.isArray(r)?r:[]}return[]},Ce="adss-profile-cache",ia=()=>{try{const s=localStorage.getItem(Ce);return s?JSON.parse(s):null}catch{return null}},ve=s=>{try{localStorage.setItem(Ce,JSON.stringify(s))}catch{}},ca=()=>{try{localStorage.removeItem(Ce)}catch{}},da=()=>{var s;try{const n=localStorage.getItem("adss-auth");return n&&((s=JSON.parse(n))==null?void 0:s.user)}catch{return!1}};function la(){const s=ia(),n=da(),t=!!(s&&n),[o,d]=a.useState(()=>localStorage.getItem("theme")||"dark"),[i,r]=a.useState(()=>t&&s.role==="member"?"attendance":"dashboard"),[l,v]=a.useState(null),[f,C]=a.useState(()=>window.innerWidth>768),[c,b]=a.useState(()=>t?s:{role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),[y,g]=a.useState(!t),[k,p]=a.useState(!0),[R,N]=a.useState(!0),[E,_]=a.useState([]),[m,u]=a.useState(!1),[A,$]=a.useState(0),[F,w]=a.useState(window.location.pathname),[j,J]=a.useState(window.location.hash);a.useEffect(()=>{const h=()=>{w(window.location.pathname),J(window.location.hash)};return window.addEventListener("popstate",h),window.addEventListener("hashchange",h),()=>{window.removeEventListener("popstate",h),window.removeEventListener("hashchange",h)}},[]);const ee=F.startsWith("/event")||j.startsWith("#/event")||j.startsWith("#event"),te=F.startsWith("/notice")||j.startsWith("#/notice")||j.startsWith("#notice"),ie=F.startsWith("/scan-attendance")||j.startsWith("#/scan-attendance")||j.startsWith("#scan-attendance"),ce=F.startsWith("/assistant")||j.startsWith("#/assistant")||j.startsWith("#assistant"),de=F.startsWith("/privacy")||j.startsWith("#/privacy")||j.startsWith("#privacy"),x=F.startsWith("/terms")||j.startsWith("#/terms")||j.startsWith("#terms"),O=F==="/login"||j==="#/login"||j==="#login",U=F==="/register"||j==="#/register"||j==="#register";a.useEffect(()=>{document.documentElement.classList.toggle("dark",o==="dark"),document.documentElement.setAttribute("data-theme",o),document.documentElement.style.background=o==="dark"?"#08090a":"#ffffff",localStorage.setItem("theme",o)},[o]),a.useEffect(()=>{P.from("members").select("count",{count:"exact",head:!0}).then(({error:T})=>v(!T));const h=()=>{P.from("system_settings").select("key, value").in("key",["registration_enabled","ai_feature_enabled","document_access_members"]).then(({data:T})=>{if(T){const S=T.find(W=>W.key==="registration_enabled"),M=T.find(W=>W.key==="ai_feature_enabled"),I=T.find(W=>W.key==="document_access_members");if(S&&p(S.value==="true"),M&&N(M.value==="true"),I)try{const W=JSON.parse(I.value);_(W||{})}catch{_({})}}})};h();const D=P.channel("app-system-settings-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},T=>{const S=T.new;if(!S||!S.key){h();return}if(S.key==="registration_enabled"&&p(S.value==="true"),S.key==="ai_feature_enabled"&&N(S.value==="true"),S.key==="document_access_members")try{const M=JSON.parse(S.value);_(M||{})}catch{_({})}}).subscribe();return()=>{P.removeChannel(D)}},[]),a.useEffect(()=>{if(!c.stId){$(0);return}const h=async()=>{const{data:T}=await P.from("messages").select("id",{count:"exact"}).eq("receiver_st_id",c.stId).eq("status","pending");$((T==null?void 0:T.length)??0)};h();const D=P.channel(`nav-pending-${c.stId}`).on("postgres_changes",{event:"*",schema:"public",table:"messages"},()=>h()).subscribe();return()=>P.removeChannel(D)},[c.stId]),a.useEffect(()=>{let h=!0;const D=async S=>{const M=S==null?void 0:S.user;if(!M){h&&(b({role:"guest",stId:"",name:"",email:"",userId:""}),u(!1),r("dashboard"),g(!1));return}const{data:I}=await P.from("profiles").select("id, email, full_name, preferred_name, role, st_id, status").eq("id",M.id).maybeSingle();if(h){let W=((I==null?void 0:I.st_id)||"").trim();const be=((I==null?void 0:I.email)||M.email||"").trim();if(!W&&be)try{const{data:K}=await P.from("members").select("st_id").ilike("email",be).maybeSingle();K!=null&&K.st_id&&(W=K.st_id.trim(),P.from("profiles").update({st_id:W}).eq("id",M.id).then(()=>{}))}catch{}const Ae=(I==null?void 0:I.role)||"member",ue=(I==null?void 0:I.status)||"approved",Ie={role:Ae,stId:W,name:(I==null?void 0:I.preferred_name)||(I==null?void 0:I.full_name)||M.email||"",fullName:(I==null?void 0:I.full_name)||"",preferredName:(I==null?void 0:I.preferred_name)||"",email:be,userId:M.id,status:ue};b(Ie),ve(Ie),u(!1),r(K=>ue==="pending"||ue==="pending_editor_review"?"dashboard":K==="about"?Ae==="member"?"attendance":"dashboard":K),g(!1);const Re=window.location.pathname,he=window.location.hash;(Re==="/login"||he==="#/login"||he==="#login"||Re==="/register"||he==="#/register"||he==="#register")&&(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")))}};P.auth.getSession().then(({data:S})=>D(S.session));const{data:T}=P.auth.onAuthStateChange((S,M)=>{g(!0),D(M)});return()=>{h=!1,T.subscription.unsubscribe()}},[]);const H={dashboard:Me,notices:ea,members:Vt,committee:qt,events:Ht,attendance:Yt,access:Gt,setup:Jt,my_info:ze,profile:ze,messages:Kt,tasks:Xt,letters:sa,assistant:Fe,privacy:Be,terms:We,documents:ra}[i]||Me,V=Ue(c.role),B=m&&V?"member":c.role,G=Ue(B),Y=G||R,le=h=>B==="guest"?h.id==="privacy"||h.id==="terms"||h.id==="assistant"&&Y:h.id==="access"?B==="admin":h.id==="letters"?G:h.id==="my_info"?!!c.stId:h.id==="members"?G:h.id==="assistant"?Y:h.id==="documents"?G?!0:oa(c.stId,c.email,E).length>0:G||h.id!=="dashboard";na.filter(le);const se=Qe.map(h=>({...h,items:h.items.filter(le)})).filter(h=>h.items.length>0),Q=async()=>{ca(),await P.auth.signOut(),b({role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),u(!1),r("dashboard")},Z=()=>d(h=>h==="dark"?"light":"dark"),Ee=()=>{u(h=>{const D=!h;return D?(i==="dashboard"||i==="members"||i==="access")&&r("attendance"):i==="attendance"&&r(c.role==="admin"?"dashboard":"members"),D})};if(ee)return e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(Zt,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(te)return e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(ta,{theme:o,onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(ie)return e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(aa,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(de)return e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(Be,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(x)return e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(We,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(ce)return Y?e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(Fe,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},role:B,session:c,theme:o})}):e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem",color:"var(--text)"},children:e.jsxs("div",{className:"card",style:{maxWidth:"440px",width:"100%",textAlign:"center",padding:"2.5rem 2rem",boxShadow:"var(--shadow-xl)"},children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"var(--amber)",marginBottom:"1rem"},children:"lock"}),e.jsx("h2",{style:{margin:"0 0 8px 0",fontSize:"20px"},children:"AI Assistant Disabled"}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"14px",margin:0,lineHeight:1.5},children:"The AI Assistant feature is currently disabled for members by an administrator."}),e.jsx("button",{className:"btn btn-primary",style:{marginTop:"1.5rem",width:"100%"},onClick:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},children:"Back to Home"})]})});if(O)return c.userId&&c.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(Wt,{theme:o,onNavigate:h=>{window.history.pushState({},"",h==="register"?"/register":"/"),window.dispatchEvent(new Event("popstate"))},onLoginSuccess:h=>{b(h),ve(h),u(!1),r(h.status==="pending"||h.status==="pending_editor_review"?"dashboard":h.role==="member"?"attendance":h.role==="admin"?"dashboard":"members"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(U)return c.userId&&c.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(Ut,{theme:o,regEnabled:k,onNavigate:h=>{window.history.pushState({},"",h==="login"?"/login":"/"),window.dispatchEvent(new Event("popstate"))},onRegisterSuccess:(h,D)=>{b(h),ve(h),u(!1),r(D?"dashboard":h.role==="member"?"attendance":h.role==="admin"?"dashboard":"members"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})});if(c.userId&&(c.status==="pending"||c.status==="pending_editor_review")){const h=c.status==="pending_editor_review";return e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem"},children:e.jsxs("div",{className:"card",style:{maxWidth:"500px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"2rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"3rem",color:"var(--amber)",marginBottom:"1rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px"},children:h?"rate_review":"hourglass_top"})}),e.jsx("h1",{className:"page-title",children:h?"Registration Under Editorial Review":"Registration Pending"}),e.jsx("p",{className:"page-subtitle",children:h?"Your application and placement skills assessment have been submitted.":"Your account is currently under review by an administrator or editor"})]}),e.jsxs("div",{className:"alert alert-info",style:{textAlign:"left",marginBottom:"2.5rem",padding:"1.25rem",borderRadius:"12px",background:"rgba(0, 122, 255, 0.08)",border:"1px solid rgba(0, 122, 255, 0.15)"},children:[e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:[e.jsx("strong",{children:"Name:"})," ",c.name]}),e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:[e.jsx("strong",{children:"Student ID:"})," ",c.stId]}),e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:[e.jsx("strong",{children:"Email:"})," ",c.email]}),e.jsxs("p",{style:{margin:0,fontSize:"14px"},children:[e.jsx("strong",{children:"Review Status:"})," ",e.jsx("span",{className:"badge badge-purple",style:{verticalAlign:"middle"},children:h?"PENDING EDITORIAL REVIEW":c.role.toUpperCase()})]})]}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginBottom:"2rem",lineHeight:"1.6"},children:h?"Registration submitted for editorial review. Your functional team will be assigned by the executive committee based on your skills assessment.":"Once approved, you will be granted access to the society dashboard. Thank you for your patience!"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[e.jsx("button",{className:"btn btn-primary",type:"button",onClick:async()=>{var T;g(!0);const{data:D}=await P.auth.getSession();if((T=D==null?void 0:D.session)!=null&&T.user){const{data:S}=await P.from("profiles").select("status, role, st_id, full_name, email").eq("id",D.session.user.id).maybeSingle();S&&(b(M=>({...M,status:S.status||"approved",role:S.role||"member",stId:S.st_id||"",name:S.full_name||M.name,email:S.email||M.email})),u(!1),S.status!=="pending"&&S.status!=="pending_editor_review"&&r(S.role==="member"?"attendance":S.role==="admin"?"dashboard":"members"))}g(!1)},children:"Refresh Status"}),e.jsx("button",{className:"btn btn-ghost",type:"button",onClick:Q,children:"Logout"})]})]})})}return c.userId&&c.status==="rejected"?e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem"},children:e.jsxs("div",{className:"card",style:{maxWidth:"500px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"2rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"3rem",color:"var(--red)",marginBottom:"1rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px"},children:"cancel"})}),e.jsx("h1",{className:"page-title",children:"Registration Rejected"}),e.jsx("p",{className:"page-subtitle",children:"Your registration request has been rejected by the administrator or editor"})]}),e.jsx("div",{className:"alert alert-error",style:{textAlign:"center",marginBottom:"2.5rem",padding:"1.25rem",borderRadius:"12px"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:"700"},children:"Your registration has been rejected."})}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginBottom:"2rem",lineHeight:"1.6"},children:"Please contact the society administrators if you believe this was in error or if you need to submit correct information."}),e.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:e.jsx("button",{className:"btn btn-ghost",type:"button",onClick:Q,children:"Logout"})})]})}):y&&!c.userId?e.jsxs("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",flexDirection:"column",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"32px",height:"32px",border:"3px solid var(--border)",borderTop:"3px solid var(--accent)",borderRadius:"50%",animation:"spin 0.6s linear infinite",margin:"0 auto 12px"}}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),e.jsx("div",{style:{position:"fixed",bottom:"24px",left:0,right:0},children:e.jsx(Bt,{session:c})})]}):c.role==="guest"?e.jsxs(a.Suspense,{fallback:e.jsx(q,{}),children:[e.jsx(Qt,{theme:o,onThemeToggle:Z,regEnabled:k,aiEnabled:Y,onLoginClick:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},onRegisterClick:()=>{window.history.pushState({},"","/register"),window.dispatchEvent(new Event("popstate"))}}),Y&&e.jsx(Te,{role:"guest",session:c,theme:o,onNavigate:h=>{h==="assistant"?(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate"))):r(h)},currentPage:"landing"})]}):e.jsxs("div",{className:"app-shell",children:[e.jsx(Mt,{page:i,setPage:r,visibleSections:se,session:c,pendingMsgCount:A,theme:o,toggleTheme:Z,isRealStaff:V,viewAsMember:m,handleToggleViewAsMember:Ee,handleLogout:Q,connected:l,canAccessAi:Y}),e.jsxs("aside",{className:`sidebar ${f?"open":"collapsed"}`,children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[e.jsx("img",{src:`/${o==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"logo-img",alt:"ADSS Logo"}),f&&e.jsx("div",{className:"logo-text min-w-0",children:e.jsx("span",{className:"logo-title",children:"ADSS RUHUNA"})})]}),e.jsx("button",{className:"sidebar-toggle",onClick:()=>C(!f),"aria-label":"Toggle navigation menu",children:f?e.jsx(yt,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"}):e.jsx(me,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"})})]}),e.jsxs("div",{className:"connection-badge",children:[e.jsx("span",{className:`dot ${l===null?"pending":l?"ok":"err"}`}),f&&e.jsx("span",{className:"text-[10px] font-berkeley-mono uppercase tracking-wider text-[#8a8f98]",children:l===null?"SYNCHRONIZING...":l?"DB SYNCHRONIZED":"OFFLINE"})]}),e.jsx("nav",{className:"sidebar-nav",children:se.map(h=>e.jsxs("div",{className:"sidebar-group",children:[f&&e.jsx("div",{className:"sidebar-group-title",children:h.title}),e.jsx("div",{className:"sidebar-group-items",children:h.items.map(D=>{const T=D.icon,S=i===D.id;return e.jsxs("button",{className:`nav-item ${S?"active":""}`,onClick:()=>{r(D.id),window.innerWidth<=768&&C(!1)},title:f?void 0:D.label,children:[e.jsx("span",{className:"nav-icon",children:e.jsx(T,{className:"w-4 h-4"})}),f&&e.jsx("span",{className:"nav-label",children:D.label}),D.id==="messages"&&A>0&&e.jsx("span",{className:"nav-badge-pill",children:A>99?"99+":A})]},D.id)})})]},h.title))}),f?e.jsxs("div",{className:"sidebar-footer",children:[e.jsxs("div",{className:`sidebar-grid-row ${V?"two-cols":"one-col"}`,children:[V&&e.jsxs("div",{className:`sidebar-compact-card ${m?"":"active-staff"}`,onClick:Ee,title:m?"Switch to Staff View":"Switch to Member View",children:[e.jsxs("div",{className:"sidebar-compact-header",children:[e.jsx(He,{className:"w-3.5 h-3.5 icon text-[#6366f1]"}),e.jsx("span",{className:"sidebar-compact-title",children:m?"Member":"Staff"})]}),e.jsx("div",{className:"sidebar-compact-badge",children:m?"OFF":"ON"})]}),e.jsxs("div",{className:`sidebar-compact-card ${o==="dark"?"active-dark":""}`,onClick:Z,title:`Switch to ${o==="dark"?"light":"dark"} mode`,children:[e.jsxs("div",{className:"sidebar-compact-header",children:[o==="dark"?e.jsx(je,{className:"w-3.5 h-3.5 icon text-amber-400"}):e.jsx(ke,{className:"w-3.5 h-3.5 icon text-amber-500"}),e.jsx("span",{className:"sidebar-compact-title",children:o==="dark"?"Dark":"Light"})]}),e.jsx("div",{className:`sidebar-toggle-switch mini ${o==="dark"?"active":""}`,children:e.jsx("div",{className:"sidebar-toggle-thumb"})})]})]}),e.jsx("div",{className:"sidebar-divider"}),e.jsxs("div",{className:"sidebar-pref-card logout-card",onClick:c.role!=="guest"?Q:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")),window.innerWidth<=768&&C(!1)},children:[e.jsxs("div",{className:"sidebar-pref-left",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-[#eb5757]"}),e.jsx("span",{className:"sidebar-logout-title",children:c.role!=="guest"?"Logout":"Login"})]}),e.jsx(me,{className:"w-3.5 h-3.5 text-[#62666d]"})]})]}):e.jsxs("div",{className:"p-2 border-t border-[#23252a] flex flex-col items-center gap-2",children:[e.jsx("button",{onClick:Z,className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#8a8f98] hover:text-white hover:bg-[#161718] transition-colors",title:`Switch to ${o==="dark"?"light":"dark"} mode`,children:o==="dark"?e.jsx(je,{className:"w-4 h-4 text-amber-400"}):e.jsx(ke,{className:"w-4 h-4 text-amber-500"})}),e.jsx("button",{onClick:c.role!=="guest"?Q:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#eb5757] hover:bg-[#eb5757]/10 transition-colors",title:c.role!=="guest"?"Logout":"Login",children:e.jsx(we,{className:"w-4 h-4"})})]})]}),e.jsx("main",{className:"main-content",children:e.jsx("div",{className:"page-wrapper",children:e.jsx(Tt,{onNavigate:r,children:e.jsx(a.Suspense,{fallback:e.jsx(q,{}),children:e.jsx(H,{onNavigate:r,isAdmin:G,role:B,session:c,theme:o,docAccessMembers:E,setDocAccessMembers:_})})},i)})}),Y&&i!=="assistant"&&e.jsx(Te,{role:B,session:c,onNavigate:r,currentPage:i,theme:o})]})}function ha({phone:s}){const[n,t]=a.useState(!1);if(!s)return e.jsx("span",{className:"text-muted",children:"Not provided"});const o=i=>{let r=i.replace(/\D/g,"");return r.startsWith("0")&&r.length===10&&(r="94"+r.substring(1)),`https://wa.me/${r}`},d=i=>`tel:${i.replace(/[^\d+]/g,"")}`;return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"contact-number-link",onClick:()=>t(!0),children:s}),n&&e.jsx("div",{className:"contact-choice-overlay",onClick:i=>i.target===i.currentTarget&&t(!1),children:e.jsxs("div",{className:"contact-choice-card",children:[e.jsxs("div",{className:"contact-choice-header",children:[e.jsx("h3",{className:"contact-choice-title",children:"Contact Options"}),e.jsx("button",{className:"contact-choice-close",onClick:()=>t(!1),children:"×"})]}),e.jsxs("div",{className:"contact-choice-body",children:[e.jsxs("a",{href:d(s),className:"contact-choice-btn call",onClick:()=>t(!1),children:[e.jsx("span",{children:"📞"}),e.jsx("span",{children:"Call Phone"})]}),e.jsxs("a",{href:o(s),target:"_blank",rel:"noopener noreferrer",className:"contact-choice-btn whatsapp",onClick:()=>t(!1),children:[e.jsx("span",{children:"💬"}),e.jsx("span",{children:"WhatsApp Message"})]})]})]})})]})}function xa({stId:s,onClose:n}){var A,$,F,w,j,J,ee,te,ie,ce,de;const[t,o]=a.useState(null),[d,i]=a.useState(!0),[r,l]=a.useState("overview"),[v,f]=a.useState(null),[C,c]=a.useState(!1),b=(x,O)=>{x&&navigator.clipboard.writeText(x).then(()=>{f(O),setTimeout(()=>f(null),1800)})},y=()=>{var z,H,V;if(!t)return;const x=((z=t.letters)==null?void 0:z.filter(B=>B.status==="done"||B.status==="completed").length)||0,O=((H=t.letters)==null?void 0:H.length)||0,U=`STUDENT DOSSIER: ${t.preferred_name||t.name}
ID: ${t.st_id}
Full Name: ${t.name||"—"}
Calling Name: ${t.preferred_name||"—"}
Academic Level: Year ${t.level||"—"}
Society Position: ${t.st_position||"General Member"}
Function: ${t.member_function||"Unassigned"}
Email: ${t.email||"—"}
Phone: ${t.mobile_number||"—"}
Attendance Rate: ${p}% (${k}/${g} events)
OC Positions: ${((V=t.oc)==null?void 0:V.length)||0}
Letter Requests: ${O} (${x} Issued)
LinkedIn: ${t.linkedin_url||"None"}`;navigator.clipboard.writeText(U).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})};if(a.useEffect(()=>{if(!s)return;let x=!0;const O=z=>{z.key==="Escape"&&(n==null||n())};return window.addEventListener("keydown",O),(async()=>{i(!0);try{const z=typeof s=="string"?s.trim():String(s),{data:H,error:V}=await P.from("members").select("*").eq("st_id",z).maybeSingle();if(V)throw V;if(!H){alert(`Student profile not found for ID: ${z}`),n==null||n();return}const B=H.st_id||z,{data:G,error:Y}=await P.from("oc").select("oc_position, apply_status, events(name, date), functions(function_name)").eq("st_id",B);if(Y)throw Y;const{data:le,error:se}=await P.from("attendance").select("attend, events(name, date)").eq("st_id",B);if(se)throw se;const{data:Q,error:Z}=await P.from("letter_requests").select("id, st_id, name_on_letter, selected_events, additional_details, status, created_at").eq("st_id",B).order("created_at",{ascending:!1});Z&&console.warn("Could not fetch letter requests:",Z),x&&o({...H,oc:G||[],attendance:le||[],letters:Q||[]})}catch(z){x&&(alert("Error loading profile: "+z.message),n==null||n())}finally{x&&i(!1)}})(),()=>{x=!1,window.removeEventListener("keydown",O)}},[s,n]),!s)return null;const g=((A=t==null?void 0:t.attendance)==null?void 0:A.length)||0,k=(($=t==null?void 0:t.attendance)==null?void 0:$.filter(x=>x.attend==="YES").length)||0,p=g>0?Math.round(k/g*100):0,R=((F=t==null?void 0:t.oc)==null?void 0:F.filter(x=>x.apply_status==="Accept").length)||0,N=((w=t==null?void 0:t.letters)==null?void 0:w.filter(x=>x.status==="done"||x.status==="completed").length)||0,E=((t==null?void 0:t.mobile_number)||"").replace(/\D/g,""),_=E?`https://wa.me/${E.startsWith("0")?"94"+E.substring(1):E}`:null,m=t!=null&&t.linkedin_url?t.linkedin_url.trim().toLowerCase().startsWith("http")?t.linkedin_url.trim():`https://${t.linkedin_url.trim()}`:null,u=x=>{if(!x)return"S";const O=x.trim().split(/\s+/);return O.length===1?O[0].substring(0,2).toUpperCase():(O[0][0]+O[O.length-1][0]).toUpperCase()};return e.jsx("div",{className:"fixed inset-0 z-[120] bg-black/40 dark:bg-[#08090a]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150",onClick:x=>x.target===x.currentTarget&&(n==null?void 0:n()),role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"bg-[#ffffff] dark:bg-[#0f1011] border border-[#e4e4e7] dark:border-[#23252a] rounded-[12px] shadow-[0_24px_48px_rgba(0,0,0,0.25),inset_0_0_0_1px_#e4e4e7] dark:shadow-[0_24px_48px_rgba(0,0,0,0.8),inset_0_0_0_1px_#23252a] w-full max-w-[680px] max-h-[92vh] flex flex-col overflow-hidden text-[#3f3f46] dark:text-[#d0d6e0] my-auto",children:[e.jsxs("div",{className:"px-5 py-3.5 border-b border-[#e4e4e7] dark:border-[#23252a] bg-[#f7f8f8]/50 dark:bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] tracking-wider text-[#62666d] dark:text-[#8a8f98] uppercase bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-2 py-0.5 rounded-[4px] font-[510]",children:"STUDENT DOSSIER"}),t&&e.jsx("span",{className:"font-berkeley-mono text-[11px] text-[#8a8f98] dark:text-[#62666d] truncate",children:t.st_id})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[t&&e.jsx("button",{type:"button",onClick:y,className:"h-7 px-2.5 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] hover:border-[#d4d4d8] dark:hover:border-[#383b3f] transition-colors font-berkeley-mono text-[11px] flex items-center gap-1.5",title:"Copy dossier summary to clipboard",children:C?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(jt,{className:"w-3 h-3"}),e.jsx("span",{children:"Share"})]})}),e.jsx("button",{type:"button",onClick:n,className:"w-7 h-7 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] hover:border-[#d4d4d8] dark:hover:border-[#383b3f] transition-colors flex items-center justify-center text-[13px]",title:"Close (ESC)",children:e.jsx(ae,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"overflow-y-auto p-5 space-y-5 flex-1 custom-scrollbar",children:d||!t?e.jsxs("div",{className:"py-16 text-center flex flex-col items-center justify-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-[#e4f222] border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98]",children:"Retrieving student dossier telemetry..."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-[#f4f5f6]/40 dark:bg-[#161718]/40 border border-[#e4e4e7] dark:border-[#23252a] rounded-[10px] p-4",children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[t.profile_image_url?e.jsx("img",{src:t.profile_image_url,alt:t.preferred_name||t.name,className:"w-20 h-20 rounded-[10px] object-cover border border-[#e4e4e7] dark:border-[#23252a] shadow-sm bg-[#f4f5f6] dark:bg-[#161718]",onError:x=>{x.target.onerror=null,x.target.src="https://api.dicebear.com/7.x/initials/svg?seed="+encodeURIComponent(t.preferred_name||t.name)}}):e.jsx("div",{className:"w-20 h-20 rounded-[10px] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] flex items-center justify-center font-berkeley-mono text-[24px] font-[510] text-[#3f3f46] dark:text-[#d0d6e0]",children:u(t.preferred_name||t.name)}),e.jsx("span",{className:`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#0f1011] ${t.status==="active"||t.status==="approved"||!t.status?"bg-[#27a644]":"bg-[#f59e0b]"}`,title:t.status||"Active"})]}),e.jsxs("div",{className:"flex-1 min-w-0 space-y-1.5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-baseline gap-2 flex-wrap",children:[e.jsx("h1",{className:"text-[20px] sm:text-[22px] font-[510] text-[#0a0a0b] dark:text-[#ffffff] tracking-[-0.022em] leading-tight",children:t.preferred_name||t.name}),t.preferred_name&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#62666d] dark:text-[#8a8f98] bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-1.5 py-0.5 rounded-[3px]",children:"Calling Name"})]}),t.preferred_name&&t.name&&e.jsxs("div",{className:"text-[12.5px] text-[#62666d] dark:text-[#8a8f98] mt-0.5 font-[400] truncate",children:["Full Name: ",e.jsx("span",{className:"text-[#3f3f46] dark:text-[#d0d6e0] font-[510]",children:t.name})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap pt-0.5",children:[e.jsxs("button",{type:"button",onClick:()=>b(t.st_id,"st_id"),className:"font-berkeley-mono text-[11px] text-[#3f3f46] dark:text-[#d0d6e0] bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] px-2 py-0.5 rounded-[4px] inline-flex items-center gap-1.5 transition-colors group/copy",title:"Click to copy Student ID",children:[e.jsx("span",{children:t.st_id}),v==="st_id"?e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(re,{className:"w-3 h-3 text-[#8a8f98] dark:text-[#62666d] group-hover/copy:text-[#0a0a0b] dark:group-hover/copy:text-white transition-colors"})]}),t.level?e.jsx("span",{className:`font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] border uppercase ${t.level>4?"bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border-[#e4e4e7] dark:border-[#23252a]":"bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border-[#6366f1]/30"}`,children:t.level>4?"ALUMNI":`YEAR ${t.level}`}):null,t.st_position&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#e4f222]/10 text-[#5f6b00] dark:text-[#e4f222] border border-[#e4f222]/30",children:t.st_position}),t.member_function&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#f4f5f6] dark:bg-[#161718] text-[#3f3f46] dark:text-[#d0d6e0] border border-[#e4e4e7] dark:border-[#23252a]",children:t.member_function})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-berkeley-mono text-[11px]",children:[e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Attendance Rate"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsxs("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:[p,"%"]}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[k,"/",g]})]}),e.jsx("div",{className:"w-full bg-[#e4e4e7] dark:bg-[#08090a] h-1 rounded-full overflow-hidden",children:e.jsx("div",{className:"bg-[#27a644] h-full rounded-full transition-all duration-300",style:{width:`${p}%`}})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"OC Engagements"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:((j=t.oc)==null?void 0:j.length)||0}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[R," Accepted"]})]}),e.jsx("div",{className:"text-[10px] text-[#62666d] dark:text-[#8a8f98] truncate",children:((J=t.oc)==null?void 0:J.length)>0?"Active committee":"No assignments"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Letter Requests"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:((ee=t.letters)==null?void 0:ee.length)||0}),e.jsxs("span",{className:"text-[#62666d] dark:text-[#8a8f98] text-[10px]",children:[N," Issued"]})]}),e.jsx("div",{className:"text-[10px] text-[#62666d] dark:text-[#8a8f98] truncate",children:((te=t.letters)==null?void 0:te.length)>0?"Dossier logged":"No requests"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] text-[10px] uppercase block",children:"Membership"}),e.jsx("div",{className:"flex items-baseline justify-between",children:e.jsx("span",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff] uppercase truncate",children:t.role||"Member"})}),e.jsx("div",{className:"text-[10px] text-[#27a644] truncate",children:"✓ Verified Profile"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap bg-[#f4f5f6]/40 dark:bg-[#161718]/40 border border-[#e4e4e7] dark:border-[#23252a] p-2 rounded-[8px]",children:[t.email?e.jsxs("div",{className:"flex items-center gap-1 bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[6px] px-2.5 py-1",children:[e.jsx(fe,{className:"w-3.5 h-3.5 text-[#62666d] dark:text-[#8a8f98]"}),e.jsx("a",{href:`mailto:${t.email}`,className:"text-[11.5px] text-[#3f3f46] dark:text-[#d0d6e0] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] transition-colors truncate max-w-[170px]",title:`Send email to ${t.email}`,children:t.email}),e.jsx("button",{type:"button",onClick:()=>b(t.email,"email"),className:"p-1 text-[#8a8f98] dark:text-[#62666d] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] rounded transition-colors ml-1",title:"Copy Email",children:v==="email"?e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(re,{className:"w-3 h-3"})})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#8a8f98] dark:text-[#62666d] px-2",children:"No email provided"}),t.mobile_number?e.jsxs("div",{className:"flex items-center gap-1 bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[6px] px-2.5 py-1 font-berkeley-mono text-[11px]",children:[e.jsx(kt,{className:"w-3.5 h-3.5 text-[#62666d] dark:text-[#8a8f98]"}),e.jsx(ha,{phone:t.mobile_number}),_&&e.jsxs("a",{href:_,target:"_blank",rel:"noreferrer",className:"ml-1 text-[10px] text-[#27a644] hover:underline flex items-center gap-0.5",title:"Chat on WhatsApp",children:[e.jsx(wt,{className:"w-3 h-3"}),e.jsx("span",{children:"WA"})]})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#8a8f98] dark:text-[#62666d] px-2",children:"No phone provided"}),m&&e.jsxs("a",{href:m,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] text-[#4f46e5] dark:text-[#818cf8] px-2.5 py-1 rounded-[6px] font-berkeley-mono text-[11px] transition-colors ml-auto",title:"Open LinkedIn in new tab",children:[e.jsx("span",{children:"LinkedIn Profile"}),e.jsx(Ke,{className:"w-3 h-3"})]})]}),e.jsxs("div",{className:"border-b border-[#e4e4e7] dark:border-[#23252a] flex items-center gap-1 font-berkeley-mono text-[11.5px] overflow-x-auto",children:[e.jsxs("button",{type:"button",onClick:()=>l("overview"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${r==="overview"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(Ge,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Dossier Overview"})]}),e.jsxs("button",{type:"button",onClick:()=>l("attendance"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${r==="attendance"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(oe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Attendance Record"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((ie=t.attendance)==null?void 0:ie.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>l("oc"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${r==="oc"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(_e,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Committee (OC)"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((ce=t.oc)==null?void 0:ce.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>l("letters"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${r==="letters"?"border-[#e4f222] text-[#0a0a0b] dark:text-[#ffffff]":"border-transparent text-[#62666d] dark:text-[#8a8f98] hover:text-[#3f3f46] dark:hover:text-[#d0d6e0]"}`,children:[e.jsx(Pe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Letters"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] text-[#62666d] dark:text-[#8a8f98]",children:((de=t.letters)==null?void 0:de.length)||0})]})]}),e.jsxs("div",{children:[r==="overview"&&e.jsx("div",{className:"space-y-3 font-sans",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Full Legal Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.name||"—"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Preferred Calling Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#5f6b00] dark:text-[#e4f222]",children:t.preferred_name||e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d] italic",children:"Not provided"})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Functional Division"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.member_function||e.jsx("span",{className:"text-[#8a8f98] dark:text-[#62666d]",children:"General Pool"})})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Society Position / Rank"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.st_position||"Active Society Member"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Academic Standing"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:t.level?`Undergraduate Year ${t.level}`:"Undergraduate"})]}),e.jsxs("div",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#8a8f98] dark:text-[#62666d] uppercase",children:"Profile Registration Date"}),e.jsx("div",{className:"font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98]",children:t.created_at?new Date(t.created_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Legacy Database Record"})]})]})}),r==="attendance"&&e.jsx("div",{className:"space-y-3",children:t.attendance.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(oe,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No event attendance records on file for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Name"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Date"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Attendance"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.attendance.map((x,O)=>{var U,z;return e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff] block",children:((U=x.events)==null?void 0:U.name)||"Official Society Session"})}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#62666d] dark:text-[#8a8f98]",children:((z=x.events)==null?void 0:z.date)||"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${x.attend==="YES"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30"}`,children:x.attend==="YES"?e.jsxs(e.Fragment,{children:[e.jsx(Se,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Attended"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Le,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Absent"})]})})})]},O)})})]})})})}),r==="oc"&&e.jsx("div",{className:"space-y-3",children:t.oc.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(_e,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No organizing committee appointments logged for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event & Team"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Assigned Role(s)"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Selection Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.oc.map((x,O)=>{var U,z;return e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff] block",children:((U=x.events)==null?void 0:U.name)||"Official Event"}),e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#4f46e5] dark:text-[#818cf8]",children:((z=x.functions)==null?void 0:z.function_name)||"General Committee"})]}),e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:x.oc_position?x.oc_position.split(",").map((H,V)=>e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border border-[#6366f1]/30",children:H.trim()},V)):e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border border-[#e4e4e7] dark:border-[#23252a]",children:"Committee Member"})})}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:x.apply_status==="Accept"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#27a644]/10 text-[#27a644] border border-[#27a644]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(X,{className:"w-2.5 h-2.5"})," Accepted"]}):x.apply_status==="Reject"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#eb5757]/10 text-[#eb5757] border border-[#eb5757]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(ae,{className:"w-2.5 h-2.5"})," Rejected"]}):x.apply_status==="Interview Scheduled"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#02b8cc]/10 text-[#02b8cc] border border-[#02b8cc]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(xe,{className:"w-2.5 h-2.5"})," Interview"]}):e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#f59e0b]/10 text-[#b45309] dark:text-[#f59e0b] border border-[#f59e0b]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(xe,{className:"w-2.5 h-2.5"})," Pending"]})})]},O)})})]})})})}),r==="letters"&&e.jsx("div",{className:"space-y-3",children:t.letters.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#62666d] dark:text-[#8a8f98] space-y-1",children:[e.jsx(Pe,{className:"w-5 h-5 mx-auto text-[#8a8f98] dark:text-[#62666d]"}),e.jsx("p",{children:"No letter requests or issued certificates found for this student."})]}):e.jsx("div",{className:"border border-[#e4e4e7] dark:border-[#23252a] rounded-[8px] overflow-hidden bg-[#f4f5f6]/30 dark:bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#f4f5f6] dark:bg-[#161718] border-b border-[#e4e4e7] dark:border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#62666d] dark:text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Document & Events"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Submitted"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#e4e4e7] dark:divide-[#23252a]",children:t.letters.map(x=>e.jsxs("tr",{className:"hover:bg-[#f4f5f6]/60 dark:hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx("span",{className:"font-[510] text-[#0a0a0b] dark:text-[#ffffff]",children:"Appreciation Letter"}),x.name_on_letter&&e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#f4f5f6] dark:bg-[#161718] text-[#62666d] dark:text-[#8a8f98] border border-[#e4e4e7] dark:border-[#23252a]",children:["Name: ",x.name_on_letter]})]}),x.selected_events&&Array.isArray(x.selected_events)&&x.selected_events.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:x.selected_events.map((O,U)=>e.jsx("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#6366f1]/10 text-[#4f46e5] dark:text-[#818cf8] border border-[#6366f1]/30",children:O},U))}),x.additional_details&&e.jsx("p",{className:"text-[11px] text-[#62666d] dark:text-[#8a8f98] mt-1 line-clamp-2",children:x.additional_details})]}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#62666d] dark:text-[#8a8f98] whitespace-nowrap align-top",children:x.created_at?new Date(x.created_at).toLocaleDateString():"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right whitespace-nowrap align-top",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${x.status==="done"||x.status==="completed"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":x.status==="inprogress"?"bg-[#818cf8]/10 text-[#4f46e5] dark:text-[#818cf8] border-[#818cf8]/30":x.status==="rejected"?"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30":"bg-[#f59e0b]/10 text-[#b45309] dark:text-[#f59e0b] border-[#f59e0b]/30"}`,children:x.status==="done"||x.status==="completed"?e.jsxs(e.Fragment,{children:[e.jsx(Se,{className:"w-2.5 h-2.5 text-[#27a644]"}),e.jsx("span",{children:"Issued"})]}):x.status==="inprogress"?e.jsxs(e.Fragment,{children:[e.jsx(xe,{className:"w-2.5 h-2.5 text-[#4f46e5] dark:text-[#818cf8]"}),e.jsx("span",{children:"In Progress"})]}):x.status==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx(Le,{className:"w-2.5 h-2.5 text-[#eb5757]"}),e.jsx("span",{children:"Rejected"})]}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{className:"w-2.5 h-2.5 text-[#b45309] dark:text-[#f59e0b]"}),e.jsx("span",{children:"Pending"})]})})})]},x.id))})]})})})})]})]})}),e.jsxs("div",{className:"px-5 py-3.5 border-t border-[#e4e4e7] dark:border-[#23252a] bg-[#f7f8f8]/50 dark:bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"font-berkeley-mono text-[11px] text-[#8a8f98] dark:text-[#62666d] hidden sm:block",children:["Press ",e.jsx("kbd",{className:"bg-[#f4f5f6] dark:bg-[#161718] border border-[#e4e4e7] dark:border-[#23252a] px-1 py-0.5 rounded text-[#62666d] dark:text-[#8a8f98]",children:"ESC"})," to exit"]}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsxs("button",{type:"button",onClick:y,className:"h-8 px-3.5 rounded-[6px] bg-[#f4f5f6] dark:bg-[#161718] hover:bg-[#e4e4e7] dark:hover:bg-[#23252a] border border-[#e4e4e7] dark:border-[#23252a] text-[#3f3f46] dark:text-[#d0d6e0] hover:text-[#0a0a0b] dark:hover:text-[#ffffff] font-berkeley-mono text-[11.5px] transition-colors flex items-center gap-1.5",children:[C?e.jsx(X,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(re,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:C?"Copied":"Copy Summary"})]}),e.jsx("button",{type:"button",onClick:n,className:"h-8 px-4 rounded-[6px] bg-[#e4f222] text-[#08090a] font-[510] text-[12.5px] hover:bg-[#d5e31f] transition-all flex items-center gap-1.5 shadow-sm active:scale-[0.98]",children:e.jsx("span",{children:"Close Dossier"})})]})]})]})})}const Ze=a.createContext({activeStudentId:null,openStudentProfile:()=>{},closeStudentProfile:()=>{}});function pa({children:s}){const[n,t]=a.useState(null),o=a.useCallback(i=>{i&&typeof i=="string"?t(i.trim()):i&&t(String(i))},[]),d=a.useCallback(()=>{t(null)},[]);return e.jsxs(Ze.Provider,{value:{activeStudentId:n,openStudentProfile:o,closeStudentProfile:d},children:[s,n&&e.jsx(xa,{stId:n,onClose:d})]})}function ma(){const s=a.useContext(Ze);return s||{activeStudentId:null,openStudentProfile:n=>{console.warn("StudentProfileProvider missing, cannot open:",n)},closeStudentProfile:()=>{}}}function ja({stId:s,name:n,subtext:t,showIcon:o=!0,showAvatar:d=!1,showId:i=!1,avatarUrl:r,className:l="",size:v="md",children:f}){const{openStudentProfile:C}=ma(),c=n||f||(s?`Student (${s})`:"Unknown Student");if(!s)return e.jsx("span",{className:`text-gray-600 dark:text-[#8a8f98] font-[400] ${l}`,children:c});const b=k=>{k.stopPropagation(),C(s)},y={sm:"text-[12px] gap-1",md:"text-[13px] gap-1.5",lg:"text-[15px] gap-2"},g=k=>{if(!k)return"S";const p=k.trim().split(/\s+/);return p.length===1?p[0].substring(0,2).toUpperCase():(p[0][0]+p[p.length-1][0]).toUpperCase()};return e.jsxs("button",{type:"button",onClick:b,title:`Inspect Student Dossier (${s})`,className:`inline-flex items-center text-left group/student transition-all duration-150 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-indigo-500/50 dark:focus:ring-[#e4f222]/50 ${y[v]||y.md} ${l}`,children:[d&&e.jsx("span",{className:"w-6 h-6 rounded-[4px] bg-gray-100 dark:bg-[#161718] border border-gray-200 dark:border-[#23252a] overflow-hidden flex items-center justify-center font-berkeley-mono text-[10px] text-gray-700 dark:text-[#ffffff] flex-shrink-0 group-hover/student:border-indigo-500/40 dark:group-hover/student:border-[#e4f222]/40 transition-colors",children:r?e.jsx("img",{src:r,alt:"",className:"w-full h-full object-cover"}):g(c)}),e.jsxs("span",{className:"flex flex-col min-w-0",children:[e.jsxs("span",{className:"flex items-center gap-1 leading-snug",children:[e.jsx("span",{className:"font-[510] text-gray-900 dark:text-[#ffffff] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] transition-colors truncate",children:c}),o&&e.jsx("span",{className:"inline-flex items-center text-gray-400 dark:text-[#62666d] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] group-hover/student:translate-x-0.5 transition-all flex-shrink-0","aria-hidden":"true",children:e.jsx(Ke,{className:"w-2.5 h-2.5 opacity-60 group-hover/student:opacity-100"})})]}),(t||i)&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-gray-500 dark:text-[#8a8f98] group-hover/student:text-gray-700 dark:group-hover/student:text-[#d0d6e0] transition-colors truncate",children:t||s})]})]})}const et=a.createContext(null),ye=[{id:"cycle-2024-2025",name:"2024/2025",startDate:"2024-01-01",endDate:"2025-12-31",isActive:!0,isVisible:!0,description:"ADSS Academic Cycle 2024/2025"},{id:"cycle-2023-2024",name:"2023/2024",startDate:"2023-01-01",endDate:"2023-12-31",isActive:!1,isVisible:!0,description:"ADSS Academic Cycle 2023/2024"}];function fa({children:s}){const[n,t]=a.useState(()=>{try{const p=localStorage.getItem("adss_cycles_cache");return p?JSON.parse(p):ye}catch{return ye}}),[o,d]=a.useState(()=>{try{return localStorage.getItem("adss_active_cycle_id")||"cycle-2024-2025"}catch{return"cycle-2024-2025"}}),[i,r]=a.useState(()=>{try{return localStorage.getItem("adss_selected_cycle_id")||"active"}catch{return"active"}}),[l,v]=a.useState(!0),f=a.useMemo(()=>n.find(p=>p.id===o||p.isActive)||n[0]||ye[0],[n,o]),C=a.useMemo(()=>i==="all"?null:i==="active"?f:n.find(p=>p.id===i)||f,[n,i,f]),c=a.useMemo(()=>n.filter(p=>p.isVisible!==!1||p.id===(f==null?void 0:f.id)),[n,f]),b=a.useCallback(async()=>{try{const{data:p,error:R}=await P.from("system_settings").select("key, value").in("key",["academic_cycles","active_cycle_id"]);if(!R&&p&&p.length>0){const N=p.find(u=>u.key==="academic_cycles"),E=p.find(u=>u.key==="active_cycle_id");let _=null;if(N&&N.value)try{const u=JSON.parse(N.value);Array.isArray(u)&&u.length>0&&(_=u)}catch(u){console.error("Failed to parse academic_cycles:",u)}let m=(E==null?void 0:E.value)||null;if(_){if(!m){const u=_.find(A=>A.isActive);m=u?u.id:_[0].id}t(_),d(m);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(_)),localStorage.setItem("adss_active_cycle_id",m)}catch{}}}}catch(p){console.warn("Could not load cycles from DB, using fallback:",p)}finally{v(!1)}},[]);a.useEffect(()=>{b();const p=P.channel("system-settings-cycles-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},R=>{var E;const N=(E=R.new)==null?void 0:E.key;(N==="academic_cycles"||N==="active_cycle_id")&&b()}).subscribe();return()=>{P.removeChannel(p)}},[b]);const y=a.useCallback(p=>{r(p);try{localStorage.setItem("adss_selected_cycle_id",p)}catch{}},[]),g=a.useCallback((p,R=C)=>{if(!R)return!0;if(!p)return!1;try{let N="";return typeof p=="string"?N=p.substring(0,10):p instanceof Date?N=p.toISOString().substring(0,10):N=String(p).substring(0,10),!(R.startDate&&N<R.startDate||R.endDate&&N>R.endDate)}catch{return!0}},[C]),k=a.useCallback(async(p,R)=>{var N,E;try{const _=R||((N=p.find($=>$.isActive))==null?void 0:N.id)||((E=p[0])==null?void 0:E.id),m=p.map($=>({...$,isActive:$.id===_})),[u,A]=await Promise.all([P.from("system_settings").upsert({key:"academic_cycles",value:JSON.stringify(m)},{onConflict:"key"}),P.from("system_settings").upsert({key:"active_cycle_id",value:_},{onConflict:"key"})]);if(u.error)throw u.error;if(A.error)throw A.error;t(m),d(_);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(m)),localStorage.setItem("adss_active_cycle_id",_)}catch{}return{success:!0}}catch(_){return console.error("Error saving cycles to system_settings:",_),{success:!1,error:_.message||"Failed to save cycles"}}},[]);return e.jsx(et.Provider,{value:{cycles:n,visibleCycles:c,activeCycle:f,activeCycleId:o,selectedCycleId:i,selectedCycle:C,setSelectedCycleId:y,isWithinCycle:g,saveCycles:k,reloadCycles:b,loading:l},children:s})}function ka(){const s=a.useContext(et);if(!s)throw new Error("useCycle must be used within a CycleProvider");return s}st.createRoot(document.getElementById("root")).render(e.jsx(Ve.StrictMode,{children:e.jsx(fa,{children:e.jsx(pa,{children:e.jsx(At,{children:e.jsx(la,{})})})})}));export{ne as A,$t as C,Bt as M,ha as P,ja as S,xa as a,ka as b,ma as c,oa as g,P as s,It as u};
