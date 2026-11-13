import{j as a}from"./vendor-react-DFHPY69B.js";import{u as m,A as b,C as f}from"./index-CYWFFg8A.js";import{a as u,aB as k}from"./vendor-icons-DnMZd3Dk.js";import"./vendor-supabase-DqvqN50L.js";import"./vendor-6pgEYSA5.js";function A({onBackToLanding:i,role:o="guest",session:e={},theme:r}){const t=(e==null?void 0:e.role)||o||"guest",l=t==="admin"||t==="editor",{messages:s,input:c,setInput:d,loading:n,sendMessage:g,clearChat:h}=m(),p=()=>{s.length!==0&&window.confirm("Clear active ADSS Intelligence conversation history?")&&h()},x=t==="admin"?"STAFF COMMAND":t==="editor"?"EDITOR ACCESS":t==="member"?"MEMBER PORTAL":"GUEST ACCESS";return a.jsxs("div",{className:"assistant-page-container","data-theme":r,children:[a.jsxs("div",{className:"assistant-page-header",children:[a.jsxs("div",{className:"assistant-page-title-group",children:[i&&a.jsxs("button",{className:"assistant-back-btn",onClick:i,"aria-label":"Back to landing page",children:[a.jsx(u,{className:"w-4 h-4"}),a.jsx("span",{children:"Back"})]}),a.jsx("div",{className:"assistant-header-emblem",children:a.jsx(b,{size:24,variant:"brand",animate:n})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[a.jsx("h1",{className:"assistant-main-title",children:"ADSS Portal Intelligence"}),a.jsx("span",{className:"assistant-telemetry-tag",children:x}),a.jsx("span",{className:"assistant-grounded-tag",children:"GROUNDED V2.6"})]}),a.jsx("p",{className:"assistant-main-sub",children:l?"Autonomous intelligence engine grounded in ADSS Constitution, member directory, attendance logs, and society workflows.":"Instant precision answers regarding membership registration, event check-in, OC recruitment, and official letters."})]})]}),s.length>0&&a.jsxs("button",{className:"assistant-clear-btn",onClick:p,disabled:n,title:"Clear conversation history",children:[a.jsx(k,{className:"w-3.5 h-3.5 assistant-clear-icon"}),a.jsx("span",{className:"font-berkeley-mono text-[11px] assistant-clear-text",children:"CLEAR CHAT"})]})]}),a.jsx("div",{className:"assistant-chat-card",children:a.jsx(f,{messages:s,loading:n,input:c,onInputChange:d,onSendMessage:g,compact:!1,role:t,theme:r})}),a.jsx("style",{children:`
        .assistant-page-container {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 48px);
          max-width: 1200px;
          margin: 0 auto;
          gap: 16px;
          color: #d0d6e0;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }

        .assistant-page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0 16px;
          border-bottom: 1px solid #23252a;
          flex-shrink: 0;
          gap: 16px;
        }

        .assistant-page-title-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .assistant-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0f1011;
          border: 1px solid #23252a;
          border-radius: 6px;
          padding: 6px 12px;
          color: #d0d6e0;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }

        .assistant-back-btn:hover {
          background: #161718;
          border-color: #383b3f;
        }

        .assistant-header-emblem {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: #0f1011;
          border: 1px solid #23252a;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px 0px, rgb(35, 37, 42) 0px 0px 0px 1px inset;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .assistant-main-title {
          font-size: 20px;
          font-weight: 510;
          color: #ffffff;
          letter-spacing: -0.018em;
          margin: 0;
          line-height: 1.2;
        }

        .assistant-telemetry-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #8a8f98;
          background: #161718;
          border: 1px solid #23252a;
          border-radius: 4px;
          padding: 1px 6px;
          letter-spacing: 0.02em;
        }

        .assistant-grounded-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #e4f222;
          background: rgba(228, 242, 34, 0.08);
          border: 1px solid rgba(228, 242, 34, 0.2);
          border-radius: 4px;
          padding: 1px 6px;
          letter-spacing: 0.02em;
        }

        .assistant-main-sub {
          font-size: 13px;
          color: #8a8f98;
          margin: 4px 0 0;
          line-height: 1.4;
          max-width: 650px;
        }

        .assistant-clear-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0f1011;
          border: 1px solid #23252a;
          border-radius: 6px;
          padding: 6px 12px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }

        .assistant-clear-icon {
          color: #8a8f98;
          transition: color 0.15s;
        }

        .assistant-clear-text {
          color: #8a8f98;
          transition: color 0.15s;
        }

        .assistant-clear-btn:hover {
          background: #161718;
          border-color: #383b3f;
        }

        .assistant-clear-btn:hover .assistant-clear-text,
        .assistant-clear-btn:hover .assistant-clear-icon {
          color: #ffffff;
        }

        .assistant-chat-card {
          flex: 1;
          background: #0f1011;
          border: 1px solid #23252a;
          border-radius: 12px;
          box-shadow: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px, rgb(35, 37, 42) 0px 0px 0px 1px inset;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        /* ─── Light Mode Theme Support ─── */
        [data-theme='light'] .assistant-page-container,
        .assistant-page-container[data-theme='light'] {
          color: #18181b;
        }

        [data-theme='light'] .assistant-page-header,
        .assistant-page-container[data-theme='light'] .assistant-page-header {
          border-bottom-color: #e4e4e7;
        }

        [data-theme='light'] .assistant-back-btn,
        .assistant-page-container[data-theme='light'] .assistant-back-btn {
          background: #ffffff;
          border-color: #e4e4e7;
          color: #18181b;
        }

        [data-theme='light'] .assistant-back-btn:hover,
        .assistant-page-container[data-theme='light'] .assistant-back-btn:hover {
          background: #f4f4f5;
          border-color: #d4d4d8;
          color: #09090b;
        }

        [data-theme='light'] .assistant-header-emblem,
        .assistant-page-container[data-theme='light'] .assistant-header-emblem {
          background: #18181b;
          border-color: #27272a;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        }

        [data-theme='light'] .assistant-main-title,
        .assistant-page-container[data-theme='light'] .assistant-main-title {
          color: #09090b;
        }

        [data-theme='light'] .assistant-telemetry-tag,
        .assistant-page-container[data-theme='light'] .assistant-telemetry-tag {
          color: #52525b;
          background: #f4f4f5;
          border-color: #e4e4e7;
        }

        [data-theme='light'] .assistant-grounded-tag,
        .assistant-page-container[data-theme='light'] .assistant-grounded-tag {
          color: #854d0e;
          background: #fef9c3;
          border-color: #fde047;
          font-weight: 500;
        }

        [data-theme='light'] .assistant-main-sub,
        .assistant-page-container[data-theme='light'] .assistant-main-sub {
          color: #52525b;
        }

        [data-theme='light'] .assistant-clear-btn,
        .assistant-page-container[data-theme='light'] .assistant-clear-btn {
          background: #ffffff;
          border-color: #e4e4e7;
        }

        [data-theme='light'] .assistant-clear-btn:hover,
        .assistant-page-container[data-theme='light'] .assistant-clear-btn:hover {
          background: #fef2f2;
          border-color: #fecaca;
        }

        [data-theme='light'] .assistant-clear-icon,
        .assistant-page-container[data-theme='light'] .assistant-clear-icon {
          color: #71717a;
        }

        [data-theme='light'] .assistant-clear-text,
        .assistant-page-container[data-theme='light'] .assistant-clear-text {
          color: #52525b;
        }

        [data-theme='light'] .assistant-clear-btn:hover .assistant-clear-icon,
        [data-theme='light'] .assistant-clear-btn:hover .assistant-clear-text,
        .assistant-page-container[data-theme='light'] .assistant-clear-btn:hover .assistant-clear-icon,
        .assistant-page-container[data-theme='light'] .assistant-clear-btn:hover .assistant-clear-text {
          color: #dc2626;
        }

        [data-theme='light'] .assistant-chat-card,
        .assistant-page-container[data-theme='light'] .assistant-chat-card {
          background: #ffffff;
          border-color: #e4e4e7;
          box-shadow: 0 4px 24px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04);
        }

        @media (max-width: 768px) {
          .assistant-page-container {
            height: calc(100vh - 32px);
            gap: 12px;
          }
          .assistant-page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `})]})}export{A as default};
