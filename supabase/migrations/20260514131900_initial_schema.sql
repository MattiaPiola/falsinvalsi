-- ==========================================================
-- falsinvalsi – Supabase Database Setup
-- ==========================================================
--
-- SECURITY NOTE: This schema uses permissive RLS policies
-- suitable for a classroom/demo environment with a static
-- frontend.  The admin panel is protected only by a
-- client-side password check using the anon key.
-- For a production deployment with sensitive data, replace
-- the admin write/delete policies with Supabase Auth or
-- restrict them to a server-side service-role key.
-- ==========================================================

-- Tests table (created by admin, loaded by students via ?test_id=<uuid>)
CREATE TABLE IF NOT EXISTS tests (
  id         uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  title      text        NOT NULL,
  sections   jsonb       NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Submissions table (one row per student per test)
CREATE TABLE IF NOT EXISTS submissions (
  id           uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  test_id      uuid        REFERENCES tests(id) ON DELETE SET NULL,
  student_name text        NOT NULL,
  answers      jsonb       NOT NULL DEFAULT '{}'::jsonb,
  score        int         NOT NULL DEFAULT 0,
  total        int         NOT NULL DEFAULT 0,
  submitted_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE tests       ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Students can read tests (needed to load a test via URL parameter)
CREATE POLICY "tests_select"
  ON tests FOR SELECT USING (true);

-- Admin can create tests (admin page uses the anon key + client-side password)
CREATE POLICY "tests_insert"
  ON tests FOR INSERT WITH CHECK (true);

-- Admin can delete tests
CREATE POLICY "tests_delete"
  ON tests FOR DELETE USING (true);

-- Students can submit their answers
CREATE POLICY "submissions_insert"
  ON submissions FOR INSERT WITH CHECK (true);

-- Admin (client-side password-protected) can read all submissions
CREATE POLICY "submissions_select"
  ON submissions FOR SELECT USING (true);

-- Admin can delete individual submissions
CREATE POLICY "submissions_delete"
  ON submissions FOR DELETE USING (true);
