BEGIN;
CREATE TABLE IF NOT EXISTS liora_lab_access.demo_access (
 email text PRIMARY KEY CHECK(email=lower(btrim(email)) AND length(email)<=254),
 enabled boolean NOT NULL DEFAULT false,
 started_at timestamptz,
 expires_at timestamptz,
 CHECK((started_at IS NULL AND expires_at IS NULL) OR (started_at IS NOT NULL AND expires_at=started_at+interval '72 hours'))
);
CREATE TABLE IF NOT EXISTS liora_lab_access.demo_sessions (
 token_hash text PRIMARY KEY CHECK(token_hash ~ '^[a-f0-9]{64}$'),
 email text NOT NULL REFERENCES liora_lab_access.demo_access(email) ON DELETE CASCADE,
 created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE liora_lab_access.demo_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE liora_lab_access.demo_sessions ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON liora_lab_access.demo_access,liora_lab_access.demo_sessions FROM PUBLIC,anon,authenticated;
GRANT SELECT,INSERT,UPDATE,DELETE ON liora_lab_access.demo_access,liora_lab_access.demo_sessions TO liora_lab_access_runtime;
CREATE POLICY demo_runtime ON liora_lab_access.demo_access TO liora_lab_access_runtime USING(true) WITH CHECK(true);
CREATE POLICY demo_sessions_runtime ON liora_lab_access.demo_sessions TO liora_lab_access_runtime USING(true) WITH CHECK(true);
COMMIT;
