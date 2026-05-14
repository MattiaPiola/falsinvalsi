-- Add active flag to tests table
-- Allows admin to enable/disable tests for student access
ALTER TABLE tests ADD COLUMN IF NOT EXISTS active boolean NOT NULL DEFAULT true;

-- Admin can update tests (e.g. toggle active flag).
-- NOTE: This policy is intentionally permissive, matching the existing schema
-- security model documented in the initial migration. For production deployments
-- with sensitive data, restrict this policy to authenticated admin users.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'tests' AND policyname = 'tests_update'
  ) THEN
    CREATE POLICY "tests_update"
      ON tests FOR UPDATE USING (true) WITH CHECK (true);
  END IF;
END$$;
