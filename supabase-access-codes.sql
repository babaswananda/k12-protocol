-- Generate additional access codes for testing
INSERT INTO access_codes (code, used) VALUES ('K12PROTOCOL001', FALSE);
INSERT INTO access_codes (code, used) VALUES ('K12PROTOCOL002', FALSE);
INSERT INTO access_codes (code, used) VALUES ('K12PROTOCOL003', FALSE);
INSERT INTO access_codes (code, used) VALUES ('K12PROTOCOL004', FALSE);
INSERT INTO access_codes (code, used) VALUES ('K12PROTOCOL005', FALSE);
INSERT INTO access_codes (code, used) VALUES ('FEDERAL2025A', FALSE);
INSERT INTO access_codes (code, used) VALUES ('FEDERAL2025B', FALSE);
INSERT INTO access_codes (code, used) VALUES ('FEDERAL2025C', FALSE);
INSERT INTO access_codes (code, used) VALUES ('EDUCATION001', FALSE);
INSERT INTO access_codes (code, used) VALUES ('EDUCATION002', FALSE);

-- List all access codes
SELECT * FROM access_codes ORDER BY created_at DESC;