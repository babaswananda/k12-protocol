'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, AccessCode, validateAccessCode, getAccessCodes, hasSignedNDA, recordNDASignature } from '@/lib/supabase';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  accessCodes: AccessCode[];
  login: (email: string, code: string) => Promise<boolean>;
  logout: () => Promise<void>;
  hasAgreedToNDA: boolean;
  signNDA: (ipAddress: string) => Promise<boolean>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);
  const [accessCodes, setAccessCodes] = useState<AccessCode[]>([]);
  const [hasAgreedToNDA, setHasAgreedToNDA] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Check if user is already authenticated on mount
  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      
      // Get current session
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
        setUser(session.user);
        
        // Check if user has signed NDA
        const ndaSigned = await hasSignedNDA(session.user.id);
        setHasAgreedToNDA(ndaSigned);
      }
      
      // Load access codes
      const codes = await getAccessCodes();
      setAccessCodes(codes);
      
      setLoading(false);
    };
    
    checkSession();
    
    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          setIsAuthenticated(true);
          setUser(session.user);
          
          // Check if user has signed NDA
          const ndaSigned = await hasSignedNDA(session.user.id);
          setHasAgreedToNDA(ndaSigned);
        } else if (event === 'SIGNED_OUT') {
          setIsAuthenticated(false);
          setUser(null);
          setHasAgreedToNDA(false);
        }
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  const login = async (email: string, code: string): Promise<boolean> => {
    try {
      // Validate the access code
      const isValid = await validateAccessCode(code, email);
      
      if (!isValid) {
        return false;
      }
      
      // Sign in with magic link (passwordless)
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
            : `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) {
        console.error('Error signing in:', error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  
  const signNDA = async (ipAddress: string): Promise<boolean> => {
    if (!user) return false;
    
    const success = await recordNDASignature(user.id, ipAddress);
    if (success) {
      setHasAgreedToNDA(true);
    }
    return success;
  };
  
  const logout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
    setHasAgreedToNDA(false);
  };
  
  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user,
      accessCodes, 
      login, 
      logout,
      hasAgreedToNDA,
      signNDA,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}