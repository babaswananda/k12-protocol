// Authentication types and utilities
export interface AccessCode {
  code: string;
  email: string;
  used: boolean;
}

// Generate a random access code
export function generateAccessCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase() + 
         Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Generate a list of one-time use access codes
export function generateAccessCodes(count: number): AccessCode[] {
  const codes: AccessCode[] = [];
  for (let i = 0; i < count; i++) {
    codes.push({
      code: generateAccessCode(),
      email: '',
      used: false
    });
  }
  return codes;
}

// Initial set of access codes
export const initialAccessCodes: AccessCode[] = generateAccessCodes(10);