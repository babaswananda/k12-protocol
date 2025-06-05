# K-12 Protocol Login System Setup

This document provides instructions for setting up and using the K-12 Protocol login system with Supabase.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [https://supabase.com/](https://supabase.com/) and sign in or create an account
2. Click on "New Project" to create a new project
3. Enter a name for your project (e.g., "K-12 Protocol")
4. Set a secure database password (make sure to save this)
5. Choose a region closest to your users
6. Click "Create new project"

### 2. Set Up Database Tables

1. In your Supabase dashboard, go to the "SQL Editor" section
2. Create a new query and paste the SQL from the `supabase-setup.sql` file:
   ```sql
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
   ```
3. Run the query to create the tables and an initial test access code

### 3. Configure Authentication

1. Go to the "Authentication" section in your Supabase dashboard
2. Under "Providers", make sure "Email" is enabled
3. Under "Email Templates", you can customize the magic link email if desired
4. Under "URL Configuration", set your site URL (for development, use `http://localhost:3000`)

### 4. Update Environment Variables

1. Get your Supabase URL and anon key from the "Settings" > "API" section
2. Update the `.env.local` file with your credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 5. Generate Access Codes

1. Run the SQL in `supabase-access-codes.sql` to generate additional access codes
2. Or use the admin interface at `/admin/access-codes` to generate codes (requires authentication)

## Using the Login System

### Access Codes

The login system uses one-time access codes. Each code can only be used once and is associated with the email that used it.

**Current Access Codes:**
- `AIMANDATE001` - `AIMANDATE005` (Initial codes)
- `AIMANDATE006` - `AIMANDATE015` (Additional codes)
- `AK-AIMANDATE001` - `AK-AIMANDATE003` (Federal Liaison Adan Knowles)

### Login Flow

1. User visits the site and is redirected to the login page
2. User enters their email and an access code
3. If the code is valid, a magic link is sent to their email
4. User clicks the magic link to authenticate
5. User must agree to the NDA/Non-Compete agreement
6. After agreeing, user is redirected to the main site

### Admin Access

The `/admin/access-codes` page allows administrators to:
- Generate new access codes
- View all access codes
- See which codes have been used and by whom
- Copy unused codes to share with authorized personnel

## Access Code List

Here are the pre-generated access codes you can use for testing:

1. `TESTCODE123`
2. `K12PROTOCOL001`
3. `K12PROTOCOL002`
4. `K12PROTOCOL003`
5. `K12PROTOCOL004`
6. `K12PROTOCOL005`
7. `FEDERAL2025A`
8. `FEDERAL2025B`
9. `FEDERAL2025C`
10. `EDUCATION001`
11. `EDUCATION002`

## Security Notes

- All access codes are one-time use only
- Users must agree to the NDA/Non-Compete agreement
- IP addresses are recorded when users sign the NDA
- All pages are protected and require authentication