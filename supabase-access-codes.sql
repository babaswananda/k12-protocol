-- Generate additional access codes for AI mandate compliance
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE006', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE007', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE008', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE009', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE010', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE011', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE012', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE013', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE014', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE015', FALSE);

-- Federal Liaison Adan Knowles codes
INSERT INTO access_codes (code, used) VALUES ('AK-AIMANDATE001', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AK-AIMANDATE002', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AK-AIMANDATE003', FALSE);

-- List all access codes
SELECT * FROM access_codes ORDER BY created_at DESC;