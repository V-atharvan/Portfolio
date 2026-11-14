export interface SocialItem {
  id: string;
  name: string;
  url: string;
  handle: string;
  ariaLabel: string;
  isAvailable: boolean;
}

export const socialConfig = {
  github: {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/V-atharvan',
    handle: '@V-atharvan',
    ariaLabel: 'Atharva Vaddepalli GitHub profile',
    isAvailable: true,
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/atharva-vaddepalli',
    handle: '/in/atharva-vaddepalli',
    ariaLabel: 'Atharva Vaddepalli LinkedIn profile',
    isAvailable: true,
  },
  email: {
    id: 'email',
    name: 'Email',
    url: 'mailto:atharva.vaddepalli.dev@gmail.com',
    handle: 'atharva.vaddepalli.dev@gmail.com',
    ariaLabel: 'Send email to Atharva Vaddepalli',
    isAvailable: true,
  },
};
