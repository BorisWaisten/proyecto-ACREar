'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const icons = [
  { icon: faWhatsapp, bg: '#25D366', href: 'https://wa.me/5493853100841'},
  {icon:faInstagram, bg: '#E4405F', href: 'https://www.instagram.com/acre_arg' },
  { icon: faXTwitter, bg: '#000000', href: 'https://x.com/ACREarg' },
  { icon: faEnvelope, bg: '#333', href: 'mailto:info@acrearg.com' },
  { icon: faLinkedinIn, bg: '#0077b5', href: 'https://www.linkedin.com/in/c%C3%A1mara-argentina-de-econom%C3%ADas-regionales-554041366/' },
];

export default function SocialIcons() {
  return (
    <ul className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 items-center gap-2 md:gap-2 lg:gap-6 mt-2">
      {icons.map((item, i) => (
        <li key={i} className="list-none">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-10 h-10 md:w-[2.5rem] md:h-[2.5rem] lg:w-10 lg:h-10 flex items-center justify-center rounded-full border-4 border-white bg-white overflow-hidden group"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-[var(--color-primary)] text-2xl z-10 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]"
            />
            <span
              className="absolute inset-0 top-full group-hover:top-0 transition-all duration-500 z-0"
              style={{ backgroundColor: item.bg }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
