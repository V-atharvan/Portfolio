import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', sectionId: 'hero' },
    { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Skills', href: '#skills', sectionId: 'skills' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'Experience', href: '#experience', sectionId: 'experience' },
    { name: 'Achievements', href: '#achievements', sectionId: 'achievements' },
    { name: 'Education', href: '#education', sectionId: 'education' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F7F7F2]/95 backdrop-blur-md shadow-subtle border-b border-portfolio-border'
          : 'bg-[#F7F7F2] border-b border-portfolio-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Typographic Logo */}
          <Link 
            to="/" 
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Atharva Vaddepalli - Home"
          >
            <span className="w-8 h-8 rounded-lg bg-portfolio-forest text-portfolio-bg flex items-center justify-center font-mono font-bold text-sm tracking-tight shadow-subtle group-hover:bg-portfolio-forest-hover transition-colors">
              AV
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-portfolio-forest group-hover:text-portfolio-forest-hover transition-colors">
                ATHARVA VADDEPALLI
              </span>
              <span className="text-[10px] sm:text-xs text-portfolio-muted font-mono tracking-wider">
                BACKEND & AI/ML
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-portfolio-charcoal hover:text-portfolio-forest rounded-md hover:bg-portfolio-sage-light/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={onOpenResume}
              icon={<FileText className="w-3.5 h-3.5 text-portfolio-forest" />}
            >
              Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              to={isHomePage ? '#contact' : '/#contact'}
              onClick={(e?: React.MouseEvent<HTMLElement>) => {
                if (isHomePage && e) {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-portfolio-forest hover:bg-portfolio-sage-light/50 rounded-lg border border-portfolio-border text-xs font-medium inline-flex items-center gap-1"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-portfolio-charcoal hover:text-portfolio-forest hover:bg-portfolio-sage-light/50 border border-portfolio-border transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-forest"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 lg:hidden bg-portfolio-charcoal/40 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-[#F7F7F2] border-b border-portfolio-border shadow-xl px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-portfolio-muted pb-2 border-b border-portfolio-border">
              Navigation Menu
            </div>
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="px-4 py-3 text-base font-medium text-portfolio-charcoal hover:text-portfolio-forest hover:bg-portfolio-sage-light/50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-portfolio-muted font-mono text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-portfolio-border flex flex-col gap-2.5">
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
                View Full Resume
              </Button>
              <Button
                variant="primary"
                size="md"
                href="#contact"
                onClick={(e?: React.MouseEvent<HTMLElement>) => {
                  if (e) handleNavClick(e as any, 'contact');
                }}
                className="w-full justify-center"
              >
                Contact Atharva
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
