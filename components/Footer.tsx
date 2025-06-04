import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support', href: '/support' },
      { name: 'Status', href: '/status' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'COPPA Compliance', href: '/coppa' },
    ],
  }

  return (
    <footer className="bg-federal-900 text-white border-t-4 border-usgov-600">
      {/* Government Footer Banner */}
      <div className="bg-usgov-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-sm font-bold">
            <span>🇺🇸 OFFICIAL GOVERNMENT PROTOCOL</span>
            <span>•</span>
            <span>DEPARTMENT OF EDUCATION CERTIFIED</span>
            <span>•</span>
            <span>EXECUTIVE ORDER 14192 COMPLIANT</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-usgov-600 border-2 border-usgov-500">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">.K-12</span>
                  <span className="bg-usgov-600 text-white px-2 py-0.5 text-xs font-bold">PROTOCOL</span>
                </div>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Official Education Infrastructure</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-medium leading-relaxed">
              The official AI-native protocol mandated by Executive Order 14192 for secure, compliant,
              and sovereign educational infrastructure in American public schools.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="font-medium">official@k-12.protocol</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">1-800-FEDERAL-K12</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Washington, DC 20202</span>
              </div>
              <div className="mt-4 p-3 bg-usgov-800 border border-usgov-600">
                <div className="text-xs font-bold text-usgov-200 uppercase tracking-wide">OFFICIAL GOVERNMENT CONTACT</div>
                <div className="text-xs text-gray-300">Authorized Personnel Only</div>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 .K-12 Protocol. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-400">
              <span>EO 14192 Compliant</span>
              <span>•</span>
              <span>COPPA Certified</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
