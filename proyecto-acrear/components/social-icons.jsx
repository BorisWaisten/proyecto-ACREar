'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const icons = [
  { icon: faWhatsapp, bg: '#25D366', href: 'https://wa.me/5493853100841', type: 'link'},
  { icon: faEnvelope, bg: '#333', href: 'mailto:info@acrearg.com', type: 'email', email: 'info@acrearg.com' },
  {icon:faInstagram, bg: '#E4405F', href: 'https://www.instagram.com/acre_arg', type: 'link' },
  { icon: faXTwitter, bg: '#000000', href: 'https://x.com/ACREarg', type: 'link' },
  { icon: faLinkedinIn, bg: '#0077b5', href: 'https://www.linkedin.com/in/c%C3%A1mara-argentina-de-econom%C3%ADas-regionales-554041366/', type: 'link' },
];

export default function SocialIcons() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error('Error al copiar email:', err);
    }
  };

  return (
    <div className="relative">
      <ul className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 items-center gap-[0.2rem] mt-2">
        {icons.map((item, i) => (
          <li key={i} className="list-none">
            {item.type === 'email' ? (
              <button
                onClick={() => handleEmailClick(item.email)}
                className="relative w-10 h-10 md:w-[2.5rem] md:h-[2.5rem] lg:w-10 lg:h-10 flex items-center justify-center rounded-full border-4 border-white bg-white overflow-hidden group cursor-pointer"
                title="Copiar email"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-[var(--color-primary)] text-2xl z-10 transition-all duration-500 group-hover:rotate-[360deg] ${
                    copied ? 'text-green-600' : 'group-hover:text-white'
                  }`}
                />
                <span
                  className={`absolute inset-0 top-full group-hover:top-0 transition-all duration-500 z-0 ${
                    copied ? 'top-0 bg-green-600' : ''
                  }`}
                  style={{ backgroundColor: copied ? '#16a34a' : item.bg }}
                />
              </button>
            ) : (
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
            )}
          </li>
        ))}
      </ul>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-bounce">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">¡Email copiado!</span>
          </div>
        </div>
      )}
    </div>
  );
}
