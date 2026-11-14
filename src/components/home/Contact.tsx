import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { personalInfo, contactData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    show: boolean;
    data?: FormState;
  }>({ show: false });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmissionFeedback({
        show: true,
        data: { ...formData },
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello Atharva,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-portfolio-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="GET IN TOUCH"
          title="Direct Contact & Channels"
          subtitle="Interested in collaborating on Java backend engineering, Spring Boot architectures, or research systems? Connect directly below."
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-forest bg-white px-2.5 py-1 rounded border border-portfolio-border hover:bg-portfolio-surface-muted transition-colors shadow-subtle"
                  title="Copy email to clipboard"
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
                <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block mb-1">
                  Verified Developer Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-portfolio-charcoal hover:text-portfolio-forest hover:underline break-all transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <p className="text-xs text-portfolio-muted leading-relaxed">
                Direct inbox for technical inquiries, backend project collaborations, or internship opportunities.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border hover:border-portfolio-sage hover:bg-white transition-all shadow-subtle group flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-white border border-portfolio-border group-hover:bg-portfolio-sage-light/50 transition-colors">
                  <GithubIcon className="w-5 h-5 text-portfolio-forest" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block">
                    Source Code
                  </span>
                  <span className="font-bold text-sm text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
                    GitHub Profile
                  </span>
                  <span className="text-xs text-portfolio-muted block mt-0.5">
                    @AtharvaVaddepalli
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border hover:border-portfolio-sage hover:bg-white transition-all shadow-subtle group flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-white border border-portfolio-border group-hover:bg-portfolio-sage-light/50 transition-colors">
                  <LinkedinIcon className="w-5 h-5 text-portfolio-forest" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-portfolio-muted block">
                    Professional
                  </span>
                  <span className="font-bold text-sm text-portfolio-charcoal group-hover:text-portfolio-forest transition-colors">
                    LinkedIn Network
                  </span>
                  <span className="text-xs text-portfolio-muted block mt-0.5">
                    /in/atharva-vaddepalli
                  </span>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex items-center gap-3 text-xs sm:text-sm text-portfolio-charcoal">
              <MapPin className="w-4 h-4 text-portfolio-forest shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Honest Integration Notice */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-portfolio-border text-xs text-portfolio-muted leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-portfolio-charcoal mb-1">
                <Info className="w-3.5 h-3.5 text-portfolio-forest" />
                <span>Backend Gateway Notice</span>
              </div>
              {contactData.formIntegrationNotice}
            </div>

          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-portfolio-surface-subtle rounded-2xl border border-portfolio-border p-6 sm:p-8 shadow-subtle">
              <div className="mb-6 pb-4 border-b border-portfolio-border">
                <h3 className="font-bold text-lg text-portfolio-charcoal">
                  Send a Structured Message
                </h3>
                <p className="text-xs text-portfolio-muted mt-1">
                  Validated client-side message form. Pre-fills direct email draft or prepares message parameters.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus:ring-2 focus:ring-portfolio-forest transition-colors ${
                        errors.name ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus:ring-2 focus:ring-portfolio-forest transition-colors ${
                        errors.email ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
                    Subject / Discussion Topic <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="e.g. Spring Boot Backend Collaboration / Internship"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus:ring-2 focus:ring-portfolio-forest transition-colors ${
                      errors.subject ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Provide details about your project scope, questions, or discussion..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus:ring-2 focus:ring-portfolio-forest transition-colors resize-y ${
                      errors.message ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Message
                  </Button>
                </div>
              </form>

              {/* Truthful Modal / Callout when submitted */}
              {submissionFeedback.show && (
                <div className="mt-6 p-5 rounded-xl bg-white border-2 border-portfolio-sage/60 shadow-card animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-portfolio-sage-light text-portfolio-forest shrink-0 mt-0.5">
                      <Info className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="font-bold text-sm sm:text-base text-portfolio-charcoal">
                        Form Validated — Service Integration Notice
                      </h4>
                      <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed">
                        Your message has passed all field validations. Because this portfolio is currently hosted as a static client application without an active mail server backend, messages are not stored in an external database.
                      </p>
                      <p className="text-xs sm:text-sm text-portfolio-charcoal font-medium">
                        You can instantly launch your email application with this pre-filled message to reach Atharva right away:
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2.5">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={openMailto}
                          icon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          Send via Default Email Client
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSubmissionFeedback({ show: false })}
                        >
                          Dismiss Notice
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
