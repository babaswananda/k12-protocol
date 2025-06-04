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
    <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black text-gray-900 group-hover:text-primary-600 transition-colors duration-300">.K-12</span>
                <span className="text-xs text-gray-500 -mt-1 font-medium">Protocol</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/demo"
              className="text-primary-600 hover:text-primary-700 px-5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg hover:bg-primary-50"
            >
              Schedule Demo
            </Link>
            <Link
              href="#reserve"
              className="group bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Reserve Handle</span>
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
