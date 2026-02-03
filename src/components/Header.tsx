import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import CTA from './ui/CTA'
import { ChevronDown, X, TrendingUp, Globe, Palette, Settings, Instagram, Linkedin, Twitter } from 'lucide-react'

const services = [
  {
    title: 'Website design',
    description: 'Beautiful, high-converting sites',
    bgColor: '#1e1e3f', // Dark navy/purple
    iconColor: '#8B5CF6', // Purple
    icon: TrendingUp,
  },
  {
    title: 'Custom software',
    description: 'Tailored solutions for your needs',
    bgColor: '#1a2744', // Dark blue
    iconColor: '#3B82F6', // Blue
    icon: Globe,
  },
  {
    title: 'Brand design',
    description: 'Stand out from the crowd',
    bgColor: '#2a2318', // Dark brown/amber
    iconColor: '#F59E0B', // Amber
    icon: Palette,
  },
  {
    title: 'CRM & Automation',
    description: 'Streamline your operations',
    bgColor: '#1a2e24', // Dark green
    iconColor: '#10B981', // Green
    icon: Settings,
  },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: Instagram },
  { label: 'X (Twitter)', href: 'https://x.com/', Icon: Twitter },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
] as const

interface HeaderProps {
  logoSrc?: string
}

export default function Header({ logoSrc = '/bblogoblack.svg' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesHover, setServicesHover] = useState(false)

  // Close menu on escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setServicesHover(false)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, handleEscape])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 hidden md:block">
        <div className="bg-[#1a1a1f] backdrop-blur-lg rounded-3xl shadow-md overflow-hidden">
          {/* Desktop Header - Always Visible */}
          <div className="flex items-center justify-between px-3 py-2">
            <a href="/" className="flex items-center" aria-label="Bluebird - Home">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5" aria-hidden="true">
                <img src={logoSrc} alt="Bluebird Web Development - Home" className="w-full h-full object-contain" width="32" height="32" loading="eager" fetchPriority="high" />
              </div>
            </a>

            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-1 text-sm text-white hover:text-white/80 transition-colors px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
                onFocus={() => setServicesHover(true)}
                onBlur={() => setServicesHover(false)}
                aria-expanded={servicesHover}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${servicesHover ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              <a href="/projects" className="text-sm text-white hover:text-white/80 transition-colors px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Projects
              </a>
              <a href="/about" className="text-sm text-white hover:text-white/80 transition-colors px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                About
              </a>
              <CTA href="/contact" variant="primary" size="sm" showArrow={false} className="px-2 md:px-3">
              Start a project
              </CTA>
            </div>
          </div>

          {/* Desktop Expanded Content */}
          <div
            className="transition-all duration-300 ease-in-out overflow-hidden"
            style={{
              maxHeight: servicesHover ? '400px' : '0',
              opacity: servicesHover ? 1 : 0,
            }}
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
          >
            <div className="px-4 pb-6">
              <p className="text-gray-400 text-xs font-medium mb-3 px-2">Services</p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <a
                      key={service.title}
                      href="/services"
                      className="rounded-2xl p-5 text-center hover:scale-[1.02] transition-transform duration-200"
                      style={{ backgroundColor: service.bgColor }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${service.iconColor}30`, border: `1.5px solid ${service.iconColor}` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: service.iconColor }} />
                        </div>
                        <h3 className="text-white font-semibold text-sm">{service.title}</h3>
                        <p className="text-white/60 text-xs leading-snug">{service.description}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social icons (desktop only) */}
              <div className="mt-4 px-2">
                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent hover:text-white flex items-center justify-center text-white/70 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden" style={{ width: 'calc(100% - 2rem)', maxWidth: 'calc(100vw - 2rem)' }}>
        <div
          className="bg-[#1a1a1f] backdrop-blur-md rounded-3xl shadow-lg overflow-hidden border border-white/5 w-full"
        >
          {/* Mobile Header - Always Visible */}
          <div className="flex items-center justify-between px-4 py-3 w-full">
            <a href="/" className="flex items-center touch-manipulation flex-shrink-0">
              <div className="w-8 h-8 rounded-2xl bg-white flex items-center justify-center p-1.5">
                <img src={logoSrc} alt="Bluebird Web Development - Home" className="w-full h-full object-contain" width="32" height="32" loading="eager" fetchPriority="high" />
              </div>
            </a>

            <div className="flex items-center gap-3 flex-shrink-0">
              <CTA href="/contact" variant="primary" size="sm" showArrow={false} className="touch-manipulation flex-shrink-0">
                Start a project
              </CTA>

              <button
                className="text-white p-2 -mr-1 transition-transform duration-300 touch-manipulation active:scale-95 flex-shrink-0"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <div className="flex flex-col gap-1">
                    <span className="w-5 h-0.5 bg-white rounded-full" />
                    <span className="w-5 h-0.5 bg-white rounded-full" />
                    <span className="w-5 h-0.5 bg-white rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div
            className="transition-all duration-300 ease-in-out overflow-hidden w-full"
            style={{
              maxHeight: isOpen ? '80vh' : '0',
              opacity: isOpen ? 1 : 0,
            }}
          >
            <div className="px-3 pb-5 pt-2 max-h-[calc(80vh-80px)] overflow-y-auto overflow-x-hidden w-full box-border">
              {/* Services Cards */}
              <div className="mb-5 w-full">
                <p className="text-white/40 text-xs font-medium mb-3 uppercase tracking-widest px-1">Services</p>
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <a
                        key={service.title}
                        href="/services"
                        className="rounded-xl p-3.5 active:scale-[0.98] transition-transform duration-200 touch-manipulation min-w-0"
                        style={{ backgroundColor: service.bgColor }}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${service.iconColor}30`, border: `1.5px solid ${service.iconColor}` }}
                          >
                            <Icon className="h-4 w-4" style={{ color: service.iconColor }} />
                          </div>
                          <div className="min-w-0 w-full">
                            <h3 className="text-white font-semibold text-sm leading-tight mb-0.5 truncate">{service.title}</h3>
                            <p className="text-white/50 text-xs leading-snug line-clamp-2">{service.description}</p>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mb-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <a
                    href="/projects"
                    className="text-white text-lg font-semibold py-2.5 px-3 touch-manipulation rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="/about"
                    className="text-white text-lg font-semibold py-2.5 px-3 touch-manipulation rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t border-white/10 pt-4 w-full">
                <div className="flex items-center gap-3 px-2 pb-2">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white/70 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/5 active:bg-white/10 touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:info@bluebirdweb.ca"
                  className="block text-white/50 hover:text-white transition-colors text-sm px-2 py-2 touch-manipulation truncate w-full"
                >
                  info@bluebirdweb.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
