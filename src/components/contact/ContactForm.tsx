import React, { useState } from 'react';
import { Send, AlertCircle, Info, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';
import { socialConfig } from '../../config/social';

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

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionNotice, setSubmissionNotice] = useState<{
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
      setIsSubmitting(true);
      // Simulate real verification check
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionNotice({
          show: true,
          data: { ...formData },
        });
      }, 500);
    }
  };

  const openMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello Atharva,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `${socialConfig.email.url}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-portfolio-surface-subtle rounded-2xl border border-portfolio-border p-6 sm:p-8 shadow-subtle">
      <div className="mb-6 pb-4 border-b border-portfolio-border">
        <h3 className="font-bold text-lg text-portfolio-charcoal">
          Send a Structured Message
        </h3>
        <p className="text-xs text-portfolio-muted mt-1 font-sans">
          Complete the form below. Input is validated client-side to prepare a direct communication draft.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name field */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
              Your Name <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. Alex Mercer"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest transition-colors ${
                errors.name ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
              }`}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
              Email Address <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="e.g. alex@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest transition-colors ${
                errors.email ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Subject field */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
            Subject / Discussion Topic <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            placeholder="e.g. Java Backend Project Inquiry / Technical Collaboration"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest transition-colors ${
              errors.subject ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
            }`}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-portfolio-charcoal mb-1.5">
            Message <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Describe your technical inquiry, project requirements, or discussion topic..."
            className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-portfolio-charcoal placeholder:text-portfolio-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest transition-colors resize-y ${
              errors.message ? 'border-rose-400 focus:border-rose-400' : 'border-portfolio-border'
            }`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
            icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          >
            {isSubmitting ? 'Validating...' : 'Submit Message'}
          </Button>
        </div>
      </form>

      {/* Honest Gateway Notice upon valid submission */}
      {submissionNotice.show && (
        <div className="mt-6 p-5 rounded-xl bg-white border-2 border-portfolio-sage/60 shadow-card animate-fadeIn">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-portfolio-sage-light text-portfolio-forest shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="font-bold text-sm sm:text-base text-portfolio-charcoal">
                Form Validated — Backend Integration Status
              </h4>
              <p className="text-xs sm:text-sm text-portfolio-muted leading-relaxed font-sans">
                Your message has passed all field validations. Because this portfolio is currently hosted as a static client application without an active mail server backend, messages are not stored in an external database.
              </p>
              <p className="text-xs sm:text-sm text-portfolio-charcoal font-medium font-sans">
                You can immediately launch your email client with this pre-filled message to reach Atharva directly:
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
                  onClick={() => setSubmissionNotice({ show: false })}
                >
                  Dismiss Notice
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
