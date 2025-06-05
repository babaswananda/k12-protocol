'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle the auth callback
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          router.push('/login?error=auth_failed')
          return
        }

        if (data.session) {
          // User is authenticated, redirect to login page to handle NDA
          router.push('/login')
        } else {
          // No session, redirect to login
          router.push('/login')
        }
      } catch (error) {
        console.error('Auth callback error:', error)
        router.push('/login?error=auth_failed')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen bg-federal-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-usgov-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-federal-900 font-bold">Authenticating...</p>
        <p className="text-federal-700 text-sm mt-2">Please wait while we verify your credentials.</p>
      </div>
    </div>
  )
}
