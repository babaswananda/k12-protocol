import { createClient } from '@supabase/supabase-js';

// These would typically come from environment variables
// For development, we'll use placeholder values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface AccessCode {
  id: string;
  code: string;
  email: string | null;
  used: boolean;
  created_at: string;
}

export interface NDASignature {
  id: string;
  user_id: string;
  signed_at: string;
  ip_address: string;
}

// Generate a random access code
export function generateAccessCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase() + 
         Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Create a new access code in the database
export async function createAccessCode(): Promise<AccessCode | null> {
  const code = generateAccessCode();
  
  const { data, error } = await supabase
    .from('access_codes')
    .insert([{ code, used: false }])
    .select()
    .single();
    
  if (error) {
    console.error('Error creating access code:', error);
    return null;
  }
  
  return data;
}

// Get all access codes
export async function getAccessCodes(): Promise<AccessCode[]> {
  const { data, error } = await supabase
    .from('access_codes')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching access codes:', error);
    return [];
  }
  
  return data || [];
}

// Validate an access code
export async function validateAccessCode(code: string, email: string): Promise<boolean> {
  // First check if the code exists and is unused
  const { data, error } = await supabase
    .from('access_codes')
    .select('*')
    .eq('code', code)
    .eq('used', false)
    .single();
    
  if (error || !data) {
    return false;
  }
  
  // Mark the code as used and associate with the email
  const { error: updateError } = await supabase
    .from('access_codes')
    .update({ used: true, email })
    .eq('id', data.id);
    
  if (updateError) {
    console.error('Error updating access code:', updateError);
    return false;
  }
  
  return true;
}

// Record NDA signature
export async function recordNDASignature(userId: string, ipAddress: string): Promise<boolean> {
  const { error } = await supabase
    .from('nda_signatures')
    .insert([{ user_id: userId, ip_address: ipAddress }]);
    
  if (error) {
    console.error('Error recording NDA signature:', error);
    return false;
  }
  
  return true;
}

// Check if user has signed NDA
export async function hasSignedNDA(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('nda_signatures')
    .select('*')
    .eq('user_id', userId)
    .single();
    
  if (error || !data) {
    return false;
  }
  
  return true;
}