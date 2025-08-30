import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "bolik's blog",
  description:
    'red teaming / malware / adversary emulation, all the bad stuff but good!',
  href: 'https://tlsbollei.github.io/',
  author: 'tlsbollei',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/tlsbollei',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/bol1ktls',
    label: 'Twitter',
  },
  {
    href: 'mailto:samkobolik@icloud.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
