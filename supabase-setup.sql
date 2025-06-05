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

-- Create initial access code for testing
INSERT INTO access_codes (code, used) VALUES ('TESTCODE123', FALSE);