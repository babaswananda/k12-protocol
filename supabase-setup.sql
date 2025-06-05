-- Create access_codes table
CREATE TABLE access_codes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT NOT NULL UNIQUE,
  email TEXT,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create nda_signatures table
CREATE TABLE nda_signatures (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  ip_address TEXT NOT NULL,
  signed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create initial access codes
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE001', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE002', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE003', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE004', FALSE);
INSERT INTO access_codes (code, used) VALUES ('AIMANDATE005', FALSE);