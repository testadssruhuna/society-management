const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-B0QSN16r.js","assets/vendor-react-DFHPY69B.js","assets/vendor-icons-BkvqhORk.js","assets/vendor-supabase-DqvqN50L.js","assets/vendor-6pgEYSA5.js","assets/Register-D0OpT9zJ.js","assets/imageOptimizer-B7dhkxfR.js","assets/Dashboard-YQ6qY7a1.js","assets/queryCache-9w56PyI2.js","assets/CycleSelector-B_vavi5B.js","assets/Members-b3U3wA5n.js","assets/Pagination-kQxqtPAr.js","assets/Events-zTwz93YA.js","assets/DatePicker-kEb5ri2t.js","assets/DatePicker-CPVejJYq.css","assets/Attendance-uyltQYHL.js","assets/EventSelect-BBO2Ur04.js","assets/vendor-scanner-CRRJkh5G.js","assets/Committee-Bo9d_VOS.js","assets/Setup-CpCHcoH8.js","assets/Access-PPK9Wain.js","assets/documentService-BqvqRVX3.js","assets/MyInfo-DPhDzKri.js","assets/Messages-CHDi5muv.js","assets/Tasks-uFwvBD3I.js","assets/Landing-D5v5Eu3d.js","assets/PublicEvent-ehhurpJo.js","assets/Notices-B8OXmCEs.js","assets/vendor-markdown-C_9llh6Y.js","assets/PublicNotice-DIuv9JGz.js","assets/ScanAttendance-DDigVnpr.js","assets/Letters-CJ-JNybQ.js","assets/AssistantPage-DeC7A6jn.js","assets/PrivacyPolicy-CGLH0743.js","assets/TermsOfService-0BlNr8gU.js","assets/Documents-CpArUvim.js"])))=>i.map(i=>d[i]);
var tt=Object.defineProperty;var at=(r,s,t)=>s in r?tt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var Re=(r,s,t)=>at(r,typeof s!="symbol"?s+"":s,t);import{r as a,j as e,R as Ve,c as st}from"./vendor-react-DFHPY69B.js";import{c as rt}from"./vendor-supabase-DqvqN50L.js";import{y as nt,j as X,x as re,ak as ot,M as it,D as ct,av as lt,aI as ae,aw as dt,a4 as ht,ay as pt,ag as xt,ah as mt,E as ft,n as me,ao as He,a9 as ye,at as je,a2 as we,Z as qe,aB as Ne,a5 as xe,a3 as fe,g as Ye,C as oe,as as Je,q as ke,p as ut,f as Se,N as Ge,Q as bt,aE as gt,aq as vt,m as yt,an as jt,ab as wt,a7 as Nt,z as Ke,d as Pe,t as Le,u as pe}from"./vendor-icons-BkvqhORk.js";import"./vendor-6pgEYSA5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const kt="modulepreload",St=function(r){return"/"+r},Oe={},O=function(s,t,o){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),d=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));l=Promise.allSettled(t.map(v=>{if(v=St(v),v in Oe)return;Oe[v]=!0;const f=v.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${_}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":kt,f||(c.as="script"),c.crossOrigin="",c.href=v,d&&c.setAttribute("nonce",d),document.head.appendChild(c),f)return new Promise((u,y)=>{c.addEventListener("load",u),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(n){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=n,window.dispatchEvent(d),!d.defaultPrevented)throw n}return l.then(n=>{for(const d of n||[])d.status==="rejected"&&i(d.reason);return s().catch(i)})},_t="https://zbhwelmxdgldbwbnsfhd.supabase.co",Ct="sb_publishable_xPa0SGJFvPb3bqtmcsRkSg_-MlmlDdR",R=rt(_t,Ct,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0,storageKey:"adss-auth",storage:window.localStorage}}),$e=10;async function Et(r,s=[],t="guest"){if(!r||!r.trim())return{success:!1,error:"Message cannot be empty."};const o=s.length>$e?s.slice(s.length-$e):s;try{const{data:l,error:i}=await R.functions.invoke("chat-assistant",{body:{userMessage:r.trim(),history:o,userRole:t}});return i?{success:!1,error:i.message||"Failed to communicate with AI Assistant service."}:l||{success:!1,error:"No response received from AI Assistant service."}}catch(l){return{success:!1,error:l.message||"Unexpected error connecting to AI Assistant."}}}const Xe=a.createContext(null),be="adss_ai_assistant_history_v1";function At({children:r,role:s="guest"}){const[t,o]=a.useState(()=>{try{const x=sessionStorage.getItem(be);return x?JSON.parse(x):[]}catch{return[]}}),[l,i]=a.useState(""),[n,d]=a.useState(!1),[v,f]=a.useState(!1);a.useEffect(()=>{try{sessionStorage.setItem(be,JSON.stringify(t))}catch{}},[t]);const _=a.useCallback(()=>{f(x=>!x)},[]),c=a.useCallback(()=>{f(!0)},[]),u=a.useCallback(()=>{f(!1)},[]),y=a.useCallback(()=>{o([]);try{sessionStorage.removeItem(be)}catch{}},[]),g=a.useCallback(async(x,D=s)=>{const k=x.trim();if(!k||n)return;const C={role:"user",text:k,id:`u-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(m=>[...m,C]),i(""),d(!0);const S=t.map(m=>({role:m.role==="user"?"user":"model",text:m.text}));try{const m=await Et(k,S,D),b={role:"assistant",text:m.success?m.text:`⚠️ ${m.error??"Something went wrong. Please try again."}`,id:`a-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(E=>[...E,b])}catch{o(b=>[...b,{role:"assistant",text:"⚠️ Unexpected error connecting to ADSS Intelligence. Please try again.",id:`err-${Date.now()}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}finally{d(!1)}},[n,t,s]),w={messages:t,input:l,setInput:i,loading:n,sendMessage:g,clearChat:y,isWidgetOpen:v,setIsWidgetOpen:f,toggleWidget:_,openWidget:c,closeWidget:u};return e.jsx(Xe.Provider,{value:w,children:r})}function It(){const r=a.useContext(Xe);if(!r)throw new Error("useAiChat must be used within an AiChatProvider");return r}function ne({size:r=20,className:s="",variant:t="brand",animate:o=!1,style:l={}}){const i=t==="monochrome"?"currentColor":"#e4f222",n=t==="monochrome"?"currentColor":"#8a8f98",d=t==="glow"?"drop-shadow(0 0 6px rgba(228, 242, 34, 0.4))":void 0;return e.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`adss-ai-icon ${o?"adss-ai-icon--pulse":""} ${s}`,style:{filter:d,flexShrink:0,...l},"aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"2.5",r:"1.25",fill:n,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"7.25",r:"1.25",fill:n,fillOpacity:"0.5"}),e.jsx("circle",{cx:"20.2",cy:"16.75",r:"1.25",fill:n,fillOpacity:"0.5"}),e.jsx("circle",{cx:"12",cy:"21.5",r:"1.25",fill:n,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"16.75",r:"1.25",fill:n,fillOpacity:"0.5"}),e.jsx("circle",{cx:"3.8",cy:"7.25",r:"1.25",fill:n,fillOpacity:"0.5"}),e.jsx("line",{x1:"12",y1:"3.75",x2:"12",y2:"7.5",stroke:n,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"12",y1:"16.5",x2:"12",y2:"20.25",stroke:n,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"4.8",y1:"8",x2:"8.5",y2:"10.5",stroke:n,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("line",{x1:"19.2",y1:"16",x2:"15.5",y2:"13.5",stroke:n,strokeWidth:"1",strokeOpacity:"0.3",strokeDasharray:"1.5 1.5"}),e.jsx("path",{d:"M12 4.5 C12 8.6 15.4 12 19.5 12 C15.4 12 12 15.4 12 19.5 C12 15.4 8.6 12 4.5 12 C8.6 12 12 8.6 12 4.5 Z",fill:i}),e.jsx("circle",{cx:"12",cy:"12",r:"1.75",fill:"#08090a"}),e.jsx("circle",{cx:"12",cy:"12",r:"0.75",fill:"#ffffff"})]})}const Dt=[{tag:"IMPORT",text:"How do I import members via CSV?"},{tag:"ATTENDANCE",text:"How do I generate a QR code for attendance?"},{tag:"ACCESS",text:"How do I invite an editor or manage permissions?"},{tag:"DOCS",text:"How do I upload and restrict society documents?"}],Rt=[{tag:"REGISTRATION",text:"How do I register as an active society member?"},{tag:"COMMITTEE",text:"How do I apply for the Organizing Committee (OC)?"},{tag:"LETTERS",text:"How do I request an official appreciation letter?"},{tag:"QR SCAN",text:"How do I check in for event attendance using QR?"}];function Pt({filename:r="event_attendance.csv",csvData:s}){const[t,o]=a.useState(!1),l=()=>{const i=new Blob([s],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(i),d=document.createElement("a");d.setAttribute("href",n),d.setAttribute("download",r),document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(n),o(!0),setTimeout(()=>o(!1),2500)};return e.jsx("div",{className:"chat-csv-wrapper",children:e.jsxs("button",{type:"button",onClick:l,className:"chat-csv-btn",title:"Export CSV data",children:[t?e.jsx(X,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(it,{className:"w-3.5 h-3.5 chat-csv-icon"}),e.jsx("span",{className:"font-berkeley-mono text-[12px] tracking-tight",children:t?"CSV EXPORTED":"DOWNLOAD ATTENDANCE CSV"}),e.jsx(ct,{className:"w-3 h-3 chat-csv-download-icon ml-auto"})]})})}function Lt({code:r}){const[s,t]=a.useState(!1),o=async()=>{try{await navigator.clipboard.writeText(r),t(!0),setTimeout(()=>t(!1),2e3)}catch{}};return e.jsxs("div",{className:"chat-codeblock",children:[e.jsxs("div",{className:"chat-codeblock-header",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-berkeley-mono chat-codeblock-label",children:[e.jsx(lt,{className:"w-3 h-3 chat-codeblock-term-icon"}),e.jsx("span",{children:"SNIPPET"})]}),e.jsxs("button",{type:"button",onClick:o,className:"chat-copy-code-btn",title:"Copy code",children:[s?e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(re,{className:"w-3 h-3"}),e.jsx("span",{className:"text-[10px] font-berkeley-mono",children:s?"COPIED":"COPY"})]})]}),e.jsx("pre",{className:"chat-codeblock-content",children:e.jsx("code",{children:r})})]})}function Ot(r){if(!r)return null;const s=/```(?:csv|text|json|sql|javascript|js)?\n([\s\S]*?)\n```/g,t=[];let o=0,l;for(;(l=s.exec(r))!==null;){const n=r.slice(o,l.index);n&&t.push({type:"text",content:n});const d=l[1].trim();l[0].startsWith("```csv")||d.includes(",")&&(d.toLowerCase().includes("st id")||d.toLowerCase().includes("email")||d.toLowerCase().includes("attended"))?t.push({type:"csv",content:d}):t.push({type:"code",content:d}),o=l.index+l[0].length}const i=r.slice(o);return i&&t.push({type:"text",content:i}),e.jsx(e.Fragment,{children:t.map((n,d)=>{if(n.type==="csv")return e.jsx(Pt,{csvData:n.content},`csv-${d}`);if(n.type==="code")return e.jsx(Lt,{code:n.content},`code-${d}`);const v=n.content.split(`
`),f=[];return v.forEach((_,c)=>{if(c>0){if(_.trim()===""){f.push(e.jsx("div",{className:"h-2"},`gap-${c}`));return}f.push(e.jsx("br",{},`br-${c}`))}const u=[],y=/\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|([^*`]+)/g;let g,w=0;for(;(g=y.exec(_))!==null;)g[1]!==void 0?u.push(e.jsx("strong",{className:"font-semibold chat-md-strong",children:g[1]},`${d}-${c}-b-${w++}`)):g[2]!==void 0?u.push(e.jsx("em",{className:"italic chat-md-em",children:g[2]},`${d}-${c}-i-${w++}`)):g[3]!==void 0?u.push(e.jsx("code",{className:"chat-inline-code",children:g[3]},`${d}-${c}-c-${w++}`)):u.push(e.jsx("span",{children:g[4]},`${d}-${c}-t-${w++}`));f.push(...u)}),e.jsx("span",{children:f},`text-block-${d}`)})})}function $t({messages:r=[],loading:s=!1,input:t="",onInputChange:o,onSendMessage:l,role:i="guest",compact:n=!1,inputRef:d,className:v="",theme:f}){const _=a.useRef(null),[c,u]=a.useState(null),[y,g]=a.useState(!1),w=i==="admin"||i==="editor",x=w?Dt:Rt;a.useEffect(()=>{var m;(m=_.current)==null||m.scrollIntoView({behavior:"smooth"})},[r,s]);const D=m=>{const b=m.trim();!b||s||y||(l(b,i),g(!0),setTimeout(()=>g(!1),1500))},k=m=>{m.preventDefault(),D(t)},C=async(m,b)=>{try{await navigator.clipboard.writeText(b),u(m),setTimeout(()=>u(null),2e3)}catch{}},S=s||y||!t.trim();return e.jsxs("div",{className:`chat-conversation ${n?"chat-conv--compact":"chat-conv--full"} ${v}`,"data-theme":f,children:[e.jsxs("div",{className:"chat-conv-messages",role:"log","aria-live":"polite","aria-label":"Conversation History",children:[r.length===0&&!s&&e.jsxs("div",{className:"chat-conv-empty",children:[e.jsx("div",{className:"chat-conv-empty-icon-wrap",children:e.jsx(ne,{size:n?36:48,animate:!0,variant:"brand"})}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("span",{className:"chat-conv-telemetry-badge",children:"ADSS TELEMETRY V2.6"}),e.jsx("span",{className:"chat-conv-grounded-badge",children:"LIVE GROUNDING"})]}),e.jsx("h2",{className:"chat-conv-empty-title",children:"ADSS Portal Intelligence"}),e.jsx("p",{className:"chat-conv-empty-sub",children:w?"Instant precision answers regarding society operations, member directories, attendance analytics, and role governance.":"Instant precision answers regarding membership registration, event check-in, OC recruitment, and official letters."})]}),e.jsx("div",{className:"chat-conv-chips",children:x.map((m,b)=>e.jsxs("button",{type:"button",className:"chat-conv-chip",onClick:()=>D(m.text),disabled:s||y,children:[e.jsx("span",{className:"chat-conv-chip-tag",children:m.tag}),e.jsx("span",{className:"chat-conv-chip-text",children:m.text}),e.jsx(nt,{className:"w-3 h-3 chat-conv-chip-arrow ml-auto shrink-0"})]},b))})]}),r.map((m,b)=>{const E=m.role==="user",T=m.id||`msg-${b}`;return e.jsxs("div",{className:`chat-conv-msg-row ${E?"chat-conv-msg-row--user":"chat-conv-msg-row--assistant"}`,children:[!E&&e.jsx("div",{className:"chat-conv-avatar-wrap",title:"ADSS Portal AI Assistant",children:e.jsx(ne,{size:16,variant:"brand"})}),e.jsxs("div",{className:"chat-conv-msg-body",children:[e.jsx("div",{className:`chat-conv-bubble ${E?"chat-conv-bubble--user":"chat-conv-bubble--assistant"}`,children:E?m.text:Ot(m.text)}),!E&&e.jsxs("div",{className:"chat-conv-msg-meta",children:[e.jsx("span",{className:"chat-conv-msg-time",children:m.timestamp||"ADSS INTEL"}),e.jsx("button",{type:"button",onClick:()=>C(T,m.text),className:"chat-conv-copy-action",title:"Copy response",children:c===T?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"COPIED"})]}):e.jsxs(e.Fragment,{children:[e.jsx(re,{className:"w-3 h-3"}),e.jsx("span",{children:"COPY"})]})})]})]})]},T)}),s&&e.jsxs("div",{className:"chat-conv-msg-row chat-conv-msg-row--assistant",children:[e.jsx("div",{className:"chat-conv-avatar-wrap",children:e.jsx(ne,{size:16,animate:!0,variant:"brand"})}),e.jsx("div",{className:"chat-conv-msg-body",children:e.jsxs("div",{className:"chat-conv-bubble chat-conv-bubble--assistant chat-conv-thinking",children:[e.jsx("div",{className:"chat-pulse-node"}),e.jsx("span",{className:"font-berkeley-mono text-[11px] chat-thinking-text tracking-wider uppercase",children:"Analyzing ADSS records…"})]})})]}),e.jsx("div",{ref:_})]}),e.jsx("form",{className:"chat-conv-input-bar",onSubmit:k,children:e.jsxs("div",{className:"chat-conv-input-wrapper",children:[e.jsx("input",{ref:d,className:"chat-conv-input",type:"text",placeholder:y?"Rate limit throttle (1s)...":s?"ADSS intelligence processing...":"Ask ADSS Intelligence (e.g. attendance, OC, letters)...",value:t,onChange:m=>o(m.target.value),disabled:s||y,autoComplete:"off","aria-label":"Message to ADSS AI Assistant"}),e.jsx("button",{type:"submit",className:"chat-conv-send-btn",disabled:S,"aria-label":"Send query",title:"Execute query (Enter)",children:e.jsx(ot,{className:"w-3.5 h-3.5"})})]})}),e.jsx("style",{children:`
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

      `})]})}function Te({role:r="guest",session:s={},onNavigate:t,currentPage:o,theme:l}){const i=(s==null?void 0:s.role)||r||"guest",{messages:n,input:d,setInput:v,loading:f,sendMessage:_,clearChat:c,isWidgetOpen:u,setIsWidgetOpen:y,toggleWidget:g,closeWidget:w}=It(),x=a.useRef(null),D=a.useRef(null),k=a.useRef(null);a.useEffect(()=>{u&&setTimeout(()=>{var b;return(b=D.current)==null?void 0:b.focus()},100)},[u]),a.useEffect(()=>{const b=E=>{var T;if((E.ctrlKey||E.metaKey)&&E.key==="/"){E.preventDefault(),g();return}E.key==="Escape"&&u&&(w(),(T=k.current)==null||T.focus())};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[u,g,w]);const C=()=>{w(),t?t("assistant"):(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate")))},S=()=>{n.length!==0&&window.confirm("Clear active ADSS intelligence conversation?")&&c()},m=i==="admin"?"STAFF COMMAND":i==="editor"?"EDITOR PORTAL":i==="member"?"MEMBER PORTAL":"GUEST ACCESS";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"adss-ai-trigger-container",children:e.jsxs("button",{ref:k,id:"adss-ai-widget-toggle",className:`adss-ai-trigger-btn ${u?"adss-ai-trigger-btn--open":""}`,onClick:g,"aria-label":u?"Close ADSS AI assistant":"Open ADSS AI assistant","aria-expanded":u,"aria-controls":"adss-ai-widget-panel",title:"ADSS Portal AI Assistant (Ctrl+/)",children:[u?e.jsx(ae,{className:"w-5 h-5 text-current transition-transform duration-200"}):e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx(ne,{size:22,variant:"brand",animate:f}),e.jsx("span",{className:"adss-ai-status-indicator"})]}),!u&&e.jsxs("div",{className:"adss-ai-trigger-tooltip",children:[e.jsx("span",{className:"font-sans text-[12px] font-medium adss-ai-tooltip-text",children:"ADSS AI"}),e.jsx("span",{className:"adss-ai-shortcut-badge",children:"Ctrl /"})]})]})}),e.jsxs("div",{id:"adss-ai-widget-panel",ref:x,className:`adss-ai-panel ${u?"adss-ai-panel--open":""}`,"data-theme":l,role:"dialog","aria-modal":"true","aria-label":"ADSS Portal AI Assistant",children:[e.jsx("div",{className:"adss-ai-mobile-handle"}),e.jsxs("div",{className:"adss-ai-header",children:[e.jsxs("div",{className:"adss-ai-header-left",children:[e.jsx("div",{className:"adss-ai-header-emblem",children:e.jsx(ne,{size:18,variant:"brand"})}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("h3",{className:"adss-ai-title",children:"ADSS Intelligence"}),e.jsx("span",{className:"adss-ai-role-badge",children:m})]})]}),e.jsxs("div",{className:"adss-ai-header-actions",children:[n.length>0&&e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:S,title:"Clear conversation","aria-label":"Clear conversation history",children:e.jsx(dt,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:C,title:"Expand to full workspace view (/assistant)","aria-label":"Open in full screen page",children:e.jsx(ht,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",className:"adss-ai-action-btn",onClick:w,title:"Close panel (Esc)","aria-label":"Close assistant",children:e.jsx(ae,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"adss-ai-content",children:e.jsx($t,{messages:n,loading:f,input:d,onInputChange:v,onSendMessage:_,compact:!0,inputRef:D,role:i,theme:l})})]}),u&&e.jsx("div",{className:"adss-ai-backdrop",onClick:w,"aria-hidden":"true"}),e.jsx("style",{children:`
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
      `})]})}class Tt extends Ve.Component{constructor(t){super(t);Re(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),this.props.onReset&&this.props.onReset()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,o){console.error("ErrorBoundary caught an error:",t,o)}render(){return this.state.hasError?e.jsxs("div",{className:"p-8 my-6 max-w-xl mx-auto rounded-[12px] bg-[#0f1011] border border-[#eb5757]/30 text-[#ffffff] space-y-4 shadow-2xl",children:[e.jsxs("div",{className:"flex items-center gap-2.5 text-[#eb5757] pb-2 border-b border-[#23252a]",children:[e.jsx(pt,{className:"w-5 h-5 flex-shrink-0"}),e.jsx("h3",{className:"text-[15px] font-[510] tracking-tight",children:"Section Encountered an Error"})]}),e.jsx("p",{className:"text-[12px] text-[#8a8f98] leading-relaxed",children:"An unexpected error occurred while rendering this section. You can retry rendering or return to the main dashboard."}),this.state.error&&e.jsx("pre",{className:"p-3 rounded-[6px] bg-[#161718] border border-[#23252a] text-[11px] font-berkeley-mono text-[#eb5757] overflow-x-auto whitespace-pre-wrap break-all",children:this.state.error.message||String(this.state.error)}),e.jsxs("div",{className:"flex items-center gap-2.5 pt-2",children:[e.jsxs("button",{onClick:this.handleReset,className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#e4f222] text-[#08090a] text-[12px] font-[510] hover:bg-[#d8e61e] transition-colors cursor-pointer",children:[e.jsx(xt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Retry View"})]}),e.jsxs("button",{onClick:()=>{this.handleReset(),this.props.onNavigate?this.props.onNavigate("dashboard"):typeof window<"u"&&window.location.reload()},className:"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] bg-[#161718] border border-[#23252a] text-[#d0d6e0] text-[12px] hover:bg-[#23252a] transition-colors cursor-pointer",children:[e.jsx(mt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Back to Dashboard"})]})]})]}):this.props.children}}function Mt({page:r,setPage:s,visibleSections:t=[],session:o={},pendingMsgCount:l=0,theme:i="dark",toggleTheme:n,isRealStaff:d=!1,viewAsMember:v=!1,handleToggleViewAsMember:f,handleLogout:_,connected:c=null,canAccessAi:u=!1}){const[y,g]=a.useState(!1);a.useEffect(()=>{const N=j=>{j.key==="Escape"&&y&&g(!1)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[y]),a.useEffect(()=>(y?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[y]);const w=N=>{if(!N)return"U";const j=N.trim().split(/\s+/);return j.length===1?j[0].substring(0,2).toUpperCase():(j[0][0]+j[j.length-1][0]).toUpperCase()},x=o.role==="admin"||o.role==="editor",D=o.role==="member",k=!!o.stId;let C=[];x&&!v?C=[{id:"dashboard",label:"Dash",icon:qe},{id:"my_info",label:"My Info",icon:Ne},{id:"notices",label:"Notices",icon:xe},{id:"messages",label:"Messages",icon:fe,badge:l}]:D||v?C=[{id:"attendance",label:"Dash",icon:Ye},{id:k?"my_info":"events",label:k?"My Info":"Events",icon:k?Ne:oe},{id:"notices",label:"Notices",icon:xe},{id:"messages",label:"Messages",icon:fe,badge:l}]:C=[{id:"events",label:"Events",icon:oe},{id:"notices",label:"Notices",icon:xe},{id:"assistant",label:"Assistant",icon:Je}];const m=!new Set(C.map(N=>N.id)).has(r)||y,E=t.flatMap(N=>N.items).find(N=>N.id===r),T=E?E.label:r?String(r).replace("_"," ").toUpperCase():"DASHBOARD",z=N=>{g(!1),s(N)};return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"mobile-topbar",role:"banner",children:[e.jsxs("div",{className:"mobile-topbar-left cursor-pointer",onClick:()=>z("dashboard"),children:[e.jsx("img",{src:`/${i==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"mobile-topbar-logo",alt:"ADSS"}),e.jsxs("div",{className:"mobile-topbar-title-wrap",children:[e.jsx("div",{className:"mobile-topbar-brand",children:"ADSS RUHUNA"}),e.jsx("div",{className:"mobile-topbar-page",children:T})]})]}),e.jsx("div",{className:"mobile-topbar-right flex items-center",children:e.jsx("div",{className:"mobile-telemetry-dot",title:c===null?"Synchronizing":c?"DB Synchronized":"Offline",children:e.jsx("span",{className:`dot ${c===null?"pending":c?"ok":"err"}`})})})]}),e.jsx("nav",{className:"mobile-bottom-bar",role:"navigation","aria-label":"Mobile Navigation",children:e.jsxs("div",{className:"mobile-bottom-grid",children:[C.map(N=>{const j=N.icon,J=r===N.id&&!y;return e.jsxs("button",{className:`mobile-tab-btn ${J?"active":""}`,onClick:()=>z(N.id),"aria-label":N.label,children:[e.jsxs("div",{className:"mobile-tab-icon-box",children:[e.jsx(j,{className:"mobile-tab-icon"}),N.badge>0&&e.jsx("span",{className:"mobile-tab-badge",children:N.badge>99?"99+":N.badge})]}),e.jsx("span",{className:"mobile-tab-label",children:N.label})]},N.id)}),e.jsxs("button",{className:`mobile-tab-btn ${m?"active":""}`,onClick:()=>g(N=>!N),"aria-label":"More navigation options","aria-expanded":y,children:[e.jsx("div",{className:"mobile-tab-icon-box",children:e.jsx(ft,{className:"mobile-tab-icon"})}),e.jsx("span",{className:"mobile-tab-label",children:"More"})]})]})}),e.jsx("div",{className:`mobile-drawer-backdrop ${y?"open":""}`,onClick:()=>g(!1),"aria-hidden":!y}),e.jsx("aside",{className:`mobile-drawer ${y?"open":""}`,"aria-label":"Additional Navigation","aria-hidden":!y,children:e.jsxs("div",{className:"mobile-drawer-inner",children:[e.jsxs("div",{className:"mobile-drawer-header",children:[e.jsxs("div",{className:"mobile-drawer-header-left",children:[e.jsx("div",{className:"mobile-drawer-title",children:"Navigation"}),e.jsx("div",{className:"mobile-drawer-subtitle",children:"ADSS Ruhuna Portal"})]}),e.jsx("button",{className:"mobile-drawer-close-btn",onClick:()=>g(!1),"aria-label":"Close menu",children:e.jsx(ae,{className:"w-5 h-5"})})]}),o.role!=="guest"&&e.jsxs("div",{className:"mobile-drawer-profile-card",children:[e.jsx("div",{className:"mobile-drawer-avatar",children:w(o.name||o.email)}),e.jsxs("div",{className:"mobile-drawer-user-info",children:[e.jsx("div",{className:"mobile-drawer-user-name",children:o.preferredName||o.name||"Member"}),e.jsxs("div",{className:"mobile-drawer-user-meta",children:[e.jsx("span",{className:"mobile-drawer-role-badge",children:o.role}),o.stId&&e.jsx("span",{className:"mobile-drawer-stid",children:o.stId})]})]})]}),e.jsx("div",{className:"mobile-drawer-nav-scroll",children:t.map(N=>e.jsxs("div",{className:"mobile-drawer-group",children:[e.jsx("div",{className:"mobile-drawer-group-title",children:N.title}),e.jsx("div",{className:"mobile-drawer-group-items",children:N.items.map(j=>{const J=j.icon,ee=r===j.id,te=j.id==="messages"&&l>0;return e.jsxs("button",{className:`mobile-drawer-item ${ee?"active":""}`,onClick:()=>{s(j.id),g(!1)},children:[e.jsxs("div",{className:"mobile-drawer-item-left",children:[e.jsx("span",{className:"mobile-drawer-item-icon",children:e.jsx(J,{className:"w-4 h-4"})}),e.jsx("span",{className:"mobile-drawer-item-label",children:j.label})]}),e.jsxs("div",{className:"mobile-drawer-item-right",children:[te&&e.jsx("span",{className:"mobile-drawer-badge",children:l>99?"99+":l}),e.jsx(me,{className:"w-3.5 h-3.5 opacity-40"})]})]},j.id)})})]},N.title))}),e.jsxs("div",{className:"mobile-drawer-footer",children:[e.jsxs("div",{className:"mobile-drawer-controls-grid",children:[d&&e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${v?"":"active-staff"}`,onClick:f,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[e.jsx(He,{className:"w-3.5 h-3.5 text-[#6366f1]"}),e.jsx("span",{children:v?"Member":"Staff"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:v?"OFF":"ON"})]}),e.jsxs("button",{type:"button",className:`mobile-drawer-ctrl-card ${i==="dark"?"active-dark":""}`,onClick:n,children:[e.jsxs("div",{className:"mobile-drawer-ctrl-header",children:[i==="dark"?e.jsx(ye,{className:"w-3.5 h-3.5 text-amber-400"}):e.jsx(je,{className:"w-3.5 h-3.5 text-amber-500"}),e.jsx("span",{children:i==="dark"?"Dark":"Light"})]}),e.jsx("span",{className:"mobile-drawer-ctrl-tag",children:"MODE"})]})]}),e.jsxs("button",{type:"button",className:"mobile-drawer-logout-btn",onClick:()=>{g(!1),o.role!=="guest"?_():(window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")))},children:[e.jsxs("div",{className:"mobile-drawer-logout-left",children:[e.jsx(we,{className:"w-4 h-4 text-[#eb5757]"}),e.jsx("span",{children:o.role!=="guest"?"Logout":"Login"})]}),e.jsx(me,{className:"w-4 h-4 opacity-40"})]})]})]})})]})}const zt="bhanukadilshan2002@gmail.com";function Ft({isOpen:r,onClose:s,session:t,isDark:o=!0}){const[l,i]=a.useState(""),[n,d]=a.useState(!1),[v,f]=a.useState(null);if(!r)return null;const _=async c=>{if(c.preventDefault(),!l.trim()){f({type:"error",text:"Please enter a message before sending."});return}d(!0),f(null);const u=new FormData;u.append("access_key","a550f902-9114-4a93-be4f-44fd2145d58e"),u.append("subject","Society Management System - Issue Report"),u.append("name",(t==null?void 0:t.name)||"Guest User"),u.append("email",(t==null?void 0:t.email)||"no-reply@society.com");const y=`
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
`;u.append("message",y);try{const w=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:u})).json();w.success?(f({type:"success",text:"Your message has been sent successfully!"}),i("")):f({type:"error",text:w.message||"Failed to send the email. Please try again."})}catch{f({type:"error",text:"A network error occurred. Please check your connection."})}finally{d(!1)}};return e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:c=>{c.target===c.currentTarget&&s()},children:e.jsxs("div",{className:`w-full max-w-[620px] rounded-[10px] p-6 shadow-2xl relative text-left animate-in fade-in zoom-in-95 duration-150 border ${o?"bg-[#121316] border-[#23252a] text-[#e5e5e6]":"bg-white border-gray-200 text-gray-900"}`,role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[e.jsx("span",{className:`text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono ${o?"text-[#8a8f98]":"text-gray-500"}`,children:"CONTACT FOR ISSUES"}),e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:`px-2.5 py-1 rounded-full text-[11px] font-berkeley-mono ${o?"bg-[#18191c] border border-[#26282d] text-[#a0a5ad]":"bg-gray-100 border border-gray-200 text-gray-600"}`,children:zt}),e.jsx("button",{type:"button",onClick:s,className:`transition-colors cursor-pointer p-1 rounded ${o?"text-[#8a8f98] hover:text-white hover:bg-[#23252a]/60":"text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`,title:"Close",children:e.jsx(ae,{className:"w-4 h-4"})})]})]}),e.jsxs("p",{className:`text-[13.5px] leading-relaxed mb-4 ${o?"text-[#9da3ad]":"text-gray-600"}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`font-bold hover:underline ${o?"text-white":"text-gray-900"}`,children:"Bhanuka Dilshan"}),". If you encounter any bugs, issues, or have feedback, please write a message below to send an email."]}),v&&e.jsxs("div",{className:`p-3 rounded-[6px] mb-4 text-[12.5px] flex items-center gap-2 ${v.type==="success"?"bg-[#27a644]/15 border border-[#27a644]/30 text-[#4ade80]":"bg-[#eb5757]/15 border border-[#eb5757]/30 text-[#f87171]"}`,children:[v.type==="success"?e.jsx(ke,{className:"w-4 h-4 flex-shrink-0"}):e.jsx(ut,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:v.text})]}),e.jsxs("form",{onSubmit:_,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:`block text-[11px] font-semibold tracking-wider uppercase font-berkeley-mono mb-2 ${o?"text-[#8a8f98]":"text-gray-600"}`,children:"SHORT MESSAGE"}),e.jsx("textarea",{rows:4,placeholder:"Write the issue shortly...",value:l,onChange:c=>i(c.target.value),disabled:n,className:`w-full rounded-[6px] p-3 text-[13.5px] focus:outline-none resize-y transition-colors border ${o?"bg-[#0d0e10] border-[#23252a] text-white placeholder:text-[#525866] focus:border-[#4b5563]":"bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500"}`})]}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"submit",disabled:n,className:`font-[510] text-[13px] px-4 py-2 rounded-[6px] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm ${o?"bg-white hover:bg-[#e4e7eb] text-black":"bg-gray-900 hover:bg-black text-white"}`,children:n?"Sending...":"Send Email"})})]})]})})}function Bt({session:r,isDark:s,className:t=""}){const[o,l]=a.useState(!1),i=s!==void 0?s:typeof document<"u"?document.documentElement.classList.contains("dark"):!0;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`text-center text-[12px] font-berkeley-mono transition-colors ${i?"text-[#62666d]":"text-gray-500"} ${t}`,children:["Developed by"," ",e.jsx("a",{href:"https://bhanukadilshan.me/",target:"_blank",rel:"noopener noreferrer",className:`underline transition-colors ${i?"text-[#8a8f98] hover:text-white":"text-gray-600 hover:text-gray-900"}`,children:"Bhanuka Dilshan"})," • ",e.jsx("button",{type:"button",onClick:()=>l(!0),className:`transition-colors cursor-pointer inline-flex items-center ${i?"text-[#8a8f98] hover:text-[#e4f222]":"text-gray-600 hover:text-indigo-600 font-medium"}`,children:"Contact For Issues"})]}),e.jsx(Ft,{isOpen:o,onClose:()=>l(!1),session:r,isDark:i})]})}const Ut=a.lazy(()=>O(()=>import("./Login-B0QSN16r.js"),__vite__mapDeps([0,1,2,3,4]))),Wt=a.lazy(()=>O(()=>import("./Register-D0OpT9zJ.js"),__vite__mapDeps([5,1,6,2,3,4]))),Me=a.lazy(()=>O(()=>import("./Dashboard-YQ6qY7a1.js"),__vite__mapDeps([7,1,8,9,2,3,4]))),Vt=a.lazy(()=>O(()=>import("./Members-b3U3wA5n.js"),__vite__mapDeps([10,1,11,2,3,4]))),Ht=a.lazy(()=>O(()=>import("./Events-zTwz93YA.js"),__vite__mapDeps([12,1,6,11,13,14,9,2,3,4]))),qt=a.lazy(()=>O(()=>import("./Attendance-uyltQYHL.js"),__vite__mapDeps([15,1,16,2,17,9,3,4]))),Yt=a.lazy(()=>O(()=>import("./Committee-Bo9d_VOS.js"),__vite__mapDeps([18,1,11,16,2,9,3,4]))),Jt=a.lazy(()=>O(()=>import("./Setup-CpCHcoH8.js"),__vite__mapDeps([19,1]))),Gt=a.lazy(()=>O(()=>import("./Access-PPK9Wain.js"),__vite__mapDeps([20,1,21,2,3,4]))),ze=a.lazy(()=>O(()=>import("./MyInfo-DPhDzKri.js"),__vite__mapDeps([22,1,8,6,2,3,4]))),Kt=a.lazy(()=>O(()=>import("./Messages-CHDi5muv.js"),__vite__mapDeps([23,1,2,3,4]))),Xt=a.lazy(()=>O(()=>import("./Tasks-uFwvBD3I.js"),__vite__mapDeps([24,1,16,2,13,14,9,3,4]))),Qt=a.lazy(()=>O(()=>import("./Landing-D5v5Eu3d.js"),__vite__mapDeps([25,1,2,3,4]))),Zt=a.lazy(()=>O(()=>import("./PublicEvent-ehhurpJo.js"),__vite__mapDeps([26,1,3,4,2]))),ea=a.lazy(()=>O(()=>import("./Notices-B8OXmCEs.js"),__vite__mapDeps([27,1,11,28,9,2,4,3]))),ta=a.lazy(()=>O(()=>import("./PublicNotice-DIuv9JGz.js"),__vite__mapDeps([29,1,28,2,3,4]))),aa=a.lazy(()=>O(()=>import("./ScanAttendance-DDigVnpr.js"),__vite__mapDeps([30,1,2,3,4]))),sa=a.lazy(()=>O(()=>import("./Letters-CJ-JNybQ.js"),__vite__mapDeps([31,1,8,9,2,3,4]))),Fe=a.lazy(()=>O(()=>import("./AssistantPage-DeC7A6jn.js"),__vite__mapDeps([32,1,2,3,4]))),Be=a.lazy(()=>O(()=>import("./PrivacyPolicy-CGLH0743.js"),__vite__mapDeps([33,1,2]))),Ue=a.lazy(()=>O(()=>import("./TermsOfService-0BlNr8gU.js"),__vite__mapDeps([34,1,2]))),ra=a.lazy(()=>O(()=>import("./Documents-CpArUvim.js"),__vite__mapDeps([35,1,11,21,9,2,3,4])));function Y(){return e.jsx("div",{style:{display:"flex",minHeight:"50vh",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("div",{style:{width:"32px",height:"32px",border:"2px solid rgba(129, 140, 248, 0.2)",borderTop:"2px solid #818cf8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})})}const Qe=[{title:"Workspace",items:[{id:"dashboard",label:"Dashboard",icon:qe},{id:"notices",label:"Notices",icon:xe},{id:"my_info",label:"My Credentials",icon:Ne},{id:"messages",label:"Messages",icon:fe}]},{title:"Operations",items:[{id:"events",label:"Events",icon:oe},{id:"attendance",label:"Attendance",icon:Ye},{id:"committee",label:"Committee (OC)",icon:Se},{id:"letters",label:"Letter Requests",icon:Ge},{id:"documents",label:"Documents",icon:bt}]},{title:"Directory & Intel",items:[{id:"members",label:"Members",icon:gt},{id:"assistant",label:"AI Assistant",icon:Je},{id:"access",label:"Access Control",icon:vt}]}],na=Qe.flatMap(r=>r.items),We=r=>r==="admin"||r==="editor",oa=r=>{if(!r)return"U";const s=r.trim().split(/\s+/);return s.length===1?s[0].substring(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()},ia=(r,s,t)=>{if(!t)return[];const o=(r||"").trim().toUpperCase(),l=(s||"").trim().toLowerCase();if(Array.isArray(t))return t.some(n=>{const d=(n||"").trim();return o&&d.toUpperCase()===o||l&&d.toLowerCase()===l})?["Events","Budgets","Permissions","Guidance"]:[];if(typeof t=="object")for(const[i,n]of Object.entries(t)){const d=(i||"").trim();if(o&&d.toUpperCase()===o||l&&d.toLowerCase()===l)return Array.isArray(n)?n:[]}return[]},_e="adss-profile-cache",ca=()=>{try{const r=localStorage.getItem(_e);return r?JSON.parse(r):null}catch{return null}},ge=r=>{try{localStorage.setItem(_e,JSON.stringify(r))}catch{}},la=()=>{try{localStorage.removeItem(_e)}catch{}},da=()=>{var r;try{const s=localStorage.getItem("adss-auth");return s&&((r=JSON.parse(s))==null?void 0:r.user)}catch{return!1}};function ha(){const r=ca(),s=da(),t=!!(r&&s),[o,l]=a.useState(()=>localStorage.getItem("theme")||"dark"),[i,n]=a.useState(()=>t&&r.role==="member"?"attendance":"dashboard"),[d,v]=a.useState(null),[f,_]=a.useState(()=>window.innerWidth>768),[c,u]=a.useState(()=>t?r:{role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),[y,g]=a.useState(!t),[w,x]=a.useState(!0),[D,k]=a.useState(!0),[C,S]=a.useState([]),[m,b]=a.useState(!1),[E,T]=a.useState(0),[z,N]=a.useState(window.location.pathname),[j,J]=a.useState(window.location.hash);a.useEffect(()=>{const h=()=>{N(window.location.pathname),J(window.location.hash)};return window.addEventListener("popstate",h),window.addEventListener("hashchange",h),()=>{window.removeEventListener("popstate",h),window.removeEventListener("hashchange",h)}},[]);const ee=z.startsWith("/event")||j.startsWith("#/event")||j.startsWith("#event"),te=z.startsWith("/notice")||j.startsWith("#/notice")||j.startsWith("#notice"),ie=z.startsWith("/scan-attendance")||j.startsWith("#/scan-attendance")||j.startsWith("#scan-attendance"),ce=z.startsWith("/assistant")||j.startsWith("#/assistant")||j.startsWith("#assistant"),le=z.startsWith("/privacy")||j.startsWith("#/privacy")||j.startsWith("#privacy"),p=z.startsWith("/terms")||j.startsWith("#/terms")||j.startsWith("#terms"),$=z==="/login"||j==="#/login"||j==="#login",W=z==="/register"||j==="#/register"||j==="#register";a.useEffect(()=>{document.documentElement.classList.toggle("dark",o==="dark"),document.documentElement.setAttribute("data-theme",o),document.documentElement.style.background=o==="dark"?"#08090a":"#ffffff",localStorage.setItem("theme",o)},[o]),a.useEffect(()=>{R.from("members").select("count",{count:"exact",head:!0}).then(({error:I})=>v(!I));const h=()=>{R.from("system_settings").select("key, value").in("key",["registration_enabled","ai_feature_enabled","document_access_members"]).then(({data:I})=>{if(I){const P=I.find(U=>U.key==="registration_enabled"),F=I.find(U=>U.key==="ai_feature_enabled"),A=I.find(U=>U.key==="document_access_members");if(P&&x(P.value==="true"),F&&k(F.value==="true"),A)try{const U=JSON.parse(A.value);S(U||{})}catch{S({})}}})};h();const L=R.channel("app-system-settings-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},I=>{const P=I.new;if(!P||!P.key){h();return}if(P.key==="registration_enabled"&&x(P.value==="true"),P.key==="ai_feature_enabled"&&k(P.value==="true"),P.key==="document_access_members")try{const F=JSON.parse(P.value);S(F||{})}catch{S({})}}).subscribe();return()=>{R.removeChannel(L)}},[]),a.useEffect(()=>{if(!c.stId){T(0);return}const h=async()=>{const{data:I}=await R.from("messages").select("id",{count:"exact"}).eq("receiver_st_id",c.stId).eq("status","pending");T((I==null?void 0:I.length)??0)};h();const L=R.channel(`nav-pending-${c.stId}`).on("postgres_changes",{event:"*",schema:"public",table:"messages"},()=>h()).subscribe();return()=>R.removeChannel(L)},[c.stId]),a.useEffect(()=>{let h=!0;const L=async P=>{const F=P==null?void 0:P.user;if(!F){h&&(u({role:"guest",stId:"",name:"",email:"",userId:""}),b(!1),n("dashboard"),g(!1));return}const{data:A}=await R.from("profiles").select("id, email, full_name, preferred_name, role, st_id, status").eq("id",F.id).maybeSingle();if(h){let U=((A==null?void 0:A.st_id)||"").trim();const ue=((A==null?void 0:A.email)||F.email||"").trim();if(!U&&ue)try{const{data:K}=await R.from("members").select("st_id").ilike("email",ue).maybeSingle();K!=null&&K.st_id&&(U=K.st_id.trim(),R.from("profiles").update({st_id:U}).eq("id",F.id).then(()=>{}))}catch{}const Ee=(A==null?void 0:A.role)||"member",Ae=(A==null?void 0:A.status)||"approved",Ie={role:Ee,stId:U,name:(A==null?void 0:A.preferred_name)||(A==null?void 0:A.full_name)||F.email||"",fullName:(A==null?void 0:A.full_name)||"",preferredName:(A==null?void 0:A.preferred_name)||"",email:ue,userId:F.id,status:Ae};u(Ie),ge(Ie),b(!1),n(K=>Ae==="pending"?"dashboard":K==="about"?Ee==="member"?"attendance":"dashboard":K),g(!1);const De=window.location.pathname,he=window.location.hash;(De==="/login"||he==="#/login"||he==="#login"||De==="/register"||he==="#/register"||he==="#register")&&(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")))}};R.auth.getSession().then(({data:P})=>L(P.session));const{data:I}=R.auth.onAuthStateChange((P,F)=>{g(!0),L(F)});return()=>{h=!1,I.subscription.unsubscribe()}},[]);const H={dashboard:Me,notices:ea,members:Vt,committee:Yt,events:Ht,attendance:qt,access:Gt,setup:Jt,my_info:ze,profile:ze,messages:Kt,tasks:Xt,letters:sa,assistant:Fe,privacy:Be,terms:Ue,documents:ra}[i]||Me,V=We(c.role),B=m&&V?"member":c.role,G=We(B),q=G||D,de=h=>B==="guest"?h.id==="privacy"||h.id==="terms"||h.id==="assistant"&&q:h.id==="access"?B==="admin":h.id==="letters"?G:h.id==="my_info"?!!c.stId:h.id==="members"?G:h.id==="assistant"?q:h.id==="documents"?G?!0:ia(c.stId,c.email,C).length>0:G||h.id!=="dashboard";na.filter(de);const se=Qe.map(h=>({...h,items:h.items.filter(de)})).filter(h=>h.items.length>0),Q=async()=>{la(),await R.auth.signOut(),u({role:"guest",stId:"",name:"",email:"",userId:"",status:"approved"}),b(!1),n("dashboard")},Z=()=>l(h=>h==="dark"?"light":"dark"),Ce=()=>{b(h=>{const L=!h;return L?(i==="dashboard"||i==="members"||i==="access")&&n("attendance"):i==="attendance"&&n(c.role==="admin"?"dashboard":"members"),L})};return ee?e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(Zt,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):te?e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(ta,{theme:o,onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):ie?e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(aa,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):le?e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(Be,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):p?e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(Ue,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):ce?q?e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(Fe,{onBackToLanding:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},role:B,session:c,theme:o})}):e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem",color:"var(--text)"},children:e.jsxs("div",{className:"card",style:{maxWidth:"440px",width:"100%",textAlign:"center",padding:"2.5rem 2rem",boxShadow:"var(--shadow-xl)"},children:[e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px",color:"var(--amber)",marginBottom:"1rem"},children:"lock"}),e.jsx("h2",{style:{margin:"0 0 8px 0",fontSize:"20px"},children:"AI Assistant Disabled"}),e.jsx("p",{style:{color:"var(--text3)",fontSize:"14px",margin:0,lineHeight:1.5},children:"The AI Assistant feature is currently disabled for members by an administrator."}),e.jsx("button",{className:"btn btn-primary",style:{marginTop:"1.5rem",width:"100%"},onClick:()=>{window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))},children:"Back to Home"})]})}):$?c.userId&&c.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(Ut,{theme:o,onNavigate:h=>{window.history.pushState({},"",h==="register"?"/register":"/"),window.dispatchEvent(new Event("popstate"))},onLoginSuccess:h=>{u(h),ge(h),b(!1),n(h.status==="pending"?"dashboard":h.role==="member"?"attendance":h.role==="admin"?"dashboard":"members"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):W?c.userId&&c.role!=="guest"?(window.history.replaceState({},"","/"),window.dispatchEvent(new Event("popstate")),null):e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(Wt,{theme:o,regEnabled:w,onNavigate:h=>{window.history.pushState({},"",h==="login"?"/login":"/"),window.dispatchEvent(new Event("popstate"))},onRegisterSuccess:(h,L)=>{u(h),ge(h),b(!1),n(L?"dashboard":h.role==="member"?"attendance":h.role==="admin"?"dashboard":"members"),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}})}):c.userId&&c.status==="pending"?e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem"},children:e.jsxs("div",{className:"card",style:{maxWidth:"500px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"2rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"3rem",color:"var(--amber)",marginBottom:"1rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px"},children:"hourglass_top"})}),e.jsx("h1",{className:"page-title",children:"Registration Pending"}),e.jsx("p",{className:"page-subtitle",children:"Your account is currently under review by an administrator or editor"})]}),e.jsxs("div",{className:"alert alert-info",style:{textAlign:"left",marginBottom:"2.5rem",padding:"1.25rem",borderRadius:"12px",background:"rgba(0, 122, 255, 0.08)",border:"1px solid rgba(0, 122, 255, 0.15)"},children:[e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:[e.jsx("strong",{children:"Name:"})," ",c.name]}),e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:[e.jsx("strong",{children:"Student ID:"})," ",c.stId]}),e.jsxs("p",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:[e.jsx("strong",{children:"Email:"})," ",c.email]}),e.jsxs("p",{style:{margin:0,fontSize:"14px"},children:[e.jsx("strong",{children:"Requested Role:"})," ",e.jsx("span",{className:"badge badge-purple",style:{verticalAlign:"middle"},children:c.role.toUpperCase()})]})]}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginBottom:"2rem",lineHeight:"1.6"},children:"Once approved, you will be granted access to the society dashboard. Thank you for your patience!"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[e.jsx("button",{className:"btn btn-primary",type:"button",onClick:async()=>{var L;g(!0);const{data:h}=await R.auth.getSession();if((L=h==null?void 0:h.session)!=null&&L.user){const{data:I}=await R.from("profiles").select("status, role, st_id, full_name, email").eq("id",h.session.user.id).maybeSingle();I&&(u(P=>({...P,status:I.status||"approved",role:I.role||"member",stId:I.st_id||"",name:I.full_name||P.name,email:I.email||P.email})),b(!1),I.status!=="pending"&&n(I.role==="member"?"attendance":I.role==="admin"?"dashboard":"members"))}g(!1)},children:"Refresh Status"}),e.jsx("button",{className:"btn btn-ghost",type:"button",onClick:Q,children:"Logout"})]})]})}):c.userId&&c.status==="rejected"?e.jsx("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",padding:"2rem"},children:e.jsxs("div",{className:"card",style:{maxWidth:"500px",width:"100%",textAlign:"center",boxShadow:"0 20px 40px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},children:[e.jsxs("div",{className:"page-header",style:{marginBottom:"2rem"},children:[e.jsx("div",{className:"icon",style:{fontSize:"3rem",color:"var(--red)",marginBottom:"1rem"},children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:"48px"},children:"cancel"})}),e.jsx("h1",{className:"page-title",children:"Registration Rejected"}),e.jsx("p",{className:"page-subtitle",children:"Your registration request has been rejected by the administrator or editor"})]}),e.jsx("div",{className:"alert alert-error",style:{textAlign:"center",marginBottom:"2.5rem",padding:"1.25rem",borderRadius:"12px"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",fontWeight:"700"},children:"Your registration has been rejected."})}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginBottom:"2rem",lineHeight:"1.6"},children:"Please contact the society administrators if you believe this was in error or if you need to submit correct information."}),e.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:e.jsx("button",{className:"btn btn-ghost",type:"button",onClick:Q,children:"Logout"})})]})}):y&&!c.userId?e.jsxs("div",{style:{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",background:"var(--bg)",flexDirection:"column",position:"relative"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"32px",height:"32px",border:"3px solid var(--border)",borderTop:"3px solid var(--accent)",borderRadius:"50%",animation:"spin 0.6s linear infinite",margin:"0 auto 12px"}}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),e.jsx("div",{style:{position:"fixed",bottom:"24px",left:0,right:0},children:e.jsx(Bt,{session:c})})]}):c.role==="guest"?e.jsxs(a.Suspense,{fallback:e.jsx(Y,{}),children:[e.jsx(Qt,{theme:o,onThemeToggle:Z,regEnabled:w,aiEnabled:q,onLoginClick:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},onRegisterClick:()=>{window.history.pushState({},"","/register"),window.dispatchEvent(new Event("popstate"))}}),q&&e.jsx(Te,{role:"guest",session:c,theme:o,onNavigate:h=>{h==="assistant"?(window.history.pushState({},"","/assistant"),window.dispatchEvent(new Event("popstate"))):n(h)},currentPage:"landing"})]}):e.jsxs("div",{className:"app-shell",children:[e.jsx(Mt,{page:i,setPage:n,visibleSections:se,session:c,pendingMsgCount:E,theme:o,toggleTheme:Z,isRealStaff:V,viewAsMember:m,handleToggleViewAsMember:Ce,handleLogout:Q,connected:d,canAccessAi:q}),e.jsxs("aside",{className:`sidebar ${f?"open":"collapsed"}`,children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[e.jsx("img",{src:`/${o==="dark"?"logo_trans_light.png":"logo_trans_dark.png"}`,className:"logo-img",alt:"ADSS Logo"}),f&&e.jsx("div",{className:"logo-text min-w-0",children:e.jsx("span",{className:"logo-title",children:"ADSS RUHUNA"})})]}),e.jsx("button",{className:"sidebar-toggle",onClick:()=>_(!f),"aria-label":"Toggle navigation menu",children:f?e.jsx(yt,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"}):e.jsx(me,{className:"w-4 h-4 text-[#8a8f98] hover:text-white transition-colors"})})]}),e.jsxs("div",{className:"connection-badge",children:[e.jsx("span",{className:`dot ${d===null?"pending":d?"ok":"err"}`}),f&&e.jsx("span",{className:"text-[10px] font-berkeley-mono uppercase tracking-wider text-[#8a8f98]",children:d===null?"SYNCHRONIZING...":d?"DB SYNCHRONIZED":"OFFLINE"})]}),e.jsx("nav",{className:"sidebar-nav",children:se.map(h=>e.jsxs("div",{className:"sidebar-group",children:[f&&e.jsx("div",{className:"sidebar-group-title",children:h.title}),e.jsx("div",{className:"sidebar-group-items",children:h.items.map(L=>{const I=L.icon,P=i===L.id;return e.jsxs("button",{className:`nav-item ${P?"active":""}`,onClick:()=>{n(L.id),window.innerWidth<=768&&_(!1)},title:f?void 0:L.label,children:[e.jsx("span",{className:"nav-icon",children:e.jsx(I,{className:"w-4 h-4"})}),f&&e.jsx("span",{className:"nav-label",children:L.label}),L.id==="messages"&&E>0&&e.jsx("span",{className:"nav-badge-pill",children:E>99?"99+":E})]},L.id)})})]},h.title))}),f?e.jsxs("div",{className:"sidebar-footer",children:[c.role!=="guest"&&e.jsxs("div",{className:"sidebar-user-pill",children:[e.jsx("div",{className:"w-7 h-7 rounded-[6px] bg-[#161718] border border-[#23252a] flex items-center justify-center font-berkeley-mono text-[11px] font-[510] text-white flex-shrink-0",children:oa(c.name||c.email)}),e.jsxs("div",{className:"min-w-0 flex-1 text-left",children:[e.jsx("div",{className:"text-[12px] font-[510] text-white truncate leading-tight",children:c.preferredName||c.name||"Member"}),e.jsx("div",{className:"text-[10px] font-berkeley-mono text-[#8a8f98] uppercase tracking-wider",children:c.role})]})]}),e.jsxs("div",{className:`sidebar-grid-row ${V?"two-cols":"one-col"}`,children:[V&&e.jsxs("div",{className:`sidebar-compact-card ${m?"":"active-staff"}`,onClick:Ce,title:m?"Switch to Staff View":"Switch to Member View",children:[e.jsxs("div",{className:"sidebar-compact-header",children:[e.jsx(He,{className:"w-3.5 h-3.5 icon text-[#6366f1]"}),e.jsx("span",{className:"sidebar-compact-title",children:m?"Member":"Staff"})]}),e.jsx("div",{className:"sidebar-compact-badge",children:m?"OFF":"ON"})]}),e.jsxs("div",{className:`sidebar-compact-card ${o==="dark"?"active-dark":""}`,onClick:Z,title:`Switch to ${o==="dark"?"light":"dark"} mode`,children:[e.jsxs("div",{className:"sidebar-compact-header",children:[o==="dark"?e.jsx(ye,{className:"w-3.5 h-3.5 icon text-amber-400"}):e.jsx(je,{className:"w-3.5 h-3.5 icon text-amber-500"}),e.jsx("span",{className:"sidebar-compact-title",children:o==="dark"?"Dark":"Light"})]}),e.jsx("div",{className:`sidebar-toggle-switch mini ${o==="dark"?"active":""}`,children:e.jsx("div",{className:"sidebar-toggle-thumb"})})]})]}),e.jsx("div",{className:"sidebar-divider"}),e.jsxs("div",{className:"sidebar-pref-card logout-card",onClick:c.role!=="guest"?Q:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate")),window.innerWidth<=768&&_(!1)},children:[e.jsxs("div",{className:"sidebar-pref-left",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-[#eb5757]"}),e.jsx("span",{className:"sidebar-logout-title",children:c.role!=="guest"?"Logout":"Login"})]}),e.jsx(me,{className:"w-3.5 h-3.5 text-[#62666d]"})]})]}):e.jsxs("div",{className:"p-2 border-t border-[#23252a] flex flex-col items-center gap-2",children:[e.jsx("button",{onClick:Z,className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#8a8f98] hover:text-white hover:bg-[#161718] transition-colors",title:`Switch to ${o==="dark"?"light":"dark"} mode`,children:o==="dark"?e.jsx(ye,{className:"w-4 h-4 text-amber-400"}):e.jsx(je,{className:"w-4 h-4 text-amber-500"})}),e.jsx("button",{onClick:c.role!=="guest"?Q:()=>{window.history.pushState({},"","/login"),window.dispatchEvent(new Event("popstate"))},className:"w-9 h-9 rounded-[6px] flex items-center justify-center text-[#eb5757] hover:bg-[#eb5757]/10 transition-colors",title:c.role!=="guest"?"Logout":"Login",children:e.jsx(we,{className:"w-4 h-4"})})]})]}),e.jsx("main",{className:"main-content",children:e.jsx("div",{className:"page-wrapper",children:e.jsx(Tt,{onNavigate:n,children:e.jsx(a.Suspense,{fallback:e.jsx(Y,{}),children:e.jsx(H,{onNavigate:n,isAdmin:G,role:B,session:c,theme:o,docAccessMembers:C,setDocAccessMembers:S})})},i)})}),q&&i!=="assistant"&&e.jsx(Te,{role:B,session:c,onNavigate:n,currentPage:i,theme:o})]})}function pa({phone:r}){const[s,t]=a.useState(!1);if(!r)return e.jsx("span",{className:"text-muted",children:"Not provided"});const o=i=>{let n=i.replace(/\D/g,"");return n.startsWith("0")&&n.length===10&&(n="94"+n.substring(1)),`https://wa.me/${n}`},l=i=>`tel:${i.replace(/[^\d+]/g,"")}`;return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"contact-number-link",onClick:()=>t(!0),children:r}),s&&e.jsx("div",{className:"contact-choice-overlay",onClick:i=>i.target===i.currentTarget&&t(!1),children:e.jsxs("div",{className:"contact-choice-card",children:[e.jsxs("div",{className:"contact-choice-header",children:[e.jsx("h3",{className:"contact-choice-title",children:"Contact Options"}),e.jsx("button",{className:"contact-choice-close",onClick:()=>t(!1),children:"×"})]}),e.jsxs("div",{className:"contact-choice-body",children:[e.jsxs("a",{href:l(r),className:"contact-choice-btn call",onClick:()=>t(!1),children:[e.jsx("span",{children:"📞"}),e.jsx("span",{children:"Call Phone"})]}),e.jsxs("a",{href:o(r),target:"_blank",rel:"noopener noreferrer",className:"contact-choice-btn whatsapp",onClick:()=>t(!1),children:[e.jsx("span",{children:"💬"}),e.jsx("span",{children:"WhatsApp Message"})]})]})]})})]})}function xa({stId:r,onClose:s}){var E,T,z,N,j,J,ee,te,ie,ce,le;const[t,o]=a.useState(null),[l,i]=a.useState(!0),[n,d]=a.useState("overview"),[v,f]=a.useState(null),[_,c]=a.useState(!1),u=(p,$)=>{p&&navigator.clipboard.writeText(p).then(()=>{f($),setTimeout(()=>f(null),1800)})},y=()=>{var M,H,V;if(!t)return;const p=((M=t.letters)==null?void 0:M.filter(B=>B.status==="done"||B.status==="completed").length)||0,$=((H=t.letters)==null?void 0:H.length)||0,W=`STUDENT DOSSIER: ${t.preferred_name||t.name}
ID: ${t.st_id}
Full Name: ${t.name||"—"}
Calling Name: ${t.preferred_name||"—"}
Academic Level: Year ${t.level||"—"}
Society Position: ${t.st_position||"General Member"}
Function: ${t.member_function||"Unassigned"}
Email: ${t.email||"—"}
Phone: ${t.mobile_number||"—"}
Attendance Rate: ${x}% (${w}/${g} events)
OC Positions: ${((V=t.oc)==null?void 0:V.length)||0}
Letter Requests: ${$} (${p} Issued)
LinkedIn: ${t.linkedin_url||"None"}`;navigator.clipboard.writeText(W).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})};if(a.useEffect(()=>{if(!r)return;let p=!0;const $=M=>{M.key==="Escape"&&(s==null||s())};return window.addEventListener("keydown",$),(async()=>{i(!0);try{const M=typeof r=="string"?r.trim():String(r),{data:H,error:V}=await R.from("members").select("*").eq("st_id",M).maybeSingle();if(V)throw V;if(!H){alert(`Student profile not found for ID: ${M}`),s==null||s();return}const B=H.st_id||M,{data:G,error:q}=await R.from("oc").select("oc_position, apply_status, events(name, date), functions(function_name)").eq("st_id",B);if(q)throw q;const{data:de,error:se}=await R.from("attendance").select("attend, events(name, date)").eq("st_id",B);if(se)throw se;const{data:Q,error:Z}=await R.from("letter_requests").select("id, st_id, name_on_letter, selected_events, additional_details, status, created_at").eq("st_id",B).order("created_at",{ascending:!1});Z&&console.warn("Could not fetch letter requests:",Z),p&&o({...H,oc:G||[],attendance:de||[],letters:Q||[]})}catch(M){p&&(alert("Error loading profile: "+M.message),s==null||s())}finally{p&&i(!1)}})(),()=>{p=!1,window.removeEventListener("keydown",$)}},[r,s]),!r)return null;const g=((E=t==null?void 0:t.attendance)==null?void 0:E.length)||0,w=((T=t==null?void 0:t.attendance)==null?void 0:T.filter(p=>p.attend==="YES").length)||0,x=g>0?Math.round(w/g*100):0,D=((z=t==null?void 0:t.oc)==null?void 0:z.filter(p=>p.apply_status==="Accept").length)||0,k=((N=t==null?void 0:t.letters)==null?void 0:N.filter(p=>p.status==="done"||p.status==="completed").length)||0,C=((t==null?void 0:t.mobile_number)||"").replace(/\D/g,""),S=C?`https://wa.me/${C.startsWith("0")?"94"+C.substring(1):C}`:null,m=t!=null&&t.linkedin_url?t.linkedin_url.trim().toLowerCase().startsWith("http")?t.linkedin_url.trim():`https://${t.linkedin_url.trim()}`:null,b=p=>{if(!p)return"S";const $=p.trim().split(/\s+/);return $.length===1?$[0].substring(0,2).toUpperCase():($[0][0]+$[$.length-1][0]).toUpperCase()};return e.jsx("div",{className:"fixed inset-0 z-[120] bg-[#08090a]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150",onClick:p=>p.target===p.currentTarget&&(s==null?void 0:s()),role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"bg-[#0f1011] border border-[#23252a] rounded-[12px] shadow-[0_24px_48px_rgba(0,0,0,0.8),inset_0_0_0_1px_#23252a] w-full max-w-[680px] max-h-[92vh] flex flex-col overflow-hidden text-[#d0d6e0] my-auto",children:[e.jsxs("div",{className:"px-5 py-3.5 border-b border-[#23252a] bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] tracking-wider text-[#8a8f98] uppercase bg-[#161718] border border-[#23252a] px-2 py-0.5 rounded-[4px] font-[510]",children:"STUDENT DOSSIER"}),t&&e.jsx("span",{className:"font-berkeley-mono text-[11px] text-[#62666d] truncate",children:t.st_id})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[t&&e.jsx("button",{type:"button",onClick:y,className:"h-7 px-2.5 rounded-[6px] bg-[#161718] border border-[#23252a] text-[#8a8f98] hover:text-[#ffffff] hover:border-[#383b3f] transition-colors font-berkeley-mono text-[11px] flex items-center gap-1.5",title:"Copy dossier summary to clipboard",children:_?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}),e.jsx("span",{className:"text-[#27a644]",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(jt,{className:"w-3 h-3"}),e.jsx("span",{children:"Share"})]})}),e.jsx("button",{type:"button",onClick:s,className:"w-7 h-7 rounded-[6px] bg-[#161718] border border-[#23252a] text-[#8a8f98] hover:text-[#ffffff] hover:border-[#383b3f] transition-colors flex items-center justify-center text-[13px]",title:"Close (ESC)",children:e.jsx(ae,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"overflow-y-auto p-5 space-y-5 flex-1 custom-scrollbar",children:l||!t?e.jsxs("div",{className:"py-16 text-center flex flex-col items-center justify-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-[#e4f222] border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"font-berkeley-mono text-[12px] text-[#8a8f98]",children:"Retrieving student dossier telemetry..."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-[#161718]/40 border border-[#23252a] rounded-[10px] p-4",children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[t.profile_image_url?e.jsx("img",{src:t.profile_image_url,alt:t.preferred_name||t.name,className:"w-20 h-20 rounded-[10px] object-cover border border-[#23252a] shadow-sm bg-[#161718]",onError:p=>{p.target.onerror=null,p.target.src="https://api.dicebear.com/7.x/initials/svg?seed="+encodeURIComponent(t.preferred_name||t.name)}}):e.jsx("div",{className:"w-20 h-20 rounded-[10px] bg-[#161718] border border-[#23252a] flex items-center justify-center font-berkeley-mono text-[24px] font-[510] text-[#d0d6e0]",children:b(t.preferred_name||t.name)}),e.jsx("span",{className:`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#0f1011] ${t.status==="active"||t.status==="approved"||!t.status?"bg-[#27a644]":"bg-[#f59e0b]"}`,title:t.status||"Active"})]}),e.jsxs("div",{className:"flex-1 min-w-0 space-y-1.5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-baseline gap-2 flex-wrap",children:[e.jsx("h1",{className:"text-[20px] sm:text-[22px] font-[510] text-[#ffffff] tracking-[-0.022em] leading-tight",children:t.preferred_name||t.name}),t.preferred_name&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#8a8f98] bg-[#161718] border border-[#23252a] px-1.5 py-0.5 rounded-[3px]",children:"Calling Name"})]}),t.preferred_name&&t.name&&e.jsxs("div",{className:"text-[12.5px] text-[#8a8f98] mt-0.5 font-[400] truncate",children:["Full Name: ",e.jsx("span",{className:"text-[#d0d6e0] font-[510]",children:t.name})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap pt-0.5",children:[e.jsxs("button",{type:"button",onClick:()=>u(t.st_id,"st_id"),className:"font-berkeley-mono text-[11px] text-[#d0d6e0] bg-[#161718] hover:bg-[#23252a] border border-[#23252a] px-2 py-0.5 rounded-[4px] inline-flex items-center gap-1.5 transition-colors group/copy",title:"Click to copy Student ID",children:[e.jsx("span",{children:t.st_id}),v==="st_id"?e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(re,{className:"w-3 h-3 text-[#62666d] group-hover/copy:text-white transition-colors"})]}),t.level?e.jsx("span",{className:`font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] border uppercase ${t.level>4?"bg-[#161718] text-[#8a8f98] border-[#23252a]":"bg-[#6366f1]/10 text-[#818cf8] border-[#6366f1]/30"}`,children:t.level>4?"ALUMNI":`YEAR ${t.level}`}):null,t.st_position&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#e4f222]/10 text-[#e4f222] border border-[#e4f222]/30",children:t.st_position}),t.member_function&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#161718] text-[#d0d6e0] border border-[#23252a]",children:t.member_function})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-berkeley-mono text-[11px]",children:[e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#62666d] text-[10px] uppercase block",children:"Attendance Rate"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsxs("span",{className:"text-[15px] font-[510] text-[#ffffff]",children:[x,"%"]}),e.jsxs("span",{className:"text-[#8a8f98] text-[10px]",children:[w,"/",g]})]}),e.jsx("div",{className:"w-full bg-[#08090a] h-1 rounded-full overflow-hidden",children:e.jsx("div",{className:"bg-[#27a644] h-full rounded-full transition-all duration-300",style:{width:`${x}%`}})})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#62666d] text-[10px] uppercase block",children:"OC Engagements"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#ffffff]",children:((j=t.oc)==null?void 0:j.length)||0}),e.jsxs("span",{className:"text-[#8a8f98] text-[10px]",children:[D," Accepted"]})]}),e.jsx("div",{className:"text-[10px] text-[#8a8f98] truncate",children:((J=t.oc)==null?void 0:J.length)>0?"Active committee":"No assignments"})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#62666d] text-[10px] uppercase block",children:"Letter Requests"}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx("span",{className:"text-[15px] font-[510] text-[#ffffff]",children:((ee=t.letters)==null?void 0:ee.length)||0}),e.jsxs("span",{className:"text-[#8a8f98] text-[10px]",children:[k," Issued"]})]}),e.jsx("div",{className:"text-[10px] text-[#8a8f98] truncate",children:((te=t.letters)==null?void 0:te.length)>0?"Dossier logged":"No requests"})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-2.5 space-y-1",children:[e.jsx("span",{className:"text-[#62666d] text-[10px] uppercase block",children:"Membership"}),e.jsx("div",{className:"flex items-baseline justify-between",children:e.jsx("span",{className:"text-[13px] font-[510] text-[#ffffff] uppercase truncate",children:t.role||"Member"})}),e.jsx("div",{className:"text-[10px] text-[#27a644] truncate",children:"✓ Verified Profile"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap bg-[#161718]/40 border border-[#23252a] p-2 rounded-[8px]",children:[t.email?e.jsxs("div",{className:"flex items-center gap-1 bg-[#161718] border border-[#23252a] rounded-[6px] px-2.5 py-1",children:[e.jsx(fe,{className:"w-3.5 h-3.5 text-[#8a8f98]"}),e.jsx("a",{href:`mailto:${t.email}`,className:"text-[11.5px] text-[#d0d6e0] hover:text-[#ffffff] transition-colors truncate max-w-[170px]",title:`Send email to ${t.email}`,children:t.email}),e.jsx("button",{type:"button",onClick:()=>u(t.email,"email"),className:"p-1 text-[#62666d] hover:text-[#ffffff] rounded transition-colors ml-1",title:"Copy Email",children:v==="email"?e.jsx(X,{className:"w-3 h-3 text-[#27a644]"}):e.jsx(re,{className:"w-3 h-3"})})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#62666d] px-2",children:"No email provided"}),t.mobile_number?e.jsxs("div",{className:"flex items-center gap-1 bg-[#161718] border border-[#23252a] rounded-[6px] px-2.5 py-1 font-berkeley-mono text-[11px]",children:[e.jsx(wt,{className:"w-3.5 h-3.5 text-[#8a8f98]"}),e.jsx(pa,{phone:t.mobile_number}),S&&e.jsxs("a",{href:S,target:"_blank",rel:"noreferrer",className:"ml-1 text-[10px] text-[#27a644] hover:underline flex items-center gap-0.5",title:"Chat on WhatsApp",children:[e.jsx(Nt,{className:"w-3 h-3"}),e.jsx("span",{children:"WA"})]})]}):e.jsx("span",{className:"text-[11px] font-berkeley-mono text-[#62666d] px-2",children:"No phone provided"}),m&&e.jsxs("a",{href:m,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 bg-[#161718] hover:bg-[#23252a] border border-[#23252a] text-[#818cf8] px-2.5 py-1 rounded-[6px] font-berkeley-mono text-[11px] transition-colors ml-auto",title:"Open LinkedIn in new tab",children:[e.jsx("span",{children:"LinkedIn Profile"}),e.jsx(Ke,{className:"w-3 h-3"})]})]}),e.jsxs("div",{className:"border-b border-[#23252a] flex items-center gap-1 font-berkeley-mono text-[11.5px] overflow-x-auto",children:[e.jsxs("button",{type:"button",onClick:()=>d("overview"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${n==="overview"?"border-[#e4f222] text-[#ffffff]":"border-transparent text-[#8a8f98] hover:text-[#d0d6e0]"}`,children:[e.jsx(Ge,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Dossier Overview"})]}),e.jsxs("button",{type:"button",onClick:()=>d("attendance"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${n==="attendance"?"border-[#e4f222] text-[#ffffff]":"border-transparent text-[#8a8f98] hover:text-[#d0d6e0]"}`,children:[e.jsx(oe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Attendance Record"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#161718] border border-[#23252a] text-[#8a8f98]",children:((ie=t.attendance)==null?void 0:ie.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>d("oc"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${n==="oc"?"border-[#e4f222] text-[#ffffff]":"border-transparent text-[#8a8f98] hover:text-[#d0d6e0]"}`,children:[e.jsx(Se,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Committee (OC)"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#161718] border border-[#23252a] text-[#8a8f98]",children:((ce=t.oc)==null?void 0:ce.length)||0})]}),e.jsxs("button",{type:"button",onClick:()=>d("letters"),className:`pb-2 px-3 transition-colors border-b-2 font-[510] flex items-center gap-1.5 whitespace-nowrap ${n==="letters"?"border-[#e4f222] text-[#ffffff]":"border-transparent text-[#8a8f98] hover:text-[#d0d6e0]"}`,children:[e.jsx(Pe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Letters"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded-full bg-[#161718] border border-[#23252a] text-[#8a8f98]",children:((le=t.letters)==null?void 0:le.length)||0})]})]}),e.jsxs("div",{children:[n==="overview"&&e.jsx("div",{className:"space-y-3 font-sans",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#62666d] uppercase",children:"Full Legal Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#ffffff]",children:t.name||"—"})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#62666d] uppercase",children:"Preferred Calling Name"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#e4f222]",children:t.preferred_name||e.jsx("span",{className:"text-[#62666d] italic",children:"Not provided"})})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#62666d] uppercase",children:"Functional Division"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#ffffff]",children:t.member_function||e.jsx("span",{className:"text-[#62666d]",children:"General Pool"})})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#62666d] uppercase",children:"Society Position / Rank"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#ffffff]",children:t.st_position||"Active Society Member"})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#62666d] uppercase",children:"Academic Standing"}),e.jsx("div",{className:"text-[13px] font-[510] text-[#ffffff]",children:t.level?`Undergraduate Year ${t.level}`:"Undergraduate"})]}),e.jsxs("div",{className:"bg-[#161718] border border-[#23252a] rounded-[8px] p-3 space-y-1",children:[e.jsx("span",{className:"font-berkeley-mono text-[10px] text-[#62666d] uppercase",children:"Profile Registration Date"}),e.jsx("div",{className:"font-berkeley-mono text-[12px] text-[#8a8f98]",children:t.created_at?new Date(t.created_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"Legacy Database Record"})]})]})}),n==="attendance"&&e.jsx("div",{className:"space-y-3",children:t.attendance.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#161718] border border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#8a8f98] space-y-1",children:[e.jsx(oe,{className:"w-5 h-5 mx-auto text-[#62666d]"}),e.jsx("p",{children:"No event attendance records on file for this student."})]}):e.jsx("div",{className:"border border-[#23252a] rounded-[8px] overflow-hidden bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#161718] border-b border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Name"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event Date"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Attendance"})]})}),e.jsx("tbody",{className:"divide-y divide-[#23252a]",children:t.attendance.map((p,$)=>{var W,M;return e.jsxs("tr",{className:"hover:bg-[#161718]/60 transition-colors",children:[e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("span",{className:"font-[510] text-[#ffffff] block",children:((W=p.events)==null?void 0:W.name)||"Official Society Session"})}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#8a8f98]",children:((M=p.events)==null?void 0:M.date)||"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${p.attend==="YES"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30"}`,children:p.attend==="YES"?e.jsxs(e.Fragment,{children:[e.jsx(ke,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Attended"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Le,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:"Absent"})]})})})]},$)})})]})})})}),n==="oc"&&e.jsx("div",{className:"space-y-3",children:t.oc.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#161718] border border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#8a8f98] space-y-1",children:[e.jsx(Se,{className:"w-5 h-5 mx-auto text-[#62666d]"}),e.jsx("p",{children:"No organizing committee appointments logged for this student."})]}):e.jsx("div",{className:"border border-[#23252a] rounded-[8px] overflow-hidden bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#161718] border-b border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Event & Team"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Assigned Role(s)"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Selection Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#23252a]",children:t.oc.map((p,$)=>{var W,M;return e.jsxs("tr",{className:"hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsx("span",{className:"font-[510] text-[#ffffff] block",children:((W=p.events)==null?void 0:W.name)||"Official Event"}),e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-[#818cf8]",children:((M=p.functions)==null?void 0:M.function_name)||"General Committee"})]}),e.jsx("td",{className:"py-2.5 px-3",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:p.oc_position?p.oc_position.split(",").map((H,V)=>e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#6366f1]/10 text-[#818cf8] border border-[#6366f1]/30",children:H.trim()},V)):e.jsx("span",{className:"font-berkeley-mono text-[10.5px] px-2 py-0.5 rounded-[4px] bg-[#161718] text-[#8a8f98] border border-[#23252a]",children:"Committee Member"})})}),e.jsx("td",{className:"py-2.5 px-3 text-right",children:p.apply_status==="Accept"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#27a644]/10 text-[#27a644] border border-[#27a644]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(X,{className:"w-2.5 h-2.5"})," Accepted"]}):p.apply_status==="Reject"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#eb5757]/10 text-[#eb5757] border border-[#eb5757]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(ae,{className:"w-2.5 h-2.5"})," Rejected"]}):p.apply_status==="Interview Scheduled"?e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#02b8cc]/10 text-[#02b8cc] border border-[#02b8cc]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(pe,{className:"w-2.5 h-2.5"})," Interview"]}):e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 uppercase inline-flex items-center gap-1",children:[e.jsx(pe,{className:"w-2.5 h-2.5"})," Pending"]})})]},$)})})]})})})}),n==="letters"&&e.jsx("div",{className:"space-y-3",children:t.letters.length===0?e.jsxs("div",{className:"py-10 text-center bg-[#161718] border border-[#23252a] rounded-[8px] font-berkeley-mono text-[12px] text-[#8a8f98] space-y-1",children:[e.jsx(Pe,{className:"w-5 h-5 mx-auto text-[#62666d]"}),e.jsx("p",{children:"No letter requests or issued certificates found for this student."})]}):e.jsx("div",{className:"border border-[#23252a] rounded-[8px] overflow-hidden bg-[#161718]/30",children:e.jsx("div",{className:"max-h-[260px] overflow-y-auto",children:e.jsxs("table",{className:"w-full text-left font-sans text-[12.5px]",children:[e.jsx("thead",{className:"sticky top-0 bg-[#161718] border-b border-[#23252a] font-berkeley-mono text-[10px] uppercase text-[#8a8f98]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Document & Events"}),e.jsx("th",{className:"py-2 px-3 font-[510]",children:"Submitted"}),e.jsx("th",{className:"py-2 px-3 font-[510] text-right",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-[#23252a]",children:t.letters.map(p=>e.jsxs("tr",{className:"hover:bg-[#161718]/60 transition-colors",children:[e.jsxs("td",{className:"py-2.5 px-3",children:[e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx("span",{className:"font-[510] text-[#ffffff]",children:"Appreciation Letter"}),p.name_on_letter&&e.jsxs("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#161718] text-[#8a8f98] border border-[#23252a]",children:["Name: ",p.name_on_letter]})]}),p.selected_events&&Array.isArray(p.selected_events)&&p.selected_events.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:p.selected_events.map(($,W)=>e.jsx("span",{className:"font-berkeley-mono text-[10px] px-1.5 py-0.5 rounded-[3px] bg-[#6366f1]/10 text-[#818cf8] border border-[#6366f1]/30",children:$},W))}),p.additional_details&&e.jsx("p",{className:"text-[11px] text-[#8a8f98] mt-1 line-clamp-2",children:p.additional_details})]}),e.jsx("td",{className:"py-2.5 px-3 font-berkeley-mono text-[11px] text-[#8a8f98] whitespace-nowrap align-top",children:p.created_at?new Date(p.created_at).toLocaleDateString():"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right whitespace-nowrap align-top",children:e.jsx("span",{className:`font-berkeley-mono text-[10px] px-2 py-0.5 rounded-[4px] border uppercase inline-flex items-center gap-1 ${p.status==="done"||p.status==="completed"?"bg-[#27a644]/10 text-[#27a644] border-[#27a644]/30":p.status==="inprogress"?"bg-[#818cf8]/10 text-[#818cf8] border-[#818cf8]/30":p.status==="rejected"?"bg-[#eb5757]/10 text-[#eb5757] border-[#eb5757]/30":"bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30"}`,children:p.status==="done"||p.status==="completed"?e.jsxs(e.Fragment,{children:[e.jsx(ke,{className:"w-2.5 h-2.5 text-[#27a644]"}),e.jsx("span",{children:"Issued"})]}):p.status==="inprogress"?e.jsxs(e.Fragment,{children:[e.jsx(pe,{className:"w-2.5 h-2.5 text-[#818cf8]"}),e.jsx("span",{children:"In Progress"})]}):p.status==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx(Le,{className:"w-2.5 h-2.5 text-[#eb5757]"}),e.jsx("span",{children:"Rejected"})]}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{className:"w-2.5 h-2.5 text-[#f59e0b]"}),e.jsx("span",{children:"Pending"})]})})})]},p.id))})]})})})})]})]})}),e.jsxs("div",{className:"px-5 py-3.5 border-t border-[#23252a] bg-[#08090a]/50 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"font-berkeley-mono text-[11px] text-[#62666d] hidden sm:block",children:["Press ",e.jsx("kbd",{className:"bg-[#161718] border border-[#23252a] px-1 py-0.5 rounded text-[#8a8f98]",children:"ESC"})," to exit"]}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsxs("button",{type:"button",onClick:y,className:"h-8 px-3.5 rounded-[6px] bg-[#161718] hover:bg-[#23252a] border border-[#23252a] text-[#d0d6e0] hover:text-[#ffffff] font-berkeley-mono text-[11.5px] transition-colors flex items-center gap-1.5",children:[_?e.jsx(X,{className:"w-3.5 h-3.5 text-[#27a644]"}):e.jsx(re,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:_?"Copied":"Copy Summary"})]}),e.jsx("button",{type:"button",onClick:s,className:"h-8 px-4 rounded-[6px] bg-[#e4f222] text-[#08090a] font-[510] text-[12.5px] hover:bg-[#d5e31f] transition-all flex items-center gap-1.5 shadow-sm active:scale-[0.98]",children:e.jsx("span",{children:"Close Dossier"})})]})]})]})})}const Ze=a.createContext({activeStudentId:null,openStudentProfile:()=>{},closeStudentProfile:()=>{}});function ma({children:r}){const[s,t]=a.useState(null),o=a.useCallback(i=>{i&&typeof i=="string"?t(i.trim()):i&&t(String(i))},[]),l=a.useCallback(()=>{t(null)},[]);return e.jsxs(Ze.Provider,{value:{activeStudentId:s,openStudentProfile:o,closeStudentProfile:l},children:[r,s&&e.jsx(xa,{stId:s,onClose:l})]})}function fa(){const r=a.useContext(Ze);return r||{activeStudentId:null,openStudentProfile:s=>{console.warn("StudentProfileProvider missing, cannot open:",s)},closeStudentProfile:()=>{}}}function wa({stId:r,name:s,subtext:t,showIcon:o=!0,showAvatar:l=!1,showId:i=!1,avatarUrl:n,className:d="",size:v="md",children:f}){const{openStudentProfile:_}=fa(),c=s||f||(r?`Student (${r})`:"Unknown Student");if(!r)return e.jsx("span",{className:`text-gray-600 dark:text-[#8a8f98] font-[400] ${d}`,children:c});const u=w=>{w.stopPropagation(),_(r)},y={sm:"text-[12px] gap-1",md:"text-[13px] gap-1.5",lg:"text-[15px] gap-2"},g=w=>{if(!w)return"S";const x=w.trim().split(/\s+/);return x.length===1?x[0].substring(0,2).toUpperCase():(x[0][0]+x[x.length-1][0]).toUpperCase()};return e.jsxs("button",{type:"button",onClick:u,title:`Inspect Student Dossier (${r})`,className:`inline-flex items-center text-left group/student transition-all duration-150 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-indigo-500/50 dark:focus:ring-[#e4f222]/50 ${y[v]||y.md} ${d}`,children:[l&&e.jsx("span",{className:"w-6 h-6 rounded-[4px] bg-gray-100 dark:bg-[#161718] border border-gray-200 dark:border-[#23252a] overflow-hidden flex items-center justify-center font-berkeley-mono text-[10px] text-gray-700 dark:text-[#ffffff] flex-shrink-0 group-hover/student:border-indigo-500/40 dark:group-hover/student:border-[#e4f222]/40 transition-colors",children:n?e.jsx("img",{src:n,alt:"",className:"w-full h-full object-cover"}):g(c)}),e.jsxs("span",{className:"flex flex-col min-w-0",children:[e.jsxs("span",{className:"flex items-center gap-1 leading-snug",children:[e.jsx("span",{className:"font-[510] text-gray-900 dark:text-[#ffffff] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] transition-colors truncate",children:c}),o&&e.jsx("span",{className:"inline-flex items-center text-gray-400 dark:text-[#62666d] group-hover/student:text-indigo-600 dark:group-hover/student:text-[#e4f222] group-hover/student:translate-x-0.5 transition-all flex-shrink-0","aria-hidden":"true",children:e.jsx(Ke,{className:"w-2.5 h-2.5 opacity-60 group-hover/student:opacity-100"})})]}),(t||i)&&e.jsx("span",{className:"font-berkeley-mono text-[10.5px] text-gray-500 dark:text-[#8a8f98] group-hover/student:text-gray-700 dark:group-hover/student:text-[#d0d6e0] transition-colors truncate",children:t||r})]})]})}const et=a.createContext(null),ve=[{id:"cycle-2024-2025",name:"2024/2025",startDate:"2024-01-01",endDate:"2025-12-31",isActive:!0,isVisible:!0,description:"ADSS Academic Cycle 2024/2025"},{id:"cycle-2023-2024",name:"2023/2024",startDate:"2023-01-01",endDate:"2023-12-31",isActive:!1,isVisible:!0,description:"ADSS Academic Cycle 2023/2024"}];function ua({children:r}){const[s,t]=a.useState(()=>{try{const x=localStorage.getItem("adss_cycles_cache");return x?JSON.parse(x):ve}catch{return ve}}),[o,l]=a.useState(()=>{try{return localStorage.getItem("adss_active_cycle_id")||"cycle-2024-2025"}catch{return"cycle-2024-2025"}}),[i,n]=a.useState(()=>{try{return localStorage.getItem("adss_selected_cycle_id")||"active"}catch{return"active"}}),[d,v]=a.useState(!0),f=a.useMemo(()=>s.find(x=>x.id===o||x.isActive)||s[0]||ve[0],[s,o]),_=a.useMemo(()=>i==="all"?null:i==="active"?f:s.find(x=>x.id===i)||f,[s,i,f]),c=a.useMemo(()=>s.filter(x=>x.isVisible!==!1||x.id===(f==null?void 0:f.id)),[s,f]),u=a.useCallback(async()=>{try{const{data:x,error:D}=await R.from("system_settings").select("key, value").in("key",["academic_cycles","active_cycle_id"]);if(!D&&x&&x.length>0){const k=x.find(b=>b.key==="academic_cycles"),C=x.find(b=>b.key==="active_cycle_id");let S=null;if(k&&k.value)try{const b=JSON.parse(k.value);Array.isArray(b)&&b.length>0&&(S=b)}catch(b){console.error("Failed to parse academic_cycles:",b)}let m=(C==null?void 0:C.value)||null;if(S){if(!m){const b=S.find(E=>E.isActive);m=b?b.id:S[0].id}t(S),l(m);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(S)),localStorage.setItem("adss_active_cycle_id",m)}catch{}}}}catch(x){console.warn("Could not load cycles from DB, using fallback:",x)}finally{v(!1)}},[]);a.useEffect(()=>{u();const x=R.channel("system-settings-cycles-channel").on("postgres_changes",{event:"*",schema:"public",table:"system_settings"},D=>{var C;const k=(C=D.new)==null?void 0:C.key;(k==="academic_cycles"||k==="active_cycle_id")&&u()}).subscribe();return()=>{R.removeChannel(x)}},[u]);const y=a.useCallback(x=>{n(x);try{localStorage.setItem("adss_selected_cycle_id",x)}catch{}},[]),g=a.useCallback((x,D=_)=>{if(!D)return!0;if(!x)return!1;try{let k="";return typeof x=="string"?k=x.substring(0,10):x instanceof Date?k=x.toISOString().substring(0,10):k=String(x).substring(0,10),!(D.startDate&&k<D.startDate||D.endDate&&k>D.endDate)}catch{return!0}},[_]),w=a.useCallback(async(x,D)=>{var k,C;try{const S=D||((k=x.find(T=>T.isActive))==null?void 0:k.id)||((C=x[0])==null?void 0:C.id),m=x.map(T=>({...T,isActive:T.id===S})),[b,E]=await Promise.all([R.from("system_settings").upsert({key:"academic_cycles",value:JSON.stringify(m)},{onConflict:"key"}),R.from("system_settings").upsert({key:"active_cycle_id",value:S},{onConflict:"key"})]);if(b.error)throw b.error;if(E.error)throw E.error;t(m),l(S);try{localStorage.setItem("adss_cycles_cache",JSON.stringify(m)),localStorage.setItem("adss_active_cycle_id",S)}catch{}return{success:!0}}catch(S){return console.error("Error saving cycles to system_settings:",S),{success:!1,error:S.message||"Failed to save cycles"}}},[]);return e.jsx(et.Provider,{value:{cycles:s,visibleCycles:c,activeCycle:f,activeCycleId:o,selectedCycleId:i,selectedCycle:_,setSelectedCycleId:y,isWithinCycle:g,saveCycles:w,reloadCycles:u,loading:d},children:r})}function Na(){const r=a.useContext(et);if(!r)throw new Error("useCycle must be used within a CycleProvider");return r}st.createRoot(document.getElementById("root")).render(e.jsx(Ve.StrictMode,{children:e.jsx(ua,{children:e.jsx(ma,{children:e.jsx(At,{children:e.jsx(ha,{})})})})}));export{ne as A,$t as C,Bt as M,pa as P,wa as S,xa as a,Na as b,fa as c,ia as g,R as s,It as u};
