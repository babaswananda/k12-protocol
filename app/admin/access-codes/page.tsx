'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { createAccessCode, getAccessCodes, AccessCode } from '@/lib/supabase'
import { Shield, Copy, Plus, RefreshCw, Check, AlertCircle } from 'lucide-react'

export default function AccessCodesPage() {
  const [accessCodes, setAccessCodes] = useState<AccessCode[]>([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const { isAuthenticated, hasAgreedToNDA } = useAuth()

  useEffect(() => {
    loadAccessCodes()
  }, [])

  const loadAccessCodes = async () => {
    setLoading(true)
    try {
      const codes = await getAccessCodes()
      setAccessCodes(codes)
    } catch (error) {
      console.error('Error loading access codes:', error)
      setError('Failed to load access codes')
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateCode = async () => {
    setGenerating(true)
    setError('')
    setSuccess('')
    
    try {
      const newCode = await createAccessCode()
      if (newCode) {
        setAccessCodes(prev => [newCode, ...prev])
        setSuccess('New access code generated successfully')
      } else {
        setError('Failed to generate access code')
      }
    } catch (error) {
      console.error('Error generating access code:', error)
      setError('Failed to generate access code')
    } finally {
      setGenerating(false)
    }
  }

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code)
        setTimeout(() => setCopiedCode(null), 2000)
      })
      .catch(err => {
        console.error('Failed to copy code:', err)
      })
  }

  if (!isAuthenticated || !hasAgreedToNDA) {
    return (
      <div className="min-h-screen bg-federal-50 flex items-center justify-center">
        <div className="bg-white border-4 border-red-600 p-8 shadow-xl max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-federal-900 uppercase tracking-wide">
              Access Denied
            </h1>
            <p className="text-federal-700 mt-2">
              You must be authenticated and have agreed to the NDA to access this page.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-federal-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-4 border-federal-300 p-8 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-federal-900 uppercase tracking-wide">
                Access Code Management
              </h1>
              <p className="text-federal-700 mt-1">
                Generate and manage one-time use access codes for authorized personnel
              </p>
            </div>
            <button
              onClick={handleGenerateCode}
              disabled={generating}
              className="bg-usgov-600 hover:bg-usgov-700 text-white px-4 py-2 font-bold uppercase tracking-wide transition-colors duration-200 flex items-center space-x-2 rounded-government"
            >
              {generating ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
              <span>Generate Code</span>
            </button>
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
                <Check className="w-5 h-5 text-green-600 mr-2" />
                <p className="text-green-700 text-sm font-medium">{success}</p>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-federal-300">
              <thead className="bg-federal-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-federal-900 uppercase tracking-wide">
                    Access Code
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-federal-900 uppercase tracking-wide">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-federal-900 uppercase tracking-wide">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-federal-900 uppercase tracking-wide">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-federal-900 uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-federal-200">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-federal-600 animate-spin mr-2" />
                        <span>Loading access codes...</span>
                      </div>
                    </td>
                  </tr>
                ) : accessCodes.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-federal-700">
                      No access codes found. Generate a new code to get started.
                    </td>
                  </tr>
                ) : (
                  accessCodes.map((code) => (
                    <tr key={code.id} className={code.used ? 'bg-federal-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-medium text-federal-900">
                        {code.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          code.used
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {code.used ? 'Used' : 'Available'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-federal-700">
                        {code.email || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-federal-700">
                        {new Date(code.created_at).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-federal-700">
                        {!code.used && (
                          <button
                            onClick={() => copyToClipboard(code.code)}
                            className="text-usgov-600 hover:text-usgov-700 flex items-center space-x-1"
                          >
                            {copiedCode === code.code ? (
                              <>
                                <Check className="w-4 h-4" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}