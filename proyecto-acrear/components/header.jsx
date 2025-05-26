'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '../context/language-context';
import { AppBar, Toolbar, Box, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import SvgEn from './animations/svg-language/svg-es';
import SvgEs from './animations/svg-language/svg-en';

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: 'home',    label: lang==='es'?'INICIO':'HOME',       href:'/' },
    { key: 'about',   label: lang==='es'?'NOSOTROS':'ABOUT',    href:'/about' },
    { key: 'services',label: lang==='es'?'SERVICIOS':'SERVICES',href:'/services' },
    { key: 'trading', label: lang==='es'?'PRODUCTOS':'TRADING', href:'/trading' },
    { key: 'contact', label: lang==='es'?'CONTACTO':'CONTACT',  href:'/contact' },
  ];

  const handleLangChange = (newLang) => {
    if ((lang==='es'&&newLang==='en')||(lang==='en'&&newLang==='es')) {
      toggleLang();
    }
  };
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header>
      <AppBar
        position="fixed"
        sx={{
          top: 0, left: 0, width: '100%',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-primary)',
          transform: 'translateZ(0)'
        }}
        elevation={0}
      >
        <Toolbar className="justify-between">
          {/* Logo */}
          <Box className="flex items-center md:pl-18 md:py-2">
            <Link href="/">
              <Image
                src="/logos/logo-acrear.svg"
                alt="Logo"
                width={120} height={60} priority quality={100}
                className="w-24 scale-125 md:w-20 md:scale-[3.2] md:h-20"
              />
            </Link>
          </Box>

          {/* Desktop nav */}
          <Box className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <Button sx={{ color: 'var(--color-accent)', fontWeight: 600 }} disableRipple>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Language buttons + mobile menu toggle */}
          <Box className="flex items-center gap-3 z-55 ">
            <Box className="hidden md:flex gap-3">
              <IconButton onClick={()=>handleLangChange('en')}><SvgEn/></IconButton>
              <IconButton onClick={()=>handleLangChange('es')}><SvgEs/></IconButton>
            </Box>
            <Box className="md:hidden">
              <IconButton
                onClick={toggleMobileMenu}
                sx={{ color: 'var(--color-accent)' }}
              >
                {mobileOpen
                  ? <CloseIcon sx={{ fontSize: 28 }} />
                  : <MenuIcon  sx={{ fontSize: 28 }} />
                }
              </IconButton>
            </Box>
          </Box>
        </Toolbar>

        {/* Mobile menu + backdrop */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black"
                onClick={toggleMobileMenu}
              />

              {/* Sliding menu */}
              <motion.div
                key="menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 w-1/2 rounded-tl-2xl rounded-bl-2xl bg-[var(--color-secondary)] z-50 p-2 flex flex-col"
              >


                  {navItems.map((item) => (
                    <Link key={item.key} href={item.href} onClick={toggleMobileMenu}>
                      <Button
                        fullWidth
                        sx={{ justifyContent: 'flex-start', color:'var(--color-accent)', fontWeight:600 }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}


                {/* Language selectors */}
                <Box className="flex gap-4 mt-auto">
                  <IconButton onClick={()=>handleLangChange('en')}><SvgEn/></IconButton>
                  <IconButton onClick={()=>handleLangChange('es')}><SvgEs/></IconButton>
                </Box>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AppBar>
    </header>
  );
}
