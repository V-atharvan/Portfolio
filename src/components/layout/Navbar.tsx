import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { navigationConfig } from '../../config/navigation';
import { Button } from '../common/Button';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Sticky navbar shadow and active section scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Simple active section detection based on scroll position
      const sections = navigationConfig.links.map((link) => link.sectionId);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navOffset = 76;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F7F7F2]/95 backdrop-blur-md border-b border-portfolio-border shadow-subtle'
          : 'bg-[#F7F7F2] border-b border-portfolio-border/70'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Wordmark Treatment: "ATHARVA." */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest rounded p-1"
            aria-label="Atharva Vaddepalli — Return to top"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors font-sans">
              ATHARVA<span className="text-portfolio-forest font-black">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigationConfig.links.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-portfolio-forest font-semibold bg-portfolio-sage-light/60'
                      : 'text-portfolio-charcoal/80 hover:text-portfolio-forest hover:bg-portfolio-sage-light/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-portfolio-forest rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop / Tablet Resume Button */}
            <div className="hidden sm:flex items-center">
              <Button
                variant="secondary"
                size="sm"
                onClick={onOpenResume}
                icon={<FileText className="w-3.5 h-3.5 text-portfolio-forest" />}
              >
                {navigationConfig.resumeButtonText}
              </Button>
            </div>

            {/* Mobile Compact Resume Button */}
            <button
              onClick={onOpenResume}
              className="sm:hidden px-2.5 py-1.5 text-portfolio-forest hover:bg-portfolio-sage-light/50 rounded-lg border border-portfolio-border text-xs font-medium inline-flex items-center gap-1 min-h-[38px] focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
              aria-label="Open Resume Preview"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle (Visible on all screens below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-portfolio-charcoal hover:text-portfolio-forest hover:bg-portfolio-sage-light/50 border border-portfolio-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 top-16 sm:top-20 z-50 lg:hidden bg-portfolio-charcoal/40 backdrop-blur-sm animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#F7F7F2] border-b border-portfolio-border shadow-xl px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
              <span className="text-xs font-mono uppercase tracking-widest text-portfolio-muted font-semibold">
                Menu Navigation
              </span>
              <span className="text-xs font-mono text-portfolio-forest bg-portfolio-sage-light px-2 py-0.5 rounded font-medium">
                Navigation
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navigationConfig.links.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-portfolio-sage-light text-portfolio-forest font-semibold'
                        : 'text-portfolio-charcoal hover:text-portfolio-forest hover:bg-portfolio-sage-light/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-portfolio-muted" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-portfolio-border space-y-2">
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full justify-center"
                icon={<FileText className="w-4 h-4 text-portfolio-forest" />}
              >
                View Full Resume Summary
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
