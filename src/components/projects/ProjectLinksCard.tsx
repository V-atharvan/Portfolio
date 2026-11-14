import React from 'react';
import { ExternalLink, Link2, Lock, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectLinksCardProps {
  title: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  demoStatus: 'live' | 'prototype' | 'research_phase' | 'repository_only';
}

export const ProjectLinksCard: React.FC<ProjectLinksCardProps> = ({
  title,
  githubUrl,
  liveDemoUrl,
}) => {
  return (
    <section aria-labelledby="section-links" className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-portfolio-forest font-bold">
        <Link2 className="w-4 h-4" />
        <span id="section-links">Section M: Verified Exploration & Repository Access</span>
      </div>

      <div className="bg-white rounded-xl border border-portfolio-border p-6 sm:p-8 shadow-subtle space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-portfolio-border">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-portfolio-charcoal">
              Project Access & Exploration Links
            </h2>
            <p className="text-xs sm:text-sm text-portfolio-muted mt-0.5">
              Verified public repository artifacts and interactive demonstration instances for {title}.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 shrink-0 self-start sm:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Integrity Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* GitHub Repository Card */}
          <div className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GithubIcon className="w-4 h-4 text-portfolio-forest" />
                <h3 className="font-bold text-xs sm:text-sm text-portfolio-charcoal">
                  Source Code Repository
                </h3>
              </div>
              <p className="text-xs text-portfolio-muted leading-relaxed">
                {githubUrl
                  ? 'Public GitHub repository containing complete source code, documentation, and commit history.'
                  : 'Source repository is currently private during active academic or architectural development.'}
              </p>
            </div>

            <div className="pt-2 border-t border-portfolio-border/70">
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-portfolio-forest text-white text-xs font-semibold hover:bg-portfolio-forest-hover transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-forest w-full justify-center sm:w-auto"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>Explore Repository on GitHub</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-portfolio-border text-xs font-mono text-portfolio-muted">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Private Access / Omitted by Request</span>
                </div>
              )}
            </div>
          </div>

          {/* Live Deployment Card */}
          <div className="p-4 rounded-xl bg-portfolio-surface-subtle border border-portfolio-border flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ExternalLink className="w-4 h-4 text-emerald-700" />
                <h3 className="font-bold text-xs sm:text-sm text-portfolio-charcoal">
                  Live Interactive Prototype
                </h3>
              </div>
              <p className="text-xs text-portfolio-muted leading-relaxed">
                {liveDemoUrl
                  ? 'Interactive cloud deployment accessible directly in modern web browsers.'
                  : 'Backend API service and prototype interfaces are tested locally or within academic sandbox environments.'}
              </p>
            </div>

            <div className="pt-2 border-t border-portfolio-border/70">
              {liveDemoUrl ? (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 w-full justify-center sm:w-auto"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Launch Live Deployed Prototype</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-portfolio-border text-xs font-mono text-portfolio-muted">
                  <span>No Public Web Deployment Available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
