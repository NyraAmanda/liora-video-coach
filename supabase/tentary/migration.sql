BEGIN;
ALTER TABLE liora.video_access
 ADD COLUMN IF NOT EXISTS tentary_paid_until timestamptz,
 ADD COLUMN IF NOT EXISTS tentary_checked_at timestamptz,
 ADD COLUMN IF NOT EXISTS tentary_order_id bigint,
 ADD COLUMN IF NOT EXISTS tentary_cancel_at_period_end boolean NOT NULL DEFAULT false;
CREATE OR REPLACE VIEW liora_lab_access.access_members AS
 SELECT email,enabled,billing_override,trial_eligible,trial_started_at,trial_until,
 course_liora,course_video,course_member,tentary_paid_until,tentary_checked_at,
 tentary_order_id,tentary_cancel_at_period_end FROM liora.video_access;
COMMIT;
