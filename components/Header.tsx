'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, Zap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Why .K-12', href: '#why-k12' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Demo', href: '/demo' },
  ]

  return (
    <header className="bg-white border-b-4 border-usgov-600 sticky top-0 z-50 shadow-sm">
      {/* Government Banner */}
      <div className="bg-federal-900 text-white py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">OFFICIAL GOVERNMENT PROTOCOL</span>
              <span>•</span>
              <span>EO 14192 COMPLIANT</span>
              <span>•</span>
              <span>DEPARTMENT OF EDUCATION CERTIFIED</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🇺🇸</span>
              <span>United States of America</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-14 h-14 bg-usgov-600 rounded-none border-2 border-usgov-700">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-display text-2xl font-bold text-federal-900">.K-12</span>
                  <span className="bg-usgov-600 text-white px-2 py-0.5 text-xs font-bold rounded-none">PROTOCOL</span>
                </div>
                <span className="text-xs text-federal-600 font-semibold uppercase tracking-wide">Official Education Infrastructure</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-federal-700 hover:text-usgov-600 hover:bg-federal-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 border-b-2 border-transparent hover:border-usgov-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/demo"
              className="text-federal-700 hover:text-usgov-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide border border-federal-300 hover:border-usgov-600 transition-colors duration-200"
            >
              Request Demo
            </Link>
            <Link
              href="#reserve"
              className="bg-usgov-600 hover:bg-usgov-700 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 flex items-center space-x-2 border-2 border-usgov-700"
            >
              <Shield className="w-4 h-4" />
              <span>Secure Handle</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/demo"
                  className="text-primary-600 hover:text-primary-700 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Demo
                </Link>
                <Link
                  href="#reserve"
                  className="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 rounded-lg text-base font-medium mx-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reserve Handle
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
