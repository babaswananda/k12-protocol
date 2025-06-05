'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import { Shield, Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showNDA, setShowNDA] = useState(false)
  const [ndaAgreed, setNdaAgreed] = useState(false)
  const [ipAddress, setIpAddress] = useState('')
  const { login, signNDA, isAuthenticated, hasAgreedToNDA, loading } = useAuth()
  const router = useRouter()

  // Get user's IP address for NDA signature
  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const res = await fetch('https://api.ipify.org?format=json')
        const data = await res.json()
        setIpAddress(data.ip)
      } catch (error) {
        console.error('Failed to get IP address:', error)
        setIpAddress('unknown')
      }
    }
    
    getIpAddress()
  }, [])

  // Redirect if already authenticated and agreed to NDA
  useEffect(() => {
    if (!loading && isAuthenticated && hasAgreedToNDA) {
      router.push('/')
    } else if (!loading && isAuthenticated && !hasAgreedToNDA) {
      setShowNDA(true)
    }
  }, [isAuthenticated, hasAgreedToNDA, loading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!email || !accessCode) {
      setError('Email and access code are required')
      return
    }

    setSuccess('Verifying access code...')
    
    try {
      const success = await login(email, accessCode)
      
      if (success) {
        setSuccess('Access code verified! Check your email for a magic link to sign in.')
      } else {
        setError('Invalid access code or the code has already been used')
        setSuccess('')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('An error occurred during login. Please try again.')
      setSuccess('')
    }
  }

  const handleNDASubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!ndaAgreed) {
      setError('You must agree to the NDA and Non-Compete Agreement to proceed')
      return
    }
    
    try {
      const success = await signNDA(ipAddress)
      
      if (success) {
        router.push('/')
      } else {
        setError('Failed to record your agreement. Please try again.')
      }
    } catch (error) {
      console.error('NDA signing error:', error)
      setError('An error occurred. Please try again.')
    }
  }

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

  return (
    <div className="min-h-screen bg-federal-50 relative py-16">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-md mx-auto px-4">
        {!showNDA ? (
          <div className="bg-white border-4 border-federal-300 p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-usgov-600 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-federal-900 uppercase tracking-wide">
                Restricted Access
              </h1>
              <p className="text-federal-700 mt-2">
                Enter your access code to proceed
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              </div>
            )}
            
            {success && (
              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <p className="text-green-700 text-sm font-medium">{success}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                  Official Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-federal-500" />
                  </div>
                  <input
                    type="email"
                    required
                    className="w-full pl-10 p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.gov"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-federal-900 mb-2 uppercase tracking-wide">
                  Access Code *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-federal-500" />
                  </div>
                  <input
                    type="text"
                    required
                    className="w-full pl-10 p-3 border-2 border-federal-300 focus:border-usgov-600 focus:outline-none font-medium uppercase"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="ENTER ACCESS CODE"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-usgov-600 hover:bg-usgov-700 text-white px-8 py-4 font-bold uppercase tracking-wide transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Verify Access</span>
              </button>
              
              <div className="text-center mt-4">
                <div className="text-xs text-federal-600 font-bold uppercase tracking-wide">
                  AUTHORIZED PERSONNEL ONLY
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white border-4 border-red-600 p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-federal-900 uppercase tracking-wide">
                Non-Disclosure Agreement
              </h1>
              <p className="text-federal-700 mt-2">
                & Non-Compete Clause
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              </div>
            )}
            
            <div className="bg-federal-50 border-2 border-federal-300 p-4 mb-6 h-64 overflow-y-auto text-sm">
              <h2 className="font-bold mb-2">CONFIDENTIALITY AND NON-DISCLOSURE AGREEMENT</h2>
              
              <p className="mb-4">This Confidentiality and Non-Disclosure Agreement (the "Agreement") is entered into by and between .K-12 Protocol ("Company") and the undersigned individual ("Recipient").</p>
              
              <p className="mb-4">1. <strong>Confidential Information.</strong> "Confidential Information" means any information disclosed by Company to Recipient, either directly or indirectly, in writing, orally or by inspection of tangible objects, including without limitation documents, prototypes, samples, technical data, trade secrets, know-how, research, product plans, products, services, customer lists, markets, software, developments, inventions, processes, formulas, technology, designs, drawings, engineering, hardware configuration, marketing or finance materials.</p>
              
              <p className="mb-4">2. <strong>Non-Disclosure.</strong> Recipient agrees not to use any Confidential Information for any purpose except to evaluate and engage with the Company's services. Recipient agrees not to disclose any Confidential Information to third parties or to employees, except to those employees who are required to have the information to evaluate or engage with the Company's services.</p>
              
              <p className="mb-4">3. <strong>Non-Compete.</strong> For a period of two (2) years from the date of this Agreement, Recipient shall not, directly or indirectly, engage in any business that competes with the Company, including but not limited to developing, producing, marketing, or selling products or services that are substantially similar to or competitive with the Company's products or services.</p>
              
              <p className="mb-4">4. <strong>Term.</strong> The obligations of Recipient under this Agreement shall survive until such time as all Confidential Information disclosed hereunder becomes publicly known through no action or inaction of Recipient.</p>
              
              <p className="mb-4">5. <strong>Governing Law.</strong> This Agreement shall be governed by and construed in accordance with the laws of the United States of America.</p>
            </div>
            
            <form onSubmit={handleNDASubmit} className="space-y-6">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="nda-agreement"
                  checked={ndaAgreed}
                  onChange={(e) => setNdaAgreed(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="nda-agreement" className="text-sm text-federal-900">
                  I have read and agree to the Non-Disclosure Agreement and Non-Compete Clause. I understand that by clicking "I Agree" below, I am executing a legally binding agreement.
                </label>
              </div>
              
              <button
                type="submit"
                className={`w-full py-4 px-6 font-bold uppercase tracking-wide transition-all duration-200 ${ndaAgreed ? 'bg-usgov-600 hover:bg-usgov-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                disabled={!ndaAgreed}
              >
                I Agree
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}