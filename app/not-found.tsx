'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Graphic */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-primary-600 mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Looking for something specific?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/features"
              className="text-left p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Features</h3>
              <p className="text-gray-600 text-sm">Explore .K-12 capabilities</p>
            </Link>
            <Link
              href="/pricing"
              className="text-left p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Pricing</h3>
              <p className="text-gray-600 text-sm">View plans and pricing</p>
            </Link>
            <Link
              href="/demo"
              className="text-left p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Demo</h3>
              <p className="text-gray-600 text-sm">Schedule a demonstration</p>
            </Link>
            <Link
              href="/contact"
              className="text-left p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
              <p className="text-gray-600 text-sm">Get in touch with us</p>
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-gray-500">
          <p className="mb-4">Still can't find what you're looking for?</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <Search className="w-4 h-4" />
            <span>Contact our support team</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
