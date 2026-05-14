-- Add active flag to tests table
-- Allows admin to enable/disable tests for student access
ALTER TABLE tests ADD COLUMN IF NOT EXISTS active boolean NOT NULL DEFAULT true;

-- Admin can update tests (e.g. toggle active flag)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'tests' AND policyname = 'tests_update'
  ) THEN
    CREATE POLICY "tests_update"
      ON tests FOR UPDATE USING (true) WITH CHECK (true);
  END IF;
END$$;
