import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { socialConfig } from '../config/social';
import { personalConfig } from '../config/personal';
import { GithubIcon, LinkedinIcon } from '../components/ui/SocialIcons';
import { Mail, MapPin, Copy, Check, Info } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialConfig.email.handle);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <SectionContainer id="contact" background="white">
      <SectionHeading
        badge="GET IN TOUCH"
        title="Direct Contact & Channels"
        subtitle="Interested in discussing Java backend engineering, Spring Boot architectures, or research software prototypes? Connect directly through the channels below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Primary Email Card */}
          <div className="p-6 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border shadow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-portfolio-sage-light text-portfolio-forest">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-forest bg-white px-2.5 py-1 rounded border border-portfolio-border hover:bg-portfolio-surface-muted transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
                title="Copy email to clipboard"
                aria-label="Copy email address to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-portfolio-muted" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block mb-1 font-semibold">
                Verified Email
              </span>
              <a
                href={socialConfig.email.url}
                className="text-base sm:text-lg font-bold text-portfolio-charcoal hover:text-portfolio-forest hover:underline break-all transition-colors font-sans"
              >
                {socialConfig.email.handle}
              </a>
            </div>

            <p className="text-xs text-portfolio-muted leading-relaxed font-sans">
              Direct inbox for technical inquiries, backend collaboration, or student developer opportunities.
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={socialConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border hover:border-portfolio-sage hover:bg-white transition-all shadow-subtle group flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
              aria-label="Atharva Vaddepalli GitHub profile"
            >
              <div className="p-2 rounded-lg bg-white border border-portfolio-border group-hover:bg-portfolio-sage-light/50 transition-colors">
                <GithubIcon className="w-5 h-5 text-portfolio-forest" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-muted block font-semibold">
                  Source Code
                </span>
                <span className="font-bold text-sm text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
                  GitHub
                </span>
                <span className="text-xs text-portfolio-muted block mt-0.5 font-mono">
                  {socialConfig.github.handle}
                </span>
              </div>
            </a>

            <a
              href={socialConfig.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border hover:border-portfolio-sage hover:bg-white transition-all shadow-subtle group flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest"
              aria-label="Atharva Vaddepalli LinkedIn profile"
            >
              <div className="p-2 rounded-lg bg-white border border-portfolio-border group-hover:bg-portfolio-sage-light/50 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-portfolio-forest" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-muted block font-semibold">
                  Professional
                </span>
                <span className="font-bold text-sm text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
                  LinkedIn
                </span>
                <span className="text-xs text-portfolio-muted block mt-0.5 font-mono truncate max-w-[110px]">
                  {socialConfig.linkedin.handle}
                </span>
              </div>
            </a>
          </div>

          {/* Location Card */}
          <div className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex items-center gap-3 text-xs sm:text-sm text-portfolio-charcoal">
            <MapPin className="w-4 h-4 text-portfolio-forest shrink-0" />
            <span>{personalConfig.education.location}</span>
          </div>

          {/* Transparent Integration Notice */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-portfolio-border text-xs text-portfolio-muted leading-relaxed font-sans">
            <div className="flex items-center gap-1.5 font-semibold text-portfolio-charcoal mb-1">
              <Info className="w-3.5 h-3.5 text-portfolio-forest" />
              <span>Backend Gateway Notice</span>
            </div>
            This portfolio operates as a static client application. Live email delivery requires connecting a backend gateway (e.g. Spring Boot JavaMailSender, Formspree, or EmailJS) upon production hosting. Direct communication via verified email or LinkedIn is immediately active.
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </SectionContainer>
  );
};
