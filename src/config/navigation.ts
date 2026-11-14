export interface NavLinkItem {
  name: string;
  href: string;
  sectionId: string;
  isPhase1Ready?: boolean;
}

export const navigationConfig = {
  brandWordmark: 'ATHARVA.',
  tagline: 'BACKEND & AI/ML',
  links: [
    { name: 'Home', href: '#hero', sectionId: 'hero', isPhase1Ready: true },
    { name: 'About', href: '#about', sectionId: 'about', isPhase1Ready: true },
    { name: 'Skills', href: '#skills', sectionId: 'skills', isPhase1Ready: true },
    { name: 'Projects', href: '#projects', sectionId: 'projects', isPhase1Ready: true },
    { name: 'Experience', href: '#experience', sectionId: 'experience', isPhase1Ready: true },
    { name: 'Achievements', href: '#achievements', sectionId: 'achievements', isPhase1Ready: true },
    { name: 'Education', href: '#education', sectionId: 'education', isPhase1Ready: true },
    { name: 'Contact', href: '#contact', sectionId: 'contact', isPhase1Ready: true },
  ] as NavLinkItem[],
  resumeButtonText: 'Resume',
};
