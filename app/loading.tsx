import { Shield } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl mx-auto animate-pulse">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-primary-200 rounded-xl animate-ping mx-auto"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Loading .K-12 Portal
        </h2>
        <p className="text-gray-600 mb-8">
          Preparing your AI-native education experience...
        </p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}
