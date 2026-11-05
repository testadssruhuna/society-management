import{r as o,j as e}from"./vendor-react-DFHPY69B.js";const r=`-- Run this in Supabase SQL Editor (supabase.com → your project → SQL Editor)

-- 1. Members
CREATE TABLE IF NOT EXISTS members (
  st_id             VARCHAR(50) PRIMARY KEY,
  name              VARCHAR(255) NOT NULL,
  preferred_name    VARCHAR(255),
  email             VARCHAR(255) UNIQUE,
  level             INT,
  st_position       VARCHAR(100),
  member_function   VARCHAR(100),
  mobile_number     VARCHAR(50),
  profile_image_url TEXT,
  linkedin_url      TEXT
);

-- If your members table already exists, run this once:
ALTER TABLE members
ADD COLUMN IF NOT EXISTS preferred_name VARCHAR(255);

ALTER TABLE members
ADD COLUMN IF NOT EXISTS email VARCHAR(255) UNIQUE;

ALTER TABLE members
ADD COLUMN IF NOT EXISTS member_function VARCHAR(100);

ALTER TABLE members
ADD COLUMN IF NOT EXISTS mobile_number VARCHAR(50),
ADD COLUMN IF NOT EXISTS profile_image_url TEXT,
ADD COLUMN IF NOT EXISTS linkedin_url TEXT;


-- 2. Functions (departments / sub-teams)
CREATE TABLE IF NOT EXISTS functions (
  id            BIGSERIAL PRIMARY KEY,
  function_name VARCHAR(100) UNIQUE NOT NULL
);

-- 3. Roles (system access levels)
CREATE TABLE IF NOT EXISTS roles (
  id        BIGSERIAL PRIMARY KEY,
  role_name VARCHAR(50) UNIQUE NOT NULL
);

-- 4. Events
CREATE TABLE IF NOT EXISTS events (
  event_id VARCHAR(50) PRIMARY KEY,
  name     VARCHAR(255) NOT NULL,
  date     DATE NOT NULL,
  oc_st_id VARCHAR(50) REFERENCES members(st_id) ON DELETE SET NULL,
  description TEXT,
  time     VARCHAR(100),
  tally_link TEXT,
  flyer_url TEXT,
  is_public BOOLEAN DEFAULT TRUE,
  self_attendance_enabled BOOLEAN DEFAULT FALSE,
  available_oc_positions TEXT
);

-- If your events table already exists, run this once:
ALTER TABLE events
ADD COLUMN IF NOT EXISTS oc_st_id VARCHAR(50) REFERENCES members(st_id) ON DELETE SET NULL,
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS time VARCHAR(100),
ADD COLUMN IF NOT EXISTS tally_link TEXT,
ADD COLUMN IF NOT EXISTS flyer_url TEXT,
ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT TRUE,
ADD COLUMN IF NOT EXISTS self_attendance_enabled BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS available_oc_positions TEXT;

-- 5. Organizing Committee (per event task assignments)
CREATE TABLE IF NOT EXISTS oc (
  event_id     VARCHAR(50) REFERENCES events(event_id) ON DELETE CASCADE,
  st_id        VARCHAR(50) REFERENCES members(st_id) ON DELETE CASCADE,
  function_id  BIGINT REFERENCES functions(id),
  oc_position  VARCHAR(100),
  apply_status VARCHAR(50) DEFAULT 'Pending',
  UNIQUE (event_id, st_id, function_id)
);

-- If your oc table already exists, run this once:
ALTER TABLE oc
ADD COLUMN IF NOT EXISTS event_id VARCHAR(50) REFERENCES events(event_id) ON DELETE CASCADE;

ALTER TABLE oc
DROP COLUMN IF EXISTS role_id;

DO $$
DECLARE
  pk_name text;
  con_exists boolean;
BEGIN
  SELECT conname INTO pk_name
  FROM pg_constraint
  WHERE conrelid = 'oc'::regclass AND contype = 'p';

  IF pk_name IS NOT NULL THEN
    EXECUTE 'ALTER TABLE oc DROP CONSTRAINT ' || quote_ident(pk_name);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'oc_event_member_function_key'
  ) THEN
    ALTER TABLE oc
    ADD CONSTRAINT oc_event_member_function_key UNIQUE (event_id, st_id, function_id);
  END IF;
END $$;

NOTIFY pgrst, 'reload schema';

-- 6. Attendance
CREATE TABLE IF NOT EXISTS attendance (
  st_id    VARCHAR(50) REFERENCES members(st_id) ON DELETE CASCADE,
  event_id VARCHAR(50) REFERENCES events(event_id) ON DELETE CASCADE,
  attend   VARCHAR(3) CHECK (attend IN ('YES','NO')) DEFAULT 'NO',
  PRIMARY KEY (st_id, event_id)
);

-- 7. Tasks for Organizing Committee
CREATE TABLE IF NOT EXISTS tasks (
  id           BIGSERIAL PRIMARY KEY,
  event_id     VARCHAR(50) REFERENCES events(event_id) ON DELETE CASCADE,
  st_id        VARCHAR(50) REFERENCES members(st_id) ON DELETE CASCADE,
  task_name    TEXT NOT NULL,
  deadline     DATE,
  status       VARCHAR(50) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Completed')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed some default roles
INSERT INTO roles (role_name) VALUES ('Admin'), ('Editor'), ('Member')
ON CONFLICT DO NOTHING;

-- 8. Allow members to update their own contact details
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "members update own" ON members;
CREATE POLICY "members update own" ON members FOR UPDATE TO authenticated
USING (st_id = (SELECT st_id FROM profiles WHERE id = auth.uid()))
WITH CHECK (st_id = (SELECT st_id FROM profiles WHERE id = auth.uid()));

-- 9. Allow members to mark their own attendance
DROP POLICY IF EXISTS "member insert own attendance" ON attendance;
CREATE POLICY "member insert own attendance" ON attendance FOR INSERT TO authenticated
WITH CHECK (
  st_id = (SELECT st_id FROM profiles WHERE id = auth.uid())
  AND EXISTS (
    SELECT 1 FROM events
    WHERE events.event_id = attendance.event_id
      AND events.self_attendance_enabled = true
  )
);

DROP POLICY IF EXISTS "member update own attendance" ON attendance;
CREATE POLICY "member update own attendance" ON attendance FOR UPDATE TO authenticated
USING (
  st_id = (SELECT st_id FROM profiles WHERE id = auth.uid())
)
WITH CHECK (
  st_id = (SELECT st_id FROM profiles WHERE id = auth.uid())
  AND EXISTS (
    SELECT 1 FROM events
    WHERE events.event_id = attendance.event_id
      AND events.self_attendance_enabled = true
  )
);`,c=`VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;function E(){const[t,n]=o.useState({}),i=(a,d)=>{navigator.clipboard.writeText(d),n(s=>({...s,[a]:!0})),setTimeout(()=>n(s=>({...s,[a]:!1})),1800)};return e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("h1",{className:"page-title",children:[e.jsx("span",{className:"icon",children:"⚙"})," Setup Guide"]}),e.jsx("p",{className:"page-subtitle",children:"configure supabase, env vars, and deploy"})]}),e.jsx("div",{className:"alert alert-info",style:{marginBottom:24},children:"ℹ Follow these steps once to get your Society Management System fully live."}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"1"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Create a Supabase Project"}),e.jsxs("p",{children:["Go to ",e.jsx("strong",{children:"supabase.com"}),", sign in, and click ",e.jsx("em",{children:"New Project"}),'. Choose a name (e.g. "society-db"), a strong database password, and the region closest to you. Wait ~2 min for provisioning.']})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"2"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Run the SQL Schema"}),e.jsxs("p",{children:["In your project, go to ",e.jsx("strong",{children:"SQL Editor → New Query"}),", paste the script below, and click ",e.jsx("em",{children:"Run"}),". It creates all 6 tables and prepares event-wise OC assignments."]}),e.jsxs("div",{style:{marginTop:10,position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:10,right:10,zIndex:2},children:e.jsx("button",{className:"copy-btn",onClick:()=>i("sql",r),children:t.sql?"✓ Copied!":"Copy SQL"})}),e.jsx("div",{className:"sql-block",children:r})]})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"3"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Get Your API Credentials"}),e.jsxs("p",{children:["In your Supabase project, go to ",e.jsx("strong",{children:"Settings → API"}),". Copy the ",e.jsx("em",{children:"Project URL"})," and the ",e.jsx("em",{children:"anon / public"})," key."]})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"4"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Configure Environment Variables"}),e.jsxs("p",{children:["Create a file named ",e.jsx("code",{children:".env"})," in the root of your project (next to ",e.jsx("code",{children:"package.json"}),"), and paste your credentials:"]}),e.jsxs("div",{style:{marginTop:10,position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:10,right:10},children:e.jsx("button",{className:"copy-btn",onClick:()=>i("env",c),children:t.env?"✓ Copied!":"Copy"})}),e.jsx("div",{className:"sql-block",children:c})]}),e.jsxs("p",{style:{marginTop:8},children:["Replace the placeholder values with your actual URL and key. ",e.jsx("strong",{children:"Never commit this file to Git"})," — add ",e.jsx("code",{children:".env"})," to your ",e.jsx("code",{children:".gitignore"}),"."]})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"5"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Run Locally"}),e.jsx("p",{children:"Install dependencies and start the dev server:"}),e.jsx("div",{className:"sql-block",children:`npm install
npm run dev`}),e.jsxs("p",{style:{marginTop:8},children:["Open ",e.jsx("strong",{children:"http://localhost:5173"}),' — the green "Supabase Live" dot in the sidebar confirms connection.']})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"6"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Deploy to Vercel (Free)"}),e.jsx("p",{children:"Push your project to a GitHub repo, then:"}),e.jsxs("ol",{style:{marginLeft:20,marginTop:8,lineHeight:2,color:"var(--text2)",fontSize:13},children:[e.jsxs("li",{children:["Log in to ",e.jsx("strong",{children:"vercel.com"})," with GitHub."]}),e.jsxs("li",{children:["Click ",e.jsx("strong",{children:"Add New Project"})," → select your repo."]}),e.jsxs("li",{children:["Under ",e.jsx("strong",{children:"Environment Variables"}),", add ",e.jsx("code",{children:"VITE_SUPABASE_URL"})," and ",e.jsx("code",{children:"VITE_SUPABASE_ANON_KEY"}),"."]}),e.jsxs("li",{children:["Click ",e.jsx("strong",{children:"Deploy"}),". Your app goes live at ",e.jsx("code",{children:"your-society.vercel.app"}),"."]})]})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"7"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Enable Auth + Row Level Security (RLS)"}),e.jsxs("p",{children:["To restrict guest visibility of members and enable email-based registration, run the SQL script found in ",e.jsx("code",{children:"supabase-rls-auth.sql"})," (located in the project root directory) in your Supabase SQL Editor. This script creates secure functions, database triggers to auto-create profiles, and configures all RLS policies."]}),e.jsx("div",{className:"sql-block",style:{marginTop:10},children:`-- Open the 'supabase-rls-auth.sql' file in the project root,
-- copy its entire contents, paste in Supabase SQL Editor, and run.`})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"8"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Enable CSV Attendance & Dynamic QR Code Setup"}),e.jsxs("p",{children:["To enable external CSV registration uploading and secure dynamic QR code attendance recording, run the SQL script found in ",e.jsx("code",{children:"event-csv-attendance-setup.sql"})," (located in the project root directory) in your Supabase SQL Editor. This creates the registrations schema and helper functions."]}),e.jsx("div",{className:"sql-block",style:{marginTop:10},children:`-- Open the 'event-csv-attendance-setup.sql' file in the project root,
-- copy its entire contents, paste in Supabase SQL Editor, and run.`})]})]}),e.jsxs("div",{className:"setup-step",children:[e.jsx("div",{className:"step-num",children:"9"}),e.jsxs("div",{className:"step-content",children:[e.jsx("h3",{children:"Enable Document Management (Cloudflare R2 + Postgres)"}),e.jsxs("p",{children:["To enable the document repository for event flyers, budget reports, permission letters, and guidance documents, run ",e.jsx("code",{children:"supabase/sql/documents-setup.sql"})," in your Supabase SQL Editor. Then configure your Cloudflare R2 storage secrets in Supabase Edge Functions:"]}),e.jsx("div",{className:"sql-block",style:{marginTop:10},children:`# 1. Run migration in Supabase SQL Editor:
-- supabase/sql/documents-setup.sql

# 2. Set Cloudflare R2 credentials in Supabase Edge Secrets:
supabase secrets set R2_ACCOUNT_ID="your_cloudflare_account_id"
supabase secrets set R2_ACCESS_KEY_ID="your_r2_access_key_id"
supabase secrets set R2_SECRET_ACCESS_KEY="your_r2_secret_access_key"
supabase secrets set R2_BUCKET_NAME="society-documents"

# 3. Deploy the document storage Edge Function:
supabase functions deploy document-storage`})]})]})]}),e.jsxs("div",{className:"card",style:{marginTop:16},children:[e.jsx("div",{className:"card-header",children:e.jsx("span",{className:"card-title",children:"Project File Structure"})}),e.jsx("div",{className:"sql-block",children:`society-management/
├── src/
│   ├── App.jsx              # App shell + sidebar navigation
│   ├── App.css              # Global styles
│   ├── main.jsx             # React entry point
│   ├── supabaseClient.js    # Supabase client (reads .env)
│   └── pages/
│       ├── Dashboard.jsx    # Stats overview
│       ├── Members.jsx      # CRUD for members
│       ├── Events.jsx       # CRUD for events
│       ├── Attendance.jsx   # Mark YES/NO per event
│       ├── Committee.jsx    # OC assignments + status
│       └── Setup.jsx        # This page
├── .env                     # ← your secrets (gitignored)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js`})]})]})}export{E as default};
