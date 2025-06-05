'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from './AuthProvider'

// List of paths that don't require authentication
const publicPaths = ['/login']

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, hasAgreedToNDA, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Don't do anything while auth is loading
    if (loading) return

    // Check if the path is public
    const isPublicPath = publicPaths.includes(pathname)

    // If not authenticated and not on a public path, redirect to login
    if (!isAuthenticated && !isPublicPath) {
      router.push('/login')
    }

    // If authenticated but hasn't agreed to NDA and not on login page, redirect to login
    if (isAuthenticated && !hasAgreedToNDA && pathname !== '/login') {
      router.push('/login')
    }
  }, [isAuthenticated, hasAgreedToNDA, loading, pathname, router])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-federal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-usgov-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-federal-900 font-bold">Loading...</p>
        </div>
      </div>
    )
  }

  // If on a public path or authenticated, render children
  if (publicPaths.includes(pathname) || (isAuthenticated && hasAgreedToNDA)) {
    return <>{children}</>
  }

  // Return null while redirecting
  return null
}